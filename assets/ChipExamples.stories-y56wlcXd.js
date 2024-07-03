const q={title:"Atoms/Chip/Examples",parameters:{previewTabs:{canvas:{hidden:!0}},viewMode:"docs",docs:{description:{component:"The **Chip Component** provides a versatile way to display brief information, such as tags, categories, or interactive elements. This section introduces you to the basic and interactive types of Chips and demonstrates how to effectively implement this component."}}}},i=(e,{argTypes:a})=>({template:`
  <SolarisChip
    close
    icon="action-tips"
    type="default">
    Chip
  </SolarisChip>
  `}),s=(e,{argTypes:a})=>({template:`
  <div>
    <SolarisChip
        close
        icon="action-tips"
        type="default">
        Default
    </SolarisChip>
    <SolarisChip
      close
      icon="action-tips"
      type="emphasis">
      Emphasis
    </SolarisChip>
    <SolarisChip
      close
      icon="action-tips"
      type="quiet">
      Quiet
    </SolarisChip>
    <SolarisChip
      close
      icon="action-tips"
      type="ghost">
      Ghost
    </SolarisChip>
  </div>
  `}),n=(e,{argTypes:a})=>({template:`
  <div>
    <SolarisChip
      close
      icon="action-tips"
      type="default"
      size="regular">
      Regular
    </SolarisChip>
    <SolarisChip
      close
      icon="action-tips"
      type="default"
      size="compact">
      Compact
    </SolarisChip>
  </div>
  `}),o=(e,{argTypes:a})=>({template:`
  <div>
    <SolarisChip
      icon="action-notification"
      type="default">
      Notification
    </SolarisChip>
    <SolarisChip
      icon="action-alert"
      type="default">
      Alert
    </SolarisChip>
  </div>
  `}),t=(e,{argTypes:a})=>({template:`
  <SolarisChip
    type="default"
    close>
    Chip
  </SolarisChip>
  `}),r=(e,{argTypes:a})=>({template:`
  <SolarisChip
    type="default">
    Simplified
  </SolarisChip>
  `}),p=(e,{argTypes:a})=>({template:`
  <SolarisChip
    disabled
    type="default">
    Disabled
  </SolarisChip>
  `});var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  template: \`
  <SolarisChip
    close
    icon="action-tips"
    type="default">
    Chip
  </SolarisChip>
  \`
})`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var h,m,y;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  template: \`
  <div>
    <SolarisChip
        close
        icon="action-tips"
        type="default">
        Default
    </SolarisChip>
    <SolarisChip
      close
      icon="action-tips"
      type="emphasis">
      Emphasis
    </SolarisChip>
    <SolarisChip
      close
      icon="action-tips"
      type="quiet">
      Quiet
    </SolarisChip>
    <SolarisChip
      close
      icon="action-tips"
      type="ghost">
      Ghost
    </SolarisChip>
  </div>
  \`
})`,...(y=(m=s.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var C,S,u;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  template: \`
  <div>
    <SolarisChip
      close
      icon="action-tips"
      type="default"
      size="regular">
      Regular
    </SolarisChip>
    <SolarisChip
      close
      icon="action-tips"
      type="default"
      size="compact">
      Compact
    </SolarisChip>
  </div>
  \`
})`,...(u=(S=n.parameters)==null?void 0:S.docs)==null?void 0:u.source}}};var g,f,T;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  template: \`
  <div>
    <SolarisChip
      icon="action-notification"
      type="default">
      Notification
    </SolarisChip>
    <SolarisChip
      icon="action-alert"
      type="default">
      Alert
    </SolarisChip>
  </div>
  \`
})`,...(T=(f=o.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var v,b,A;t.parameters={...t.parameters,docs:{...(v=t.parameters)==null?void 0:v.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  template: \`
  <SolarisChip
    type="default"
    close>
    Chip
  </SolarisChip>
  \`
})`,...(A=(b=t.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var E,z,D;r.parameters={...r.parameters,docs:{...(E=r.parameters)==null?void 0:E.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  template: \`
  <SolarisChip
    type="default">
    Simplified
  </SolarisChip>
  \`
})`,...(D=(z=r.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var w,x,_;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`(args: any, {
  argTypes
}: {
  argTypes: any;
}) => ({
  template: \`
  <SolarisChip
    disabled
    type="default">
    Disabled
  </SolarisChip>
  \`
})`,...(_=(x=p.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};const G=["AllAvailableElements","Type","Size","Icon","Closed","Simplified","Disabled"];export{i as AllAvailableElements,t as Closed,p as Disabled,o as Icon,r as Simplified,n as Size,s as Type,G as __namedExportsOrder,q as default};
