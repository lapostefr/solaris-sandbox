import{S as s}from"./Breadcrumb-DiQ6oC4f.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o=`[
  {
    label: string,
    url: string
  }
]`,n=[{label:"item1",url:"item1"},{label:"item2",url:"item2"},{label:"item3",url:"item3"}],d={title:"Atoms/Breadcrumb",component:s,argTypes:{items:{description:"List of elements of the breadcrumb in the downward direction.",table:{type:{summary:"array",detail:o}}}},args:{items:n}},r={render:m=>({components:{SolarisBreadcrumb:s},setup(){return{args:m}},template:'<SolarisBreadcrumb v-bind="args" />'}),args:{items:n}};var e,t,a;r.parameters={...r.parameters,docs:{...(e=r.parameters)==null?void 0:e.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: \`<SolarisBreadcrumb v-bind="args" />\`
  }),
  args: {
    items: items
  }
}`,...(a=(t=r.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const u=["Breadcrumb"];export{r as Breadcrumb,u as __namedExportsOrder,d as default};
