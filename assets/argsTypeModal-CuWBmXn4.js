const t=`{
  url: string,
  alt?: string,
  width?: number,
  height?: number,
  maxHeight?: number
}`,a=`[
  {
    id: number,
    title: string,
    description: string,
    background?: { url: string, alt?: string }
  }
]`,o=["xs","small","default","large"],l=["small","default","large"],r=["h1","h2","h3","h4","h5","h6"],s=["supernova","cobalt","yellow","green","pink","grey"],e={disableClickOutside:{description:"Disables closing of the modal when clicked outside it.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},focusTrap:{description:"Enable/Disable Focus Trap.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},titleLevel:{description:"The size of the titre.",table:{type:{summary:["h1","h2","h3","h4","h5","h6"]},defaultValue:{summary:"h1"}},control:{type:"select"},options:r},padding:{description:"The padding of the Modal.",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:l},closable:{description:'Make modal closable *<span style="color:orange">deprecated</span>*',table:{type:{summary:"boolean"},defaultValue:{summary:"true"},category:"Deprecated"},control:{type:"boolean"}}},i={...e,colorBorderTop:{description:"The color for the upper border of the modal. For pro pages, the color remains comet.",table:{type:{summary:"string"},defaultValue:{summary:"supernova"}},control:{type:"select"},options:s},mobileFull:{description:"Sets the height of the modal to 100% under 700px.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}},control:{type:"boolean"}},showTitle:{description:"Show or hide title. If false, an aria-label attribute with title's value is added to the dialog tag.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},type:{required:!0},control:{type:"boolean"}},size:{description:"The size of the Modal.",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:o},title:{description:"Required for accessibility. The Modal title.",table:{type:{summary:"string"}},type:{required:!0}},arialabel:{description:"The Modal aria-label .",table:{type:{summary:"string"}}}},n={...e,logo:{description:"The logo for the modal.",table:{type:{summary:"object",detail:t}}},modals:{description:"List of modals.",table:{type:{summary:"array",detail:a}},type:{required:!0}},showTitle:{description:"Show or hide title. If false, an aria-label attribute with title's value is added to the dialog tag.",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}},type:{required:!0},control:{type:"boolean"}}};export{i as a,n as b};
