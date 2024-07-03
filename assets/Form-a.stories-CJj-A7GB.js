import{a as l}from"./chunk-MZXVCX43-DWuJqIWT.js";import{r as n,o as v,w as h}from"./vue.esm-bundler-DD7xIM0D.js";import{r as i,m}from"./index-B4CY61Am.js";import{o as S}from"./optionsGroup-BeSfFgL2.js";import{o as g}from"./options-yUlKBJIZ.js";import{C as y,L as b,S as A}from"./types-Dd7QR7uO.js";import{s as F,l as x}from"./debugForm-DK5Cr3ff.js";import"./v4-D8aEg3BZ.js";const L={radioA:{col:"12",type:"radioGroup",props:{colorStyle:"emphasis",disabled:!1,layout:"list",options:S,readonly:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{required:i,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputA:{col:"12",type:"input",props:{autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",mandatory:!1,message:"Message depuis le sous-composant",name:"name",placeholder:"",readonly:!1,size:"medium",success:!1,type:"text"},validation:{validators:{required:i,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},checkboxA:{col:"12",type:"checkboxGroup",props:{disabled:!1,error:!1,layout:"list",nesting:!1,options:g,readonly:!1},validation:{validators:{},messages:{}}}},k={title:"Organisms/Form",argTypes:{},args:{colorStyle:y.default,elements:L,labelPosition:b.outside,size:A.small,value:{radioA:"Option 3",inputA:"Label A",checkboxA:["checkbox 1"]}}},t={render:e=>({setup(){const c=n(F),a=n(null);v(()=>{e.value.type="type1"}),h(()=>e.value,f=>{var r;l("v-model change")(f);const o=(r=a.value)==null?void 0:r.v$;x(o),l("Form is invalid?")(o==null?void 0:o.$invalid)},{deep:!0});const s={...e};return delete s.value,{args:e,otherProps:s,formSlot:c,form:a}},template:`<SolarisContainer>
    <h1>Fomulaire A</h1>

    <SolarisForm ref="form" v-model="args.value" v-bind="otherProps">
      <template #beforeComponent><div class="slot" v-html="formSlot" /></template>
      <template #formEnd>
        <div class="slot" v-html="formSlot" />
        <div class="slot" v-html="formSlot" />
        <div class="actions">
          <SolarisButton size="large" color="default">Valider</SolarisButton>
          <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
        </div>
      </template>
    </SolarisForm>
    </SolarisContainer>`})};var d,p,u;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      const formSlot = ref(slotExample);
      const form = ref(null);
      onMounted(() => {
        args.value.type = 'type1'; // TODO @LionelSabin à quoi sert cette ligne ?
      });
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
    <h1>Fomulaire A</h1>

    <SolarisForm ref="form" v-model="args.value" v-bind="otherProps">
      <template #beforeComponent><div class="slot" v-html="formSlot" /></template>
      <template #formEnd>
        <div class="slot" v-html="formSlot" />
        <div class="slot" v-html="formSlot" />
        <div class="actions">
          <SolarisButton size="large" color="default">Valider</SolarisButton>
          <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
        </div>
      </template>
    </SolarisForm>
    </SolarisContainer>\`
  })
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const O=["FormA"];export{t as FormA,O as __namedExportsOrder,k as default};
