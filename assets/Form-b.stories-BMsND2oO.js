import{C as s,L as u,S as c}from"./types-DKXD8uiR.js";import{r as b}from"./index-DgZ3ycgb.js";import{r as t,w as f}from"./vue.esm-bundler-BiAlgFmf.js";import{s as v}from"./contentExamples-_RNmAYDJ.js";import{S}from"./Form-C0Yqj_q_.js";import{S as y}from"./Container-BH3iOhd_.js";import{a as g}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BNEsHNpw.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BV4-zrH4.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-a4aneQim.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-BV2bMv1f.js";import"./CheckboxGroup-DnqGD_1M.js";import"./DropdownLegacy-Du02tr_J.js";import"./Flag-ijPpsKLe.js";import"./iframe-BnG0fEMb.js";import"../sb-preview/runtime.js";import"./Picture-Bv3IzpnC.js";import"./Input-BClLXKNP.js";import"./Tooltip-BdO2vyV2.js";import"./DropdownSimple-BIedJmqh.js";import"./Dropdown-CmgSrzV1.js";import"./Message-MlHtBEps.js";import"./InputPhone-BGX0dBeg.js";import"./InputButton-BhPEg7Rl.js";import"./FileUploader-nO5-qzOU.js";import"./Notification-D_XdS5r2.js";import"./Collapse-BNiXmgF_.js";import"./types-CX4OQ2kf.js";import"./useTips-CORXmiXO.js";import"./Radio-CTXQPbD7.js";import"./Tile-BxOQ6Twv.js";import"./Select-DhXuss5o.js";import"./Switch-CC6Slv0g.js";import"./ButtonGroup-AW4MZdBt.js";import"./Textarea-C2EQ-K5x.js";import"./NumberField-DppsO7MG.js";import"./RangeSlider-Dx3fFiDV.js";import"./v4-CQkTLCs1.js";const h={checkboxB:{col:"12",type:"checkbox",props:{aria:{label:"name"},color:s.emphasis,dataError:{active:!1,message:""},disabled:!1,error:!1,id:"monId",indeterminate:!1,label:"Checkbox Label",name:"name",readonly:!1,value:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{},messages:{}}},numberField:{col:"12",type:"NumberField",props:{id:"NumberField",label:"Label Number Field (valid if equals 5)",labelPosition:"visually-hidden",name:"NumberField",min:1,max:99},validation:{validators:{},messages:{}}},rangeSlider:{col:"12",type:"rangeSlider",props:{color:"default",dataError:{active:!1,message:""},id:"monId",label:"Label Range Slider (valid if between 45 and 76)",max:200,message:"Voilà le message",min:0,rangeValues:{min:15,max:76},step:1,unit:"€"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{id:"type",name:"type",label:"Label Select",options:[{label:"Type 1",value:"type1"},{label:"Type 2",value:"type2"},{label:"Type 3",value:"type3"},{label:"Type 4",value:"type4"}]},validation:{validators:{required:b},messages:{required:"Le champ type est requis!"}}}},ue={title:"Organisms/Form",argTypes:{},args:{colorStyle:s.default,elements:h,labelPosition:u.outside,size:c.small,modelValue:{checkboxB:!0,numberField:2,rangeSlider:{min:{label:"Minimum",value:15},max:{label:"Maximum",value:76}},select:"type1"}}},e={render:o=>({components:{SolarisContainer:y,SolarisForm:S},setup(){const r=t(o.modelValue),n=t(v),p=t(null);f(()=>o.modelValue,d=>{r.value=d},{deep:!0});const l={...o};return delete l.modelValue,{model:r,otherProps:l,formSlot:n,form:p,submit:()=>{g("Submitted model")(r.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire B</h1>

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
    </SolarisContainer>`})};var a,m,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      <h1>Fomulaire B</h1>

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
}`,...(i=(m=e.parameters)==null?void 0:m.docs)==null?void 0:i.source}}};const ce=["FormB"];export{e as FormB,ce as __namedExportsOrder,ue as default};
