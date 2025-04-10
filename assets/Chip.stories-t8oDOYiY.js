import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as r}from"./Chip-CIz2L5Ji.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=["medium","small"],h={title:"Atoms/Chip",argTypes:{close:{description:"Displays the closing cross.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},disabled:{description:"Disabled the Chip.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},icon:{description:"The kind of icon.",table:{type:{summary:"string"},defaultValue:{summary:"null"}},control:{type:"select"},options:["action-tips","cart-feedback","cart-savings"]},size:{description:"The size of Chip.",table:{type:{summary:"string"},defaultValue:{summary:"medium"}},control:{type:"select"},options:n},type:{description:"Type of Chip.",table:{type:{summary:["emphasis","default","quiet","ghost"].join(" | ")}},defaultValue:{summary:"default"},control:{type:"select"},options:["emphasis","default","quiet","ghost"]}},args:{close:!0,disabled:!1,icon:"action-tips",size:"medium",type:"default"}},e={render:a=>({components:{SolarisChip:r},setup(){const l=t("click"),c=t("close");return{args:a,clickElement:l,closeElement:c}},template:'<SolarisChip @click="clickElement" @close="closeElement" v-bind="args">Chip</SolarisChip>'}),args:{close:!0,disabled:!1,icon:"action-tips",size:"medium",type:"default"}};var s,o,i;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisChip
    },
    setup() {
      const clickElement = action('click');
      const closeElement = action('close');
      return {
        args,
        clickElement,
        closeElement
      };
    },
    template: '<SolarisChip @click="clickElement" @close="closeElement" v-bind="args">Chip</SolarisChip>'
  }),
  args: {
    close: true,
    disabled: false,
    icon: 'action-tips',
    size: 'medium',
    type: 'default'
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const b=["Chip"];export{e as Chip,b as __namedExportsOrder,h as default};
