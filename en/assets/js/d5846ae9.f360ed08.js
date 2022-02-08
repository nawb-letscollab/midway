"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4384],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4911:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),l=["components"],o={title:"MNS \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09"},s=void 0,p={unversionedId:"serverless/aliyun_trigger_mns",id:"serverless/aliyun_trigger_mns",title:"MNS \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09",description:"\u8bf7\u52a1\u5fc5\u6ce8\u610f\uff0c\u963f\u91cc\u4e91\u6d88\u606f\u961f\u5217\u4f1a\u5bf9 Topic \u548c Queue \u4ea7\u751f\u4e00\u5b9a\u7684\u8d39\u7528\u3002",source:"@site/docs/serverless/aliyun_trigger_mns.md",sourceDirName:"serverless",slug:"/serverless/aliyun_trigger_mns",permalink:"/en/docs/serverless/aliyun_trigger_mns",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/serverless/aliyun_trigger_mns.md",tags:[],version:"current",frontMatter:{title:"MNS \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09"},sidebar:"serverless",previous:{title:"OSS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09",permalink:"/en/docs/serverless/aliyun_trigger_oss"},next:{title:"\u53d1\u5e03\u5230\u963f\u91cc\u4e91 FC",permalink:"/en/docs/serverless/deploy_to_aliyun"}},c=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[],level:2},{value:"MNS \u89e6\u53d1\u5668\u914d\u7f6e",id:"mns-\u89e6\u53d1\u5668\u914d\u7f6e",children:[],level:2},{value:"\u4e8b\u4ef6\u7ed3\u6784",id:"\u4e8b\u4ef6\u7ed3\u6784",children:[],level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1",children:[],level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",children:[],level:2}],m={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u8bf7\u52a1\u5fc5\u6ce8\u610f\uff0c\u963f\u91cc\u4e91\u6d88\u606f\u961f\u5217\u4f1a\u5bf9 Topic \u548c Queue \u4ea7\u751f\u4e00\u5b9a\u7684\u8d39\u7528\u3002"))),(0,i.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { Provide, Inject, ServerlessTrigger, ServerlessTriggerType } from '@midwayjs/decorator';\nimport { Context, FC } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloAliyunService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.MQ, {\n    topic: 'test-topic',\n    tags: 'bbb',\n  })\n  async handleMNSEvent(event: FC.MNSEvent) {\n    // ...\n  }\n}\n")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u540e\uff0c\u5373\u53ef\u3002"),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6ce8\u610f\uff0c\u5728\u963f\u91cc\u4e91\u4e0b\uff0cmidway faas \u63d0\u4f9b\u7684\u9ed8\u8ba4\u6d88\u606f\u961f\u5217\u683c\u5f0f\u4e3a JSON"))),(0,i.kt)("h2",{id:"mns-\u89e6\u53d1\u5668\u914d\u7f6e"},"MNS \u89e6\u53d1\u5668\u914d\u7f6e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"topic"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u63a5\u6536\u6d88\u606f\u7684 topic")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"tags"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0c\u63cf\u8ff0\u4e86\u8be5\u8ba2\u9605\u4e2d\u6d88\u606f\u8fc7\u6ee4\u7684\u6807\u7b7e\uff08\u6807\u7b7e\u4e00\u81f4\u7684\u6d88\u606f\u624d\u4f1a\u88ab\u63a8\u9001\uff09")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"strategy"),(0,i.kt)("td",{parentName:"tr",align:null},"'BACKOFF_RETRY' ","|","'EXPONENTIAL_DECAY_RETRY'"),(0,i.kt)("td",{parentName:"tr",align:null},"\u8c03\u7528\u51fd\u6570\u7684\u91cd\u8bd5\u7b56\u7565\uff0c\u53ef\u9009\u503c\uff1aBACKOFF_RETRY, EXPONENTIAL_DECAY_RETRY, \u9ed8\u8ba4\u503c\u4e3a: BACKOFF_RETRY")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"region"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009\uff0ctopic \u6240\u5728\u7684 region\uff0c\u5982\u679c\u4e0d\u586b\uff0c\u9ed8\u8ba4\u4e3a\u548c\u51fd\u6570\u4e00\u6837\u7684 region")))),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u76d1\u542c MQ \u6d88\u606f")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"@ServerlessTrigger(ServerlessTriggerType.MQ, {\n  topic: 'test-topic',\n  region: 'cn-shanghai'\n  strategy: 'BACKOFF_RETRY'\n})\n")),(0,i.kt)("h2",{id:"\u4e8b\u4ef6\u7ed3\u6784"},"\u4e8b\u4ef6\u7ed3\u6784"),(0,i.kt)("p",null,"MNS \u6d88\u606f\u8fd4\u56de\u7684\u7ed3\u6784\u5982\u4e0b\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"FC.MNSEvent")," \u7c7b\u578b\u4e2d\u6709\u63cf\u8ff0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Context": "user custom info",\n  "TopicOwner": "1186202104331798",\n  "Message": "hello topic",\n  "Subscriber": "1186202104331798",\n  "PublishTime": 1550216302888,\n  "SubscriptionName": "test-fc-subscibe",\n  "MessageMD5": "BA4BA9B48AC81F0F9C66F6C909C39DBB",\n  "TopicName": "test-topic",\n  "MessageId": "2F5B3C281B283D4EAC694B7425288675"\n}\n')),(0,i.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,i.kt)("p",null,"\u4e8b\u4ef6\u7c7b\u578b\u7684\u51fd\u6570\u672c\u5730\u65e0\u6cd5\u4f7f\u7528 dev \u5f00\u53d1\uff0c\u53ea\u80fd\u901a\u8fc7\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test")," \u8fdb\u884c\u6d4b\u8bd5\u6267\u884c\u3002"),(0,i.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u548c HTTP \u6d4b\u8bd5\u4e0d\u540c\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerlessInstance")," \u83b7\u53d6\u6574\u4e2a\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4ece\u800c\u8c03\u7528\u5230\u7279\u5b9a\u65b9\u6cd5\u6765\u6d4b\u8bd5\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"createMNSEvent")," \u65b9\u6cd5\u5feb\u901f\u521b\u5efa\u5e73\u53f0\u4f20\u5165\u7684\u7ed3\u6784\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { HelloAliyunService } from '../src/function/hello_aliyun';\nimport { createMNSEvent, createInitializeContext } from '@midwayjs/serverless-fc-trigger';\nimport { join } from 'path';\n\ndescribe('test/hello_aliyun.test.ts', () => {\n  let app: Application;\n  let instance: HelloAliyunService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>(join(__dirname, '../'), {\n      initContext: createInitializeContext(),\n    });\n    instance = await app.getServerlessInstance<HelloAliyunService>(HelloAliyunService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from oss trigger', async () => {\n    expect(await instance.handleMNSEvent(createMNSEvent())).toEqual('hello world');\n  });\n});\n")))}u.isMDXComponent=!0}}]);