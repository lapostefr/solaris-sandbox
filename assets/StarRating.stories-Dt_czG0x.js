import{S as n}from"./StarRating-CtblAnkI.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const p={title:"Atoms/Star Rating",argTypes:{max:{description:"The number of stars.",table:{type:{summary:"number"}}},size:{description:"The size of stars.<br>Value must be entered in px which is converted to rem.",table:{type:{summary:"number"},defaultValue:{summary:16}}},type:{description:"The kind of stars",table:{type:{summary:"string"},defaultValue:{summary:"primary"}},control:{type:"select"},options:["primary","secondary"],required:!0},value:{description:"The number of selected stars.",table:{type:{summary:"number"}}}},args:{max:6,size:16,type:"primary",value:2}},e={render:s=>({components:{SolarisStarRating:n},setup(){return{args:s}},template:`<div style="margin: auto; width: 320px; height: 100vh;">
    <SolarisStarRating v-bind="args" />
  </div>`}),args:{max:6,size:16,type:"primary",value:3}};var r,t,a;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisStarRating
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="margin: auto; width: 320px; height: 100vh;">
    <SolarisStarRating v-bind="args" />
  </div>\`
  }),
  args: {
    max: 6,
    size: 16,
    type: 'primary',
    value: 3
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const u=["StarRating"];export{e as StarRating,u as __namedExportsOrder,p as default};
