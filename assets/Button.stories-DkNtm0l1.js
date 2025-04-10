import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{S as n}from"./Button-CxIFeNFW.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Loader-DHIAU4Qg.js";const l=["supernova","default","cobalt","darkgrey","white","danger"],c="small",u="regular",p="large",d={mobile:c,tablet:u,desktop:p},m=["small","regular","large"],y=["primary","secondary","ghost"],b=`{
  mobile: string,
  tablet: string,
  desktop: string
}`,S={title:"Atoms/Button",argTypes:{ariaHidden:{description:'if true, the icon is hidden from assistive technologies. Set the "title" prop to ensure that the content remains accessible.',table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},buttonType:{description:'If present and not undefined, add the "type" html attribute with the selected value.',table:{type:{summary:"button| reset| submit"}},control:{type:"select"},options:["button","reset","submit"]},color:{description:"The background color of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"supernova"},control:{type:"select"},options:l},disabled:{description:"Activate or deactivate the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},href:{description:"Link to the button.",table:{type:{summary:"string"}}},icon:{description:"Choose the type of the icon.",table:{type:{summary:"string"}}},iconReverse:{description:"Place the icon after the text in the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},isLoading:{description:"Displays a loading animation in the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:"false"},control:{type:"boolean"}},loadingCustom:{description:"Color for the Loading.",table:{type:{summary:"string"}},defaultValue:{summary:""},control:{type:"select"},options:["","emphasis","quiet","default","vsmp","danger"]},padding:{description:"Activate a padding for the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:"true"},control:{type:"boolean"}},responsive:{description:"Specific sizes for the three types of screen (mobile - tablet - desktop). If there is no value, it is the overall button size (above) that is applied.",table:{type:{summary:"object",detail:b}}},size:{description:"Overall button size for all screen sizes (unless there are specific sizes in responsive).",table:{type:{summary:"string"}},defaultValue:{summary:"regular"},control:{type:"select"},options:m},target:{description:"Target for the link of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"_self"}},title:{description:"The title for the button.",table:{type:{summary:"string"}}},type:{description:"The kind of button.",table:{type:{summary:"string"}},defaultValue:{summary:"primary"},control:{type:"select"},options:y}},args:{buttonType:void 0,color:"supernova",disabled:!1,href:"",icon:"cart-simple",iconReverse:!1,isLoading:!1,loadingCustom:"default",padding:!0,responsive:d,size:"regular",target:"_self",title:"",type:"primary"}},e={render:s=>({components:{SolarisButton:n},setup(){const r=i("click");return{args:s,clickElement:r}},template:`
      <div style="padding: 15px; background: #ccc;">
        <SolarisButton v-bind="{...args}" @click="clickElement">Button</SolarisButton>
      </div>
    `}),args:{color:"supernova",disabled:!1,href:"",icon:"cart-simple",iconReverse:!1,isLoading:!1,loadingCustom:"default",padding:!0,size:"regular",target:"_self",title:"",type:"primary"}};var t,o,a;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisButton
    },
    setup() {
      const clickElement = action('click');
      return {
        args,
        clickElement
      };
    },
    template: \`
      <div style="padding: 15px; background: #ccc;">
        <SolarisButton v-bind="{...args}" @click="clickElement">Button</SolarisButton>
      </div>
    \`
  }),
  args: {
    color: 'supernova',
    disabled: false,
    href: '',
    icon: 'cart-simple',
    iconReverse: false,
    isLoading: false,
    loadingCustom: 'default',
    padding: true,
    size: 'regular',
    target: '_self',
    title: '',
    type: 'primary'
  }
}`,...(a=(o=e.parameters)==null?void 0:o.docs)==null?void 0:a.source}}};const V=["Button"];export{e as Button,V as __namedExportsOrder,S as default};
