"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8502],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return v}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),v=n,h=d["".concat(s,".").concat(v)]||d[v]||u[v]||l;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3756:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=r(3117),n=r(102),l=(r(7294),r(3905)),i=["components"],o={sidebar_position:3},s="Interact with Ever wallet",p={unversionedId:"develop/integrate/tutorial/interact-ever-wallet",id:"develop/integrate/tutorial/interact-ever-wallet",title:"Interact with Ever wallet",description:"Introduction",source:"@site/../../src/develop/integrate/tutorial/interact-ever-wallet.md",sourceDirName:"develop/integrate/tutorial",slug:"/develop/integrate/tutorial/interact-ever-wallet",permalink:"/develop/integrate/tutorial/interact-ever-wallet",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/integrate/tutorial/interact-ever-wallet.md",tags:[],version:"current",lastUpdatedAt:1658794573,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"How to read Network details",permalink:"/develop/integrate/tutorial/how-to-read-network-details"},next:{title:"Build cross-chain",permalink:"/integrate/build-cross-chain"}},c={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Why Ever wallet",id:"why-ever-wallet",level:2},{value:"Getting Started",id:"getting-started",level:2},{value:"Ever wallet API",id:"ever-wallet-api",level:2},{value:"Everscale inpage provider",id:"everscale-inpage-provider",level:2},{value:"Everscale standalone client",id:"everscale-standalone-client",level:2}],d={toc:u};function v(e){var t=e.components,r=(0,n.Z)(e,i);return(0,l.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"interact-with-ever-wallet"},"Interact with Ever wallet"),(0,l.kt)("h2",{id:"introduction"},"Introduction"),(0,l.kt)("p",null,"Welcome to Ever wallet\u2019s Developer Guide. "),(0,l.kt)("p",null,"Ever wallet enables user interaction and experience with Everscale ecosystem's dApps. It is currently available as a browser extension and as a mobile app on both Android and iOS devices. "),(0,l.kt)("p",null,"The purpose of this documentation is to illustrate how to integrate Ever wallet, initiate transactions and build dApps with Everscale. "),(0,l.kt)("h2",{id:"why-ever-wallet"},"Why Ever wallet"),(0,l.kt)("p",null,"Ever wallet was created by ",(0,l.kt)("a",{parentName:"p",href:"https://broxus.com"},"Broxus developers")," to supply users with a secure and innovative wallet perfectly suited to navigate through multiple services powered by the Everscale network. "),(0,l.kt)("p",null,"It is equipped with the most up-to-date features and easy to comprehend documentation for developers that are looking to build their dApps on the Everscale blockchain. "),(0,l.kt)("h2",{id:"getting-started"},"Getting Started"),(0,l.kt)("p",null,"To develop for Everscale, install Ever wallet in any Chromium and Firefox browser of your choice. "),(0,l.kt)("p",null,"After Ever wallet is installed (make sure you back up your Seed Phrase), you should find that new browser tabs have a  window.__ever object available in the developer console. This is the way your website will interact with Everscale blockchain. "),(0,l.kt)("p",null,"Before proceeding with the documentation, please follow ",(0,l.kt)("a",{parentName:"p",href:"https://medium.com/@andyshpak/login-with-blockchain-everscale-815cb7bb6d01"},(0,l.kt)("strong",{parentName:"a"},"this link"))," in order to get familiar with how to use the Everscale blockchain and Ever wallet for user authorization without creating a transaction on the network."),(0,l.kt)("p",null,"Afterwards, please follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EverscaleGuild/everscale-tutor-web"},(0,l.kt)("strong",{parentName:"a"},"this link"))," in order to get familiar with how to interact with the contract from Ever wallet. "),(0,l.kt)("p",null,"After having studied the material above, please proceed with the ",(0,l.kt)("strong",{parentName:"p"},"Ever wallet API, Everscale Inpage Provider, and Everscale standalone client")," documentation."),(0,l.kt)("h2",{id:"ever-wallet-api"},"Ever wallet API"),(0,l.kt)("p",null,"Ever Wallet API facilitates automatic interaction with the Everscale Blockchain and simplifies the management and transaction processes for Everscale assets.",(0,l.kt)("br",{parentName:"p"}),"\n","The API includes a built-in lite EVER node, support for Ever and TIP-3.1 tokens, a variety of different wallet contracts and REST API to make usage as convenient as possible.",(0,l.kt)("br",{parentName:"p"}),"\n","On the security front, the wallet API also has formidable features, most notably in its support for multi-sig operations."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/broxus/ton-wallet-api"},(0,l.kt)("strong",{parentName:"a"},"Wallet API GitHub repository"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://tonapi.broxus.com/ton/v3/swagger.yaml"},(0,l.kt)("strong",{parentName:"a"},"Swagger"))," ")),(0,l.kt)("h2",{id:"everscale-inpage-provider"},"Everscale inpage provider"),(0,l.kt)("p",null,"Web3-like interface to the Everscale blockchain."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Provider working with extensions.")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Used for sending transactions. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Used for frontend. ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://github.com/broxus/everscale-inpage-provider"},(0,l.kt)("strong",{parentName:"a"},"Installation guide")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("a",{parentName:"p",href:"https://broxus.github.io/everscale-inpage-provider/index.html"},(0,l.kt)("strong",{parentName:"a"},"Inpage provider documentation"))))),(0,l.kt)("p",null,"Also, please follow ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/EverscaleGuild/everscale-tutor-web"},(0,l.kt)("strong",{parentName:"a"},"this link"))," for documentation of an example of Inpage Provider usage as well as wallet connection to DApps. "),(0,l.kt)("h2",{id:"everscale-standalone-client"},"Everscale standalone client"),(0,l.kt)("p",null,"It is advisable to be used in conjunction with Everscale Inpage Provider. "),(0,l.kt)("p",null,"-Used to get data from smart contracts, and subscriptions to state changes.\n-Does not support Send in contracts."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/broxus/everscale-standalone-client"},(0,l.kt)("strong",{parentName:"a"},"Installation guide"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://broxus.github.io/everscale-standalone-client/index.html"},(0,l.kt)("strong",{parentName:"a"},"Standalone client documentation")))),(0,l.kt)("p",null,"For a deeper dive into the Everscale network, please find below links to instruments and services that will be of use while interacting with the Everscale blockchain via Ever wallet. "),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.everscale.network/integrate/products-api"},"APIs of Everscale services")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.flatqube.io/use/getting-started/how-to-get-ever"},"How to get EVERs")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/tonos-cli#tonos-cli"},"TONOS-CLI")," "),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.everos.dev/everdev/"},"EVERDEV")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ever-sdk"},"Ever SDK")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://everos.dev/"},"Ever OS"))))}v.isMDXComponent=!0}}]);