import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as f}from"./Form-C0Yqj_q_.js";import{S as h}from"./Container-BH3iOhd_.js";import{r,w as S}from"./vue.esm-bundler-BiAlgFmf.js";import{r as a,m}from"./index-DgZ3ycgb.js";import{o as b}from"./options-Bt3-Nn_M.js";import{C as v,L as g,S as y}from"./types-DKXD8uiR.js";import{s as C}from"./contentExamples-_RNmAYDJ.js";import"./v4-CQkTLCs1.js";import"./Datepicker-BNEsHNpw.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BV4-zrH4.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-a4aneQim.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-BV2bMv1f.js";import"./CheckboxGroup-DnqGD_1M.js";import"./DropdownLegacy-Du02tr_J.js";import"./Flag-ijPpsKLe.js";import"./iframe-BnG0fEMb.js";import"../sb-preview/runtime.js";import"./Picture-Bv3IzpnC.js";import"./Input-BClLXKNP.js";import"./Tooltip-BdO2vyV2.js";import"./DropdownSimple-BIedJmqh.js";import"./Dropdown-CmgSrzV1.js";import"./Message-MlHtBEps.js";import"./InputPhone-BGX0dBeg.js";import"./InputButton-BhPEg7Rl.js";import"./FileUploader-nO5-qzOU.js";import"./Notification-D_XdS5r2.js";import"./Collapse-BNiXmgF_.js";import"./types-CX4OQ2kf.js";import"./useTips-CORXmiXO.js";import"./Radio-CTXQPbD7.js";import"./Tile-BxOQ6Twv.js";import"./Select-DhXuss5o.js";import"./Switch-CC6Slv0g.js";import"./ButtonGroup-AW4MZdBt.js";import"./Textarea-C2EQ-K5x.js";import"./NumberField-DppsO7MG.js";import"./RangeSlider-Dx3fFiDV.js";const x={radioA:{col:"12",type:"radio",props:{colorStyle:"emphasis",disabled:!1,layout:"horizontal",legend:"Radio buttons heading",options:[{id:"option1-id",name:"name",value:"Option 1"},{id:"option2-id",name:"name",value:"Option 2",disabled:!0},{id:"option3-id",name:"name",value:"Option 3"},{id:"option4-id",name:"name",value:"Option 4"}],readonly:!1},slotBeforeComponent:"beforeComponent",validation:{validators:{required:a,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputA:{col:"12",type:"input",props:{autocomplete:"off",autofocus:!1,dataError:{active:!1,message:""},disabled:!1,error:!1,hideLabel:!1,id:"monId",inputRefStr:"input",isQuiet:!1,label:"My super Input Text",mandatory:!1,message:"Message depuis le sous-composant",name:"name",placeholder:"",readonly:!1,size:"medium",success:!1,type:"text"},validation:{validators:{required:a,minLength:m(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},checkboxA:{col:"12",type:"checkboxGroup",props:{disabled:!1,error:!1,layout:"horizontal",nesting:!1,options:b,readonly:!1},validation:{validators:{},messages:{}}}},So={title:"Organisms/Form",argTypes:{},args:{colorStyle:v.default,elements:x,labelPosition:g.outside,size:y.small,modelValue:{radioA:"Option 3",inputA:void 0,checkboxA:["checkbox-id-1"]}}},o={render:e=>({components:{SolarisContainer:h,SolarisForm:f},setup(){const t=r(e.modelValue),p=r(C),d=r(null);S(()=>e.modelValue,u=>{t.value=u},{deep:!0});const i={...e};return delete i.modelValue,{model:t,otherProps:i,formSlot:p,form:d,submit:()=>{c("Submitted model")(t.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire A</h1>

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
    </SolarisContainer>`})};var n,s,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
      <h1>Fomulaire A</h1>

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
}`,...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const bo=["FormA"];export{o as FormA,bo as __namedExportsOrder,So as default};
