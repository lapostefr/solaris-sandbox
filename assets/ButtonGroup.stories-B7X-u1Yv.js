import{S as n}from"./ButtonGroup-AW4MZdBt.js";import{r as i}from"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./generateId-CVaf2GGW.js";const u=`[
  {
    label: string,
    icon: string,
    value: string|number,
    disabled?: boolean
  }
]`,p=`{
  active: boolean,
  message: string
}`,t=[{label:"Digiposte",icon:"brands-digiposte",value:"1",disabled:!1},{label:"Madame",icon:"",value:"2",disabled:!1},{label:"Monsieur",icon:"",value:"3",disabled:!1}],f={title:"Atoms/Button Group",argTypes:{dataError:{description:"Active error and display the error message.",table:{type:{summary:"object",detail:p}},control:{type:"object"}},disabled:{description:"Disabled the component.",table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:"false"}},id:{description:"The Button Group id",table:{type:{summary:"number"}},required:!0},name:{description:"The name of the Button Group.",table:{type:{summary:"string"}},required:!0},options:{description:"List of values for each button of the group.",table:{type:{summary:"array",detail:u}},required:!0},readonly:{description:"Change the state as readonly.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"}},responsive:{description:"Activates responsive behavior.",table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:"true"}},small:{description:"Change the global size of the component.",table:{type:{summary:"boolean"}},control:"boolean",defaultValue:{summary:"false"}},value:{description:"Choose the active button when loading (1 for the first …)",table:{type:{summary:"string"}}},error:{description:'Change the color to display an error. <span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},category:"Deprecated"},control:"boolean",defaultValue:{summary:"false"}}},args:{dataError:{active:!1,message:""},disabled:!1,error:!1,id:"buttonGroup",name:"1",options:t,readonly:!1,responsive:!0,small:!1}},e={render:s=>({components:{SolarisButtonGroup:n},setup(){const l=i("0");return{args:s,value:l}},template:'<SolarisButtonGroup style="margin-top: 50px; margin-bottom: 50px;" v-model="value" v-bind="args" />'}),args:{dataError:{active:!1,message:""},disabled:!1,error:!1,id:"buttonGroup",name:"1",options:t,readonly:!1,responsive:!0,small:!1}};var a,r,o;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisButtonGroup
    },
    setup() {
      const value = ref('0');
      return {
        args,
        value
      };
    },
    template: '<SolarisButtonGroup style="margin-top: 50px; margin-bottom: 50px;" v-model="value" v-bind="args" />'
  }),
  args: {
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    error: false,
    id: 'buttonGroup',
    name: '1',
    options: options,
    readonly: false,
    responsive: true,
    small: false
  }
}`,...(o=(r=e.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};const g=["ButtonGroup"];export{e as ButtonGroup,g as __namedExportsOrder,f as default};
