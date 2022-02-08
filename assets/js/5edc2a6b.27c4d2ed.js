"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[928],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(k,i(i({ref:t},u),{},{components:n})):a.createElement(k,i({ref:t},u))}));function d(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var s=2;s<r;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2225:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(7462),l=n(3366),r=(n(7294),n(3905)),i=["components"],o={title:"\u7b80\u6613\u6a21\u5f0f & \u6587\u4ef6\u7cfb\u7edf\u8def\u7531"},p=void 0,s={unversionedId:"hooks/file-route",id:"hooks/file-route",title:"\u7b80\u6613\u6a21\u5f0f & \u6587\u4ef6\u7cfb\u7edf\u8def\u7531",description:"\u7b80\u6613\u6a21\u5f0f",source:"@site/docs/hooks/file-route.md",sourceDirName:"hooks",slug:"/hooks/file-route",permalink:"/docs/hooks/file-route",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/file-route.md",tags:[],version:"current",frontMatter:{title:"\u7b80\u6613\u6a21\u5f0f & \u6587\u4ef6\u7cfb\u7edf\u8def\u7531"},sidebar:"hooks",previous:{title:"\u9879\u76ee\u914d\u7f6e",permalink:"/docs/hooks/config"},next:{title:"\u9759\u6001\u7c7b\u578b\u5b89\u5168 + \u8fd0\u884c\u65f6\u5b89\u5168",permalink:"/docs/hooks/safe"}},u=[{value:"\u7b80\u6613\u6a21\u5f0f",id:"\u7b80\u6613\u6a21\u5f0f",children:[{value:"Get \u8bf7\u6c42",id:"get-\u8bf7\u6c42",children:[],level:3},{value:"Post \u8bf7\u6c42",id:"post-\u8bf7\u6c42",children:[],level:3},{value:"\u901a\u8fc7 <code>Api()</code> \u521b\u5efa\u8def\u7531",id:"\u901a\u8fc7-api-\u521b\u5efa\u8def\u7531",children:[],level:3}],level:2},{value:"\u6587\u4ef6\u7cfb\u7edf\u8def\u7531",id:"\u6587\u4ef6\u7cfb\u7edf\u8def\u7531",children:[{value:"Index \u8def\u7531",id:"index-\u8def\u7531",children:[],level:3},{value:"\u5d4c\u5957\u8def\u7531",id:"\u5d4c\u5957\u8def\u7531",children:[],level:3},{value:"\u5bfc\u51fa\u65b9\u6cd5\u4e0e\u5bf9\u5e94\u8def\u7531",id:"\u5bfc\u51fa\u65b9\u6cd5\u4e0e\u5bf9\u5e94\u8def\u7531",children:[],level:3},{value:"\u901a\u914d\u8def\u7531",id:"\u901a\u914d\u8def\u7531",children:[],level:3},{value:"\u8def\u5f84\u53c2\u6570",id:"\u8def\u5f84\u53c2\u6570",children:[],level:3}],level:2}],m={toc:u};function c(e){var t=e.components,n=(0,l.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u7b80\u6613\u6a21\u5f0f"},"\u7b80\u6613\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5728 Midway Hooks \u4e2d\uff0c\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u6613\u6a21\u5f0f\uff0c\u53ef\u4ee5\u4f7f\u7528\u7eaf\u51fd\u6570\u6765\u5feb\u901f\u521b\u5efa\u63a5\u53e3\u3002"),(0,r.kt)("p",null,"\ud83d\udce2 \u6ce8\u610f\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7b80\u6613\u6a21\u5f0f\u9700\u542f\u7528\u6587\u4ef6\u8def\u7531\u7cfb\u7edf\uff0c\u9700\u8981\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"midway.config.js")," \u4e2d\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"routes")," \u914d\u7f6e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7eaf\u51fd\u6570\u81ea\u52a8\u751f\u6210\u7684\u8def\u7531\u4ec5\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"GET")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"POST")," \u65b9\u6cd5\uff0c\u4e14\u5168\u6808\u5e94\u7528\u4e2d\uff0c\u4e0d\u652f\u6301\u4f20\u9012 ",(0,r.kt)("inlineCode",{parentName:"li"},"Query / Params / Header")," \u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u7b80\u6613\u6a21\u5f0f\u4e0b\uff0c\u4ecd\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"Api()")," \u5b9a\u4e49\u8def\u7531\uff0c\u4f46\u4e0d\u652f\u6301\u624b\u52a8\u5b9a\u4e49\u8def\u5f84")),(0,r.kt)("h3",{id:"get-\u8bf7\u6c42"},"Get \u8bf7\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useContext } from '@midwayjs/hooks';\n\nexport async function getPath() {\n  // Get HTTP request context by Hooks\n  const ctx = useContext();\n  return ctx.path;\n}\n")),(0,r.kt)("p",null,"\u4e00\u4f53\u5316\u8c03\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { getPath } from './api/lambda';\nconst path = await getPath();\nconsole.log(path); // /api/getPath\n")),(0,r.kt)("p",null,"\u624b\u52a8\u8c03\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fetcher\n  .get('/api/getPath')\n  .then((res) => {\n    console.log(res.data); // /api/getPath\n  });\n")),(0,r.kt)("h3",{id:"post-\u8bf7\u6c42"},"Post \u8bf7\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { useContext } from '@midwayjs/hooks';\n\nexport async function post(\n  name: string\n) {\n  const ctx = useContext();\n\n  return {\n    message: `Hello ${name}!`,\n    method: ctx.method,\n  };\n}\n")),(0,r.kt)("p",null,"\u4e00\u4f53\u5316\u8c03\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { post } from './api/lambda';\nconst response = await post('Midway');\nconsole.log(response.data); // { message: 'Hello Midway!', method: 'POST' }\n")),(0,r.kt)("p",null,"\u624b\u52a8\u8c03\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fetch('/api/post', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    args: ['Midway'],\n  }),\n}).then((res) => {\n  console.log(res.data); // { message: 'Hello Midway!', method: 'POST' }\n});\n")),(0,r.kt)("h3",{id:"\u901a\u8fc7-api-\u521b\u5efa\u8def\u7531"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"h3"},"Api()")," \u521b\u5efa\u8def\u7531"),(0,r.kt)("p",null,"\u7b80\u6613\u6a21\u5f0f\u4e0b\uff0c\u6211\u4eec\u4ecd\u652f\u6301\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"Api()")," \u521b\u5efa\u8def\u7531\u3002"),(0,r.kt)("p",null,"\u65e0\u6548\u7684\u4f8b\u5b50\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"Api(Get('/specify_path'))"),"\uff0c\u7b80\u6613\u6a21\u5f0f\u4e0b\u4e0d\u652f\u6301\u624b\u52a8\u6307\u5b9a\u8def\u5f84\u3002"),(0,r.kt)("p",null,"\u6709\u6548\u7684\u4f8b\u5b50\uff0c\u5bfc\u51fa\u4e86\u4e24\u4e2a\u8def\u7531\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n} from '@midwayjs/hooks';\nimport { useContext } from '@midwayjs/hooks';\n\nexport async function getPath() {\n  // Get HTTP request context by Hooks\n  const ctx = useContext();\n  return ctx.path;\n}\n\nexport default Api(Get(), async () => {\n  return 'Hello Midway!';\n});\n")),(0,r.kt)("h2",{id:"\u6587\u4ef6\u7cfb\u7edf\u8def\u7531"},"\u6587\u4ef6\u7cfb\u7edf\u8def\u7531"),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"midway.config.js")," \u4e2d\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"routes")," \u914d\u7f6e\u5373\u542f\u7528\u6587\u4ef6\u8def\u7531\u7cfb\u7edf + \u7b80\u6613\u6a21\u5f0f\u3002"),(0,r.kt)("p",null,"\u914d\u7f6e\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { defineConfig } from '@midwayjs/hooks';\n\nexport default defineConfig({\n  source: './src/apis',\n  routes: [\n    {\n      baseDir: 'lambda',\n      basePath: '/api',\n    },\n  ],\n});\n")),(0,r.kt)("p",null,"\u5b57\u6bb5\u89e3\u91ca\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"source: \u540e\u7aef\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"./src/apis"),"\uff0c\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"./src/functions")," \u7b49\u81ea\u5b9a\u4e49\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ul"},"routes: \u8def\u7531\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a\u6570\u7ec4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"baseDir: \u51fd\u6570\u6587\u4ef6\u5939\uff0c\u6587\u4ef6\u5939\u4e0b\u4efb\u610f ",(0,r.kt)("inlineCode",{parentName:"li"},".ts")," \u6587\u4ef6\u5bfc\u51fa\u7684\u5f02\u6b65\u51fd\u6570\u90fd\u4f1a\u751f\u6210\u4e3a Api \u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"basePath: \u751f\u6210\u7684 Api \u5730\u5740\u524d\u7f00")))),(0,r.kt)("h3",{id:"index-\u8def\u7531"},"Index \u8def\u7531"),(0,r.kt)("p",null,"\u6211\u4eec\u4f1a\u5c06\u76ee\u5f55\u4e0b ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," \u6587\u4ef6\uff0c\u4f5c\u4e3a\u6839\u8def\u7531\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lambda/index.ts")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lambda/about/index.ts")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/about"))),(0,r.kt)("h3",{id:"\u5d4c\u5957\u8def\u7531"},"\u5d4c\u5957\u8def\u7531"),(0,r.kt)("p",null,"\u5d4c\u5957\u7684\u6587\u4ef6\u4e5f\u5c06\u751f\u6210\u5d4c\u5957\u7684\u8def\u7531",(0,r.kt)("br",null)),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lambda/about.ts")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/about")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lambda/blog/index.ts")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/blog")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lambda/about/contact.ts")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/about/contact"))),(0,r.kt)("h3",{id:"\u5bfc\u51fa\u65b9\u6cd5\u4e0e\u5bf9\u5e94\u8def\u7531"},"\u5bfc\u51fa\u65b9\u6cd5\u4e0e\u5bf9\u5e94\u8def\u7531"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u5bfc\u51fa\u7684\u65b9\u6cd5\u5219\u4f1a\u751f\u6210\u4e3a\u6839\u8def\u5f84\uff0c\u800c\u5177\u540d\u65b9\u6cd5\u5219\u4f1a\u5728\u8def\u5f84\u4e0a\u62fc\u63a5\u51fd\u6570\u540d\u3002"),(0,r.kt)("p",null,"\u5728\u6b64\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"/lambda/about.ts")," \u4e3a\u4f8b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"export default () => {}")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/about")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"export function contact ()")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/about/contact"))),(0,r.kt)("h3",{id:"\u901a\u914d\u8def\u7531"},"\u901a\u914d\u8def\u7531"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u751f\u6210\u901a\u914d\u7b26\u8def\u7531\uff0c\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"/api/*")," \uff0c\u7528\u4e8e\u5339\u914d /api\u3001/api/about\u3001/api/about/a/b/c \u7b49\u3002\u6587\u4ef6\u540d\u6309 ",(0,r.kt)("inlineCode",{parentName:"p"},"[...file]")," \u547d\u540d\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\ud83d\udce2 \u63a8\u8350\u5728\u901a\u914d\u8def\u7531\u4e2d\uff0c\u53ea\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"export default")," \u65b9\u6cd5\u5bfc\u51fa\u51fd\u6570\uff0c\u4ece\u800c\u907f\u514d\u4e0d\u5fc5\u8981\u7684\u8def\u7531\u51b2\u7a81"),(0,r.kt)("p",null,"\u793a\u4f8b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lambda/[...index].ts")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lambda/[...user].ts")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/user/*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lambda/about/[...contact].ts")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/about/contact/*"))),(0,r.kt)("h3",{id:"\u8def\u5f84\u53c2\u6570"},"\u8def\u5f84\u53c2\u6570"),(0,r.kt)("p",null,"\u5982\u679c\u9700\u8981\u751f\u6210\u52a8\u6001\u8def\u5f84\u53c2\u6570\uff0c\u6587\u4ef6\u540d\u6309 ",(0,r.kt)("inlineCode",{parentName:"p"},"[file]")," \u683c\u5f0f\u547d\u540d\u5373\u53ef\u3002"),(0,r.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lambda/[name]/project.ts")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/about/:name/project"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/about/midwayjs/project -> { name: 'midwayjs' }"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/lambda/[type]/[page].ts")," \u2192 ",(0,r.kt)("inlineCode",{parentName:"li"},"/api/about/:type/:page"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/blog/1 -> { type: 'blog', page: '1' }"),(0,r.kt)("li",{parentName:"ul"},"/articles/3 -> { type: 'articles', page: '3' }")))),(0,r.kt)("p",null,"\u4f7f\u7528\u8def\u5f84\u53c2\u6570\u65f6\uff0c\u540e\u7aef\u63a5\u53e3\u4ec5\u652f\u6301\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Api()")," \u5f00\u53d1\uff0c\u5e76\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Params<T>")," \u6807\u6ce8\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"p"},"/lambda/[name]/project.ts")," \u4e3a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// lambda/[name]/project.ts\nimport {\n  Api,\n  Get,\n  Params,\n  useContext,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get(),\n  Params<{ name: string }>(),\n  async () => {\n    const ctx = useContext();\n    return {\n      name: ctx.params.name,\n    };\n  }\n);\n")),(0,r.kt)("p",null,"\u4e00\u4f53\u5316\u8c03\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import getProject from './api/[name]/project';\nconst response = await getProject({\n  params: { name: 'midwayjs' },\n});\nconsole.log(response); // { name: 'midwayjs' }\n")),(0,r.kt)("p",null,"\u624b\u52a8\u8c03\u7528\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"fetch('/api/about/midwayjs/project')\n  .then((res) => res.json())\n  .then((res) => console.log(res)); // { name: 'midwayjs' }\n")))}c.isMDXComponent=!0}}]);