import{S as o}from"./List-EdjxT0Mk.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i=["Item 1","Item 2","Item 3","Item 4"],d={title:"Atoms/List",argTypes:{items:{description:"Define all items of the list",table:{type:{summary:"array"}}},orderedList:{description:"Show an ordered list if is true",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:"boolean"},size:{description:"The size of the list",table:{type:{summary:"string"},defaultValue:{summary:"small"}},control:{type:"select"},options:["responsive","small","medium","large"]},icon:{description:"The icon of the list",table:{type:{summary:"string"},defaultValue:{summary:"action-check"}},control:{type:"select"},options:["action-check-surrounded","action-check","bullet"]}},args:{items:i,orderedList:!1,icon:"action-check",size:"small"}},e={render:a=>({components:{SolarisList:o},setup(){return{args:a}},template:`<div style="margin: 0 auto; width: 320px; height: 100vh;">
    <SolarisList v-bind="args" />
  </div>`}),args:{items:i,orderedList:!1,icon:"action-check",size:"small"}};var t,s,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisList
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="margin: 0 auto; width: 320px; height: 100vh;">
    <SolarisList v-bind="args" />
  </div>\`
  }),
  args: {
    items: items,
    orderedList: false,
    icon: 'action-check',
    size: 'small'
  }
}`,...(r=(s=e.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const p=["ListStory"];export{e as ListStory,p as __namedExportsOrder,d as default};
