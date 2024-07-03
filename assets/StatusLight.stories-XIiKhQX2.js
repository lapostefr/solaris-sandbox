import{S as o}from"./StatusLight-CwzfveYw.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=["error","success","warning","quiet","informational"],g={title:"Atoms/Badge/Status Light",component:o,argTypes:{color:{description:"The colors of the text and background for the status.",table:{type:{summary:"string"}},defaultValue:{summary:"quiet"},control:{type:"select"},options:n}},args:{color:"quiet"}},t={render:a=>({components:{SolarisStatusLight:o},setup(){return{args:a}},template:`<div style="margin: auto; width: 320px; height: 100vh;">
    <SolarisStatusLight v-bind="args" />
  </div>`}),args:{color:"quiet"}};var r,e,s;t.parameters={...t.parameters,docs:{...(r=t.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisStatusLight
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="margin: auto; width: 320px; height: 100vh;">
    <SolarisStatusLight v-bind="args" />
  </div>\`
  }),
  args: {
    color: 'quiet'
  }
}`,...(s=(e=t.parameters)==null?void 0:e.docs)==null?void 0:s.source}}};const l=["StatusLight"];export{t as StatusLight,l as __namedExportsOrder,g as default};
