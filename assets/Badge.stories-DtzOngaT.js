import{S as s}from"./Badge-1r0E9Zx3.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=["pink","grey","yellow","green","purple","maroon","dark-blue","dodger-blue","success","promo","supernova","neutral","cobalt","info"],d=["default","compact"],p={title:"Atoms/Badge/Badge",argTypes:{color:{description:"The colors of the text and background for the badge.",table:{type:{summary:"string"}},defaultValue:{summary:"cobalt"},control:{type:"select"},options:n},icon:{description:"Optional icon before the text.",table:{type:{summary:"string"}},control:"text"},size:{description:"The size for the badge : size and weight for text, line-height and padding.",table:{type:{summary:"string"}},defaultValue:{summary:"default"},control:{type:"select"},options:d}},args:{color:"cobalt",icon:"action-check",size:"default"}},e={render:r=>({components:{SolarisBadge:s},setup(){return{args:r}},template:'<SolarisBadge v-bind="args">Badge</SolarisBadge>'})};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBadge
    },
    setup() {
      return {
        args
      };
    },
    template: \`<SolarisBadge v-bind="args">Badge</SolarisBadge>\`
  })
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const g=["Badge"];export{e as Badge,g as __namedExportsOrder,p as default};
