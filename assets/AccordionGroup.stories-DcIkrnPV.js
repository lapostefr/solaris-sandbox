import{a as m}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as u}from"./AccordionGroup-BWRMP9HV.js";import{S as y}from"./AccordionNew-WSHOPDPw.js";import{r as n}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const f=["h2","h3","h4","h5","h6"],t="*If prop is used in AccordionGroup use v-bind on AccordionNew to get the value.*",e={accordionStyle:{description:"The accordion's background color.",table:{type:{summary:["transparent","white"]},defaultValue:{summary:"transparent"}},control:{type:"select"},options:["transparent","white"]},paddingLeftRight:{description:"**Only if type is default.** Add/remove left and right padding from title and content.",table:{type:{summary:"boolean"}},defaultValue:{summary:!0},control:"boolean"},size:{description:"The size of accordion.",table:{type:{summary:["small","medium"]},defaultValue:{summary:"small"}},control:{type:"select"},options:["small","medium"]},titleLevel:{description:"Level of section headings.",table:{type:{summary:["h2","h3","h4","h5","h6"]},defaultValue:{summary:"h3"}},control:{type:"select"},options:f},type:{description:"The style of accordion.",table:{type:{summary:["default","brand"]},defaultValue:{summary:"default"}},control:{type:"select"},options:["default","brand"]}};({...e,accordionStyle:{...e.accordionStyle,description:`${e.accordionStyle.description}${t}`},size:{...e.size,description:`${e.size.description}${t}`},paddingLeftRight:{...e.paddingLeftRight,description:`${e.paddingLeftRight.description}${t}`},titleLevel:{...e.titleLevel,description:`${e.titleLevel.description}${t}`},type:{...e.type,description:`${e.type.description}${t}`}});const g={...e,oneOpenOnly:{description:"Only one accordion can be opened at a time.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:"boolean"},spaceBetween:{description:"**Only if type is brand.** Add/remove space between accordions.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:"boolean"},slotDefault:{description:"Use the default slot to put SolarisAccordion components.<br/>You must pass these common props to the `SolarisAccordionNew` components using `v-bind`, passing a shared object between the SolarisAccordionNew.",table:{category:"Slots"}}},w={title:"Molecules/Accordion New/Accordion Group",argTypes:g,args:{accordionStyle:"transparent",oneOpenOnly:!1,paddingLeftRight:!0,size:"small",spaceBetween:!1,titleLevel:"h3",type:"default"}},o={render:s=>({components:{SolarisAccordionGroup:u,SolarisAccordionNew:y},setup(){const d=n(!1),l=n(!1),c=n(!1),p=m("expanded");return{args:s,handleExpanded:p,expandedA:d,expandedB:l,expandedC:c}},template:`
  <SolarisAccordionGroup v-bind="args">
    <template #default="{ expanded }">
      <SolarisAccordionNew v-model="expandedA" v-bind="{...args, id: 'id1', title: 'Accordion Title 1'}">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-model="expandedB" v-bind="{...args, id:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         'id2', title: 'Accordion Title 2'}">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-model="expandedC" v-bind="{...args, id: 'id3', title: 'Accordion Title 3'}">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>
    </template>
  </SolarisAccordionGroup>`}),args:{accordionStyle:"transparent",oneOpenOnly:!1,paddingLeftRight:!0,size:"small",spaceBetween:!1,titleLevel:"h3",type:"default"}};var i,a,r;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const expandedA = ref(false);
      const expandedB = ref(false);
      const expandedC = ref(false);
      const handleExpanded = action('expanded');
      return {
        args,
        handleExpanded,
        expandedA,
        expandedB,
        expandedC
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="args">
    <template #default="{ expanded }">
      <SolarisAccordionNew v-model="expandedA" v-bind="{...args, id: 'id1', title: 'Accordion Title 1'}">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-model="expandedB" v-bind="{...args, id:                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         'id2', title: 'Accordion Title 2'}">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>

      <SolarisAccordionNew v-model="expandedC" v-bind="{...args, id: 'id3', title: 'Accordion Title 3'}">
          <template v-slot:content>
            <p style="margin: 0;">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </template>
      </SolarisAccordionNew>
    </template>
  </SolarisAccordionGroup>\`
  }),
  args: {
    accordionStyle: 'transparent',
    oneOpenOnly: false,
    paddingLeftRight: true,
    size: 'small',
    spaceBetween: false,
    titleLevel: 'h3',
    type: 'default'
  }
}`,...(r=(a=o.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const q=["AccordionGroup"];export{o as AccordionGroup,q as __namedExportsOrder,w as default};
