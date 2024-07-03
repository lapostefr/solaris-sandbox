import{i as n}from"./isValidDate-CEoz4-cc.js";import{C as v,L as f,S as g}from"./types-Dd7QR7uO.js";import{s as S,l as b}from"./debugForm-DK5Cr3ff.js";import{r as s,w as y}from"./vue.esm-bundler-DD7xIM0D.js";import{a as i}from"./chunk-MZXVCX43-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";const h=[],D={datepickerInterval:{col:"12",type:"datepicker",props:{holidays:!0,blackList:[1704892448,1708434848],buttonLayout:"centered",dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/02/2024"},id:"calendar",inputReadonly:!1,name:"calendar",size:"large",start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1},validation:{validators:{isValidDate:n},messages:{isValidDate:"Le format de la date est incorrect"}}},fileUploader:{col:"12",type:"fileUploader",props:{digiposte:!0,error:!1,extension:[".jpg",".pdf"],filelist:h,id:"monId",label:"Parcourir",subtitle:"",name:"name",titleError:"Vous avez téléchargé un document non valide",textError:"Lorem ipsum dolor sit lorem a amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",buttonType:"primary",buttonColor:"supernova"},validation:{validators:{},messages:{}}},datepicker:{col:"12",type:"datepicker",props:{readonly:!1,id:"datepicker",name:"datepicker",label:"Date du calendrier",start:{label:"Date de début"},end:{label:"Date de fin"},blackList:[1657404e6,1665612e6,16716636e5,16763292e5,16823736e5],holidays:!0,typage:"interval",weekend:!0,whiteList:[]},validation:{validators:{isValidDate:n},messages:{isValidDate:"Le format de la date est incorrect"}}}},P={title:"Organisms/Form",argTypes:{},args:{colorStyle:v.default,elements:D,labelPosition:f.outside,size:g.medium,value:{datepickerInterval:["01/01/2024","02/02/2024"]}}},a={render:t=>({setup(){const c=s(S),o=s(null);y(()=>t.value,u=>{var l;i("v-model change")(u);const e=(l=o.value)==null?void 0:l.v$;b(e),i("Form is invalid?")(e==null?void 0:e.$invalid)},{deep:!0});const r={...t};return delete r.value,{args:t,otherProps:r,formSlot:c,form:o}},template:`<SolarisContainer>
      <h1>Fomulaire D</h1>
      <SolarisForm ref="form" v-model="args.value" v-bind="otherProps">
        <template #beforeComponent><div class="slot" v-html="formSlot" /></template>
        <template #formEnd>
          <div class="actions">
            <SolarisButton size="large" color="default">Valider</SolarisButton>
            <SolarisButton type="secondary" size="large" color="default">Annuler</SolarisButton>
          </div>
        </template>
      </SolarisForm>
    </SolarisContainer>`})};var d,m,p;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
      <h1>Fomulaire D</h1>
      <SolarisForm ref="form" v-model="args.value" v-bind="otherProps">
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
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["FormD"];export{a as FormD,w as __namedExportsOrder,P as default};
