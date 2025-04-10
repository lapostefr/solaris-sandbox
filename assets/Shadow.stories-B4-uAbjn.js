import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./Shadow-ZXaEhb3j.js";import{S as t,a as e}from"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Button-CxIFeNFW.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DHIAU4Qg.js";const r=Object.values(t),a=Object.values(e),f={title:"Atoms/Shadow",argTypes:{arrowWeight:{description:"Define the arrows weight",table:{type:{summary:r.join(" | ")},defaultValue:{summary:t.Regular}},control:{type:"select"},options:r},bgColor:{description:"Define the shadow background color",table:{type:{summary:a.join(" | ")},defaultValue:{summary:e.NeutralSoft}},control:{type:"select"},options:a}},args:{arrowWeight:t.Regular,bgColor:e.NeutralSoft,showArrows:!0}},o={render:l=>({components:{SolarisShadow:m},setup(){const p=n("click-stop");return{args:l,clickStopElement:p}},template:'<div style="background: gray; height: 100vh;"><SolarisShadow v-bind="$props" @goBack="clickStopElement" /></div>'})};var s,i,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisShadow
    },
    setup() {
      const clickStopElement = action('click-stop');
      return {
        args,
        clickStopElement
      };
    },
    template: '<div style="background: gray; height: 100vh;"><SolarisShadow v-bind="$props" @goBack="clickStopElement" /></div>'
  })
}`,...(c=(i=o.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};const v=["Shadow"];export{o as Shadow,v as __namedExportsOrder,f as default};
