import{S as s}from"./Loader-DHIAU4Qg.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n={title:"Atoms/Loader",parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:{color:{description:"Color for the Loader",table:{type:{summary:"string"}},control:{type:"select"},options:["emphasis","quiet","default","vsmp","danger","orange","comet"]}},args:{color:"default"}},r={render:t=>({components:{SolarisLoader:s},setup(){return{args:t}},template:`<div :style="{ width: '100px' }"><SolarisLoader v-bind="args" /></div>`}),args:{color:"default"}};var e,o,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisLoader
    },
    setup() {
      return {
        args
      };
    },
    template: '<div :style="{ width: \\'100px\\' }"><SolarisLoader v-bind="args" /></div>'
  }),
  args: {
    color: 'default'
  }
}`,...(a=(o=r.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const l=["LoaderStory"];export{r as LoaderStory,l as __namedExportsOrder,n as default};
