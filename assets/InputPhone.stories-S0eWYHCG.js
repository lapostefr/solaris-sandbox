import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as p,S as m}from"./InputPhone-BGX0dBeg.js";import{r as d}from"./vue.esm-bundler-BiAlgFmf.js";import{d as c,a as y}from"./details-Hn0eutLa.js";import{S as h,a as f}from"./Input-BClLXKNP.js";import"./v4-CQkTLCs1.js";import"./Flag-ijPpsKLe.js";import"./iframe-BnG0fEMb.js";import"../sb-preview/runtime.js";import"./index-a4aneQim.js";import"./DropdownLegacy-Du02tr_J.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-Bv3IzpnC.js";import"./generateId-CVaf2GGW.js";import"./Tooltip-BdO2vyV2.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./types-DKXD8uiR.js";const b=["AL","NL","FR","DZ","PS","GL","CH","TR"];let o=[];o=p.map(e=>Object.keys(e)[0]).sort((e,a)=>e.localeCompare(a));o.unshift("");const R={title:"Atoms/TextInput/Phone",argTypes:{id:{description:"The Input Text id",table:{type:{summary:"string"}},required:!0},aria:{description:"Aria attributes",table:{type:{summary:"object",detail:c}},control:"object"},autocomplete:{description:"Active autocompletion",table:{type:{summary:"string"}}},autofocus:{description:"Change the environment from the text input to the focus.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},countryIsoFilter:{description:"<b>Version simple</b>. Filter a country ISO code. <br><i> When filled, it removes the dropdown behavior.<br>Choose the first empty option to test dropdown version. </i><br> Please use Docs section for testing.",table:{type:{summary:"string"}},control:{type:"select"},options:o},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:y}},control:"object"},defaultCountryIso:{description:"<b>Version with dropdown</b> and show a default country. <br> Please use Docs section for testing.",table:{type:{summary:"string"}},defaultValue:{summary:"FR"},control:{type:"select"},options:o},disabled:{description:"Enable/disable the InputPhone.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},excludedCountryList:{description:"List of countries ISO codes to exclude. <br> Please use Docs section for testing.",table:{type:{summary:"Array<string>"}},defaultValue:{summary:"[]"},control:{type:"object"}},isQuiet:{description:"Changes the appearance of the text input.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},label:{description:"The text for the label.",table:{type:{summary:"string"}}},mandatory:{description:"Make the text input mandatory.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"text"}},name:{description:"The Input Text name.",table:{type:{summary:"string"}}},placeholder:{description:"The Input Text placeholder.",table:{type:{summary:"string"}}},readonly:{description:"Make the text input readonly.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},searchField:{description:"On the dropdown version, show or hide a search field in the top of the lightbox.",table:{type:{summary:"boolean"}},control:"boolean"},searchFieldMode:{description:"Search results listed in alphabetical order. <strong>contains</strong> returns results containing the search character while <strong>startswith</strong> returns results starting with the search character.",table:{type:{summary:"string"},defaultValue:{summary:"contains"}},control:{type:"select"},options:["contains","startswith"]},sendInputEmitOnblur:{description:"Emit input sent when field is left",table:{type:{summary:"boolean"}},defaultValue:{summary:"true"},control:{type:"boolean"}},size:{description:"Size of input",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},specifiedCountryList:{description:"List of specified country ISO codes <i>(please remove it  from the story if you want to test full list of countries).</i> <br>Please use Docs section for testing.",table:{type:{summary:"Array<string>"}},defaultValue:{summary:"[]"},control:{type:"object"}},success:{description:"Display success.",table:{type:{summary:"boolean"}},defaultValue:{summary:"default"},control:{type:"boolean"}},type:{description:"Type of input",table:{type:{summary:["text","number","email","tel"].join(" | ")}},defaultValue:{summary:"text"},control:{type:"select"},options:["text","number","email","tel"]},error:{description:'Display error. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:{summary:"false"},control:{type:"boolean"}}}},t={render:e=>({components:{SolarisInputPhone:m},setup(){const a=s("blur"),u=s("Phone Code"),r=d("+33612345678");return{args:e,inputData:r,elementBlur:a,elementPhoneCode:u,showModel:()=>s("input")(r.value)}},template:`
  <div style="margin: auto; max-width: 320px; height: 100vh;">
    <SolarisInputPhone v-model="inputData" v-bind="args" @input="showModel" @phoneCode="elementPhoneCode" @blur="elementBlur"/>
  </div>`}),args:{id:"monId",aria:{label:"test"},autocomplete:"off",autofocus:!1,countryIsoFilter:"",dataError:{active:!1,message:""},defaultCountryIso:"FR",disabled:!1,error:!1,excludedCountryList:["NL"],isQuiet:!1,label:"My super Input Phone",mandatory:!1,maxlength:30,message:"Voilà le message",name:"name",placeholder:"",readonly:!1,searchField:!1,searchFieldMode:h.contains,sendInputEmitOnblur:!0,size:f.default,specifiedCountryList:b,success:!1,tooltip:"Tooltip text",type:"tel"}};var n,l,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisInputPhone
    },
    setup() {
      const elementBlur = action('blur');
      const elementPhoneCode = action('Phone Code');
      const inputData = ref('+33612345678');
      const showModel = () => action('input')(inputData.value);
      return {
        args,
        inputData,
        elementBlur,
        elementPhoneCode,
        showModel
      };
    },
    template: \`
  <div style="margin: auto; max-width: 320px; height: 100vh;">
    <SolarisInputPhone v-model="inputData" v-bind="args" @input="showModel" @phoneCode="elementPhoneCode" @blur="elementBlur"/>
  </div>\`
  }),
  args: {
    id: 'monId',
    aria: {
      label: 'test'
    },
    autocomplete: 'off',
    autofocus: false,
    // cancelText: 'Annuler',
    countryIsoFilter: '',
    dataError: {
      active: false,
      message: ''
    },
    defaultCountryIso: 'FR',
    disabled: false,
    error: false,
    excludedCountryList: ['NL'],
    // initButtonState: false,
    // inputRef: 'input',
    isQuiet: false,
    label: 'My super Input Phone',
    mandatory: false,
    maxlength: 30,
    message: 'Voilà le message',
    name: 'name',
    placeholder: '',
    readonly: false,
    searchField: false,
    searchFieldMode: SearchFieldMode.contains,
    sendInputEmitOnblur: true,
    size: Size.default,
    specifiedCountryList: specifiedCountryList,
    success: false,
    tooltip: 'Tooltip text',
    type: 'tel'
    // value: '+33612345678'
    // validateText: 'Valider'
  }
}`,...(i=(l=t.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};const k=["Phone"];export{t as Phone,k as __namedExportsOrder,R as default};
