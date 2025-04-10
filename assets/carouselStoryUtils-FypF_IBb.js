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
]`,o={controlColor:{description:'Color of control buttons. *<br/>Note : to test, make sure the first empty option of "deprecatedColor" is selected.*',table:{type:{summary:["default","quiet","onStrong"]},defaultValue:{summary:"default"}},control:{type:"select"},options:["default","quiet","onStrong"]},moreLabel:{description:"Label of the link to the right of the title",table:{type:{summary:"string"}}},moreLink:{description:"Url of the link to the right of the title",table:{type:{summary:"string"}}},type:{description:"Type of carousel",table:{type:{summary:["multiple","simple"]},defaultValue:{summary:"multiple"}},control:{type:"select"},options:["multiple"]},title:{description:"Carousel title",table:{type:{summary:"string"}}},titleTag:{description:"Tag of the title",table:{type:{summary:["h1","h2","h3","h4","h5","h6","h7"]}},control:{type:"select"},options:["","h1","h2","h3","h4","h5","h6","h7"]},deprecatedColor:{description:`deprecatedColor shows you the **<span style="color:orange">depreciated values of prop controlColor.</span>**
      <br/>*Note : to test available the prop "controlColor", make sure the first empty option of "deprecatedColor" is selected.*

      Deprecated colors:

      - supernova: use "default" instead.
      - cobalt: is no longer used.
      - nebula: is no longer used.
      - dark-grey: use "quiet" instead.
      - white: use "onStrong" instead.`,table:{category:"Deprecated"},control:{type:"select"},options:["","supernova","cobalt","nebula","dark-grey","white"]},qtyItems:{description:'*Quantity of items in the carousel. This prop is <span style="color:orange">deprecated</span>*',table:{type:{summary:"number"},category:"Deprecated"}}},i={isFullMobile:{description:"Only on xs. Choose to show a single item occupying 80% of the space.",table:{type:{summary:"boolean"}},control:{type:"boolean"}}},s={items:{description:'Items of the carousel allowing to provide the values to the props :```title``` (the image title), ```url```(redirect to image url), ```external```(open url in new window) and ```image```(image informations).<br/><br/>* ```imageUrl``` and ```imgAlt``` props are <span style="color:orange">deprecated</span> but can still be used for legacy. It is recommended to use the ```image``` prop.*',table:{type:{summary:"array",detail:l},category:"Slots"}}},m=Object.assign({},o,i,{items:{description:"Items of carousel allowing to provide the values of the Product Card component props.",table:{type:{summary:"array",detail:a},category:"Slots"}}}),c=Object.assign({},o,i,s),u=Object.assign({},o,s),g=(e,r)=>{let t="";return e==="SolarisCarouselAnimco"||e==="SolarisCarouselSimple"?t=`
    <div v-for="(item, index) in items" :key="index" role="listitem" :aria-label="\`Élément \${index + 1} sur \${items.length}\`">
      <${e}
        :title="item.title"
        :url="item.url"
        :external="item.external"
        :image="item.image"
      />
  </div>
  `:r&&(t=r),`The user provides an array of items in the **Carousel slot** and then uses the **${e}** component.
Here is the example story that shows how to implement it:

\`\`\`
<SolarisCarousel v-bind="$props">
  ${t.trim()}
</SolarisCarousel>
\`\`\`
`};export{m as a,c as b,g as c,u as d};
