webpackJsonp([8],{1092:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){function n(r,l){try{var i=t[r](l),o=i.value}catch(e){return void a(e)}if(!i.done)return Promise.resolve(o).then(function(e){n("next",e)},function(e){n("throw",e)});e(o)}return n("next")})}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e){return{priceGraph:e.markets.price}}Object.defineProperty(t,"__esModule",{value:!0});var u=a(4),c=n(u),d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},m=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),p=a(0),f=n(p),h=a(60),g=n(h),v=a(7),y=a(35),b=a(11),_=a(12),S=a(18),E=a(1280),x=a(26),C=a(436),w=n(C),P=a(1281),T=n(P),k=a(8),N=a(229),I=n(N),D=a(31),R=a(422),O=a(1178),z=a(420),B=function(e){function t(){l(this,t);var e=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={accounts:null,transactionStats:null,blockStats:null,transactionValueStats:null,txOverviewStats:null,addressesStats:null,blockSizeStats:null,blockchainSizeStats:null,priceStats:null,volumeStats:null,summit:null,pieChart:null,supplyTypesChart:null,genesisNum:null,blockProduceRewardsNum:null,nodeRewardsNum:null,independenceDayBurned:null,feeBurnedNum:null,currentTotalSupply:null,priceUSD:null,priceBTC:null,marketCapitalization:null,foundationFreeze:null,circulatingNum:null},e}return o(t,e),m(t,[{key:"componentDidMount",value:function(){var e=this;this.loadAccounts(),this.loadStats(),setInterval(function(){e.loadTxOverviewStats()},15e3)}},{key:"loadAccounts",value:function(){function e(){return t.apply(this,arguments)}var t=r(c.default.mark(function e(){var t,a;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Client.getAccounts({limit:35,sort:"-balance"});case 2:t=e.sent,a=t.accounts,this.setState({accounts:(0,S.filter)(a,function(e){return!(0,S.includes)(E.tronAddresses,e.address)}).slice(0,10).map(function(e){return{name:e.address,value:e.balance/y.ONE_TRX}})});case 5:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadStats",value:function(){function e(){return t.apply(this,arguments)}var t=r(c.default.mark(function e(){var t,a,n,r,l,i;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.Client.getTransferStats({groupby:"timestamp",interval:"hour"});case 2:return t=e.sent,a=t.stats,e.next=6,v.Client.getBlockStats({info:"avg-block-size"});case 6:n=e.sent,r=n.stats,l=a.total.map(function(e){return{timestamp:e.timestamp,value:e.value}}),i=a.value.map(function(e){return{timestamp:e.timestamp,value:e.value/y.ONE_TRX}}),r=r.map(function(e){return{timestamp:e.timestamp,value:e.value}}),this.setState({transactionStats:l,transactionValueStats:i,blockStats:r});case 12:case"end":return e.stop()}},e,this)}));return e}()},{key:"loadTxOverviewStats",value:function(){function e(){return t.apply(this,arguments)}var t=r(c.default.mark(function e(){var t,a,n,r,l,i,o,s,u,m,p,f,h,b,_,E,x,C,w,P,T,k,N,I,D,R,O,z,B,M,A,L,X,G,j,F,V,U,H,W,Z,J,K,q,Q,$,Y,ee,te,ae,ne,re,le,ie,oe,se,ue;return c.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return q=function(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}},t=this.props.intl,a=new Date,n=a.getTime(),r=new Date("2017/10/10"),l=r.getTime(),i=Math.floor((n-l)/1e3/3600/24),e.next=9,g.default.get("https://min-api.cryptocompare.com/data/histoday?fsym=TRX&tsym=USD&limit="+i);case 9:return o=e.sent,s=o.data,u=s.Data,e.next=14,g.default.get("https://cors.io/?https://graphs2.coinmarketcap.com/currencies/tron/");case 14:return m=e.sent,p=m.data.volume_usd,f=p.map(function(e,a){return{time:e[0],volume_billion:e[1]/Math.pow(10,9),volume_usd:t.formatNumber(e[1])+" USD",volume_usd_num:e[1]}}),e.next=19,v.Client.getStatisticData();case 19:return h=e.sent,b=h.statisticData,_=[],b.length>0&&b.map(function(e,a){_.push({key:a+1,name:e.name?e.name:e.url,volumeValue:t.formatNumber(e.blockProduced),volumePercentage:t.formatNumber(100*e.percentage,{maximumFractionDigits:2,minimumFractionDigits:2})+"%"})}),E=Math.random(),e.next=26,g.default.get("https://tron.network/api/v2/node/balance_info?random="+E);case 26:return x=e.sent,C=x.data.total,e.next=30,v.Client.getBlocks({limit:1,sort:"-number"});case 30:return w=e.sent,P=w.blocks,T=P[0]?P[0].number:0,k=16*T,N=32*T,e.next=37,v.Client.getAddress("TLsV52sRDL79HXGGm9yzwKibb6BeruhUzy");case 37:return I=e.sent,D=Math.abs(-9223372036854.775),R=(D-Math.abs(I.balance/y.ONE_TRX)).toFixed(2),O=1e11,z=1e9,B=O+N+k-z-R,M=(B-C).toFixed(2),A=[{value:C,name:"foundation_freeze",selected:!0},{value:M,name:"circulating_supply",selected:!0}],e.next=47,g.default.get("https://api.coinmarketcap.com/v1/ticker/tronix/?convert=EUR");case 47:return L=e.sent,X=(1e3*parseFloat(L.data[0].price_usd)).toFixed(2),G=(1e3*parseFloat(L.data[0].price_btc)).toFixed(5),j=(parseFloat(L.data[0].price_usd)*B).toFixed(2),e.next=53,v.Client.getTxOverviewStats();case 53:F=e.sent,V=F.txOverviewStats,U=[],H=[],W=[],Z=[];for(J in V)K=parseInt(J),0===K?(U.push(V[K]),H.push({date:V[K].date,total:V[K].newAddressSeen,increment:V[K].newAddressSeen})):(U.push({date:V[K].date,totalTransaction:V[K].totalTransaction-V[K-1].totalTransaction,avgBlockTime:V[K].avgBlockTime,avgBlockSize:V[K].avgBlockSize,totalBlockCount:V[K].totalBlockCount-V[K-1].totalBlockCount,newAddressSeen:V[K].newAddressSeen}),H.push({date:V[K].date,total:V[K].newAddressSeen+H[K-1].total,increment:V[K].newAddressSeen})),W.push({date:V[K].date,avgBlockSize:V[K].avgBlockSize}),Z.push({date:V[K].date,blockchainSize:V[K].blockchainSize});this.setState({txOverviewStats:U,addressesStats:H,blockSizeStats:W,blockchainSizeStats:Z,priceStats:u,volumeStats:f,pieChart:_,supplyTypesChart:A,genesisNum:t.formatNumber(O),blockProduceRewardsNum:t.formatNumber(N),nodeRewardsNum:t.formatNumber(k),independenceDayBurned:t.formatNumber(z),feeBurnedNum:t.formatNumber(R),currentTotalSupply:B,priceUSD:X,priceBTC:G,marketCapitalization:j,foundationFreeze:t.formatNumber(C),circulatingNum:t.formatNumber(M)}),Q={date:"",increment:""},$={date:"",increment:""},Y=(0,S.cloneDeep)(H).sort(q("increment")),ee=(0,S.cloneDeep)(U).sort(q("totalTransaction")),te=(0,S.cloneDeep)(W).sort(q("avgBlockSize")),ae=(0,S.cloneDeep)(u).sort(q("close")),ne=(0,S.cloneDeep)(f).sort(q("volume_usd_num"));for(re in ae)ae[re]=d({date:ae[re].time},ae[re]);for(le in ne)ne[le]=d({date:ne[le].time},ne[le]);ie=[];for(oe in Z)se=parseInt(oe),0===se?ie.push({date:Z[0].date,blockchainSize:Z[0].blockchainSize/1e6}):ie.push({date:Z[se].date,blockchainSize:(Z[se].blockchainSize-Z[se-1].blockchainSize)/1e6});ue=ie.sort(q("blockchainSize")),this.setState({summit:{addressesStats_sort:[{date:Y[Y.length-1].date,increment:Y[Y.length-1].increment},{date:Y[0].date,increment:Y[0].increment}],txOverviewStats_sort:[{date:ee[ee.length-1].date,increment:ee[ee.length-1].totalTransaction},{date:ee[0].date,increment:ee[0].totalTransaction}],blockSizeStats_sort:[{date:te[te.length-1].date,increment:te[te.length-1].avgBlockSize},{date:te[0].date,increment:te[0].avgBlockSize}],blockchainSizeStats_sort:[{date:ue[ue.length-1].date,increment:ue[ue.length-1].blockchainSize},{date:ue[0].date,increment:ue[0].blockchainSize}],priceStats_sort:[{date:1e3*ae[ae.length-1].date,increment:ae[ae.length-1].close},{date:1e3*ae[0].date,increment:ae[0].close}],volumeStats_sort:[{date:ne[ne.length-1].date,increment:ne[ne.length-1].volume_usd_num},{date:ne[0].date,increment:ne[0].volume_usd_num}]}});case 74:case"end":return e.stop()}},e,this)}));return e}()},{key:"render",value:function(){var e=this.props,t=e.match,a=e.intl,n=this.state,r=n.txOverviewStats,l=n.addressesStats,i=n.blockSizeStats,o=n.blockchainSizeStats,s=n.priceStats,u=n.transactionStats,c=n.transactionValueStats,d=n.blockStats,m=n.accounts,p=n.volumeStats,h=n.pieChart,g=n.supplyTypesChart,v=n.summit,y=n.genesisNum,b=n.blockProduceRewardsNum,_=n.nodeRewardsNum,S=n.independenceDayBurned,E=n.feeBurnedNum,C=n.currentTotalSupply,P=n.priceUSD,N=n.priceBTC,z=n.marketCapitalization,B=n.foundationFreeze,M=n.circulatingNum,A=void 0;return A="blockchainSizeStats"===t.params.chartName||"addressesStats"===t.params.chartName?"increase":"number",f.default.createElement("main",{className:"container header-overlap"},"pieChart"!=t.params.chartName&&"supply"!=t.params.chartName?f.default.createElement("div",{className:"alert alert-light",role:"alert"},f.default.createElement("div",{className:"row"},f.default.createElement("div",{className:"col-md-6 text-center"},v&&v[t.params.chartName+"_sort"]&&f.default.createElement("span",null,(0,k.t)("highest"),(0,k.t)(A),(0,k.t)("_of"),f.default.createElement("strong",null," "+v[t.params.chartName+"_sort"][0].increment+" "),(0,k.t)("was_recorded_on")," ",a.formatDate(v[t.params.chartName+"_sort"][0].date))),f.default.createElement("div",{className:"col-md-6 text-center"},v&&v[t.params.chartName+"_sort"]&&f.default.createElement("span",null,(0,k.t)("lowest"),(0,k.t)(A),(0,k.t)("_of"),f.default.createElement("strong",null," "+v[t.params.chartName+"_sort"][1].increment+" "),(0,k.t)("was_recorded_on")," ",a.formatDate(v[t.params.chartName+"_sort"][1].date))))):null,f.default.createElement("div",{className:"row"},f.default.createElement("div",{className:"col-md-12"},f.default.createElement("div",{className:"card"},f.default.createElement("div",{className:"card-body"},"txOverviewStats"===t.params.chartName&&f.default.createElement("div",{style:{height:500}},null===r?f.default.createElement(x.TronLoader,null):f.default.createElement(R.LineReactTx,{source:"singleChart",style:{height:500},data:r,intl:a})),"addressesStats"===t.params.chartName&&f.default.createElement("div",{style:{height:500}},null===l?f.default.createElement(x.TronLoader,null):f.default.createElement(R.LineReactAdd,{source:"singleChart",style:{height:500},data:l,intl:a})),"blockSizeStats"===t.params.chartName&&f.default.createElement("div",{style:{height:500}},null===i?f.default.createElement(x.TronLoader,null):f.default.createElement(R.LineReactBlockSize,{source:"singleChart",style:{height:500},data:i,intl:a})),"blockchainSizeStats"===t.params.chartName&&f.default.createElement("div",{style:{height:500}},null===o?f.default.createElement(x.TronLoader,null):f.default.createElement(R.LineReactBlockchainSize,{source:"singleChart",style:{height:500},data:o,intl:a})),"priceStats"===t.params.chartName&&f.default.createElement("div",{style:{height:500}},null===s?f.default.createElement(x.TronLoader,null):f.default.createElement(R.LineReactPrice,{source:"singleChart",style:{height:500},data:s,intl:a})),"accounts"===t.params.chartName&&f.default.createElement("div",{style:{height:500}},null===m?f.default.createElement(x.TronLoader,null):f.default.createElement(w.default,{style:{height:500},data:m})),"transactionValueStats"===t.params.chartName&&f.default.createElement("div",{style:{height:500}},null===c?f.default.createElement(x.TronLoader,null):f.default.createElement(T.default,{message:{id:"trx_transferred_past_hour",href:"transactionValueStats"},style:{height:500},data:c,keysData:["timestamp","value"],format:{timestamp:!0}})),"transactionStats"===t.params.chartName&&f.default.createElement("div",{style:{height:500}},null===u?f.default.createElement(x.TronLoader,null):f.default.createElement(T.default,{message:{id:"transactions_past_hour",href:"transactionStats"},style:{height:500},data:u,keysData:["timestamp","value"],format:{timestamp:!0}})),"blockStats"===t.params.chartName&&f.default.createElement("div",{style:{height:500}},null===d?f.default.createElement(x.TronLoader,null):f.default.createElement(T.default,{message:{id:"average_blocksize",href:"blockStats"},style:{height:500},data:d,keysData:["timestamp","value"],format:{timestamp:!0}})),"volumeStats"===t.params.chartName&&f.default.createElement("div",{style:{height:500}},null===p?f.default.createElement(x.TronLoader,null):f.default.createElement(R.LineReactVolumeUsd,{source:"singleChart",style:{height:500},data:p,intl:a})),"pieChart"===t.params.chartName&&f.default.createElement("div",null,null===h?f.default.createElement(x.TronLoader,null):f.default.createElement(O.RepresentativesRingPieReact,{source:"singleChart",message:{id:"produce_distribution"},intl:a,data:h,style:{height:500}})),"supply"===t.params.chartName&&f.default.createElement("div",null,null===g?f.default.createElement(x.TronLoader,null):f.default.createElement("div",{className:"row",style:{fontSize:12,marginRight:0}},f.default.createElement("div",{className:"col-md-5"},f.default.createElement("div",{className:"table-responsive"},f.default.createElement("table",{className:"table",style:{marginTop:10}},f.default.createElement("thead",null,f.default.createElement("tr",null,f.default.createElement("th",{style:{border:0}},f.default.createElement("i",{className:"fa fa-puzzle-piece"}),f.default.createElement("span",{style:{marginTop:2}},(0,k.tu)("TRX_distribution_overview"))))),f.default.createElement("tbody",null,f.default.createElement("tr",null,f.default.createElement("td",null,(0,k.tu)("genesis"),":"),f.default.createElement("td",null,y," TRX")),f.default.createElement("tr",null,f.default.createElement("td",null,"+  ",(0,k.tu)("block_produce_rewards"),":"),f.default.createElement("td",null,b," TRX")),f.default.createElement("tr",null,f.default.createElement("td",null,"+ ",(0,k.tu)("node_rewards"),":"),f.default.createElement("td",null,_," TRX")),f.default.createElement("tr",null,f.default.createElement("td",null,"- ",(0,k.tu)("independence_day_burned"),":"),f.default.createElement("td",null,S," TRX")),f.default.createElement("tr",null,f.default.createElement("td",null,"- ",(0,k.tu)("fee_burned"),":"),f.default.createElement("td",null,E," TRX")),f.default.createElement("tr",null,f.default.createElement("td",null,"= ",f.default.createElement("b",null,(0,k.tu)("current_total_supply"),":"),f.default.createElement("br",null)),f.default.createElement("td",null,f.default.createElement("b",null,a.formatNumber(C)," TRX"))),f.default.createElement("tr",null,f.default.createElement("td",{style:{color:"red"},className:"go-foundation"},f.default.createElement(D.Link,{to:"/blockchain/foundation",style:{color:"red"}},(0,k.tu)("foundation_freeze"))),f.default.createElement("td",null,B," TRX")),f.default.createElement("tr",null,f.default.createElement("td",null,(0,k.tu)("circulating_supply"),":"),f.default.createElement("td",null,M," TRX"))))),f.default.createElement("br",null),f.default.createElement("div",{className:"table-responsive"},f.default.createElement("table",{className:"table",style:{marginBottom:0}},f.default.createElement("thead",null,f.default.createElement("tr",null,f.default.createElement("th",{style:{border:0}},f.default.createElement("br",null),f.default.createElement("i",{className:"fa fa-coins"})," ",(0,k.tu)("price_per_1000_trx")))),f.default.createElement("tbody",null,f.default.createElement("tr",null,f.default.createElement("td",null,(0,k.tu)("in_USD"),":"),f.default.createElement("td",null,"$",P)),f.default.createElement("tr",null,f.default.createElement("td",null,(0,k.tu)("in_BTC"),":"),f.default.createElement("td",null,N)))),f.default.createElement("div",{style:{fontSize:12,color:"#999",whiteSpace:"nowrap",textAlign:"left",padding:"0.75rem",borderTop:"1px solid #DFD7CA",verticalAlign:"top"}},f.default.createElement("div",{style:{transform:"scale(.9)",marginLeft:"-1.3rem"}},"*",(0,k.tu)("supply_notes"))))),f.default.createElement("div",{className:"col-md-7",style:{backgroundColor:"#F5F5F5",marginTop:0,paddingBottom:15}},f.default.createElement("div",{className:"main-counters row"},f.default.createElement("div",{className:"counters col-md-6 col-sm-6"},f.default.createElement("span",{className:"counter"},f.default.createElement(I.default,{start:0,end:C,duration:2,separator:",",decimals:2})),f.default.createElement("h4",null,(0,k.tu)("total_TRX_supply"))),f.default.createElement("div",{className:"counters col-md-6 col-sm-6"},f.default.createElement("span",{className:"counter"},"$",f.default.createElement(I.default,{start:0,end:z,duration:2,separator:",",decimals:2})),f.default.createElement("h4",null,(0,k.tu)("market_capitalization")))),f.default.createElement("div",{className:"card"},f.default.createElement("div",{className:"card-body"},f.default.createElement(O.SupplyTypesTRXPieChart,{message:{id:"breakdown_supply_types"},intl:a,data:g,style:{height:400},source:"singleChart"})))))))))))}}]),t}(f.default.Component),M={loadPriceData:z.loadPriceData};t.default=(0,b.connect)(s,M)((0,_.injectIntl)(B))},1148:function(e,t,a){var n=a(6),r=a(1),l=a(38),i=a(10),o=i.isNameSpecified,s=n.extendComponentModel({type:"legend.plain",dependencies:["series"],layoutMode:{type:"box",ignoreSize:!0},init:function(e,t,a){this.mergeDefaultAndTheme(e,a),e.selected=e.selected||{}},mergeOption:function(e){s.superCall(this,"mergeOption",e)},optionUpdated:function(){this._updateData(this.ecModel);var e=this._data;if(e[0]&&"single"===this.get("selectedMode")){for(var t=!1,a=0;a<e.length;a++){var n=e[a].get("name");if(this.isSelected(n)){this.select(n),t=!0;break}}!t&&this.select(e[0].get("name"))}},_updateData:function(e){var t=[],a=[];e.eachRawSeries(function(n){var r=n.name;a.push(r);var l;if(n.legendDataProvider){var i=n.legendDataProvider(),s=i.mapArray(i.getName);e.isSeriesFiltered(n)||(a=a.concat(s)),s.length?t=t.concat(s):l=!0}else l=!0;l&&o(n)&&t.push(n.name)}),this._availableNames=a;var n=this.get("data")||t,i=r.map(n,function(e){return"string"!==typeof e&&"number"!==typeof e||(e={name:e}),new l(e,this,this.ecModel)},this);this._data=i},getData:function(){return this._data},select:function(e){var t=this.option.selected;if("single"===this.get("selectedMode")){var a=this._data;r.each(a,function(e){t[e.get("name")]=!1})}t[e]=!0},unSelect:function(e){"single"!==this.get("selectedMode")&&(this.option.selected[e]=!1)},toggleSelected:function(e){var t=this.option.selected;t.hasOwnProperty(e)||(t[e]=!0),this[t[e]?"unSelect":"select"](e)},isSelected:function(e){var t=this.option.selected;return!(t.hasOwnProperty(e)&&!t[e])&&r.indexOf(this._availableNames,e)>=0},defaultOption:{zlevel:0,z:4,show:!0,orient:"horizontal",left:"center",top:0,align:"auto",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",borderRadius:0,borderWidth:0,padding:5,itemGap:10,itemWidth:25,itemHeight:14,inactiveColor:"#ccc",textStyle:{color:"#333"},selectedMode:!0,tooltip:{show:!1}}}),u=s;e.exports=u},1149:function(e,t,a){function n(e,t){t.dispatchAction({type:"legendToggleSelect",name:e})}function r(e,t,a){var n=a.getZr().storage.getDisplayList()[0];n&&n.useHoverLayer||e.get("legendHoverLink")&&a.dispatchAction({type:"highlight",seriesName:e.name,name:t})}function l(e,t,a){var n=a.getZr().storage.getDisplayList()[0];n&&n.useHoverLayer||e.get("legendHoverLink")&&a.dispatchAction({type:"downplay",seriesName:e.name,name:t})}var i=a(13),o=(i.__DEV__,a(6)),s=a(1),u=a(147),c=u.createSymbol,d=a(9),m=a(415),p=m.makeBackground,f=a(41),h=s.curry,g=s.each,v=d.Group,y=o.extendComponentView({type:"legend.plain",newlineDisabled:!1,init:function(){this.group.add(this._contentGroup=new v),this._backgroundEl},getContentGroup:function(){return this._contentGroup},render:function(e,t,a){if(this.resetInner(),e.get("show",!0)){var n=e.get("align");n&&"auto"!==n||(n="right"===e.get("left")&&"vertical"===e.get("orient")?"right":"left"),this.renderInner(n,e,t,a);var r=e.getBoxLayoutParams(),l={width:a.getWidth(),height:a.getHeight()},i=e.get("padding"),o=f.getLayoutRect(r,l,i),u=this.layoutInner(e,n,o),c=f.getLayoutRect(s.defaults({width:u.width,height:u.height},r),l,i);this.group.attr("position",[c.x-u.x,c.y-u.y]),this.group.add(this._backgroundEl=p(u,e))}},resetInner:function(){this.getContentGroup().removeAll(),this._backgroundEl&&this.group.remove(this._backgroundEl)},renderInner:function(e,t,a,i){var o=this.getContentGroup(),u=s.createHashMap(),c=t.get("selectedMode");g(t.getData(),function(s,d){var m=s.get("name");if(!this.newlineDisabled&&(""===m||"\n"===m))return void o.add(new v({newline:!0}));var p=a.getSeriesByName(m)[0];if(!u.get(m))if(p){var f=p.getData(),g=f.getVisual("color");"function"===typeof g&&(g=g(p.getDataParams(0)));var y=f.getVisual("legendSymbol")||"roundRect",b=f.getVisual("symbol"),_=this._createItem(m,d,s,t,y,b,e,g,c);_.on("click",h(n,m,i)).on("mouseover",h(r,p,null,i)).on("mouseout",h(l,p,null,i)),u.set(m,!0)}else a.eachRawSeries(function(a){if(!u.get(m)&&a.legendDataProvider){var o=a.legendDataProvider(),p=o.indexOfName(m);if(p<0)return;var f=o.getItemVisual(p,"color");this._createItem(m,d,s,t,"roundRect",null,e,f,c).on("click",h(n,m,i)).on("mouseover",h(r,a,m,i)).on("mouseout",h(l,a,m,i)),u.set(m,!0)}},this)},this)},_createItem:function(e,t,a,n,r,l,i,o,u){var m=n.get("itemWidth"),p=n.get("itemHeight"),f=n.get("inactiveColor"),h=n.isSelected(e),g=new v,y=a.getModel("textStyle"),b=a.get("icon"),_=a.getModel("tooltip"),S=_.parentModel;if(r=b||r,g.add(c(r,0,0,m,p,h?o:f,!0)),!b&&l&&(l!==r||"none"==l)){var E=.8*p;"none"===l&&(l="circle"),g.add(c(l,(m-E)/2,(p-E)/2,E,E,h?o:f))}var x="left"===i?m+5:-5,C=i,w=n.get("formatter"),P=e;"string"===typeof w&&w?P=w.replace("{name}",null!=e?e:""):"function"===typeof w&&(P=w(e)),g.add(new d.Text({style:d.setTextStyle({},y,{text:P,x:x,y:p/2,textFill:h?y.getTextColor():f,textAlign:C,textVerticalAlign:"middle"})}));var T=new d.Rect({shape:g.getBoundingRect(),invisible:!0,tooltip:_.get("show")?s.extend({content:e,formatter:S.get("formatter",!0)||function(){return e},formatterParams:{componentType:"legend",legendIndex:n.componentIndex,name:e,$vars:["name"]}},_.option):null});return g.add(T),g.eachChild(function(e){e.silent=!0}),T.silent=!u,this.getContentGroup().add(g),d.setHoverStyle(g),g.__legendDataIndex=t,g},layoutInner:function(e,t,a){var n=this.getContentGroup();f.box(e.get("orient"),n,e.get("itemGap"),a.width,a.height);var r=n.getBoundingRect();return n.attr("position",[-r.x,-r.y]),this.group.getBoundingRect()}});e.exports=y},1178:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,a=Array(e.length);t<e.length;t++)a[t]=e[t];return a}return Array.from(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function o(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0}),t.SupplyTypesTRXPieChart=t.RepresentativesRingPieReact=t.RingPieReact=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=n(u),d=(a(11),a(12),a(223)),m=n(d),p=a(6),f=n(p);a(414),a(224),a(225),a(1179),a(1182),a(1183),a(1184);t.RingPieReact=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return o(t,e),s(t,[{key:"initPie",value:function(e){function t(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}var a=this.props,n=a.intl,l=a.data,i=a.message,o=f.default.getInstanceByDom(document.getElementById(e));if(void 0===o&&(o=f.default.init(document.getElementById(e))),m.default.ringPieChart.title.text=n.formatMessage({id:i.id})+" Top 10",m.default.ringPieChart.series[0].data=[],m.default.ringPieChart.series[1].data=[],m.default.ringPieChart.legend.data=[],l&&l.length>0){var s=l.sort(t("name")),u=[],c=[],d=[];for(var p in s)u.push({name:s[p].pair,value:s[p].volume}),d.indexOf(s[p].name)<0&&(d.push(s[p].name),c.push({name:s[p].name,value:0,subCount:[]}));for(var h in c)for(var g in s)s[g].name===c[h].name&&(c[h].value=c[h].value+s[g].volume,c[h].subCount.push({name:s[g].pair,value:s[g].volume}));c.sort(t("value"));var v=c.slice(c.length-10,c.length),y=[];for(var b in v)y.push.apply(y,r(v[b].subCount));m.default.ringPieChart.series[0].data=[],m.default.ringPieChart.series[1].data=[],m.default.ringPieChart.legend.data=d,m.default.ringPieChart.series[0].data=v,m.default.ringPieChart.series[1].data=y}l&&0===l.length&&(m.default.ringPieChart.title.text="No data"),o.setOption(m.default.ringPieChart)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(c.default.Component),t.RepresentativesRingPieReact=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return o(t,e),s(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,n=t.data,r=t.message,l=t.source;if(n.length)for(var i in n)n[i].name.indexOf("http://")>-1&&(n[i].name=n[i].name.substring(7).split(".com")[0]);var o=f.default.getInstanceByDom(document.getElementById(e));if(void 0===o&&(o=f.default.init(document.getElementById(e))),m.default.representPieChart.title.text=a.formatMessage({id:r.id}),m.default.representPieChart.series[0].data=[],m.default.representPieChart.legend.data=[],m.default.representPieChart.title.link="#/blockchain/stats/pieChart",m.default.representPieChart.tooltip.formatter=function(e){return a.formatMessage({id:"witness"})+" : "+e.name+"<br/>"+a.formatMessage({id:"produced_blocks"})+" : "+e.value+"<br/>"+a.formatMessage({id:"_percentage"})+" : "+e.percent+"%"},"singleChart"===l?(m.default.representPieChart.legend.show=!0,m.default.representPieChart.toolbox.feature={restore:{title:"restore"},saveAsImage:{show:!0,title:"save"}}):(m.default.representPieChart.legend.show=!1,m.default.representPieChart.toolbox.feature={restore:{show:!1,title:"restore"},saveAsImage:{show:!1,title:"save"}}),n&&n.length>0){var s=[],u=[];for(var c in n)u.indexOf(n[c].name)<0&&(u.push(n[c].name),s.push({name:n[c].name,value:n[c].volumeValue}));s.sort(function(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}("value")).reverse(),m.default.representPieChart.series[0].data=[],m.default.representPieChart.legend.data=u,m.default.representPieChart.series[0].data=s}n&&0===n.length&&(m.default.representPieChart.title.text="No data"),o.setOption(m.default.representPieChart)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(c.default.Component),t.SupplyTypesTRXPieChart=function(e){function t(e){l(this,t);var a=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={pieId:"ringPie"+n},a}return o(t,e),s(t,[{key:"initPie",value:function(e){var t=this.props,a=t.intl,n=t.data,r=t.message,l=t.source,i=f.default.getInstanceByDom(document.getElementById(e));if(void 0===i&&(i=f.default.init(document.getElementById(e))),m.default.supplyTypesTRXPieChart.title.text=a.formatMessage({id:r.id}),m.default.supplyTypesTRXPieChart.series[0].data=[],m.default.supplyTypesTRXPieChart.legend.data=[],m.default.supplyTypesTRXPieChart.title.link="#/blockchain/stats/supply",m.default.supplyTypesTRXPieChart.tooltip.formatter=function(e){return a.formatMessage({id:e.name})+" ("+a.formatNumber(e.value)+" TRX)<br/>"+a.formatMessage({id:"_percentage"})+" : "+e.percent+"%"},"singleChart"===l){var o=["50%","50%"];m.default.supplyTypesTRXPieChart.legend.show=!0,m.default.supplyTypesTRXPieChart.series[0].center=o,m.default.supplyTypesTRXPieChart.toolbox.feature={restore:{show:!1,title:"restore"},saveAsImage:{show:!1,title:"save"}}}else{var s=["50%","60%"];m.default.supplyTypesTRXPieChart.legend.show=!1,m.default.supplyTypesTRXPieChart.series[0].center=s,m.default.supplyTypesTRXPieChart.toolbox.feature={restore:{show:!1,title:"restore"},saveAsImage:{show:!1,title:"save"}}}if(n&&n.length>0){var u=[],c=[];for(var d in n)c.indexOf(n[d].name)<0&&(c.push(a.formatMessage({id:n[d].name})),u.push({name:a.formatMessage({id:n[d].name}),value:n[d].value,selected:n[d].selected}));u.sort(function(e){return function(t,a){return t[e]>a[e]?1:t[e]<a[e]?-1:0}}("value")).reverse(),m.default.supplyTypesTRXPieChart.series[0].data=[],m.default.supplyTypesTRXPieChart.legend.data=c,m.default.supplyTypesTRXPieChart.series[0].data=u}n&&0===n.length&&(m.default.supplyTypesTRXPieChart.title.text="No data"),i.setOption(m.default.supplyTypesTRXPieChart)}},{key:"componentDidMount",value:function(){this.initPie(this.state.pieId)}},{key:"componentDidUpdate",value:function(){this.initPie(this.state.pieId)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:this.state.pieId,style:this.props.style}))}}]),t}(c.default.Component)},1179:function(e,t,a){var n=a(6);a(1148),a(1180),a(1149);var r=a(1181),l=a(50);n.registerProcessor(r),l.registerSubTypeDefaulter("legend",function(){return"plain"})},1180:function(e,t,a){function n(e,t,a){var n,r={},i="toggleSelected"===e;return a.eachComponent("legend",function(a){i&&null!=n?a[n?"select":"unSelect"](t.name):(a[e](t.name),n=a.isSelected(t.name));var o=a.getData();l.each(o,function(e){var t=e.get("name");if("\n"!==t&&""!==t){var n=a.isSelected(t);r.hasOwnProperty(t)?r[t]=r[t]&&n:r[t]=n}})}),{name:t.name,selected:r}}var r=a(6),l=a(1);r.registerAction("legendToggleSelect","legendselectchanged",l.curry(n,"toggleSelected")),r.registerAction("legendSelect","legendselected",l.curry(n,"select")),r.registerAction("legendUnSelect","legendunselected",l.curry(n,"unSelect"))},1181:function(e,t){function a(e){var t=e.findComponents({mainType:"legend"});t&&t.length&&e.filterSeries(function(e){for(var a=0;a<t.length;a++)if(!t[a].isSelected(e.name))return!1;return!0})}e.exports=a},1182:function(e,t,a){function n(e,t,a){var n=e.getOrient(),r=[1,1];r[n.index]=0,i(t,a,{type:"box",ignoreSize:r})}var r=a(1148),l=a(41),i=l.mergeLayoutParam,o=l.getLayoutParams,s=r.extend({type:"legend.scroll",setScrollDataIndex:function(e){this.option.scrollDataIndex=e},defaultOption:{scrollDataIndex:0,pageButtonItemGap:5,pageButtonGap:null,pageButtonPosition:"end",pageFormatter:"{current}/{total}",pageIcons:{horizontal:["M0,0L12,-10L12,10z","M0,0L-12,-10L-12,10z"],vertical:["M0,0L20,0L10,-20z","M0,0L20,0L10,20z"]},pageIconColor:"#2f4554",pageIconInactiveColor:"#aaa",pageIconSize:15,pageTextStyle:{color:"#333"},animationDurationUpdate:800},init:function(e,t,a,r){var l=o(e);s.superCall(this,"init",e,t,a,r),n(this,e,l)},mergeOption:function(e,t){s.superCall(this,"mergeOption",e,t),n(this,this.option,e)},getOrient:function(){return"vertical"===this.get("orient")?{index:1,name:"vertical"}:{index:0,name:"horizontal"}}}),u=s;e.exports=u},1183:function(e,t,a){var n=a(1),r=a(9),l=a(41),i=a(1149),o=r.Group,s=["width","height"],u=["x","y"],c=i.extend({type:"legend.scroll",newlineDisabled:!0,init:function(){c.superCall(this,"init"),this._currentIndex=0,this.group.add(this._containerGroup=new o),this._containerGroup.add(this.getContentGroup()),this.group.add(this._controllerGroup=new o),this._showController},resetInner:function(){c.superCall(this,"resetInner"),this._controllerGroup.removeAll(),this._containerGroup.removeClipPath(),this._containerGroup.__rectSize=null},renderInner:function(e,t,a,l){function i(e,a){var i=e+"DataIndex",c=r.createIcon(t.get("pageIcons",!0)[t.getOrient().name][a],{onclick:n.bind(o._pageGo,o,i,t,l)},{x:-u[0]/2,y:-u[1]/2,width:u[0],height:u[1]});c.name=e,s.add(c)}var o=this;c.superCall(this,"renderInner",e,t,a,l);var s=this._controllerGroup,u=t.get("pageIconSize",!0);n.isArray(u)||(u=[u,u]),i("pagePrev",0);var d=t.getModel("pageTextStyle");s.add(new r.Text({name:"pageText",style:{textFill:d.getTextColor(),font:d.getFont(),textVerticalAlign:"middle",textAlign:"center"},silent:!0})),i("pageNext",1)},layoutInner:function(e,t,a){var i=this.getContentGroup(),o=this._containerGroup,c=this._controllerGroup,d=e.getOrient().index,m=s[d],p=s[1-d],f=u[1-d];l.box(e.get("orient"),i,e.get("itemGap"),d?a.width:null,d?null:a.height),l.box("horizontal",c,e.get("pageButtonItemGap",!0));var h=i.getBoundingRect(),g=c.getBoundingRect(),v=this._showController=h[m]>a[m],y=[-h.x,-h.y];y[d]=i.position[d];var b=[0,0],_=[-g.x,-g.y],S=n.retrieve2(e.get("pageButtonGap",!0),e.get("itemGap",!0));if(v){"end"===e.get("pageButtonPosition",!0)?_[d]+=a[m]-g[m]:b[d]+=g[m]+S}_[1-d]+=h[p]/2-g[p]/2,i.attr("position",y),o.attr("position",b),c.attr("position",_);var E=this.group.getBoundingRect(),E={x:0,y:0};if(E[m]=v?a[m]:h[m],E[p]=Math.max(h[p],g[p]),E[f]=Math.min(0,g[f]+_[1-d]),o.__rectSize=a[m],v){var x={x:0,y:0};x[m]=Math.max(a[m]-g[m]-S,0),x[p]=E[p],o.setClipPath(new r.Rect({shape:x})),o.__rectSize=x[m]}else c.eachChild(function(e){e.attr({invisible:!0,silent:!0})});var C=this._getPageInfo(e);return null!=C.pageIndex&&r.updateProps(i,{position:C.contentPosition},!!v&&e),this._updatePageInfoView(e,C),E},_pageGo:function(e,t,a){var n=this._getPageInfo(t)[e];null!=n&&a.dispatchAction({type:"legendScroll",scrollDataIndex:n,legendId:t.id})},_updatePageInfoView:function(e,t){var a=this._controllerGroup;n.each(["pagePrev","pageNext"],function(n){var r=null!=t[n+"DataIndex"],l=a.childOfName(n);l&&(l.setStyle("fill",r?e.get("pageIconColor",!0):e.get("pageIconInactiveColor",!0)),l.cursor=r?"pointer":"default")});var r=a.childOfName("pageText"),l=e.get("pageFormatter"),i=t.pageIndex,o=null!=i?i+1:0,s=t.pageCount;r&&l&&r.setStyle("text",n.isString(l)?l.replace("{current}",o).replace("{total}",s):l({current:o,total:s}))},_getPageInfo:function(e){function t(e){var t=e.getBoundingRect().clone();return t[h]+=e.position[m],t}var a,n,r,l,i=e.get("scrollDataIndex",!0),o=this.getContentGroup(),c=o.getBoundingRect(),d=this._containerGroup.__rectSize,m=e.getOrient().index,p=s[m],f=s[1-m],h=u[m],g=o.position.slice();this._showController?o.eachChild(function(e){e.__legendDataIndex===i&&(l=e)}):l=o.childAt(0);var v=d?Math.ceil(c[p]/d):0;if(l){var y=l.getBoundingRect(),b=l.position[m]+y[h];g[m]=-b-c[h],a=Math.floor(v*(b+y[h]+d/2)/c[p]),a=c[p]&&v?Math.max(0,Math.min(v-1,a)):-1;var _={x:0,y:0};_[p]=d,_[f]=c[f],_[h]=-g[m]-c[h];var S,E=o.children();if(o.eachChild(function(e,a){var n=t(e);n.intersect(_)&&(null==S&&(S=a),r=e.__legendDataIndex),a===E.length-1&&n[h]+n[p]<=_[h]+_[p]&&(r=null)}),null!=S){var x=E[S],C=t(x);if(_[h]=C[h]+C[p]-_[p],S<=0&&C[h]>=_[h])n=null;else{for(;S>0&&t(E[S-1]).intersect(_);)S--;n=E[S].__legendDataIndex}}}return{contentPosition:g,pageIndex:a,pageCount:v,pagePrevDataIndex:n,pageNextDataIndex:r}}}),d=c;e.exports=d},1184:function(e,t,a){a(6).registerAction("legendScroll","legendscroll",function(e,t){var a=e.scrollDataIndex;null!=a&&t.eachComponent({mainType:"legend",subType:"scroll",query:e},function(e){e.setScrollDataIndex(a)})})},1280:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.tronAddresses=["27d3byPxZXKQWfXX7sJvemJJuv5M65F3vjS","27fXgQ46DcjEsZ444tjZPKULcxiUfDrDjqj","27SWXcHuQgFf9uv49FknBBBYBaH3DUk4JPx","27WtBq2KoSy5v8VnVZBZHHJcDuWNiSgjbE3"]},1281:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function o(e){return{}}Object.defineProperty(t,"__esModule",{value:!0}),t.LineReact=void 0;var s=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),u=a(0),c=n(u),d=a(11),m=a(12),p=a(223),f=n(p),h=a(6),g=n(h);a(423),a(224),a(225);var v=t.LineReact=function(e){function t(e){r(this,t);var a=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),n=("_"+Math.random()).replace(".","_");return a.state={lineId:"line"+n},a}return i(t,e),s(t,[{key:"initLine",value:function(e){var t=this.props,a=t.intl,n=t.keysData,r=t.data,l=t.format,i=t.message,o=g.default.getInstanceByDom(document.getElementById(e));void 0===o&&(o=g.default.init(document.getElementById(e))),f.default.lineChart.title.text=a.formatMessage({id:i.id}),i.href&&(f.default.lineChart.title.link="#/blockchain/stats/"+i.href),f.default.lineChart.xAxis.data=[],f.default.lineChart.series[0].data=[],r&&r.length>0&&r.map(function(e){l&&l[n[0]]?l.date?f.default.lineChart.xAxis.data.push(a.formatDate(1e3*e[n[0]])):(10===(e[n[0]]+"").length&&f.default.lineChart.xAxis.data.push(a.formatTime(1e3*e[n[0]])),13===(e[n[0]]+"").length&&f.default.lineChart.xAxis.data.push(a.formatTime(e[n[0]]))):f.default.lineChart.xAxis.data.push(e[n[0]]),f.default.lineChart.series[0].data.push(e[n[1]])}),r&&0===r.length&&(f.default.lineChart.title.text="No data"),o.setOption(f.default.lineChart)}},{key:"componentDidMount",value:function(){this.initLine(this.state.lineId)}},{key:"componentDidUpdate",value:function(){this.initLine(this.state.lineId)}},{key:"render",value:function(){return c.default.createElement("div",null,c.default.createElement("div",{id:this.state.lineId,style:this.props.style}))}}]),t}(c.default.Component),y={};t.default=(0,d.connect)(o,y,null,{pure:!1})((0,m.injectIntl)(v))}});
//# sourceMappingURL=SingleStats.a78e813e.chunk.js.map