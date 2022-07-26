"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[7167],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=r,g=c["".concat(o,".").concat(u)]||c[u]||m[u]||s;return a?n.createElement(g,i(i({ref:t},p),{},{components:a})):n.createElement(g,i({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<s;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},872:function(e,t,a){a.r(t),a.d(t,{assets:function(){return p},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return m}});var n=a(3117),r=a(102),s=(a(7294),a(3905)),i=["components"],l={title:"Message",description:"Smart-contracts communicate between each other",sidebar_position:8},o="Message",d={unversionedId:"arch/message",id:"arch/message",title:"Message",description:"Smart-contracts communicate between each other",source:"@site/../../src/arch/50-message.md",sourceDirName:"arch",slug:"/arch/message",permalink:"/arch/message",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/arch/50-message.md",tags:[],version:"current",lastUpdatedAt:1658794573,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:8,frontMatter:{title:"Message",description:"Smart-contracts communicate between each other",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Accounts",permalink:"/arch/accounts"},next:{title:"Security",permalink:"/arch/security"}},p={},m=[{value:"Message Header",id:"message-header",level:2},{value:"Internal Message",id:"internal-message",level:2},{value:"InternalMessageHeader fields",id:"internalmessageheader-fields",level:4},{value:"External Message",id:"external-message",level:2},{value:"Events",id:"events",level:2},{value:"Reference",id:"reference",level:2}],c={toc:m};function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,s.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"message"},"Message"),(0,s.kt)("p",null,"In Everscale, smart-contracts communicate between each other and with non-blockchain applications by means of an asynchronous message passing."),(0,s.kt)("p",null,"Technically, a message is a data structure encoding one of the following:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"desired function call at a destination smart-contract, optionally attaching some coins."),(0,s.kt)("li",{parentName:"ul"},"event log record to signal external observers about some significant state being reached")),(0,s.kt)("p",null,"We distinguish 3 types",(0,s.kt)("sup",{parentName:"p",id:"fnref-1"},(0,s.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," of messages:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"External")," \u2014 messages sent by non-blockchain applications"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Internal")," \u2014 messages sent by smart-contracts between each other"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("em",{parentName:"li"},"Event")," \u2014 a log record signaling some special state for external observers")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Message {\n  header: CommonMsgInfo,\n  init: Option<StateInit>,\n  body: Option<SliceData>,\n  body_to_ref: Option<bool>,\n  init_to_ref: Option<bool>,\n}\n")),(0,s.kt)("p",null,"The last two fields ",(0,s.kt)("inlineCode",{parentName:"p"},"body_to_ref")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"init_to_ref")," are used only for serialization purpose, hence not considered in this document."),(0,s.kt)("h2",{id:"message-header"},"Message Header"),(0,s.kt)("p",null,"Any message has a message header: a data-structure defining, among other things, the message type and source and destination addresses."),(0,s.kt)("p",null,"The message header defines its type. It is described by the following enumeration:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum CommonMsgInfo {\n  IntMsgInfo(InternalMessageHeader),\n  ExtInMsgInfo(ExternalInboundMessageHeader),\n  ExtOutMsgInfo(ExtOutMessageHeader),\n}\n")),(0,s.kt)("h2",{id:"internal-message"},"Internal Message"),(0,s.kt)("p",null,"Within Everscale blockchain, smart-contracts communicate with each other by exchanging messages. Messages sent by smart-contracts are called internal."),(0,s.kt)("p",null,"They are opposed to external messages that are sent by off-chain applications to smart-contracts."),(0,s.kt)("p",null,"The message header of an internal message is defined as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct InternalMessageHeader {\n  pub ihr_disabled: bool,\n  pub bounce: bool,\n  pub bounced: bool,\n  pub src: MsgAddressIntOrNone,\n  pub dst: MsgAddressInt,\n  pub value: CurrencyCollection,\n  pub ihr_fee: Grams,\n  pub fwd_fee: Grams,\n  pub created_lt: u64,\n  pub created_at: UnixTime32,\n}\n")),(0,s.kt)("h4",{id:"internalmessageheader-fields"},"InternalMessageHeader fields"),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",{parentName:"tr",align:null},"Field"),(0,s.kt)("th",{parentName:"tr",align:null},"Description"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ihr_disabled")),(0,s.kt)("td",{parentName:"tr",align:null},"IHR routing protocol disabled, always ",(0,s.kt)("inlineCode",{parentName:"td"},"true"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"bounce")),(0,s.kt)("td",{parentName:"tr",align:null},"Should the answer message be generated in case of an error")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"bounced")),(0,s.kt)("td",{parentName:"tr",align:null},"Is this message was auto-generated by error handling")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"src")),(0,s.kt)("td",{parentName:"tr",align:null},"Message source ",(0,s.kt)("a",{parentName:"td",href:"/arch/accounts#account-address"},"address"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"dst")),(0,s.kt)("td",{parentName:"tr",align:null},"Message destination ",(0,s.kt)("a",{parentName:"td",href:"/arch/accounts#account-address"},"address"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"value")),(0,s.kt)("td",{parentName:"tr",align:null},"Amount of coins attached to the message")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"ihr_fee")),(0,s.kt)("td",{parentName:"tr",align:null},"IHR fee amount, always ",(0,s.kt)("inlineCode",{parentName:"td"},"0"))),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"fwd_fee")),(0,s.kt)("td",{parentName:"tr",align:null},"Message delivery fee amount")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"created_lt")),(0,s.kt)("td",{parentName:"tr",align:null},"Message creation logic time")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",{parentName:"tr",align:null},(0,s.kt)("inlineCode",{parentName:"td"},"created_at")),(0,s.kt)("td",{parentName:"tr",align:null},"Message creation time in Epoch")))),(0,s.kt)("p",null,"Some clarifications:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"bounced")," flag is set when the message itself was auto-generated as a result of an error. If the message with ",(0,s.kt)("em",{parentName:"li"},"bounced")," flag leads to an error itself, the next bounced message will not be generated."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"value")," is measured in Nano Evers (",(0,s.kt)("span",{parentName:"li",className:"math math-inline"},(0,s.kt)("span",{parentName:"span",className:"katex"},(0,s.kt)("span",{parentName:"span",className:"katex-mathml"},(0,s.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,s.kt)("semantics",{parentName:"math"},(0,s.kt)("mrow",{parentName:"semantics"},(0,s.kt)("mn",{parentName:"mrow"},"1"),(0,s.kt)("msup",{parentName:"mrow"},(0,s.kt)("mn",{parentName:"msup"},"0"),(0,s.kt)("mrow",{parentName:"msup"},(0,s.kt)("mo",{parentName:"mrow"},"\u2212"),(0,s.kt)("mn",{parentName:"mrow"},"9")))),(0,s.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"10^{-9}")))),(0,s.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,s.kt)("span",{parentName:"span",className:"base"},(0,s.kt)("span",{parentName:"span",className:"strut",style:{height:"0.8141em"}}),(0,s.kt)("span",{parentName:"span",className:"mord"},"1"),(0,s.kt)("span",{parentName:"span",className:"mord"},(0,s.kt)("span",{parentName:"span",className:"mord"},"0"),(0,s.kt)("span",{parentName:"span",className:"msupsub"},(0,s.kt)("span",{parentName:"span",className:"vlist-t"},(0,s.kt)("span",{parentName:"span",className:"vlist-r"},(0,s.kt)("span",{parentName:"span",className:"vlist",style:{height:"0.8141em"}},(0,s.kt)("span",{parentName:"span",style:{top:"-3.063em",marginRight:"0.05em"}},(0,s.kt)("span",{parentName:"span",className:"pstrut",style:{height:"2.7em"}}),(0,s.kt)("span",{parentName:"span",className:"sizing reset-size6 size3 mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"\u2212"),(0,s.kt)("span",{parentName:"span",className:"mord mtight"},"9"))))))))))))),")"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"reated_lt")," is a monotonically increasing counter, thanks to this field, each new generated message is unique, even if the message payload is the same.  The message creation logic time is also used to guarantee order of delivery. We do not dive deep into this question, because it is protocol-level details.")),(0,s.kt)("h2",{id:"external-message"},"External Message"),(0,s.kt)("p",null,"External messages are created outside of the blockchain and get sent through specially distinguished validator nodes called DApp Servers",(0,s.kt)("sup",{parentName:"p",id:"fnref-2"},(0,s.kt)("a",{parentName:"sup",href:"#fn-2",className:"footnote-ref"},"2")),"."),(0,s.kt)("p",null,"External message header is defined as follows:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct ExternalInboundMessageHeader {\n  pub src: MsgAddressExt,\n  pub dst: MsgAddressInt,\n  pub import_fee: Grams,\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Fields ",(0,s.kt)("inlineCode",{parentName:"li"},"src")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"dst")," are source and destination addresses."),(0,s.kt)("li",{parentName:"ul"},"Field ",(0,s.kt)("inlineCode",{parentName:"li"},"import_fee")," should have been the value paid to the validator for processing an external message. But in the current node, this field is not used. Hence, the fee is not paid. We reported this issue to the developers."),(0,s.kt)("li",{parentName:"ul"},"The source address for an external message is always set to ",(0,s.kt)("inlineCode",{parentName:"li"},"AddrNone"),".")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum MsgAddressExt {\n  AddrNone,\n  AddrExtern(MsgAddrExt),\n}\n")),(0,s.kt)("p",null,"The second variant ",(0,s.kt)("inlineCode",{parentName:"p"},"AddrExtern")," is not supported currently."),(0,s.kt)("h2",{id:"events"},"Events"),(0,s.kt)("p",null,"Event can be considered as a log record. It is used to signal external observers of reaching some significant state in a smart-contract."),(0,s.kt)("p",null,"Usually, observers are external non-blockchain applications that constantly monitor blockchain state",(0,s.kt)("sup",{parentName:"p",id:"fnref-3"},(0,s.kt)("a",{parentName:"sup",href:"#fn-3",className:"footnote-ref"},"3")),". Other smart-contracts are not able to catch events."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct ExtOutMessageHeader {\n  pub src: MsgAddressIntOrNone,\n  pub dst: MsgAddressExt,\n  pub created_lt: u64,\n  pub created_at: UnixTime32,\n}\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum MsgAddressIntOrNone {\n  None,\n  Some(MsgAddressInt)\n}\n")),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/arch/executor"},"Transaction Executor")," automatically assigns the source address ",(0,s.kt)("inlineCode",{parentName:"li"},"src")," to be equal to the smart-contract address emitting the event."),(0,s.kt)("li",{parentName:"ul"},"The destination address ",(0,s.kt)("inlineCode",{parentName:"li"},"dst")," may contain any identifier. It is included for easier integration with off-chain applications, i.e. applications can monitor emitted events based on their destination address, and consume only those events destined to their custom identifier."),(0,s.kt)("li",{parentName:"ul"},"Fields ",(0,s.kt)("inlineCode",{parentName:"li"},"created_lt"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"created_at")," defines the logical creation time and epoch creation time.")),(0,s.kt)("h2",{id:"reference"},"Reference"),(0,s.kt)("div",{className:"footnotes"},(0,s.kt)("hr",{parentName:"div"}),(0,s.kt)("ol",{parentName:"div"},(0,s.kt)("li",{parentName:"ol",id:"fn-1"},"In the original TON, message dichotomy is different: they distinguish 4 types of messages: ",(0,s.kt)("inlineCode",{parentName:"li"},"(inbound + outbound) * (internal + external)"),". We find this dichotomy a bit tedious to use in practice",(0,s.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-2"},"In the current protocol implementation, not all validator nodes process external messages. This is subject to change in the future protocol versions",(0,s.kt)("a",{parentName:"li",href:"#fnref-2",className:"footnote-backref"},"\u21a9")),(0,s.kt)("li",{parentName:"ol",id:"fn-3"},"For example, by sending GraphQL requests to the DApp-server",(0,s.kt)("a",{parentName:"li",href:"#fnref-3",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0}}]);