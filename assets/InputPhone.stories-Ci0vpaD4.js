import{a as s}from"./chunk-MZXVCX43-DWuJqIWT.js";import{c,S as d}from"./InputPhone-hCBHSOXh.js";import{r as y,w as f}from"./vue.esm-bundler-DD7xIM0D.js";import{d as h,a as b}from"./details-UtBJFu9L.js";import"./v4-D8aEg3BZ.js";import"./useInput-MMiNY_C_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const g=["AL","NL","FR","DZ","PS","GL","CH","TR"];let a=[];a=c.map(e=>Object.keys(e)[0]).sort((e,n)=>e.localeCompare(n));a.unshift("");const D={title:"Atoms/TextInput/Phone",argTypes:{id:{description:"The Input Text id",table:{type:{summary:"string"}},required:!0},aria:{description:"Aria attributes",table:{type:{summary:"object",detail:h}},control:"object"},autocomplete:{description:"Active autocompletion",table:{type:{summary:["on","off"]},defaultValue:{summary:"on"}},control:{type:"select"},options:["on","off"]},autofocus:{description:"Change the environment from the text input to the focus.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},countryIsoFilter:{description:"<b>Version simple</b>. Filter a country ISO code. <br><i> When filled, it removes the dropdown behavior.<br>Choose the first empty option to test dropdown version. </i><br> Please use Docs section for testing.",table:{type:{summary:"string"}},control:{type:"select"},options:a},dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:b}},control:"object"},defaultCountryIso:{description:"<b>Version with dropdown</b> and show a default country. <br> Please use Docs section for testing.",table:{type:{summary:"string"}},defaultValue:{summary:"FR"},control:{type:"select"},options:a},disabled:{description:"Disables the field.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},excludedCountryList:{description:"List of countries ISO codes to exclude. <br> Please use Docs section for testing.",table:{type:{summary:"Array<string>",defaultValue:{summary:[]}}},control:"array"},isQuiet:{description:"Changes the appearance of the text input.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},label:{description:"The text for the label.",table:{type:{summary:"string"}}},mandatory:{description:"Make the text input mandatory.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},message:{description:"Active and display the message.",table:{type:{summary:"string"}},control:{type:"string"}},name:{description:"The Input Text name.",table:{type:{summary:"string"}}},placeholder:{description:"The Input Text placeholder.",table:{type:{summary:"string"}}},readonly:{description:"Make the text input readonly.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},searchField:{description:"On the dropdown version, show or hide a search field in the top of the lightbox.",table:{type:{summary:"boolean"}},control:"boolean"},searchFieldMode:{description:"Search results listed in alphabetical order. <strong>contains</strong> returns results containing the search character while <strong>startswith</strong> returns results starting with the search character.",table:{type:{summary:"string"},defaultValue:{summary:"contains"}},control:{type:"select"},options:["contains","startswith"]},sendInputEmitOnblur:{description:"Emit input sent when field is left",table:{type:{summary:"boolean"}},defaultValue:{summary:!0},control:{type:"boolean"}},size:{description:"Size of input",table:{type:{summary:"string"}},defaultValue:{summary:"medium"},control:{type:"select"},options:["default","compact","small","medium"]},specifiedCountryList:{description:"List of specified country ISO codes <i>(please remove it  from the story if you want to test full list of countries).</i> <br>Please use Docs section for testing.",table:{type:{summary:"Array<string>",defaultValue:{summary:[]}}},control:"array"},success:{description:"Display success.",table:{type:{summary:"boolean"}},defaultValue:{summary:"default"},control:{type:"boolean"}},type:{description:"Type of input",table:{type:{summary:["text","number","email","tel"]}},defaultValue:{summary:"text"},control:{type:"select"},options:["text","number","email","tel"]},error:{description:'Display error. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},defaultValue:{summary:!1},control:{type:"boolean"}}}},t={render:e=>({components:{SolarisInputPhone:d},setup(){const n=o=>{e.value=o,s("input")},p=()=>s("blur"),m=()=>s("Phone Code"),r=y(e.value);return f(()=>e.value,o=>{r.value=o}),{args:e,inputData:r,elementInput:n,elementBlur:p,elementPhoneCode:m}},template:`
  <div style="margin: auto; max-width: 320px; height: 100vh;">
    <SolarisInputPhone :value="inputData" v-bind="args" v-on="args" @input="elementInput" @phoneCode="elementPhoneCode" @blur="elementBlur"/>
  </div>`}),args:{id:"monId",aria:{label:"test"},autocomplete:"off",autofocus:!1,countryIsoFilter:"",dataError:{active:!1,message:""},defaultCountryIso:"FR",disabled:!1,error:!1,excludedCountryList:["NL"],isQuiet:!1,label:"My super Input Phone",mandatory:!1,maxlength:30,message:"Voilà le message",name:"name",placeholder:"",readonly:!1,searchField:!1,searchFieldMode:"contains",sendInputEmitOnblur:!0,size:"default",specifiedCountryList:g,success:!1,tooltip:"Tooltip text",type:"tel",value:"+33612345678"}};var l,i,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisInputPhone
    },
    setup() {
      const elementInput = value => {
        args.value = value;
        action('input');
      };
      const elementBlur = () => action('blur');
      const elementPhoneCode = () => action('Phone Code');
      const inputData = ref(args.value);
      watch(() => args.value, val => {
        inputData.value = val;
      });
      return {
        args,
        inputData,
        elementInput,
        elementBlur,
        elementPhoneCode
      };
    },
    template: \`
  <div style="margin: auto; max-width: 320px; height: 100vh;">
    <SolarisInputPhone :value="inputData" v-bind="args" v-on="args" @input="elementInput" @phoneCode="elementPhoneCode" @blur="elementBlur"/>
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
    searchFieldMode: 'contains',
    sendInputEmitOnblur: true,
    size: 'default',
    specifiedCountryList: specifiedCountryList,
    success: false,
    tooltip: 'Tooltip text',
    type: 'tel',
    value: '+33612345678'
    // validateText: 'Valider'
  }
}`,...(u=(i=t.parameters)==null?void 0:i.docs)==null?void 0:u.source}}};const L=["Phone"];export{t as Phone,L as __namedExportsOrder,D as default};
