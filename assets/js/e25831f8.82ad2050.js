"use strict";(self.webpackChunkeverscale_docs_website=self.webpackChunkeverscale_docs_website||[]).push([[2418],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),h=c(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return n?a.createElement(m,s(s({ref:t},d),{},{components:n})):a.createElement(m,s({ref:t},d))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<r;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9547:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=n(3117),o=n(102),r=(n(7294),n(3905)),s=["components"],i={description:"Write distributed systems of smart contracts",sidebar_position:10},l="Distributed programming",c={unversionedId:"develop/smart-contract/learn/distributed-programming",id:"develop/smart-contract/learn/distributed-programming",title:"Distributed programming",description:"Write distributed systems of smart contracts",source:"@site/../../src/develop/smart-contract/learn/10-distributed-programming.md",sourceDirName:"develop/smart-contract/learn",slug:"/develop/smart-contract/learn/distributed-programming",permalink:"/develop/smart-contract/learn/distributed-programming",draft:!1,editUrl:"https://github.com/everscale-org/docs/edit/main/.build/website/../../src/develop/smart-contract/learn/10-distributed-programming.md",tags:[],version:"current",lastUpdatedAt:1658794573,formattedLastUpdatedAt:"Jul 26, 2022",sidebarPosition:10,frontMatter:{description:"Write distributed systems of smart contracts",sidebar_position:10},sidebar:"tutorialSidebar",previous:{title:"Upgrade contracts",permalink:"/develop/smart-contract/learn/how-to-upgrade-contracts"},next:{title:"LT Guarantees",permalink:"/develop/smart-contract/learn/lt-guarantees"}},d={},u=[{value:"Important concept",id:"important-concept",level:2},{value:"How contracts are deployed",id:"how-contracts-are-deployed",level:2},{value:"<code>Root.sol</code>",id:"root",level:2},{value:"<code>Wallet.sol</code>",id:"wallet",level:2},{value:"<code>ThirdParty.sol</code>",id:"third-party",level:2}],h={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"distributed-programming"},"Distributed programming"),(0,r.kt)("p",null,"How do contracts and programmers survive in ES? :-) They don\u2019t write contracts in which the state can continuously grow, but write distributed systems of smart contracts. And they are capable of doing this by virtue of the concepts realized in ES. For example TIP-3 tokens create a separate smart-contract for each token owner (that is what a wallet is) and can send tokens directly among contracts without a central hub. Below we will look at an example of how this works"),(0,r.kt)("h2",{id:"important-concept"},"Important concept"),(0,r.kt)("p",null,"In ES, each contract address is a uniquely computed value. A contract address is a hash of the contract code and initial data (initial data is a value of static variables, and not what you pass to the constructor, since in ES the constructor is a function that you call after the deployment of the contract in one transaction)."),(0,r.kt)("p",null,"This is a very important pattern of distributed programming (as it is understood in ES). Knowing the code of a contract, and it initials data you can make sure that you are being called by a contract with the same parents as your own. Or, knowing the contract code and its initial data,  you can compute the address of a contract on the fly and send messages to it."),(0,r.kt)("h2",{id:"how-contracts-are-deployed"},"How contracts are deployed"),(0,r.kt)("p",null,"The concept described above is also tied to how contracts are deployed in ES. The contract can naturally be deployed by another contract. But what should we do if we want to deploy a contract from outside?"),(0,r.kt)("p",null,"To do this, we have to take the contract code and its initial data, and compute its future address."),(0,r.kt)("p",null,"After that, we simply send money there, with a bounce flag = false. And the money just stays on the address, which has no initialized code."),(0,r.kt)("p",null,"Then we send a special external message to this address with the code and initial data, and we say \u201cLook, here we have the code and initial data, the hash of which gives us this address, initialize it please\u201d and the network initializes the contract."),(0,r.kt)("p",null,"Now let\u2019s look at a really simplified realization of a ",(0,r.kt)("a",{parentName:"p",href:"../../../standard/TIP-3"},"TIP-3")," token."),(0,r.kt)("p",null,"Our token consists of 2 contracts:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#root"},"Root.sol")," is controlled by whoever released the token, this allows them to print tokens and deploy the wallets of individual users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#wallet"},"Wallet.sol")," is a wallet contract for individual users. Yes, each user has their own small contract that stores their token balance.")),(0,r.kt)("p",null,"By creating contract-wallets we solve a number of different problems:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"All wallets end up in different shards which distributes the load evenly throughout the network."),(0,r.kt)("li",{parentName:"ul"},"Wallet contracts are very small with small states. Validators can load them very quickly from a disk."),(0,r.kt)("li",{parentName:"ul"},"Storage fee. If we had one contract with a huge hash map, then it would have to pay a large fee for its storage, and it is not clear who would pay and how for this storage. If there are many accounts with small balances that their owners no longer need, then naturally they will not pay for its storage, and the rest of the holders of this token will have to pay for all of the \u201cremainders.\u201d   So that smart contract programmers do not have to think about how to force users to pay for storage (so that the entire contract is not frozen) or clean up old data inside the contract, ES has allowed each user to deploy their own contract.   Each user determines how long they will pay for storage and can always adjust these parameters.")),(0,r.kt)("p",null,"Below we are going to look at the code underlying this to understand how it works and why it is safe."),(0,r.kt)("p",null,"A few thoughts to keep in mind while looking at the code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The contract address is the hash (contract code + static variables)."),(0,r.kt)("li",{parentName:"ul"},"If we know the wallet contract code and its initial variables (what the root address of the contract is and what pubkey controls it), then we can calculate what address this contract will have."),(0,r.kt)("li",{parentName:"ul"},"When one wallet receives a message from another wallet, it can determine from the sender's address whether the sending wallet has exactly the same code, to see if it really has the tokens it is sending you.")),(0,r.kt)("h2",{id:"root"},(0,r.kt)("inlineCode",{parentName:"h2"},"Root.sol")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma ton-solidity >= 0.53.0;\npragma AbiHeader expire;\npragma AbiHeader pubkey;\n\nimport "TokenWallet.sol";\n\ninterface ITokenRootContract {\n  function deployEmptyWallet(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers\n  ) external responsible returns(address);\n\n  function mint(\n    address to,\n    uint128 tokens\n  ) external;\n\n  function deployWalletWithBalance(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers,\n    uint128 _tokens\n  ) external returns ( address );\n}\n\nlibrary TokenRootContractErrors {\n  uint8 constant error_tvm_pubkey_not_set = 100;\n  uint8 constant error_message_sender_is_not_my_owner = 101;\n  uint8 constant error_deploy_ever_to_small = 102;\n  uint8 constant error_insufficient_evers_on_contract_balance = 103;\n  uint8 constant error_deploy_wallet_pubkey_not_set = 104;\n}\n\ncontract TokenRootContract is ITokenRootContract {\n  uint128 public start_gas_balance;\n  uint128 public total_supply;\n\n  // The code of the wallet contract is needed to deploy the wallet contract.\n  // In the tvm the code is also stored in the TvmCell and it can be sent via messages. \n  TvmCell static wallet_code;\n\n  constructor() public {\n    require(tvm.pubkey() != 0, TokenRootContractErrors.error_tvm_pubkey_not_set);\n    tvm.accept();\n\n    start_gas_balance = address(this).balance;\n  }\n\n  modifier onlyOwner() {\n    require(tvm.pubkey() != 0 && tvm.pubkey() == msg.pubkey(), TokenRootContractErrors.error_message_sender_is_not_my_owner);\n    _;\n  }\n\n  function deployWallet(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers\n  ) private returns (address) {\n    // stateInit - the message deploying the contract where we establish the code \n    // the contract and its static variables. \n    // Essentially the hash(stateInit) is the contract address. \n    // The contract address depends on the code and the intial variables.\n    // So we can determine the contract address just by knowing its code \n    // and initial variables (not those that are sent in the constructor). \n\n    // Pay attention to what the wallet address depends on.\n    // It depends on the root_address(this), the wallet code and the owner\'s public key. \n    TvmCell stateInit = tvm.buildStateInit({\n        //We specify the contract interface so Solidity correctly packs \n        // varInit into TvmCell (BoC, see the previous chapter).\n        contr: TokenWalletContract,\n        varInit: {\n            //the value of static variables\n            root_address: address(this),\n            wallet_code: wallet_code\n        },\n        // pubkey - this will return the tvm.pubkey(). \n        // Essentially this is just another static variable that is introduced separately.\n        pubkey: _wallet_public_key,\n        code: wallet_code\n    });\n\n    // Here we create one message that will deploy the contract \n    // (if the contract is already deployed , nothing will happen)\n    // also, this message will call the constructor \n    // () without arguments .\n    address wallet = new TokenWalletContract{\n        stateInit: stateInit,\n        value: _deploy_evers, //the amount of native coins we are sending with the message \n        wid: address(this).wid,\n        flag: 0 //this flag denotes that we are paying for the creation of the message from the value we are sending with the contract.  \n    }();\n\n    return wallet;\n  }\n\n  function deployEmptyWallet(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers\n  ) override external responsible returns (address) {\n    // With the help of this function, any other contract can deploy a wallet.\n\n    require(_wallet_public_key != 0, TokenRootContractErrors.error_deploy_wallet_pubkey_not_set);\n    require(_deploy_evers >= 0.05 ton, TokenRootContractErrors.error_deploy_ever_to_small);\n\n    // This function reserves money on the contract account equal to the balance \n    // of the contract at the moment when the transaction is started. In order not to allow the message \n    // to spend money from the contract balance.\n    // This is a complex moment and we will look at the details in the Additional Materials section  \n    // in "Carefully working with value"\n    tvm.rawReserve(0, 4);\n\n    address deployed_contract = deployWallet(_wallet_public_key, _deploy_evers);\n\n    // Our function is labelled responsible, this means that it is possible to be called  \n    // with a smart contract and it will create a message with a callback. \n    // The compiler will simply add a field to the function arguments\n    // answerID, which shows the ID of the function that will be called \n    // by sending a message back to the msg.sender address\n\n    // Why do we use 128 here and not 64 - because from this transaction  \n    // we have two external calls, one is to deploy the wallet contract,\n    // and the second is the answer: responsible.\n    // You can find more details about this in the "Carefully working with value" section.\n    return { value: 0, bounce: false, flag: 128 } deployed_contract;\n  }\n\n  //minting tokens\n  function mint(\n    address _to,\n    uint128 _tokens\n  ) override external onlyOwner {\n    // This method is called by an external message, \n    // here we have put some fool-proof protection in place.\n    // This way we will pay for the fulfillment of the transaction from the contract account, \n    // then we check that there are more EVERs on the contract account \n    // then there were when it was deployed. This prevents a situation in which\n    // there are no funds on the contract account and it gets deleted from the network  \n    // or frozen because it conannot pay for its storage.\n    require(address(this).balance > start_gas_balance, TokenRootContractErrors.error_insufficient_evers_on_contract_balance);\n    require(_tokens > 0);\n\n    // We agree to pay for the transaction from the contract account.\n    tvm.accept();\n\n    // We send a message with a call of the accept function to the contract at the indicated address.\n    // To the message a sum of 0.01 EVER from the account address will be attached\n    // (this will be done automatically, unless otherwise indicated)\n    ITokenWalletContract(_to).accept(_tokens);\n\n    total_supply += _tokens;\n  }\n\n  function deployWalletWithBalance(\n    uint256 _wallet_public_key,\n    uint128 _deploy_evers,\n    uint128 _tokens\n  ) override external onlyOwner returns ( address ) {\n\n    require(_wallet_public_key != 0, TokenRootContractErrors.error_deploy_wallet_pubkey_not_set);\n    require(_deploy_evers >= 0.1 ton, TokenRootContractErrors.error_deploy_ever_to_small);\n\n    // Similar fool-proof mechanism to the one above, \n    // but here we also add _deploy_evers\n    require(address(this).balance > start_gas_balance + _deploy_evers, TokenRootContractErrors.error_insufficient_evers_on_contract_balance);\n\n    require(_tokens > 0);\n\n    tvm.accept();\n\n    // we deploy the wallet\n    address deployed_contract = deployWallet(_wallet_public_key, _deploy_evers);\n\n    // we send tokens to the wallet in the following message.\n    ITokenWalletContract(deployed_contract).accept(_tokens);\n\n    total_supply += _tokens;\n\n    return deployed_contract;\n  }\n\n  onBounce(TvmSlice slice) external {\n    tvm.accept();\n    // This is a utility function for handling errors. You probably noticed that in\n    // the mint function we did not check if the contract was deployed at the destination \n    // address. By default, when calling another contract, the message \n    // will have a flag bounce value of: true. If when the message is being processed by the contract \n    // an exception occurs at the destination address or the contract  \n    // does not exist, then automatically (if there is enough money\n    // attached to the message) a return message is sent with a call to \n    // the onBounce function and with arguments.\n    // Here there is a stupid limitation requiring that arguments fit \n    // into 224 bits (WTF) but hopefully this is changed.\n\n    // We use this function to show you how to handle a situation \n    // when tokens are minted to a non-existing address and to subtract from the total_supply\n    // as the tokens were not printed.\n\n    // This function cannot just be called, the message must \n    // have a special bounced: true flag,\n    // which cannot be added manually when sending.\n    // So there is no need to do additional checks that we actually sent the message \n    // as no bad actor can subtract from the total supply by sending an unexpected bounced message.\n\n    uint32 functionId = slice.decode(uint32);\n    if (functionId == tvm.functionId(ITokenWalletContract.accept)) {\n        uint128 latest_bounced_tokens = slice.decode(uint128);\n        total_supply -= latest_bounced_tokens;\n    }\n  }\n}\n')),(0,r.kt)("h2",{id:"wallet"},(0,r.kt)("inlineCode",{parentName:"h2"},"Wallet.sol")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},"pragma ton-solidity >= 0.53.0;\npragma AbiHeader expire;\npragma AbiHeader pubkey;\n\ninterface ITokenWalletContract {\n  function getBalance() external view responsible returns (uint128);\n  function accept(uint128 _tokens) external;\n  function transferToRecipient(uint256 _recipient_public_key, uint128 _tokens, uint128 _deploy_evers, uint128 _transfer_evers) external;\n  function internalTransfer(uint128 _tokens, uint256 _sender_public_key, address _send_gas_to) external;\n}\n\nlibrary TokenWalletContractErrors {\n  uint8 constant error_tvm_pubkey_not_set = 100;\n  uint8 constant error_message_sender_is_not_my_owner = 101;\n  uint8 constant error_message_transfer_not_enough_balance = 102;\n  uint8 constant error_message_transfer_wrong_recipient = 103;\n  uint8 constant error_message_transfer_low_message_value = 104;\n  uint8 constant error_message_internal_transfer_bad_sender = 105;\n  uint8 constant error_message_transfer_balance_too_low = 106;\n}\n\ncontract TokenWalletContract is ITokenWalletContract {\n  address static root_address;\n  TvmCell static wallet_code;\n  uint128 public balance;\n\n  constructor() public {\n    //We check that the public key has been set\n    require(tvm.pubkey() != 0, TokenWalletContractErrors.error_tvm_pubkey_not_set);\n    tvm.accept();\n  }\n\n  modifier onlyRoot() {\n    require(root_address == msg.sender, TokenWalletContractErrors.error_message_sender_is_not_my_owner);\n    _;\n  }\n\n  modifier onlyOwner() {\n    require(tvm.pubkey() == msg.pubkey(), TokenWalletContractErrors.error_message_sender_is_not_my_owner);\n    _;\n  }\n\n  function accept(uint128 _tokens) override external onlyRoot {\n    // We simply accept any amount of tokens the Root contract wants to send us \n    tvm.accept();\n    balance += _tokens;\n  }\n\n  function getBalance() override external view responsible returns (uint128) {\n    // Any contract can get our wallet balance \n    return { value: 0, bounce: false, flag: 64 } balance;\n  }\n\n  function transferToRecipient(\n    uint256 _recipient_public_key,\n    uint128 _tokens,\n    uint128 _deploy_evers,\n    uint128 _transfer_evers\n  ) override external onlyOwner {\n    // With this method we can send tokens to any similar wallet \n    // directly. When doing this we can say that we want to first \n    // deploy this wallet.\n\n    require(_tokens > 0);\n    require(_tokens <= balance, TokenWalletContractErrors.error_message_transfer_not_enough_balance);\n    require(_recipient_public_key != 0, TokenWalletContractErrors.error_message_transfer_wrong_recipient);\n    // You cannot send it to yourself :-)\n    require(_recipient_public_key != tvm.pubkey());\n\n    require(address(this).balance > _deploy_evers + _transfer_evers, TokenWalletContractErrors.error_message_transfer_balance_too_low);\n\n    // A check to make sure we want to add no less than \n    // 0.01 ever to the outgoing message. If we don't add enough, the transaction will fail \n    // and onBounce won't work.\n    // This is an empirical value, as on our network gas does not fluctuate  \n    // and will only decrease from the original value.\n    require(_transfer_evers >= 0.01 ever, TokenWalletContractErrors.error_message_transfer_low_message_value);\n\n    tvm.accept();\n\n    // We calculate the destination address of the wallet contract.\n    TvmCell stateInit = tvm.buildStateInit({\n        contr: TokenWalletContract,\n        varInit: {\n            root_address: root_address,\n            wallet_code: wallet_code\n        },\n        pubkey: _recipient_public_key,\n        code: wallet_code\n    });\n\n    address to;\n    if (_deploy_evers > 0) {\n        // We deploy the wallet, here everything should be familiar.\n        to = new TokenWalletContract{\n            stateInit: stateInit,\n            value: _deploy_evers,\n            wid: address(this).wid,\n            flag: 1 // this means that we will pay for the creation of the outgoing message not from \u0441 _deploy_evers but from the wallet balance \n        }();\n    } else {\n        // We simply determine the destination wallet address.\n        to = address(tvm.hash(stateInit));\n    }\n\n    balance -= _tokens;\n\n    // Here we send a message with a call to the internalTransfer function,\n    // described below. Since we have a guarantee in the blockchain on the order of \n    // message delivery, even if we just sent a deploy message \n    // for the contract above, we can be sure that it will deploy\n    // before the internalTransfer will be called. We also put in\n    // bounce: true, in case there is an error (we did not  \n    // deploy the contract for example) to call the \n    // onBounce function and return the money to ourselves. \n    ITokenWalletContract(to).internalTransfer{ value: _transfer_evers, flag: 1, bounce: true } (\n        _tokens,\n        tvm.pubkey(),\n        address(this)\n    );\n  }\n\n  function internalTransfer(\n    uint128 _tokens,\n    uint256 _sender_public_key,\n    address _send_gas_to\n  ) override external {\n    // Transfer accepting function. This is a very nice concept.\n    // We can send tokens directly from one wallet\n    // to another because in ES a contract address is a uniquely \n    // computed value. We can check that the contract that is \n    // calling us is the same kind of contract as ours and has the same \n    // Root and code. So we know for sure if the contract calls us  \n    // these tokens are real and come from the contract root. \n\n    // We determine the address of the contract that called us  \n    // from _sender_public_key\n    address expectedSenderAddress = getExpectedAddress(_sender_public_key);\n\n    // We make sure that the right address called us.\n    require(msg.sender == expectedSenderAddress, TokenWalletContractErrors.error_message_internal_transfer_bad_sender);\n\n    // Accept transfer.\n    balance += _tokens;\n\n    if (_send_gas_to.value != 0) {\n        // We send all the unspent value that was in the message back \n        // to the contract. This is also possible to do via msg.sender,\n        // but we want to show you here that you can send \n        // in a long chain the address to where the change should be returned  \n        // if we have a long interaction. \n        _send_gas_to.transfer({ value: 0, flag: 64 });\n    }\n  }\n\n  function getExpectedAddress(\n    uint256 _wallet_public_key\n  ) private inline view returns ( address ) {\n    TvmCell stateInit = tvm.buildStateInit({\n        contr: TokenWalletContract,\n        varInit: {\n            root_address: root_address,\n            wallet_code: wallet_code\n        },\n        pubkey: _wallet_public_key,\n        code: wallet_code\n    });\n    return address(tvm.hash(stateInit));\n  }\n\n  onBounce(TvmSlice body) external {\n    // This is a utility function, messages will only end up here \n    // if during message processing, an error occurs\n    // but there is enough money to create \n    // an onBounce message. No additional checks that you sent the \n    // message here are needed, you can't send a message here manually.\n    tvm.accept();\n    uint32 functionId = body.decode(uint32);\n    if (functionId == tvm.functionId(ITokenWalletContract.internalTransfer)) {\n        // Our transfer was not sent, we return the money to our balance.\n        uint128 tokens = body.decode(uint128);\n        balance += tokens;\n    }\n  }\n}\n")),(0,r.kt)("h2",{id:"third-party"},(0,r.kt)("inlineCode",{parentName:"h2"},"ThirdParty.sol")),(0,r.kt)("p",null,"And here are some examples of ",(0,r.kt)("inlineCode",{parentName:"p"},"ThirdParty.sol")," to show how to work with ",(0,r.kt)("inlineCode",{parentName:"p"},"responsible"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma ton-solidity >= 0.53.0;\npragma AbiHeader expire;\npragma AbiHeader pubkey;\n\nimport "TokenRoot.sol";\n\ncontract ThirdPartyContract  {\n    \n    address public lastDeployedWallet;\n    \n    constructor() public {\n        require(tvm.pubkey() != 0, 2);\n        tvm.accept();\n    }\n    \n    modifier onlyOwner() {\n        require(tvm.pubkey() == msg.pubkey(), 3);\n        _;\n    }\n    \n    function deployWallet(\n            address _root_contract,\n            uint256 _wallet_public_key,\n            uint128 _send_evers,\n            uint128 _deploy_evers\n        ) external onlyOwner {\n          // This entire Third party contract was done to show you how to\n          // call the responsible function.\n          // Everything is simple here, we just call the function and transfer\n          // callback - this is the ID function to call\n          tvm.accept();\n          ITokenRootContract(_root_contract).deployEmptyWallet{\n          value: _send_evers,\n          callback: onGetDeployed\n          }(_wallet_public_key, _deploy_evers);\n        }\n    \n    function onGetDeployed(\n      address _address\n    ) public {\n        // The callback which Root will call in answer to deployEmptyWallet.\n        // There is no built-in check to make sure this function\n        // is truly being called in answer to your call.\n        // So you have to check if you really made this call.\n        // For example, by storing the address of root that you are interacting with\n        // and checking that the response is something like require(msg.sender == root_address)\n    \n        // Fun fact, when we get an answer here, that does not mean \n        // that the wallet is deployed. This means that the Root\n        // contract created an outgoing deploy message.\n        // We can receive this message before the wallet is deployed \n        // (the message is en route).\n        // In principle, the LT (see Additional information) guarantees us, \n        // that if we want to call a wallet method from here,\n        // our message will not arrive earlier than the wallet is deployed.\n        lastDeployedWallet = _address;\n    }\n}\n')),(0,r.kt)("p",null,"By carefully reading the examples above, and playing around with the code available here ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/mnill/everscale-education-simple-tip3"},"https://github.com/mnill/everscale-education-simple-tip3"),", you should be able to understand the principles of distributed programming, how separate contracts are deployed in ES for different users and why it is safe."),(0,r.kt)("p",null,"If you\u2019ve been able to piece everything together in your head, you are likely to also have appreciated the beauty of such a solution with distributed wallets. It solves several problems at once:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"There is no single big map where all balances are stored. Validators can load contracts from disks as quickly as possible."),(0,r.kt)("li",{parentName:"ol"},"Every user deploys their own wallet and pays for the storage of their data on the blockchain."),(0,r.kt)("li",{parentName:"ol"},"By transferring money directly between wallets, the load is distributed as evenly as possible throughout the blockchain. Each wallet ends up in a random shard, depending on the address of the wallet. So, if there is a sharp increase in the number of transfers, we do not have to rely on the performance of a particular shard, since we do not have a central smart contract through which all transfers must pass and which would cause a bottleneck. ")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"}," The documentation in Everscale repository is a community effort. Therefore, everyone can contribute with proposals for new topics, suggest new content elements, participate in editing, and provide ideas that will be of great help for network development.\nPlease be informed that our documentation can be ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/everscale-org/docs/issues"},"edited via GitHub"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Also please make sure to consult our rules and rewards policy via ",(0,r.kt)("a",{parentName:"p",href:"https://docs.everscale.network/contribute/hot-streams/documentations"},"this link"),".",(0,r.kt)("br",{parentName:"p"}),"\n","Feel free to join ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/+C2IpQXWZtCwxYzEy"},"Everscale Documentation Development Telegram chat")," and ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/+Vca1Gs6uPzIyNWVi"},"Everscale Developers Onboarding Telegram chat"),"!")))}p.isMDXComponent=!0}}]);