import{c as m,d as a}from"./carouselStoryUtils-D7moWpwz.js";import{S as o}from"./Carousel-BK2If7XG.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const i=[{title:"titre du premier element",url:"serviceUrl",external:!0,image:{width:50,height:50,defaultSource:{alt:"Mon image 1",url:"https://picsum.photos/id/200/1000/300",mimeType:"image/jpeg"}}},{title:"titre du second element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 2",url:"https://picsum.photos/id/210/1000/300",mimeType:"image/jpeg"}}},{title:"titre du troisième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 3",url:"https://picsum.photos/id/220/1000/300",mimeType:"image/jpeg"}}},{title:"titre du quatrième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 4",url:"https://picsum.photos/id/230/1000/300",mimeType:"image/jpeg"}}},{title:"titre du cinquième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 5",url:"https://picsum.photos/id/240/1000/300",mimeType:"image/jpeg"}}},{title:"titre du sixième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 6",url:"https://picsum.photos/id/250/1000/300",mimeType:"image/jpeg"}}},{title:"titre du septième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 7",url:"https://picsum.photos/id/260/1000/300",mimeType:"image/jpeg"}}},{title:"titre du huitième element",url:"serviceUrl",image:{width:50,height:50,defaultSource:{alt:"Mon image 8",url:"https://picsum.photos/id/270/1000/300",mimeType:"image/jpeg"}}}],g={title:"Organisms/Carousel/CarouselSimple",parameters:{docs:{description:{component:m("SolarisCarouselSimple")}}},argTypes:a,args:{controlColor:"supernova",items:i,moreLabel:"Voir plus",moreLink:"beuleuleupLink",type:"simple",title:"Title - simple carousel",qtyItems:i.length}},e={render:s=>({components:{SolarisCarousel:o},setup(){return{args:s}},template:`
  <SolarisCarousel v-bind="args">
      <div v-for="(item, index) in args.items" :key="index" role="listitem" :aria-label="\`Élément \${index + 1} sur \${args.items.length}\`">
        <SolarisCarouselSimple
          v-bind="item"
        />
      </div>
  </SolarisCarousel>
  `}),args:{controlColor:"supernova",items:i,moreLabel:"Voir plus",moreLink:"beuleuleupLink",type:"simple",title:"Title - simple carousel",qtyItems:i.length}};var t,r,l;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCarousel
    },
    setup() {
      return {
        args
      };
    },
    template: \`
  <SolarisCarousel v-bind="args">
      <div v-for="(item, index) in args.items" :key="index" role="listitem" :aria-label="\\\`Élément \\\${index + 1} sur \\\${args.items.length}\\\`">
        <SolarisCarouselSimple
          v-bind="item"
        />
      </div>
  </SolarisCarousel>
  \`
  }),
  args: {
    controlColor: 'supernova',
    items: simple,
    moreLabel: 'Voir plus',
    moreLink: 'beuleuleupLink',
    type: 'simple',
    title: 'Title - simple carousel',
    // |-- Deprecated
    qtyItems: simple.length
    // Deprecated --|
  }
}`,...(l=(r=e.parameters)==null?void 0:r.docs)==null?void 0:l.source}}};const c=["Simple"];export{e as Simple,c as __namedExportsOrder,g as default};
