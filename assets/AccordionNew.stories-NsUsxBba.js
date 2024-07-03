import{a as r}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as s}from"./AccordionNew-WSHOPDPw.js";import{r as l}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f={title:"Molecules/Accordion New",args:{accordionStyle:"transparent",disabled:!1,icon:"package-delivery",id:"id1",paddingLeftRight:!0,size:"small",title:"Accordion title",titleLevel:"h3",type:"default"}},e={render:i=>({components:{SolarisAccordionNew:s},setup(){const o=l(!1),d=r("expanded");return{args:i,elementExpanded:d,expanded:o}},template:`
  <SolarisAccordionNew v-model="expanded" v-bind="args">
    <template v-slot:content>
      <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </template>
  </SolarisAccordionNew>
  `}),args:{accordionStyle:"transparent",disabled:!1,expanded:!1,icon:"package-delivery",id:"id1",paddingLeftRight:!0,size:"small",title:"Accordion title",titleLevel:"h3",type:"default"}};var n,t,a;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionNew
    },
    setup() {
      const expanded = ref(false);
      const elementExpanded = action('expanded');
      return {
        args,
        elementExpanded,
        expanded
      };
    },
    template: \`
  <SolarisAccordionNew v-model="expanded" v-bind="args">
    <template v-slot:content>
      <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </template>
  </SolarisAccordionNew>
  \`
  }),
  args: {
    accordionStyle: 'transparent',
    disabled: false,
    expanded: false,
    icon: 'package-delivery',
    id: 'id1',
    paddingLeftRight: true,
    size: 'small',
    title: 'Accordion title',
    titleLevel: 'h3',
    type: 'default'
  }
}`,...(a=(t=e.parameters)==null?void 0:t.docs)==null?void 0:a.source}}};const x=["Accordion"];export{e as Accordion,x as __namedExportsOrder,f as default};
