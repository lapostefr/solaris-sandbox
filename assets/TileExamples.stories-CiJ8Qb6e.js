import{d as _e}from"./imageDefaultSource-CMm1GdPE.js";import{o as be}from"./imageOtherSources-BRif1MR3.js";import{S as s}from"./TileNew-C9TFt0n0.js";import{S as x}from"./Divider-DYf3QLxh.js";import{S as T}from"./Icon-C-Sturzh.js";import{S as k}from"./Radio-CTXQPbD7.js";import{S as w}from"./Checkbox-BV2bMv1f.js";import{c as fe}from"./Input-BClLXKNP.js";import{S as ve}from"./Switch-CC6Slv0g.js";import{S as ge}from"./Notification-D_XdS5r2.js";import"./vue.esm-bundler-BiAlgFmf.js";import"./Button-CxIFeNFW.js";import"./Loader-DHIAU4Qg.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./Card-BxpWIW-N.js";import"./Badge-D_m-TE_A.js";import"./types-BTVVhIqi.js";import"./Picture-BofBnaNi.js";import"./iframe-Tb9yYTcJ.js";import"../sb-preview/runtime.js";import"./Collapse-BNiXmgF_.js";import"./generateId-CVaf2GGW.js";import"./Message-MlHtBEps.js";import"./Tooltip-BdO2vyV2.js";import"./index-a4aneQim.js";import"./types-DKXD8uiR.js";import"./types-CX4OQ2kf.js";import"./useTips-CORXmiXO.js";const E="@/components/organisms/TileNew/mocks/colissimo.svg",d="@/components/organisms/TileNew/mocks/lettre-recommandee.svg",c="@/components/organisms/TileNew/mocks/lettre-rouge.svg",N="@/components/organisms/TileNew/mocks/demenagement-def.svg",C="@/components/organisms/TileNew/mocks/demenagement-temp.svg",I="@/components/organisms/TileNew/mocks/delivery-address.svg",e={picture:{defaultSource:_e,otherSources:be,width:80,height:80,alt:"Lorem Ipsum"},title:{content:"Tile title"}},l={bodyText:"En cas d'incident, La Poste vous indemnise 153€",title:{content:"Standard (R2)",fontSize:"16px"}},t={tileAllAvalaibleElements:{options:[{card:{...e,bodyText:'"bodyText" content',badges:[{content:"Badge",color:"info"}],expanded:!0,label:"label",title:{content:"tile title",icon:"package-delivery"}},id:"allAvailableElements",toggleText:"toggleText"}],gridClass:!0,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-10-1",type:"Clickable"},tileClickable:{options:[{card:{...e,bodyText:'The "type" prop is "Clickable". Use "link" to add a link to the card',link:"#"},id:"tileClickable-1"},{card:{...e,alignments:"center",layout:"vertical",bodyText:'Use "layout" with "vertical" value in card object in options table for vertical orientation',link:"#"},id:"tileClickable-2"}],gridClass:!0,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-8-2",type:"Clickable"},tileEditable:{options:[{card:{...e,bodyText:'"Editable" tiles allow the user to enter or modify information."'},id:"tileEditable-1"},{card:{...e,alignments:"center",bodyText:'"Editable" tiles allow the user to enter or modify information."',layout:"vertical"},id:"tileEditable-2"}],gridClass:!0,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-8-2",type:"Clickable"},tileSelectableSingle:{options:[{card:{...e,bodyText:'The "type" prop is "Selectable single"',footerText:"Price",layout:"horizontal"},id:"radioSingle-A",name:"radioSingle",value:"radioSingle-A"},{card:{...e,alignments:"center",bodyText:'The "type" prop is "Selectable single"',footerText:"Price",layout:"vertical"},id:"radioSingle-B",name:"radioSingle",value:"radioSingle-B"}],gridClass:!0,radioDefaultValue:"radioSingle-B",setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",type:"Selectable single"},tileSelectableMultiple:{options:[{card:{...e,bodyText:'The "type" prop is "Selectable multiple"',footerText:"Price",layout:"horizontal"},checked:!1,id:"selectMulti-id-A",name:"selectMulti-name-A"},{card:{...e,alignments:"center",bodyText:'The "type" prop is "Selectable multiple"',footerText:"Price",layout:"vertical"},checked:!1,id:"selectMulti-id-B",name:"selectMulti-name-B"}],gridClass:!0,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-6-3",type:"Selectable multiple"},tileExpandable:{options:[{card:{...e,bodyText:"Fill the toggleText prop to add the text 'Voir plus'",expanded:!0},id:"tileExpandable-1",toggleText:"Voir plus"},{card:{...e,alignments:"center",bodyText:"Fill the toggleText prop to add the text 'Voir plus'",expanded:!0,layout:"vertical"},id:"tileExpandable-2",toggleText:"Voir plus"}],gridClass:!0,setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-8-2",type:"Clickable"},tileNested:{nested:!0,options:[{card:{...e,bodyText:"The Nested tile is used when it is nested within another tile",footerText:"Price",layout:"horizontal"},id:"radioNested-A",name:"radioNested",value:"radioNested-A"},{card:{...e,alignments:"center",bodyText:'The Nested tile is used when it is nested within another tile. Set "nested" prop to true',footerText:"Price",layout:"vertical"},id:"radioNested-B",name:"radioNested",value:"radioNested-B"}],gridClass:!0,radioDefaultValue:"radioNested-A",setItemClass:"lp-col--4 lp-col--sm-4-1 lp-col--md-8-2 lp-col--lg-8-2",type:"Selectable single"},tileNestedComponentSingle:{options:[{card:{layout:"horizontal",picture:{...e.picture},title:{content:"Lettre recommandée",fontSize:"18px"}},id:"radio-nested-component-single-1",name:"nested-component-single",value:"radio-nested-component-single-1"},{card:{layout:"horizontal",picture:{...e.picture},title:{content:"Lettre verte",fontSize:"18px"}},id:"radio-nested-component-single-2",name:"nested-component-single",value:"radio-nested-component-single-2"}],showMoreWhenSelected:!0,type:"Selectable single"},tileNestedComponentSingleChildrenA:{nested:!0,options:[{card:{...l,layout:"horizontal"},id:"radio-nested-component-single-child-1",name:"nested-component-single-child-A",value:"radio-nested-component-single-child-1"},{card:{...l,layout:"horizontal"},id:"radio-nested-component-single-child-2",name:"nested-component-single-child-A",value:"radio-nested-component-single-child-2"}],legend:{label:"Sélectionnez le type de votre recommandé"},type:"Selectable single"},tileNestedComponentSingleChildrenB:{nested:!0,options:[{card:{...l,layout:"horizontal"},id:"radio-nested-component-single-child-3",name:"nested-component-single-child-B",value:"radio-nested-component-single-child-3"},{card:{...l,layout:"horizontal"},id:"radio-nested-component-single-child-4",name:"nested-component-single-child-B",value:"radio-nested-component-single-child-4"}],legend:{label:"Sélectionnez le type de votre recommandé"},type:"Selectable single"},tileNestedComponentMultiple:{options:[{card:{layout:"horizontal",picture:{...e.picture},title:{content:"Lettre recommandée",fontSize:"18px"}},checked:!1,disabled:!1,id:"checkbox-nested-component-multiple-1",name:"nested-component-multiple-A",value:"checkbox-nested-component-multiple-1"},{card:{layout:"horizontal",picture:{...e.picture},title:{content:"Lettre verte",fontSize:"18px"}},checked:!1,disabled:!1,id:"checkbox-nested-component-multiple-2",name:"nested-component-multiple-B",value:"checkbox-nested-component-multiple-2"}],legend:{label:"Sélectionnez le type de votre recommandé"},type:"Selectable multiple",showMoreWhenSelected:!0},tileNestedComponentMultipleChildrenA:{nested:!0,options:[{card:{layout:"horizontal",...l},id:"radio-nested-component-multiple-child-1",name:"nested-component-multiple-child-A",value:"radio-nested-component-multiple-child-1"},{card:{layout:"horizontal",...l},id:"radio-nested-component-multiple-child-2",name:"nested-component-multiple-child-A",value:"radio-nested-component-multiple-child-2"}],type:"Selectable single"},tileNestedComponentMultipleChildrenB:{nested:!0,options:[{card:{layout:"horizontal",...l},id:"radio-nested-component-multiple-child-3",name:"nested-component-multiple-child-B",value:"radio-nested-component-multiple-child-3"},{card:{layout:"horizontal",...l},id:"radio-nested-component-multiple-child-4",name:"nested-component-multiple-child-B",value:"radio-nested-component-multiple-child-4"}],legend:{label:"Sélectionnez le type de votre recommandé"},type:"Selectable single"},tileExpandableWithMoreInfo:{options:[{card:{expanded:!0,picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:E},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:E},width:20,height:20,alt:"Lorem Ipsum"}},id:"tile-colissimo",toggleText:"Exp"}]},tileSelectableSingleWithMoreInfo:{options:[{card:{footerText:"1,49 €",layout:"horizontal",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:d},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:d},width:20,height:20,alt:"Lorem Ipsum"},title:{content:"Lettre recommandée",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"registeredLetter-1",name:"letters-1",value:"registeredLetter-1"},{card:{footerText:"6,60 €",layout:"horizontal",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:c},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:c},width:20,height:20,alt:"Lorem Ipsum"},title:{content:"e-lettre rouge",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"redLetter-1",name:"letters-1",value:"redLetter-1"}],legend:{color:"brand",label:"Nature de mon envoi",tag:"h2",style:"heading-xxs"},type:"Selectable single",showMoreWhenSelected:!0},tileSelectableSingleWithMoreInfoOpen:{options:[{card:{expanded:!0,footerText:"1,49 €",layout:"horizontal",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:d},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:d},width:20,height:20,alt:"Lorem Ipsum"},link:"www.laposte.fr",title:{content:"Lettre recommandée",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"registeredLetter-2",name:"letters-2",value:"registeredLetter-2"},{card:{expanded:!0,footerText:"6,60 €",layout:"horizontal",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:c},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:c},width:20,height:20,alt:"Lorem Ipsum"},title:{content:"e-lettre rouge",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"redLetter-2",name:"letters-2",value:"redLetter-2"}],legend:{color:"brand",label:"Nature de mon envoi",tag:"h2",style:"heading-xxs"},type:"Selectable single",showMoreWhenSelected:!0},tileSelectableMultipleWithMoreInfo:{options:[{card:{bodyText:"Vous quittez définitivement votre adresse actuelle.",layout:"horizontal",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:N},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:N},width:20,height:20,alt:"Lorem Ipsum"},title:{content:"Je déménage",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"moving-def",name:"moving-final",value:"moving-def"},{card:{bodyText:"Vous quittez temporairement votre adresse actuelle.",layout:"horizontal",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:C},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:C},width:20,height:20,alt:"Lorem Ipsum"},title:{content:"Je m'absente",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"moving-temp",name:"moving-temporary",value:"moving-temp"},{card:{bodyText:"Je m'absente régulièrement pour des période de courte durée.",layout:"horizontal",picture:{defaultSource:{alt:"Mon image",mimeType:"image/jpg",url:I},otherSources:{alt:"Mon image",mimeType:"image/jpg",url:I},width:20,height:20,alt:"Lorem Ipsum"},title:{content:"Abonnement Mobilité",fontSize:"18px",lineHeight:"var(--size-24)",titleLevel:"h1",weight:"700"}},checked:!1,disabled:!1,id:"mobility-subscription",name:"moving-subscription",value:"mobility-subscription"}],type:"Selectable multiple",showMoreWhenSelected:!0}},Ke={title:"Organisms/Tile (New)/Examples",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs",docs:{description:{component:"The **Tile component** allows you to detail and highlight single or multiple choices from a list. **The tile uses the SolarisCard component**, allowing you to use all its props according to your needs."}}}},o=(a,i)=>Se=>({components:{SolarisTileNew:s,SolarisDivider:x,SolarisIcon:T,SolarisCheckbox:w,SolarisInput:fe,SolarisRadio:k},props:Object.keys(Se),data:()=>({data:a}),template:`
    <SolarisTileNew v-bind="data">
        ${i}
    </SolarisTileNew>
  `}),p=o(t.tileAllAvalaibleElements,`<template #tileBody>
    <div class="slot">Slot - tileBody</div>
   </template>
   <template #tileFooter>
    <div class="slot">Slot - tileFooter</div>
   </template>
   <template #tileMedias>
    <div class="slot">Slot - tileMedias</div>
   </template>
   <template #tileExtra>
      <div class="slot">
        <h3>Slot - tileExtra</h3>
        <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
      </div>
   </template>
  `),m=o(t.tileClickable,`<template #tileFooter>
    <div class="tile-clickable__icon">
      <SolarisIcon name="arrow-right" aria-hidden="true"/>
    </div>
   </template>`),u=o(t.tileEditable,`<template #tileFooter>
      <div class="tile-editable__actions">
        <SolarisButton
          class="tile-editable__action"
          icon="action-pen"
          type="ghost"
          color="darkgrey"
        />

        <SolarisButton
          class="tile-editable__action"
          icon="editing-trash"
          type="ghost"
          color="darkgrey"
        />
      </div>
  </template>`),h=o(t.tileSelectableSingle),v=o(t.tileSelectableMultiple),g=o(t.tileExpandable,`<template #tileExtra>
      <div class="slot">
        <h3>Slot - tileExtra</h3>
        <p>To make the tile expandable, fill in the tileExtra slot and set the toggleText prop.</p>
      </div>
  </template>`),S=o(t.tileNested),_=(a,{argTypes:i})=>({components:{SolarisTileNew:s},props:Object.keys(i),data:()=>({data1:t.tileNestedComponentSingle,data2:t.tileNestedComponentSingleChildrenA,data3:t.tileNestedComponentSingleChildrenB}),template:`<SolarisTileNew v-bind="data1">
  <template #tileBody>
     <ul class="tile__description-list">
       <li>Distribution en 3 jours (délai indicatif) *</li>
       <li>Suivi inclus</li>
     </ul>
  </template>

  <template #tileExtra="{ index }">
    <!-- FIRST CHILD -->
    <template v-if="data1.options[index].id === 'radio-nested-component-single-1'">
      <p class="tile-nested-component__title-nested">Sélectionnez le type de votre recommandé</p>

      <SolarisTileNew v-bind="data2">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>

    <!-- SECOND CHILD -->
    <template v-else-if="data1.options[index].id === 'radio-nested-component-single-2'">
      <SolarisTileNew v-bind="data3">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>
  </template>
</SolarisTileNew>`}),b=(a,{argTypes:i})=>({components:{SolarisTileNew:s},props:Object.keys(i),data:()=>({data1:t.tileNestedComponentMultiple,data2:t.tileNestedComponentMultipleChildrenA,data3:t.tileNestedComponentMultipleChildrenB}),template:`<SolarisTileNew v-bind="data1">
  <template #tileBody>
     <ul class="tile__description-list">
       <li>Distribution en 3 jours (délai indicatif) *</li>
       <li>Suivi inclus</li>
     </ul>
  </template>

  <template #tileExtra="{ index }">
    <!-- FIRST CHILD -->
    <template v-if="data1.options[index].id === 'checkbox-nested-component-multiple-1'">
      <p class="tile-nested-component__title-nested">Sélectionnez le type de votre recommandé</p>

      <SolarisTileNew v-bind="data2">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>

    <!-- SECOND CHILD -->
    <template v-else-if="data1.options[index].id === 'checkbox-nested-component-multiple-2'">
      <SolarisTileNew v-bind="data3">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>
  </template>
</SolarisTileNew>`}),f=o(t.tileExpandableWithMoreInfo,`<template #tileBody>
    <div class="tile-colissimo__content">
      <h3 class="tile-colissimo__title">Colis</h3>
      <span class="tile-colissimo__description">Standard</span>
        <div class="tile-colissimo__infos-prices">
          <span class="tile-colissimo__price">4,90€</span>
          <SolarisButton
            class="tile-colissimo__infos"
            icon="settings-menu-action-vertical"
            type="secondary"
            color="darkgrey"
          />
        </div>
    </div>
   </template>

   <template #tileExtra>
      <section class="tile-colissimo__features">
        <h2 class="tile-colissimo__features-title tile-colissimo__title-common">Caratéristiques</h2>
        <SolarisInput
          class="tile-colissimo__weight-input"
          id="idInput"
          name="nameInput"
          label="Poids"
          :unit='{"label":"kg","description":"kilogramme"}'
          size="small"
          value="0,25"
        />
      </section>

      <section class="tile-colissimo__shipping-infos">
        <div class="tile-colissimo__recipient">
            <h2 class="tile-colissimo__recipient-title tile-colissimo__title-common">Destinataires</h2>
            <div class="tile-colissimo__recipient-address">
              <SolarisButton
                type="secondary"
                color="darkgrey"
              >
                Renseigner une adresse
              </SolarisButton>
              <span>ou</span>
              <a href="www.laposte.fr" class="tile-colissimo__link">Accédez à votre carnet de contacts</a>
            </div>
        </div>

        <div class="tile-colissimo__delivery">
          <h2 class="tile-colissimo__delivery-title tile-colissimo__title-common">Livraison</h2>

          <SolarisRadio
            class="tile-colissimo__radio"
            id="id-radio-1"
            name="radio"
            colorStyle="quiet"
            value="test"
          >
            En boîte aux lettres
          </SolarisRadio>
          <p class="tile-colissimo__radio-description">Indemnisation en cas de perte ou d'avarie de 23€/kg</p>

          <SolarisRadio
            class="tile-colissimo__radio"
            id="id-radio-2"
            name="radio"
            colorStyle="quiet"
            value="test"
          >
            Avec signature <span class="tile-colissimo__complement"> (à partir de 2,90 €)</span>
          </SolarisRadio>
          <p class="tile-colissimo__radio-description">Indemnisation jusqu’à 1000 € : R1, R2 ou supplément</p>
        </div>
      </section>

      <section class="tile-colissimo__customs">
        <h2 class="tile-colissimo__customs-title tile-colissimo__title-common">Déclaration en douane</h2>
        <p class="tile-colissimo__customs-description">
          Vers l’Outre-Mer, l’international et l’Europe (hors pays membres de l’Union Européenne), vos envois doivent faire l'objet d’une déclaration en douane, avec obligation de saisie numérique. Vous devrez joindre à votre envoi les justificatifs de déclaration et une facture proforma ou 2 factures commerciales (s’il s’agit d’une vente).
        </p>
        <SolarisButton
          type="secondary"
          color="darkgrey"
        >
          Ajouter des objets
        </SolarisButton>
      </section>

      <section class="tile-colissimo__footer-expandable">
        <SolarisButton
          class="tile-colissimo__delete"
          icon="editing-trash"
          type="secondary"
          color="darkgrey"
        />

        <SolarisButton
          icon="editing-duplicate"
          type="secondary"
          color="darkgrey"
        >
          Dupliquer
        </SolarisButton>
      </section>
  </template>`),n=(a,{argTypes:i})=>({components:{SolarisTileNew:s,SolarisDivider:x,SolarisIcon:T,SolarisCheckbox:w,SolarisRadio:k,SolarisSwitch:ve,SolarisNotification:ge},props:Object.keys(i),data:()=>({data:t.tileSelectableSingleWithMoreInfo}),template:`<SolarisTileNew v-bind="data">
  <template #tileBody="{ index }">
    <ul v-if="data.options[index].id === 'registeredLetter-1'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution en 3 jours (délai indicatif) *</li>
      <li>Suivi inclus</li>
    </ul>

    <ul v-else-if="data.options[index].id === 'redLetter-1'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution dès le lendemain (délai indicatif) *</li>
      <li>Suivi en option</li>
    </ul>
   </template>

  <template v-slot:tileExtra="{ index }">
    <!-- LETTRE RECOMMENDEE -->
    <template v-if="data.options[index].id === 'registeredLetter-1'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id1-checkbox-letters-single"
            name="name-A-checkbox-letters-single"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id1-notification-letters-single"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            id="id1-print-recto-single"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            id="id2-print-colors-single"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <SolarisRadio
          class="tile-letters__send-choice"
          colorStyle="emphasis"
          legend="Pour un dépôt daté du jour de votre lettre recommandée, validez votre commande avant 23h25."
          :options="[
        {id:'option1-id-single',name:'name-single',value:'Dépôt aujourd’hui'},
        {id:'option2-id-single',name:'name-single',value:'Choisir la date de dépôt'}
        ]"
        />
      </section>
    </template>

    <!-- E-LETTRE ROUGE -->
    <template v-else-if="data.options[index].id === 'redLetter-1'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id2-checkbox-letters-single"
            name="name-B-checkbox-letters-single"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id2-notification-letters-single"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            id="id3-print-recto-single-single"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            id="id4-print-colors-single"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>
    </template>
  </template>
</SolarisTileNew>`}),y=(a,{argTypes:i})=>({components:{SolarisTileNew:s,SolarisDivider:x,SolarisIcon:T,SolarisCheckbox:w,SolarisRadio:k,SolarisSwitch:ve,SolarisNotification:ge},props:Object.keys(i),data:()=>({data:t.tileSelectableSingleWithMoreInfoOpen}),template:`<SolarisTileNew v-bind="data">
  <template #tileBody="{ index }">
    <ul v-if="data.options[index].id === 'registeredLetter-2'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution en 3 jours (délai indicatif) *</li>
      <li>Suivi inclus</li>
    </ul>

    <ul v-else-if="data.options[index].id === 'redLetter-2'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution dès le lendemain (délai indicatif) *</li>
      <li>Suivi en option</li>
    </ul>
   </template>

  <template v-slot:tileExtra="{ index }">
    <!-- LETTRE RECOMMENDEE -->
    <template v-if="data.options[index].id === 'registeredLetter-2'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id1-checkbox-letters-open"
            name="name-A-checkbox-letters-open"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id1-notification-letters-open"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            id="id1-print-recto-open"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            id="id2-print-colors-open"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <SolarisRadio
          class="tile-letters__send-choice"
          colorStyle="emphasis"
          legend="Pour un dépôt daté du jour de votre lettre recommandée, validez votre commande avant 23h25."
          :options="[
      {id:'option1-id-open',name:'name-open',value:'Dépôt aujourd’hui'},
        {id:'option2-id-open',name:'name-open',value:'Choisir la date de dépôt'}
        ]"
        />
      </section>
    </template>

    <!-- E-LETTRE ROUGE -->
    <template v-else-if="data.options[index].id === 'redLetter-2'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id2-checkbox-letters-open"
            name="name-B-checkbox-letters-open"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id2-notification-letters-open"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            id="id3-print-recto-open"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            id="id4-print-colors-open"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>
    </template>
  </template>
