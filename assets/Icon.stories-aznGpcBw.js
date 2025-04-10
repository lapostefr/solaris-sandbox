import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as i}from"./Icon-C-Sturzh.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const u={title:"Atoms/Icon",argTypes:{name:{description:"The icon name.",table:{type:{summary:"string"}},required:!0},size:{description:"The size of the icon.",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:["small","default","big"]},title:{description:"Add a hidden title for accessibily.",table:{type:{summary:"string"}}},type:{description:"The type of icon.",table:{type:{summary:"string"},defaultValue:{summary:"regular"}},control:{type:"select"},options:["light","regular","bold"]},onClick:{description:"Event at the click on the component.",table:{category:"Events"},action:"click"}},args:{name:"arrow-surrounded-right",size:"default",title:"",type:"regular"}},e={render:o=>({components:{SolarisIcon:i},setup(){const a=c("click");return{args:o,clickElement:a}},template:'<SolarisIcon v-bind="args" @click="clickElement"/>'})};var t,n,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisIcon
    },
    setup() {
      const clickElement = action('click');
      return {
        args,
        clickElement
      };
    },
    template: \`<SolarisIcon v-bind="args" @click="clickElement"/>\`
  })
}`,...(r=(n=e.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};const y=["Icon"];export{e as Icon,y as __namedExportsOrder,u as default};
