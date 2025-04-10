import{r,m}from"./index-DgZ3ycgb.js";import{C as c,L as h,S as f}from"./types-DKXD8uiR.js";import{s as S}from"./contentExamples-_RNmAYDJ.js";import{r as i,w as b}from"./vue.esm-bundler-BiAlgFmf.js";import{a as v}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as g}from"./Form-C0Yqj_q_.js";import{S as V}from"./Container-BH3iOhd_.js";import"./v4-CQkTLCs1.js";import"./Datepicker-BNEsHNpw.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BV4-zrH4.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-a4aneQim.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-BV2bMv1f.js";import"./CheckboxGroup-DnqGD_1M.js";import"./DropdownLegacy-Du02tr_J.js";import"./Flag-ijPpsKLe.js";import"./iframe-BnG0fEMb.js";import"../sb-preview/runtime.js";import"./Picture-Bv3IzpnC.js";import"./Input-BClLXKNP.js";import"./Tooltip-BdO2vyV2.js";import"./DropdownSimple-BIedJmqh.js";import"./Dropdown-CmgSrzV1.js";import"./Message-MlHtBEps.js";import"./InputPhone-BGX0dBeg.js";import"./InputButton-BhPEg7Rl.js";import"./FileUploader-nO5-qzOU.js";import"./Notification-D_XdS5r2.js";import"./Collapse-BNiXmgF_.js";import"./types-CX4OQ2kf.js";import"./useTips-CORXmiXO.js";import"./Radio-CTXQPbD7.js";import"./Tile-BxOQ6Twv.js";import"./Select-DhXuss5o.js";import"./Switch-CC6Slv0g.js";import"./ButtonGroup-AW4MZdBt.js";import"./Textarea-C2EQ-K5x.js";import"./NumberField-DppsO7MG.js";import"./RangeSlider-Dx3fFiDV.js";const C={switch:{col:"12",type:"switch",props:{id:"switch",label:"Label Switch"},validation:{validators:{required:r},messages:{required:"Le switch est requis!"}}},inputPhone:{col:"12",type:"inputPhone",inputType:"tel",props:{placeholder:"Téléphone",id:"tel",name:"tel",label:"Téléphone"},validation:{validators:{required:r,minLength:m(10)},messages:{required:"Le champ prénom est requis!",minLength:"Votre numéro de téléphone n'est pas complet"}}},inputWithButton:{col:"12",type:"inputButton",props:{id:"inputWithButton",name:"inputWithButton",label:"Label Input With Button",class:"last-name",validateText:"Valider"},validation:{validators:{required:r,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputWithUnit:{col:"12",type:"input",props:{id:"inputWithUnit",name:"inputWithUnit",label:"Label Input With Unit",class:"last-name",unit:{label:"cm",description:"centimeter"}},validation:{validators:{},messages:{}}}},ct={title:"Organisms/Form",argTypes:{},args:{colorStyle:c.default,elements:C,labelPosition:h.outside,size:f.medium,modelValue:{switch:!0,radio:"test",inputPhone:"0123456789",inputWithButton:"Value Input With Button",inputWithUnit:"Value Input With Unit",textarea:"Value Textarea"}}},t={render:o=>({components:{SolarisContainer:V,SolarisForm:g},setup(){const e=i(o.modelValue),p=i(S),u=i(null);b(()=>o.modelValue,d=>{e.value=d},{deep:!0});const n={...o};return delete n.modelValue,{model:e,otherProps:n,formSlot:p,form:u,submit:()=>{v("Submitted model")(e.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire C</h1>

      <SolarisForm ref="form" v-model="model" v-bind="otherProps" @on-submit="submit">
        <template #beforeComponent>
          <div class="slot" v-html="formSlot" />
        </template>
        <template #formEnd>
          <div class="actions">
            <SolarisButton size="large" color="default" @click="form.submit()">Valider</SolarisButton>
          </div>
        </template>
      </SolarisForm>
    </SolarisContainer>`})};var a,l,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisContainer,
      SolarisForm
    },
    setup() {
      const model = ref(args.modelValue);
      const formSlot = ref(slotExample);
      const form = ref(null);
      watch(() => args.modelValue, newModelValue => {
        model.value = newModelValue;
      }, {
        deep: true
      });
      const otherProps = {
        ...args
      };
      delete otherProps.modelValue;
      const submit = () => {
        action('Submitted model')(model.value);
      };
      return {
        model,
        otherProps,
        formSlot,
        form,
        submit
      };
    },
    template: \`<SolarisContainer>
      <h1>Fomulaire C</h1>

      <SolarisForm ref="form" v-model="model" v-bind="otherProps" @on-submit="submit">
        <template #beforeComponent>
          <div class="slot" v-html="formSlot" />
        </template>
        <template #formEnd>
          <div class="actions">
            <SolarisButton size="large" color="default" @click="form.submit()">Valider</SolarisButton>
          </div>
        </template>
      </SolarisForm>
    </SolarisContainer>\`
  })
}`,...(s=(l=t.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};const ht=["FormC"];export{t as FormC,ht as __namedExportsOrder,ct as default};
