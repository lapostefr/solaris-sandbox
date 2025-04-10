import{F as t,S as s}from"./Picture-Bv3IzpnC.js";import"./iframe-BnG0fEMb.js";import"../sb-preview/runtime.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=`{
  alt?: string,
  url: string,
  mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
  device?: 320 | 640 | 992 | 1280 | 1440 | 1680
}`,u=`[
  {
    alt?: string,
    url: string,
    mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
    device?: 320 | 640 | 992 | 1280 | 1440 | 1680
  }
]`,p="Alternative à remplir si l'image n'est pas décorative",l="image/jpg",c="https://picsum.photos/500/200",d={alt:p,mimeType:l,url:c},g=[{url:"https://picsum.photos/500/500",mimeType:"image/jpeg",device:1280},{url:"https://picsum.photos/500/300",mimeType:"image/jpeg",device:992},{url:"https://picsum.photos/500/200",mimeType:"image/jpeg",device:640}],i=Object.values(t),S={title:"Atoms/Picture",component:s,argTypes:{ariaHidden:{description:"The aria-hidden attribute should only be used in specific cases. If the image is purely decorative, set the alt attribute for images to empty [see for more information]. ( https://www.w3.org/WAI/tutorials/images/decision-tree/)",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},defaultSource:{description:"Define main image source `<img>`.",table:{type:{summary:"object",detail:n}},required:!0},fetchPriority:{description:"Select high or low priority for image loading.",table:{type:{summary:i.join(" | ")},defaultValue:{summary:t.auto}},control:{type:"select"},options:i},fullWidth:{description:"Apply auto width and height (false applies width and height props).",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},height:{description:"Set image height.",table:{type:{summary:"number"}},required:!0},lazyload:{description:"Activate lazyloading for the image.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},otherSources:{description:"Define one or more additional sources for the image `<source>`.",table:{type:{summary:"array",detail:u}}},width:{description:"Set image width.",table:{type:{summary:"number"}},required:!0}},args:{ariaHidden:!1,defaultSource:d,fetchPriority:t.auto,fullWidth:!0,height:200,lazyload:!0,otherSources:g,width:500}},e={render:m=>({components:{SolarisPicture:s},setup(){return{args:m}},template:`<div style="height: 100vh;">
    <SolarisPicture v-bind="args" />
  </div>`})};var r,a,o;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisPicture
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 100vh;">
    <SolarisPicture v-bind="args" />
  </div>\`
  })
}`,...(o=(a=e.parameters)==null?void 0:a.docs)==null?void 0:o.source}}};const w=["Picture"];export{e as Picture,w as __namedExportsOrder,S as default};
