import{a as g}from"./chunk-MZXVCX43-DWuJqIWT.js";import{A as r,C as o,a,b as i,I as s,L as d,T as c,S as u}from"./Card-YgxSiPQ_.js";import{a as C}from"./argsType-D1O-A25L.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const O={title:"Molecules/Card",argTypes:C,args:{alignments:r.left,bodyText:"Lorem Ipsum",cardStyle:o.elevated,contentPadding:a.small,containerTag:i.article,expanded:!1,footerRight:!1,fullClickable:!1,id:"example",imageOrder:s.headerOntTop,imagePadding:a.none,isContainerOnly:!1,isFormElement:!1,label:"Label 2",layout:d.horizontal,link:" https://www.laposte.fr",showImagesOnMobile:!0,subtitle:{content:"Card Subtitle",titleLevel:"h4",textTransform:"uppercase"},title:{content:"Card Title",icon:"package-delivery",titleLevel:"h3"},titlesOrder:c.titleOnTop}},e={render:m=>({components:{SolarisCard:u},setup(){const p=g("cardClicked");return{args:m,cardClicked:p}},template:`<SolarisGrid class="demo">
    <SolarisCard class="lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3" v-bind="args" @cardClicked="cardClicked">
      <template #cardBody>
        <div class="slot">Slot - cardBody</div>
      </template>
      <template #cardFooter>
        <div class="slot">Slot - cardFooter</div>
      </template>
    </SolarisCard>
  </SolarisGrid>`}),args:{alignments:r.left,bodyText:"Lorem Ipsum",cardStyle:o.elevated,contentPadding:a.small,containerTag:i.article,expanded:!1,footerRight:!1,fullClickable:!1,id:"example",imageOrder:s.headerOntTop,imagePadding:a.none,isContainerOnly:!1,isFormElement:!1,label:"Label 2",layout:d.horizontal,link:" https://www.laposte.fr",showImagesOnMobile:!0,subtitle:{content:"Card Subtitle",titleLevel:"h4",textTransform:"uppercase"},title:{content:"Card Title",icon:"package-delivery",titleLevel:"h3"},titlesOrder:c.titleOnTop}};var t,l,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  render: (args: any) => ({
    components: {
      SolarisCard
    },
    setup() {
      const cardClicked = action('cardClicked');
      return {
        args,
        cardClicked
      };
    },
    template: \`<SolarisGrid class="demo">
    <SolarisCard class="lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3" v-bind="args" @cardClicked="cardClicked">
      <template #cardBody>
        <div class="slot">Slot - cardBody</div>
      </template>
      <template #cardFooter>
        <div class="slot">Slot - cardFooter</div>
      </template>
    </SolarisCard>
  </SolarisGrid>\`
  }),
  args: {
    alignments: Alignments.left,
    // badges: badgesSources,
    bodyText: 'Lorem Ipsum',
    cardStyle: CardStyle.elevated,
    contentPadding: CardSizing.small,
    containerTag: ContainerTag.article,
    expanded: false,
    footerRight: false,
    fullClickable: false,
    id: 'example',
    imageOrder: ImageOrder.headerOntTop,
    imagePadding: CardSizing.none,
    isContainerOnly: false,
    isFormElement: false,
    label: 'Label 2',
    layout: Layout.horizontal,
    link: " https://www.laposte.fr",
    /* picture: {
      defaultSource,
      otherSources,
      width: 343,
      height: 192,
      alt: 'Lorem Ipsum'
    },
    radius: CardSizing.small, */
    showImagesOnMobile: true,
    subtitle: {
      content: 'Card Subtitle',
      titleLevel: 'h4',
      textTransform: 'uppercase'
    },
    title: {
      content: 'Card Title',
      icon: 'package-delivery',
      titleLevel: 'h3'
    },
    titlesOrder: TitlesOrder.titleOnTop
  }
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const v=["Horizontal"];export{e as Horizontal,v as __namedExportsOrder,O as default};
