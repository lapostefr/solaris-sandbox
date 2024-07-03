import{C as p,L as v,S as f}from"./types-Dd7QR7uO.js";import{s as S,l as h}from"./debugForm-DK5Cr3ff.js";import{r as n,w as g}from"./vue.esm-bundler-DD7xIM0D.js";import{a as s}from"./chunk-MZXVCX43-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";const y={tile:{col:"12",type:"tile",props:{selection:"unique",size:"small",name:"tile",tiles:[{id:"dummy-id-1",image:"https://via.placeholder.com/100",title:"Envoyer mon courrier depuis ma boite aux lettres",content:"Le facteur passera demain collecter votre courrier a votre adresse"},{id:"dummy-id-2",image:"https://via.placeholder.com/100",title:"Envoyer mon courrier depuis une boite aux lettres de rue ou en bureau de Poste",content:"Le facteur ne passera pas collecter votre courrier à votre adresse",caption:""}]},slots:["title","price","content","caption"],validation:{validators:{},messages:{}}}},C={title:"Organisms/Form",argTypes:{},args:{colorStyle:p.default,elements:y,labelPosition:v.outside,size:f.medium,value:{tile:"dummy-id-2"}}},o={render:t=>({setup(){const c=n(S),r=n(null);g(()=>t.value,u=>{var l;s("v-model change")(u);const e=(l=r.value)==null?void 0:l.v$;h(e),s("Form is invalid?")(e==null?void 0:e.$invalid)},{deep:!0});const a={...t};return delete a.value,{args:t,otherProps:a,formSlot:c,form:r}},template:`<SolarisContainer>
      <h1>Fomulaire E</h1>
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
      <h1>Fomulaire E</h1>
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
}`,...(d=(m=o.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const z=["FormE"];export{o as FormE,z as __namedExportsOrder,C as default};
