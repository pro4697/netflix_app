(this.webpackJsonpnetflix_app=this.webpackJsonpnetflix_app||[]).push([[0],{41:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/netflix_logo.dd14e5ae.png"},49:function(e,t,a){e.exports=a(84)},56:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(42),c=a.n(i),o=a(5),l=a(2),s=a(13),u=a(11),p=a.n(u),m=a(16),d=a(17),v=a(18),g=a(20),_=a(19),f=a(14),h=a(15);function E(){var e=Object(f.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 100px);\n  grid-gap: 35px;\n  padding-top: 20px;\n  padding-right: 80px;\n  margin-bottom: 40px;\n  margin-left: 5px;\n  width: 100%;\n\n  @media screen and (max-width: 768px) {\n    display: inline-flex;\n    grid-gap: 0;\n    padding-left: 5px;\n    margin-bottom: 20px;\n    margin-left: 0;\n    white-space: nowrap;\n    overflow-x: auto;\n    -ms-overflow-style: none; /* IE and Edge */\n    scrollbar-width: none; /* Firefox */\n    &::-webkit-scrollbar {\n      display: none; /* Chrome, Safari, Opera*/\n    }\n  }\n"]);return E=function(){return e},e}function b(){var e=Object(f.a)(["\n  font-size: 16px;\n  letter-spacing: 2px;\n  padding-bottom: 5px;\n  margin: 25px;\n  font-weight: 600;\n  color: white;\n  border-bottom: 1px solid grey;\n"]);return b=function(){return e},e}function y(){var e=Object(f.a)(["\n  display: block;\n  margin-top: 25px;\n  width: 100%;\n"]);return y=function(){return e},e}var x=h.a.div(y()),k=h.a.span(b()),w=h.a.div(E()),N=function(e){var t=e.title,a=e.children;return r.a.createElement(x,null,r.a.createElement(k,null,t),r.a.createElement(w,null,a))},j=(a(56),a(6)),O=a(8);var R=function(){return r.a.createElement("div",{className:"nav__bottom"},r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(o.b,{to:"/"},r.a.createElement(j.a,{icon:O.b,className:"nav__icon"}))),r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(o.b,{to:"/tv"},r.a.createElement(j.a,{icon:O.f,className:"nav__icon"}))),r.a.createElement("div",{className:"nav__bottom__content"},r.a.createElement(o.b,{to:"/search"},r.a.createElement(j.a,{icon:O.c,className:"nav__icon"}))))};function T(){var e=Object(f.a)(["\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 300;\n  color: white;\n"]);return T=function(){return e},e}var C=h.a.div(T()),K=function(){return r.a.createElement(C,null,r.a.createElement(j.a,{icon:O.d,size:"3x",spin:!0}))};a(62);var L=function(e){var t=e.id,a=e.title,n=e.date,i=e.overview,c=e.poster,l=e.backdrop,s=e.vote,u=e.isTv;return r.a.createElement("div",{className:"movie"},r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{id:t,title:a,date:n,overview:i,poster:c,backdrop:l,vote:s,isTv:u}}},"https://image.tmdb.org/t/p/w500null"!==c?r.a.createElement("div",{className:"movie__poster",style:{backgroundImage:"url(".concat(c,")")}}):null,r.a.createElement("div",{className:"movie__data"},r.a.createElement("h3",{className:"movie__title"},a),r.a.createElement("div",{className:"movie__year"},n.split("-")[0]),r.a.createElement("div",{className:"movie__vote"},r.a.createElement(j.a,{icon:O.e,className:"movie__star"}),s))))};a(63);var P=function(e){var t=e.id,a=e.title,n=e.date,i=e.overview,c=e.poster,l=e.backdrop,s=e.vote;return r.a.createElement("div",{className:"panel__container"},"https://image.tmdb.org/t/p/w500null"!==l?r.a.createElement("div",{className:"panel__backdrop",style:{backgroundImage:"url(".concat(l,")")}}):null,r.a.createElement("div",{className:"panel__content"},"https://image.tmdb.org/t/p/w500null"!==c?r.a.createElement("div",{className:"panel__poster",style:{backgroundImage:"url(".concat(c,")")}}):null,r.a.createElement("div",{className:"panel__data"},r.a.createElement("div",{className:"panel__title"},a.slice(0,40)),r.a.createElement("div",{className:"panel__vote"},r.a.createElement(j.a,{icon:O.e,className:"panel__star"}),r.a.createElement("span",null," ",s," / 10")),r.a.createElement("div",{className:"panel__overview"},i.slice(0,50),"..."),r.a.createElement(o.b,{to:{pathname:"/movie-detail",state:{id:t,title:a,date:n,overview:i,poster:c,backdrop:l,vote:s}}},r.a.createElement("div",{className:"panel__button"},"View Detail")))))},I="https://image.tmdb.org/t/p/w500",z=function(e){return e.map((function(e){return r.a.createElement(L,{key:e.id,id:e.id,title:e.title||e.name,date:e.release_date||e.first_air_date,overview:e.overview,poster:I+e.poster_path,backdrop:I+e.backdrop_path,vote:e.vote_average,isTv:!e.title})}))},S=function(e){return e.map((function(e){return r.a.createElement(P,{key:e.id,id:e.id,title:e.title,date:e.release_date,overview:e.overview,poster:I+e.poster_path,backdrop:I+e.backdrop_path,vote:e.vote_average})}))},D=function(e,t){for(var a=0;a<e.length;a++)e[a].overview.length<10&&(e[a].overview=t[a].overview)},A=function(e){var t=e.split("-");return"".concat(t[0],". ").concat(t[1],". ").concat(t[2],".")},M=a(4),W=a.n(M),B="https://api.themoviedb.org/3",J="aef59e66e0a35709a7f0c493826379b3",U=function(){return W.a.get("".concat(B,"/movie/now_playing?api_key=").concat(J,"&language=ko-KR"))},F=function(){return W.a.get("".concat(B,"/movie/now_playing?api_key=").concat(J))},V=function(){return W.a.get("".concat(B,"/movie/upcoming?api_key=").concat(J,"&language=ko-KR"))},X=function(){return W.a.get("".concat(B,"/movie/upcoming?api_key=").concat(J))},q=function(){return W.a.get("".concat(B,"/movie/popular?api_key=").concat(J,"&language=ko-KR"))},G=function(){return W.a.get("".concat(B,"/movie/popular?api_key=").concat(J))},H=function(){return W.a.get("".concat(B,"/movie/top_rated?api_key=").concat(J,"&language=ko-KR"))},Q=function(){return W.a.get("".concat(B,"/movie/top_rated?api_key=").concat(J))},Y=function(e){return W.a.get("".concat(B,"/movie/").concat(e,"?api_key=").concat(J,"&language=ko-KR"))},Z=function(e){return W.a.get("".concat(B,"/movie/").concat(e,"/videos?api_key=").concat(J,"&append_to_response=videos"))},$=function(){return W.a.get("".concat(B,"/tv/airing_today?api_key=").concat(J,"&language=ko-KR"))},ee=function(){return W.a.get("".concat(B,"/tv/on_the_air?api_key=").concat(J,"&language=ko-KR"))},te=function(){return W.a.get("".concat(B,"/tv/top_rated?api_key=").concat(J,"&language=ko-KR"))},ae=function(){return W.a.get("".concat(B,"/tv/popular?api_key=").concat(J,"&language=ko-KR"))},ne=function(e){return W.a.get("".concat(B,"/tv/").concat(e,"?api_key=").concat(J,"&language=ko-KR"))},re=function(e){return W.a.get("".concat(B,"/tv/").concat(e,"/videos?api_key=").concat(J,"&append_to_response=videos"))},ie=(a(80),function(e){Object(g.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,today:[],thisWeek:[],topRated:[],popular:[]},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,a,n,r,i,c,o,l;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$();case 2:return t=e.sent,a=t.data.results,e.next=6,ee();case 6:return n=e.sent,r=n.data.results,e.next=10,te();case 10:return i=e.sent,c=i.data.results,e.next=14,ae();case 14:o=e.sent,l=o.data.results,this.setState({today:a,topRated:c,thisWeek:r,popular:l,isLoading:!1});case 17:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.today,n=e.thisWeek,i=e.topRated,c=e.popular;return t?r.a.createElement(K,null):r.a.createElement(s.b.div,{className:"tv__container",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},a&&a.length>0&&r.a.createElement(N,{title:"Today"},z(a)),n&&n.length>0&&r.a.createElement(N,{title:"ThisWeek"},z(n)),i&&i.length>0&&r.a.createElement(N,{title:"TopRated"},z(i)),c&&c.length>0&&r.a.createElement(N,{title:"Popular"},z(c)),r.a.createElement(R,null))}}]),a}(r.a.Component)),ce=a(48),oe=a(31),le=(a(41),[new oe.b,new oe.a(2600,"NEXT")]),se=function(e){Object(g.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,nowPlaying:[],topRated:[],popular:[],upComing:[]},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,a,n,r,i,c,o,l,s,u,m,d,v,g,_,f;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:return t=e.sent,a=t.data.results,e.next=6,F();case 6:return n=e.sent,r=n.data.results,D(a,r),e.next=11,H();case 11:return i=e.sent,c=i.data.results,e.next=15,Q();case 15:return o=e.sent,l=o.data.results,D(c,l),e.next=20,q();case 20:return s=e.sent,u=s.data.results,e.next=24,G();case 24:return m=e.sent,d=m.data.results,D(u,d),e.next=29,V();case 29:return v=e.sent,g=v.data.results,e.next=33,X();case 33:_=e.sent,f=_.data.results,D(g,f),this.setState({nowPlaying:a,topRated:c,upComing:g,popular:u,isLoading:!1});case 37:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.nowPlaying,n=e.topRated,i=e.popular,c=e.upComing;return t?r.a.createElement(K,null):r.a.createElement(s.b.div,{className:"container",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},a&&a.length>0&&r.a.createElement(ce.a,{className:"flicking",circular:!0,zIndex:0,duration:400,collectStatistics:!1,plugins:le},S(a)),i&&i.length>0&&r.a.createElement(N,{title:"Popular"},z(i)),n&&n.length>0&&r.a.createElement(N,{title:"Top Rated"},z(n)),c&&c.length>0&&r.a.createElement(N,{title:"UpComing"},z(c)),r.a.createElement(R,null))}}]),a}(r.a.Component),ue=function(e){Object(g.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isLoading:!0,nowPlaying:[],topRated:[],upComing:[]},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,a,n,r,i,c,o,l,s,u,m,d;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,U();case 2:return t=e.sent,a=t.data.results,e.next=6,F();case 6:return n=e.sent,r=n.data.results,D(a,r),e.next=11,H();case 11:return i=e.sent,c=i.data.results,e.next=15,Q();case 15:return o=e.sent,l=o.data.results,D(c,l),e.next=20,V();case 20:return s=e.sent,u=s.data.results,e.next=24,X();case 24:m=e.sent,d=m.data.results,D(u,d),this.setState({nowPlaying:a,topRated:c,upComing:u,isLoading:!1});case 28:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.nowPlaying,n=e.topRated,i=e.upComing;return t?r.a.createElement(K,null):r.a.createElement(s.b.div,{className:"container",initial:{opacity:0},animate:{opacity:1},exit:{opacity:0}},a&&a.length>0&&r.a.createElement(N,{title:"Now Playing"},z(a)),n&&n.length>0&&r.a.createElement(N,{title:"Top Rated"},z(n)),i&&i.length>0&&r.a.createElement(N,{title:"UpComing"},z(i)),r.a.createElement(R,null))}}]),a}(r.a.Component),pe=(a(81),a(46)),me=a.n(pe);var de=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"nav__top"},r.a.createElement(o.b,{to:"/"},r.a.createElement("div",{className:"nav__top__logo"},r.a.createElement("img",{src:me.a,alt:"logo",className:"nav__top__logo"})))))},ve=a(47);function ge(){var e=Object(f.a)(["\n  width: 100%;\n  display: block;\n  font-size: 15px;\n  text-decoration: none;\n  letter-spacing: 2px;\n  // margin-left: 10px;\n  color: lightgray;\n  margin-top: 5px;\n  margin-bottom: 7px;\n  @media screen and (max-width: 768px) {\n    font-size: 13px;\n  }\n"]);return ge=function(){return e},e}function _e(){var e=Object(f.a)(["\n  font-size: 15px;\n  letter-spacing: 2px;\n  padding-bottom: 2px;\n  margin-top: 25px;\n  margin-left: -4px;\n  text-align: left;\n  font-weight: 600;\n  color: lightgray;\n  border-bottom: 1px solid grey;\n  @media screen and (max-width: 768px) {\n    font-size: 13px;\n  }\n"]);return _e=function(){return e},e}function fe(){var e=Object(f.a)(["\n  display: block;\n  margin-top: 25px;\n  padding: 0;\n  width: 100%;\n"]);return fe=function(){return e},e}var he=h.a.div(fe()),Ee=h.a.span(_e()),be=h.a.div(ge()),ye=function(e){var t=e.title,a=e.children;return r.a.createElement(he,null,r.a.createElement(Ee,null,t),r.a.createElement(be,null,a))},xe=(a(82),{in:{opacity:1,y:0},out:{opacity:0,y:"10vh"}}),ke=function(e){Object(g.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={isTv:!1,genres:[],results:[],runtime:null,last_date:null,episodes:null,seasons:null},e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=Object(m.a)(p.a.mark((function e(){var t,a,n,r,i,c,o,l,s,u,m,d,v,g,_,f;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===(t=this.props.location).state&&(document.location.href="/netflix_app"),t.state.isTv){e.next=16;break}return e.next=5,Y(t.state.id);case 5:return a=e.sent,n=a.data,r=n.genres,i=n.runtime,e.next=11,Z(t.state.id);case 11:c=e.sent,o=c.data.results,this.setState({genres:r,runtime:i,results:o,isTv:t.state.isTv}),e.next=30;break;case 16:return e.next=18,ne(t.state.id);case 18:return l=e.sent,s=l.data,u=s.genres,m=s.episode_run_time,d=s.last_air_date,v=s.number_of_episodes,g=s.number_of_seasons,e.next=27,re(t.state.id);case 27:_=e.sent,f=_.data.results,this.setState({genres:u,runtime:m,last_date:d,episodes:v,seasons:g,results:f,isTv:t.state.isTv});case 30:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.props,t=e.location,a=e.history,n=this.state,i=n.genres,c=n.runtime,l=n.last_date,u=n.results,p=n.episodes,m=n.seasons,d=n.isTv;if(t.state){for(var v=t.state.overview.split(". "),g=0;g<v.length-1;g++)v[g]+=".";return r.a.createElement(s.b.div,{initial:"out",animate:"in",exit:"out",variants:xe,className:"detail"},r.a.createElement(o.b,{to:"",onClick:function(){a.goBack()}},r.a.createElement("div",{className:"nav__container"},r.a.createElement(j.a,{icon:O.a,className:"nav__backbtn"}))),"https://image.tmdb.org/t/p/w500null"!==t.state.backdrop?r.a.createElement("div",{className:"detail__backdrop",style:{backgroundImage:"url(".concat(t.state.backdrop,")")}}):null,r.a.createElement("br",null),r.a.createElement("div",{className:"detail__container"},"https://image.tmdb.org/t/p/w500null"!==t.state.poster?r.a.createElement("div",{className:"detail__poster",style:{backgroundImage:"url(".concat(t.state.poster,")")}}):null,r.a.createElement("div",{className:"detail__info"},r.a.createElement("div",{className:"detail__title"},t.state.title),r.a.createElement("div",{className:"detail__title star"},r.a.createElement(j.a,{icon:O.e,className:"panel__star"}),r.a.createElement("span",null," ",t.state.vote," / 10")),r.a.createElement("div",{className:"detail__description"},r.a.createElement(ye,{title:d?"\uccab \ubc29\uc601\uc77c\uc790":"\uac1c\ubd09"},A(t.state.date)),d?r.a.createElement(ye,{title:"\ucd5c\uc2e0 \ubc29\uc601\uc77c\uc790"},A(l)):null,r.a.createElement(ye,{title:"\uc7a5\ub974"},i.map((function(e){return"".concat(e.name," ")}))),r.a.createElement(ye,{title:"\uc2dc\uac04"},c,"\ubd84"),d?r.a.createElement(ye,{title:"\uc5d0\ud53c\uc18c\ub4dc / \uc2dc\uc98c"},p," / ",m):null,r.a.createElement(ye,{title:"\uc904\uac70\ub9ac"},v.map((function(e){return r.a.createElement("p",null,e)}))),u.length>0?r.a.createElement(ye,{title:"\ucd94\ucc9c \uc601\uc0c1"},u.map((function(e){return r.a.createElement("a",{href:"https://www.youtube.com/watch?v=".concat(e.key),className:"detail__videoContainer"},r.a.createElement(j.a,{icon:ve.a,className:"youtube"})," ",r.a.createElement("div",{className:"detail__videoName"},e.name))}))):null,r.a.createElement("br",null),r.a.createElement("br",null)))))}return null}}]),a}(r.a.Component);a(83);var we=function(){return r.a.createElement(o.a,null,r.a.createElement(de,null),r.a.createElement(s.a,null,r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",component:se}),r.a.createElement(l.a,{path:"/tv",component:ie}),r.a.createElement(l.a,{path:"/search",component:ue}),r.a.createElement(l.a,{path:"/movie-detail",component:ke}))))};c.a.render(r.a.createElement(we,null),document.getElementById("root"))}},[[49,1,2]]]);
//# sourceMappingURL=main.e140efd6.chunk.js.map