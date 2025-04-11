import{r as i}from"./vue.esm-bundler-BiAlgFmf.js";import{S as u}from"./Tile-CMdievyB.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Picture-BofBnaNi.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";import"./Radio-CTXQPbD7.js";import"./generateId-CVaf2GGW.js";import"./Message-MlHtBEps.js";import"./Checkbox-BV2bMv1f.js";const c="[ string ]",m=`{
    id: string,
    image?: string,
    imageHeight?: number,
    imageWidth?: number,
    imageAlt?: string,
    title?: string,
    price?: string,
    content?: string,
    caption?: string,
    tag?: string,
    tagColor?: string
  }`,g=[["tile--right","tile--right slot"]],s=[{id:"pickup",title:"En point de retrait",content:"25 000 points retrait (bureaux de poste, commerçants, relais Pickup) disponibles en France Métropolitaine. Attention, ce texte est vraiment très très long.",caption:"Indemnisation en cas d’incident : 6€ (soit 23€/kg)",price:"inclus",tag:"OFFRE LA MOINS CHERE",inputLabel:"En point de retrait"},{id:"bal",title:"En boîte aux lettres",content:"Livraison en boîte aux lettres pour plus de flexibilité",caption:"Indemnisation en cas d’incident : 6€ (soit 23€/kg)",price:"+ 0,70 €",inputLabel:"En boîte aux lettres"},{id:"signature",title:"Contre signature",content:"Livraison avec remise en main propre et signature d’un avis",caption:"Indemnisation en cas d’incident : 6€ (soit 23€/kg)",price:"+ 3,70 €",inputLabel:"Contre signature"}],S={title:"Organisms/Tile",argTypes:{backgroundColor:{description:"Background color of the tiles.",table:{type:{summary:"string"},defaultValue:{summary:"transparent"}},control:{type:"select"},options:["transparent","white"]},color:{description:'*Color for the tag of the tiles. This prop is <span style="color:orange">deprecated</span>. Use tagColor in prop tiles instead.*',table:{type:{summary:"string"},defaultValue:{summary:"supernova"},category:"Deprecated"},control:{type:"select"},options:["supernova","cobalt","pink","blue","green","purple","orange","comet"]},disabledList:{description:"List of disabled elements.",table:{type:{summary:"array",detail:c}}},layout:{description:"By default, horizontal = list & vertical = grid.",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:["default","list","grid"]},name:{description:"Must be unique.",table:{type:{summary:"string"}}},orientation:{description:"2 types of Tiles.",table:{type:{summary:"string"},defaultValue:{summary:"horizontal"}},control:{type:"select"},options:["horizontal","vertical","automatic"]},position:{description:"Position of the tiles.",table:{type:{summary:"string"}},control:{type:"select"},options:["top","bottom"]},selection:{description:"if default, hide radio.",table:{type:{summary:"string"},defaultValue:{summary:"default"}},control:{type:"select"},options:["default","unique","multiple"]},showImagesOnMobile:{description:"Boolean to hide image on mobile.",table:{type:{summary:"boolean"}}},size:{description:"Only large and small for vertical orientation.",table:{type:{summary:"string"},defaultValue:{summary:"large"}},control:{type:"select"},options:["large","medium","small"]},tiles:{description:"Text elements for the tiles.",table:{type:{summary:"array",detail:m}}},value:{description:"Tile(s) selected.",table:{type:{summary:"string | array<string>"}}}},args:{backgroundColor:"transparent",disabledList:[""],layout:"default",name:"depotCourrier",orientation:"horizontal",position:"top",selection:"default",size:"large",tiles:s,value:["pickup"],color:"supernova"}},e={render:t=>({components:{SolarisTile:u},setup(){const n=i(g),l=d=>{t.value=d},p=i();return{args:t,slotsref:n,toggle:l,model:p}},template:`<div>
    <SolarisTile v-model="args.value" v-bind="args">
      <template v-for="[name, content] in slotsref" #[name]>
          <div>{{ content }}</div>
      </template>
    </SolarisTile>
    </div>`}),args:{backgroundColor:"transparent",disabledList:[""],layout:"default",name:"depotCourrier",orientation:"horizontal",position:"top",selection:"default",size:"large",tiles:s,value:["pickup"],color:"supernova"}};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisTile
    },
    setup() {
      const slotsref = ref(slots);
      const toggle = (value: string) => {
        args.value = value;
      };
      const model = ref<any>();
      return {
        args,
        slotsref,
        toggle,
        model
      };
    },
    template: \`<div>
    <SolarisTile v-model="args.value" v-bind="args">
      <template v-for="[name, content] in slotsref" #[name]>
          <div>{{ content }}</div>
      </template>
    </SolarisTile>
    </div>\`
  }),
  args: {
    backgroundColor: 'transparent',
    disabledList: [''],
    layout: 'default',
    name: 'depotCourrier',
    orientation: 'horizontal',
    position: 'top',
    selection: 'default',
    size: 'large',
    tiles: tiles,
    value: ['pickup'],
    // |-- Deprecated
    color: 'supernova'
    // Deprecated --|
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const E=["Tile"];export{e as Tile,E as __namedExportsOrder,S as default};
