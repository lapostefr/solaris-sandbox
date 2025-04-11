import{r as e,w as u}from"./vue.esm-bundler-BiAlgFmf.js";import{r as m,m as c,a as f}from"./index-DgZ3ycgb.js";import{C as S,L as v,S as h}from"./types-DKXD8uiR.js";import{S as b}from"./Form-B9i__ig8.js";import{S as g}from"./Container-BH3iOhd_.js";import{s as F}from"./contentExamples-_RNmAYDJ.js";import{a as C}from"./chunk-D5ZWXAHU-CGElDDNX.js";import"./Datepicker-BNEsHNpw.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BV4-zrH4.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-a4aneQim.js";import"./generateId-CVaf2GGW.js";import"./Checkbox-BV2bMv1f.js";import"./CheckboxGroup-DnqGD_1M.js";import"./DropdownLegacy-DwmE2yDL.js";import"./Flag-dUIF1RS8.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";import"./Picture-BofBnaNi.js";import"./Input-BClLXKNP.js";import"./Tooltip-BdO2vyV2.js";import"./DropdownSimple-rlC_wnCi.js";import"./Dropdown-mSzlHpVN.js";import"./Message-MlHtBEps.js";import"./InputPhone-BPHrHhAl.js";import"./InputButton-BhPEg7Rl.js";import"./FileUploader-nO5-qzOU.js";import"./Notification-D_XdS5r2.js";import"./Collapse-BNiXmgF_.js";import"./types-CX4OQ2kf.js";import"./useTips-CORXmiXO.js";import"./Radio-CTXQPbD7.js";import"./Tile-CMdievyB.js";import"./Select-DhXuss5o.js";import"./Switch-CC6Slv0g.js";import"./ButtonGroup-AW4MZdBt.js";import"./Textarea-C2EQ-K5x.js";import"./NumberField-DppsO7MG.js";import"./RangeSlider-Dx3fFiDV.js";import"./v4-CQkTLCs1.js";const fo={title:"Organisms/Form",argTypes:{},args:{colorStyle:S.default,elements:{radioG:{col:"12",type:"radio",props:{colorStyle:"emphasis",dataError:{active:!1,message:""},disabled:!1,layout:"vertical",type:"default",legend:"Radio buttons heading",options:[{id:"option1-id",name:"name",value:"Option 1",val:"option1-id"},{id:"option2-id",name:"name",value:"Option 2",val:"option2-id",disabled:!0},{id:"option3-id",name:"name",value:"Option 3",val:"option3-id"},{id:"option4-id",name:"name",value:"Option 4",val:"option4-id"}]},slotBeforeComponent:"beforeComponent",validation:{validators:{required:m,minLength:c(5)},messages:{required:"Le champ nom est requis!",minLength:"Minimum requis"}}},inputG:{col:"12",type:"input",props:{id:"requiredField-1",name:"requiredField",label:"Champ requis max 10 chars",inputRef:"requiredField"},validation:{validators:{required:m,maxLength:f(10)},messages:{required:"Le champ est requis!",maxLength:"10 chars max"}}}},labelPosition:v.outside,size:h.small,modelValue:{radioG:e("option3-id"),inputG:"1234"}}},o={render:t=>({components:{SolarisContainer:g,SolarisForm:b},setup(){const r=e(t.modelValue),s=e(F),p=e(null);u(()=>t.modelValue,d=>{r.value=d},{deep:!0});const i={...t};return delete i.modelValue,{model:r,otherProps:i,formSlot:s,form:p,submit:()=>{C("Submitted model")(r.value)}}},template:`<SolarisContainer>
      <h1>Fomulaire G</h1>

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
    </SolarisContainer>`})};var a,n,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
      <h1>Fomulaire G</h1>

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
}`,...(l=(n=o.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};const So=["FormG"];export{o as FormG,So as __namedExportsOrder,fo as default};
