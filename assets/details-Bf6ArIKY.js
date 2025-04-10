const e=`{
  active: boolean,
  message: string
}`,i=`[
  {
    id: string,
    checkboxName?: string,
    radioName?: string,
    value?: string,
    subInfo?: string,
    image?: {
      width?: number,
      height?: number,
      defaultSource: {
        alt?: string,
        url: string,
        mimeType: 'image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
        device?: 320 | 640 | 992 | 1280 | 1440 | 1680
      },
      otherSources: [
        {
          alt?: string,
          url: string,
          mimeType: image/jpeg' | 'image/jpg' | 'image/png' | 'image/webp',
          device?: 320 | 640 | 992 | 1280 | 1440 | 1680
        }
      ],
      lazyload?: boolean
    },
    color?: string,
    icon?: string,
    flag?: {
      name: string,
      alt: string
    },
    checked?: boolean,
    disabled: boolean
  }
]`,a=`[
  {
    label: string,
    value: string,
    disabled: boolean
  }
]`,n=`[
  {
    groupName: string,
    optionsList: [
      {
        id: string,
        checkboxName: string,
        radioName: string,
        label: string,
        value: string,
        color: string,
        checked: boolean,
        disabled: boolean
  },
]`;export{a,i as b,n as c,e as d};