</SolarisTileNew>`}),r=(a,{argTypes:i})=>({components:{SolarisTileNew:s,SolarisDivider:x,SolarisIcon:T,SolarisRadio:k},props:Object.keys(i),data:()=>({data:t.tileSelectableMultipleWithMoreInfo}),template:`<SolarisTileNew v-bind="data">
  <template v-slot:tileExtra="{ index }">
    <!-- DEMENAGEMENT DEFINITIF -->
    <template v-if="data.options[index].id === 'moving-def'">
      <section class="tile-reex__destination">
        <h2 class="tile-reex__title">Destination</h2>
          <div class="tile-reex__moving-def">

            <div class="tile-reex__more-info">
              <a class="tile-reex__more-info--link" href="#">Tout savoir sur cette solution</a>
              <SolarisIcon
                name="action-information-warning"
                size="small"
                type="regular"
                aria-hidden="true"
              />
            </div>
          </div>
      </section>

    <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-reex__title">Durée</h2>
          <SolarisRadio        
            colorStyle="emphasis"
            legend="Veuillez sélectionner la durée de réexpédition que vous souhaitez."
            :options="[
              {id:'option1-id-multi-A', name:'name-multi-A', value: '6 mois'},
        {id:'option2-id-multi-A', name:'name-multi-A', value: '12 mois'}]"
          />
      </section>
    </template>

    <!-- ABONNEMENT MOBILITÉE -->
    <template v-else-if="data.options[index].id === 'mobility-subscription'">
      <section class="tile-reex__destination">
        <h2 class="tile-reex__title">Destination</h2>
          <div class="tile-reex__moving-def">

            <div class="tile-reex__more-info">
              <a class="tile-reex__more-info--link" href="#">Tout savoir sur cette solution</a>
              <SolarisIcon
                name="action-information-warning"
                size="small"
                type="regular"
              />
            </div>
          </div>
      </section>

    <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-reex__title">Durée</h2>
          <SolarisRadio        
            colorStyle="emphasis"
            legend="Veuillez sélectionner la durée de réexpédition que vous souhaitez."
            :options="[
        {id:'option4-id-multi-B',name:'name-multi-B',value:'6 mois'},
        {id:'option5-id-multi-B',name:'name-multi-B',value:'12 mois'}
        ]"
          />
      </section>
    </template>
  </template>
