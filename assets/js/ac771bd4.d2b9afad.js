"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[1153],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return v}});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(o),v=n,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||a;return o?r.createElement(m,l(l({ref:t},p),{},{components:o})):r.createElement(m,l({ref:t},p))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},7321:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return v},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=o(3117),n=o(102),a=(o(7294),o(3905)),l=["components"],i={sidebar_position:0},s="Overview",c={unversionedId:"develop/tools/overview",id:"develop/tools/overview",title:"Overview",description:"Introduction",source:"@site/../../src/develop/tools/overview.md",sourceDirName:"develop/tools",slug:"/develop/tools/overview",permalink:"/develop/tools/overview",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/overview.md",tags:[],version:"current",lastUpdatedAt:1658794573,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Tools",permalink:"/develop/tools"},next:{title:"EverDev",permalink:"/api-tools/everdev"}},p={},u=[{value:"Introduction",id:"introduction",level:2},{value:"Tools",id:"tools",level:2},{value:"Set up Development Environment",id:"set-up-development-environment",level:3},{value:"Interaction with blockchain",id:"interaction-with-blockchain",level:3},{value:"Tools for contract developers:",id:"tools-for-contract-developers",level:3}],d={toc:u};function v(e){var t=e.components,o=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Before you start developing or integrating anything into Everscale, we would like to tell you about the tools and environment that you will use in your work."),(0,a.kt)("p",null,"First of all, it is worth noting that Everscale is really a decentralized blockchain, not only from a technical point of view, but also from a management side, so the key tools and approaches to development may differ from different teams, technical contributors on the network."),(0,a.kt)("p",null,"At the moment, there are two active companies of technical contributors in Everscale network:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://everx.dev/about"},"EverX")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://broxus.com/"},"Broxus")),(0,a.kt)("p",null,"And it is their solutions and tools that you will use when developing, while you will have every opportunity to write your own solutions as well, if necessary or desired."),(0,a.kt)("h2",{id:"tools"},"Tools"),(0,a.kt)("h3",{id:"set-up-development-environment"},"Set up Development Environment"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/everdev"},"everdev"),"(by EverX) - CLI tool and Javascript package that helps set up all the core developer tools and work with Everscale blockchain from a single interface")),(0,a.kt)("h3",{id:"interaction-with-blockchain"},"Interaction with blockchain"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/develop/tools/tonos-cli"},"TONOS CLI"),"(by EverX) - is a multi-platform command line interface for Ever OS. It allows you to work with keys and seed phrases, deploy contracts, call any of their methods, generate and broadcast messages. It supports specific commands for DeBot(\u0442\u0435\u043a\u0441\u0442-\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 DeBot), DePools(\u0442\u0435\u043a\u0441\u0442-\u0441\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443 DePools \u0432 Validate) and Multisig contracts, as well as a number of supplementary functions.")),(0,a.kt)("h3",{id:"tools-for-contract-developers"},"Tools for contract developers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/everdev"},"everdev"),"(by EverX) - helps manage keys and networks and local testing blockchain, and compile, deploy and call contracts from CLI or from Javascript with a convenient API. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/evernode-se"},"Evernode-SE")," - local blockchain for contract and Dapp testing, exposing GraphQL API. Can be managed from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/everdev"},"everdev"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/tools/locklift"},"Locklift"),"(by Broxus) - development environment, analogous to Hardhat.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/tools/everdev/command-line-interface/testsuite4"},"TestSuite4"),"(by EverX) - a framework designed to simplify development and testing of Everscale Contracts. It contains a lightweight blockchain emulator making it easy to develop contracts in a TDD-friendly style.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/develop/tools/ever-bytie"},"Ever.bytie.moe"),"(by Broxus) - smart contracts interaction playground."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,a.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}v.isMDXComponent=!0}}]);