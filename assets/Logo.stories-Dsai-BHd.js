import{L as a}from"./Logo-BG6jVBM2.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./logo-Bjhj7hjj.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"Organisms/Header/Logo",component:a,argTypes:{type:{description:"The type of logo.",table:{type:{summary:"string"}},defaultValue:{summary:"regular"},control:{type:"select"},options:["regular","large",""]}},args:{type:"large",isPro:!1}},e={render:n=>({components:{Logo:a},setup(){return{args:n}},template:`<div style="margin: auto; width: 320px; height: 100vh;">
    <Logo v-bind="args" />
  </div>`}),args:{type:"regular",isPro:!1}};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      Logo
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="margin: auto; width: 320px; height: 100vh;">
    <Logo v-bind="args" />
  </div>\`
  }),
  args: {
    type: 'regular',
    isPro: false
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const l=["LogoStory"];export{e as LogoStory,l as __namedExportsOrder,m as default};
