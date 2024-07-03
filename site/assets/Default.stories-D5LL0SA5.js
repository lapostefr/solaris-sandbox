import{a as e}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as d}from"./Datepicker-BDNCoKIb.js";import{r as p}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./isValidDate-CEoz4-cc.js";import"./index-ADTFLffw.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Molecules/Datepicker/Default"},t={render:n=>({components:{SolarisDatepicker:d},setup(){const l=p([n.start.date]),i=e("input"),o=e("blur"),c=e("selection"),m=e("reset");return{args:n,inputElement:i,blurElement:o,selectionElement:c,resetElement:m,selection:l}},template:'<div class="demo" style=""><p>selection: {{ selection }}</p><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'}),args:{range:{min:16938648e5},holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],inputReadonly:!1,size:"large",start:{label:"Date de début",date:"20/03/2024"},typage:"default",weekend:!0,whiteList:[],withReset:!1}};var s,a,r;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisDatepicker
    },
    setup() {
      const selection = ref([args.start.date]);
      const inputElement = action('input');
      const blurElement = action('blur');
      const selectionElement = action('selection');
      const resetElement = action('reset');
      return {
        args,
        inputElement,
        blurElement,
        selectionElement,
        resetElement,
        selection
      };
    },
    template: '<div class="demo" style=""><p>selection: {{ selection }}</p><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'
  }),
  args: {
    range: {
      min: 1693864800000
    },
    holidays: true,
    blackList: [1704892448, 1708434848],
    // buttonLayout: 'centered',
    dataError: {
      active: false,
      message: ''
    },
    disabled: false,
    disabledDaysByWeek: [],
    // id: 'calendar',
    inputReadonly: false,
    // name: 'calendar',
    size: 'large',
    start: {
      label: 'Date de début',
      date: '20/03/2024'
    },
    typage: 'default',
    weekend: true,
    whiteList: [],
    withReset: false
  }
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const h=["Datepicker"];export{t as Datepicker,h as __namedExportsOrder,v as default};
