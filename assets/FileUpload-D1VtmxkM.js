import{a as g,j as t,L as P,I as T,P as W,C as $,B as R,E as b,F as z,H as K,J,K as Q,M as X,N as Y,O as Z,h as q,Q as V}from"./ui-components-CghfVAdP.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),L=(...l)=>l.filter((m,p,r)=>!!m&&r.indexOf(m)===p).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ee={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=g.forwardRef(({color:l="currentColor",size:m=24,strokeWidth:p=2,absoluteStrokeWidth:r,className:w="",children:o,iconNode:y,...M},A)=>g.createElement("svg",{ref:A,...ee,width:m,height:m,stroke:l,strokeWidth:r?Number(p)*24/Number(m):p,className:L("lucide",w),...M},[...y.map(([G,S])=>g.createElement(G,S)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(l,m)=>{const p=g.forwardRef(({className:r,...w},o)=>g.createElement(te,{ref:o,iconNode:m,className:L(`lucide-${_(l)}`,r),...w}));return p.displayName=`${l}`,p};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=B("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=B("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]),re=({onFileLoaded:l})=>{var D,F;const[m,p]=g.useState([]),[r,w]=g.useState([]),[o,y]=g.useState(void 0),[M,A]=g.useState(!1),G=n=>{var C,j,I;const s=new Set,c=n.filter(e=>e.tag==="INDI");n.filter(e=>e.tag==="FAM").forEach(e=>{e.children.forEach(i=>{var f;if(i.tag==="CHIL"){const h=(f=i.data)==null?void 0:f.replace(/@/g,"");h&&s.add(h)}})});const a=c.filter(e=>e.pointer&&!s.has(e.pointer));if(a.length===0)return(C=c[0])==null?void 0:C.pointer;const E=(e,i=new Set)=>{if(i.has(e))return 0;i.add(e);let f=0;return n.filter(h=>h.tag==="FAM").forEach(h=>{h.children.some(d=>{var u;return(d.tag==="HUSB"||d.tag==="WIFE")&&((u=d.data)==null?void 0:u.replace(/@/g,""))===e})&&h.children.forEach(d=>{var u;if(d.tag==="CHIL"){const v=(u=d.data)==null?void 0:u.replace(/@/g,"");v&&(f+=1+E(v,i))}})}),f},x=a.map(e=>{var v,O;const i=E(e.pointer),f=e.children.find(N=>N.tag==="SEX"),h=(f==null?void 0:f.data)==="M",k=e.children.find(N=>N.tag==="BIRT"),d=(v=k==null?void 0:k.children)==null?void 0:v.find(N=>N.tag==="DATE"),u=d!=null&&d.data?parseInt(((O=d.data.match(/\d{4}/))==null?void 0:O[0])||"9999"):9999;return{pointer:e.pointer,descendants:i,isMale:h,birthYear:u,score:i*1e3+(h?100:0)-(u<9999?(9999-u)/10:0)}});return x.sort((e,i)=>i.score-e.score),((j=x[0])==null?void 0:j.pointer)||((I=a[0])==null?void 0:I.pointer)},S=n=>{var c;const s=(c=n.target.files)==null?void 0:c[0];if(s&&(s.name.endsWith(".ged")||s.name.endsWith(".gdz"))){const a=new FileReader;a.onload=E=>{var I;const x=(I=E.target)==null?void 0:I.result,C=V(x);p(C);const j=C.filter(e=>e.tag==="INDI");if(w(j),j.length>0){const e=G(C);y(e||j[0].pointer)}},a.readAsText(s)}else alert("Пожалуйста, выберите корректный GEDCOM-файл (.ged или .gdz).")},U=n=>{const s=r.find(c=>{const a=c.children.find(x=>x.tag==="NAME");return b((a==null?void 0:a.data)||"")===n});s&&y(s.pointer),A(!1)},H=()=>{if(!o){alert("Пожалуйста, выберите корневую персону.");return}l(m,o)};return t.jsxs("div",{className:"flex flex-col items-center justify-center h-screen space-y-4",children:[t.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[t.jsx(P,{htmlFor:"GEDCOM",children:"Загрузить GEDCOM-файл"}),t.jsx(T,{id:"GEDCOM",type:"file",accept:".ged,.gdz,application/x-gedcom,text/x-gedcom",onChange:S})]}),r.length>0&&t.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[t.jsxs("div",{children:[t.jsx(P,{htmlFor:"rootPerson",children:"Выберите корневую персону"}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Мы автоматически выбрали наиболее подходящего корневого предка по вашему дереву. При необходимости вы можете изменить выбор."})]}),t.jsxs(W,{open:M,onOpenChange:A,children:[t.jsx($,{asChild:!0,children:t.jsxs(R,{variant:"outline",role:"combobox","aria-expanded":M,className:"w-full justify-between",children:[o?b(((F=(D=r.find(n=>n.pointer===o))==null?void 0:D.children.find(n=>n.tag==="NAME"))==null?void 0:F.data)||"")||"Без имени":"Выберите персону",t.jsx(se,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),t.jsx(z,{className:"p-0",children:t.jsxs(K,{children:[t.jsx(J,{placeholder:"Поиск персоны...",autoFocus:!0}),t.jsxs(Q,{children:[t.jsx(X,{children:"Ничего не найдено."}),t.jsx(Y,{children:r.map(n=>{const s=n.children.find(a=>a.tag==="NAME"),c=b((s==null?void 0:s.data)||"")||"Без имени";return t.jsxs(Z,{value:c,onSelect:()=>U(c),children:[c,t.jsx(ne,{className:q("ml-auto h-4 w-4",n.pointer===o?"opacity-100":"opacity-0")})]},n.pointer)})})]})]})})]})]}),t.jsx(R,{onClick:H,disabled:r.length===0,children:"Обработать GEDCOM"})]})};export{re as default};
