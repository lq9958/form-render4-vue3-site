import{r as m,w as u,a as p,o as f,c as d,m as i,u as v}from"./index-e843f906.js";const V={__name:"color-picker",props:{schema:Object,formData:Object},setup(r,{emit:l}){const t=r,{schema:a,formData:s}=t,e=m(s[a.field]);return u(e,()=>{l("onChange",{field:a.field,value:e.value})}),(h,o)=>{const c=p("el-color-picker");return f(),d(c,i({modelValue:e.value,"onUpdate:modelValue":o[0]||(o[0]=n=>e.value=n)},v(a).props),null,16,["modelValue"])}}};export{V as default};