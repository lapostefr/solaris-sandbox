import{l as U,r as _,c as w,o as G,b as O,d as V,p as D,e as H,z as T,O as E,y as J}from"./vue.esm-bundler-DD7xIM0D.js";import{o as K}from"./index-ADTFLffw.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";const P=U({__name:"Tooltip",props:{color:{default:"default"},displayElement:{default:"inline-flex"},forceShow:{type:Boolean},isManual:{type:Boolean},long:{type:Boolean},offset:{default:8},placement:{default:"top"},trigger:{default:"hover"},type:{default:"default"}},emits:["triggerEvent"],setup(W,{emit:M}){const o=W,z=M,k=_(null),S=_(null),y=_("top"),q=_("default"),p=_("");K(k,t=>C());const x=w(()=>{let t="inherit",e="inherit",l="inherit",i="inherit";const f=o.offset;let u="transparent",m="transparent",h="transparent",r="transparent";const s=o.offset,g=o.type==="empty-no-arrow"?0:s+4;let c=!o.long&&o.type==="default"?"#3C3C3C":"#FFF";o.color==="spotlight"&&(c="#003DA5");const b=y.value.split("-"),v=b[0],n=b[1];v==="top"&&(l=`calc(100% + ${g}px)`,u=c,n||(i="50%"),n==="start"&&(i="0"),n==="end"&&(e="0")),v==="bottom"&&(t=`calc(100% + ${g}px)`,h=c,n||(i="50%"),n==="start"&&(i="0"),n==="end"&&(e="0")),v==="left"&&(e=`calc(100% + ${g}px)`,r=c,n||(t="50%"),n==="start"&&(t="0"),n==="end"&&(l="0")),v==="right"&&(i=`calc(100% + ${g}px)`,m=c,n||(t="50%"),n==="start"&&(t="0"),n==="end"&&(l="0"));const $={display:"block",background:c,top:t,right:e,bottom:l,left:i},d={"border-width":`${f}px`,"border-top-color":u,"border-right-color":m,"border-bottom-color":h,"border-left-color":r};return{tooltip:$,arrow:d}}),R=w(()=>`tooltip__popper--${y.value} tooltip__popper--${q.value}`),j=w(()=>{let t=o.trigger==="clickToOpen"||o.trigger==="clickToToggle"?"click":o.trigger,e=p.value||"";return o.isManual&&(t="",e=""),`tooltip__trigger--${t} tooltip__trigger--${e} ${F.value}`}),F=w(()=>{if(o.forceShow&&p.value!=="closed")return"tooltip__trigger--forced"}),N=w(()=>`tooltip__arrow--${y.value}`),L=()=>{o.trigger==="clickToOpen"&&(B(),p.value="open"),o.trigger==="clickToToggle"&&(B(),p.value=p.value==="open"?"closed":"open"),z("triggerEvent",p.value)},I=()=>{B()},C=()=>{p.value="closed"},B=()=>{let t=o.placement;const e=t.split("-"),l=k.value,i=l==null?void 0:l.getBoundingClientRect().left,f=l==null?void 0:l.getBoundingClientRect().top,u=l==null?void 0:l.clientWidth,m=l==null?void 0:l.clientHeight,h=S.value,r=h.clientWidth+o.offset,s=h.clientHeight+o.offset,g=window.innerWidth-(i+u+r),c=window.innerHeight-(f+m+s),b=window.innerWidth-(i+r),v=window.innerHeight-(f+s),n=window.innerWidth-(i+r-(r-u)/2),$=window.innerHeight-(f+s-(s-m)/2);let d=e[0],a=e[1];e[0]==="top"&&f<s&&(d="bottom"),e[0]==="bottom"&&c<0&&(d="top"),(e[0]==="top"||e[0]==="bottom")&&(e[1]==="start"&&b<0&&(a="end"),e[1]==="end"&&i<r-u&&(a="start"),!e[1]&&n<0&&(a="end"),!e[1]&&i<(r-u)/2&&(a="start")),e[0]==="left"&&i<r&&(d="right"),e[0]==="right"&&g<0&&(d="left"),(e[0]==="left"||e[0]==="right")&&(e[1]==="start"&&v<0&&(a="end"),e[1]==="end"&&f<s-m&&(a="start"),!e[1]&&$<0&&(a="end"),!e[1]&&f<(s-m)/2&&(a="start")),t=a?`${d}-${a}`:d,y.value=t},A=t=>{t.key==="Escape"&&C()};return G(()=>{y.value=o.placement,q.value=o.long===!0?"long":o.type,o.forceShow&&(p.value="open"),window.addEventListener("keydown",A)}),(t,e)=>(O(),V("div",{ref_key:"tooltip",ref:k,class:T(["tooltip",{"tooltip--spotlight":t.color==="spotlight"}]),style:E("display: "+t.displayElement)},[D("div",{class:T(["tooltip__trigger",j.value]),onClick:L,onMouseover:I},[H(t.$slots,"trigger",{},void 0,!0)],34),D("div",{ref_key:"tooltipPopper",ref:S,class:T(["tooltip__popper",R.value]),style:E(x.value.tooltip)},[t.type!=="empty-no-arrow"?(O(),V("i",{key:0,class:T(["tooltip__arrow",N.value]),style:E(x.value.arrow)},null,6)):J("",!0),H(t.$slots,"tooltip",{closed:C},void 0,!0)],6)],6))}}),X=Q(P,[["__scopeId","data-v-c5e685f6"]]);P.__docgenInfo={exportName:"default",displayName:"Tooltip",description:"",tags:{},props:[{name:"color",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"spotlight"'}]},defaultValue:{func:!1,value:"'default'"}},{name:"displayElement",required:!1,type:{name:"string"},defaultValue:{func:!1,value:"'inline-flex'"}},{name:"forceShow",required:!1,type:{name:"boolean"}},{name:"isManual",required:!1,type:{name:"boolean"}},{name:"long",required:!1,type:{name:"boolean"}},{name:"offset",required:!1,type:{name:"number"},defaultValue:{func:!1,value:"8"}},{name:"placement",required:!1,type:{name:"TooltipPlacement"},defaultValue:{func:!1,value:"'top'"}},{name:"trigger",required:!1,type:{name:"union",elements:[{name:'"hover"'},{name:'"clickToOpen"'},{name:'"clickToToggle"'},{name:'"focus"'}]},defaultValue:{func:!1,value:"'hover'"}},{name:"type",required:!1,type:{name:"union",elements:[{name:'"default"'},{name:'"long"'},{name:'"empty-border"'},{name:'"empty-no-arrow"'},{name:'"empty"'}]},defaultValue:{func:!1,value:"'default'"}}],events:[{name:"triggerEvent"}],slots:[{name:"trigger"},{name:"tooltip",scoped:!0,bindings:[{name:"closed",title:"binding"}]}],sourceFiles:["/Users/jchourdeaux/workspace/projects/vue-solaris/src/components/atoms/Tooltip/Tooltip.vue"]};const te=Object.freeze(Object.defineProperty({__proto__:null,default:X},Symbol.toStringTag,{value:"Module"}));export{X as S,te as _};
