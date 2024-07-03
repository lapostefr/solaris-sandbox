const a=`[
  {
    title?: string,
    url?: string,
    image: {
      width?: number,
      height?: number,
      defaultSource: {
        alt?: string,
        url: string,
        mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
        device?: 320 | 640 | 992 | 1280 | 1440 | 1680
      },
      otherSources: [
        {
          alt?: string,
          url: string,
          mimeType: image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
          device?: 320 | 640 | 992 | 1280 | 1440 | 1680
        }
      ],
      lazyload?: boolean
    },
    madeInFrance?: boolean,
      color?: true,
      badges?: [
        {
          label: string,
          color: string
        },
        {
          label: string,
          color: string
        }
      ],
      details?: string,
      rating?: number,
      isInStock?: boolean,
      code?: string,
      price?: string,
      priceCrossedOut?: string
  }
]`,l=`[
  {
    title?: string,
    url?: string,
    external?: boolean,
    image?: {
      width: number | undefined,
      height: number | undefined,
      defaultSource: {
        alt?: string,
        url: string,
        mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
      }
    }
]`,i={controlColor:{description:"Color of control buttons",table:{type:{summary:["supernova","cobalt","nebula","dark-grey","white"]}},control:{type:"select"},options:["supernova","cobalt","nebula","dark-grey","white"]},moreLabel:{description:"Label of the link to the right of the title",table:{type:{summary:"string"}}},moreLink:{description:"Url of the link to the right of the title",table:{type:{summary:"string"}}},type:{description:"Type of carousel",table:{type:{summary:["multiple","simple"]},defaultValue:{summary:"multiple"}},control:{type:"select"},options:["multiple"]},title:{description:"Carousel title",table:{type:{summary:"string"}}},titleTag:{description:"Tag of the title",table:{type:{summary:["h1","h2","h3","h4","h5","h6","h7"]}},control:{type:"select"},options:["","h1","h2","h3","h4","h5","h6","h7"]},qtyItems:{description:'*Quantity of items in the carousel. This prop is <span style="color:orange">deprecated</span>*',table:{type:{summary:"number"},category:"Deprecated"}}},r={isFullMobile:{description:"Only on xs. Choose to show a single item occupying 80% of the space.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},s={items:{description:'Items of the carousel allowing to provide the values to the props :```title``` (the image title), ```url```(redirect to image url), ```external```(open url in new window) and ```image```(image informations).<br/><br/>* ```imageUrl``` and ```imgAlt``` props are <span style="color:orange">deprecated</span> but can still be used for legacy. It is recommended to use the ```image``` prop.*',table:{type:{summary:"array",detail:l},category:"Slots"}}},c=Object.assign({},i,r,{items:{description:"Items of carousel allowing to provide the values of the Product Card component props.",table:{type:{summary:"array",detail:a},category:"Slots"}}}),g=Object.assign({},i,r,s),u=Object.assign({},i,s),n=(e,o)=>{let t="";return e==="SolarisCarouselAnimco"||e==="SolarisCarouselSimple"?t=`   
    <div v-for="(item, index) in items" :key="index" role="listitem" :aria-label="\`Élément \${index + 1} sur \${items.length}\`">
      <${e}
        :title="item.title" 
        :url="item.url" 
        :external="item.external"
        :image="item.image" 
      />
  </div>  
  `:o&&(t=o),`The user provides an array of items in the **Carousel slot** and then uses the **${e}** component.
Here is the example story that shows how to implement it:

\`\`\`
<SolarisCarousel v-bind="$props">
  ${t.trim()}
</SolarisCarousel>
\`\`\`
`},d=n;export{c as a,g as b,d as c,u as d};
