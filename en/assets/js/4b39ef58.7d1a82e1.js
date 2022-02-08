"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[646],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(k,o(o({ref:t},u),{},{components:n})):a.createElement(k,o({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9333:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return g},default:function(){return x},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return v}});var a=n(7462),r=n(3366),l=n(7294),o=n(3905),i=n(2389),p=n(9443);var s=function(){var e=(0,l.useContext)(p.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(1968),d=n(6010),m="tabItem_vU9c";function c(e){var t,n,r,o=e.lazy,i=e.block,p=e.defaultValue,c=e.values,k=e.groupId,h=e.className,y=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=c?c:y.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,u.lx)(f,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===p?p:null!=(t=null!=p?p:null==(n=y.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=y[0])?void 0:r.props.value;if(null!==N&&!f.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=s(),b=v.tabGroupChoices,x=v.setTabGroupChoices,C=(0,l.useState)(N),T=C[0],w=C[1],H=[],A=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=k){var j=b[k];null!=j&&j!==T&&f.some((function(e){return e.value===j}))&&w(j)}var P=function(e){var t=e.currentTarget,n=H.indexOf(t),a=f[n].value;a!==T&&(A(t),w(a),null!=k&&x(k,a))},G=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=H.indexOf(e.currentTarget)+1;n=H[a]||H[0];break;case"ArrowLeft":var r=H.indexOf(e.currentTarget)-1;n=H[r]||H[H.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,d.Z)("tabs",{"tabs--block":i},h)},f.map((function(e){var t=e.value,n=e.label,r=e.attributes;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return H.push(e)},onKeyDown:G,onFocus:P,onClick:P},r,{className:(0,d.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),o?(0,l.cloneElement)(y.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function k(e){var t=(0,i.Z)();return l.createElement(c,(0,a.Z)({key:String(t)},e))}var h=function(e){var t=e.children,n=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},y=["components"],f={title:"\u63a5\u53e3\u5f00\u53d1"},g=void 0,N={unversionedId:"hooks/api",id:"hooks/api",title:"\u63a5\u53e3\u5f00\u53d1",description:"\u8def\u7531",source:"@site/docs/hooks/api.md",sourceDirName:"hooks",slug:"/hooks/api",permalink:"/en/docs/hooks/api",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/api.md",tags:[],version:"current",frontMatter:{title:"\u63a5\u53e3\u5f00\u53d1"},sidebar:"hooks",previous:{title:"\u4ecb\u7ecd",permalink:"/en/docs/hooks/intro"},next:{title:"Hooks",permalink:"/en/docs/hooks/builtin-hooks"}},v=[{value:"\u8def\u7531",id:"\u8def\u7531",children:[],level:2},{value:"\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff08Context / Request / Response\uff09",id:"\u8bf7\u6c42\u4e0a\u4e0b\u6587context--request--response",children:[],level:2},{value:"Http \u89e6\u53d1\u5668",id:"http-\u89e6\u53d1\u5668",children:[],level:2},{value:"\u8bf7\u6c42 Request",id:"\u8bf7\u6c42-request",children:[{value:"\u4f20\u9012\u53c2\u6570 Data",id:"\u4f20\u9012\u53c2\u6570-data",children:[],level:3},{value:"\u67e5\u8be2\u53c2\u6570 Query",id:"\u67e5\u8be2\u53c2\u6570-query",children:[],level:3},{value:"\u8def\u5f84\u53c2\u6570 Params",id:"\u8def\u5f84\u53c2\u6570-params",children:[],level:3},{value:"\u8bf7\u6c42\u5934 Headers",id:"\u8bf7\u6c42\u5934-headers",children:[],level:3}],level:2},{value:"\u54cd\u5e94 Response",id:"\u54cd\u5e94-response",children:[{value:"\u72b6\u6001\u7801 HttpCode",id:"\u72b6\u6001\u7801-httpcode",children:[],level:3},{value:"\u54cd\u5e94\u5934 SetHeader",id:"\u54cd\u5e94\u5934-setheader",children:[],level:3},{value:"\u91cd\u5b9a\u5411 Redirect",id:"\u91cd\u5b9a\u5411-redirect",children:[],level:3},{value:"\u8fd4\u56de\u503c\u7c7b\u578b ContentType",id:"\u8fd4\u56de\u503c\u7c7b\u578b-contenttype",children:[],level:3}],level:2}],b={toc:v};function x(e){var t=e.components,n=(0,r.Z)(e,y);return(0,o.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u8def\u7531"},"\u8def\u7531"),(0,o.kt)("p",null,"\u5728 Midway Hooks \u4e2d\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks")," \u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Api()")," \u51fd\u6570\u6765\u5feb\u901f\u521b\u5efa\u63a5\u53e3\u3002"),(0,o.kt)("p",null,"Hello World \u793a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/src/hello.ts"',title:'"/src/hello.ts"'},"import {\n  Api,\n  Get,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get(), // Http Path: /api/hello,\n  async () => {\n    return 'Hello World!';\n  }\n);\n")),(0,o.kt)("p",null,"\u4e00\u4e2a API \u63a5\u53e3\u7531\u4ee5\u4e0b\u90e8\u5206\u7ec4\u6210\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Api()"),"\uff1a\u5b9a\u4e49\u63a5\u53e3\u51fd\u6570"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Get(path?: string)"),"\uff1a\u6307\u5b9a Http \u89e6\u53d1\u5668\uff0c\u6307\u5b9a\u8bf7\u6c42\u65b9\u6cd5\u4e3a GET\uff0c\u53ef\u9009\u53c2\u6570 ",(0,o.kt)("inlineCode",{parentName:"li"},"path")," \u4e3a\u63a5\u53e3\u8def\u5f84\uff0c\u4e0d\u6307\u5b9a\u8def\u5f84\u7684\u60c5\u51b5\u4e0b\u4f1a\u6839\u636e",(0,o.kt)("inlineCode",{parentName:"li"},"\u51fd\u6570\u540d + \u6587\u4ef6\u540d"),"\u751f\u6210\u8def\u5f84\uff0c\u9ed8\u8ba4\u5e26\u6709 ",(0,o.kt)("inlineCode",{parentName:"li"},"/api")," \u524d\u7f00"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"Handler: async (...args: any[]) => { ... }"),"\uff1a\u7528\u6237\u903b\u8f91\uff0c\u5904\u7406\u8bf7\u6c42\u5e76\u8fd4\u56de\u7ed3\u679c")),(0,o.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u6307\u5b9a\u8def\u5f84\uff0c\u4f8b\u5b50\u5982\u4e0b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="/src/hello.ts"',title:'"/src/hello.ts"'},"import {\n  Api,\n  Get,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get('/hello'), // Http Path: /hello,\n  async () => {\n    return 'Hello World!';\n  }\n);\n")),(0,o.kt)("h2",{id:"\u8bf7\u6c42\u4e0a\u4e0b\u6587context--request--response"},"\u8bf7\u6c42\u4e0a\u4e0b\u6587\uff08Context / Request / Response\uff09"),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"@midwayjs/hooks")," \u63d0\u4f9b\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext")," \u6765\u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u4ee5\u4f7f\u7528 ",(0,o.kt)("a",{parentName:"p",href:"https://koajs.com/"},"Koa")," \u6846\u67b6\u4e3a\u4f8b\uff0c\u90a3\u4e48 ",(0,o.kt)("inlineCode",{parentName:"p"},"useContext")," \u5c06\u8fd4\u56de Koa \u7684 ",(0,o.kt)("a",{parentName:"p",href:"https://koajs.com/#context"},"Context")," \u5bf9\u8c61\u3002"),(0,o.kt)("p",null,"\u57fa\u7840\u793a\u4f8b\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u8bf7\u6c42 Method \u548c Path")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  useContext,\n} from '@midwayjs/hooks';\nimport { Context } from '@midwayjs/koa';\n\nexport default Api(Get(), async () => {\n  const ctx = useContext<Context>();\n  return {\n    method: ctx.method,\n    path: ctx.path,\n  };\n});\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u8fd4\u56de\u7684 Header")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  useContext,\n} from '@midwayjs/hooks';\n\nexport default Api(Get(), async () => {\n  const ctx = useContext<Context>();\n  ctx.set('X-Powered-By', 'Midway');\n  return 'Hello World!';\n});\n")),(0,o.kt)("p",null,"\u540c\u65f6\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"SetHeader()")," \u6765\u8bbe\u7f6e Header\u3002"),(0,o.kt)("h2",{id:"http-\u89e6\u53d1\u5668"},"Http \u89e6\u53d1\u5668"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"\u89e6\u53d1\u5668"),(0,o.kt)("th",{parentName:"tr",align:null},"\u6ce8\u91ca"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"All(path?: string)")),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7\u6240\u6709 Http Method \u7684\u8bf7\u6c42")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Get(path?: string)")),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7 GET \u8bf7\u6c42")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Post(path?: string)")),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7 POST \u8bf7\u6c42")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Put(path?: string)")),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7 PUT \u8bf7\u6c42")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Delete(path?: string)")),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7 DELETE \u8bf7\u6c42")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Patch(path?: string)")),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7 PATCH \u8bf7\u6c42")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Head(path?: string)")),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7 HEAD \u8bf7\u6c42")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"Options(path?: string)")),(0,o.kt)("td",{parentName:"tr",align:null},"\u63a5\u53d7 OPTIONS \u8bf7\u6c42")))),(0,o.kt)("h2",{id:"\u8bf7\u6c42-request"},"\u8bf7\u6c42 Request"),(0,o.kt)("h3",{id:"\u4f20\u9012\u53c2\u6570-data"},"\u4f20\u9012\u53c2\u6570 Data"),(0,o.kt)("p",null,"\u5728 Midway Hooks \u4e2d\uff0c\u63a5\u53e3\u7684\u5165\u53c2\u5c31\u662f\u58f0\u660e\u51fd\u6570\u7684\u53c2\u6570\u3002"),(0,o.kt)("p",null,"\u57fa\u7840\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Post,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Post(), // Http Path: /api/say,\n  async (name: string) => {\n    return `Hello ${name}!`;\n  }\n);\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u7528\u4e24\u79cd\u65b9\u5f0f\u6765\u8c03\u7528\u63a5\u53e3\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5168\u6808\u9879\u76ee\uff1a\u57fa\u4e8e\u96f6 Api\uff0c\u5bfc\u5165\u63a5\u53e3\u5e76\u8c03\u7528"),(0,o.kt)("li",{parentName:"ol"},"\u624b\u52a8\u8c03\u7528\uff1a\u4f7f\u7528 fetch \u5728 Http \u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"li"},"Handler(...args: any[])")," \u7684\u5165\u53c2\uff0c\u53ef\u4ee5\u5728\u624b\u52a8\u8bf7\u6c42\u65f6\u901a\u8fc7\u8bbe\u7f6e Http Body \u7684 args \u53c2\u6570\u6765\u4f20\u9012\u53c2\u6570\u3002")),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(h,{value:"fullstack",label:"\u5168\u6808\u5e94\u7528\uff08\u96f6 Api\uff09",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import say from './api';\n\nconst response = await say('Midway');\nconsole.log(response); // Hello Midway!\n"))),(0,o.kt)(h,{value:"mannual",label:"\u624b\u52a8\u8c03\u7528",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"fetch('/api/say', {\n  method: 'POST',\n  headers: {\n    'Content-Type': 'application/json',\n  },\n  body: JSON.stringify({\n    args: ['Midway'],\n  }),\n})\n  .then((res) => res.text())\n  .then((res) => console.log(res)); // Hello Midway!\n")))),(0,o.kt)("h3",{id:"\u67e5\u8be2\u53c2\u6570-query"},"\u67e5\u8be2\u53c2\u6570 Query"),(0,o.kt)("p",null,"\u67e5\u8be2\u53c2\u6570\u53ef\u4ee5\u5b9e\u73b0\u5728 URL \u4e0a\u4f20\u9012\u53c2\u6570\u7684\u65b9\u5f0f\uff0c\u4f7f\u7528\u8be5\u529f\u80fd\u65f6\uff0c\u5fc5\u987b\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Query<T>")," \u58f0\u660e\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u63a5\u53e3\u8def\u5f84\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"/articles?page=0&limit=10"),"\uff0c\u53ef\u4ee5\u8fd9\u6837\u5199\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  Query,\n  useContext,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get(),\n  Query<{\n    page: string;\n    limit: string;\n  }>(),\n  async () => {\n    const ctx = useContext();\n    return {\n      page: ctx.query.page,\n      limit: ctx.query.limit,\n    };\n  }\n);\n")),(0,o.kt)("p",null,"\u524d\u7aef\u8c03\u7528"),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(h,{value:"fullstack",label:"\u5168\u6808\u5e94\u7528",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import getArticles from './api';\nconst response = await getArticles({\n  query: { page: '0', limit: '10' },\n});\nconsole.log(response); // { page: '0', limit: '10' }\n"))),(0,o.kt)(h,{value:"mannual",label:"\u624b\u52a8\u8c03\u7528",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"fetch('/api/articles?page=0&limit=10')\n  .then((res) => res.json())\n  .then((res) => console.log(res)); // { page: '0', limit: '10' }\n")))),(0,o.kt)("h3",{id:"\u8def\u5f84\u53c2\u6570-params"},"\u8def\u5f84\u53c2\u6570 Params"),(0,o.kt)("p",null,"\u8def\u5f84\u53c2\u6570\u53ef\u4ee5\u5b9e\u73b0\u52a8\u6001\u8def\u5f84\u548c\u4ece\u8def\u5f84\u4e2d\u83b7\u53d6\u53c2\u6570\u7684\u529f\u80fd\u3002\u4f7f\u7528\u8be5\u529f\u80fd\u65f6\uff0c\u5fc5\u987b\u624b\u52a8\u8bbe\u7f6e\u8def\u5f84\uff0c\u5e76\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Params<T>")," \u58f0\u660e\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u63a5\u53e3\u8def\u5f84\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"/article/100"),"\uff0c\u5e76\u83b7\u53d6 id \u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," \u7684\u503c\uff0c\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { Api, Get, Params, useContext } from '@midwayjs/hooks'\n\nexport default Api(\n  Get('/article/:id'),\n  Params<{ id: string }>(,\n  async () => {\n    const ctx = useContext()\n    return {\n      article: ctx.params.id\n    }\n  }\n)\n")),(0,o.kt)("p",null,"\u524d\u7aef\u8c03\u7528"),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(h,{value:"fullstack",label:"\u5168\u6808\u5e94\u7528",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import getArticle from './api/article';\nconst response = await getArticle({\n  params: { id: '100' },\n});\nconsole.log(response); // { article: '100' }\n"))),(0,o.kt)(h,{value:"mannual",label:"\u624b\u52a8\u8c03\u7528",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"fetch('/article/100')\n  .then((res) => res.json())\n  .then((res) => console.log(res)); // { article: '100' }\n")))),(0,o.kt)("h3",{id:"\u8bf7\u6c42\u5934-headers"},"\u8bf7\u6c42\u5934 Headers"),(0,o.kt)("p",null,"\u8bf7\u6c42\u5934\u53ef\u4ee5\u5b9e\u73b0\u901a\u8fc7 Http Headers \u4f20\u9012\u53c2\u6570\u7684\u529f\u80fd\uff0c\u4f7f\u7528\u8be5\u529f\u80fd\u65f6\uff0c\u5fc5\u987b\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"Headers<T>")," \u58f0\u660e\u7c7b\u578b\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5e0c\u671b\u8bf7\u6c42 ",(0,o.kt)("inlineCode",{parentName:"p"},"/auth"),"\uff0c\u5e76\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"Request Headers")," \u4e2d \u4f20\u9012 token\uff0c\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  Headers,\n  useContext,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get('/auth'),\n  Headers<{ token: string }>(),\n  async () => {\n    const ctx = useContext();\n    return {\n      token: ctx.headers.token,\n    };\n  }\n);\n")),(0,o.kt)("p",null,"\u524d\u7aef\u8c03\u7528"),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(h,{value:"fullstack",label:"\u5168\u6808\u5e94\u7528",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import getAuth from './api/auth';\nconst response = await getAuth({\n  headers: { token: '123456' },\n});\nconsole.log(response); // { token: '123456' }\n"))),(0,o.kt)(h,{value:"mannual",label:"\u624b\u52a8\u8c03\u7528",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"fetch('/auth', {\n  headers: {\n    token: '123456',\n  },\n})\n  .then((res) => res.json())\n  .then((res) => console.log(res)); // { token: '123456' }\n")))),(0,o.kt)("h2",{id:"\u54cd\u5e94-response"},"\u54cd\u5e94 Response"),(0,o.kt)("h3",{id:"\u72b6\u6001\u7801-httpcode"},"\u72b6\u6001\u7801 HttpCode"),(0,o.kt)("p",null,"\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"HttpCode(status: number)")),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(h,{value:"operator",label:"SetHeader",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  HttpCode,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get(),\n  HttpCode(201),\n  async () => {\n    return 'Hello World!';\n  }\n);\n"))),(0,o.kt)(h,{value:"mannual",label:"\u624b\u52a8\u8bbe\u7f6e",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  useContext,\n} from '@midwayjs/hooks';\n\nexport default Api(Get(), async () => {\n  const ctx = useContext<Context>();\n  ctx.status = 201;\n  return 'Hello World!';\n});\n")))),(0,o.kt)("h3",{id:"\u54cd\u5e94\u5934-setheader"},"\u54cd\u5e94\u5934 SetHeader"),(0,o.kt)("p",null,"\u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"SetHeader(key: string, value: string)")),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(h,{value:"operator",label:"SetHeader",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  SetHeader,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get(),\n  SetHeader('X-Powered-By', 'Midway'),\n  async () => {\n    return 'Hello World!';\n  }\n);\n"))),(0,o.kt)(h,{value:"mannual",label:"\u624b\u52a8\u8bbe\u7f6e",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  useContext,\n} from '@midwayjs/hooks';\n\nexport default Api(Get(), async () => {\n  const ctx = useContext<Context>();\n  ctx.set('X-Powered-By', 'Midway');\n  return 'Hello World!';\n});\n")))),(0,o.kt)("h3",{id:"\u91cd\u5b9a\u5411-redirect"},"\u91cd\u5b9a\u5411 Redirect"),(0,o.kt)("p",null,"\u652f\u6301\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"Redirect(url: string, code?: number = 302)")),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(h,{value:"operator",label:"Redirect",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  Redirect,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get('/demo'),\n  Redirect('/hello'),\n  async () => {}\n);\n"))),(0,o.kt)(h,{value:"mannual",label:"\u624b\u52a8\u8bbe\u7f6e",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  useContext,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get('/demo'),\n  async () => {\n    const ctx = useContext<Context>();\n    ctx.redirect('/hello');\n  }\n);\n")))),(0,o.kt)("h3",{id:"\u8fd4\u56de\u503c\u7c7b\u578b-contenttype"},"\u8fd4\u56de\u503c\u7c7b\u578b ContentType"),(0,o.kt)("p",null,"\u652f\u6301\uff1a ",(0,o.kt)("inlineCode",{parentName:"p"},"ContentType(type: string)"),"\u3002"),(0,o.kt)(k,{mdxType:"Tabs"},(0,o.kt)(h,{value:"operator",label:"ContentType",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  ContentType,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get(),\n  ContentType('text/html'),\n  async () => {\n    return '<h1>Hello World!</h1>';\n  }\n);\n"))),(0,o.kt)(h,{value:"mannual",label:"\u624b\u52a8\u8bbe\u7f6e",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import {\n  Api,\n  Get,\n  ContentType,\n} from '@midwayjs/hooks';\n\nexport default Api(\n  Get(),\n  ContentType('text/html'),\n  async () => {\n    return '<h1>Hello World!</h1>';\n  }\n);\n")))))}x.isMDXComponent=!0}}]);