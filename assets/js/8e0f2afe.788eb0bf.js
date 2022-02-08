"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1806],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(t),m=a,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var c in n)hasOwnProperty.call(n,c)&&(o[c]=n[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6965:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),l=["components"],o={title:"COS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09"},c=void 0,s={unversionedId:"serverless/tencent_trigger_cos",id:"version-2.0.0/serverless/tencent_trigger_cos",title:"COS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09",description:"COS \u662f\u817e\u8baf\u4e91\u7528\u4e8e\u5b58\u50a8\u4e00\u4e9b\u8d44\u6e90\u6587\u4ef6\u7684\u670d\u52a1\u3002",source:"@site/versioned_docs/version-2.0.0/serverless/tencent_trigger_cos.md",sourceDirName:"serverless",slug:"/serverless/tencent_trigger_cos",permalink:"/docs/2.0.0/serverless/tencent_trigger_cos",editUrl:"https://github.com/midwayjs/midway/tree/main/site/versioned_docs/version-2.0.0/serverless/tencent_trigger_cos.md",tags:[],version:"2.0.0",frontMatter:{title:"COS \u89e6\u53d1\u5668\uff08\u5bf9\u8c61\u5b58\u50a8\uff09"},sidebar:"Serverless",previous:{title:"Timer \u89e6\u53d1\u5668\uff08\u5b9a\u65f6\u4efb\u52a1\uff09",permalink:"/docs/2.0.0/serverless/tencent_trigger_timer"},next:{title:"CMQ \u89e6\u53d1\u5668\uff08\u6d88\u606f\u961f\u5217\uff09",permalink:"/docs/2.0.0/serverless/tencent_trigger_cmq"}},p=[{value:"\u4f7f\u7528\u65b9\u5f0f",id:"\u4f7f\u7528\u65b9\u5f0f",children:[],level:2},{value:"OSS \u89e6\u53d1\u5668\u914d\u7f6e",id:"oss-\u89e6\u53d1\u5668\u914d\u7f6e",children:[],level:2},{value:"\u4e8b\u4ef6\u7ed3\u6784",id:"\u4e8b\u4ef6\u7ed3\u6784",children:[],level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1",children:[],level:2},{value:"\u672c\u5730\u5f00\u53d1",id:"\u672c\u5730\u5f00\u53d1-1",children:[],level:2},{value:"\u672c\u5730\u6d4b\u8bd5",id:"\u672c\u5730\u6d4b\u8bd5",children:[],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"COS \u662f\u817e\u8baf\u4e91\u7528\u4e8e\u5b58\u50a8\u4e00\u4e9b\u8d44\u6e90\u6587\u4ef6\u7684\u670d\u52a1\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u65b9\u5f0f"},"\u4f7f\u7528\u65b9\u5f0f"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import {\n  Provide,\n  Inject,\n  ServerlessTrigger,\n  ServerlessTriggerType,\n} from '@midwayjs/decorator';\nimport { Context, SCF } from '@midwayjs/faas';\n\n@Provide()\nexport class HelloTencentService {\n  @Inject()\n  ctx: Context;\n\n  @ServerlessTrigger(ServerlessTriggerType.OS, {\n    bucket: 'cli-appid.cos.ap-beijing.myqcloud.com',\n    events: 'cos:ObjectCreated:*,\n    filter: {\n      prefix: 'filterdir/',\n      suffix: '.jpg',\n    },\n  })\n  async handleCOSEvent(event: SCF.COSEvent) {\n    // xxx\n  }\n}\n")),(0,i.kt)("p",null,"\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run deploy")," \u540e\uff0c\u5373\u53ef\u3002"),(0,i.kt)("h2",{id:"oss-\u89e6\u53d1\u5668\u914d\u7f6e"},"OSS \u89e6\u53d1\u5668\u914d\u7f6e"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"\u5c5e\u6027\u540d"),(0,i.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,i.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bucket"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u5bf9\u8c61\u5b58\u50a8\u7684 bucket \u5730\u5740")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"events"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u51fd\u6570\u6267\u884c\u7684\u4e8b\u4ef6\u540d")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"filter"),(0,i.kt)("td",{parentName:"tr",align:null},"{"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,"prefix: string;\n\xa0 \xa0suffix: string;\n\xa0} | \u5bf9\u8c61\u8fc7\u6ee4\u53c2\u6570\uff0c\u6ee1\u8db3\u8fc7\u6ee4\u6761\u4ef6\u7684 \u5bf9\u8c61\u624d\u53ef\u4ee5\u89e6\u53d1\u51fd\u6570\uff0c\u5305\u542b\u4e00\u4e2a\u914d\u7f6e\u5c5e\u6027 key\uff0c\u8868\u793a\u8fc7\u6ee4\u5668\u652f\u6301\u8fc7\u6ee4\u7684\u5bf9\u8c61\u952e (key)\u3002 |\n| | | |"),(0,i.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u76d1\u542c\u5bf9\u8c61\u521b\u5efa\u4e8b\u4ef6")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"  @ServerlessTrigger(ServerlessTriggerType.OS, {\n    bucket: 'cli-appid.cos.ap-beijing.myqcloud.com',\n    events: 'cos:ObjectCreated:*,\n    filter: {\n      prefix: 'filterdir/',\n      suffix: '.jpg',\n    },\n  })\n")),(0,i.kt)("h2",{id:"\u4e8b\u4ef6\u7ed3\u6784"},"\u4e8b\u4ef6\u7ed3\u6784"),(0,i.kt)("p",null,"COS \u6d88\u606f\u8fd4\u56de\u7684\u7ed3\u6784\u5982\u4e0b\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"SCF.COSEvent")," \u7c7b\u578b\u4e2d\u6709\u63cf\u8ff0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "Records": [\n    {\n      "cos": {\n        "cosSchemaVersion": "1.0",\n        "cosObject": {\n          "url": "http://testpic-1253970026.cos.ap-chengdu.myqcloud.com/testfile",\n          "meta": {\n            "x-cos-request-id": "NWMxOWY4MGFfMjViMjU4NjRfMTUyMV8yNzhhZjM=",\n            "Content-Type": ""\n          },\n          "vid": "",\n          "key": "",\n          "size": 1029\n        },\n        "cosBucket": {\n          "region": "cd",\n          "name": "testpic",\n          "appid": "1253970026"\n        },\n        "cosNotificationId": "unkown"\n      },\n      "event": {\n        "eventName": "cos:ObjectCreated:*",\n        "eventVersion": "1.0",\n        "eventTime": 1545205770,\n        "eventSource": "qcs::cos",\n        "requestParameters": {\n          "requestSourceIP": "192.168.15.101",\n          "requestHeaders": {\n            "Authorization": "****************"\n          }\n        },\n        "eventQueue": "qcs:0:lambda:cd:appid/1253970026:default.printevent.$LATEST",\n        "reservedInfo": "",\n        "reqid": 179398952\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1"},"\u672c\u5730\u5f00\u53d1"),(0,i.kt)("h2",{id:"\u672c\u5730\u5f00\u53d1-1"},"\u672c\u5730\u5f00\u53d1"),(0,i.kt)("p",null,"\u4e8b\u4ef6\u7c7b\u578b\u7684\u51fd\u6570\u672c\u5730\u65e0\u6cd5\u4f7f\u7528 dev \u5f00\u53d1\uff0c\u53ea\u80fd\u901a\u8fc7\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run test")," \u8fdb\u884c\u6d4b\u8bd5\u6267\u884c\u3002"),(0,i.kt)("h2",{id:"\u672c\u5730\u6d4b\u8bd5"},"\u672c\u5730\u6d4b\u8bd5"),(0,i.kt)("p",null,"\u548c HTTP \u6d4b\u8bd5\u4e0d\u540c\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"createFunctionApp")," \u521b\u5efa\u51fd\u6570 app\uff0c\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"getServerlessInstance")," \u83b7\u53d6\u6574\u4e2a\u7c7b\u7684\u5b9e\u4f8b\uff0c\u4ece\u800c\u8c03\u7528\u5230\u7279\u5b9a\u65b9\u6cd5\u6765\u6d4b\u8bd5\u3002"),(0,i.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7 ",(0,i.kt)("inlineCode",{parentName:"p"},"createCOSEvent")," \u65b9\u6cd5\u5feb\u901f\u521b\u5efa\u5e73\u53f0\u4f20\u5165\u7684\u7ed3\u6784\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { createFunctionApp, close } from '@midwayjs/mock';\nimport { Framework, Application } from '@midwayjs/serverless-app';\nimport { HelloTencentService } from '../src/function/hello_tencent';\nimport { createCOSEvent } from '@midwayjs/serverless-scf-trigger';\nimport { join } from 'path';\n\ndescribe('test/hello_tencent.test.ts', () => {\n  let app: Application;\n  let instance: HelloTencentService;\n\n  beforeAll(async () => {\n    // create app\n    app = await createFunctionApp<Framework>();\n    instance = await app.getServerlessInstance<HelloTencentService>(HelloTencentService);\n  });\n\n  afterAll(async () => {\n    await close(app);\n  });\n\n  it('should get result from timer trigger', async () => {\n    expect(await instance.handleCOSEvent(createCOSEvent())).toEqual('hello world');\n  });\n});\n")))}d.isMDXComponent=!0}}]);