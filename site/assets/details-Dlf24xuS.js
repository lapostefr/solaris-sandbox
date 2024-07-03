const e=`{
  groupName: string (deprecated),
  legend: string,
  parent: {
    id: string,
    name: string,
    value: string,
    checked: boolean,
    disabled: boolean
  },
  optionsList: [
    {
      id: string,
      name: string,
      value: string,
      checked: boolean
    }
  ]
}`,s=`{
  key(string) : string
}`,n=`{
  active: boolean,
  message: string
}`;export{n as a,s as b,e as d};
