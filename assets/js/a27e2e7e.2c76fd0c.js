"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[8880],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),h=r,f=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2109:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),l=["components"],i={sidebar_position:0},c="Quick start",s={unversionedId:"develop/tools/everdev/guides/quick-start",id:"develop/tools/everdev/guides/quick-start",title:"Quick start",description:"Guide overview",source:"@site/../../src/develop/tools/everdev/guides/quick-start.md",sourceDirName:"develop/tools/everdev/guides",slug:"/develop/tools/everdev/guides/quick-start",permalink:"/develop/tools/everdev/guides/quick-start",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/tools/everdev/guides/quick-start.md",tags:[],version:"current",lastUpdatedAt:1658794573,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/everdev/guides"},next:{title:"How to work with contracts",permalink:"/develop/tools/everdev/guides/work-with-contracts"}},d={},u=[{value:"Guide overview",id:"guide-overview",level:2},{value:"Install everdev",id:"install-everdev",level:2},{value:"Create helloWorld contract",id:"create-helloworld-contract",level:2},{value:"Compile it",id:"compile-it",level:2},{value:"Run Local Blockchain",id:"run-local-blockchain",level:2},{value:"Configure default network",id:"configure-default-network",level:2},{value:"Configure Giver wallet that will sponsor deploy operation",id:"configure-giver-wallet-that-will-sponsor-deploy-operation",level:2},{value:"Generate the keys for contract ownership",id:"generate-the-keys-for-contract-ownership",level:2},{value:"Calculate the contract address",id:"calculate-the-contract-address",level:2},{value:"Deploy",id:"deploy",level:2},{value:"View contract information with Explorer",id:"view-contract-information-with-explorer",level:2},{value:"Explore contract information with GraphQL",id:"explore-contract-information-with-graphql",level:2},{value:"Run on-chain",id:"run-on-chain",level:2},{value:"Run a getter function",id:"run-a-getter-function",level:2},{value:"Transfer some tokens",id:"transfer-some-tokens",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:u};function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start"},"Quick start"),(0,o.kt)("h2",{id:"guide-overview"},"Guide overview"),(0,o.kt)("p",null,"This guide will help you get started with such essensial Everscale tools as:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/develop/tools/everdev/command-line-interface/solidity"},"Solidity Compiler")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"../../everdev/command-line-interface/evernode-platform-startup-edition-se"},"Local Blockchain")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ever.live"},"Everscale Blockchain Explorer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.everos.dev/ever-sdk/reference/ever-os-api"},"GraphQL API"))),(0,o.kt)("p",null,"You will learn how to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create and compile your first Solidity contract"),(0,o.kt)("li",{parentName:"ul"},"Run Local blockchain for testing"),(0,o.kt)("li",{parentName:"ul"},"Deploy your first contract"),(0,o.kt)("li",{parentName:"ul"},"Run it on-chain"),(0,o.kt)("li",{parentName:"ul"},"Run a getter-function")),(0,o.kt)("h2",{id:"install-everdev"},"Install everdev"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"everdev")," \u2014 single interface to access all the developer tools."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install -g everdev\n")),(0,o.kt)("p",null,"If you experience any problems with installation, check out our ",(0,o.kt)("a",{parentName:"p",href:"/develop/tools/everdev/troubleshooting"},"troubleshooting section"),"."),(0,o.kt)("h2",{id:"create-helloworld-contract"},"Create helloWorld contract"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev sol create helloWorld\n")),(0,o.kt)("h2",{id:"compile-it"},"Compile it"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev sol compile helloWorld.sol\n")),(0,o.kt)("h2",{id:"run-local-blockchain"},"Run Local Blockchain"),(0,o.kt)("admonition",{title:"Attention",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Docker should be running.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev se start\n")),(0,o.kt)("h2",{id:"configure-default-network"},"Configure default network"),(0,o.kt)("p",null,"Set Local Blockchain ",(0,o.kt)("a",{parentName:"p",href:"/develop/tools/evernode-se"},"SE (Simple Emulator)")," as the default network:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev network default se\n")),(0,o.kt)("h2",{id:"configure-giver-wallet-that-will-sponsor-deploy-operation"},"Configure Giver wallet that will sponsor deploy operation"),(0,o.kt)("p",null,"Here we use address and private key of ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/tonlabs/evernode-se/tree/master/contracts/giver_v2"},"SE High Load Giver"),"."),(0,o.kt)("admonition",{title:"Attention!",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"This giver is available only in SE. If you work in ",(0,o.kt)("inlineCode",{parentName:"p"},"DevNet")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"MainNet"),", you need to deploy your own giver."),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"/develop/tools/everdev/guides/work-with-devnet"},(0,o.kt)("strong",{parentName:"a"},"Check how to do it in this guide")),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev signer add giver_keys 172af540e43a524763dd53b26a066d472a97c4de37d5498170564510608250c3\nnpx everdev network giver se 0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5 --signer giver_keys\n")),(0,o.kt)("h2",{id:"generate-the-keys-for-contract-ownership"},"Generate the keys for contract ownership"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev signer generate owner_keys\nnpx everdev signer default owner_keys\nnpx everdev signer list \nSigner                Public Key       Used\n--------------------  ---------------  ---------------------------\ngiver_keys            2ada2e...b25a16  se network giver signer\nowner_keys (Default)  382620...1ecf7b\n")),(0,o.kt)("admonition",{title:"Note",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"That there are shortcuts for all the commands: ",(0,o.kt)("inlineCode",{parentName:"p"},"sl = signer list")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"sd = signer default")," :)"),(0,o.kt)("p",{parentName:"admonition"},"Don't forget to make the owner key default otherwize giver keys will be used as default.")),(0,o.kt)("h2",{id:"calculate-the-contract-address"},"Calculate the contract address"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract info helloWorld\nConfiguration\n  Network: se (http://localhost)\n  Signer:  owner_keys (public 3826202b129ea8c041b8d49a655512648fc94377d1958a7a4fc9f4b3051ecf7b)\nAddress:   0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5 (calculated from TVC and signer public)\nCode Hash: c517820144a4daf5a3414c9233556b2b0ad34cdd228f200ea68a4c0327e0bd29 (from TVC file)\nAccount:   Doesn't exist\n")),(0,o.kt)("p",null,"You can see that the contract does not exist yet (is not deployed) but you can already see its future address."),(0,o.kt)("h2",{id:"deploy"},"Deploy"),(0,o.kt)("p",null,"Here we deploy the contract, sponsoring it with 10 Tokens (Everscale native currency has 9 decimals). The money for deploy are taken from the giver we configured in the previous steps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract deploy -v 10000000000 helloWorld\nConfiguration\n  Network: se (http://localhost)\n  Signer:  owner_keys (public 3826202b129ea8c041b8d49a655512648fc94377d1958a7a4fc9f4b3051ecf7b)\nAddress:   0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5 (calculated from TVC and signer public)\nDeploying...\nContract has deployed at address: 0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5\n")),(0,o.kt)("h2",{id:"view-contract-information-with-explorer"},"View contract information with Explorer"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost"},"localhost")," and search for your contract address in search bar. Open your account page. You will need it later to see its transactions and messages, that we will produce in the next steps."),(0,o.kt)("h2",{id:"explore-contract-information-with-graphql"},"Explore contract information with GraphQL"),(0,o.kt)("p",null,"Go to ",(0,o.kt)("a",{parentName:"p",href:"http://localhost/graphql"},"localhost/graphql"),". Enter in the left pane and click Run button (replace the contract's address with the one you got in the previous steps)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  accounts(\n    filter: {\n      id: {\n        eq: "0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5"\n      }\n    }\n  ) {\n    acc_type_name\n    balance\n    code\n    code_hash\n    data\n  }\n}\n')),(0,o.kt)("p",null,"You will see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "accounts": [\n      {\n        "acc_type_name": "Active",\n        "balance": "0x1db0832ba",\n        "code": "te6ccgECEwEAAnkABCj/AIrtUyDjAyDA/+MCIMD+4wLyCxECARICoiHbPNMAAY4SgQIA1xgg+QFY+EIg+GX5EPKo3tM/AY4d+EMhuSCfMCD4I4ED6KiCCBt3QKC53pMg+GPg8jTYMNMfAfgjvPK50x8B2zz4R27yfAUDATQi0NcLA6k4ANwhxwDcIdMfId0B2zz4R27yfAMDQCCCEDtj1H67joDgIIIQaBflNbuOgOAgghBotV8/uuMCCwYEAlgw+EFu4wD4RvJzcfhm0fhC8uBl+EUgbpIwcN74Qrry4Gb4APgj+GrbPH/4ZwUPAHjtRNAg10nCAY4U0//TP9MA1wsf+Gp/+GH4Zvhj+GKOG/QFcPhqcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeICKCCCEFTWvRi64wIgghBoF+U1uuMCCAcBSts8+EqNBHAAAAAAAAAAAAAAAAA6BflNYMjOIc8LH8lw+wB/+GcQAnIw0ds8IcD/jikj0NMB+kAwMcjPhyDOjQQAAAAAAAAAAAAAAAANTWvRiM8WIc8UyXD7AN4w4wB/+GcJDwECiAoAFGhlbGxvV29ybGQCKCCCEDcxLkW64wIgghA7Y9R+uuMCDgwDSDD4QW7jAPpA1w1/ldTR0NN/39cMAJXU0dDSAN/R2zzjAH/4ZxANDwBU+EUgbpIwcN74Qrry4Gb4AFRxIMjPhYDKAHPPQM4B+gKAa89AyXD7AF8DAkAw+EFu4wDR+EUgbpIwcN74Qrry4Gb4APgj+GrbPH/4ZxAPAC74QsjL//hDzws/+EbPCwD4SgHLH8ntVAAu7UTQ0//TP9MA1wsf+Gp/+GH4Zvhj+GIBCvSkIPShEgAA",\n        "code_hash": "c517820144a4daf5a3414c9233556b2b0ad34cdd228f200ea68a4c0327e0bd29",\n        "data": "te6ccgEBAQEALwAAWTgmICsSnqjAQbjUmmVVEmSPyUN30ZWKek/J9LMFHs97AAABesq/uBawfEB6wA=="\n      }\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"You can specify any other fields in the result section that are available in GraphQL Schema. (Click ",(0,o.kt)("inlineCode",{parentName:"p"},"Docs")," on the right side of your screen to explore it)."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"What is GraphQL?")," This is the API of blockchain, to retrieve data from it and to send data into it. You can use this playground later, if you will need need to test some queries."),(0,o.kt)("h2",{id:"run-on-chain"},"Run on-chain"),(0,o.kt)("p",null,"Let's move on and run an on-chain method."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npx everdev contract run helloWorld\nConfiguration\n  Network: se (http://localhost)\n  Signer:  owner_key (public 3826202b129ea8c041b8d49a655512648fc94377d1958a7a4fc9f4b3051ecf7b)\nAddress:   0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5 (calculated from TVC and signer public)\nAvailable functions:\n  1) constructor\n  2) renderHelloWorld\n  3) touch\n  4) sendValue\n  5) timestamp\n  Select function (number): \n")),(0,o.kt)("p",null,"Let's enter 3. You will see the transaction ID of the operation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'"transaction": {\n    "json_version": 5,\n    "id": "8087f774d4b8b4d4716cb31a74deea32550a04b40e853f55c64579fa3897108f",\n    "boc": "te6ccgECBw......\n    ........................\n')),(0,o.kt)("p",null,"You can also execute it inline like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"npx everdev contract run helloWorld touch")),(0,o.kt)("p",null,"In the result you can see the transaction","_","id. Search for it on your Contract's page in Explorer and in GraphQL playground (use ",(0,o.kt)("inlineCode",{parentName:"p"},"transactions")," collection instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"accounts"),")."),(0,o.kt)("h2",{id:"run-a-getter-function"},"Run a getter function"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'npx everdev contract run-local helloWorld timestamp\nConfiguration\n  Network: se (http://localhost)\n  Signer:  owner_keys (public 3826202b129ea8c041b8d49a655512648fc94377d1958a7a4fc9f4b3051ecf7b)\nAddress:   0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5 (calculated from TVC and signer public)\nExecution has finished with result: {\n    "output": {\n        "timestamp": "1626898677"\n    },\n    "out_messages": []\n}\n')),(0,o.kt)("h2",{id:"transfer-some-tokens"},"Transfer some tokens"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'npx everdev contract run helloWorld sendValue\nConfiguration\n  Network: se (http://localhost)\n  Signer:  owner_keys (public 3826202b129ea8c041b8d49a655512648fc94377d1958a7a4fc9f4b3051ecf7b)\nAddress:   0:e74c4258496e79e62e014ca96911acbf5cb0e286fd55dd6f4e3da54e4197ddf5 (calculated from TVC and signer public)\nParameters of sendValue:\n  dest (address): 0:b5e9240fc2d2f1ff8cbb1d1dee7fb7cae155e5f6320e585fcc685698994a19a5\n  amount (uint128): 1000000000\n  bounce (bool): true\nRunning...\nExecution has finished with result: {\n    "transaction": {\n        "json_version": 5,\n        "id": "550731bb26e5054387a781257e077dbdd769367f16b19bfa529c20475e2a08f6",\n        "boc": "te6ccgECCwEAAkwAA7V+dMQlhJbnnmLgFMqWkRrL9csOKG/VXdb049pU5Bl931AAAAAAAAADdx7fDdz4W9u1NnBVF9To555bwxWhiXk8pjgn1OO6cR6wAAAAAAAAAzYPiDAAADRxN2doBQQBAg8MSMYbFBYEQAMCAG/Jh6EgTBRYQAAAAAAAAgAAAAAAAmHZXn3oj36iIsmePH9xls7+ruVE+XB4H24a\n')),(0,o.kt)("admonition",{title:"Attention!",type:"caution"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Contracts take value in nanotokens, so in this step we transfered 1 token."),(0,o.kt)("li",{parentName:"ul"},"Bounce = true means that if the recipient does not exist, money will be returned back. ",(0,o.kt)("strong",{parentName:"li"},"If you plan to transfer money for deploy, specify Bounce = false!")))),(0,o.kt)("p",null,"Again, now you can find this transaction in Explorer or GraphQL API."),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"If you want to migrate to Dev Network, read ",(0,o.kt)("a",{parentName:"li",href:"/develop/tools/everdev/guides/work-with-devnet"},"Working with DevNet guide"),"."),(0,o.kt)("li",{parentName:"ol"},"Also take a look at our ",(0,o.kt)("a",{parentName:"li",href:"/arch/basics"},"blockchain basics page")," that will help you understand the core concepts of Everscale:)"),(0,o.kt)("li",{parentName:"ol"},"If you want to integrate your application with Everscale - dive into our ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/tonlabs/ever-sdk/blob/master/docs/quick_start.md"},"SDK Quick Start"),"!"),(0,o.kt)("li",{parentName:"ol"},"If you are an exchange - check out our ",(0,o.kt)("a",{parentName:"li",href:"/develop/integrate/tutorial/add-everscale-to-your-exchange"},"exchange guide"),"!")),(0,o.kt)("p",null,"If you have any difficulties/questions/suggestions/etc please write to ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/everdev"},"telegram channel @everdev"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,o.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,o.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,o.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}h.isMDXComponent=!0}}]);