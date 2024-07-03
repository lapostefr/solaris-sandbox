import{A as m,C as p,b as y,I as d,L as c,R as u,T as r,a as b}from"./Card-YgxSiPQ_.js";const g=`[{
  content: string,
  badgeColor: string
}]`,h=`
  [{
    color: string,
    content: string,
    textTransform: string,
    weight: string
  }]
`,f=`
  [{
    color: string,
    content: string,
    fontSize: string,
    icon: string,
    lineHeight: string,
    textTransform: string,
    weight: string
  }]
`,t=Object.values(m),o=Object.values(p),a=Object.values(y),s=Object.values(d),i=Object.values(c),n=Object.values(u),l=Object.values(r),e=Object.values(b),T={alignments:{description:`
      The type of alignment desired : <i>left,center,right</i>

      If right, only CardFooter is aligned on the right`,table:{type:{summary:t}},defaultValue:{summary:"left"},control:{type:"select"},options:t},badges:{description:"List here the badges you will need",table:{type:{summary:[g]}}},bodyText:{description:"The text that will be inserted into the body of the component",table:{type:{summary:"string"}}},cardStyle:{description:"Choose the style to apply to the card",table:{type:{summary:o}},defaultValue:{summary:"elevated"},control:{type:"select"},options:o},containerTag:{description:"Define card container Tag",table:{type:{summary:a}},defaultValue:{summary:"small"},control:{type:"select"},options:a},contentPadding:{description:"The spacings that will be applied to the component body",table:{type:{summary:e}},defaultValue:{summary:"small"},control:{type:"select"},options:e},expanded:{description:"Show hidden content",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},fullClickable:{description:"Enable/Disable click event all over the component",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},id:{description:"Define an id for the component",table:{type:{summary:"string"}}},imageOrder:{description:"Define the display order of Image and Header elements",table:{type:{summary:s}},defaultValue:{summary:"Header on top"},control:{type:"select"},options:s},imagePadding:{description:"Spacing around the image",table:{type:{summary:e}},defaultValue:{summary:"none"},control:{type:"select"},options:e},isEmpty:{description:"If you want to use only component wrapper. <b>This condition works if you exploit the emptyCard slot</b>",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},isFormElement:{description:"This Boolean is used to determine whether a label should be applied to the title.",table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}},label:{description:"Content of the yellow label above the component",table:{type:{summary:"string"}}},layout:{description:"Orientation of the component to choose from a predefined list",table:{type:{summary:i}},defaultValue:{summary:"vertical"},control:{type:"select"},options:i},link:{description:"Url of the link ",table:{type:{summary:"string"}}},picture:{description:"Inserting the image",table:{type:{summary:"SolarisPictureProps"}}},radius:{description:"What type of radius do you want to apply?",table:{type:{summary:n}},defaultValue:{summary:"small"},control:{type:"select"},options:n},showImagesOnMobile:{description:"Show/Hide picture on mobile device",table:{type:{summary:"boolean"},defaultValue:{summary:"true"}}},subtitle:{description:"Component subtitle",table:{type:{summary:"Array",detail:h}}},title:{description:"Component title",table:{type:{summary:"Array",detail:f}}},titlesOrder:{description:"Define the display order of titles and subtitles",table:{type:{summary:l}},defaultValue:{summary:r.titleOnTop},control:{type:"select"},options:l}},w={...T,footerRight:{description:`The positioning of the footer to the right or below the body <br> <br>
        <b>This property only concerns the horizontal display of the component</b> `,table:{type:{summary:"boolean"},defaultValue:{summary:"false"}}}};export{w as a,T as c};
