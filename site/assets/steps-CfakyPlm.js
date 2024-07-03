const e=`
  name: string,
  value: string,
  captions?: Array<string>
}`,t=`{
  title: string,
  subtitle?: string,
  logo?: { 
    url: string,
    alt?: string
  }  
}`,a=`{
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
}`,o=`[
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
]`,n=`{
  active?: boolean,
  height?: number
}`,i={button:{description:"Content of the button display in the bottom.",table:{type:{summary:"string"},defaultValue:{summary:"Étape suivante"}}},buttonDivider:{description:"Display separator under the button",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},btnFullWidth:{description:"Full width for the bottom button.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},displayCloseModalButton:{description:"Display close button on modal.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}}},header:{description:"Content at the top of the component.",table:{type:{summary:"object",detail:t}},type:{required:!0}},image:{description:"Display an image under the header.",table:{type:{summary:"object",detail:a}}},isLoading:{description:"Show a loader in the validate button.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},hiddenButton:{description:"Makes the button hidden.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},nextStepDisabled:{description:"Makes the button disabled.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},price:{description:"The global price.",table:{type:{summary:"object",detail:e}},type:{required:!0}},showDetails:{description:"Show details for each step.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:{type:"boolean"}},showMobileDetails:{description:"Show summary steps' details on mobile.",table:{type:{summary:"boolean"},defaultValue:{summary:!0}},control:{type:"boolean"}},steps:{description:"Steps in the summary.",table:{type:{summary:"array",detail:o}}},StepBtnFullWidth:{description:"Full width for the step button.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},stickyMobile:{description:"Make sticky under 992px.",table:{type:{summary:"boolean"},defaultValue:{summary:!1}},control:{type:"boolean"}},titleTag:{description:"Level of tag for the title.",table:{type:{summary:["h1","h2","h3","h4","h5","h6"]}},control:{type:"select"},options:["h1","h2","h3","h4","h5","h6",""]}},u={...i,emptySpaceBottom:{description:"Empty space for display chatbot.",table:{type:{summary:"object",detail:n}}},hasHeader:{description:"Tell the sidebar the header is on the page, usefull for the 'button' option in stickyDesktop.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"select"},options:[!0,!1]},stickyDesktop:{description:"Make sticky starting of 1280px and above.",table:{type:{summary:["default","block","bottom","button (not active at the moment)"]},defaultValue:{summary:"default"}},control:{type:"select"},options:["default","block","bottom","button"]}},s=100,l=100,r={url:"https://picsum.photos/id/312/100/100",alt:"honey"},m={width:s,height:l,defaultSource:r},p=[{name:"Caractéristiques",icon:{name:"edit",eventName:"feature"},options:[{name:"Destination",info:"France Métropolitaine"},{name:"Poids",info:"250 g"},{name:"Format",info:"Standard"}]},{name:"Départ",icon:{name:"edit",eventName:"start"},options:[{name:"Envoi du colis",info:"En boîte aux lettres",subName:"Envoi du colis",subInfo:"En boîte aux lettres"}]},{name:"Arrivée",icon:{name:"edit",eventName:"arrival"},options:[{name:"Livraison du colis",info:"Contre signature - J+2"}]},{options:[{name:"Livraison en main propre",info:"4,25 €"},{name:"Total net transport",info:"4,25 €"}]}];export{u as a,m as i,p as s};
