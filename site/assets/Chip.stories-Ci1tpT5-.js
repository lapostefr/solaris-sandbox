import{a as t}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as a}from"./Chip-B19ZJG7d.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=["medium","small"],f={title:"Atoms/Chip",argTypes:{close:{description:"Displays the closing cross.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},disabled:{description:"Disabled the Chip.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:"boolean"},icon:{description:"The kind of icon.",table:{type:{summary:"string"},defaultValue:{summary:null}},control:{type:"select"},options:["action-tips","cart-feedback","cart-savings"]},size:{description:"The size of Chip.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}},control:{type:"select"},options:n},type:{description:"Type of Chip.",table:{type:{summary:["emphasis","default","quiet","ghost"]}},defaultValue:{summary:"default"},control:{type:"select"},options:["emphasis","default","quiet","ghost"]}},args:{close:!0,disabled:!1,icon:"action-tips",size:"medium",type:"default"}},e={render:i=>({components:{SolarisChip:a},setup(){return{args:i,clickElement:()=>t("click"),closeElement:()=>t("close")}},template:'<SolarisChip @click="clickElement" @close="closeElement" v-bind="args">Chip</SolarisChip>'}),args:{close:!0,disabled:!1,icon:"action-tips",size:"medium",type:"default"}};var s,o,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisChip
    },
    setup() {
      const clickElement = () => action('click');
      const closeElement = () => action('close');
      return {
        args,
        clickElement,
        closeElement
      };
    },
    template: \`<SolarisChip @click="clickElement" @close="closeElement" v-bind="args">Chip</SolarisChip>\`
  }),
  args: {
    close: true,
    disabled: false,
    icon: 'action-tips',
    size: 'medium',
    type: 'default'
  }
}`,...(l=(o=e.parameters)==null?void 0:o.docs)==null?void 0:l.source}}};const h=["Chip"];export{e as Chip,h as __namedExportsOrder,f as default};
