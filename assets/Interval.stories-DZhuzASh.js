import{a as e}from"./chunk-MZXVCX43-DWuJqIWT.js";import{S as m}from"./Datepicker-BDNCoKIb.js";import{r as p}from"./vue.esm-bundler-DD7xIM0D.js";import"./v4-D8aEg3BZ.js";import"./isValidDate-CEoz4-cc.js";import"./index-ADTFLffw.js";import"./generateId-DPOzJEtM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"Molecules/Datepicker/Interval",args:{holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/03/2024"},inputReadonly:!1,size:"large",start:{label:"Date de début",date:"20/02/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1}},t={render:n=>({components:{SolarisDatepicker:m},setup(){const r=p([n.start.date,n.end.date]),i=e("input"),o=e("blur"),d=e("selection"),c=e("reset");return{args:n,inputElement:i,blurElement:o,selectionElement:d,resetElement:c,selection:r}},template:'<div class="demo" style=""><p>selection: {{ selection }}</p><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'}),args:{range:{min:16938648e5},holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],end:{label:"Date de fin",date:"27/02/2024"},inputReadonly:!1,size:"large",start:{label:"Date de début",date:"20/03/2024"},typage:"interval",weekend:!0,whiteList:[],withReset:!1}};var a,s,l;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisDatepicker
    },
    setup() {
      const selection = ref([args.start.date, args.end.date]);
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
    end: {
      label: 'Date de fin',
      date: '27/02/2024'
    },
    // id: 'calendar',
    inputReadonly: false,
    // name: 'calendar',
    size: 'large',
    start: {
      label: 'Date de début',
      date: '20/03/2024'
    },
    typage: 'interval',
    weekend: true,
    whiteList: [],
    withReset: false
  }
}`,...(l=(s=t.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};const h=["Datepicker"];export{t as Datepicker,h as __namedExportsOrder,v as default};
