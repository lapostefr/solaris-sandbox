import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as l,T as c,S as s}from"./HeaderTool-ClxNdi-w.js";import{a as u,L as y}from"./types-CX4OQ2kf.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Loader-DHIAU4Qg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Icon-C-Sturzh.js";const g=`{
  value: number,
  title?: string
}`,k=`{
  url: string
  label?: string
  rel?: 'noopener noreferrer' | 'noreferrer' | 'noopener'
  target?: '_blank' | '_self' | '_parent' | '_top' | 'framename'
  title?: string
}`,o=Object.values(l),r=Object.values(c),T={slotIcon:{description:"Use the slot named *icon* if you need to customize the icon content.",table:{category:"Slots"}}},S={title:"Organisms/Header/Tool",component:s,argTypes:{activeType:{description:"Active border is either black or with primary theme color.",table:{type:{summary:o.join(" | ")}},control:"select",options:o},alternativeTitle:{description:"Add a title attribute to the component.",table:{type:{summary:"string"}}},badge:{control:{type:"object"},description:"Blue badge containing a counter.",table:{type:{summary:"object",detail:g}}},icon:{control:{type:"select"},options:r,description:"The name of the icon if present.",table:{type:{summary:r.join(" | ")}}},id:{description:"The id of the component.",table:{type:{summary:"string"}}},isLoading:{description:"Displays a loading animation.",control:{type:"boolean"}},label:{description:"The label of the component.",table:{type:{summary:"string"}}},link:{control:"object",description:"If filled, &lt;a&gt; tag is applied on the component, otherwiser &lt;button&gt; tag is applied (use appropriate event).",table:{type:{summary:"object",detail:k}}},subLabel:{description:"The text displayed under the label.",table:{type:{summary:"string"}}},...T},args:{activeType:l.neutral,alternativeTitle:"",badge:{value:1,title:"badge"},id:"id",isLoading:!1,icon:c.actionAlert,label:"Label",link:{url:"#",label:"link",rel:u.NOOPENER,target:y.BLANK},subLabel:""}},e={render:p=>({components:{SolarisHeaderTool:s},setup(){const m=t("click"),d=t("clickCapture"),b=t("enterKeyboard");return{args:p,clickElement:m,clickCaptureElement:d,enterKeyboardElement:b}},template:`
    <SolarisHeaderTool 
      v-bind="args" 
      @click="clickElement"
      @clickCapture="clickCaptureElement" 
      @enterKeyboard="enterKeyboardElement"  
    />`})};var a,n,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisHeaderTool
    },
    setup() {
      const clickElement = action('click');
      const clickCaptureElement = action('clickCapture');
      const enterKeyboardElement = action('enterKeyboard');
      return {
        args,
        clickElement,
        clickCaptureElement,
        enterKeyboardElement
      };
    },
    template: \`
    <SolarisHeaderTool 
      v-bind="args" 
      @click="clickElement"
      @clickCapture="clickCaptureElement" 
      @enterKeyboard="enterKeyboardElement"  
    />\`
  })
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const O=["Tool"];export{e as Tool,O as __namedExportsOrder,S as default};
