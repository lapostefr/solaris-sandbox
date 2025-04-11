import{c as a,b as m}from"./carouselStoryUtils-FypF_IBb.js";import{S as s}from"./Carousel-Bz4a_gHS.js";import{S as u}from"./CarouselAnimco-6TlG-5NI.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./Picture-BofBnaNi.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";const i=[{title:"titre du premier element",url:"beuleuleup",external:!0,image:{width:50,height:50,defaultSource:{alt:"Mon image 1",url:"https://picsum.photos/id/300/274/274",mimeType:"image/jpeg"}}},{title:"titre du second element",url:"beuleuleup",image:{width:50,height:50,defaultSource:{alt:"Mon image 2",url:"https://picsum.photos/id/310/274/274",mimeType:"image/jpeg"}}},{title:"titre du troisième element",url:"beuleuleup",image:{width:50,height:50,defaultSource:{alt:"Mon image 3",url:"https://picsum.photos/id/320/274/274",mimeType:"image/jpeg"}}},{title:"titre du quatrième element",url:"beuleuleup",image:{width:50,height:50,defaultSource:{alt:"Mon image 4",url:"https://picsum.photos/id/330/274/274",mimeType:"image/jpeg"}}},{title:"titre du cinquième element",url:"beuleuleup",image:{width:50,height:50,defaultSource:{alt:"Mon image 5",url:"https://picsum.photos/id/340/274/274",mimeType:"image/jpeg"}}},{title:"titre du sixième element",url:"beuleuleup",image:{width:50,height:50,defaultSource:{alt:"Mon image 6",url:"https://picsum.photos/id/350/274/274",mimeType:"image/jpeg"}}},{title:"titre du septième element",url:"beuleuleup",image:{width:50,height:50,defaultSource:{alt:"Mon image 7",url:"https://picsum.photos/id/360/274/274",mimeType:"image/jpeg"}}}],v={title:"Organisms/Carousel/CarouselAnimco",parameters:{docs:{description:{component:a("SolarisCarouselAnimco")}}},argTypes:m,args:{controlColor:"supernova",isFullMobile:!1,items:i,moreLabel:"Voir plus",moreLink:"beuleuleupLink",title:"Title - carousel animco",type:"multiple",qtyItems:i.length}},e={render:o=>({components:{SolarisCarousel:s,SolarisCarouselAnimco:u},setup(){return{args:o}},template:`
    <SolarisCarousel v-bind="args">
      <div v-for="(item, index) in args.items" :key="index" role="listitem" :aria-label="\`Élément \${index + 1} sur \${args.items.length}\`">
        <SolarisCarouselAnimco
          v-bind="item"
        />
      </div>
    </SolarisCarousel>
  `}),args:{controlColor:"supernova",isFullMobile:!1,items:i,moreLabel:"Voir plus",moreLink:"beuleuleupLink",title:"Title - carousel animco",type:"multiple",qtyItems:i.length}};var t,l,r;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCarousel,
      SolarisCarouselAnimco
    },
    setup() {
      return {
        args
      };
    },
    template: \`
    <SolarisCarousel v-bind="args">
      <div v-for="(item, index) in args.items" :key="index" role="listitem" :aria-label="\\\`Élément \\\${index + 1} sur \\\${args.items.length}\\\`">
        <SolarisCarouselAnimco
          v-bind="item"
        />
      </div>
    </SolarisCarousel>
  \`
  }),
  args: {
    controlColor: 'supernova',
    isFullMobile: false,
    items: animco,
    moreLabel: 'Voir plus',
    moreLink: 'beuleuleupLink',
    title: 'Title - carousel animco',
    type: 'multiple',
    // |-- Deprecated
    qtyItems: animco.length
    // Deprecated --|
  }
}`,...(r=(l=e.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};const T=["Animco"];export{e as Animco,T as __namedExportsOrder,v as default};
