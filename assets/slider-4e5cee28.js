import{i as d,a as p,b as u,d as i,m as f,u as e}from"./index-d0ecc875.js";const _={name:"FormRenderSlider"},V=Object.assign(_,{props:{schema:Object},setup(r){const o=r,s=d("form-render-data"),{schema:n}=o,a=o.schema.field,c=n.props||{};return(b,t)=>{const l=p("a-slider");return u(),i(l,f({modelValue:e(s)[e(a)],"onUpdate:modelValue":t[0]||(t[0]=m=>e(s)[e(a)]=m)},e(c)),null,16,["modelValue"])}}});export{V as default};