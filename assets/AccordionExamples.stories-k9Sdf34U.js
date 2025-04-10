import{S as o}from"./AccordionGroup-C1-_AbKu.js";import{S as r}from"./AccordionNew-aX8HdLx0.js";import{r as d}from"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-C-Sturzh.js";import"./Collapse-BNiXmgF_.js";const a={allAvailaibleElements:{expanded:!0,icon:"package-delivery",id:"id-elements",title:"Accordion title"},size:{defaultSmall:{id:"id-size-1",title:"Accordion title"},defaultMedium:{id:"id-size-2",size:"medium",title:"Accordion title"},brandSmall:{id:"id-size-3",title:"Accordion title",type:"brand"},brandMedium:{id:"id-size-4",size:"medium",title:"Accordion title",type:"brand"}},style:{defaultTransparent:{id:"id-style-1",title:"Accordion title"},defaultWhite:{id:"id-style-2",accordionStyle:"white",title:"Accordion title"},brandTransparent:{id:"id-style-3",title:"Accordion title",type:"brand"},brandWhite:{id:"id-style-4",accordionStyle:"white",title:"Accordion title",type:"brand"}},paddingLeftRight:{id:"id-padding-left-right",paddingLeftRight:!1,title:"Accordion title"},groupDefault:{size:"medium"},groupBrand:{id:"id-group-brand",size:"medium",spaceBetween:!1,type:"brand"},groupBrandSpaceBetween:{size:"medium",spaceBetween:!0,type:"brand"},groupOneOnlyOpen:{oneOpenOnly:!0,size:"medium",type:"brand"}},_="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",X={title:"Molecules/Accordion New/Examples",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs",docs:{description:{component:"You can use the **SolarisAccordion** component if you only have one. Otherwise, if you have a list of accordions, use the **SolarisAccordionGroup** component and put the SolarisAccordion component in the default slot."}}}},e=(n,t,q,f)=>{const I=f?`<template v-slot:title>${f}</template>`:"",Y=q||_,P=t==="slot"?`class="${t}"`:"";return`
  <SolarisAccordionNew ${t!=="slot"?`style="${t}"`:""} v-bind="${n}">
    ${I}
    <template v-slot:content>
      <div ${P}>${Y}</div>
    </template>
  </SolarisAccordionNew>`},i={render:n=>({components:{SolarisAccordionGroup:o,SolarisAccordionNew:r},setup(){const t=d(a.allAvailaibleElements);return{args:n,data:t}},template:e("data","slot","Slot content, place a Solaris component or a local component there according to your needs. For the title, you can also use the tiltle slot, but it's better to use the title prop.")})},s={render:n=>({components:{SolarisAccordionGroup:o,SolarisAccordionNew:r},setup(){const t=d(a.size.defaultSmall);return{args:n,data:t}},template:`
    <div style="font-family: Roboto; font-size: 1.5rem;">
      <p>Small default Accordion</p>
        ${e("data")}
      <p>Medium default Accordion</p>
        ${e("data","margin-bottom: 50px;")}
      <p>Small brand Accordion</p>
        ${e("data","margin-bottom: 50px;")}
      <p>Medium brand Accordion</p>
        ${e("data","margin-bottom: 50px;")}
    </div>
    `})},c={render:n=>({components:{SolarisAccordionGroup:o,SolarisAccordionNew:r},setup(){const t=d(a.style.defaultTransparent);return{args:n,data:t,datas:[a.style.defaultTransparent,a.style.defaultWhite,a.style.brandTransparent,a.style.brandWhite]}},template:`
  <div style="background: #F5F5F5; padding: 30px; font-family: Roboto; font-size: 1.5rem;">
    <p>Style default transparent</p>
      ${e("datas[0]","margin-bottom: 50px;")}
    <p>Style default white</p>
      ${e("datas[1]","margin-bottom: 50px;")}
    <p>Style brand transparent</p>
      ${e("datas[2]","margin-bottom: 50px;")}
    <p>Style brand white</p>
      ${e("datas[3]","margin-bottom: 50px;")}
  </div>`})},l={render:n=>({components:{SolarisAccordionGroup:o,SolarisAccordionNew:r},setup(){const t=d(a.paddingLeftRight);return{args:n,data:t}},template:e("data",void 0,"Only on default accordion. You can choose whether or not to put a left/right space in the title and content. In this example, the paddingLeftRight prop is set to false.")})},p={render:n=>({components:{SolarisAccordionGroup:o,SolarisAccordionNew:r},setup(){const t=d(a.groupDefault);return{args:n,data:t}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
      ${e("{...data, id: 'id-default-1', icon:'package-newsletter'}",void 0,"This example use the default type for accordion group and also uses the title slot.","Custom title 1")}
      ${e("{...data, id: 'id-default-2', icon:'misc-ghost', disabled: true}",void 0,"This example use the default type for accordion group and also uses the title slot.","Custom title 2 - disabled")}
      ${e("{...data, id: 'id-default-3', icon:'package-delivery', expanded: true}",void 0,"This example use the default type for accordion group. It also uses the title slot and expanded is set to true.","Custom title 3")}
    </template>
  </SolarisAccordionGroup>
  `})},u={render:n=>({components:{SolarisAccordionGroup:o,SolarisAccordionNew:r},setup(){const t=d(a.groupBrand);return{args:n,data:t}},template:`
    <SolarisAccordionGroup v-bind="data">
      <template v-slot:default>
      ${e("{...data, id: 'id-brand-1', title: 'Accordion Title 1', icon:'package-newsletter'}")}
      ${e("{...data, id: 'id-brand-2',title: 'Accordion Title 2 - disabled', icon:'misc-ghost', disabled: true}")}
      ${e("{...data, id: 'id-brand-3', title: 'Accordion Title 3',  icon:'package-delivery', expanded: true,}")}
      </template>
    </SolarisAccordionGroup>
    `})},m={render:n=>({components:{SolarisAccordionGroup:o,SolarisAccordionNew:r},setup(){const t=d(a.groupBrandSpaceBetween);return{args:n,data:t}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    ${e("{...data, id: 'id-default-sp-1', title: 'Accordion Title 1', icon:'package-newsletter'}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    ${e("{...data, id: 'id-brand-sp-2', title: 'Accordion Title 2', icon:'misc-ghost'}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    ${e("{...data, id: 'id-brand-sp-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    </template>
  </SolarisAccordionGroup>
  `})},g={render:n=>({components:{SolarisAccordionGroup:o,SolarisAccordionNew:r},setup(){const t=d(a.groupOneOnlyOpen);return{args:n,data:t}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    ${e("{...data, id: 'id-oneOnlyOpen-1', title: 'Accordion Title 1', icon:'package-newsletter'}")}
    ${e("{...data, id: 'id-oneOnlyOpen-2', title: 'Accordion Title 2', icon:'misc-ghost'}")}
    ${e("{...data, id: 'id-broneOnlyOpenand-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}")}
    </template>
  </SolarisAccordionGroup>
  `})};var A,h,b;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.allAvailaibleElements);
      return {
        args,
        data
      };
    },
    template: renderAccordion('data', 'slot', \`Slot content, place a Solaris component or a local component there according to your needs. For the title, you can also use the tiltle slot, but it's better to use the title prop.\`)
  })
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var y,S,x;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.size.defaultSmall);
      return {
        args,
        data
      };
    },
    template: \`
    <div style="font-family: Roboto; font-size: 1.5rem;">
      <p>Small default Accordion</p>
        \${renderAccordion('data')}
      <p>Medium default Accordion</p>
        \${renderAccordion('data', 'margin-bottom: 50px;')}
      <p>Small brand Accordion</p>
        \${renderAccordion('data', 'margin-bottom: 50px;')}
      <p>Medium brand Accordion</p>
        \${renderAccordion('data', 'margin-bottom: 50px;')}
    </div>
    \`
  })
}`,...(x=(S=s.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};var v,w,$;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.style.defaultTransparent);
      return {
        args,
        data,
        datas: [dataExamples.style.defaultTransparent, dataExamples.style.defaultWhite, dataExamples.style.brandTransparent, dataExamples.style.brandWhite]
      };
    },
    template: \`
  <div style="background: #F5F5F5; padding: 30px; font-family: Roboto; font-size: 1.5rem;">
    <p>Style default transparent</p>
      \${renderAccordion('datas[0]', 'margin-bottom: 50px;')}
    <p>Style default white</p>
      \${renderAccordion('datas[1]', 'margin-bottom: 50px;')}
    <p>Style brand transparent</p>
      \${renderAccordion('datas[2]', 'margin-bottom: 50px;')}
    <p>Style brand white</p>
      \${renderAccordion('datas[3]', 'margin-bottom: 50px;')}
  </div>\`
  })
}`,...($=(w=c.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var O,T,G;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.paddingLeftRight);
      return {
        args,
        data
      };
    },
    template: renderAccordion('data', undefined, \`Only on default accordion. You can choose whether or not to put a left/right space in the title and content. In this example, the paddingLeftRight prop is set to false.\`)
  })
}`,...(G=(T=l.parameters)==null?void 0:T.docs)==null?void 0:G.source}}};var B,k,z;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.groupDefault);
      return {
        args,
        data
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
      \${renderAccordion(\`{...data, id: 'id-default-1', icon:'package-newsletter'}\`, undefined, 'This example use the default type for accordion group and also uses the title slot.', 'Custom title 1')}
      \${renderAccordion(\`{...data, id: 'id-default-2', icon:'misc-ghost', disabled: true}\`, undefined, 'This example use the default type for accordion group and also uses the title slot.', 'Custom title 2 - disabled')}
      \${renderAccordion(\`{...data, id: 'id-default-3', icon:'package-delivery', expanded: true}\`, undefined, 'This example use the default type for accordion group. It also uses the title slot and expanded is set to true.', 'Custom title 3')}
    </template>
  </SolarisAccordionGroup>
  \`
  })
}`,...(z=(k=p.parameters)==null?void 0:k.docs)==null?void 0:z.source}}};var E,N,R;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.groupBrand);
      return {
        args,
        data
      };
    },
    template: \`
    <SolarisAccordionGroup v-bind="data">
      <template v-slot:default>
      \${renderAccordion(\`{...data, id: 'id-brand-1', title: 'Accordion Title 1', icon:'package-newsletter'}\`)}
      \${renderAccordion(\`{...data, id: 'id-brand-2',title: 'Accordion Title 2 - disabled', icon:'misc-ghost', disabled: true}\`)}
      \${renderAccordion(\`{...data, id: 'id-brand-3', title: 'Accordion Title 3',  icon:'package-delivery', expanded: true,}\`)}
      </template>
    </SolarisAccordionGroup>
    \`
  })
}`,...(R=(N=u.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var L,F,M;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.groupBrandSpaceBetween);
      return {
        args,
        data
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    \${renderAccordion(\`{...data, id: 'id-default-sp-1', title: 'Accordion Title 1', icon:'package-newsletter'}\`, undefined, 'Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.')}
    \${renderAccordion(\`{...data, id: 'id-brand-sp-2', title: 'Accordion Title 2', icon:'misc-ghost'}\`, undefined, 'Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.')}
    \${renderAccordion(\`{...data, id: 'id-brand-sp-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}\`, undefined, 'Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.')}
    </template>
  </SolarisAccordionGroup>
  \`
  })
}`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var C,W,D;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup,
      SolarisAccordionNew
    },
    setup() {
      const data = ref(dataExamples.groupOneOnlyOpen);
      return {
        args,
        data
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    \${renderAccordion(\`{...data, id: 'id-oneOnlyOpen-1', title: 'Accordion Title 1', icon:'package-newsletter'}\`)}
    \${renderAccordion(\`{...data, id: 'id-oneOnlyOpen-2', title: 'Accordion Title 2', icon:'misc-ghost'}\`)}
    \${renderAccordion(\`{...data, id: 'id-broneOnlyOpenand-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}\`)}
    </template>
  </SolarisAccordionGroup>
  \`
  })
}`,...(D=(W=g.parameters)==null?void 0:W.docs)==null?void 0:D.source}}};const Z=["AllAvailableElements","Sizes","Styles","PaddingLeftRigh","GroupDefault","GroupBrand","GroupSpaceBetween","GroupOneOpenOnly"];export{i as AllAvailableElements,u as GroupBrand,p as GroupDefault,g as GroupOneOpenOnly,m as GroupSpaceBetween,l as PaddingLeftRigh,s as Sizes,c as Styles,Z as __namedExportsOrder,X as default};
