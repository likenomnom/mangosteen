import{T as w,g as x,d as k,F as A,h as D,e as j}from"./index.a5f095cb.js";import{i as T}from"./echarts.fd48ea56.js";import{bE as d,bA as p,bt as _,bs as l,bF as r,bR as u,bz as f}from"./vendor.e7f13316.js";import"./vant.420686cf.js";const M="_wrapper_kkstk_1",L={wrapper:M},C="_wrapper_wxcjg_1",I={wrapper:C},Y={tooltip:{show:!0,trigger:"axis",formatter:([e])=>{const[s,a]=e.data;return`${new w(new Date(s)).format("YYYY\u5E74MM\u6708DD\u65E5")} \uFFE5${x(a)}`}},grid:[{left:16,top:20,right:16,bottom:20}],xAxis:{type:"time",boundaryGap:["3%","0%"],axisLabel:{formatter:e=>new w(new Date(e)).format("MM-DD")},axisTick:{alignWithLabel:!0}},yAxis:{show:!0,type:"value",splitLine:{show:!0,lineStyle:{type:"dashed"}},axisLabel:{show:!1}}},F=d({props:{data:{type:Array,required:!0}},setup:(e,s)=>{const a=p();let t;_(()=>{a.value!==void 0&&(t=T(a.value),t.setOption({...Y,series:[{data:e.data,type:"line"}]}))}),l(()=>e.data,()=>{t==null||t.setOption({series:[{data:e.data}]})}),l(()=>e.data,()=>(t==null||t.setOption({series:[{data:e.data}]}),()=>r("div",{ref:a,class:I.wrapper},null)))}}),V="_wrapper_1cm6i_1",E={wrapper:V},B={tooltip:{trigger:"item",formatter:e=>{const{name:s,value:a,percent:t}=e;return`${s}: \uFFE5${x(a)} \u5360\u6BD4 ${t}%`}},grid:[{left:0,top:0,right:0,bottom:0}],series:[{type:"pie",radius:"70%",emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]},N=d({props:{data:{type:Array}},setup:(e,s)=>{const a=p();let t;return _(()=>{a.value!==void 0&&(t=T(a.value),t.setOption(B))}),l(()=>e.data,()=>{t==null||t.setOption({series:[{data:e.data}]})}),()=>r("div",{ref:a,class:E.wrapper},null)}}),P="_wrapper_3j8qr_1",z="_topItem_3j8qr_5",G="_sign_3j8qr_11",R="_bar_wrapper_3j8qr_22",U="_bar_text_3j8qr_27",W="_bar_3j8qr_22",X="_bar_inner_3j8qr_41",o={wrapper:P,topItem:z,sign:G,bar_wrapper:R,bar_text:U,bar:W,bar_inner:X},H=d({props:{data:{type:Array}},setup:(e,s)=>()=>r("div",{class:o.wrapper},[e.data&&e.data.length>0?e.data.map(({tag:a,amount:t,percent:c})=>r("div",{class:o.topItem},[r("div",{class:o.sign},[a.sign]),r("div",{class:o.bar_wrapper},[r("div",{class:o.bar_text},[r("span",null,[u(" "),a.name,u(" - "),c,u("% ")]),r("span",null,[u(" \uFFE5"),r(k,{value:t},null),u(" ")])]),r("div",{class:o.bar},[r("div",{class:o.bar_inner,style:{width:`${c}%`}},null)])])])):r("div",null,[u("\u6CA1\u6709\u6570\u636E")])])}),J=24*3600*1e3,K=d({props:{startDate:{type:String,required:!1},endDate:{type:String,required:!1}},setup:(e,s)=>{const a=p("expenses"),t=p([]),c=f(()=>{if(!e.startDate||!e.endDate)return[];const i=(new Date(e.endDate).getTime()-new Date(e.startDate).getTime())/J+1;return Array.from({length:i}).map((g,O)=>{const y=new w(e.startDate+"T00:00:00.000+0800").add(O,"day").getTimestamp(),h=t.value[0],S=h&&new Date(h.happen_at+"T00:00:00.000+0800").getTime()===y?t.value.shift().amount:0;return[new Date(y).toISOString(),S]})}),b=async()=>{const n=await D.get("/items/summary",{happen_after:e.startDate,happen_before:e.endDate,kind:a.value,group_by:"happen_at"},{_mock:"itemSummary"});t.value=n.data.groups};_(b),l(()=>a.value,b);const m=p([]),$=f(()=>m.value.map(n=>({name:n.tag.name,value:n.amount}))),q=f(()=>{const n=m.value.reduce((i,g)=>i+g.amount,0);return m.value.map(i=>({...i,percent:Math.round(i.amount/n*100)}))}),v=async()=>{const n=await D.get("/items/summary",{happen_after:e.startDate,happen_before:e.endDate,kind:a.value,group_by:"tag_id"},{_mock:"itemSummary",_autoLoading:!0});m.value=n.data.groups};return _(v),l(()=>a.value,v),()=>r("div",{class:L.wrapper},[r(A,{label:"\u7C7B\u578B",type:"select",options:[{value:"expenses",text:"\u652F\u51FA"},{value:"income",text:"\u6536\u5165"}],modelValue:a.value,"onUpdate:modelValue":n=>a.value=n},null),r(F,{data:c.value},null),r(N,{data:$.value},null),r(H,{data:q.value},null)])}}),ae=d({setup:(e,s)=>()=>r(j,{rerenderOnSwitchTab:!0,component:K,hideThisYear:!0},null)});export{ae as StatisticsPage,ae as default};
