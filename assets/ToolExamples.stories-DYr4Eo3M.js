import{S as H}from"./HeaderTool-ClxNdi-w.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Loader-DHIAU4Qg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-C-Sturzh.js";const n={help:{id:"aide",icon:"action-help",label:"Aide",link:{url:"#",target:"_blank"},alternativeTitle:"Aide en ligne la Poste"},login:{id:"se-connecter",icon:"editing-profile",label:"Se Connecter",activeType:"theme"},cart:{id:"panier",icon:"cart-lock",label:"Panier",badge:{value:10,title:"10 articles dans votre panier"},link:{url:"#"},alternativeTitle:"Voir mon panier"},clientSpace:{id:"espace-client",label:"Espace client",activeType:"theme",subLabel:"Prénom",alternativeTitle:"Aller sur l'espace client"}},_={title:"Organisms/Header/Tool/Examples",parameters:{docs:{description:{component:"The **HeaderTool** component should be used in headers only. It has a version with a badge counter, loader, and a version with a subLabel."}}}},s=t=>({components:{SolarisHeaderTool:H},setup(){return{args:t}},template:'<SolarisHeaderTool v-bind="args" />'}),e=s.bind({});e.args=n.help;const a=s.bind({});a.args=n.login;const r=s.bind({});r.args=n.cart;const o={render:t=>({components:{SolarisHeaderTool:H},setup(){return{args:t}},template:`
      <SolarisHeaderTool v-bind="args">
        <template #icon>
          <span 
            class="lp-header-tool_avatar"
          >
            PN
          </span>
        </template>
      </SolarisHeaderTool>
  `})};o.args=n.clientSpace;var l,i,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any) => ({
  components: {
    SolarisHeaderTool
  },
  setup() {
    return {
      args
    };
  },
  template: '<SolarisHeaderTool v-bind="args" />'
})`,...(c=(i=e.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var p,d,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`(args: any) => ({
  components: {
    SolarisHeaderTool
  },
  setup() {
    return {
      args
    };
  },
  template: '<SolarisHeaderTool v-bind="args" />'
})`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var u,g,S;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`(args: any) => ({
  components: {
    SolarisHeaderTool
  },
  setup() {
    return {
      args
    };
  },
  template: '<SolarisHeaderTool v-bind="args" />'
})`,...(S=(g=r.parameters)==null?void 0:g.docs)==null?void 0:S.source}}};var T,b,v;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisHeaderTool
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <SolarisHeaderTool v-bind="args">
        <template #icon>
          <span 
            class="lp-header-tool_avatar"
          >
            PN
          </span>
        </template>
      </SolarisHeaderTool>
  \`
  })
}`,...(v=(b=o.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};const k=["Help","SeConnecter","Panier","EspaceClient"];export{o as EspaceClient,e as Help,r as Panier,a as SeConnecter,k as __namedExportsOrder,_ as default};
