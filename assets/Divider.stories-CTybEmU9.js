import{S as i}from"./Divider-DYf3QLxh.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const a=["solid","dashed","dotted"],d=["emphasis","default","quiet","ghost","light"],l={title:"Atoms/Divider",argTypes:{color:{description:"The color of the divider.",table:{type:{summary:"string"}},defaultValue:{summary:"emphasis"},control:{type:"select"},options:d},paddingTopBottom:{description:"The padding-top and padding-bottom of the divider.",table:{type:{summary:"number"}},defaultValue:{summary:16}},type:{description:"The kind of the divider.",table:{type:{summary:"string"}},defaultValue:{summary:"solid"},control:{type:"select"},options:a}},args:{color:"emphasis",paddingTopBottom:16,type:"solid"}},e={render:s=>({components:{SolarisDivider:i},setup(){return{args:s}},template:`<div style="background: #F5F5F5;">
                <SolarisDivider v-bind="args" />
             </div>`}),args:{color:"emphasis",paddingTopBottom:16,type:"solid"}};var t,o,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisDivider
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="background: #F5F5F5;">
                <SolarisDivider v-bind="args" />
             </div>\`
  }),
  args: {
    color: 'emphasis',
    paddingTopBottom: 16,
    type: 'solid'
  }
}`,...(r=(o=e.parameters)==null?void 0:o.docs)==null?void 0:r.source}}};const c=["Divider"];export{e as Divider,c as __namedExportsOrder,l as default};
