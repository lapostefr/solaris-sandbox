import{C as d,L as c,S as u}from"./types-DKXD8uiR.js";import{s as f}from"./contentExamples-_RNmAYDJ.js";import{o as b}from"./options-Bu0UZnng.js";import{S}from"./Form-C0Yqj_q_.js";import{S as v}from"./Container-BH3iOhd_.js";import{r,w as g}from"./vue.esm-bundler-BiAlgFmf.js";import{a as h}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BNEsHNpw.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BV4-zrH4.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-a4aneQim.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-BV2bMv1f.js";import"./CheckboxGroup-DnqGD_1M.js";import"./DropdownLegacy-Du02tr_J.js";import"./Flag-ijPpsKLe.js";import"./iframe-BnG0fEMb.js";import"../sb-preview/runtime.js";import"./Picture-Bv3IzpnC.js";import"./Input-BClLXKNP.js";import"./Tooltip-BdO2vyV2.js";import"./DropdownSimple-BIedJmqh.js";import"./Dropdown-CmgSrzV1.js";import"./Message-MlHtBEps.js";import"./InputPhone-BGX0dBeg.js";import"./InputButton-BhPEg7Rl.js";import"./FileUploader-nO5-qzOU.js";import"./Notification-D_XdS5r2.js";import"./Collapse-BNiXmgF_.js";import"./types-CX4OQ2kf.js";import"./useTips-CORXmiXO.js";import"./Radio-CTXQPbD7.js";import"./Tile-BxOQ6Twv.js";import"./Select-DhXuss5o.js";import"./Switch-CC6Slv0g.js";import"./ButtonGroup-AW4MZdBt.js";import"./Textarea-C2EQ-K5x.js";import"./NumberField-DppsO7MG.js";import"./RangeSlider-Dx3fFiDV.js";import"./v4-CQkTLCs1.js";const F=[{value:"entree-1",label:"Entrée 1"},{value:"entree-2",label:"Entrée 2",disabled:!0},{value:"entree-3",label:"Entrée 3"},{value:"entree-4",label:"Entrée 4"},{value:"entree-5",label:"Entrée 5"},{value:"entree-6",label:"Entrée 6"}],w={dropdownB:{col:"12",type:"dropdownLegacy",props:{active:"active",activeGroup:!1,dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Empty",labelPosition:"inside",lazyload:!1,listboxHeight:300,loadFlags:!0,message:"Message pour le test",name:"nameTemp",options:[{optionsList:[]}],picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},dropdownD:{col:"12",type:"dropdownSimple",props:{active:"active",dataError:{active:!1,message:""},error:"",id:"idTemp",label:"Label Dropdown Simple",labelPosition:"inside",listboxHeight:300,message:"Message pour le test",name:"nameTemp",options:F,picto:"arrow-bottom",placeholder:"-Sélectionner une option-",searchField:!1,searchFieldMode:"contains",size:"medium"},validation:{validators:{},messages:{}}},select:{col:"12",type:"select",props:{aria:{label:"name"},dataError:{active:!1,message:""},disabled:!1,error:!1,icon:"arrow-bottom",id:"monId",inputRef:"select",label:"Label Select",labelPosition:"inside",mandatory:!1,message:"Voilà le message",name:"name",options:b,placeholder:"-Sélectionner une option-",readonly:!1,size:"medium"},validation:{validators:{},messages:{}}}},ue={title:"Organisms/Form",argTypes:{},args:{colorStyle:d.default,elements:w,labelPosition:c.inside,size:u.medium,modelValue:{dropdownD:"entree-3",select:"2"}}},e={render:o=>({components:{SolarisContainer:v,SolarisForm:S},setup(){const t=r(o.modelValue),n=r(f),m=r(null);g(()=>o.modelValue,p=>{t.value=p},{deep:!0});const a={...o};return delete a.modelValue,{model:t,otherProps:a,formSlot:n,form:m,submit:()=>{h("Submitted model")(t.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire F</h1>

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
    </SolarisContainer>`})};var l,i,s;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
      <h1>Fomulaire F</h1>

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
}`,...(s=(i=e.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};const fe=["FormF"];export{e as FormF,fe as __namedExportsOrder,ue as default};
