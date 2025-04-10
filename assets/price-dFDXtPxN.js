import{l as e}from"./colissimo-B7reKzCB.js";const t=`
  name: string,
  value: string,
  captions?: Array<string>
}`,a=`{
  title: string,
  subtitle?: string,
  logo?: { 
    url: string,
    alt?: string
  }  
}`,o=`{
  width?: number
  height?: number
  defaultSource: [
    {
      alt?: string,
      url: string,
      mimeType: MimeType,
      device?: DeviceSize
    }  
  ],  
  otherSources: [
    {
      alt?: string,
      url: string,
      mimeType: MimeType,
      device?: DeviceSize
    }  
  ],  
  lazyload?: boolean
}`,l=`[
  {
    name: string,
    icon?: {
      name: string,
      eventName: string
    },  
    options: [
      {
        name: string,
        info: string,
        subName?: string,
        subInfo?: string
      }  
    ]  
  }  
]`,s=`{
  active?: boolean,
  height?: number
}`,n={button:{description:"Content of the button display in the bottom.",table:{type:{summary:"string"},defaultValue:{summary:"Étape suivante"}}},buttonDivider:{description:"Display separator under the button",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},btnFullWidth:{description:"Full width for the bottom button.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},displayCloseModalButton:{description:"Display close button on modal.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},header:{description:"Content at the top of the component.",table:{type:{summary:"object",detail:a}},type:{required:!0}},image:{description:"Display an image under the header.",table:{type:{summary:"object",detail:o}}},isLoading:{description:"Show a loader in the validate button.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},hiddenButton:{description:"Makes the button hidden.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},nextStepDisabled:{description:"Makes the button disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},price:{description:"The global price.",table:{type:{summary:"object",detail:t}},type:{required:!0}},showDetails:{description:"Show details for each step.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:{type:"boolean"}},showMobileDetails:{description:"Show summary steps' details on mobile.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},control:{type:"boolean"}},steps:{description:"Steps in the summary.",table:{type:{summary:"array",detail:l}}},StepBtnFullWidth:{description:"Full width for the step button.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},stickyMobile:{description:"Make sticky under 992px.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},titleTag:{description:"Level of tag for the title.",table:{type:{summary:["h1","h2","h3","h4","h5","h6"]}},control:{type:"select"},options:["h1","h2","h3","h4","h5","h6",""]}},y={...n,emptySpaceBottom:{description:"Empty space for display chatbot.",table:{type:{summary:"object",detail:s}}},hasHeader:{description:"Tell the sidebar the header is on the page, usefull for the 'button' option in stickyDesktop.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"select"},options:[!0,!1]},stickyDesktop:{description:"Make sticky starting of 1280px and above.",table:{type:{summary:["default","block","bottom","button (not active at the moment)"]},defaultValue:{summary:"default"}},control:{type:"select"},options:["default","block","bottom","button"]}},d={title:"Ma commande",subtitle:"Subtitle",logo:{url:e,alt:"logo"}},i="Tarif net total",r="4,25",u=[{name:"Montant total HT",info:"4,25 €"},{name:"Livraison en main propre",info:"4,25 €"},{name:"Total net transport",info:"4,25 €"}],m=["Le service Colissimo en ligne<br>n'est pas soumis à la TVA."],b={name:i,value:r,options:u,captions:m};export{n as a,y as b,d as h,b as p};
