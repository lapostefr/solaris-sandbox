import{S as n}from"./ProductCard-BO2bhWB_.js";import{r as s,w as d}from"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c=["horizontal","vertical"],g={title:"Organisms/Product Card",argTypes:{orientation:{description:"Orientation of your Product Card",table:{type:{summary:"string"},defaultValue:{summary:"vertical"}},control:{type:"select"},options:c},title:{description:"Title of your Product Card",table:{type:{summary:"string"}}},url:{description:"Url to access to the Product Details Page",table:{type:{summary:"string"}}},image:{description:"Product preview (responsive). <br> Model: { width: number, height: number, defaultSource: { alt: string, url: string, mimeType: string, device: number}, otherSource: { alt: string, url: string, mimeType: string, device: number}, lazyload: boolean }",table:{type:{summary:"Object"}}},ecoResponsable:{description:"If your product is eco-responsable",table:{type:{summary:"boolean"}},control:"boolean"},madeInFrance:{description:"If your product is made is France",table:{type:{summary:"boolean"}},control:"boolean"},color:{description:"If your product include a color variant",table:{type:{summary:"boolean"}},control:"boolean"},badges:{description:"Badge List for your Product. <br> Model: [ { label: string, color: string: size: string } ]",table:{type:{summary:"Array"}}},details:{description:"Details under your Product title",table:{type:{summary:"string"}}},rating:{description:"If your Product has ratings",table:{type:{summary:"number"}}},reviewCount:{description:"If your Product has reviewCount",table:{type:{summary:"number"}}},isInStock:{description:"If your product is available",table:{type:{summary:"boolean"}},control:"boolean"},availability:{description:"Your product availability",table:{type:{summary:"string"}}},code:{description:"Your product code",table:{type:{summary:"string"}}},price:{description:"Current product price",table:{type:{summary:"string"}}},priceTaxes:{description:"Add HT or TTC taxe symbol (upper or lower case) ",table:{type:{summary:"string"}}},priceCrossedOut:{description:"Crossed out price if there is a promotion",table:{type:{summary:"string"}}},deadlines:{description:"Deadlines for delivery",table:{type:{summary:"string"}}},offersLabel:{description:"Offers Label",table:{type:{summary:"string"}}}},args:{orientation:"vertical",title:"Titre du premier element",url:"productUrl",image:{width:220,height:220,lazyload:!0,defaultSource:{alt:"Test for XS Screen - 320",url:"https://via.placeholder.com/140",mimeType:"image/jpeg",device:320},otherSources:[{url:"https://via.placeholder.com/274",mimeType:"image/jpeg",device:1680},{url:"https://via.placeholder.com/260",mimeType:"image/jpeg",device:1440},{url:"https://via.placeholder.com/250",mimeType:"image/jpeg",device:1280},{url:"https://via.placeholder.com/248",mimeType:"image/jpeg",device:992},{url:"https://via.placeholder.com/220",mimeType:"image/jpeg",device:640}]},ecoResponsable:!0,madeInFrance:!0,color:!0,badges:[{label:"Livraison offerte",color:"green"},{label:"Badge avec un très long label"},{label:"-20%",color:"pink"}],details:"vendu par La Poste",rating:2.5,reviewCount:190,isInStock:!0,availability:"Rupture de stock",code:"mp-1033",price:"16,25€",priceCrossedOut:"20,40€",priceTaxes:void 0,deadlines:"Expédié sous 2 à 4 jours",offersLabel:"Plus d'offres à partir de 16,25€",addToCartLoading:!1}},e={render:r=>({components:{SolarisProductCard:n},setup(){const t=s(r.value);return d(()=>r.value,l=>{t.value=l}),{args:r,model:t}},template:`<div :style="args.orientation === 'vertical' ? { maxWidth: '284px' } : {}">
    <SolarisProductCard style="margin: 0 0 20px 0;" v-model="model" v-bind="args" />
  </div>`}),args:{orientation:"vertical",title:"Titre du premier element",url:"productUrl",image:{width:220,height:220,lazyload:!0,defaultSource:{alt:"Test for XS Screen - 320",url:"https://via.placeholder.com/140",mimeType:"image/jpeg",device:320},otherSources:[{url:"https://via.placeholder.com/274",mimeType:"image/jpeg",device:1680},{url:"https://via.placeholder.com/260",mimeType:"image/jpeg",device:1440},{url:"https://via.placeholder.com/250",mimeType:"image/jpeg",device:1280},{url:"https://via.placeholder.com/248",mimeType:"image/jpeg",device:992},{url:"https://via.placeholder.com/220",mimeType:"image/jpeg",device:640}]},madeInFrance:!0,color:!0,badges:[{label:"Livraison offerte",color:"green"},{label:"Badge avec un très long label",color:"dodger-blue"},{label:"-20%",color:"pink"}],details:"vendu par La Poste",rating:2.5,reviewCount:190,isInStock:!0,availability:"Rupture de stock",code:"mp-1033",price:"16,25€",priceCrossedOut:"20,40€",priceTaxes:"",deadlines:"Expédié sous 2 à 4 jours",offersLabel:"Plus d'offres à partir de 16,25€",addToCartLoading:!1}};var a,o,i;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisProductCard
    },
    setup() {
      const model = ref(args.value);
      watch(() => args.value, val => {
        model.value = val;
      });
      return {
        args,
        model
      };
    },
    template: \`<div :style="args.orientation === 'vertical' ? { maxWidth: '284px' } : {}">
    <SolarisProductCard style="margin: 0 0 20px 0;" v-model="model" v-bind="args" />
  </div>\`
  }),
  args: {
    orientation: 'vertical',
    title: 'Titre du premier element',
    url: 'productUrl',
    image: {
      width: 220,
      height: 220,
      lazyload: true,
      defaultSource: {
        alt: 'Test for XS Screen - 320',
        url: 'https://via.placeholder.com/140',
        mimeType: 'image/jpeg',
        device: 320
      },
      otherSources: [{
        url: 'https://via.placeholder.com/274',
        mimeType: 'image/jpeg',
        device: 1680
      }, {
        url: 'https://via.placeholder.com/260',
        mimeType: 'image/jpeg',
        device: 1440
      }, {
        url: 'https://via.placeholder.com/250',
        mimeType: 'image/jpeg',
        device: 1280
      }, {
        url: 'https://via.placeholder.com/248',
        mimeType: 'image/jpeg',
        device: 992
      }, {
        url: 'https://via.placeholder.com/220',
        mimeType: 'image/jpeg',
        device: 640
      }]
    },
    madeInFrance: true,
    color: true,
    badges: [{
      label: 'Livraison offerte',
      color: 'green'
    }, {
      label: 'Badge avec un très long label',
      color: 'dodger-blue'
    }, {
      label: '-20%',
      color: 'pink'
    }],
    details: 'vendu par La Poste',
    rating: 2.5,
    reviewCount: 190,
    isInStock: true,
    availability: 'Rupture de stock',
    code: 'mp-1033',
    price: '16,25€',
    priceCrossedOut: '20,40€',
    priceTaxes: '',
    deadlines: 'Expédié sous 2 à 4 jours',
    offersLabel: "Plus d'offres à partir de 16,25€",
    addToCartLoading: false
  }
}`,...(i=(o=e.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};const y=["ProductCard"];export{e as ProductCard,y as __namedExportsOrder,g as default};
