import{i as c,r as m,c as k,o as E,a as p,b as n,d as f,w as P,e as R,F as Y,f as x,m as j,u}from"./index-d0ecc875.js";const B={name:"FormRenderSelect"},K=Object.assign(B,{props:{schema:Object},setup(v){const w=v,d=c("form-render-data"),o=c("form-render-option-data"),{schema:e}=w,i=m(e.field),s=m(null),l=k(()=>!!o[e.field]),b=()=>{if(l.value)if(o[e.field].list)s.value=o[e.field].list;else throw new Error("[Form-Render4-Vue3-Pro]: select component must provide a option list.");else if(e.data)s.value=e.data.list;else throw new Error("[Form-Render4-Vue3-Pro]: select component must provide a option list.")};E(()=>{b()});const y=r=>{if(l.value){const t=o[e.field].label;if(t)return r[t];throw new Error("[Form-Render4-Vue3-Pro]: You must provide a `label` property to get label.")}else{if(e.data.label)return r[e.data.label];if(r.label)return r.label;throw new Error("[Form-Render4-Vue3-Pro]: You must provide a `label` property to get label.")}},g=r=>{if(l.value){const t=o[e.field].value;if(t)return r[t];throw new Error("[Form-Render4-Vue3-Pro]: You must provide a `value` property to get value.")}else{if(e.data.value)return r[e.data.value];if(r.value)return r.value;throw new Error("[Form-Render4-Vue3-Pro]: You must provide a `value` property to get value.")}},_=r=>{if(l.value){if(o[e.field].key)return o[e.field].key;if(r.id)return"id";throw new Error("[Form-Render4-Vue3-Pro]: You must provide a `key` property to get value.")}else{if(e.data.key)return r[e.data.key];if(r.id)return"id";throw new Error("[Form-Render4-Vue3-Pro]: You must provide a `key` property to get value.")}},V=e.props||{};return(r,t)=>{const h=p("a-option"),F=p("a-select");return n(),f(F,j({modelValue:u(d)[i.value],"onUpdate:modelValue":t[0]||(t[0]=a=>u(d)[i.value]=a)},u(V)),{default:P(()=>[(n(!0),R(Y,null,x(s.value,a=>(n(),f(h,{label:y(a),value:g(a),key:_(a)},null,8,["label","value"]))),128))]),_:1},16,["modelValue"])}}});export{K as default};