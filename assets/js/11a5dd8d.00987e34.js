"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1311],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=o,m=s["".concat(u,".").concat(f)]||s[f]||c[f]||a;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},5481:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var n=r(3117),o=r(102),a=(r(7294),r(3905)),i=["components"],l={sidebar_position:3},u="Update Validator",p={unversionedId:"validate/run-validator/update-validator",id:"validate/run-validator/update-validator",title:"Update Validator",description:"Note: You may need to renew your copy of main.ton.dev scripts but do not remove any working files from the previous deployment (for example, configs folder).",source:"@site/../../src/validate/run-validator/update-validator.md",sourceDirName:"validate/run-validator",slug:"/validate/run-validator/update-validator",permalink:"/validate/run-validator/update-validator",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/validate/run-validator/update-validator.md",tags:[],version:"current",lastUpdatedAt:1658794573,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Validator Elections",permalink:"/validate/run-validator/validator-elections"},next:{title:"System Requirements",permalink:"/validate/run-validator/system-requirements"}},d={},c=[],s={toc:c};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"update-validator"},"Update Validator"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," You may need to renew your copy of main.ton.dev scripts but do not remove any working files from the previous deployment (for example, configs folder)."),(0,a.kt)("p",null,"Adjust (specify new commit ID) main.ton.dev/scripts/env.sh:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'export TON_NODE_GITHUB_REPO="https://github.com/tonlabs/ton-labs-node.git"\nexport TON_NODE_GITHUB_COMMIT_ID="master"\nexport TON_NODE_TOOLS_GITHUB_REPO="https://github.com/tonlabs/ton-labs-node-tools.git"\nexport TON_NODE_TOOLS_GITHUB_COMMIT_ID="master"\nexport TONOS_CLI_GITHUB_REPO="https://github.com/tonlabs/tonos-cli.git"\nexport TONOS_CLI_GITHUB_COMMIT_ID="master"\n')),(0,a.kt)("p",null,"Upgrade the node:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"./upgrade.sh 2>&1 | tee ./upgrade.log\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Note:")," the log generated by this command will be located in the main.ton.dev/scripts/ folder and can be useful for troubleshooting."),(0,a.kt)("p",null,"Wait until the node is synced."))}f.isMDXComponent=!0}}]);