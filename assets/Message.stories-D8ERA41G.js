import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as o,a as t}from"./type-CS7yfaSO.js";import"./v4-CQkTLCs1.js";const r=Object.values(o),s=Object.values(t),g={title:"Atoms/Message",argTypes:{arrowWeight:{description:"Define the arrows weight",table:{type:{summary:r},defaultValue:{summary:o.Regular}},control:{type:"select"},options:r},bgColor:{description:"Define the shadow background color",table:{type:{summary:s},defaultValue:{summary:t.NeutralSoft}},control:{type:"select"},options:s}},args:{arrowWeight:o.Regular,bgColor:t.NeutralSoft,showArrows:!0}},e=i=>({props:Object.keys(i),methods:{clickStopElement:p("click-stop")},template:'<div style="background: gray; height: 100vh;"><SolarisShadow v-bind="$props" @goBack="clickStopElement" /></div>'});var a,c,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`(args: any) => ({
  props: Object.keys(args),
  methods: {
    clickStopElement: action('click-stop')
  },
  template: '<div style="background: gray; height: 100vh;"><SolarisShadow v-bind="$props" @goBack="clickStopElement" /></div>'
})`,...(l=(c=e.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const h=["Shadow"];export{e as Shadow,h as __namedExportsOrder,g as default};
