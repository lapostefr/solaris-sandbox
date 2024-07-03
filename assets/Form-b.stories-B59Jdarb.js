import{C as p,L as v,S as f}from"./types-Dd7QR7uO.js";import{r as b}from"./index-B4CY61Am.js";import{r as s,w as g}from"./vue.esm-bundler-DD7xIM0D.js";import{s as S,l as y}from"./debugForm-DK5Cr3ff.js";import{a as n}from"./chunk-MZXVCX43-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";const h={checkboxB:{col:"12",type:"checkbox",props:{aria:{label:"name"},color:p.emphasis,dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,label:"Checkbox Label",name:"name",readonly:!1,value:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{},messages:{}}},numberField:{col:"12",type:"NumberField",props:{id:"NumberField",label:"Label Number Field (valid if equals 5)",name:"NumberField",min:1,max:99},validation:{validators:{test:e=>(console.log("elements-b.ts .test() ",e),e===5)},messages:{}}},rangeSlider:{col:"12",type:"rangeSlider",props:{color:"default",dataError:{active:!1,message:""},id:"monId",label:"Label Range Slider (valid if between 45 and 76)",max:200,message:"Voilà le message",min:0,rangeValues:{min:15,max:76},step:1,unit:"€"},validation:{validators:{test:e=>(console.log("elements-b.ts .test() ",e),e.min>=45&&e.max<=76)},messages:{}}},select:{col:"12",type:"select",props:{id:"type",name:"type",label:"Label Select",options:[{label:"Type 1",value:"type1"},{label:"Type 2",value:"type2"},{label:"Type 3",value:"type3"},{label:"Type 4",value:"type4"}]},validation:{validators:{required:b},messages:{required:"Le champ type est requis!"}}}},L={title:"Organisms/Form",argTypes:{},args:{colorStyle:p.default,elements:h,labelPosition:v.outside,size:f.small,value:{checkboxB:!0,numberField:2,rangeSlider:{min:45,max:76},select:"type1"}}},o={render:e=>({setup(){const c=s(S),l=s(null);g(()=>e.value,u=>{var t;n("v-model change")(u);const a=(t=l.value)==null?void 0:t.v$;y(a),n("Form is invalid?")(a==null?void 0:a.$invalid)},{deep:!0});const r={...e};return delete r.value,{args:e,otherProps:r,formSlot:c,form:l}},template:`<SolarisContainer>
  <h1>Fomulaire B</h1>
  <SolarisForm  ref="form" v-model="args.value" v-bind="otherProps">
    <template #beforeComponent><div class="slot" v-html="formSlot" /></template>
    <template #formEnd>
      <div class="actions">
        <SolarisButton size="large" color="default">Valider</SolarisButton>
        <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
      </div>
    </template>
  </SolarisForm>
  </SolarisContainer>`})};var i,m,d;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      const formSlot = ref(slotExample);
      const form = ref(null);
      watch(() => args.value,
      // = model
      val => {
        action('v-model change')(val);
        const v$ = (form.value as any)?.v$;
        logInvalidFormElements(v$);
        action('Form is invalid?')(v$?.$invalid);
      }, {
        deep: true
      });
      const otherProps = {
        ...args
      };
      delete otherProps.value;
      return {
        args,
        otherProps,
        formSlot,
        form
      };
    },
    template: \`<SolarisContainer>
  <h1>Fomulaire B</h1>
  <SolarisForm  ref="form" v-model="args.value" v-bind="otherProps">
    <template #beforeComponent><div class="slot" v-html="formSlot" /></template>
    <template #formEnd>
      <div class="actions">
        <SolarisButton size="large" color="default">Valider</SolarisButton>
        <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
      </div>
    </template>
  </SolarisForm>
  </SolarisContainer>\`
  })
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const z=["FormB"];export{o as FormB,z as __namedExportsOrder,L as default};
