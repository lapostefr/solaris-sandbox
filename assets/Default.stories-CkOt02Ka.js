import{c as d}from"./argTypes-DzYhJKXz.js";import{a as e}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as p,a as u}from"./Datepicker-BNEsHNpw.js";import{r as b}from"./vue.esm-bundler-BiAlgFmf.js";import{L as E}from"./types-DKXD8uiR.js";import"./v4-CQkTLCs1.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Modal-BV4-zrH4.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./closeOnFocusOut-D0QTlgAv.js";import"./index-a4aneQim.js";import"./generateId-CVaf2GGW.js";const B={title:"Molecules/Datepicker/Default",argTypes:d},t={render:s=>({components:{SolarisDatepicker:p},setup(){const i=b([s.start.date]),n=e("input"),o=e("blur"),m=e("selection"),c=e("reset");return{args:s,inputElement:n,blurElement:o,selectionElement:m,resetElement:c,selection:i}},template:'<div class="demo" style=""><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'}),args:{range:{min:16938648e5},holidays:!0,blackList:[1704892448,1708434848],dataError:{active:!1,message:""},disabled:!1,disabledDaysByWeek:[],inputReadonly:!1,label:"Label",labelPosition:E.inside,mandatory:!1,message:"Voilà le message",size:u.medium,start:{label:"Date de début",date:"20/03/2024"},typage:"default",weekend:!0,whiteList:[],withReset:!1}};var a,l,r;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    template: '<div class="demo" style=""><SolarisDatepicker v-model="selection" @input="inputElement" @blur="blurElement" @selection="selectionElement" @reset="resetElement" style="margin: 0 auto" v-bind="args"/></div>'
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
    label: 'Label',
    labelPosition: LabelPosition.inside,
    mandatory: false,
    message: 'Voilà le message',
    size: Size.medium,
    start: {
      label: 'Date de début',
      date: '20/03/2024'
    },
    typage: 'default',
    weekend: true,
    whiteList: [],
    withReset: false
  }
}`,...(r=(l=t.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const T=["Datepicker"];export{t as Datepicker,T as __namedExportsOrder,B as default};
