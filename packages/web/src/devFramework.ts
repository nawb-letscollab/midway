import {
  IMidwayBootstrapOptions,
  IMidwayContainer,
  IMidwayFramework,
  MidwayFrameworkType,
} from '@midwayjs/core';
import { IMidwayWebConfigurationOptions } from './interface';
import { Application } from 'egg';
import { resolve } from 'path';
import { readFileSync } from 'fs';
import { Server } from 'net';

export class MidwayDevFramework
  implements IMidwayFramework<Application, IMidwayWebConfigurationOptions> {
  public app: Application;
  public configurationOptions: IMidwayWebConfigurationOptions;
  private isTsMode: boolean;
  private server: Server;

  public getApplication(): Application {
    return this.app;
  }

  public getFrameworkType(): MidwayFrameworkType {
    return MidwayFrameworkType.WEB;
  }

  public async run(): Promise<void> {
    // https config
    if (this.configurationOptions.key && this.configurationOptions.cert) {
      this.configurationOptions.key =
        typeof this.configurationOptions.key === 'string'
          ? readFileSync(this.configurationOptions.key as string)
          : this.configurationOptions.key;

      this.configurationOptions.cert =
        typeof this.configurationOptions.cert === 'string'
          ? readFileSync(this.configurationOptions.cert as string)
          : this.configurationOptions.cert;

      this.configurationOptions.ca =
        this.configurationOptions.ca &&
        (typeof this.configurationOptions.ca === 'string'
          ? readFileSync(this.configurationOptions.ca)
          : this.configurationOptions.ca);

      this.server = require('https').createServer(
        this.configurationOptions,
        this.app.callback()
      );
    } else {
      this.server = require('http').createServer(this.app.callback());
    }

    // emit `server` event in app
    this.app.emit('server', this.server);
    // trigger server didReady
    this.app.messenger.emit('egg-ready');

    if (this.configurationOptions.port) {
      new Promise(resolve => {
        this.server.listen(this.configurationOptions.port, () => {
          resolve();
        });
      });
    }
  }

  configure(options: IMidwayWebConfigurationOptions): MidwayDevFramework {
    this.configurationOptions = options;
    return this;
  }

  getApplicationContext(): IMidwayContainer {
    return this.app.getApplicationContext();
  }

  getConfiguration(key?: string): any {
    return this.app.getConfig(key);
  }

  getCurrentEnvironment(): string {
    return this.app.getEnv();
  }

  async initialize(options: Partial<IMidwayBootstrapOptions>) {
    const { start } = require('egg');
    this.app = await start({
      baseDir: options.appDir,
      ignoreWarning: true,
      framework: resolve(__dirname, 'application'),
      plugins: this.configurationOptions.plugins,
      mode: 'single',
      isTsMode: this.isTsMode || true,
    });
  }

  async stop(): Promise<void> {
    await this.app.close();
  }

  public getServer() {
    return this.server;
  }
}
