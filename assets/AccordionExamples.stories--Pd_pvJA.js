import{S as o}from"./AccordionGroup-BWRMP9HV.js";import{r as a}from"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const r={allAvailaibleElements:{expanded:!0,icon:"package-delivery",id:"id-elements",title:"Accordion title"},size:{defaultSmall:{id:"id-size-1",title:"Accordion title"},defaultMedium:{id:"id-size-2",size:"medium",title:"Accordion title"},brandSmall:{id:"id-size-3",title:"Accordion title",type:"brand"},brandMedium:{id:"id-size-4",size:"medium",title:"Accordion title",type:"brand"}},style:{defaultTransparent:{id:"id-style-1",title:"Accordion title"},defaultWhite:{id:"id-style-2",accordionStyle:"white",title:"Accordion title"},brandTransparent:{id:"id-style-3",title:"Accordion title",type:"brand"},brandWhite:{id:"id-style-4",accordionStyle:"white",title:"Accordion title",type:"brand"}},paddingLeftRight:{id:"id-padding-left-right",paddingLeftRight:!1,title:"Accordion title"},groupDefault:{size:"medium"},groupBrand:{size:"medium",spaceBetween:!1,type:"brand"},groupBrandSpaceBetween:{size:"medium",spaceBetween:!0,type:"brand"},groupOneOnlyOpen:{oneOpenOnly:!0,size:"medium",type:"brand"}},W="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",J={title:"Molecules/Accordion New/Examples",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs",docs:{description:{component:"You can use the **SolarisAccordion** component if you only have one. Otherwise, if you have a list of accordions, use the **SolarisAccordionGroup** component and put the SolarisAccordion component in the default slot."}}}},e=(n,t,I,g)=>{const N=g?`<template v-slot:title>${g}</template>`:"",Y=I||W,P=t==="slot"?`class="${t}"`:"";return`
  <SolarisAccordionNew ${t!=="slot"?`style="${t}"`:""} v-bind="${n}">
    ${N}
    <template v-slot:content>
      <div ${P}>${Y}</div>
    </template>
  </SolarisAccordionNew>`},d={render:n=>({components:{SolarisAccordionGroup:o},setup(){return a(r.allAvailaibleElements),{args:n}},template:e("data","slot","Slot content, place a Solaris component or a local component there according to your needs. For the title, you can also use the tiltle slot, but it's better to use the title prop.")})},i={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=a(r.size.defaultSmall);return{args:n,data:t}},template:`
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
    `})},s={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=a(r.style.defaultTransparent);return{args:n,data:t}},template:`
  <div style="background: #F5F5F5; padding: 30px; font-family: Roboto; font-size: 1.5rem;">
    <p>Style default transparent</p>
      ${e("datas[0]","margin-bottom: 50px;")}
    <p>Style default white</p>
      ${e("datas[1]","margin-bottom: 50px;")}
    <p>Style brand transparent</p>
      ${e("datas[2]","margin-bottom: 50px;")}
    <p>Style brand white</p>
      ${e("datas[3]","margin-bottom: 50px;")}
  </div>`})},c={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=a(r.paddingLeftRight);return{args:n,data:t}},template:e("data",void 0,"Only on default accordion. You can choose whether or not to put a left/right space in the title and content. In this example, the paddingLeftRight prop is set to false.")})},l={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=a(r.groupDefault);return{args:n,data:t}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
      ${e("{...data, id: 'id-default-1', icon:'package-newsletter'}",void 0,"This example use the default type for accordion group and also uses the title slot.","Custom title 1")}
      ${e("{...data, id: 'id-default-2', icon:'misc-ghost', disabled: true}",void 0,"This example use the default type for accordion group and also uses the title slot.","Custom title 2 - disabled")}
      ${e("{...data, id: 'id-default-3', icon:'package-delivery', expanded: true}",void 0,"This example use the default type for accordion group. It also uses the title slot and expanded is set to true.","Custom title 3")}
    </template>
  </SolarisAccordionGroup>
  `})},p={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=a(r.groupBrand);return{args:n,data:t}},template:`
    <div style="font-family: Roboto; font-size: 1.5rem;">
      <p>Brand group</p>
        ${e("data")}
      <p>Brand group with title</p>
        ${e("data","margin-bottom: 50px;")}
      <p>Brand group with content</p>
        ${e("data","margin-bottom: 50px;")}
    </div>
    `})},u={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=a(r.groupBrandSpaceBetween);return{args:n,data:t}},template:`
  <SolarisAccordionGroup v-bind="data">
    <template v-slot:default>
    ${e("{...data, id: 'id-default-sp-1', title: 'Accordion Title 1', icon:'package-newsletter'}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    ${e("{...data, id: 'id-brand-sp-2', title: 'Accordion Title 2', icon:'misc-ghost'}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    ${e("{...data, id: 'id-brand-sp-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}",void 0,"Only on brand accordion. This example shows a brand accordion group with the spaceBetween prop set to true.")}
    </template>
  </SolarisAccordionGroup>
  `})},m={render:n=>({components:{SolarisAccordionGroup:o},setup(){const t=a(r.groupOneOnlyOpen);return{args:n,data:t}},template:`
  <SolarisAccordionGroup v-bind="datas[0]">
    <template v-slot:default>
    ${e("{...datas[0], id: 'id-oneOnlyOpen-1', title: 'Accordion Title 1', icon:'package-newsletter'}")}
    ${e("{...datas[0], id: 'id-oneOnlyOpen-2', title: 'Accordion Title 2', icon:'misc-ghost'}")}
    ${e("{...datas[0], id: 'id-broneOnlyOpenand-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}")}
    </template>
  </SolarisAccordionGroup>
  `})};var f,h,y;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.allAvailaibleElements);
      return {
        args
      };
    },
    template: renderAccordion('data', 'slot', \`Slot content, place a Solaris component or a local component there according to your needs. For the title, you can also use the tiltle slot, but it's better to use the title prop.\`)
  })
}`,...(y=(h=d.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var A,b,S;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
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
}`,...(S=(b=i.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var x,$,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.style.defaultTransparent);
      return {
        args,
        data
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
}`,...(v=($=s.parameters)==null?void 0:$.docs)==null?void 0:v.source}}};var w,O,G;c.parameters={...c.parameters,docs:{...(w=c.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
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
}`,...(G=(O=c.parameters)==null?void 0:O.docs)==null?void 0:G.source}}};var T,B,z;l.parameters={...l.parameters,docs:{...(T=l.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
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
}`,...(z=(B=l.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var k,E,R;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.groupBrand);
      return {
        args,
        data
      };
    },
    template: \`
    <div style="font-family: Roboto; font-size: 1.5rem;">
      <p>Brand group</p>
        \${renderAccordion('data')}
      <p>Brand group with title</p>
        \${renderAccordion('data', 'margin-bottom: 50px;')}
      <p>Brand group with content</p>
        \${renderAccordion('data', 'margin-bottom: 50px;')}
    </div>
    \`
  })
}`,...(R=(E=p.parameters)==null?void 0:E.docs)==null?void 0:R.source}}};var L,F,M;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
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
}`,...(M=(F=u.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var C,D,q;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisAccordionGroup
    },
    setup() {
      const data = ref(dataExamples.groupOneOnlyOpen);
      return {
        args,
        data
      };
    },
    template: \`
  <SolarisAccordionGroup v-bind="datas[0]">
    <template v-slot:default>
    \${renderAccordion(\`{...datas[0], id: 'id-oneOnlyOpen-1', title: 'Accordion Title 1', icon:'package-newsletter'}\`)}
    \${renderAccordion(\`{...datas[0], id: 'id-oneOnlyOpen-2', title: 'Accordion Title 2', icon:'misc-ghost'}\`)}
    \${renderAccordion(\`{...datas[0], id: 'id-broneOnlyOpenand-3', title: 'Accordion Title 3', icon:'package-delivery', expanded: true}\`)}
    </template>
  </SolarisAccordionGroup>
  \`
  })
}`,...(q=(D=m.parameters)==null?void 0:D.docs)==null?void 0:q.source}}};const K=["AllAvailableElements","Sizes","Styles","PaddingLeftRigh","GroupDefault","GroupBrand","GroupSpaceBetween","GroupOneOpenOnly"];export{d as AllAvailableElements,p as GroupBrand,l as GroupDefault,m as GroupOneOpenOnly,u as GroupSpaceBetween,c as PaddingLeftRigh,i as Sizes,s as Styles,K as __namedExportsOrder,J as default};
