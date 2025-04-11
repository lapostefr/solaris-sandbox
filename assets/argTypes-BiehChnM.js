import{C as r,a as n,c as s,b as c}from"./Callout-BLmiSFEB.js";const p=""+new URL("colissimo-CTnjww2E.svg",import.meta.url).href,a={alt:"Mon image",url:p},y={defaultSource:a,fetchPriority:"auto",fullWidth:!0,height:80,lazyload:!0,width:80},m={defaultSource:a,fetchPriority:"auto",fullWidth:!0,height:60,lazyload:!0,width:60},t=`{
  defaultSource: {
    alt?: string,
    url: string,
    mimeType?: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
    device?: 320 | 640 | 992 | 1280 | 1440 | 1680
  },
  fetchPriority?: 'auto' | 'low' | 'high',
  fullWidth?: boolean,
  height: number | string,
  otherSources?: 
    [
      {
        alt?: string,
        url: string,
        mimeType?: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
        device?: 320 | 640 | 992 | 1280 | 1440 | 1680
      }
    ],
  lazyload?: boolean,
  width: number | string,
}`,e=Object.values(r),o=Object.values(n),l=Object.values(s),i=Object.values(c),d={ariaLabel:{description:"Close button aria-label value.",table:{type:{summary:"string"}}},componentStyle:{description:"Color of callout, title, icon and callout borders.",table:{type:{summary:e.join(" | ")}},control:{type:"select"},options:e},componentStyleBackground:{description:"Set background color.<br /> *colored* is associated with the componentStyle color.",table:{type:{summary:o.join(" | ")}},control:{type:"select"},options:o},componentType:{description:"Define the type of interaction.",table:{type:{summary:i.join(" | ")}},control:{type:"select"},options:i},description:{description:"Callout description in the body.",table:{type:{summary:"string"}}},icon:{description:"The icon to the right of the title.",table:{type:{summary:"string"}}},isOpenCollapseModel:{description:"Controls the open state of the collapsible callout.",table:{category:"Model",type:{summary:"boolean"}}},pictureBodyRight:{description:"Displays an image to the right of the content in the body.",table:{type:{summary:"object",detail:t}},control:{type:"object"}},pictureHeader:{description:"Displays an image to the right of the title in the header.",table:{type:{summary:"object",detail:t}},control:{type:"object"}},showBorderLeft:{description:"Display the left border of the callout.",table:{type:{summary:"boolean"}}},showContainerBorder:{description:"Display all fine callout borders.",table:{type:{summary:"boolean"}}},title:{description:"Callout title.",table:{type:{summary:"string"}}},titleTag:{description:"Level of section headings.",table:{type:{summary:l.join(" | ")}},control:{type:"select"},options:l}};export{d as a,m as b,y as p};
