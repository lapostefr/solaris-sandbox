import{a as n}from"./chunk-MZXVCX43-DWuJqIWT.js";import"./v4-D8aEg3BZ.js";const r=["supernova","default","cobalt","darkgrey","white","danger"],i=["small","regular","large"],l=["primary","secondary","ghost"],c=`{
  mobile: string,
  tablet: string,
  desktop: string
}`,m={title:"Atoms/Button",parameters:{actions:{argTypesRegex:"^on.*"}},argTypes:{color:{description:"The background color of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"supernova"},control:{type:"select"},options:r},disabled:{description:"Activate or deactivate the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},href:{description:"Link to the button.",table:{type:{summary:"string"}}},icon:{description:"Choose the type of the icon.",table:{type:{summary:"string"}}},iconReverse:{description:"Place the icon after the text in the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},isFocusable:{description:"Display shadow on focus.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},isLoading:{description:"Displays a loading animation in the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:!1},control:{type:"boolean"}},loadingCustom:{description:"Color for the Loading.",table:{type:{summary:"string"}},defaultValue:{summary:""},control:{type:"select"},options:["","emphasis","quiet","default","vsmp","danger"]},padding:{description:"Activate a padding for the button.",table:{type:{summary:"boolean"}},defaultValue:{summary:!0},control:{type:"boolean"}},responsive:{description:"Specific sizes for the three types of screen (mobile - tablet - desktop). If there is no value, it is the overall button size (above) that is applied.",table:{type:{summary:"object",detail:c}}},size:{description:"Overall button size for all screen sizes (unless there are specific sizes in responsive).",table:{type:{summary:"string"}},defaultValue:{summary:"regular"},control:{type:"select"},options:i},target:{description:"Target for the link of the button.",table:{type:{summary:"string"}},defaultValue:{summary:"_self"}},title:{description:"The title for the button.",table:{type:{summary:"string"}}},type:{description:"The kind of button.",table:{type:{summary:"string"}},defaultValue:{summary:"primary"},control:{type:"select"},options:l}},args:{color:"supernova",disabled:!1,href:"",icon:"cart-simple",iconReverse:!1,isFocusable:!1,isLoading:!1,loadingCustom:"default",padding:!0,size:"regular",target:"_self",title:"",type:"primary"}},e={render:s=>({setup(){return{args:s,clickElement:()=>{n("click")}}},template:`<div style="padding: 15px; background: #ccc;" @click="clickElement">
    <SolarisButton v-bind="{...args}">Button</SolarisButton>
  </div>`}),args:{color:"supernova",disabled:!1,href:"",icon:"cart-simple",iconReverse:!1,isFocusable:!1,isLoading:!1,loadingCustom:"default",padding:!0,size:"regular",target:"_self",title:"",type:"primary"}};var t,a,o;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      const clickElement = () => {
        action('click');
      };
      return {
        args,
        clickElement
      };
    },
    template: \`<div style="padding: 15px; background: #ccc;" @click="clickElement">
    <SolarisButton v-bind="{...args}">Button</SolarisButton>
  </div>\`
  }),
  args: {
    color: 'supernova',
    disabled: false,
    href: '',
    icon: 'cart-simple',
    iconReverse: false,
    isFocusable: false,
    isLoading: false,
    loadingCustom: 'default',
    padding: true,
    size: 'regular',
    target: '_self',
    title: '',
    type: 'primary'
  }
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const y=["Button"];export{e as Button,y as __namedExportsOrder,m as default};
