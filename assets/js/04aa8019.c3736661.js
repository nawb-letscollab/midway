"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5161],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},406:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"\u9879\u76ee\u914d\u7f6e"},c=void 0,u={unversionedId:"hooks/config",id:"hooks/config",title:"\u9879\u76ee\u914d\u7f6e",description:"\u6211\u4eec\u901a\u8fc7\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 midway.config.ts \u6765\u914d\u7f6e\u9879\u76ee\uff0c\u5177\u4f53\u7684\u914d\u7f6e\u9879\u5982\u4e0b\u3002",source:"@site/docs/hooks/config.md",sourceDirName:"hooks",slug:"/hooks/config",permalink:"/docs/hooks/config",editUrl:"https://github.com/midwayjs/midway/tree/main/site/docs/hooks/config.md",tags:[],version:"current",frontMatter:{title:"\u9879\u76ee\u914d\u7f6e"},sidebar:"hooks",previous:{title:"\u6d4b\u8bd5",permalink:"/docs/hooks/test"},next:{title:"\u7b80\u6613\u6a21\u5f0f & \u6587\u4ef6\u7cfb\u7edf\u8def\u7531",permalink:"/docs/hooks/file-route"}},p=[{value:"source: string",id:"source-string",children:[],level:2},{value:"routes: RouteConfig[]",id:"routes-routeconfig",children:[],level:2},{value:"dev.ignorePattern: IgnorePattern",id:"devignorepattern-ignorepattern",children:[],level:2},{value:"build.outDir: string",id:"buildoutdir-string",children:[],level:2},{value:"vite: ViteConfig",id:"vite-viteconfig",children:[],level:2}],s={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u6211\u4eec\u901a\u8fc7\u9879\u76ee\u6839\u76ee\u5f55\u4e0b\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"midway.config.ts")," \u6765\u914d\u7f6e\u9879\u76ee\uff0c\u5177\u4f53\u7684\u914d\u7f6e\u9879\u5982\u4e0b\u3002"),(0,i.kt)("h2",{id:"source-string"},"source: string"),(0,i.kt)("p",null,"\u914d\u7f6e\u540e\u7aef\u6839\u76ee\u5f55\uff0c\u7eaf\u670d\u52a1\u63a5\u53e3\u4e0b\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"./src"),"\uff0c\u5168\u6808\u5e94\u7528\u4e0b\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"./src/api"),"\u3002"),(0,i.kt)("h2",{id:"routes-routeconfig"},"routes: RouteConfig[]"),(0,i.kt)("p",null,"\u542f\u7528\u6587\u4ef6\u7cfb\u7edf\u8def\u7531\u5e76\u914d\u7f6e\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002\u5177\u4f53\u683c\u5f0f\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"./file-route"},"\u7b80\u6613\u6a21\u5f0f & \u6587\u4ef6\u7cfb\u7edf\u8def\u7531"),"\u3002"),(0,i.kt)("h2",{id:"devignorepattern-ignorepattern"},"dev.ignorePattern: IgnorePattern"),(0,i.kt)("p",null,"\u914d\u7f6e\u5168\u6808\u5e94\u7528\u4e0b\uff0c\u672c\u5730\u5f00\u53d1\u7684\u54ea\u4e9b\u8bf7\u6c42\u5e94\u8be5\u5ffd\u7565\uff0c\u4e0d\u8fdb\u5165\u670d\u52a1\u7aef\u5904\u7406\u3002"),(0,i.kt)("h2",{id:"buildoutdir-string"},"build.outDir: string"),(0,i.kt)("p",null,"\u914d\u7f6e\u5168\u6808\u5e94\u7528\u7684\u8f93\u51fa\u76ee\u5f55\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"./dist"),"\u3002"),(0,i.kt)("h2",{id:"vite-viteconfig"},"vite: ViteConfig"),(0,i.kt)("p",null,"\u4ec5 ",(0,i.kt)("inlineCode",{parentName:"p"},"import {defineConfig} from '@midwayjs/hooks-kit'")," \u65f6\u53ef\u7528\u3002"),(0,i.kt)("p",null,"\u914d\u7f6e\u5168\u6808\u5e94\u7528\u4e0b Vite \u7684\u914d\u7f6e\uff0c\u5177\u4f53\u914d\u7f6e\u9879\u53c2\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://vitejs.dev/config/"},"Vite"),"\u3002"),(0,i.kt)("p",null,"\u4f8b\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import react from '@vitejs/plugin-react';\nimport { defineConfig } from '@midwayjs/hooks-kit';\n\nexport default defineConfig({\n  vite: {\n    plugins: [react()],\n  },\n});\n")))}f.isMDXComponent=!0}}]);