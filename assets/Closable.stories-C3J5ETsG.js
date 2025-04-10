import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as m}from"./Tips-DYK7C8gW.js";import{a as d}from"./argsType-A-pWCbxt.js";import{r as C,w as v}from"./vue.esm-bundler-BiAlgFmf.js";import{L as g}from"./types-CX4OQ2kf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-CVaf2GGW.js";import"./useTips-CORXmiXO.js";const n=[{url:"#",label:"Add a link 1"},{url:"###",label:"Add a link 2",target:g.BLANK}],q={title:"Molecules/Tips (Legacy)",parameters:{docs:{description:{component:'This component is **deprecated**, use <a style="text-decoration: underline;" href="../?path=/story/molecules-callout--callout">SolarisCallout</a>'}}},argTypes:d,args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu auctor turpis. Suspendisse quam dui, volutpat at est nec, congue cursus diam. Sed id tellus posuere, mollis ligula non, accumsan magna. Ut ultrices vel sapien ac mollis. Curabitur in imperdiet dui. Morbi eu aliquam velit, at luctus urna.",icon:"action-tips",isClosable:!0,links:n,title:"Title of tips notification",titleLevel:"h3"}},i={render:e=>({components:{SolarisTips:m},setup(){const t=C(e.isOpen),r=l("Close"),c=l("Collapse"),p=l("Click");return v(()=>e.isOpen,u=>{t.value=u}),{args:e,elementClose:r,elementCollapse:c,elementClick:p,isOpenValue:t}},template:`
    <SolarisTips v-model="isOpenValue" v-bind="args" @close="elementClose" @collapse="elementCollapse" @click="elementClick">
       <template v-slot:description>${e.description}</template>
    </SolarisTips>
  `}),args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec fringilla sollicitudin sapien, vitae aliquet lacus convallis vitae. Morbi magna urna, sollicitudin cursus",icon:"action-tips",isClosable:!0,links:n,title:"Title of tips notification",titleLevel:"h3"}};var s,o,a;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    links,
    title: 'Title of tips notification',
    titleLevel: 'h3'
  }
}`,...(a=(o=i.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const M=["Closable"];export{i as Closable,M as __namedExportsOrder,q as default};
