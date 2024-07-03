import{a as r}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as c}from"./Tips-BDTz-Gue.js";import{l}from"./links-E0IU3pM7.js";import{r as p}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./generateId-DPOzJEtM.js";import"./useTips-lvOtqsXa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const b={title:"Molecules/Tips",args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu auctor turpis. Suspendisse quam dui, volutpat at est nec, congue cursus diam. Sed id tellus posuere, mollis ligula non, accumsan magna. Ut ultrices vel sapien ac mollis. Curabitur in imperdiet dui. Morbi eu aliquam velit, at luctus urna.",icon:"action-tips",links:l,title:"Title of tips notification",titleLevel:"h3"}},i={render:e=>({components:{SolarisTips:c},setup(){const o=p(e.isOpen),a=r("Click");return{args:e,elementClick:a,isOpenValue:o}},template:`
    <SolarisTips v-model="isOpenValue" v-bind="args" @click="elementClick">
      <template v-slot:description>${e.description}</template>
    </SolarisTips>
  `}),args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna, sollicitudin cursus",icon:"action-tips",links:l,isClosable:!1,isCollapse:!0,title:"Title of tips notification",titleLevel:"h3"}};var t,s,n;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTips
    },
    setup() {
      const isOpenValue = ref(args.isOpen);
      const elementClick = action('Click');
      return {
        args,
        elementClick,
        isOpenValue
      };
    },
    template: \`
    <SolarisTips v-model="isOpenValue" v-bind="args" @click="elementClick">
      <template v-slot:description>\${args.description}</template>
    </SolarisTips>
  \`
  }),
  args: {
    color: 'supernova',
    compact: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna, sollicitudin cursus',
    icon: 'action-tips',
    links: links,
    isClosable: false,
    isCollapse: true,
    title: 'Title of tips notification',
    titleLevel: 'h3'
  }
}`,...(n=(s=i.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const S=["Collapsable"];export{i as Collapsable,S as __namedExportsOrder,b as default};
