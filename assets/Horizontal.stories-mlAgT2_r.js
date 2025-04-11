import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{A as d,C as n,a as e,b as c,I as m,L as p,R as u,T as g,S as C}from"./Card-BxpWIW-N.js";import{a as S,b as f}from"./badgesSource-B2uNyRjm.js";import{d as v}from"./imageDefaultSource-CMm1GdPE.js";import{o as y}from"./imageOtherSources-BRif1MR3.js";import"./v4-CQkTLCs1.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Icon-C-Sturzh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Badge-D_m-TE_A.js";import"./types-BTVVhIqi.js";import"./Picture-BofBnaNi.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";import"./Collapse-BNiXmgF_.js";const H={title:"Molecules/Card",argTypes:S,args:{alignments:d.left,badges:f,bodyText:"Lorem Ipsum",cardStyle:n.elevated,contentPadding:e.small,containerTag:c.article,expanded:!1,footerRight:!1,fullClickable:!1,id:"example",imageOrder:m.headerOntTop,imagePadding:e.none,isContainerOnly:!1,formElement:{isAllInputs:!1,isRadio:!1},label:"Label 2",layout:p.horizontal,link:" https://www.laposte.fr",picture:{fullWidth:!0,defaultSource:v,otherSources:y,width:200,height:200,alt:"Lorem Ipsum"},radius:u.small,showImagesOnMobile:!0,subtitle:{content:"Card Subtitle",titleLevel:"h4",textTransform:"uppercase"},title:{content:"Card Title",icon:"package-delivery",titleLevel:"h3"},titlesOrder:g.titleOnTop}},a={render:o=>({components:{SolarisCard:C},setup(){const s=i("cardClicked");return{args:o,cardClicked:s}},template:`<SolarisGrid class="demo">
    <SolarisCard class="lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3" v-bind="args" @cardClicked="cardClicked">
      <template #cardBody>
        <div class="slot">Slot - cardBody</div>
      </template>
      <template #cardFooter>
        <div class="slot">Slot - cardFooter</div>
      </template>
    </SolarisCard>
  </SolarisGrid>`})};var r,t,l;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
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
  })
}`,...(l=(t=a.parameters)==null?void 0:t.docs)==null?void 0:l.source}}};const E=["Horizontal"];export{a as Horizontal,E as __namedExportsOrder,H as default};
