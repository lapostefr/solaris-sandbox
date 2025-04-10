import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as l}from"./AccordionNew-aX8HdLx0.js";import{r as c}from"./vue.esm-bundler-BiAlgFmf.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Collapse-BNiXmgF_.js";const p=["h2","h3","h4","h5","h6"],t="*If prop is used in AccordionGroup use v-bind on AccordionNew to get the value.*",e={accordionStyle:{description:"The accordion's background color.",table:{type:{summary:"string"},defaultValue:{summary:"transparent"}},control:{type:"select"},options:["transparent","white"]},paddingLeftRight:{description:"**Only if type is default.** Add/remove left and right padding from title and content.",table:{type:{summary:"boolean"}},defaultValue:{summary:"true"},control:"boolean"},size:{description:"The size of accordion.",table:{type:{summary:"string"},defaultValue:{summary:"small"}},control:{type:"select"},options:["small","medium"]},titleLevel:{description:"Level of section headings.",table:{type:{summary:"string"},defaultValue:{summary:"h3"}},control:{type:"select"},options:p},type:{description:"The style of accordion.",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:["default","brand"]}},m={...e,accordionStyle:{...e.accordionStyle,description:`${e.accordionStyle.description} ${t}`},size:{...e.size,description:`${e.size.description} ${t}`},paddingLeftRight:{...e.paddingLeftRight,description:`${e.paddingLeftRight.description} ${t}`},titleLevel:{...e.titleLevel,description:`${e.titleLevel.description} ${t}`},type:{...e.type,description:`${e.type.description} ${t}`},disabled:{description:"Disabled the component.<br/> If you use the content slot with focusable childs, make sure these elements are disabled too (neither focusable nor ckickable).",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},expanded:{description:"The accordion is open if true.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:"boolean"},icon:{description:"Add an icon to the left of the title.",table:{type:{summary:"string"}},type:{required:!1}},id:{description:"The id of accordion.",table:{type:{summary:"string"}},type:{required:!0}},title:{description:"The title of accordion.",table:{type:{summary:"string"}},type:{required:!1}},slotTitle:{description:"Use the slot named *title* only if you have a specific use case, otherwise use the prop title.",table:{category:"Slots"}},slotContent:{description:"Use the slot named *content* to fill the accordion content according to your needs.",table:{category:"Slots"}},toggleExpand:{description:"Method launch at the toogle.",table:{category:"Events"}}},A={title:"Molecules/Accordion New",argTypes:m,args:{accordionStyle:"transparent",disabled:!1,icon:"package-delivery",id:"id1",paddingLeftRight:!0,size:"small",title:"Accordion title",titleLevel:"h3",type:"default"}},o={render:r=>({components:{SolarisAccordionNew:l},setup(){const d=c(!1);return{args:r,expanded:d,onExpandedChange:()=>{s("expanded changed")()}}},template:`
      <SolarisAccordionNew 
        v-model="expanded" 
        v-bind="args" 
        @click="onExpandedChange(expanded)"
      >
        <template v-slot:content>
          <p style="margin: 0;">Lorem ipsum dolor sit amet...</p>
        </template>
      </SolarisAccordionNew>
    `}),args:{accordionStyle:"transparent",disabled:!1,expanded:!1,icon:"package-delivery",id:"id1",paddingLeftRight:!0,size:"small",title:"Accordion title",titleLevel:"h3",type:"default"}};var a,i,n;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionNew
    },
    setup() {
      const expanded = ref(false);
      const onExpandedChange = () => {
        action('expanded changed')();
      };
      return {
        args,
        expanded,
        onExpandedChange
      };
    },
    template: \`
      <SolarisAccordionNew 
        v-model="expanded" 
        v-bind="args" 
        @click="onExpandedChange(expanded)"
      >
        <template v-slot:content>
          <p style="margin: 0;">Lorem ipsum dolor sit amet...</p>
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
}`,...(n=(i=o.parameters)==null?void 0:i.docs)==null?void 0:n.source}}};const L=["Accordion"];export{o as Accordion,L as __namedExportsOrder,A as default};
