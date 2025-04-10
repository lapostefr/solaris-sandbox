import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as b,R as r,a as l}from"./Radio-CTXQPbD7.js";import{r as g}from"./vue.esm-bundler-BiAlgFmf.js";import{t as e}from"./i18n-iXEj6ePW.js";import"./v4-CQkTLCs1.js";import"./generateId-CVaf2GGW.js";import"./Message-MlHtBEps.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";function u(o){return`enum {
  ${Object.entries(o).map(([a,d])=>`${a} = '${d}'`).join(`,
  `)}
}`}function s(o){return{DataError:`{
  active: boolean
  message: string
}`,RadioOption:`{
  aria?: {
    [key: string]: string
  }
  id?: string
  name: string
  value: string
  disabled?: boolean
  readonly?: boolean
}`,RadiOptions:"Array<RadioOption>"}[o]||`type ${o}`}const f={descriptions:{modelValue:"Selected value from the available options, bound with v-model.",aria:"ARIA attributes for accessibility.",colorStyle:"Color style of the radio buttons.",dataError:"Error information to display for the radio button group.",disabled:"Disables the entire radio button group.",layout:"Orientation of the radio button group (vertical or horizontal).",legend:"Title for the radio button group.",mandatory:"Indicates if the radio group selection is mandatory.",message:"Informational message to display with the radio group.",options:"List of radio button options to display.",readonly:"Sets the entire radio group to read-only mode."},events:{updateModelValue:"Emitted when the selected value changes (for v-model).",input:"Emitted when a user selects an option."},slots:{default:"Additional content to display with the radio buttons (optional)."}},v={stories:f},t=v,C={title:"Atoms/Radio/New",component:b,parameters:{actions:{handles:["update:modelValue","input"]}},argTypes:{aria:{description:e(t,"aria"),table:{type:{summary:"object",detail:"key (string) : string"},category:"Accessibility"},control:"object"},colorStyle:{description:e(t,"colorStyle"),table:{type:{summary:"RadioColorStyle",detail:u(r)},defaultValue:{summary:r.DEFAULT},category:"Content"},control:{type:"select"},options:Object.values(r)},dataError:{description:e(t,"dataError"),table:{type:{summary:"DataError",detail:`type DataError = ${s("DataError")}`},category:"Validation"},control:"object"},disabled:{description:e(t,"disabled"),table:{type:{summary:"boolean"},category:"State"},control:"boolean"},layout:{description:e(t,"layout"),table:{type:{summary:"RadioLayout",detail:u(l)},defaultValue:{summary:l.VERTICAL},category:"Layout"},control:{type:"select"},options:Object.values(l)},legend:{description:e(t,"legend"),table:{type:{summary:"string"},category:"Content"},control:"text"},mandatory:{description:e(t,"mandatory"),table:{type:{summary:"boolean"},category:"Validation"},control:"boolean"},message:{description:e(t,"message"),table:{type:{summary:"string"},category:"Content"},control:"text"},options:{description:e(t,"options"),table:{type:{summary:"RadiOptions",detail:`type RadiOptions = ${s("RadiOptions")}

type RadioOption = ${s("RadioOption")}`},category:"Content"},control:"object"},readonly:{description:e(t,"readonly"),table:{type:{summary:"boolean"},category:"State"},control:"boolean"}}},i={render:o=>({components:{SolarisRadio:b},setup(){const a=g("Option 3");return{args:o,model:a,onInput:n=>{p("input")(n)},onModelUpdate:n=>{p("update:modelValue")(n),a.value=n}}},template:`<div>
    <SolarisRadio 
      v-model="model" 
      v-bind="args"
      @input="onInput"
      @update:modelValue="onModelUpdate"
    />
    </div>`}),args:{aria:{label:"test"},colorStyle:r.EMPHASIS,dataError:{active:!1,message:""},disabled:!1,layout:l.VERTICAL,legend:"Radio buttons heading",mandatory:!1,message:"",options:[{aria:{label:"test"},name:"Label: Option 1",value:"Option 1"},{id:"essai",name:"Label: Option 2",value:"Option 2",disabled:!0},{name:"Label: Option 3",value:"Option 3"},{name:"Label: Option 4",value:"Option 4"}],readonly:!1}};var m,c,y;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisRadio
    },
    setup() {
      // const model = ref(null)
      const model = ref('Option 3');
      const onInput = value => {
        action('input')(value);
      };
      const onModelUpdate = value => {
        action('update:modelValue')(value);
        model.value = value;
      };
      return {
        args,
        model,
        onInput,
        onModelUpdate
      };
    },
    template: \`<div>
    <SolarisRadio 
      v-model="model" 
      v-bind="args"
      @input="onInput"
      @update:modelValue="onModelUpdate"
    />
    </div>\`
  }),
  args: {
    aria: {
      label: 'test'
    },
    colorStyle: RadioColorStyle.EMPHASIS,
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    layout: RadioLayout.VERTICAL,
    legend: 'Radio buttons heading',
    mandatory: false,
    message: '',
    options: [{
      aria: {
        label: 'test'
      },
      name: 'Label: Option 1',
      value: 'Option 1'
    }, {
      id: 'essai',
      name: 'Label: Option 2',
      value: 'Option 2',
      disabled: true
    }, {
      name: 'Label: Option 3',
      value: 'Option 3'
    }, {
      name: 'Label: Option 4',
      value: 'Option 4'
    }],
    readonly: false
  }
}`,...(y=(c=i.parameters)==null?void 0:c.docs)==null?void 0:y.source}}};const D=["New"];export{i as New,D as __namedExportsOrder,C as default};
