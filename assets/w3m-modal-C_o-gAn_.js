import{ej as g,eE as j,dH as l,dI as pe,du as I,dv as X,dy as y,dz as k,dA as d,dx as c,dQ as S,dN as U,e0 as h,dw as me,dC as F,dc as w,d_ as Y,ez as fe,eo as G,dd as q,dk as R,dP as Z,dF as we,df as O,eF as V,ew as ae,d$ as be,dE as ce,eG as ge,er as ye,de as ve,dJ as xe}from"./index-C-KaG7bl.js";import"./index-_EemlcQM.js";import{S as ke}from"./SwapController-B94ROia0.js";const de={isUnsupportedChainView(){return l.state.view==="UnsupportedChain"||l.state.view==="SwitchNetwork"&&l.state.history.includes("UnsupportedChain")},async safeClose(){if(this.isUnsupportedChainView()){g.shake();return}if(await j.isSIWXCloseDisabled()){g.shake();return}(l.state.view==="DataCapture"||l.state.view==="DataCaptureOtpConfirm")&&pe.disconnect(),g.close()}},$e=I`
  :host {
    display: block;
    border-radius: clamp(0px, ${({borderRadius:e})=>e[8]}, 44px);
    box-shadow: 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    overflow: hidden;
  }
`;var Ce=function(e,t,i,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let J=class extends k{render(){return d`<slot></slot>`}};J.styles=[X,$e];J=Ce([y("wui-card")],J);const Se=I`
  :host {
    width: 100%;
  }

  :host > wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[6]};
    border: 1px solid ${({tokens:e})=>e.theme.borderPrimary};
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.25);
    color: ${({tokens:e})=>e.theme.textPrimary};
  }

  :host > wui-flex[data-type='info'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};

      wui-icon {
        color: ${({tokens:e})=>e.theme.iconDefault};
      }
    }
  }
  :host > wui-flex[data-type='success'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundSuccess};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderSuccess};
      }
    }
  }
  :host > wui-flex[data-type='warning'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundWarning};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderWarning};
      }
    }
  }
  :host > wui-flex[data-type='error'] {
    .icon-box {
      background-color: ${({tokens:e})=>e.core.backgroundError};

      wui-icon {
        color: ${({tokens:e})=>e.core.borderError};
      }
    }
  }

  wui-flex {
    width: 100%;
  }

  wui-text {
    word-break: break-word;
    flex: 1;
  }

  .close {
    cursor: pointer;
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  .icon-box {
    height: 40px;
    width: 40px;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: var(--local-icon-bg-value);
  }
`;var Q=function(e,t,i,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const Ie={info:"info",success:"checkmark",warning:"warningCircle",error:"warning"};let T=class extends k{constructor(){super(...arguments),this.message="",this.type="info"}render(){return d`
      <wui-flex
        data-type=${S(this.type)}
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        gap="2"
      >
        <wui-flex columnGap="2" flexDirection="row" alignItems="center">
          <wui-flex
            flexDirection="row"
            alignItems="center"
            justifyContent="center"
            class="icon-box"
          >
            <wui-icon color="inherit" size="md" name=${Ie[this.type]}></wui-icon>
          </wui-flex>
          <wui-text variant="md-medium" color="inherit" data-testid="wui-alertbar-text"
            >${this.message}</wui-text
          >
        </wui-flex>
        <wui-icon
          class="close"
          color="inherit"
          size="sm"
          name="close"
          @click=${this.onClose}
        ></wui-icon>
      </wui-flex>
    `}onClose(){U.close()}};T.styles=[X,Se];Q([c()],T.prototype,"message",void 0);Q([c()],T.prototype,"type",void 0);T=Q([y("wui-alertbar")],T);const We=I`
  :host {
    display: block;
    position: absolute;
    top: ${({spacing:e})=>e[3]};
    left: ${({spacing:e})=>e[4]};
    right: ${({spacing:e})=>e[4]};
    opacity: 0;
    pointer-events: none;
  }
`;var he=function(e,t,i,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const Ee={info:{backgroundColor:"fg-350",iconColor:"fg-325",icon:"info"},success:{backgroundColor:"success-glass-reown-020",iconColor:"success-125",icon:"checkmark"},warning:{backgroundColor:"warning-glass-reown-020",iconColor:"warning-100",icon:"warningCircle"},error:{backgroundColor:"error-glass-reown-020",iconColor:"error-125",icon:"warning"}};let K=class extends k{constructor(){super(),this.unsubscribe=[],this.open=U.state.open,this.onOpen(!0),this.unsubscribe.push(U.subscribeKey("open",t=>{this.open=t,this.onOpen(!1)}))}disconnectedCallback(){this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:i}=U.state,a=Ee[i];return d`
      <wui-alertbar
        message=${t}
        backgroundColor=${a==null?void 0:a.backgroundColor}
        iconColor=${a==null?void 0:a.iconColor}
        icon=${a==null?void 0:a.icon}
        type=${i}
      ></wui-alertbar>
    `}onOpen(t){this.open?(this.animate([{opacity:0,transform:"scale(0.85)"},{opacity:1,transform:"scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: auto"):t||(this.animate([{opacity:1,transform:"scale(1)"},{opacity:0,transform:"scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"}),this.style.cssText="pointer-events: none")}};K.styles=We;he([h()],K.prototype,"open",void 0);K=he([y("w3m-alertbar")],K);const Re=I`
  button {
    display: block;
    display: flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    will-change: background-color;
    border-radius: ${({borderRadius:e})=>e[32]};
  }

  wui-image {
    border-radius: 100%;
  }

  wui-text {
    padding-left: ${({spacing:e})=>e[1]};
  }

  .left-icon-container,
  .right-icon-container {
    width: 24px;
    height: 24px;
    justify-content: center;
    align-items: center;
  }

  wui-icon {
    color: ${({tokens:e})=>e.theme.iconDefault};
  }

  /* -- Sizes --------------------------------------------------- */
  button[data-size='lg'] {
    height: 32px;
  }

  button[data-size='md'] {
    height: 28px;
  }

  button[data-size='sm'] {
    height: 24px;
  }

  button[data-size='lg'] wui-image {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='lg'] .left-icon-container {
    width: 24px;
    height: 24px;
  }

  button[data-size='md'] .left-icon-container {
    width: 20px;
    height: 20px;
  }

  button[data-size='sm'] .left-icon-container {
    width: 16px;
    height: 16px;
  }

  /* -- Variants --------------------------------------------------------- */
  button[data-type='filled-dropdown'] {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button[data-type='text-dropdown'] {
    background-color: transparent;
  }

  /* -- Focus states --------------------------------------------------- */
  button:focus-visible:enabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    box-shadow: 0 0 0 4px ${({tokens:e})=>e.core.foregroundAccent040};
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled,
    button:active:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    opacity: 0.5;
  }
`;var N=function(e,t,i,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const Ae={lg:"lg-regular",md:"md-regular",sm:"sm-regular"},Pe={lg:"lg",md:"md",sm:"sm"};let W=class extends k{constructor(){super(...arguments),this.imageSrc="",this.text="",this.size="lg",this.type="text-dropdown",this.disabled=!1}render(){return d`<button ?disabled=${this.disabled} data-size=${this.size} data-type=${this.type}>
      ${this.imageTemplate()} ${this.textTemplate()}
      <wui-flex class="right-icon-container">
        <wui-icon name="chevronBottom"></wui-icon>
      </wui-flex>
    </button>`}textTemplate(){const t=Ae[this.size];return this.text?d`<wui-text color="primary" variant=${t}>${this.text}</wui-text>`:null}imageTemplate(){if(this.imageSrc)return d`<wui-image src=${this.imageSrc} alt="select visual"></wui-image>`;const t=Pe[this.size];return d` <wui-flex class="left-icon-container">
      <wui-icon size=${t} name="networkPlaceholder"></wui-icon>
    </wui-flex>`}};W.styles=[X,me,Re];N([c()],W.prototype,"imageSrc",void 0);N([c()],W.prototype,"text",void 0);N([c()],W.prototype,"size",void 0);N([c()],W.prototype,"type",void 0);N([c({type:Boolean})],W.prototype,"disabled",void 0);W=N([y("wui-select")],W);const Oe=I`
  :host {
    height: 60px;
  }

  :host > wui-flex {
    box-sizing: border-box;
    background-color: var(--local-header-background-color);
  }

  wui-text {
    background-color: var(--local-header-background-color);
  }

  wui-flex.w3m-header-title {
    transform: translateY(0);
    opacity: 1;
  }

  wui-flex.w3m-header-title[view-direction='prev'] {
    animation:
      slide-down-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-down-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-flex.w3m-header-title[view-direction='next'] {
    animation:
      slide-up-out 120ms forwards ${({easings:e})=>e["ease-out-power-2"]},
      slide-up-in 120ms forwards ${({easings:e})=>e["ease-out-power-2"]};
    animation-delay: 0ms, 200ms;
  }

  wui-icon-button[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }

  @keyframes slide-up-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(3px);
      opacity: 0;
    }
  }

  @keyframes slide-up-in {
    from {
      transform: translateY(-3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-down-out {
    from {
      transform: translateY(0px);
      opacity: 1;
    }
    to {
      transform: translateY(-3px);
      opacity: 0;
    }
  }

  @keyframes slide-down-in {
    from {
      transform: translateY(3px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;var E=function(e,t,i,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const Ne=["SmartSessionList"],ze={PayWithExchange:F.tokens.theme.foregroundPrimary};function re(){var m,f,A,P,_,H,B,L;const e=(f=(m=l.state.data)==null?void 0:m.connector)==null?void 0:f.name,t=(P=(A=l.state.data)==null?void 0:A.wallet)==null?void 0:P.name,i=(H=(_=l.state.data)==null?void 0:_.network)==null?void 0:H.name,a=t??e,r=Z.getConnectors(),o=r.length===1&&((B=r[0])==null?void 0:B.id)==="w3m-email",n=(L=w.getAccountData())==null?void 0:L.socialProvider,s=n?n.charAt(0).toUpperCase()+n.slice(1):"Connect Social";return{Connect:`Connect ${o?"Email":""} Wallet`,Create:"Create Wallet",ChooseAccountName:void 0,Account:void 0,AccountSettings:void 0,AllWallets:"All Wallets",ApproveTransaction:"Approve Transaction",BuyInProgress:"Buy",ConnectingExternal:a??"Connect Wallet",ConnectingWalletConnect:a??"WalletConnect",ConnectingWalletConnectBasic:"WalletConnect",ConnectingSiwe:"Sign In",Convert:"Convert",ConvertSelectToken:"Select token",ConvertPreview:"Preview Convert",Downloads:a?`Get ${a}`:"Downloads",EmailLogin:"Email Login",EmailVerifyOtp:"Confirm Email",EmailVerifyDevice:"Register Device",GetWallet:"Get a Wallet",Networks:"Choose Network",OnRampProviders:"Choose Provider",OnRampActivity:"Activity",OnRampTokenSelect:"Select Token",OnRampFiatSelect:"Select Currency",Pay:"How you pay",ProfileWallets:"Wallets",SwitchNetwork:i??"Switch Network",Transactions:"Activity",UnsupportedChain:"Switch Network",UpgradeEmailWallet:"Upgrade Your Wallet",UpdateEmailWallet:"Edit Email",UpdateEmailPrimaryOtp:"Confirm Current Email",UpdateEmailSecondaryOtp:"Confirm New Email",WhatIsABuy:"What is Buy?",RegisterAccountName:"Choose Name",RegisterAccountNameSuccess:"",WalletReceive:"Receive",WalletCompatibleNetworks:"Compatible Networks",Swap:"Swap",SwapSelectToken:"Select Token",SwapPreview:"Preview Swap",WalletSend:"Send",WalletSendPreview:"Review Send",WalletSendSelectToken:"Select Token",WalletSendConfirmed:"Confirmed",WhatIsANetwork:"What is a network?",WhatIsAWallet:"What is a Wallet?",ConnectWallets:"Connect Wallet",ConnectSocials:"All Socials",ConnectingSocial:s,ConnectingMultiChain:"Select Chain",ConnectingFarcaster:"Farcaster",SwitchActiveChain:"Switch Chain",SmartSessionCreated:void 0,SmartSessionList:"Smart Sessions",SIWXSignMessage:"Sign In",PayLoading:"Payment in Progress",DataCapture:"Profile",DataCaptureOtpConfirm:"Confirm Email",FundWallet:"Fund Wallet",PayWithExchange:"Deposit from Exchange",PayWithExchangeSelectAsset:"Select Asset"}}let x=class extends k{constructor(){super(),this.unsubscribe=[],this.heading=re()[l.state.view],this.network=w.state.activeCaipNetwork,this.networkImage=Y.getNetworkImage(this.network),this.showBack=!1,this.prevHistoryLength=1,this.view=l.state.view,this.viewDirection="",this.unsubscribe.push(fe.subscribeNetworkImages(()=>{this.networkImage=Y.getNetworkImage(this.network)}),l.subscribeKey("view",t=>{setTimeout(()=>{this.view=t,this.heading=re()[t]},G.ANIMATION_DURATIONS.HeaderText),this.onViewChange(),this.onHistoryChange()}),w.subscribeKey("activeCaipNetwork",t=>{this.network=t,this.networkImage=Y.getNetworkImage(this.network)}))}disconnectCallback(){this.unsubscribe.forEach(t=>t())}render(){const t=ze[l.state.view]??F.tokens.theme.backgroundPrimary;return this.style.setProperty("--local-header-background-color",t),d`
      <wui-flex
        .padding=${["0","4","0","4"]}
        justifyContent="space-between"
        alignItems="center"
      >
        ${this.leftHeaderTemplate()} ${this.titleTemplate()} ${this.rightHeaderTemplate()}
      </wui-flex>
    `}onWalletHelp(){q.sendEvent({type:"track",event:"CLICK_WALLET_HELP"}),l.push("WhatIsAWallet")}async onClose(){await de.safeClose()}rightHeaderTemplate(){var i,a,r;const t=(r=(a=(i=R)==null?void 0:i.state)==null?void 0:a.features)==null?void 0:r.smartSessions;return l.state.view!=="Account"||!t?this.closeButtonTemplate():d`<wui-flex>
      <wui-icon-button
        icon="clock"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${()=>l.push("SmartSessionList")}
        data-testid="w3m-header-smart-sessions"
      ></wui-icon-button>
      ${this.closeButtonTemplate()}
    </wui-flex> `}closeButtonTemplate(){return d`
      <wui-icon-button
        icon="close"
        size="lg"
        type="neutral"
        variant="primary"
        iconSize="lg"
        @click=${this.onClose.bind(this)}
        data-testid="w3m-header-close"
      ></wui-icon-button>
    `}titleTemplate(){const t=Ne.includes(this.view);return d`
      <wui-flex
        view-direction="${this.viewDirection}"
        class="w3m-header-title"
        alignItems="center"
        gap="2"
      >
        <wui-text
          display="inline"
          variant="lg-regular"
          color="primary"
          data-testid="w3m-header-text"
        >
          ${this.heading}
        </wui-text>
        ${t?d`<wui-tag variant="accent" size="md">Beta</wui-tag>`:null}
      </wui-flex>
    `}leftHeaderTemplate(){var f;const{view:t}=l.state,i=t==="Connect",a=R.state.enableEmbedded,r=t==="ApproveTransaction",o=t==="ConnectingSiwe",n=t==="Account",s=R.state.enableNetworkSwitch,m=r||o||i&&a;return n&&s?d`<wui-select
        id="dynamic"
        data-testid="w3m-account-select-network"
        active-network=${S((f=this.network)==null?void 0:f.name)}
        @click=${this.onNetworks.bind(this)}
        imageSrc=${S(this.networkImage)}
      ></wui-select>`:this.showBack&&!m?d`<wui-icon-button
        data-testid="header-back"
        id="dynamic"
        icon="chevronLeft"
        size="lg"
        iconSize="lg"
        type="neutral"
        variant="primary"
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-button>`:d`<wui-icon-button
      data-hidden=${!i}
      id="dynamic"
      icon="helpCircle"
      size="lg"
      iconSize="lg"
      type="neutral"
      variant="primary"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-button>`}onNetworks(){this.isAllowedNetworkSwitch()&&(q.sendEvent({type:"track",event:"CLICK_NETWORKS"}),l.push("Networks"))}isAllowedNetworkSwitch(){const t=w.getAllRequestedCaipNetworks(),i=t?t.length>1:!1,a=t==null?void 0:t.find(({id:r})=>{var o;return r===((o=this.network)==null?void 0:o.id)});return i||!a}onViewChange(){const{history:t}=l.state;let i=G.VIEW_DIRECTION.Next;t.length<this.prevHistoryLength&&(i=G.VIEW_DIRECTION.Prev),this.prevHistoryLength=t.length,this.viewDirection=i}async onHistoryChange(){var a;const{history:t}=l.state,i=(a=this.shadowRoot)==null?void 0:a.querySelector("#dynamic");t.length>1&&!this.showBack&&i?(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!0,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"})):t.length<=1&&this.showBack&&i&&(await i.animate([{opacity:1},{opacity:0}],{duration:200,fill:"forwards",easing:"ease"}).finished,this.showBack=!1,i.animate([{opacity:0},{opacity:1}],{duration:200,fill:"forwards",easing:"ease"}))}onGoBack(){l.goBack()}};x.styles=Oe;E([h()],x.prototype,"heading",void 0);E([h()],x.prototype,"network",void 0);E([h()],x.prototype,"networkImage",void 0);E([h()],x.prototype,"showBack",void 0);E([h()],x.prototype,"prevHistoryLength",void 0);E([h()],x.prototype,"view",void 0);E([h()],x.prototype,"viewDirection",void 0);x=E([y("w3m-header")],x);const Te=I`
  :host {
    display: flex;
    align-items: center;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[2]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    box-shadow:
      0px 0px 8px 0px rgba(0, 0, 0, 0.1),
      inset 0 0 0 1px ${({tokens:e})=>e.theme.borderPrimary};
    max-width: 320px;
  }

  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e.round} !important;
    overflow: hidden;
  }

  wui-loading-spinner {
    padding: ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
    border-radius: ${({borderRadius:e})=>e.round} !important;
  }
`;var ee=function(e,t,i,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let D=class extends k{constructor(){super(...arguments),this.message="",this.variant="success"}render(){return d`
      ${this.templateIcon()}
      <wui-text variant="lg-regular" color="primary" data-testid="wui-snackbar-message"
        >${this.message}</wui-text
      >
    `}templateIcon(){const t={success:"success",error:"error",warning:"warning",info:"default"},i={success:"checkmark",error:"warning",warning:"warningCircle",info:"info"};return this.variant==="loading"?d`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:d`<wui-icon-box
      size="md"
      color=${t[this.variant]}
      icon=${i[this.variant]}
    ></wui-icon-box>`}};D.styles=[X,Te];ee([c()],D.prototype,"message",void 0);ee([c()],D.prototype,"variant",void 0);D=ee([y("wui-snackbar")],D);const De=we`
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`;var ue=function(e,t,i,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let M=class extends k{constructor(){super(),this.unsubscribe=[],this.timeout=void 0,this.open=O.state.open,this.unsubscribe.push(O.subscribeKey("open",t=>{this.open=t,this.onOpen()}))}disconnectedCallback(){clearTimeout(this.timeout),this.unsubscribe.forEach(t=>t())}render(){const{message:t,variant:i}=O.state;return d` <wui-snackbar message=${t} variant=${i}></wui-snackbar> `}onOpen(){clearTimeout(this.timeout),this.open?(this.animate([{opacity:0,transform:"translateX(-50%) scale(0.85)"},{opacity:1,transform:"translateX(-50%) scale(1)"}],{duration:150,fill:"forwards",easing:"ease"}),this.timeout&&clearTimeout(this.timeout),O.state.autoClose&&(this.timeout=setTimeout(()=>O.hide(),2500))):this.animate([{opacity:1,transform:"translateX(-50%) scale(1)"},{opacity:0,transform:"translateX(-50%) scale(0.85)"}],{duration:150,fill:"forwards",easing:"ease"})}};M.styles=De;ue([h()],M.prototype,"open",void 0);M=ue([y("w3m-snackbar")],M);const _e=I`
  :host {
    z-index: ${({tokens:e})=>e.core.zIndex};
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: ${({tokens:e})=>e.theme.overlay};
    backdrop-filter: blur(0px);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      backdrop-filter ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]};
    will-change: opacity;
  }

  :host(.open) {
    opacity: 1;
    backdrop-filter: blur(8px);
  }

  :host(.appkit-modal) {
    position: relative;
    pointer-events: unset;
    background: none;
    width: 100%;
    opacity: 1;
  }

  wui-card {
    max-width: var(--apkt-modal-width);
    width: 100%;
    position: relative;
    outline: none;
    transform: translateY(4px);
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
    transition:
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-2"]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e["ease-out-power-1"]};
    will-change: border-radius, background-color, transform, box-shadow;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    padding: var(--local-modal-padding);
    box-sizing: border-box;
  }

  :host(.open) wui-card {
    transform: translateY(0px);
  }

  wui-card::before {
    z-index: 1;
    pointer-events: none;
    content: '';
    position: absolute;
    inset: 0;
    border-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e["ease-out-power-2"]};
    transition-delay: ${({durations:e})=>e.md};
    will-change: box-shadow;
  }

  :host([data-mobile-fullscreen='true']) wui-card::before {
    border-radius: 0px;
  }

  :host([data-border='true']) wui-card::before {
    box-shadow: inset 0px 0px 0px 4px ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  :host([data-border='false']) wui-card::before {
    box-shadow: inset 0px 0px 0px 1px ${({tokens:e})=>e.theme.borderPrimaryDark};
  }

  :host([data-border='true']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-border var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: var(--apkt-duration-dynamic);
  }

  :host([data-border='false']) wui-card {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      card-background-default var(--apkt-duration-dynamic)
        ${({easings:e})=>e["ease-out-power-2"]};
    animation-fill-mode: backwards, both;
    animation-delay: 0s;
  }

  :host(.appkit-modal) wui-card {
    max-width: var(--apkt-modal-width);
  }

  wui-card[shake='true'] {
    animation:
      fade-in ${({durations:e})=>e.lg} ${({easings:e})=>e["ease-out-power-2"]},
      w3m-shake ${({durations:e})=>e.xl}
        ${({easings:e})=>e["ease-out-power-2"]};
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--apkt-spacing-6) 0px;
    }
  }

  @media (max-width: 430px) {
    :host([data-mobile-fullscreen='true']) {
      height: 100dvh;
    }
    :host([data-mobile-fullscreen='true']) wui-flex {
      align-items: stretch;
    }
    :host([data-mobile-fullscreen='true']) wui-card {
      max-width: 100%;
      height: 100%;
      border-radius: 0;
      border: none;
    }
    :host(:not([data-mobile-fullscreen='true'])) wui-flex {
      align-items: flex-end;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card {
      max-width: 100%;
      border-bottom: none;
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card[data-embedded='true'] {
      border-bottom-left-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
      border-bottom-right-radius: clamp(0px, var(--apkt-borderRadius-8), 44px);
    }

    :host(:not([data-mobile-fullscreen='true'])) wui-card:not([data-embedded='true']) {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
    }

    wui-card[shake='true'] {
      animation: w3m-shake 0.5s ${({easings:e})=>e["ease-out-power-2"]};
    }
  }

  @keyframes fade-in {
    0% {
      transform: scale(0.99) translateY(4px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes w3m-shake {
    0% {
      transform: scale(1) rotate(0deg);
    }
    20% {
      transform: scale(1) rotate(-1deg);
    }
    40% {
      transform: scale(1) rotate(1.5deg);
    }
    60% {
      transform: scale(1) rotate(-1.5deg);
    }
    80% {
      transform: scale(1) rotate(1deg);
    }
    100% {
      transform: scale(1) rotate(0deg);
    }
  }

  @keyframes card-background-border {
    from {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  @keyframes card-background-default {
    from {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
    to {
      background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    }
  }
`;var $=function(e,t,i,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const ne="scroll-lock",He={PayWithExchange:"0",PayWithExchangeSelectAsset:"0"};class v extends k{constructor(){super(),this.unsubscribe=[],this.abortController=void 0,this.hasPrefetched=!1,this.enableEmbedded=R.state.enableEmbedded,this.open=g.state.open,this.caipAddress=w.state.activeCaipAddress,this.caipNetwork=w.state.activeCaipNetwork,this.shake=g.state.shake,this.filterByNamespace=Z.state.filterByNamespace,this.padding=F.spacing[1],this.mobileFullScreen=R.state.enableMobileFullScreen,this.initializeTheming(),V.prefetchAnalyticsConfig(),this.unsubscribe.push(g.subscribeKey("open",t=>t?this.onOpen():this.onClose()),g.subscribeKey("shake",t=>this.shake=t),w.subscribeKey("activeCaipNetwork",t=>this.onNewNetwork(t)),w.subscribeKey("activeCaipAddress",t=>this.onNewAddress(t)),R.subscribeKey("enableEmbedded",t=>this.enableEmbedded=t),Z.subscribeKey("filterByNamespace",t=>{var i;this.filterByNamespace!==t&&!((i=w.getAccountData(t))!=null&&i.caipAddress)&&(V.fetchRecommendedWallets(),this.filterByNamespace=t)}),l.subscribeKey("view",()=>{this.dataset.border=ae.hasFooter()?"true":"false",this.padding=He[l.state.view]??F.spacing[1]}))}firstUpdated(){if(this.dataset.border=ae.hasFooter()?"true":"false",this.mobileFullScreen&&this.setAttribute("data-mobile-fullscreen","true"),this.caipAddress){if(this.enableEmbedded){g.close(),this.prefetch();return}this.onNewAddress(this.caipAddress)}this.open&&this.onOpen(),this.enableEmbedded&&this.prefetch()}disconnectedCallback(){this.unsubscribe.forEach(t=>t()),this.onRemoveKeyboardListener()}render(){return this.style.setProperty("--local-modal-padding",this.padding),this.enableEmbedded?d`${this.contentTemplate()}
        <w3m-tooltip></w3m-tooltip> `:this.open?d`
          <wui-flex @click=${this.onOverlayClick.bind(this)} data-testid="w3m-modal-overlay">
            ${this.contentTemplate()}
          </wui-flex>
          <w3m-tooltip></w3m-tooltip>
        `:null}contentTemplate(){return d` <wui-card
      shake="${this.shake}"
      data-embedded="${S(this.enableEmbedded)}"
      role="alertdialog"
      aria-modal="true"
      tabindex="0"
      data-testid="w3m-modal-card"
    >
      <w3m-header></w3m-header>
      <w3m-router></w3m-router>
      <w3m-footer></w3m-footer>
      <w3m-snackbar></w3m-snackbar>
      <w3m-alertbar></w3m-alertbar>
    </wui-card>`}async onOverlayClick(t){if(t.target===t.currentTarget){if(this.mobileFullScreen)return;await this.handleClose()}}async handleClose(){await de.safeClose()}initializeTheming(){const{themeVariables:t,themeMode:i}=be.state,a=ce.getColorTheme(i);ge(t,a)}onClose(){this.open=!1,this.classList.remove("open"),this.onScrollUnlock(),O.hide(),this.onRemoveKeyboardListener()}onOpen(){this.open=!0,this.classList.add("open"),this.onScrollLock(),this.onAddKeyboardListener()}onScrollLock(){const t=document.createElement("style");t.dataset.w3m=ne,t.textContent=`
      body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `,document.head.appendChild(t)}onScrollUnlock(){const t=document.head.querySelector(`style[data-w3m="${ne}"]`);t&&t.remove()}onAddKeyboardListener(){var i;this.abortController=new AbortController;const t=(i=this.shadowRoot)==null?void 0:i.querySelector("wui-card");t==null||t.focus(),window.addEventListener("keydown",a=>{if(a.key==="Escape")this.handleClose();else if(a.key==="Tab"){const{tagName:r}=a.target;r&&!r.includes("W3M-")&&!r.includes("WUI-")&&(t==null||t.focus())}},this.abortController)}onRemoveKeyboardListener(){var t;(t=this.abortController)==null||t.abort(),this.abortController=void 0}async onNewAddress(t){const i=w.state.isSwitchingNamespace,a=l.state.view==="ProfileWallets";t?await this.onConnected({caipAddress:t,isSwitchingNamespace:i,isInProfileView:a}):!i&&!this.enableEmbedded&&!a&&g.close(),await j.initializeIfEnabled(t),this.caipAddress=t,w.setIsSwitchingNamespace(!1)}async onConnected(t){if(t.isInProfileView)return;const{chainNamespace:i,chainId:a,address:r}=ye.parseCaipAddress(t.caipAddress),o=`${i}:${a}`,n=!ve.getPlainAddress(this.caipAddress),s=await j.getSessions({address:r,caipNetworkId:o}),m=j.getSIWX()?s.some(P=>P.data.accountAddress===r):!0,f=t.isSwitchingNamespace&&m&&!this.enableEmbedded,A=this.enableEmbedded&&n;f?l.goBack():A&&g.close()}onNewNetwork(t){var te,ie,oe;const i=this.caipNetwork,a=(te=i==null?void 0:i.caipNetworkId)==null?void 0:te.toString(),r=i==null?void 0:i.chainNamespace,o=(ie=t==null?void 0:t.caipNetworkId)==null?void 0:ie.toString(),n=t==null?void 0:t.chainNamespace,s=a!==o,f=s&&!(r!==n),A=(i==null?void 0:i.name)===xe.UNSUPPORTED_NETWORK_NAME,P=l.state.view==="ConnectingExternal",_=l.state.view==="ProfileWallets",H=!((oe=w.getAccountData(t==null?void 0:t.chainNamespace))!=null&&oe.caipAddress),B=l.state.view==="UnsupportedChain",L=g.state.open;let z=!1;this.enableEmbedded&&l.state.view==="SwitchNetwork"&&(z=!0),s&&ke.resetState(),L&&!P&&!_&&(H?s&&(z=!0):(B||f&&!A)&&(z=!0)),z&&l.state.view!=="SIWXSignMessage"&&l.goBack(),this.caipNetwork=t}prefetch(){this.hasPrefetched||(V.prefetch(),V.fetchWalletsByPage({page:1}),this.hasPrefetched=!0)}}v.styles=_e;$([c({type:Boolean})],v.prototype,"enableEmbedded",void 0);$([h()],v.prototype,"open",void 0);$([h()],v.prototype,"caipAddress",void 0);$([h()],v.prototype,"caipNetwork",void 0);$([h()],v.prototype,"shake",void 0);$([h()],v.prototype,"filterByNamespace",void 0);$([h()],v.prototype,"padding",void 0);$([h()],v.prototype,"mobileFullScreen",void 0);let se=class extends v{};se=$([y("w3m-modal")],se);let le=class extends v{};le=$([y("appkit-modal")],le);const Be=I`
  :host {
    width: 100%;
  }
`;var p=function(e,t,i,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};let u=class extends k{constructor(){super(...arguments),this.hasImpressionSent=!1,this.walletImages=[],this.imageSrc="",this.name="",this.size="md",this.tabIdx=void 0,this.disabled=!1,this.showAllWallets=!1,this.loading=!1,this.loadingSpinnerColor="accent-100",this.rdnsId="",this.displayIndex=void 0,this.walletRank=void 0}connectedCallback(){super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.cleanupIntersectionObserver()}updated(t){super.updated(t),(t.has("name")||t.has("imageSrc")||t.has("walletRank"))&&(this.hasImpressionSent=!1),t.has("walletRank")&&this.walletRank&&!this.intersectionObserver&&this.setupIntersectionObserver()}setupIntersectionObserver(){this.intersectionObserver=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&!this.loading&&!this.hasImpressionSent&&this.sendImpressionEvent()})},{threshold:.1}),this.intersectionObserver.observe(this)}cleanupIntersectionObserver(){this.intersectionObserver&&(this.intersectionObserver.disconnect(),this.intersectionObserver=void 0)}sendImpressionEvent(){!this.name||this.hasImpressionSent||!this.walletRank||(this.hasImpressionSent=!0,(this.rdnsId||this.name)&&q.sendWalletImpressionEvent({name:this.name,walletRank:this.walletRank,rdnsId:this.rdnsId,view:l.state.view,displayIndex:this.displayIndex}))}render(){return d`
      <wui-list-wallet
        .walletImages=${this.walletImages}
        imageSrc=${S(this.imageSrc)}
        name=${this.name}
        size=${S(this.size)}
        tagLabel=${S(this.tagLabel)}
        .tagVariant=${this.tagVariant}
        .walletIcon=${this.walletIcon}
        .tabIdx=${this.tabIdx}
        .disabled=${this.disabled}
        .showAllWallets=${this.showAllWallets}
        .loading=${this.loading}
        loadingSpinnerColor=${this.loadingSpinnerColor}
      ></wui-list-wallet>
    `}};u.styles=Be;p([c({type:Array})],u.prototype,"walletImages",void 0);p([c()],u.prototype,"imageSrc",void 0);p([c()],u.prototype,"name",void 0);p([c()],u.prototype,"size",void 0);p([c()],u.prototype,"tagLabel",void 0);p([c()],u.prototype,"tagVariant",void 0);p([c()],u.prototype,"walletIcon",void 0);p([c()],u.prototype,"tabIdx",void 0);p([c({type:Boolean})],u.prototype,"disabled",void 0);p([c({type:Boolean})],u.prototype,"showAllWallets",void 0);p([c({type:Boolean})],u.prototype,"loading",void 0);p([c({type:String})],u.prototype,"loadingSpinnerColor",void 0);p([c()],u.prototype,"rdnsId",void 0);p([c()],u.prototype,"displayIndex",void 0);p([c()],u.prototype,"walletRank",void 0);u=p([y("w3m-list-wallet")],u);const Le=I`
  :host {
    --local-duration-height: 0s;
    --local-duration: ${({durations:e})=>e.lg};
    --local-transition: ${({easings:e})=>e["ease-out-power-2"]};
  }

  .container {
    display: block;
    overflow: hidden;
    overflow: hidden;
    position: relative;
    height: var(--local-container-height);
    transition: height var(--local-duration-height) var(--local-transition);
    will-change: height, padding-bottom;
  }

  .container[data-mobile-fullscreen='true'] {
    overflow: scroll;
  }

  .page {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: auto;
    width: inherit;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: ${({tokens:e})=>e.theme.backgroundPrimary};
    border-bottom-left-radius: var(--local-border-bottom-radius);
    border-bottom-right-radius: var(--local-border-bottom-radius);
    transition: border-bottom-left-radius var(--local-duration) var(--local-transition);
  }

  .page[data-mobile-fullscreen='true'] {
    height: 100%;
  }

  .page-content {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  .footer {
    height: var(--apkt-footer-height);
  }

  div.page[view-direction^='prev-'] .page-content {
    animation:
      slide-left-out var(--local-duration) forwards var(--local-transition),
      slide-left-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  div.page[view-direction^='next-'] .page-content {
    animation:
      slide-right-out var(--local-duration) forwards var(--local-transition),
      slide-right-in var(--local-duration) forwards var(--local-transition);
    animation-delay: 0ms, var(--local-duration, ${({durations:e})=>e.lg});
  }

  @keyframes slide-left-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-left-in {
    from {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }

  @keyframes slide-right-out {
    from {
      transform: translateX(0px) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
    to {
      transform: translateX(-8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
  }

  @keyframes slide-right-in {
    from {
      transform: translateX(8px) scale(0.99);
      opacity: 0;
      filter: blur(4px);
    }
    to {
      transform: translateX(0) translateY(0) scale(1);
      opacity: 1;
      filter: blur(0px);
    }
  }
`;var C=function(e,t,i,a){var r=arguments.length,o=r<3?t:a===null?a=Object.getOwnPropertyDescriptor(t,i):a,n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(e,t,i,a);else for(var s=e.length-1;s>=0;s--)(n=e[s])&&(o=(r<3?n(o):r>3?n(t,i,o):n(t,i))||o);return r>3&&o&&Object.defineProperty(t,i,o),o};const Ve=60;let b=class extends k{constructor(){super(...arguments),this.resizeObserver=void 0,this.transitionDuration="0.15s",this.transitionFunction="",this.history="",this.view="",this.setView=void 0,this.viewDirection="",this.historyState="",this.previousHeight="0px",this.mobileFullScreen=R.state.enableMobileFullScreen,this.onViewportResize=()=>{this.updateContainerHeight()}}updated(t){if(t.has("history")){const i=this.history;this.historyState!==""&&this.historyState!==i&&this.onViewChange(i)}t.has("transitionDuration")&&this.style.setProperty("--local-duration",this.transitionDuration),t.has("transitionFunction")&&this.style.setProperty("--local-transition",this.transitionFunction)}firstUpdated(){var t;this.transitionFunction&&this.style.setProperty("--local-transition",this.transitionFunction),this.style.setProperty("--local-duration",this.transitionDuration),this.historyState=this.history,this.resizeObserver=new ResizeObserver(i=>{var a;for(const r of i)if(r.target===this.getWrapper()){let o=r.contentRect.height;const n=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");if(this.mobileFullScreen){const s=((a=window.visualViewport)==null?void 0:a.height)||window.innerHeight,m=this.getHeaderHeight();o=s-m-n,this.style.setProperty("--local-border-bottom-radius","0px")}else o=o+n,this.style.setProperty("--local-border-bottom-radius",n?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${o}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${o}px`}}),this.resizeObserver.observe(this.getWrapper()),this.updateContainerHeight(),window.addEventListener("resize",this.onViewportResize),(t=window.visualViewport)==null||t.addEventListener("resize",this.onViewportResize)}disconnectedCallback(){var i;const t=this.getWrapper();t&&this.resizeObserver&&this.resizeObserver.unobserve(t),window.removeEventListener("resize",this.onViewportResize),(i=window.visualViewport)==null||i.removeEventListener("resize",this.onViewportResize)}render(){return d`
      <div class="container" data-mobile-fullscreen="${S(this.mobileFullScreen)}">
        <div
          class="page"
          data-mobile-fullscreen="${S(this.mobileFullScreen)}"
          view-direction="${this.viewDirection}"
        >
          <div class="page-content">
            <slot></slot>
          </div>
        </div>
      </div>
    `}onViewChange(t){const i=t.split(",").filter(Boolean),a=this.historyState.split(",").filter(Boolean),r=a.length,o=i.length,n=i[i.length-1]||"",s=ce.cssDurationToNumber(this.transitionDuration);let m="";o>r?m="next":o<r?m="prev":o===r&&i[o-1]!==a[r-1]&&(m="next"),this.viewDirection=`${m}-${n}`,setTimeout(()=>{var f;this.historyState=t,(f=this.setView)==null||f.call(this,n)},s),setTimeout(()=>{this.viewDirection=""},s*2)}getWrapper(){var t;return(t=this.shadowRoot)==null?void 0:t.querySelector("div.page")}updateContainerHeight(){var r;const t=this.getWrapper();if(!t)return;const i=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--apkt-footer-height")||"0");let a=0;if(this.mobileFullScreen){const o=((r=window.visualViewport)==null?void 0:r.height)||window.innerHeight,n=this.getHeaderHeight();a=o-n-i,this.style.setProperty("--local-border-bottom-radius","0px")}else a=t.getBoundingClientRect().height+i,this.style.setProperty("--local-border-bottom-radius",i?"var(--apkt-borderRadius-5)":"0px");this.style.setProperty("--local-container-height",`${a}px`),this.previousHeight!=="0px"&&this.style.setProperty("--local-duration-height",this.transitionDuration),this.previousHeight=`${a}px`}getHeaderHeight(){return Ve}};b.styles=[Le];C([c({type:String})],b.prototype,"transitionDuration",void 0);C([c({type:String})],b.prototype,"transitionFunction",void 0);C([c({type:String})],b.prototype,"history",void 0);C([c({type:String})],b.prototype,"view",void 0);C([c({attribute:!1})],b.prototype,"setView",void 0);C([h()],b.prototype,"viewDirection",void 0);C([h()],b.prototype,"historyState",void 0);C([h()],b.prototype,"previousHeight",void 0);C([h()],b.prototype,"mobileFullScreen",void 0);b=C([y("w3m-router-container")],b);export{le as AppKitModal,u as W3mListWallet,se as W3mModal,v as W3mModalBase,b as W3mRouterContainer};
