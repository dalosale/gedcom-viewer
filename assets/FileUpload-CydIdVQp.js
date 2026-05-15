import{a as g,j as t,L,I as $,W as T,X as H,B as O,Y as b,Z as z,_ as X,$ as Y,a0 as Z,a1 as K,a2 as _,a3 as q,h as J,a4 as Q}from"./ui-components-CTqA7MKL.js";/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=l=>l.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P=(...l)=>l.filter((m,p,r)=>!!m&&r.indexOf(m)===p).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var ee={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const te=g.forwardRef(({color:l="currentColor",size:m=24,strokeWidth:p=2,absoluteStrokeWidth:r,className:w="",children:o,iconNode:y,...A},M)=>g.createElement("svg",{ref:M,...ee,width:m,height:m,stroke:l,strokeWidth:r?Number(p)*24/Number(m):p,className:P("lucide",w),...A},[...y.map(([G,S])=>g.createElement(G,S)),...Array.isArray(o)?o:[o]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=(l,m)=>{const p=g.forwardRef(({className:r,...w},o)=>g.createElement(te,{ref:o,iconNode:m,className:P(`lucide-${V(l)}`,r),...w}));return p.displayName=`${l}`,p};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ae=B("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=B("ChevronsUpDown",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]),re=({onFileLoaded:l})=>{var D,R;const[m,p]=g.useState([]),[r,w]=g.useState([]),[o,y]=g.useState(void 0),[A,M]=g.useState(!1),G=a=>{var C,j,E;const n=new Set,c=a.filter(e=>e.tag==="INDI");a.filter(e=>e.tag==="FAM").forEach(e=>{e.children.forEach(i=>{var f;if(i.tag==="CHIL"){const h=(f=i.data)==null?void 0:f.replace(/@/g,"");h&&n.add(h)}})});const s=c.filter(e=>e.pointer&&!n.has(e.pointer));if(s.length===0)return(C=c[0])==null?void 0:C.pointer;const I=(e,i=new Set)=>{if(i.has(e))return 0;i.add(e);let f=0;return a.filter(h=>h.tag==="FAM").forEach(h=>{h.children.some(d=>{var u;return(d.tag==="HUSB"||d.tag==="WIFE")&&((u=d.data)==null?void 0:u.replace(/@/g,""))===e})&&h.children.forEach(d=>{var u;if(d.tag==="CHIL"){const v=(u=d.data)==null?void 0:u.replace(/@/g,"");v&&(f+=1+I(v,i))}})}),f},x=s.map(e=>{var v,F;const i=I(e.pointer),f=e.children.find(N=>N.tag==="SEX"),h=(f==null?void 0:f.data)==="M",k=e.children.find(N=>N.tag==="BIRT"),d=(v=k==null?void 0:k.children)==null?void 0:v.find(N=>N.tag==="DATE"),u=d!=null&&d.data?parseInt(((F=d.data.match(/\d{4}/))==null?void 0:F[0])||"9999"):9999;return{pointer:e.pointer,descendants:i,isMale:h,birthYear:u,score:i*1e3+(h?100:0)-(u<9999?(9999-u)/10:0)}});return x.sort((e,i)=>i.score-e.score),((j=x[0])==null?void 0:j.pointer)||((E=s[0])==null?void 0:E.pointer)},S=a=>{var c;const n=(c=a.target.files)==null?void 0:c[0];if(n&&(n.name.endsWith(".ged")||n.name.endsWith(".gdz"))){const s=new FileReader;s.onload=I=>{var E;const x=(E=I.target)==null?void 0:E.result,C=Q(x);p(C);const j=C.filter(e=>e.tag==="INDI");if(w(j),j.length>0){const e=G(C);y(e||j[0].pointer)}},s.readAsText(n)}else alert("Пожалуйста, выберите корректный GEDCOM-файл (.ged или .gdz).")},U=a=>{const n=r.find(c=>{const s=c.children.find(x=>x.tag==="NAME");return b((s==null?void 0:s.data)||"")===a});n&&y(n.pointer),M(!1)},W=()=>{if(!o){alert("Пожалуйста, выберите корневую персону.");return}l(m,o)};return t.jsxs("div",{className:"flex flex-col items-center justify-center h-screen space-y-4",children:[t.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[t.jsx(L,{htmlFor:"GEDCOM",children:"Загрузить GEDCOM-файл"}),t.jsx($,{id:"GEDCOM",type:"file",accept:".ged,.gdz,application/x-gedcom,text/x-gedcom",onChange:S})]}),r.length>0&&t.jsxs("div",{className:"grid w-full max-w-sm items-center gap-1.5",children:[t.jsxs("div",{children:[t.jsx(L,{htmlFor:"rootPerson",children:"Выберите корневую персону"}),t.jsx("p",{className:"text-xs text-muted-foreground mt-1",children:"Мы автоматически выбрали наиболее подходящего корневого предка по вашему дереву. При необходимости вы можете изменить выбор."})]}),t.jsxs(T,{open:A,onOpenChange:M,children:[t.jsx(H,{asChild:!0,children:t.jsxs(O,{variant:"outline",role:"combobox","aria-expanded":A,className:"w-full justify-between",children:[o?b(((R=(D=r.find(a=>a.pointer===o))==null?void 0:D.children.find(a=>a.tag==="NAME"))==null?void 0:R.data)||"")||"Без имени":"Выберите персону",t.jsx(ne,{className:"ml-2 h-4 w-4 shrink-0 opacity-50"})]})}),t.jsx(z,{className:"p-0",children:t.jsxs(X,{children:[t.jsx(Y,{placeholder:"Поиск персоны...",autoFocus:!0}),t.jsxs(Z,{children:[t.jsx(K,{children:"Ничего не найдено."}),t.jsx(_,{children:r.map(a=>{const n=a.children.find(s=>s.tag==="NAME"),c=b((n==null?void 0:n.data)||"")||"Без имени";return t.jsxs(q,{value:c,onSelect:()=>U(c),children:[c,t.jsx(ae,{className:J("ml-auto h-4 w-4",a.pointer===o?"opacity-100":"opacity-0")})]},a.pointer)})})]})]})})]})]}),t.jsx(O,{onClick:W,disabled:r.length===0,children:"Обработать GEDCOM"})]})};export{re as default};
