(this["webpackJsonppancake-frontend"]=this["webpackJsonppancake-frontend"]||[]).push([[11],{1034:function(e,t,n){var c=n(505);e.exports=function(e,t){var n=-1,r=e.length,a=r-1;for(t=void 0===t?r:t;++n<t;){var i=c(n,a),o=e[i];e[i]=e[n],e[n]=o}return e.length=t,e}},1304:function(e,t,n){var c=n(1305),r=n(1306),a=n(108);e.exports=function(e){return(a(e)?c:r)(e)}},1305:function(e,t,n){var c=n(512),r=n(1034);e.exports=function(e){return r(c(e))}},1306:function(e,t,n){var c=n(1034),r=n(506);e.exports=function(e){return c(r(e))}},1553:function(e,t,n){"use strict";n.r(t);var c,r,a,i=n(0),o=n(44),s=n(76),u=n(190),l=n(246),b=n(375),d=n(863),j=n(107),f=n(791),p=n(8),O=n(6),m=n(2),h=n(14),x=n(3),v=n.n(x),g=n(11),y=n(9),S=n(5),k=n(43),C=n(150),w=Object(C.parseUnits)("1"),I=Object(C.parseUnits)("0.5"),A=["sleepy","dollop","twinkle","churro","sunny"],E=n(1),D=w.add(I),N=D.mul(5),T={isInitialized:!1,currentStep:0,teamId:null,selectedNft:{collectionAddress:null,tokenId:null},userName:"",minimumCakeRequired:D,allowance:N},M=function(e,t){switch(t.type){case"initialize":return Object(S.a)(Object(S.a)({},e),{},{isInitialized:!0,currentStep:t.step});case"next_step":return Object(S.a)(Object(S.a)({},e),{},{currentStep:e.currentStep+1});case"set_team":return Object(S.a)(Object(S.a)({},e),{},{teamId:t.teamId});case"set_selected_nft":return Object(S.a)(Object(S.a)({},e),{},{selectedNft:{tokenId:t.tokenId,collectionAddress:t.collectionAddress}});case"set_username":return Object(S.a)(Object(S.a)({},e),{},{userName:t.userName});default:return e}},P=Object(i.createContext)(null),z=function(e){var t=e.children,n=Object(i.useReducer)(M,T),c=Object(y.a)(n,2),r=c[0],a=c[1],s=Object(o.c)().account;Object(i.useEffect)((function(){var e=!0;return s&&function(){var t=Object(g.a)(v.a.mark((function t(){var n,c;return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=Object(k.c)(),t.next=3,n.canMint(s);case 3:c=t.sent,a({type:"initialize",step:c?0:1}),e&&a({type:"initialize",step:c?0:1});case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){e=!1}}),[s,a]);var u=Object(i.useMemo)((function(){return{nextStep:function(){return a({type:"next_step"})},setTeamId:function(e){return a({type:"set_team",teamId:e})},setSelectedNft:function(e,t){return a({type:"set_selected_nft",tokenId:e,collectionAddress:t})},setUserName:function(e){return a({type:"set_username",userName:e})}}}),[a]);return Object(E.jsx)(P.Provider,{value:Object(S.a)(Object(S.a)({},r),{},{actions:u}),children:t})},_=O.e.div(c||(c=Object(p.a)(["\n  border-bottom: 2px solid ",";\n  margin-top: 32px;\n  margin-bottom: 24px;\n  padding-bottom: 24px;\n"])),(function(e){return e.theme.colors.textSubtle})),L=["Get Starter Collectible","Set Profile Picture","Join Team","Set Name"],R=function(){var e=Object(h.b)().t,t=Object(i.useContext)(P).currentStep;return Object(E.jsxs)(_,{children:[Object(E.jsx)(m.cb,{as:"h1",scale:"xxl",color:"secondary",mb:"8px",id:"profile-setup-title",children:e("Profile Setup")}),Object(E.jsx)(m.cb,{as:"h2",scale:"lg",mb:"8px",children:e("Show off your stats and collectibles with your unique profile")}),Object(E.jsx)(m.vc,{color:"textSubtle",mb:"8px",children:e("Total cost: 1.5 CAKE")}),Object(E.jsx)(m.lb,{href:"".concat(j.b,"/profile"),children:Object(E.jsx)(m.t,{mb:"24px",scale:"sm",variant:"secondary",children:e("Back to profile")})}),Object(E.jsx)(m.p,{children:L.map((function(n,c){return Object(E.jsx)(m.vc,{color:c<=t?"text":"textDisabled",children:e(n)},n)}))})]})},F=n(101),q=function(){var e=Object(h.b)().t;return Object(E.jsxs)("div",{children:[Object(E.jsx)(m.cb,{scale:"xl",mb:"8px",children:e("Oops!")}),Object(E.jsx)(m.vc,{as:"p",mb:"16px",children:e("Please connect your wallet to continue")}),Object(E.jsx)(F.a,{})]})},U=n(804),W=n(45),Y=n(134),X=n(132),J=n(811),K=n(98),G=n(72),H=n(370),Q=n(85),B=n(864),Z=function(e){return Object(E.jsx)(m.t,Object(S.a)({endIcon:Object(E.jsx)(m.f,{color:"currentColor"})},e))},V=function(){return Object(i.useContext)(P)},$=function(){var e=Object(i.useState)(""),t=Object(y.a)(e,2),n=t[0],c=t[1],r=Object(i.useState)([]),a=Object(y.a)(r,2),s=a[0],u=a[1],l=V(),b=l.actions,d=l.minimumCakeRequired,p=l.allowance,O=Object(f.e)(),x=Object(K.a)().toastSuccess,k=Object(G.b)(),I=Object(o.c)().account,D=Object(W.d)(),N=Object(W.b)(),T=Object(h.b)().t,M=Object(Y.e)(),P=M.balance,z=M.fetchStatus===Y.a.SUCCESS&&P.gte(w),_=Object(X.a)().callWithGasPrice;Object(i.useEffect)((function(){var e=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Q.n)(j.c);case 2:t=e.sent,n=t.data,c=A.map((function(e){if(n&&n[e])return Object(S.a)(Object(S.a)({},n[e]),{},{bunnyId:e})})),u(c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();0===s.length&&e()}),[s]);var L=Object(U.a)({onRequiresApproval:function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.allowance(I,N.address);case 3:return t=e.sent,e.abrupt("return",t.gte(d));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),onApprove:function(){return _(D,"approve",[N.address,p.toString()])},onConfirm:function(){return _(N,"mintNFT",[n])},onApproveSuccess:function(){x("Enabled","Press 'confirm' to mint this NFT")},onSuccess:function(){x("Success","You have minted your starter NFT"),k(Object(H.h)({account:I,collections:O})),b.nextStep()}}),R=L.isApproving,F=L.isApproved,q=L.isConfirmed,$=L.isConfirming,ee=L.handleApprove,te=L.handleConfirm;return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m.vc,{fontSize:"20px",color:"textSubtle",bold:!0,children:T("Step %num%",{num:1})}),Object(E.jsx)(m.cb,{as:"h3",scale:"xl",mb:"24px",children:T("Get Starter Collectible")}),Object(E.jsx)(m.vc,{as:"p",children:T("Every profile starts by making a \u201cstarter\u201d collectible (NFT).")}),Object(E.jsx)(m.vc,{as:"p",children:T("This starter will also become your first profile picture.")}),Object(E.jsx)(m.vc,{as:"p",mb:"24px",children:T("You can change your profile pic later if you get another approved Pancake Collectible.")}),Object(E.jsx)(m.y,{mb:"24px",children:Object(E.jsxs)(m.z,{children:[Object(E.jsx)(m.cb,{as:"h4",scale:"lg",mb:"8px",children:T("Choose your Starter!")}),Object(E.jsx)(m.vc,{as:"p",color:"textSubtle",children:T("Choose wisely: you can only ever make one starter collectible!")}),Object(E.jsx)(m.vc,{as:"p",mb:"24px",color:"textSubtle",children:T("Cost: %num% CAKE",{num:Object(C.formatUnits)(w)})}),s.map((function(e){return Object(E.jsx)(B.a,{name:"mintStarter",value:null===e||void 0===e?void 0:e.bunnyId,image:null===e||void 0===e?void 0:e.image.thumbnail,isChecked:n===(null===e||void 0===e?void 0:e.bunnyId),onChange:function(e){return c(e)},disabled:R||$||q||!z,children:Object(E.jsx)(m.vc,{bold:!0,children:null===e||void 0===e?void 0:e.name})},null===e||void 0===e?void 0:e.name)})),!z&&Object(E.jsx)(m.vc,{color:"failure",mb:"16px",children:T("A minimum of %num% CAKE is required",{num:Object(C.formatUnits)(w)})}),Object(E.jsx)(J.b,{isApproveDisabled:null===n||q||$||F,isApproving:R,isConfirmDisabled:!F||q||!z,isConfirming:$,onApprove:ee,onConfirm:te})]})}),Object(E.jsx)(Z,{onClick:b.nextStep,disabled:!q,children:T("Next Step")})]})},ee=n(92),te=n(37),ne=n(94),ce=Object(O.e)(ee.a)(r||(r=Object(p.a)(["\n  color: ",";\n"])),(function(e){return e.theme.colors.primary})),re=O.e.div(a||(a=Object(p.a)(["\n  margin-bottom: 24px;\n"]))),ae=function(){var e=Object(o.c)(),t=e.library,n=e.account,c=Object(i.useState)(!1),r=Object(y.a)(c,2),a=r[0],s=r[1],u=Object(i.useState)(!1),l=Object(y.a)(u,2),b=l[0],p=l[1],O=Object(i.useContext)(P),x=O.selectedNft,S=O.actions,C=Object(f.h)(),w=C.nfts,I=C.userNftsInitializationState;Object(d.a)(n);var A=Object(h.b)().t,D=Object(K.a)(),N=D.toastError,T=D.toastSuccess,M=Object(X.a)().callWithGasPrice,z=function(){var e=Object(g.a)(v.a.mark((function e(){var n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(k.m)(x.collectionAddress,t.getSigner()),e.next=3,M(n,"approve",[Object(te.q)(),x.tokenId]);case 3:return c=e.sent,p(!0),e.next=7,c.wait();case 7:e.sent.status?(T(A("Enabled"),A("Please progress to the next step.")),p(!1),s(!0)):(N(A("Error"),A("Please try again. Confirm the transaction and make sure you are paying enough gas!")),p(!1));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return 0===w.length&&I===ne.d.INITIALIZED?Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m.cb,{scale:"xl",mb:"24px",children:A("Oops!")}),Object(E.jsx)(m.vc,{bold:!0,fontSize:"20px",mb:"24px",children:A("We couldn\u2019t find any Pancake Collectibles in your wallet.")}),Object(E.jsx)(m.vc,{as:"p",children:A("You need a Pancake Collectible to finish setting up your profile. If you sold or transferred your starter collectible to another wallet, you\u2019ll need to get it back or acquire a new one somehow. You can\u2019t make a new starter with this wallet address.")})]}):Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m.vc,{fontSize:"20px",color:"textSubtle",bold:!0,children:A("Step %num%",{num:2})}),Object(E.jsx)(m.cb,{as:"h3",scale:"xl",mb:"24px",children:A("Set Profile Picture")}),Object(E.jsx)(m.y,{mb:"24px",children:Object(E.jsxs)(m.z,{children:[Object(E.jsx)(m.cb,{as:"h4",scale:"lg",mb:"8px",children:A("Choose collectible")}),Object(E.jsx)(m.vc,{as:"p",color:"textSubtle",children:A("Choose a profile picture from the eligible collectibles (NFT) in your wallet, shown below.")}),Object(E.jsxs)(m.vc,{as:"p",color:"textSubtle",mb:"24px",children:[A("Only approved Pancake Collectibles can be used."),Object(E.jsx)(ce,{to:"".concat(j.b,"/collections"),style:{marginLeft:"4px"},children:A("See the list >")})]}),Object(E.jsx)(re,{children:w.map((function(e){var t=w[0].tokenId;return Object(E.jsx)(B.a,{name:"profilePicture",value:t,image:e.image.thumbnail,isChecked:t===x.tokenId,onChange:function(t){return S.setSelectedNft(t,e.collectionAddress)},children:Object(E.jsx)(m.vc,{bold:!0,children:e.name})},e.tokenId)}))}),Object(E.jsx)(m.cb,{as:"h4",scale:"lg",mb:"8px",children:A("Allow collectible to be locked")}),Object(E.jsx)(m.vc,{as:"p",color:"textSubtle",mb:"16px",children:A("The collectible you've chosen will be locked in a smart contract while it\u2019s being used as your profile picture. Don't worry - you'll be able to get it back at any time.")}),Object(E.jsx)(m.t,{isLoading:b,disabled:a||b||null===x.tokenId,onClick:z,endIcon:b?Object(E.jsx)(m.i,{spin:!0,color:"currentColor"}):void 0,id:"approveStarterCollectible",children:A("Enable")})]})}),Object(E.jsx)(Z,{onClick:S.nextStep,disabled:null===x.tokenId||!a||b,children:A("Next Step")})]})},ie=n(1304),oe=n.n(ie),se=n(855),ue=function(){var e=V(),t=e.teamId,n=e.actions,c=Object(h.b)().t,r=Object(se.b)().teams,a=function(e){return n.setTeamId(parseInt(e,10))},o=Object(i.useMemo)((function(){return oe()(Object.values(r))}),[r]);return Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m.vc,{fontSize:"20px",color:"textSubtle",bold:!0,children:c("Step %num%",{num:3})}),Object(E.jsx)(m.cb,{as:"h3",scale:"xl",mb:"24px",children:c("Join a Team")}),Object(E.jsx)(m.vc,{as:"p",mb:"24px",children:c("It won\u2019t be possible to undo the choice you make for the foreseeable future!")}),Object(E.jsx)(m.y,{mb:"24px",children:Object(E.jsxs)(m.z,{children:[Object(E.jsx)(m.cb,{as:"h4",scale:"lg",mb:"8px",children:c("Join a Team")}),Object(E.jsx)(m.vc,{as:"p",color:"textSubtle",mb:"24px",children:c("There\u2019s currently no big difference between teams, and no benefit of joining one team over another for now. So pick whichever one you like!")}),o&&o.map((function(e){return Object(E.jsxs)(B.a,{name:"teams-selection",value:e.id,isChecked:t===e.id,image:"/images/teams/".concat(e.images.md),onChange:a,disabled:!e.isJoinable,children:[Object(E.jsx)(m.vc,{bold:!0,children:e.name}),Object(E.jsxs)(m.ab,{children:[Object(E.jsx)(m.R,{mr:"8px"}),Object(E.jsx)(m.vc,{children:e.users.toLocaleString()})]})]},e.name)}))]})}),Object(E.jsx)(Z,{onClick:n.nextStep,disabled:null===t,children:c("Next Step")})]})},le=n(892),be=n(21),de=n(518),je=n(17),fe=n(519),pe=n(520);function Oe(e){Object(je.a)(1,arguments);var t=Object(be.default)(e);return Object(fe.default)(t).getTime()===Object(pe.default)(t).getTime()}function me(e,t){Object(je.a)(2,arguments);var n,c=Object(be.default)(e),r=Object(be.default)(t),a=Object(le.a)(c,r),i=Math.abs(Object(de.default)(c,r));if(i<1)n=0;else{1===c.getMonth()&&c.getDate()>27&&c.setDate(30),c.setMonth(c.getMonth()-a*i);var o=Object(le.a)(c,r)===-a;Oe(Object(be.default)(e))&&1===i&&1===Object(le.a)(e,r)&&(o=!1),n=a*(i-Number(o))}return 0===n?0:n}var he=n(975),xe=n(268),ve=n(935),ge=n(143),ye=1440,Se=43200;function ke(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};Object(je.a)(2,arguments);var c=n.locale||xe.a;if(!c.formatDistance)throw new RangeError("locale must contain formatDistance property");var r=Object(le.a)(e,t);if(isNaN(r))throw new RangeError("Invalid time value");var a,i,o=Object(ve.a)(n);o.addSuffix=Boolean(n.addSuffix),o.comparison=r,r>0?(a=Object(be.default)(t),i=Object(be.default)(e)):(a=Object(be.default)(e),i=Object(be.default)(t));var s,u=Object(he.a)(i,a),l=(Object(ge.a)(i)-Object(ge.a)(a))/1e3,b=Math.round((u-l)/60);if(b<2)return n.includeSeconds?u<5?c.formatDistance("lessThanXSeconds",5,o):u<10?c.formatDistance("lessThanXSeconds",10,o):u<20?c.formatDistance("lessThanXSeconds",20,o):u<40?c.formatDistance("halfAMinute",null,o):u<60?c.formatDistance("lessThanXMinutes",1,o):c.formatDistance("xMinutes",1,o):0===b?c.formatDistance("lessThanXMinutes",1,o):c.formatDistance("xMinutes",b,o);if(b<45)return c.formatDistance("xMinutes",b,o);if(b<90)return c.formatDistance("aboutXHours",1,o);if(b<ye){var d=Math.round(b/60);return c.formatDistance("aboutXHours",d,o)}if(b<2520)return c.formatDistance("xDays",1,o);if(b<Se){var j=Math.round(b/ye);return c.formatDistance("xDays",j,o)}if(b<86400)return s=Math.round(b/Se),c.formatDistance("aboutXMonths",s,o);if((s=me(i,a))<12){var f=Math.round(b/Se);return c.formatDistance("xMonths",f,o)}var p=s%12,O=Math.floor(s/12);return p<3?c.formatDistance("aboutXYears",O,o):p<9?c.formatDistance("overXYears",O,o):c.formatDistance("almostXYears",O+1,o)}var Ce,we,Ie,Ae,Ee=n(752),De=n(66),Ne=n(199),Te=n(22),Me=n(220),Pe=n.n(Me),ze=n(126),_e=n(103),Le=function(e){var t=e.account,n=e.teamId,c=e.selectedNft,r=e.minimumCakeRequired,a=e.allowance,i=e.onDismiss,o=Object(h.b)().t,s=Object(W.t)(),u=Object(G.b)(),l=Object(K.a)().toastSuccess,b=Object(W.d)(),d=Object(X.a)().callWithGasPrice,j=Object(U.a)({onRequiresApproval:function(){var e=Object(g.a)(v.a.mark((function e(){var n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.allowance(t,s.address);case 3:return n=e.sent,e.abrupt("return",n.gte(r));case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),onApprove:function(){return d(b,"approve",[s.address,a.toJSON()])},onConfirm:function(){return d(s,"createProfile",[n,c.collectionAddress,c.tokenId])},onSuccess:function(){var e=Object(g.a)(v.a.mark((function e(n){var c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=n.receipt,e.next=3,u(Object(ze.c)(t));case 3:i(),l(o("Profile created!"),Object(E.jsx)(_e.b,{txHash:c.transactionHash}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}),f=j.isApproving,p=j.isApproved,O=j.isConfirmed,x=j.isConfirming,y=j.handleApprove,S=j.handleConfirm;return Object(E.jsxs)(m.zb,{title:o("Complete Profile"),onDismiss:i,children:[Object(E.jsx)(m.vc,{color:"textSubtle",mb:"8px",children:o("Submitting NFT to contract and confirming User Name and Team.")}),Object(E.jsxs)(m.ab,{justifyContent:"space-between",mb:"16px",children:[Object(E.jsx)(m.vc,{children:o("Cost")}),Object(E.jsx)(m.vc,{children:o("%num% CAKE",{num:Object(C.formatUnits)(I)})})]}),Object(E.jsx)(J.b,{isApproveDisabled:O||x||p,isApproving:f,isConfirmDisabled:!p||O,isConfirming:x,onApprove:y,onConfirm:S})]})};!function(e){e.IDLE="idle",e.CREATED="created",e.NEW="new"}(Ae||(Ae={}));var Re=O.e.div(Ce||(Ce=Object(p.a)(["\n  position: relative;\n  max-width: 240px;\n"]))),Fe=Object(O.e)(m.ib)(we||(we=Object(p.a)(["\n  padding-right: 40px;\n"]))),qe=Object(O.e)(m.ab)(Ie||(Ie=Object(p.a)(["\n  align-items: center;\n  height: 24px;\n  justify-content: center;\n  margin-top: -12px;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  width: 24px;\n"]))),Ue=function(){var e=Object(i.useState)(!1),t=Object(y.a)(e,2),n=t[0],c=t[1],r=V(),a=r.teamId,s=r.selectedNft,u=r.userName,l=r.actions,b=r.minimumCakeRequired,d=r.allowance,j=Object(h.b)().t,f=Object(o.c)().account,p=Object(K.a)().toastError,O=Object(Te.a)().library,x=Object(i.useState)(Ae.IDLE),S=Object(y.a)(x,2),k=S[0],w=S[1],A=Object(i.useState)(!1),D=Object(y.a)(A,2),N=D[0],T=D[1],M=Object(i.useState)(!1),P=Object(y.a)(M,2),z=P[0],_=P[1],L=Object(i.useState)(""),R=Object(y.a)(L,2),F=R[0],q=R[1],U=Object(Y.e)(),W=U.balance,X=U.fetchStatus===Y.a.SUCCESS&&W.gte(I),J=Object(m.Uc)(Object(E.jsx)(Le,{userName:u,selectedNft:s,account:f,teamId:a,minimumCakeRequired:b,allowance:d}),!1),G=Object(y.a)(J,1)[0],H=k===Ae.CREATED,Q=Pe()(function(){var e=Object(g.a)(v.a.mark((function e(t){var n,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,fetch("".concat(De.b,"/api/users/valid/").concat(t));case 4:if(!(n=e.sent).ok){e.next=10;break}T(!0),q(""),e.next=15;break;case 10:return e.next=12,n.json();case 12:r=e.sent,T(!1),q(null===r||void 0===r||null===(c=r.error)||void 0===c?void 0:c.message);case 15:return e.prev=15,_(!1),e.finish(15);case 18:case"end":return e.stop()}}),e,null,[[0,,15,18]])})));return function(t){return e.apply(this,arguments)}}(),200),B=function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,c,r;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,_(!0),e.next=4,Object(Ne.c)(O,f,u);case 4:return t=e.sent,e.next=7,fetch("".concat(De.b,"/api/users/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({address:f,username:u,signature:t})});case 7:if(!(n=e.sent).ok){e.next=12;break}w(Ae.CREATED),e.next=16;break;case 12:return e.next=14,n.json();case 14:r=e.sent,p(j("Error"),null===r||void 0===r||null===(c=r.error)||void 0===c?void 0:c.message);case 16:e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),p((null===e.t0||void 0===e.t0?void 0:e.t0.message)?e.t0.message:JSON.stringify(e.t0));case 21:return e.prev=21,_(!1),e.finish(21);case 24:case"end":return e.stop()}}),e,null,[[0,18,21,24]])})));return function(){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){f&&function(){var e=Object(g.a)(v.a.mark((function e(){var t,n,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(De.b,"/api/users/").concat(f));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,t.ok?(c=ke(Object(Ee.default)(n.created_at),new Date),q(j("Created %dateCreated% ago",{dateCreated:c})),l.setUserName(n.username),w(Ae.CREATED),T(!0)):w(Ae.NEW),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),p(j("Error"),j("Unable to verify username"));case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}()()}),[f,w,T,q,l,p,j]),Object(E.jsxs)(E.Fragment,{children:[Object(E.jsx)(m.vc,{fontSize:"20px",color:"textSubtle",bold:!0,children:j("Step %num%",{num:4})}),Object(E.jsx)(m.cb,{as:"h3",scale:"xl",mb:"24px",children:j("Set Your Name")}),Object(E.jsx)(m.vc,{as:"p",mb:"24px",children:j("This name will be shown in team leaderboards and search results as long as your profile is active.")}),Object(E.jsx)(m.y,{mb:"24px",children:Object(E.jsxs)(m.z,{children:[Object(E.jsx)(m.cb,{as:"h4",scale:"lg",mb:"8px",children:j("Set Your Name")}),Object(E.jsx)(m.vc,{as:"p",color:"textSubtle",mb:"24px",children:j("Your name must be at least 3 and at most 15 standard letters and numbers long. You can\u2019t change this once you click Confirm.")}),k===Ae.IDLE?Object(E.jsx)(m.bc,{height:"40px",width:"240px"}):Object(E.jsxs)(Re,{children:[Object(E.jsx)(Fe,{onChange:function(e){var t=e.target.value;l.setUserName(t),Q(t)},isWarning:u&&!N,isSuccess:u&&N,minLength:3,maxLength:15,disabled:H,placeholder:j("Enter your name..."),value:u}),Object(E.jsxs)(qe,{children:[z&&Object(E.jsx)(m.i,{spin:!0}),!z&&N&&u&&Object(E.jsx)(m.J,{color:"success"}),!z&&!N&&u&&Object(E.jsx)(m.Nc,{color:"failure"})]})]}),Object(E.jsx)(m.vc,{color:"textSubtle",fontSize:"14px",py:"4px",mb:"16px",style:{minHeight:"30px"},children:F}),Object(E.jsx)(m.vc,{as:"p",color:"failure",mb:"8px",children:j("Only reuse a name from other social media if you're OK with people viewing your wallet. You can't change your name once you click Confirm.")}),Object(E.jsx)("label",{htmlFor:"checkbox",style:{display:"block",cursor:"pointer",marginBottom:"24px"},children:Object(E.jsxs)(m.ab,{alignItems:"center",children:[Object(E.jsx)("div",{style:{flex:"none"},children:Object(E.jsx)(m.G,{id:"checkbox",scale:"sm",checked:n,onChange:function(){return c(!n)}})}),Object(E.jsx)(m.vc,{ml:"8px",children:j("I understand that people can view my wallet if they know my username")})]})}),Object(E.jsx)(m.t,{onClick:B,disabled:!N||H||z||!n,children:j("Confirm")})]})}),Object(E.jsx)(m.t,{onClick:G,disabled:!N||!H,id:"completeProfileCreation",children:j("Complete Profile")}),!X&&Object(E.jsx)(m.vc,{color:"failure",mt:"16px",children:j("A minimum of %num% CAKE is required",{num:Object(C.formatUnits)(I)})})]})},We=function(){var e=Object(h.b)().t,t=Object(i.useContext)(P),n=t.isInitialized,c=t.currentStep;return Object(o.c)().account?n?0===c?Object(E.jsx)($,{}):1===c?Object(E.jsx)(ae,{}):2===c?Object(E.jsx)(ue,{}):3===c?Object(E.jsx)(Ue,{}):null:Object(E.jsx)("div",{children:e("Loading...")}):Object(E.jsx)(q,{})};t.default=function(){var e=Object(o.c)().account,t=Object(l.d)(),n=t.isInitialized,c=t.isLoading,r=t.hasProfile;return Object(d.a)(e),Object(f.b)(),!n||c?Object(E.jsx)(b.a,{}):e&&r?Object(E.jsx)(s.a,{to:"".concat(j.b,"/profile/").concat(e.toLowerCase())}):Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(z,{children:Object(E.jsxs)(u.b,{children:[Object(E.jsx)(R,{}),Object(E.jsx)(We,{})]})})})}},791:function(e,t,n){"use strict";n.d(t,"b",(function(){return u})),n.d(t,"a",(function(){return l})),n.d(t,"e",(function(){return b})),n.d(t,"d",(function(){return d})),n.d(t,"g",(function(){return j})),n.d(t,"c",(function(){return f})),n.d(t,"f",(function(){return p})),n.d(t,"h",(function(){return O}));var c=n(0),r=n(28),a=n(72),i=n(107),o=n(38),s=(n(125),n(370)),u=function(){var e=Object(a.b)();Object(c.useEffect)((function(){e(Object(s.d)()),e(Object(s.f)(i.c))}),[e])},l=function(e){var t=Object(a.b)(),n=Object(r.c)((function(e){return e.nftMarket.data.isFetchingMoreNfts})),i=Object(r.c)((function(e){return e.nftMarket.data.latestFetchAt})),o=f(e),u=o?o.map((function(e){return e.tokenId})):[],l=o.length>0?o[0]:null,b=Object(c.useMemo)((function(){return l?{name:l.name,description:l.description,collection:{name:l.collectionName},image:l.image}:null}),[l]);return{isFetchingMoreNfts:n,latestFetchAt:i,fetchMorePancakeBunnies:function(n){t(Object(s.e)({bunnyId:e,existingTokenIds:u,existingMetadata:b,orderDirection:n}))}}},b=function(){return Object(r.c)((function(e){return e.nftMarket.data.collections}))},d=function(e){var t=Object(o.i)(e)||"";return b()[t]},j=function(e){var t=Object(o.i)(e)||"";return Object(r.c)((function(e){return e.nftMarket.data.nfts[t]}))},f=function(e){var t=Object(r.c)((function(e){return e.nftMarket.data.nfts[i.c]}));return t?t.filter((function(t){return t.attributes[0].value===e&&t.marketData.isTradable})):[]},p=function(){return Object(r.c)((function(e){return e.nftMarket.initializationState}))},O=function(){return Object(r.c)((function(e){return e.nftMarket.data.user}))}},804:function(e,t,n){"use strict";var c=n(3),r=n.n(c),a=n(11),i=n(9),o=n(5),s=n(0),u=n(102),l=n(44),b=n(98),d=n(14),j={approvalState:"idle",confirmState:"idle"},f=function(e,t){switch(t.type){case"requires_approval":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"success"});case"approve_sending":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"loading"});case"approve_receipt":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"success"});case"approve_error":return Object(o.a)(Object(o.a)({},e),{},{approvalState:"fail"});case"confirm_sending":return Object(o.a)(Object(o.a)({},e),{},{confirmState:"loading"});case"confirm_receipt":return Object(o.a)(Object(o.a)({},e),{},{confirmState:"success"});case"confirm_error":return Object(o.a)(Object(o.a)({},e),{},{confirmState:"fail"});default:return e}};t.a=function(e){var t=e.onApprove,n=e.onConfirm,c=e.onRequiresApproval,o=e.onSuccess,p=void 0===o?u.noop:o,O=e.onApproveSuccess,m=void 0===O?u.noop:O,h=Object(d.b)().t,x=Object(l.c)().account,v=Object(s.useReducer)(f,j),g=Object(i.a)(v,2),y=g[0],S=g[1],k=Object(s.useRef)(c),C=Object(b.a)().toastError;return Object(s.useEffect)((function(){x&&k.current&&k.current().then((function(e){e&&S({type:"requires_approval"})}))}),[x,k,S]),{isApproving:"loading"===y.approvalState,isApproved:"success"===y.approvalState,isConfirming:"loading"===y.confirmState,isConfirmed:"success"===y.confirmState,handleApprove:function(){var e=Object(a.a)(r.a.mark((function e(){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t();case 3:return n=e.sent,S({type:"approve_sending"}),e.next=7,n.wait();case 7:(c=e.sent).status&&(S({type:"approve_receipt"}),m({state:y,receipt:c})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),S({type:"approve_error"}),C(h("Error"),h("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}(),handleConfirm:function(){var e=Object(a.a)(r.a.mark((function e(){var t,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return S({type:"confirm_sending"}),e.prev=1,e.next=4,n();case 4:return t=e.sent,e.next=7,t.wait();case 7:(c=e.sent).status&&(S({type:"confirm_receipt"}),p({state:y,receipt:c})),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(1),S({type:"confirm_error"}),C(h("Error"),h("Please try again. Confirm the transaction and make sure you are paying enough gas!"));case 15:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(){return e.apply(this,arguments)}}()}}},811:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c,r,a,i,o,s=n(8),u=(n(0),n(6)),l=n(2),b=n(14),d=n(1);!function(e){e.ROW="row",e.SEQUENTIAL="sequential"}(o||(o={}));var j=u.e.div(c||(c=Object(s.a)(["\n  align-items: center;\n  display: grid;\n  grid-template-columns: 1fr;\n  justify-content: center;\n\n  "," {\n    grid-template-columns: 1fr 24px 1fr;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),f=Object(u.e)(l.t)(r||(r=Object(s.a)(["\n  width: 100%;\n\n  "," {\n    min-width: 160px;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),p={width:"24px",color:"textDisabled"},O=Object(u.e)(l.M).attrs(p)(a||(a=Object(s.a)(["\n  display: none;\n\n  "," {\n    display: block;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),m=Object(u.e)(l.K).attrs(p)(i||(i=Object(s.a)(["\n  display: block;\n\n  "," {\n    display: none;\n  }\n"])),(function(e){return e.theme.mediaQueries.md})),h=Object(d.jsx)(l.i,{spin:!0,color:"currentColor"});t.b=function(e){var t=e.isApproveDisabled,n=e.isApproving,c=e.isConfirming,r=e.isConfirmDisabled,a=e.onApprove,i=e.onConfirm,s=e.buttonArrangement,u=void 0===s?o.ROW:s,p=e.confirmLabel,x=e.confirmId,v=Object(b.b)().t,g=null!==p&&void 0!==p?p:v("Confirm");return u===o.ROW?Object(d.jsxs)(j,{children:[Object(d.jsx)(l.o,{children:Object(d.jsx)(f,{disabled:t,onClick:a,endIcon:n?h:void 0,isLoading:n,children:v(n?"Enabling":"Enable")})}),Object(d.jsxs)(l.ab,{justifyContent:"center",children:[Object(d.jsx)(O,{}),Object(d.jsx)(m,{})]}),Object(d.jsx)(l.o,{children:Object(d.jsx)(f,{id:x,onClick:i,disabled:r,isLoading:c,endIcon:c?h:void 0,children:c?v("Confirming"):g})})]}):Object(d.jsx)(d.Fragment,{children:t?Object(d.jsx)(l.o,{children:Object(d.jsx)(f,{id:x,onClick:i,disabled:r,isLoading:c,endIcon:c?h:void 0,children:c?v("Confirming"):g})}):Object(d.jsx)(l.o,{children:Object(d.jsx)(f,{onClick:a,endIcon:n?h:void 0,isLoading:n,children:v(n?"Enabling":"Enable")})})})}},843:function(e,t,n){var c=n(498),r=n(499),a=n(251),i=n(108),o=n(191),s=n(314),u=n(316),l=n(315),b=Object.prototype.hasOwnProperty;e.exports=function(e){if(null==e)return!0;if(o(e)&&(i(e)||"string"==typeof e||"function"==typeof e.splice||s(e)||l(e)||a(e)))return!e.length;var t=r(e);if("[object Map]"==t||"[object Set]"==t)return!e.size;if(u(e))return!c(e).length;for(var n in e)if(b.call(e,n))return!1;return!0}},855:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var c=n(0),r=n(28),a=n(72),i=n(177),o=function(e){var t=Object(r.c)((function(t){return t.teams.data[e]})),n=Object(a.b)();return Object(c.useEffect)((function(){n(Object(i.b)(e))}),[e,n]),t},s=function(){var e=Object(r.c)((function(e){return e.teams})),t=e.isInitialized,n=e.isLoading,o=e.data,s=Object(a.b)();return Object(c.useEffect)((function(){s(Object(i.c)())}),[s]),{teams:o,isInitialized:t,isLoading:n}}},863:function(e,t,n){"use strict";var c=n(0),r=n(843),a=n.n(r),i=n(72),o=n(370),s=n(791),u=n(178),l=n(246),b=n(94);t.a=function(e){var t,n=Object(i.b)(),r=Object(l.d)(),d=r.profile,j=r.isInitialized,f=r.isLoading,p=Object(s.h)().userNftsInitializationState,O=Object(s.e)(),m=null===d||void 0===d?void 0:d.tokenId,h=null===d||void 0===d||null===(t=d.tokenId)||void 0===t?void 0:t.toString(),x=null===d||void 0===d?void 0:d.collectionAddress,v=Object(c.useMemo)((function(){return m?{tokenId:h,collectionAddress:x,nftLocation:b.c.PROFILE}:null}),[h,x,m]),g=Object(u.a)(h),y=e&&p===b.d.UNINITIALIZED&&j&&!f,S=g!==h&&!f;Object(c.useEffect)((function(){!y&&!S||a()(O)||n(Object(o.h)({account:e,collections:O,profileNftWithCollectionAddress:v}))}),[n,e,y,S,h,O,v])}},864:function(e,t,n){"use strict";var c,r,a,i,o=n(5),s=n(53),u=n(8),l=(n(0),n(6)),b=n(2),d=n(1),j=["name","value","isChecked","image","onChange","disabled","children"],f=l.e.label(c||(c=Object(u.a)(["\n  cursor: ",";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: ",";\n"])),(function(e){return e.isDisabled?"not-allowed":"pointer"}),(function(e){return e.isDisabled?"0.6":"1"})),p=l.e.div(r||(r=Object(u.a)(["\n  align-items: center;\n  display: flex;\n  flex-grow: 1;\n  height: 80px;\n  padding: 8px 16px;\n"]))),O=l.e.div(a||(a=Object(u.a)(["\n  margin-left: 16px;\n"]))),m=l.e.div(i||(i=Object(u.a)(["\n  align-self: stretch;\n  background-image: url('","');\n  background-size: contain;\n  background-position: center;\n  background-repeat: no-repeat;\n  flex: none;\n  width: 80px;\n"])),(function(e){return e.src}));t.a=function(e){var t=e.name,n=e.value,c=e.isChecked,r=void 0!==c&&c,a=e.image,i=e.onChange,u=e.disabled,l=e.children,h=Object(s.a)(e,j);return Object(d.jsx)(b.y,Object(o.a)(Object(o.a)({isSuccess:r,isDisabled:u,mb:"16px"},h),{},{children:Object(d.jsxs)(f,{isDisabled:u,children:[Object(d.jsxs)(p,{children:[Object(d.jsx)(b.Wb,{name:t,checked:r,value:n,onChange:function(e){return i(e.target.value)},disabled:u,style:{flex:"none"}}),Object(d.jsx)(O,{children:l})]}),Object(d.jsx)(m,{src:a})]})}))}},877:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(21),r=n(17);function a(e,t){Object(r.a)(2,arguments);var n=Object(c.default)(e),a=Object(c.default)(t);return n.getTime()-a.getTime()}},892:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(21),r=n(17);function a(e,t){Object(r.a)(2,arguments);var n=Object(c.default)(e),a=Object(c.default)(t),i=n.getTime()-a.getTime();return i<0?-1:i>0?1:i}},935:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(397);function r(e){return Object(c.a)({},e)}},975:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(877),r=n(17);function a(e,t){Object(r.a)(2,arguments);var n=Object(c.a)(e,t)/1e3;return n>0?Math.floor(n):Math.ceil(n)}}}]);
//# sourceMappingURL=11.9cf898c1.chunk.js.map