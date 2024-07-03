import{a as l}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as m}from"./Tips-BDTz-Gue.js";import{l as a}from"./links-E0IU3pM7.js";import{r as d,w as C}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./generateId-DPOzJEtM.js";import"./useTips-lvOtqsXa.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const L={title:"Molecules/Tips",args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu auctor turpis. Suspendisse quam dui, volutpat at est nec, congue cursus diam. Sed id tellus posuere, mollis ligula non, accumsan magna. Ut ultrices vel sapien ac mollis. Curabitur in imperdiet dui. Morbi eu aliquam velit, at luctus urna.",icon:"action-tips",isClosable:!0,links:a,title:"Title of tips notification",titleLevel:"h3"}},i={render:e=>({components:{SolarisTips:m},setup(){const s=d(e.isOpen),c=l("Close"),r=l("Collapse"),p=l("Click");return C(()=>e.isOpen,u=>{s.value=u}),{args:e,elementClose:c,elementCollapse:r,elementClick:p,isOpenValue:s}},template:`
    <SolarisTips v-model="isOpenValue" v-bind="args" @close="elementClose" @collapse="elementCollapse" @click="elementClick">
       <template v-slot:description>${e.description}</template>
    </SolarisTips>
  `}),args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna, sollicitudin cursus",icon:"action-tips",isClosable:!0,links:a,title:"Title of tips notification",titleLevel:"h3"}};var t,n,o;i.parameters={...i.parameters,docs:{...(t=i.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTips
    },
    setup() {
      const isOpenValue = ref(args.isOpen);
      const elementClose = action('Close');
      const elementCollapse = action('Collapse');
      const elementClick = action('Click');
      watch(() => args.isOpen, (value: boolean) => {
        isOpenValue.value = value;
      });
      return {
        args,
        elementClose,
        elementCollapse,
        elementClick,
        isOpenValue
      };
    },
    template: \`
    <SolarisTips v-model="isOpenValue" v-bind="args" @close="elementClose" @collapse="elementCollapse" @click="elementClick">
       <template v-slot:description>\${args.description}</template>
    </SolarisTips>
  \`
  }),
  args: {
    color: 'supernova',
    compact: false,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna, sollicitudin cursus',
    icon: 'action-tips',
    isClosable: true,
    links: links,
    title: 'Title of tips notification',
    titleLevel: 'h3'
  }
}`,...(o=(n=i.parameters)==null?void 0:n.docs)==null?void 0:o.source}}};const V=["Closable"];export{i as Closable,V as __namedExportsOrder,L as default};
