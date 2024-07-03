const o=`{
  alt?: string,
  url: string,
  mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
  device?: 320 | 640 | 992 | 1280 | 1440 | 1680
}`,s=`[
  {
    alt?: string,
    url: string,
    mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
    device?: 320 | 640 | 992 | 1280 | 1440 | 1680
  }
]`,u="Mon image",l="image/jpg",m="https://via.placeholder.com/200x200",c={alt:u,mimeType:l,url:m},p=[{url:"https://via.placeholder.com/500x200",mimeType:"image/jpeg",device:1280},{url:"https://via.placeholder.com/400x150",mimeType:"image/jpeg",device:992},{url:"https://via.placeholder.com/375x375",mimeType:"image/jpeg",device:640}],n={title:"Atoms/Picture",argTypes:{defaultSource:{description:"Set attributes for the default source of the picture.",table:{type:{summary:"object",detail:o}},required:!0},fetchPriority:{description:"Choose high (true) or low (false) priority for fetching.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},height:{description:"The height of the picture.",table:{type:{summary:"number"}},required:!0},lazyload:{description:"Active the lazyloading for the picture.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},otherSources:{description:"Set attributes for the other sources of the picture (one or more).",table:{type:{summary:"array",detail:s}}},width:{description:"The width of the picture.",table:{type:{summary:"number"}},required:!0}},args:{defaultSource:c,fetchPriority:!1,height:200,lazyload:!0,otherSources:p,width:500}},e={render:a=>({setup(){return{args:a}},template:`<div style="height: 100vh;">
    <SolarisPicture v-bind="args" />
  </div>`})};var t,r,i;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    setup() {
      return {
        args
      };
    },
    template: \`<div style="height: 100vh;">
    <SolarisPicture v-bind="args" />
  </div>\`
  })
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const d=["Picture"];export{e as Picture,d as __namedExportsOrder,n as default};
