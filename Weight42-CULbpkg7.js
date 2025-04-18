import{c as t,o as x,a as U,z as $,u as f,b as V,e,p as l,w,f as S,t as b,i as E,h as L,k as q,l as z,F as A,m as _}from"./index-B-0H7hAb.js";import{C as j,p as P,a as Y,b as G,L as Z,c as K,d as X,P as H,S as J,W as y,_ as h,F as I,e as D,f as F}from"./WeightP-CTWSVU5_.js";import{o as k,_ as o,A as R,B as Q,g as C,l as ee,i as te,y as O,P as T,C as B,D as le,m as ae,h as ne,n as re,a as ue}from"./calculatedData-D9R10nO-.js";const se={__name:"WeightChart42",props:{zfw:{type:Object,required:!0},tow:{type:Object,required:!0},ldw:{type:Object,required:!0},chartId:{type:String,default:"scatter-chart"},width:{type:Number,default:400},height:{type:Number,default:400},cssClasses:{default:"",type:String},styles:{type:Object,default:()=>({})},plugins:Array},setup(v){j.register(P,Y,G,Z,K,X,H);const n=v,d=t(()=>({datasets:[{label:"ZFW",fill:!1,borderColor:"#f87979",backgroundColor:"#f87979",data:[{x:n.zfw.cg,y:n.zfw.weight}]},{label:"TOW",fill:!1,borderColor:"#f5b642",backgroundColor:"#f5b642",data:[{x:n.tow.cg,y:n.tow.weight}]},{label:"LDW",fill:!1,borderColor:"#32CD32",backgroundColor:"#32CD32",data:[{x:n.ldw.cg,y:n.ldw.weight}]},{label:"",backgroundColor:"#000000",borderColor:"#000000",pointRadius:0,data:[{x:2.35,y:1450},{x:2.35,y:1468},{x:2.418,y:1900},{x:2.434,y:1999},{x:2.48,y:1999},{x:2.48,y:1700},{x:2.454,y:1450},{x:2.35,y:1450}]},{label:"",backgroundColor:"#000000",borderColor:"#000000",borderDash:[5,5],pointRadius:0,data:[{x:2.418,y:1900},{x:2.48,y:1900}]}]})),s={responsive:!0,showLine:!0,maintainAspectRatio:!1,scales:{x:{position:"bottom",min:2.35,max:2.5},y:{position:"left",min:1450,max:2e3}}};return(u,p)=>(x(),U(f(J),{"chart-options":s,"chart-data":d.value,"chart-id":n.chartId,plugins:n.plugins,"css-classes":n.cssClasses,style:$(n.styles)},null,8,["chart-data","chart-id","plugins","css-classes","style"]))}},ie={class:"border-collapse border-black border-2 table-fixed w-full"},de={__name:"Airspeed42",props:{tow:{type:y,required:!0},ldw:{type:y,required:!0},type:{type:String,required:!0}},setup(v){const n=k(),d=v,s=t(()=>{switch(d.type){case"DA42NG":return R;case"DA42VI":return Q;default:return R}});function u(p,a,c){return p[0]==NaN||p[1]==NaN?NaN:p[0]==p[1]&&p[1]!=NaN?a[p[0]]:ee(te(p[0],a[p[0]],p[1],a[p[1]],c))}return n.airspeed.vo=t(()=>(C(s.value.maneuverSpeeds,d.ldw.weight),u(C(s.value.maneuverSpeeds,d.ldw.weight),s.value.maneuverSpeeds,d.ldw.weight))),n.airspeed.vr=t(()=>u(C(s.value.rotationSpeeds,d.tow.weight),s.value.rotationSpeeds,d.tow.weight)),n.airspeed.v50=t(()=>u(C(s.value.bestAngleClimbSpeeds,d.tow.weight),s.value.bestAngleClimbSpeeds,d.tow.weight)),n.airspeed.vsup=t(()=>u(C(s.value.stallUpSpeeds,d.tow.weight),s.value.stallUpSpeeds,d.tow.weight)),n.airspeed.vsto=t(()=>u(C(s.value.stallToSpeeds,d.tow.weight),s.value.stallToSpeeds,d.tow.weight)),n.airspeed.vsldg=t(()=>u(C(s.value.stallLdgSpeeds,d.tow.weight),s.value.stallLdgSpeeds,d.tow.weight)),n.airspeed.vmcaup=t(()=>s.value.minimumControlSpeedsUp),n.airspeed.vmcaapp=t(()=>s.value.minimumControlSpeedsApp),n.airspeed.vy=t(()=>u(C(s.value.bestRateClimbSpeedsUp,d.tow.weight),s.value.bestRateClimbSpeedsUp,d.tow.weight)),n.airspeed.vyTO=t(()=>u(C(s.value.bestRateClimbSpeedsApp,d.tow.weight),s.value.bestRateClimbSpeedsApp,d.tow.weight)),(p,a)=>(x(),V("table",ie,[a[8]||(a[8]=e("thead",null,[e("tr",{class:"h-0"},[e("th",{class:"w-1/6"}),e("th",{class:"w-2/6"}),e("th",{class:"w-1/6"}),e("th",{class:"w-2/6"})]),e("tr",null,[e("th",{colspan:"4"},"V Speed")])],-1)),e("tbody",null,[e("tr",null,[l(o,null,{default:w(()=>a[0]||(a[0]=[e("span",null,[S("V"),e("sub",null,"R")],-1)])),_:1}),l(o,null,{default:w(()=>[e("span",null,b(f(n).airspeed.vr),1)]),_:1}),l(o,null,{default:w(()=>a[1]||(a[1]=[e("span",null,[S("V"),e("sub",null,"S1")],-1)])),_:1}),l(o,null,{default:w(()=>[e("span",null,b(f(n).airspeed.vsup),1)]),_:1})]),e("tr",null,[l(o,null,{default:w(()=>a[2]||(a[2]=[e("span",null,[S("V"),e("sub",null,"X")],-1)])),_:1}),l(o,null,{default:w(()=>[e("span",null,b(f(n).airspeed.v50),1)]),_:1}),l(o,null,{default:w(()=>a[3]||(a[3]=[e("span",null,[S("V"),e("sub",null,"S")],-1)])),_:1}),l(o,null,{default:w(()=>[e("span",null,b(f(n).airspeed.vsto),1)]),_:1})]),e("tr",null,[l(o,null,{default:w(()=>a[4]||(a[4]=[e("span",null,[S("V"),e("sub",null,"Y")],-1)])),_:1}),l(o,null,{default:w(()=>[e("span",null,b(f(n).airspeed.vy)+" | "+b(f(n).airspeed.vyTO),1)]),_:1}),l(o,null,{default:w(()=>a[5]||(a[5]=[e("span",null,[S("V"),e("sub",null,"S0")],-1)])),_:1}),l(o,null,{default:w(()=>[e("span",null,b(f(n).airspeed.vsldg),1)]),_:1})]),e("tr",null,[l(o,null,{default:w(()=>a[6]||(a[6]=[e("span",null,[S("V"),e("sub",null,"O")],-1)])),_:1}),l(o,null,{default:w(()=>[e("span",null,b(f(n).airspeed.vo),1)]),_:1}),l(o,null,{default:w(()=>a[7]||(a[7]=[e("span",null,[S("V"),e("sub",null,"MCA")],-1)])),_:1}),l(o,null,{default:w(()=>[e("span",null,b(f(n).airspeed.vmcaup)+" | "+b(f(n).airspeed.vmcaapp),1)]),_:1})])])]))}},oe={class:"border-collapse border-black border-2 table-fixed w-full"},pe={__name:"Performance42",props:{tow:{type:y,required:!0},ldw:{type:y,required:!0},type:{type:String,required:!0}},setup(v){const n=new k,d=v,s=E({tow:t(()=>d.tow.weight<=1700?1700:d.tow.weight),ldw:t(()=>d.ldw.weight<=1700?1700:d.ldw.weight)}),u=E({temperature:15,runwayIdent:"04",windDirection:40,windSpeed:0}),p=E({AETemperature:5,AEAltitude:8e3,OEIClimb1000Temperature:10,OEIClimb5000Temperature:6,OEIClimb8000Temperature:0}),a=E({temperature:15,runwayIdent:"04",windDirection:40,windSpeed:0}),c=t(()=>{switch(d.type){case"DA42NG":return B;case"DA42VI":return le;default:return B}});g();function g(){n.performance={takeoff:new O(t(()=>u.temperature),0,t(()=>s.tow),t(()=>c.value.TODistance),t(()=>u.runwayIdent),t(()=>u.windDirection),t(()=>u.windSpeed)),takeoff50:new O(t(()=>u.temperature),0,t(()=>s.tow),t(()=>c.value.TO50Distance),t(()=>u.runwayIdent),t(()=>u.windDirection),t(()=>u.windSpeed)),AEClimb:new T(t(()=>p.AETemperature),t(()=>p.AEAltitude),t(()=>s.tow),t(()=>c.value.AEClimbRate)),OEIClimb1000:new T(t(()=>p.OEIClimb1000Temperature),1e3,t(()=>s.tow),t(()=>c.value.OEIClimbRate)),OEIClimb5000:new T(t(()=>p.OEIClimb5000Temperature),5e3,t(()=>s.tow),t(()=>c.value.OEIClimbRate)),OEIClimb8000:new T(t(()=>p.OEIClimb8000Temperature),8e3,t(()=>s.tow),t(()=>c.value.OEIClimbRate)),landing:new O(t(()=>a.temperature),0,t(()=>s.ldw),t(()=>c.value.LDGDistance),t(()=>a.runwayIdent),t(()=>a.windDirection),t(()=>a.windSpeed)),landing50:new O(t(()=>a.temperature),0,t(()=>s.ldw),t(()=>c.value.LDG50Distance),t(()=>a.runwayIdent),t(()=>a.windDirection),t(()=>a.windSpeed)),accelerateStop:t(()=>n.performance.takeoff.distance+n.performance.landing.distance+85)}}return(m,r)=>(x(),V("table",oe,[e("tbody",null,[e("tr",null,[l(o,{class:"w-2/12 text-right pr-2",text:"T/O Distance"}),l(o,{class:"w-2/12"},{default:w(()=>[e("span",null,b(f(n).performance.takeoff.distance)+"|"+b(f(n).performance.takeoff50.distance),1)]),_:1}),l(o,{class:"w-1/12",text:"Meters"}),l(o,{class:"flex flex-row"},{default:w(()=>[l(h,{modelValue:u.temperature,"onUpdate:modelValue":r[0]||(r[0]=i=>u.temperature=i),modelModifiers:{number:!0},"input-label":"Temp."},null,8,["modelValue"]),l(h,{modelValue:u.runwayIdent,"onUpdate:modelValue":r[1]||(r[1]=i=>u.runwayIdent=i),"input-label":"RWY"},null,8,["modelValue"]),l(h,{modelValue:u.windDirection,"onUpdate:modelValue":r[2]||(r[2]=i=>u.windDirection=i),"input-label":"W. Dir"},null,8,["modelValue"]),l(h,{modelValue:u.windSpeed,"onUpdate:modelValue":r[3]||(r[3]=i=>u.windSpeed=i),modelModifiers:{number:!0},"input-label":"W. Spd"},null,8,["modelValue"])]),_:1})]),e("tr",null,[l(o,{class:"w-2/12 text-right pr-2"},{default:w(()=>r[13]||(r[13]=[e("span",null,"AE CLB Rate",-1)])),_:1}),l(o,{class:"w-2/12"},{default:w(()=>[e("span",null,b(f(n).performance.AEClimb.rate),1)]),_:1}),l(o,{class:"w-1/12",text:"Ft'/Min"}),l(o,{class:"flex flex-row"},{default:w(()=>[l(h,{modelValue:p.AETemperature,"onUpdate:modelValue":r[4]||(r[4]=i=>p.AETemperature=i),modelModifiers:{number:!0},"input-label":"Temp."},null,8,["modelValue"]),l(h,{modelValue:p.AEAltitude,"onUpdate:modelValue":r[5]||(r[5]=i=>p.AEAltitude=i),modelModifiers:{number:!0},"input-label":"Alt."},null,8,["modelValue"])]),_:1})]),e("tr",null,[l(o,{class:"w-2/12 text-right pr-2"},{default:w(()=>r[14]||(r[14]=[e("span",null,"OEI CLB Rate",-1)])),_:1}),l(o,{class:"w-2/12"},{default:w(()=>[e("span",null,b(f(n).performance.OEIClimb1000.rate)+"|"+b(f(n).performance.OEIClimb5000.rate)+"|"+b(f(n).performance.OEIClimb8000.rate),1)]),_:1}),l(o,{class:"w-1/12"},{default:w(()=>r[15]||(r[15]=[e("span",null,"Ft'/Min",-1)])),_:1}),l(o,{class:"flex flex-row"},{default:w(()=>[l(h,{modelValue:p.OEIClimb1000Temperature,"onUpdate:modelValue":r[6]||(r[6]=i=>p.OEIClimb1000Temperature=i),modelModifiers:{number:!0},"input-label":"1000"},null,8,["modelValue"]),l(h,{modelValue:p.OEIClimb5000Temperature,"onUpdate:modelValue":r[7]||(r[7]=i=>p.OEIClimb5000Temperature=i),modelModifiers:{number:!0},"input-label":"5000"},null,8,["modelValue"]),l(h,{modelValue:p.OEIClimb8000Temperature,"onUpdate:modelValue":r[8]||(r[8]=i=>p.OEIClimb8000Temperature=i),modelModifiers:{number:!0},"input-label":"8000"},null,8,["modelValue"])]),_:1})]),e("tr",null,[l(o,{class:"w-2/12 text-right pr-2"},{default:w(()=>r[16]||(r[16]=[e("span",null,"LDG Distance",-1)])),_:1}),l(o,{class:"w-2/12"},{default:w(()=>[e("span",null,b(f(n).performance.landing.distance)+"|"+b(f(n).performance.landing50.distance),1)]),_:1}),l(o,{class:"w-1/12"},{default:w(()=>r[17]||(r[17]=[e("span",null,"Meter",-1)])),_:1}),l(o,{class:"flex flex-row"},{default:w(()=>[l(h,{modelValue:a.temperature,"onUpdate:modelValue":r[9]||(r[9]=i=>a.temperature=i),modelModifiers:{number:!0},"input-label":"Temp."},null,8,["modelValue"]),l(h,{modelValue:a.runwayIdent,"onUpdate:modelValue":r[10]||(r[10]=i=>a.runwayIdent=i),"input-label":"RWY"},null,8,["modelValue"]),l(h,{modelValue:a.windDirection,"onUpdate:modelValue":r[11]||(r[11]=i=>a.windDirection=i),"input-label":"W. Dir"},null,8,["modelValue"]),l(h,{modelValue:a.windSpeed,"onUpdate:modelValue":r[12]||(r[12]=i=>a.windSpeed=i),modelModifiers:{number:!0},"input-label":"W. Spd"},null,8,["modelValue"])]),_:1})]),e("tr",null,[l(o,{class:"w-2/12 text-right pr-2"},{default:w(()=>r[18]||(r[18]=[e("span",null,"Acc-Stop",-1)])),_:1}),l(o,{class:"w-2/12"},{default:w(()=>[e("span",null,b(f(n).performance.accelerateStop),1)]),_:1}),l(o,{class:"w-1/12"},{default:w(()=>r[19]||(r[19]=[e("span",null,"Meter",-1)])),_:1}),l(o,{class:""})])])]))}},me="/DA42NG_Form.pdf",we={__name:"ExportButton42",props:{aircraftType:{type:String,default:"da40ng",required:!0},weight:{type:Object,required:!0}},setup(v){const n=k();let s={...v.weight,...n.weight};async function u(){const p=await fetch(me).then(r=>r.arrayBuffer()),a=await ae.load(p),c=a.getForm();for(const[r,i]of Object.entries(s)){let M=i.exportField;console.log(M),Array.isArray(M)&&M.forEach(W=>{try{c.getTextField(W[0]).setText(W[1].toString())}catch{}})}const g=await a.save();let m=ne().format("YYYYMMDDhhmmss");re(g,`${m}-WB-DA42.pdf`,"application/pdf")}return(p,a)=>(x(),V("button",{class:"border rounded-sm border-black bg-gray-200",onClick:u}," Export "))}},fe={class:"h-8 border-2 border-black flex flex-row"},be={class:"flex-initial my-auto pl-4"},ce=["value"],ge={class:"flex-initial my-auto px-4"},xe={class:"flex-initial my-auto px-4"},ye={class:"flex-initial my-auto justify-self-end"},he={class:"grid md:grid-cols-2 gap-4 grid-cols-1 pt-2"},Ve={class:"table-fixed border-black border-2 h-full"},Ce={class:"pt-2 flex flex-row"},ve={class:"basis-4/6"},Se={class:"basis-2/6"},Ie={__name:"Weight42",setup(v){const n=L("B-89001"),d=t(()=>p.find(g=>g.isSameIdent(n.value))),s=E({emptyWeight:new y("Empty Weihgt",t(()=>d.value.weight),t(()=>d.value.arm),t(()=>d.value.moment),"EM"),frontSeats:new y("Front Seats",160,2.3,void 0,"Front"),rearSeats:new y("Rear Seats",0,3.25,void 0,"Rear"),noseBaggage:new y("Nose Baggage",0,.6,void 0,"Nose"),cabinBaggage:new y("Cabin Baggage",0,3.89,void 0,"Cabin"),extensionBaggage:new y("Baggage Ext.",0,4.54,void 0,"Ext"),deicingFluid:new y("De-Icing Fluid",t(()=>d.value.deicing),1,void 0,"DeIcing")}),u=E({mainFuel:new I("Main Fuel",0,159,2.63),auxFuel:new I("Aux Fuel",0,84,3.2),taxiFuel:new I("Taxi Fuel   -",0,1.28,2.63),burnMainFuel:new I("Trip F Used (M) -",0,0,2.63),burnAuxFuel:new I("Trip F Used (A) -",0,0,3.2)}),p=ue.filter(c=>c.isDA42),a=k();return a.weight={zfw:new y("ZFW",t(()=>Object.values(s).reduce((c,g)=>c+g.weight,0)),0,t(()=>Object.values(s).reduce((c,g)=>c+g.moment,0))),tow:new y("TOW",t(()=>a.weight.zfw.weight+u.mainFuel.weight+u.auxFuel.weight-u.taxiFuel.weight),0,t(()=>a.weight.zfw.moment+u.mainFuel.moment+u.auxFuel.moment-u.taxiFuel.moment)),ldw:new y("LDW",t(()=>a.weight.tow.weight-u.burnMainFuel.weight-u.burnAuxFuel.weight),0,t(()=>a.weight.tow.moment-u.burnMainFuel.moment-u.burnAuxFuel.moment))},a.basic.aircraftIndex=t(()=>n.value),(c,g)=>(x(),V(A,null,[e("div",fe,[e("div",be,[g[1]||(g[1]=e("span",{class:""},"Tail Number:",-1)),q(e("select",{id:"aircraft-ident","onUpdate:modelValue":g[0]||(g[0]=m=>n.value=m)},[(x(!0),V(A,null,_(f(p),m=>(x(),V("option",{key:m.ident,value:m.ident},b(m.ident),9,ce))),128))],512),[[z,n.value]])]),e("div",ge,[e("span",null,"Fuel Tank: "+b(d.value.fuel[1]),1)]),e("div",xe,[e("span",null,"Baggage: "+b(d.value.baggage[0]),1)]),e("div",ye,[l(we,{"aircraft-type":"da42ng",weight:{...s,...u}},null,8,["weight"])])]),e("div",he,[e("div",null,[e("table",Ve,[g[2]||(g[2]=e("thead",null,[e("tr",null,[e("th",{class:"w-32"}),e("th",{class:"w-24"},"Mass (Kg)"),e("th",{class:"w-32"},"Lever arm (m)"),e("th",{class:"w-32"},"Moment (kg/m)")])],-1)),e("tbody",null,[(x(!0),V(A,null,_(s,(m,r)=>(x(),V("tr",{key:r,class:"h-1"},[e("td",null,[l(D,{text:m.label,class:"font-bold"},null,8,["text"])]),e("td",null,[l(F,{modelValue:m.weight,"onUpdate:modelValue":i=>m.weight=i,modelModifiers:{number:!0},"input-id":`${m.label}-weight`,"with-label":!1},null,8,["modelValue","onUpdate:modelValue","input-id"])]),e("td",null,[l(F,{modelValue:m.arm,"onUpdate:modelValue":i=>m.arm=i,modelModifiers:{number:!0},"input-id":`${m.label}-weight`,"with-label":!1},null,8,["modelValue","onUpdate:modelValue","input-id"])]),e("td",null,[r=="emptyWeight"?(x(),U(F,{key:0,modelValue:m.moment,"onUpdate:modelValue":i=>m.moment=i,modelModifiers:{number:!0},"input-id":`${m.label}-moment`,"with-label":!1},null,8,["modelValue","onUpdate:modelValue","input-id"])):(x(),U(D,{key:1,text:m.moment},null,8,["text"]))])]))),128)),(x(!0),V(A,null,_(u,(m,r)=>(x(),V("tr",{key:r,class:"h-1"},[e("td",null,[l(D,{text:m.label,class:"font-bold"},null,8,["text"])]),e("td",null,[l(F,{modelValue:m.weight,"onUpdate:modelValue":i=>m.weight=i,modelModifiers:{number:!0},"input-id":`${m.label}-weight`,"with-label":!1},null,8,["modelValue","onUpdate:modelValue","input-id"])]),e("td",null,[l(F,{modelValue:m.arm,"onUpdate:modelValue":i=>m.arm=i,modelModifiers:{number:!0},"input-id":`${m.label}-arm`,"with-label":!1},null,8,["modelValue","onUpdate:modelValue","input-id"])]),e("td",null,[l(D,{text:m.moment},null,8,["text"])])]))),128)),(x(!0),V(A,null,_(f(a).weight,(m,r)=>(x(),V("tr",{key:r,class:"h-1"},[e("td",null,[l(D,{text:m.label,class:"font-bold"},null,8,["text"])]),e("td",null,[l(D,{text:m.weight},null,8,["text"])]),e("td",null,[l(D,{text:m.cg},null,8,["text"])]),e("td",null,[l(D,{text:m.moment},null,8,["text"])])]))),128))])])]),l(se,{zfw:f(a).weight.zfw,tow:f(a).weight.tow,ldw:f(a).weight.ldw,"dataset-id-key":"weight","css-classes":"h-full"},null,8,["zfw","tow","ldw"])]),e("div",Ce,[e("div",ve,[l(pe,{tow:f(a).weight.tow,ldw:f(a).weight.ldw,type:d.value.type},null,8,["tow","ldw","type"])]),e("div",Se,[l(de,{tow:f(a).weight.tow,ldw:f(a).weight.ldw,type:d.value.type},null,8,["tow","ldw","type"])])])],64))}};export{Ie as default};
