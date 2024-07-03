import{a as p}from"./chunk-MZXVCX43-DWuJqIWT.js";import{A as r,C as i,a as t,b as s,L as o,T as d,S as u}from"./Card-YgxSiPQ_.js";import{c as g}from"./argsType-D1O-A25L.js";import"./v4-D8aEg3BZ.js";import"./vue.esm-bundler-DD7xIM0D.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={title:"Molecules/Card",argTypes:g,args:{alignments:r.left,bodyText:"Lorem Ipsum",cardStyle:i.elevated,contentPadding:t.small,containerTag:s.article,expanded:!1,fullClickable:!0,id:"example",imagePadding:t.none,isContainerOnly:!1,isFormElement:!1,label:"Label 2",layout:o.vertical,link:" https://www.laposte.fr",showImagesOnMobile:!0,subtitle:{content:"Card Subtitle",titleLevel:"h4",textTransform:"uppercase"},title:{content:"Card Title",icon:"package-delivery",titleLevel:"h3"},titlesOrder:d.titleOnTop}},e={render:c=>({components:{SolarisCard:u},setup(){const m=p("cardClicked");return{args:c,cardClicked:m}},template:`<SolarisGrid class="demo">
    <SolarisCard class="lp-col--4 lp-col--sm-3-1 lp-col--md-4-4" v-bind="args" @cardClicked="cardClicked">
      <template #cardBody>
        <div class="slot">Slot - cardBody</div>
      </template>
      <template #cardFooter>
        <div class="slot">Slot - cardFooter</div>
      </template>
    </SolarisCard>
  </SolarisGrid>`}),args:{alignments:r.left,bodyText:"Lorem Ipsum",cardStyle:i.elevated,contentPadding:t.small,containerTag:s.article,expanded:!1,fullClickable:!0,id:"example",imagePadding:t.none,isContainerOnly:!1,isFormElement:!1,label:"Label 2",layout:o.vertical,link:" https://www.laposte.fr",showImagesOnMobile:!0,subtitle:{content:"Card Subtitle",titleLevel:"h4",textTransform:"uppercase"},title:{content:"Card Title",icon:"package-delivery"},titlesOrder:d.titleOnTop}};var a,l,n;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    <SolarisCard class="lp-col--4 lp-col--sm-3-1 lp-col--md-4-4" v-bind="args" @cardClicked="cardClicked">
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
    fullClickable: true,
    id: 'example',
    imagePadding: CardSizing.none,
    isContainerOnly: false,
    isFormElement: false,
    label: 'Label 2',
    layout: Layout.vertical,
    link: " https://www.laposte.fr",
    /* picture: {
      defaultSource,
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
      icon: 'package-delivery'
      /* innerTag: 'a',
      isFull: true,
      isOnTop: true,
      link: " https://www.laposte.fr",
      titleLevel: 'h3' */
    },
    titlesOrder: TitlesOrder.titleOnTop
  }
}`,...(n=(l=e.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};const k=["Vertical"];export{e as Vertical,k as __namedExportsOrder,T as default};
