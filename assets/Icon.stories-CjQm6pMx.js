import{a as o}from"./chunk-MZXVCX43-DWuJqIWT.js";import{I as i}from"./Icon-BQIPAAEI.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"Atoms/Icon",argTypes:{name:{description:"The icon name.",table:{type:{summary:"string"}},required:!0},size:{description:"The size of the icon.",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:["small","default","big"]},title:{description:"Add a hidden title for accessibily.",table:{type:{summary:"string"}}},type:{description:"The type of icon.",table:{type:{summary:"string"},defaultValue:{summary:"regular"}},control:{type:"select"},options:["light","regular","bold"]},click:{description:"Event at the click on the component.",table:{category:"Events"},action:"click"}},args:{name:"arrow-surrounded-right",size:"default",title:"",type:"regular"}},e={render:a=>({components:{SolarisIcon:i},setup(){return{args:a,clickElement:()=>o("click")}},template:'<SolarisIcon v-bind="args" @click="clickElement"/>'}),args:{name:"arrow-surrounded-right",size:"default",title:"",type:"regular"}};var t,r,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisIcon
    },
    setup() {
      const clickElement = () => action('click');
      return {
        args,
        clickElement
      };
    },
    template: \`<SolarisIcon v-bind="args" @click="clickElement"/>\`
  }),
  args: {
    name: 'arrow-surrounded-right',
    size: 'default',
    title: '',
    type: 'regular'
  }
}`,...(n=(r=e.parameters)==null?void 0:r.docs)==null?void 0:n.source}}};const g=["Icon"];export{e as Icon,g as __namedExportsOrder,d as default};
