(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[31],{1528:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return A}));var c,o,i=n(9),r=n(8),j=n(1),a=n(4),l=n(2),d=n(6),s=n(14),b=n(119),O=n(36),x=n(63),u=n(382),p=n(26),h=n(450),v=n(142),g=n(22),f=n(49),y=n(109),m=n(921),T=n(171),I=n(227),k=n(200),E=n(257),N=n(0);!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(o||(o={}));var S=Object(d.e)(l.t)(c||(c=Object(r.a)(["\n  background-color: ",";\n  color: ",";\n  box-shadow: none;\n  border-radius: 16px;\n"])),(function(e){return e.theme.colors.input}),(function(e){return e.theme.colors.text}));function A(){var e,t=Object(g.a)().account,n=Object(s.b)().t,c=Object(j.useState)(o.TOKEN1),r=Object(i.a)(c,2),d=r[0],A=r[1],K=Object(j.useState)(a.d),C=Object(i.a)(K,2),w=C[0],q=C[1],B=Object(j.useState)(null),L=Object(i.a)(B,2),X=L[0],D=L[1],J=Object(v.b)(null!==w&&void 0!==w?w:void 0,null!==X&&void 0!==X?X:void 0),M=Object(i.a)(J,2),P=M[0],F=M[1],G=Object(f.h)();Object(j.useEffect)((function(){F&&G(F)}),[F,G]);var R=P===v.a.NOT_EXISTS||Boolean(P===v.a.EXISTS&&F&&a.e.equal(F.reserve0.raw,a.e.BigInt(0))&&a.e.equal(F.reserve1.raw,a.e.BigInt(0))),U=Object(y.d)(null!==t&&void 0!==t?t:void 0,null===F||void 0===F?void 0:F.liquidityToken),V=Boolean(U&&a.e.greaterThan(U.raw,a.e.BigInt(0))),W=Object(j.useCallback)((function(e){d===o.TOKEN0?q(e):D(e)}),[d]),Y=Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(l.vc,{textAlign:"center",children:n(t?"Select a token to find your liquidity.":"Connect to a wallet to find pools")})}),_=Object(l.Uc)(Object(N.jsx)(h.a,{onCurrencySelect:W,showCommonBases:!0,selectedCurrency:null!==(e=d===o.TOKEN0?X:w)&&void 0!==e?e:void 0}),!0,!0,"selectCurrencyModal"),z=Object(i.a)(_,1)[0];return Object(N.jsx)(E.a,{children:Object(N.jsxs)(k.a,{children:[Object(N.jsx)(k.b,{title:n("Import Pool"),subtitle:n("Import an existing pool"),backTo:"/pool"}),Object(N.jsxs)(O.a,{style:{padding:"1rem"},gap:"md",children:[Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.K,{}),onClick:function(){z(),A(o.TOKEN0)},children:w?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:w}),Object(N.jsx)(l.vc,{ml:"8px",children:w.symbol})]}):Object(N.jsx)(l.vc,{ml:"8px",children:n("Select a Token")})}),Object(N.jsx)(O.b,{children:Object(N.jsx)(l.a,{})}),Object(N.jsx)(S,{endIcon:Object(N.jsx)(l.K,{}),onClick:function(){z(),A(o.TOKEN1)},children:X?Object(N.jsxs)(p.d,{children:[Object(N.jsx)(x.a,{currency:X}),Object(N.jsx)(l.vc,{ml:"8px",children:X.symbol})]}):Object(N.jsx)(l.vc,{as:p.d,children:n("Select a Token")})}),V&&Object(N.jsxs)(O.b,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[Object(N.jsx)(l.vc,{textAlign:"center",children:n("Pool Found!")}),Object(N.jsx)(m.a,{to:"/pool",children:Object(N.jsx)(l.vc,{textAlign:"center",children:n("Manage this pool.")})})]}),w&&X?P===v.a.EXISTS?V&&F?Object(N.jsx)(u.a,{pair:F}):Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.vc,{textAlign:"center",children:n("You don\u2019t have liquidity in this pool yet.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(w),"/").concat(Object(T.a)(X)),children:Object(N.jsx)(l.vc,{textAlign:"center",children:n("Add Liquidity")})})]})}):R?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsxs)(O.a,{gap:"sm",justify:"center",children:[Object(N.jsx)(l.vc,{textAlign:"center",children:n("No pool found.")}),Object(N.jsx)(m.a,{to:"/add/".concat(Object(T.a)(w),"/").concat(Object(T.a)(X)),children:n("Create pool.")})]})}):P===v.a.INVALID?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsx)(l.vc,{textAlign:"center",fontWeight:500,children:n("Invalid pair.")})})}):P===v.a.LOADING?Object(N.jsx)(b.b,{padding:"45px 10px",children:Object(N.jsx)(O.a,{gap:"sm",justify:"center",children:Object(N.jsxs)(l.vc,{textAlign:"center",children:[n("Loading"),Object(N.jsx)(I.a,{})]})})}):null:Y]})]})})}},921:function(e,t,n){"use strict";var c,o=n(8),i=n(92),r=n(6),j=Object(r.e)(i.a)(c||(c=Object(o.a)(["\n  text-decoration: none;\n  cursor: pointer;\n  color: ",";\n  font-weight: 500;\n\n  :hover {\n    text-decoration: underline;\n  }\n\n  :focus {\n    outline: none;\n    text-decoration: underline;\n  }\n\n  :active {\n    text-decoration: none;\n  }\n"])),(function(e){return e.theme.colors.primary}));t.a=j}}]);
//# sourceMappingURL=31.3df528d1.chunk.js.map