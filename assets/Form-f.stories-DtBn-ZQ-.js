import{C as u,L as v,S as f}from"./types-Dd7QR7uO.js";import{s as g,l as b}from"./debugForm-DK5Cr3ff.js";import{o as h}from"./defaultOptions-wvr5blgf.js";import{o as S}from"./checkboxOptions-CEjxT4Ru.js";import{o as F}from"./options-Bt7MkW-R.js";import{r as s,w}from"./vue.esm-bundler-DD7xIM0D.js";import{a as n}from"./chunk-MZXVCX43-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";const y=[{value:"entree-1",label:"Entrée 1"},{value:"entree-2",label:"Entrée 2",disabled:!0},{value:"entree-3",label:"Entrée 3"},{value:"entree-4",label:"Entrée 4"},{value:"entree-5",label:"Entrée 5"},{value:"entree-6",label:"Entrée 6"}],E={dropdown:{col:"12",type:"dropdown",props:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:h,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",selectionType:"simple",size:"medium"},validation:{validators:{},messages:{}}},dropdownB:{col:"12",type:"dropdown",props:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Empty",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:[{optionsList:[]}],picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},dropdownC:{col:"12",type:"dropdownCheckbox",props:{active:"active",activeGroup:!0,dataError:{active:!1,message:""},id:"idTempCheckbox",label:"Label Dropdown Checkbox",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",name:"nameTempCheckbox",nesting:!1,options:S,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"default",type:"multi"},validation:{validators:{},messages:{}}},dropdownD:{col:"12",type:"dropdownSimple",props:{active:"active",dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Simple",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",name:"nameTemp",options:y,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label Select",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",options:F,placeholder:"-Sélectionner une option-",readonly:!1,size:"medium"},validation:{validators:{},messages:{}}}},$={title:"Organisms/Form",argTypes:{},args:{colorStyle:u.default,elements:E,labelPosition:v.inside,size:f.medium,value:{dropdownD:"entree-3",select:"2",dropdownC:["Option 1A"]}}},o={render:a=>({setup(){const p=s(g),t=s(null);w(()=>a.value,c=>{var r;n("v-model change")(c);const e=(r=t.value)==null?void 0:r.v$;b(e),n("Form is invalid?")(e==null?void 0:e.$invalid)},{deep:!0});const l={...a};return delete l.value,{args:a,otherProps:l,formSlot:p,form:t}},template:`<SolarisContainer>
      <h1>Fomulaire F</h1>
      <SolarisForm ref="form"  v-model="args.value" v-bind="otherProps">
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
      <h1>Fomulaire F</h1>
      <SolarisForm ref="form"  v-model="args.value" v-bind="otherProps">
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const k=["FormF"];export{o as FormF,k as __namedExportsOrder,$ as default};
