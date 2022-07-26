"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8793],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,m=d["".concat(c,".").concat(p)]||d[p]||h[p]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1359:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return p},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return h}});var n=r(3117),a=r(102),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:3},c="Terminology",l={unversionedId:"learn/terminology",id:"learn/terminology",title:"Terminology",description:"Please see below the definitions of the most used terms on the Everscale network.",source:"@site/../../src/learn/02-terminology.md",sourceDirName:"learn",slug:"/learn/terminology",permalink:"/learn/terminology",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/learn/02-terminology.md",tags:[],version:"current",lastUpdatedAt:1658794573,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Bridges",permalink:"/learn/everscale-overview/bridges"},next:{title:"Decentralization",permalink:"/learn/decentralization"}},u={},h=[{value:"Everscale",id:"everscale",level:3},{value:"Blockchain",id:"blockchain",level:3},{value:"Ever",id:"ever",level:3},{value:"TVM",id:"tvm",level:3},{value:"Nodes",id:"nodes",level:3},{value:"Accounts",id:"accounts",level:3},{value:"Transactions",id:"transactions",level:3},{value:"Blocks",id:"blocks",level:3},{value:"Smart contracts",id:"smart-contracts",level:3},{value:"Shards",id:"shards",level:3}],d={toc:h};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"terminology"},"Terminology"),(0,o.kt)("p",null,"Please see below the definitions of the most used terms on the Everscale network. "),(0,o.kt)("h3",{id:"everscale"},"Everscale"),(0,o.kt)("p",null,"Decentralised blockchain network that comprises many leading applications and services. Everscale has powerful developer tools, such as compilers for Solidity and C++, API, an SDK that includes client libraries for 13 programming languages and other convenient instruments designed for developers to build outstanding blockchain applications. "),(0,o.kt)("h3",{id:"blockchain"},"Blockchain"),(0,o.kt)("p",null,"The chain of all blocks that have been added to the Everscale network throughout the history of the network. Each block has a reference to the previous block. Thus, it permits us to maintain a sequence of all blocks in the chain. "),(0,o.kt)("h3",{id:"ever"},"Ever"),(0,o.kt)("p",null,"Ever is the native cryptocurrency of Everscale. Besides being an investment opportunity for users, it has multiple uses inside as well as outside the Everscale network."),(0,o.kt)("h3",{id:"tvm"},"TVM"),(0,o.kt)("p",null,"TVM is the virtual machine used to execute smart-contract code in the masterchain and in the basic workchain.",(0,o.kt)("br",{parentName:"p"}),"\n","Any user can request the execution of arbitrary code on the TVM. "),(0,o.kt)("p",null,"For more information about TVM please consult ",(0,o.kt)("a",{parentName:"p",href:"/arch/tvm"},"this page")),(0,o.kt)("h3",{id:"nodes"},"Nodes"),(0,o.kt)("p",null,"Nodes are ordinary computers on which the Everscale program is running. Each node is connected to other nodes, which allows to come to a consensus, which is a special mechanism by which information about the correctness of transactions on the network is checked. The Everscale network is the aggregate of all Everscale nodes and their communications."),(0,o.kt)("h3",{id:"accounts"},"Accounts"),(0,o.kt)("p",null,"This is the place for storing Ever. Besides storage, users with an account are able to deposit and transfer Ever. The account record stores account address and account balance. Accounts are ultimately stored in TVM. For more information about Accounts please consult ",(0,o.kt)("a",{parentName:"p",href:"/arch/accounts"},"this page"),"."),(0,o.kt)("h3",{id:"transactions"},"Transactions"),(0,o.kt)("p",null,"A transaction is the result of a contract execution. In general, a transaction is generated with one incoming message (external or internal) and can generate several outcoming messages (external or internal) as a result. Any user can broadcast a transaction request to the Everscale network from a node. "),(0,o.kt)("h3",{id:"blocks"},"Blocks"),(0,o.kt)("p",null,"There is a very high number of transactions on the Everscale network. Due to this, transactions are grouped in blocks. Each block counts hundreds of transactions. "),(0,o.kt)("h3",{id:"smart-contracts"},"Smart contracts"),(0,o.kt)("p",null,"SMs are a kind of algorithm, or program that runs on Everscale or other blockchains, like Ethereum, which was the first to come up with the idea of smart contracts. They work in accordance to a prescribed set of rules that are programmed by developers. When all conditions prescribed in the contract are met, the contract is executed."),(0,o.kt)("p",null,"For more information about smart contracts please consult ",(0,o.kt)("a",{parentName:"p",href:"/develop/smart-contract/getting-started"},"this page")),(0,o.kt)("h3",{id:"shards"},"Shards"),(0,o.kt)("p",null,"Shards in Everscale are used for solving the classical issue faced by blockchains, which is low throughput. Sharding is merely partition of data in a database, in our case in the Everscale blockchain.",(0,o.kt)("br",{parentName:"p"}),"\n","Due to sharding, Everscale achieved one of the highest transactions per second rate available out there. For detailed information about how sharding works please consult ",(0,o.kt)("a",{parentName:"p",href:"/develop/from-another-platform/comparison-with-ethereum"},"this page"),"."))}p.isMDXComponent=!0}}]);