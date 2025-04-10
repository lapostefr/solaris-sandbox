import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as n}from"./Tips-DYK7C8gW.js";import{b as c}from"./argsType-A-pWCbxt.js";import{r as m}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./types-CX4OQ2kf.js";import"./generateId-CVaf2GGW.js";import"./useTips-CORXmiXO.js";const O={title:"Molecules/Tips (Legacy)",argTypes:c,args:{color:"supernova",compact:!1,description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu auctor turpis. Suspendisse quam dui, volutpat at est nec, congue cursus diam. Sed id tellus posuere, mollis ligula non, accumsan magna. Ut ultrices vel sapien ac mollis. Curabitur in imperdiet dui. Morbi eu aliquam velit, at luctus urna.",icon:"action-tips",links:[{label:"Link 1",url:"https://www.google.com"},{label:"Link 2",url:"https://www.google.com"}],title:"Title of tips notification",titleLevel:"h3"}},e={render:l=>({components:{SolarisTips:n},setup(){const a=m(l.isOpen),r=t("Click"),p=t("Collapse");return{args:l,elementClick:r,elementCollapse:p,isOpenValue:a}},template:`
    <SolarisTips v-model="isOpenValue" v-bind="args" @click="elementClick" @collapse="elementCollapse">
      <template v-slot:description>${l.description}</template>
    </SolarisTips>
  `})};var s,i,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTips
    },
    setup() {
      const isOpenValue = ref(args.isOpen);
      const elementClick = action('Click');
      const elementCollapse = action('Collapse');
      return {
        args,
        elementClick,
        elementCollapse,
        isOpenValue
      };
    },
    template: \`
    <SolarisTips v-model="isOpenValue" v-bind="args" @click="elementClick" @collapse="elementCollapse">
      <template v-slot:description>\${args.description}</template>
    </SolarisTips>
  \`
  })
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const w=["Collapsable"];export{e as Collapsable,w as __namedExportsOrder,O as default};
