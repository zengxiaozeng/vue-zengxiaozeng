webpackJsonp([2],{"I+1a":function(t,e){},P8Go:function(t,e){},Y1dK:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("4YfN"),n=i.n(s),a=i("9rMa"),o={data:function(){return{rank1:{},rank2:{},rank3:{},isiOS:window.isiOS,isPlay:!1,isVideo:!1,range:0,isPaused:!1,isControls:!0,isEnded:!1,timer3:null,timer2:null,timer:null}},components:{vHeader:i("eGLe").a},watch:{leaderboard:function(t){var e=this;t&&this.leaderboard.forEach(function(t){1==t.ranking?e.rank1=t:2==t.ranking?e.rank2=t:3==t.ranking&&(e.rank3=t)})},isPaused:function(){var t=this;this.timer3=setTimeout(function(){!t.ended&&(t.isControls=!1)},1e3)}},computed:n()({},Object(a.d)("Home",{horseData:function(t){return t.horseRaceLamp},leaderboard:function(t){return t.leaderboard}}),Object(a.d)({nt:function(t){return t.nt},st:function(t){return t.st},et:function(t){return t.et},token:function(t){return t.token}})),mounted:function(){this.getNowTime("anniversary2018Homepage"),this.getData()},methods:n()({},Object(a.b)("Home",{getData:"getData"}),Object(a.b)({getNowTime:"getNowTime"}),{ppp:function(t){console.log(t.target.paused)},toBottom:function(){window.scrollTo(2e5,2e5)},open:function(){this.close(),this.isVideo=!0},close:function(){clearTimeout(this.timer),clearTimeout(this.timer2),clearTimeout(this.timer3),this.isEnded=!1,this.isPlay=!1,this.range=0,this.isPaused=!1,this.isControls=!0,this.isVideo=!1},controls:function(t){var e=this;this.isPlay&&(t.preventDefault(),t.stopPropagation(),this.isControls=!0,clearTimeout(this.timer),this.timer=setTimeout(function(){e.isControls=!1},2e3))},timeupdate:function(t){this.range=Number(t.target.currentTime)/Number(t.target.duration)*100+"%"},pause:function(){var t=document.querySelector("video");this.isPlay&&(this.isPaused=t.paused,t.pause())},play:function(){var t=document.querySelector("video");this.isPlay?(this.isPaused=t.paused,t.play()):(this.isPlay=!0,this.isPaused=!0,this.timer2=setTimeout(function(){document.querySelector("video").play()},100))},jump:function(t){this.nt<this.st?this.$outDate("活动未开始"):this.nt>this.et&&"investRank"!=t?this.$outDate("活动已结束"):this.$router.push({path:t})},ended:function(){this.isPlay=!1,this.range=0,this.isPaused=!1,this.isControls=!0,this.isEnded=!1}})},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page-home"},[i("header",[i("vHeader",{attrs:{horseData:t.horseData}}),i("p",{on:{click:t.open}})],1),i("main",{on:{click:function(e){t.jump("investRank")}}},[i("ul",[i("li",[i("dl",[i("dt",[t._v("2")]),t.rank2&&t.rank2.score?i("dd",[i("h3",[t._v(t._s(t.rank2.score)+"元")]),i("p",[t._v(t._s(t.rank2.username))])]):i("dd",[i("h4",[t._v("虚位以待")])])])]),i("li",[i("dl",[i("dt",[t._v("1")]),t.rank1&&t.rank1.score?i("dd",[i("h3",[t._v(t._s(t.rank1.score)+"元")]),i("p",[t._v(t._s(t.rank1.username))])]):i("dd",[i("h4",[t._v("虚位以待")])])])]),i("li",[i("dl",[i("dt",[t._v("3")]),t.rank3&&t.rank3.score?i("dd",[i("h3",[t._v(t._s(t.rank3.score)+"元")]),i("p",[t._v(t._s(t.rank3.username))])]):i("dd",[i("h4",[t._v("虚位以待 ")])])])])]),t._m(0)]),i("footer",[i("p",[i("img",{attrs:{src:"https://image.youdingkeji.com/H5/activitys/20180715CBX_FETE/home/link (3).png"},on:{click:function(e){t.jump("drawCash")}}})]),i("p",[i("img",{attrs:{src:"https://image.youdingkeji.com/H5/activitys/20180715CBX_FETE/home/link (4).png"},on:{click:function(e){t.jump("sendBlees")}}}),i("img",{attrs:{src:"https://image.youdingkeji.com/H5/activitys/20180715CBX_FETE/home/link (2).png"},on:{click:function(e){t.jump("robRate")}}}),i("img",{attrs:{src:"https://image.youdingkeji.com/H5/activitys/20180715CBX_FETE/home/link (1).png"},on:{click:function(e){t.jump("handEnvelops")}}})]),t._m(1)]),i("aside",[i("button"),i("p",{on:{click:t.toBottom}},[t._v("天天抽现金  ")]),i("transition",{attrs:{name:"fade"}},[t.isVideo?i("article",[i("div",{class:{obs:t.isVideo}},[i("img",{attrs:{src:"https://image.youdingkeji.com/H5/icon/close_small.png"},on:{click:t.close}}),i("section",{on:{click:t.controls}},[t.isPlay?i("video",{ref:"video",attrs:{width:"630",controls:"controls",src:"https://image.youdingkeji.com/H5/newVideos/twoYears.mp4",poster:"https://image.youdingkeji.com/H5/activitys/20180715CBX_FETE/home/video_slt.jpg","webkit-playsinline":"true",playsinline:"true","x5-playsinline":"x5-playsinline"},on:{timeupdate:t.timeupdate,play:function(e){t.isPaused=!0},pause:function(e){t.isPaused=!1},ended:t.ended}},[t._v("您的浏览器不支持 video 标签。")]):i("img",{attrs:{src:"https://image.youdingkeji.com/H5/activitys/20180715CBX_FETE/home/video_slt.jpg"}}),t.isPlay&&!t.isiOS?i("p",[i("span",{style:{width:t.range}})]):t._e(),i("transition",{attrs:{name:"fade"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:t.isPaused&&t.isControls,expression:"isPaused&&isControls"}],staticClass:"status",attrs:{src:"https://image.youdingkeji.com/H5/icon/video-pause.png"},on:{click:t.pause}})]),i("transition",{attrs:{name:"fade"}},[i("img",{directives:[{name:"show",rawName:"v-show",value:!t.isPaused&&t.isControls,expression:"(!isPaused)&&isControls"}],staticClass:"status",attrs:{src:"https://image.youdingkeji.com/H5/icon/video-play.png"},on:{click:t.play}})])],1)])]):t._e()])],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("section",[e("a",[this._v("查看我的排名 ")]),e("p",[this._v("*排名以累计年化投资额为准")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h6",{staticClass:"p-e-0"},[this._v("最终解释权归一鼎金融所有"),e("br"),this._v("如有任何疑问请拨打客服热线：4006-553-888"),e("br"),this._v("投资有风险，选择需谨慎")])}]};var c=i("Z0/y")(o,r,!1,function(t){i("P8Go"),i("jw5F")},null,null);e.default=c.exports},eGLe:function(t,e,i){"use strict";var s={props:["horseData"],data:function(){return{mtStyle:{"margin-top":0},isStop:""}},computed:{isShow:function(){return this.horseData.length>0},newHorseData:function(){return this.horseData.length%2?this.horseData.concat([this.horseData[0]]):this.horseData}},watch:{newHorseData:function(){this.horseLamp()}},mounted:function(){this.newHorseData&&this.horseLamp()},methods:{horseLamp:function(){var t=this;this.timer&&clearInterval(this.timer),this.timer=setInterval(function(){t.isStop="";var e=parseInt(t.mtStyle["margin-top"]);t.mtStyle["margin-top"]=e-60+"px",Math.abs(e-60)>30*t.newHorseData.length&&(t.isStop="stop",t.mtStyle["margin-top"]=0,setTimeout(function(){t.isStop=""},200))},2400)}}},n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fadeDown"}},[t.isShow?i("div",{staticClass:"horseRaceMap"},[i("div",{staticClass:"content"},[i("div",{staticClass:"box"},[i("ul",{class:t.isStop,style:t.mtStyle},t._l(t.newHorseData,function(e,s){return i("li",{key:s},[t._v(t._s(e))])})),i("ul",{ref:"list-1"},t._l(t.newHorseData,function(e,s){return i("li",{key:s},[t._v(t._s(e))])}))])])]):t._e()])},staticRenderFns:[]};var a=i("Z0/y")(s,n,!1,function(t){i("I+1a")},null,null);e.a=a.exports},jw5F:function(t,e){}});