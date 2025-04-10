import{S as s}from"./Breadcrumb-Db3gbCKw.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o=`[
  {
    label: string,
    url: string
  }
]`,i=[{label:"item1",url:"item1"},{label:"item2",url:"item2"},{label:"item3",url:"item3"}],c={title:"Atoms/Breadcrumb",component:s,argTypes:{ariaLabel:{description:`Accessible label for the breadcrumb navigation. If empty, default is "Fil d'ariane"`,control:"text",table:{type:{summary:"string"}},defaultValue:{summary:"Fil d'ariane"}},items:{description:"List of elements of the breadcrumb in the downward direction.",table:{type:{summary:"array",detail:o}}}},args:{items:i,ariaLabel:""}},e={render:m=>({components:{SolarisBreadcrumb:s},setup(){return{args:m}},template:'<SolarisBreadcrumb v-bind="args" />'}),args:{items:i}};var r,a,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisBreadcrumb
    },
    setup() {
      return {
        args
      };
    },
    template: '<SolarisBreadcrumb v-bind="args" />'
  }),
  args: {
    items: items
  }
}`,...(t=(a=e.parameters)==null?void 0:a.docs)==null?void 0:t.source}}};const u=["Breadcrumb"];export{e as Breadcrumb,u as __namedExportsOrder,c as default};