</SolarisTileNew>`});n.parameters={docs:{description:{story:"Cards datas are inserted via the prop <em>options</em> (title, picture and radio infos).<br />Use the prop <em>showMoreWhenSelected </em>to display the content of the Tile when selected, and the <em>type</em> prop with <em>Selectable single</em> for the selection mode.<br />Each slot (tileBody for the list below the title; tileFooter for price; tileExtra for tile contents), receives the index as a prop, and is used to access information specific to the current option. Depending on the ID of the current option, the rendered content can be adapted to display different contents."}}};r.parameters={docs:{description:{story:"Cards datas are inserted via the prop <em>options</em> (title, picture, bodyText and checkbox infos).<br />Use the prop <em>showMoreWhenSelected </em>to display the content of the Tile when selected, and the <em>type</em> prop with <em>Selectable multiple</em> for the selection mode.<br />TileExtra slot for tile contents, receives the index as a prop, and is used to access information specific to the current option. Depending on the ID of the current option, the rendered content can be adapted to display different contents."}}};var M,B,z;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`generateTile(data.tileAllAvalaibleElements, \`<template #tileBody>
    <div class="slot">Slot - tileBody</div>
   </template>
   <template #tileFooter>
    <div class="slot">Slot - tileFooter</div>
   </template>
   <template #tileMedias>
    <div class="slot">Slot - tileMedias</div>
   </template>
   <template #tileExtra>
      <div class="slot">
        <h3>Slot - tileExtra</h3>
        <p>Remplissez le avec des composants de votre choix. Il n'existera pas dans le DOM s'il est vide</p>
      </div>
   </template>
  \`)`,...(z=(B=p.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var L,D,j;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`generateTile(data.tileClickable, \`<template #tileFooter>
    <div class="tile-clickable__icon">
      <SolarisIcon name="arrow-right" aria-hidden="true"/>
    </div>
   </template>\`)`,...(j=(D=m.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var A,O,R;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`generateTile(data.tileEditable, \`<template #tileFooter>
      <div class="tile-editable__actions">
        <SolarisButton
          class="tile-editable__action"
          icon="action-pen"
          type="ghost"
          color="darkgrey"
        />

        <SolarisButton
          class="tile-editable__action"
          icon="editing-trash"
          type="ghost"
          color="darkgrey"
        />
      </div>
  </template>\`)`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var F,W,P;h.parameters={...h.parameters,docs:{...(F=h.parameters)==null?void 0:F.docs,source:{originalSource:"generateTile(data.tileSelectableSingle)",...(P=(W=h.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var q,V,H;v.parameters={...v.parameters,docs:{...(q=v.parameters)==null?void 0:q.docs,source:{originalSource:"generateTile(data.tileSelectableMultiple)",...(H=(V=v.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var U,G,J;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`generateTile(data.tileExpandable, \`<template #tileExtra>
      <div class="slot">
        <h3>Slot - tileExtra</h3>
        <p>To make the tile expandable, fill in the tileExtra slot and set the toggleText prop.</p>
      </div>
  </template>\`)`,...(J=(G=g.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var $,K,Q;S.parameters={...S.parameters,docs:{...($=S.parameters)==null?void 0:$.docs,source:{originalSource:"generateTile(data.tileNested)",...(Q=(K=S.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;_.parameters={..._.parameters,docs:{...(X=_.parameters)==null?void 0:X.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  components: {
    SolarisTileNew
  },
  props: Object.keys(argTypes),
  data: () => ({
    data1: data.tileNestedComponentSingle,
    data2: data.tileNestedComponentSingleChildrenA,
    data3: data.tileNestedComponentSingleChildrenB
  }),
  template: \`<SolarisTileNew v-bind="data1">
  <template #tileBody>
     <ul class="tile__description-list">
       <li>Distribution en 3 jours (délai indicatif) *</li>
       <li>Suivi inclus</li>
     </ul>
  </template>

  <template #tileExtra="{ index }">
    <!-- FIRST CHILD -->
    <template v-if="data1.options[index].id === 'radio-nested-component-single-1'">
      <p class="tile-nested-component__title-nested">Sélectionnez le type de votre recommandé</p>

      <SolarisTileNew v-bind="data2">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>

    <!-- SECOND CHILD -->
    <template v-else-if="data1.options[index].id === 'radio-nested-component-single-2'">
      <SolarisTileNew v-bind="data3">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>
  </template>
</SolarisTileNew>\`
})`,...(Z=(Y=_.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ie;b.parameters={...b.parameters,docs:{...(ee=b.parameters)==null?void 0:ee.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  components: {
    SolarisTileNew
  },
  props: Object.keys(argTypes),
  data: () => ({
    data1: data.tileNestedComponentMultiple,
    data2: data.tileNestedComponentMultipleChildrenA,
    data3: data.tileNestedComponentMultipleChildrenB
  }),
  template: \`<SolarisTileNew v-bind="data1">
  <template #tileBody>
     <ul class="tile__description-list">
       <li>Distribution en 3 jours (délai indicatif) *</li>
       <li>Suivi inclus</li>
     </ul>
  </template>

  <template #tileExtra="{ index }">
    <!-- FIRST CHILD -->
    <template v-if="data1.options[index].id === 'checkbox-nested-component-multiple-1'">
      <p class="tile-nested-component__title-nested">Sélectionnez le type de votre recommandé</p>

      <SolarisTileNew v-bind="data2">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>

    <!-- SECOND CHILD -->
    <template v-else-if="data1.options[index].id === 'checkbox-nested-component-multiple-2'">
      <SolarisTileNew v-bind="data3">
           <template #tileFooter>
             <div class="tile__price">4,41€</div>
           </template>
      </SolarisTileNew>
    </template>
  </template>
</SolarisTileNew>\`
})`,...(ie=(te=b.parameters)==null?void 0:te.docs)==null?void 0:ie.source}}};var le,oe,ae;f.parameters={...f.parameters,docs:{...(le=f.parameters)==null?void 0:le.docs,source:{originalSource:`generateTile(data.tileExpandableWithMoreInfo, \`<template #tileBody>
    <div class="tile-colissimo__content">
      <h3 class="tile-colissimo__title">Colis</h3>
      <span class="tile-colissimo__description">Standard</span>
        <div class="tile-colissimo__infos-prices">
          <span class="tile-colissimo__price">4,90€</span>
          <SolarisButton
            class="tile-colissimo__infos"
            icon="settings-menu-action-vertical"
            type="secondary"
            color="darkgrey"
          />
        </div>
    </div>
   </template>

   <template #tileExtra>
      <section class="tile-colissimo__features">
        <h2 class="tile-colissimo__features-title tile-colissimo__title-common">Caratéristiques</h2>
        <SolarisInput
          class="tile-colissimo__weight-input"
          id="idInput"
          name="nameInput"
          label="Poids"
          :unit='{"label":"kg","description":"kilogramme"}'
          size="small"
          value="0,25"
        />
      </section>

      <section class="tile-colissimo__shipping-infos">
        <div class="tile-colissimo__recipient">
            <h2 class="tile-colissimo__recipient-title tile-colissimo__title-common">Destinataires</h2>
            <div class="tile-colissimo__recipient-address">
              <SolarisButton
                type="secondary"
                color="darkgrey"
              >
                Renseigner une adresse
              </SolarisButton>
              <span>ou</span>
              <a href="www.laposte.fr" class="tile-colissimo__link">Accédez à votre carnet de contacts</a>
            </div>
        </div>

        <div class="tile-colissimo__delivery">
          <h2 class="tile-colissimo__delivery-title tile-colissimo__title-common">Livraison</h2>

          <SolarisRadio
            class="tile-colissimo__radio"
            id="id-radio-1"
            name="radio"
            colorStyle="quiet"
            value="test"
          >
            En boîte aux lettres
          </SolarisRadio>
          <p class="tile-colissimo__radio-description">Indemnisation en cas de perte ou d'avarie de 23€/kg</p>

          <SolarisRadio
            class="tile-colissimo__radio"
            id="id-radio-2"
            name="radio"
            colorStyle="quiet"
            value="test"
          >
            Avec signature <span class="tile-colissimo__complement"> (à partir de 2,90 €)</span>
          </SolarisRadio>
          <p class="tile-colissimo__radio-description">Indemnisation jusqu’à 1000 € : R1, R2 ou supplément</p>
        </div>
      </section>

      <section class="tile-colissimo__customs">
        <h2 class="tile-colissimo__customs-title tile-colissimo__title-common">Déclaration en douane</h2>
        <p class="tile-colissimo__customs-description">
          Vers l’Outre-Mer, l’international et l’Europe (hors pays membres de l’Union Européenne), vos envois doivent faire l'objet d’une déclaration en douane, avec obligation de saisie numérique. Vous devrez joindre à votre envoi les justificatifs de déclaration et une facture proforma ou 2 factures commerciales (s’il s’agit d’une vente).
        </p>
        <SolarisButton
          type="secondary"
          color="darkgrey"
        >
          Ajouter des objets
        </SolarisButton>
      </section>

      <section class="tile-colissimo__footer-expandable">
        <SolarisButton
          class="tile-colissimo__delete"
          icon="editing-trash"
          type="secondary"
          color="darkgrey"
        />

        <SolarisButton
          icon="editing-duplicate"
          type="secondary"
          color="darkgrey"
        >
          Dupliquer
        </SolarisButton>
      </section>
  </template>\`)`,...(ae=(oe=f.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};var se,ne,re;n.parameters={...n.parameters,docs:{...(se=n.parameters)==null?void 0:se.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  components: {
    SolarisTileNew,
    SolarisDivider,
    SolarisIcon,
    SolarisCheckbox,
    SolarisRadio,
    SolarisSwitch,
    SolarisNotification
  },
  props: Object.keys(argTypes),
  data: () => ({
    data: data.tileSelectableSingleWithMoreInfo
  }),
  template: \`<SolarisTileNew v-bind="data">
  <template #tileBody="{ index }">
    <ul v-if="data.options[index].id === 'registeredLetter-1'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution en 3 jours (délai indicatif) *</li>
      <li>Suivi inclus</li>
    </ul>

    <ul v-else-if="data.options[index].id === 'redLetter-1'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution dès le lendemain (délai indicatif) *</li>
      <li>Suivi en option</li>
    </ul>
   </template>

  <template v-slot:tileExtra="{ index }">
    <!-- LETTRE RECOMMENDEE -->
    <template v-if="data.options[index].id === 'registeredLetter-1'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id1-checkbox-letters-single"
            name="name-A-checkbox-letters-single"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id1-notification-letters-single"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            id="id1-print-recto-single"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            id="id2-print-colors-single"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <SolarisRadio
          class="tile-letters__send-choice"
          colorStyle="emphasis"
          legend="Pour un dépôt daté du jour de votre lettre recommandée, validez votre commande avant 23h25."
          :options="[
        {id:'option1-id-single',name:'name-single',value:'Dépôt aujourd’hui'},
        {id:'option2-id-single',name:'name-single',value:'Choisir la date de dépôt'}
        ]"
        />
      </section>
    </template>

    <!-- E-LETTRE ROUGE -->
    <template v-else-if="data.options[index].id === 'redLetter-1'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id2-checkbox-letters-single"
            name="name-B-checkbox-letters-single"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id2-notification-letters-single"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            id="id3-print-recto-single-single"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            id="id4-print-colors-single"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>
    </template>
  </template>
</SolarisTileNew>\`
})`,...(re=(ne=n.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var de,ce,pe;y.parameters={...y.parameters,docs:{...(de=y.parameters)==null?void 0:de.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  components: {
    SolarisTileNew,
    SolarisDivider,
    SolarisIcon,
    SolarisCheckbox,
    SolarisRadio,
    SolarisSwitch,
    SolarisNotification
  },
  props: Object.keys(argTypes),
  data: () => ({
    data: data.tileSelectableSingleWithMoreInfoOpen
  }),
  template: \`<SolarisTileNew v-bind="data">
  <template #tileBody="{ index }">
    <ul v-if="data.options[index].id === 'registeredLetter-2'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution en 3 jours (délai indicatif) *</li>
      <li>Suivi inclus</li>
    </ul>

    <ul v-else-if="data.options[index].id === 'redLetter-2'" class="tile__description-list">
      <li>France métropolitaine, Outre-Mer et international</li>
      <li>Distribution dès le lendemain (délai indicatif) *</li>
      <li>Suivi en option</li>
    </ul>
   </template>

  <template v-slot:tileExtra="{ index }">
    <!-- LETTRE RECOMMENDEE -->
    <template v-if="data.options[index].id === 'registeredLetter-2'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id1-checkbox-letters-open"
            name="name-A-checkbox-letters-open"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id1-notification-letters-open"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            id="id1-print-recto-open"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            id="id2-print-colors-open"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <SolarisRadio
          class="tile-letters__send-choice"
          colorStyle="emphasis"
          legend="Pour un dépôt daté du jour de votre lettre recommandée, validez votre commande avant 23h25."
          :options="[
      {id:'option1-id-open',name:'name-open',value:'Dépôt aujourd’hui'},
        {id:'option2-id-open',name:'name-open',value:'Choisir la date de dépôt'}
        ]"
        />
      </section>
    </template>

    <!-- E-LETTRE ROUGE -->
    <template v-else-if="data.options[index].id === 'redLetter-2'">
      <section>
        <h2 class="tile-letters__title">Suivez l’acheminement et la distribution de vos envois</h2>

        <div class="tile-letters__tracking-option">
          <SolarisIcon aria-hidden="true" name="arrow-bent" />
          <SolarisCheckbox
            class="tile-letters__tracking-check"
            id="id2-checkbox-letters-open"
            name="name-B-checkbox-letters-open"
            :value="false"
            color="emphasis"
          >
            Ajouter l'option de suivi
          </SolarisCheckbox>
        </div>

        <SolarisNotification
          color="informational"
          id="id2-notification-letters-open"
          :isClosable="false"
          title="Le suivi n’est pas disponible à l’international."
          titleLevel="p"
          type="inline"
        />
      </section>

      <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-letters__title">Options d'impression</h2>
        <fieldset class="tile-letters__print-content">
        <legend class="tile-letters__print-description">Par défaut, votre courrier est imprimé en noir et blanc.</legend>

          <SolarisSwitch
            class="tile-letters__print-choice"
            color="emphasis"
            id="id3-print-recto-open"
            label="Imprimer en recto (2 feuilles) (au même tarif)"
            reverse
            :value="false"
          />

          <SolarisSwitch
            color="emphasis"
            id="id4-print-colors-open"
            label="Imprimer en couleurs (+ 0,55€)"
            reverse
            :value="false"
          />
        </fieldset>
      </section>
    </template>
  </template>
</SolarisTileNew>\`
})`,...(pe=(ce=y.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ue,he;r.parameters={...r.parameters,docs:{...(me=r.parameters)==null?void 0:me.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  components: {
    SolarisTileNew,
    SolarisDivider,
    SolarisIcon,
    SolarisRadio
  },
  props: Object.keys(argTypes),
  data: () => ({
    data: data.tileSelectableMultipleWithMoreInfo
  }),
  template: \`<SolarisTileNew v-bind="data">
  <template v-slot:tileExtra="{ index }">
    <!-- DEMENAGEMENT DEFINITIF -->
    <template v-if="data.options[index].id === 'moving-def'">
      <section class="tile-reex__destination">
        <h2 class="tile-reex__title">Destination</h2>
          <div class="tile-reex__moving-def">

            <div class="tile-reex__more-info">
              <a class="tile-reex__more-info--link" href="#">Tout savoir sur cette solution</a>
              <SolarisIcon
                name="action-information-warning"
                size="small"
                type="regular"
                aria-hidden="true"
              />
            </div>
          </div>
      </section>

    <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-reex__title">Durée</h2>
          <SolarisRadio        
            colorStyle="emphasis"
            legend="Veuillez sélectionner la durée de réexpédition que vous souhaitez."
            :options="[
              {id:'option1-id-multi-A', name:'name-multi-A', value: '6 mois'},
        {id:'option2-id-multi-A', name:'name-multi-A', value: '12 mois'}]"
          />
      </section>
    </template>

    <!-- ABONNEMENT MOBILITÉE -->
    <template v-else-if="data.options[index].id === 'mobility-subscription'">
      <section class="tile-reex__destination">
        <h2 class="tile-reex__title">Destination</h2>
          <div class="tile-reex__moving-def">

            <div class="tile-reex__more-info">
              <a class="tile-reex__more-info--link" href="#">Tout savoir sur cette solution</a>
              <SolarisIcon
                name="action-information-warning"
                size="small"
                type="regular"
              />
            </div>
          </div>
      </section>

    <SolarisDivider color="ghost" :paddingTopBottom="20" type="dotted" />

      <section>
        <h2 class="tile-reex__title">Durée</h2>
          <SolarisRadio        
            colorStyle="emphasis"
            legend="Veuillez sélectionner la durée de réexpédition que vous souhaitez."
            :options="[
        {id:'option4-id-multi-B',name:'name-multi-B',value:'6 mois'},
        {id:'option5-id-multi-B',name:'name-multi-B',value:'12 mois'}
        ]"
          />
      </section>
    </template>
  </template>
</SolarisTileNew>\`
})`,...(he=(ue=r.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};const Qe=["AllAvailableElements","Clickable","Editable","SelectableSingle","SelectableMultiple","Expandable","Nested","NestedComponentSingle","NestedComponentMultiple","ExpandableWithMoreInfo","SelectableSingleWithMoreInfo","SelectableSingleWithMoreInfoOpen","SelectableMultipleWithMoreInfo"];export{p as AllAvailableElements,m as Clickable,u as Editable,g as Expandable,f as ExpandableWithMoreInfo,S as Nested,b as NestedComponentMultiple,_ as NestedComponentSingle,v as SelectableMultiple,r as SelectableMultipleWithMoreInfo,h as SelectableSingle,n as SelectableSingleWithMoreInfo,y as SelectableSingleWithMoreInfoOpen,Qe as __namedExportsOrder,Ke as default};
