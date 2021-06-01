/*! For license information please see common.455037ff.js.LICENSE.txt */
(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[592],{3905:function(e,o,r){"use strict";r.d(o,{Zo:function(){return h},kt:function(){return g}});var i=r(7294);function t(e,o,r){return o in e?Object.defineProperty(e,o,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[o]=r,e}function l(e,o){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);o&&(i=i.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var o=1;o<arguments.length;o++){var r=null!=arguments[o]?arguments[o]:{};o%2?l(Object(r),!0).forEach((function(o){t(e,o,r[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(r,o))}))}return e}function n(e,o){if(null==e)return{};var r,i,t=function(e,o){if(null==e)return{};var r,i,t={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],o.indexOf(r)>=0||(t[r]=e[r]);return t}(e,o);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)r=l[i],o.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=i.createContext({}),s=function(e){var o=i.useContext(d),r=o;return e&&(r="function"==typeof e?e(o):a(a({},o),e)),r},h=function(e){var o=s(e.components);return i.createElement(d.Provider,{value:o},e.children)},c={inlineCode:"code",wrapper:function(e){var o=e.children;return i.createElement(i.Fragment,{},o)}},m=i.forwardRef((function(e,o){var r=e.components,t=e.mdxType,l=e.originalType,d=e.parentName,h=n(e,["components","mdxType","originalType","parentName"]),m=s(r),g=t,v=m["".concat(d,".").concat(g)]||m[g]||c[g]||l;return r?i.createElement(v,a(a({ref:o},h),{},{components:r})):i.createElement(v,a({ref:o},h))}));function g(e,o){var r=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var l=r.length,a=new Array(l);a[0]=m;var n={};for(var d in o)hasOwnProperty.call(o,d)&&(n[d]=o[d]);n.originalType=e,n.mdxType="string"==typeof e?e:t,a[1]=n;for(var s=2;s<l;s++)a[s]=r[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},492:function(e,o,r){var i=r(7294);function t(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var l=t(i),a=function(){return(a=Object.assign||function(e){for(var o,r=1,i=arguments.length;r<i;r++)for(var t in o=arguments[r])Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t]);return e}).apply(this,arguments)};function n(e,o){var r={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&o.indexOf(i)<0&&(r[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var t=0;for(i=Object.getOwnPropertySymbols(e);t<i.length;t++)o.indexOf(i[t])<0&&Object.prototype.propertyIsEnumerable.call(e,i[t])&&(r[i[t]]=e[i[t]])}return r}var d=function(e,o){var r=i.createRef();return i.useEffect((function(){var i;if(r.current){var t=document.createElement("script");t.src=o,t.async=!0,t.type="text/javascript",t.innerHTML=JSON.stringify(e),r.current.appendChild(t),i=r.current}return function(){if(i)for(;i.firstChild;)i.removeChild(i.firstChild)}}),[r,e]),l.default.createElement("div",{ref:r})},s=["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],h=["EUR","USD","JPY","GBP","CHF","AUD","CAD","NZD","CNY"],c=[{name:"Indices",originalName:"Indices",symbols:[{name:"FOREXCOM:SPXUSD",displayName:"S&P 500"},{name:"FOREXCOM:NSXUSD",displayName:"Nasdaq 100"},{name:"FOREXCOM:DJI",displayName:"Dow 30"},{name:"INDEX:NKY",displayName:"Nikkei 225"},{name:"INDEX:DEU30",displayName:"DAX Index"},{name:"FOREXCOM:UKXGBP",displayName:"UK 100"}]},{name:"Commodities",originalName:"Commodities",symbols:[{name:"CME_MINI:ES1!",displayName:"S&P 500"},{name:"CME:6E1!",displayName:"Euro"},{name:"COMEX:GC1!",displayName:"Gold"},{name:"NYMEX:CL1!",displayName:"Crude Oil"},{name:"NYMEX:NG1!",displayName:"Natural Gas"},{name:"CBOT:ZC1!",displayName:"Corn"}]},{name:"Bonds",originalName:"Bonds",symbols:[{name:"CME:GE1!",displayName:"Eurodollar"},{name:"CBOT:ZB1!",displayName:"T-Bond"},{name:"CBOT:UB1!",displayName:"Ultra T-Bond"},{name:"EUREX:FGBL1!",displayName:"Euro Bund"},{name:"EUREX:FBTP1!",displayName:"Euro BTP"},{name:"EUREX:FGBM1!",displayName:"Euro BOBL"}]},{name:"Forex",originalName:"Forex",symbols:[{name:"FX:EURUSD"},{name:"FX:GBPUSD"},{name:"FX:USDJPY"},{name:"FX:USDCHF"},{name:"FX:AUDUSD"},{name:"FX:USDCAD"}]}],m=[{title:"Indices",symbols:[{s:"FOREXCOM:SPXUSD",d:"S&P 500"},{s:"FOREXCOM:NSXUSD",d:"Nasdaq 100"},{s:"FOREXCOM:DJI",d:"Dow 30"},{s:"INDEX:NKY",d:"Nikkei 225"},{s:"INDEX:DEU30",d:"DAX Index"},{s:"FOREXCOM:UKXGBP",d:"UK 100"}],originalTitle:"Indices"},{title:"Commodities",symbols:[{s:"CME_MINI:ES1!",d:"S&P 500"},{s:"CME:6E1!",d:"Euro"},{s:"COMEX:GC1!",d:"Gold"},{s:"NYMEX:CL1!",d:"Crude Oil"},{s:"NYMEX:NG1!",d:"Natural Gas"},{s:"CBOT:ZC1!",d:"Corn"}],originalTitle:"Commodities"},{title:"Bonds",symbols:[{s:"CME:GE1!",d:"Eurodollar"},{s:"CBOT:ZB1!",d:"T-Bond"},{s:"CBOT:UB1!",d:"Ultra T-Bond"},{s:"EUREX:FGBL1!",d:"Euro Bund"},{s:"EUREX:FBTP1!",d:"Euro BTP"},{s:"EUREX:FGBM1!",d:"Euro BOBL"}],originalTitle:"Bonds"},{title:"Forex",symbols:[{s:"FX:EURUSD"},{s:"FX:GBPUSD"},{s:"FX:USDJPY"},{s:"FX:USDCHF"},{s:"FX:AUDUSD"},{s:"FX:USDCAD"}],originalTitle:"Forex"}],g=[["Apple","AAPL"],["Google","GOOGL"],["Microsoft","MSFT"]],v=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"}],p=[{proName:"FOREXCOM:SPXUSD",title:"S&P 500"},{proName:"FOREXCOM:NSXUSD",title:"Nasdaq 100"},{proName:"FX_IDC:EURUSD",title:"EUR/USD"},{proName:"BITSTAMP:BTCUSD",title:"BTC/USD"},{proName:"BITSTAMP:ETHUSD",title:"ETH/USD"}];o.SB=function(e){var o=e.symbol,r=void 0===o?"NASDAQ:AAPL":o,i=e.width,t=void 0===i?480:i,l=e.height,s=void 0===l?650:l,h=e.autosize,c=void 0!==h&&h,m=e.colorTheme,g=void 0===m?"light":m,v=e.isTransparent,p=void 0!==v&&v,u=e.locale,w=void 0===u?"en":u,C=e.largeChartUrl,b=void 0===C?void 0:C,y=n(e,["symbol","width","height","autosize","colorTheme","isTransparent","locale","largeChartUrl"]);return d(a(a(a(a({},c?{width:"100%"}:{width:t}),c?{height:"100%"}:{height:s}),{symbol:r,colorTheme:g,isTransparent:p,locale:w,largeChartUrl:b}),y),"https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js")},o.aY=function(e){var o=e.width,r=void 0===o?1e3:o,i=e.height,t=void 0===i?490:i,l=e.autosize,s=void 0!==l&&l,h=e.defaultColumn,c=void 0===h?"overview":h,m=e.screener_type,g=void 0===m?"crypto_mkt":m,v=e.displayCurrency,p=void 0===v?"USD":v,u=e.colorTheme,w=void 0===u?"light":u,C=e.locale,b=void 0===C?"en":C,y=e.isTransparent,T=void 0!==y&&y,f=n(e,["width","height","autosize","defaultColumn","screener_type","displayCurrency","colorTheme","locale","isTransparent"]);return d(a(a(a(a({},s?{width:"100%"}:{width:r}),s?{height:"100%"}:{height:t}),{defaultColumn:c,screener_type:g,displayCurrency:p,colorTheme:w,locale:b,isTransparent:T}),f),"https://s3.tradingview.com/external-embedding/embed-widget-screener.js")},o.On=function(e){var o=e.colorTheme,r=void 0===o?"light":o,i=e.isTransparent,t=void 0!==i&&i,l=e.width,s=void 0===l?510:l,h=e.height,c=void 0===h?600:h,m=e.autosize,g=void 0!==m&&m,v=e.locale,p=void 0===v?"en":v,u=e.importanceFilter,w=void 0===u?"-1,0,1":u,C=e.currencyFilter,b=void 0===C?void 0:C,y=n(e,["colorTheme","isTransparent","width","height","autosize","locale","importanceFilter","currencyFilter"]);return d(a(a(a(a({colorTheme:r,isTransparent:t},g?{width:"100%"}:{width:s}),g?{height:"100%"}:{height:c}),{locale:p,importanceFilter:w,currencyFilter:b}),y),"https://s3.tradingview.com/external-embedding/embed-widget-events.js")},o.Oi=function(e){var o=e.width,r=void 0===o?770:o,i=e.height,t=void 0===i?400:i,l=e.autosize,h=void 0!==l&&l,c=e.currencies,m=void 0===c?s:c,g=e.isTransparent,v=void 0!==g&&g,p=e.colorTheme,u=void 0===p?"light":p,w=e.locale,C=void 0===w?"en":w,b=e.largeChartUrl,y=void 0===b?void 0:b,T=n(e,["width","height","autosize","currencies","isTransparent","colorTheme","locale","largeChartUrl"]);return d(a(a(a(a({},h?{width:"100%"}:{width:r}),h?{height:"100%"}:{height:t}),{autosize:h,currencies:m,isTransparent:v,colorTheme:u,locale:C,largeChartUrl:y}),T),"https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js")},o.R6=function(e){var o=e.width,r=void 0===o?700:o,i=e.height,t=void 0===i?400:i,l=e.autosize,s=void 0!==l&&l,c=e.currencies,m=void 0===c?h:c,g=e.isTransparent,v=void 0!==g&&g,p=e.colorTheme,u=void 0===p?"light":p,w=e.locale,C=void 0===w?"en":w,b=e.largeChartUrl,y=void 0===b?void 0:b,T=n(e,["width","height","autosize","currencies","isTransparent","colorTheme","locale","largeChartUrl"]);return d(a(a(a(a({},s?{width:"100%"}:{width:r}),s?{height:"100%"}:{height:t}),{currencies:m,isTransparent:v,colorTheme:u,locale:C,largeChartUrl:y}),T),"https://s3.tradingview.com/external-embedding/embed-widget-forex-heat-map.js")},o.wf=function(e){var o=e.symbol,r=void 0===o?"NASDAQ:AAPL":o,i=e.colorTheme,t=void 0===i?"light":i,l=e.isTransparent,s=void 0!==l&&l,h=e.largeChartUrl,c=void 0===h?void 0:h,m=e.displayMode,g=void 0===m?"regular":m,v=e.width,p=void 0===v?480:v,u=e.height,w=void 0===u?830:u,C=e.autosize,b=void 0!==C&&C,y=e.locale,T=void 0===y?"en":y,f=n(e,["symbol","colorTheme","isTransparent","largeChartUrl","displayMode","width","height","autosize","locale"]);return d(a(a(a(a({},b?{width:"100%"}:{width:p}),b?{height:"100%"}:{height:w}),{symbol:r,colorTheme:t,isTransparent:s,largeChartUrl:c,displayMode:g,locale:T}),f),"https://s3.tradingview.com/external-embedding/embed-widget-financials.js")},o.bg=function(e){var o=e.width,r=void 0===o?770:o,i=e.height,t=void 0===i?450:i,l=e.autosize,s=void 0!==l&&l,h=e.symbolsGroups,m=void 0===h?c:h,g=e.showSymbolLogo,v=void 0===g||g,p=e.colorTheme,u=void 0===p?"light":p,w=e.isTransparent,C=void 0!==w&&w,b=e.locale,y=void 0===b?"en":b,T=e.largeChartUrl,f=void 0===T?void 0:T,U=n(e,["width","height","autosize","symbolsGroups","showSymbolLogo","colorTheme","isTransparent","locale","largeChartUrl"]);return d(a(a(a(a({},s?{width:"100%"}:{width:r}),s?{height:"100%"}:{height:t}),{symbolsGroups:m,showSymbolLogo:v,colorTheme:u,isTransparent:C,locale:y,largeChartUrl:f}),U),"https://s3.tradingview.com/external-embedding/embed-widget-market-quotes.js")},o.dN=function(e){var o=e.colorTheme,r=void 0===o?"light":o,i=e.dateRange,t=void 0===i?"12M":i,l=e.showChart,s=void 0===l||l,h=e.locale,c=void 0===h?"en":h,g=e.largeChartUrl,v=void 0===g?void 0:g,p=e.isTransparent,u=void 0!==p&&p,w=e.showSymbolLogo,C=void 0===w||w,b=e.width,y=void 0===b?400:b,T=e.height,f=void 0===T?660:T,U=e.autosize,S=void 0!==U&&U,E=e.plotLineColorGrowing,F=void 0===E?"rgba(33, 150, 243, 1)":E,O=e.plotLineColorFalling,D=void 0===O?"rgba(33, 150, 243, 1)":O,N=e.gridLineColor,L=void 0===N?"rgba(240, 243, 250, 1)":N,X=e.scaleFontColor,P=void 0===X?"rgba(120, 123, 134, 1)":X,B=e.belowLineFillColorGrowing,M=void 0===B?"rgba(33, 150, 243, 0.12)":B,j=e.belowLineFillColorFalling,x=void 0===j?"rgba(33, 150, 243, 0.12)":j,A=e.symbolActiveColor,R=void 0===A?"rgba(33, 150, 243, 0.12)":A,G=e.tabs,z=void 0===G?m:G,I=n(e,["colorTheme","dateRange","showChart","locale","largeChartUrl","isTransparent","showSymbolLogo","width","height","autosize","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","symbolActiveColor","tabs"]);return d(a(a(a(a(a(a(a(a(a(a(a({colorTheme:r,dateRange:t,showChart:s,locale:c,largeChartUrl:v,isTransparent:u,showSymbolLogo:C},S?{width:"100%"}:{width:y}),S?{height:"100%"}:{height:f}),s?{plotLineColorGrowing:F}:{}),s?{plotLineColorFalling:D}:{}),s?{gridLineColor:L}:{}),s?{scaleFontColor:P}:{}),s?{belowLineFillColorGrowing:M}:{}),s?{belowLineFillColorFalling:x}:{}),s?{symbolActiveColor:R}:{}),{tabs:z}),I),"https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js")},o.h7=function(e){var o=e.symbol,r=void 0===o?"FX:EURUSD":o,i=e.width,t=void 0===i?350:i,l=e.height,s=void 0===l?220:l,h=e.locale,c=void 0===h?"en":h,m=e.dateRange,g=void 0===m?"12M":m,v=e.colorTheme,p=void 0===v?"light":v,u=e.trendLineColor,w=void 0===u?"#37a6ef":u,C=e.underLineColor,b=void 0===C?"#E3F2FD":C,y=e.isTransparent,T=void 0!==y&&y,f=e.autosize,U=void 0!==f&&f,S=e.largeChartUrl,E=void 0===S?void 0:S,F=n(e,["symbol","width","height","locale","dateRange","colorTheme","trendLineColor","underLineColor","isTransparent","autosize","largeChartUrl"]);return d(a(a(a(a({symbol:r},U?{width:"100%"}:{width:t}),U?{height:"100%"}:{height:s}),{locale:c,dateRange:g,colorTheme:p,trendLineColor:w,underLineColor:b,isTransparent:T,autosize:U,largeChartUrl:E}),F),"https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js")},o.o4=function(e){var o=e.width,r=void 0===o?1100:o,i=e.height,t=void 0===i?512:i,l=e.autosize,s=void 0!==l&&l,h=e.defaultColumn,c=void 0===h?"overview":h,m=e.defaultScreen,g=void 0===m?"general":m,v=e.market,p=void 0===v?"forex":v,u=e.showToolbar,w=void 0===u||u,C=e.colorTheme,b=void 0===C?"light":C,y=e.locale,T=void 0===y?"en":y,f=e.isTransparent,U=void 0!==f&&f,S=e.largeChartUrl,E=void 0===S?void 0:S,F=n(e,["width","height","autosize","defaultColumn","defaultScreen","market","showToolbar","colorTheme","locale","isTransparent","largeChartUrl"]);return d(a(a(a(a({},s?{width:"100%"}:{width:r}),s?{height:"100%"}:{height:t}),{autosize:s,defaultColumn:c,defaultScreen:g,market:p,showToolbar:w,colorTheme:b,locale:T,isTransparent:U,largeChartUrl:E}),F),"https://s3.tradingview.com/external-embedding/embed-widget-screener.js")},o.kK=function(e){var o=e.symbol,r=void 0===o?"FX:EURUSD":o,i=e.width,t=void 0===i?350:i,l=e.autosize,s=void 0!==l&&l,h=e.colorTheme,c=void 0===h?"light":h,m=e.isTransparent,g=void 0!==m&&m,v=e.locale,p=void 0===v?"en":v,u=e.largeChartUrl,w=void 0===u?void 0:u,C=n(e,["symbol","width","autosize","colorTheme","isTransparent","locale","largeChartUrl"]);return d(a(a(a({symbol:r},s?{width:"100%"}:{width:t}),{autosize:s,colorTheme:c,isTransparent:g,locale:p,largeChartUrl:w}),C),"https://s3.tradingview.com/external-embedding/embed-widget-single-quote.js")},o.xO=function(e){var o=e.colorTheme,r=void 0===o?"light":o,i=e.dateRange,t=void 0===i?"12M":i,l=e.exchange,s=void 0===l?"US":l,h=e.showChart,c=void 0===h||h,m=e.locale,g=void 0===m?"en":m,v=e.largeChartUrl,p=void 0===v?void 0:v,u=e.isTransparent,w=void 0!==u&&u,C=e.showSymbolLogo,b=void 0===C||C,y=e.width,T=void 0===y?400:y,f=e.height,U=void 0===f?600:f,S=e.autosize,E=void 0!==S&&S,F=e.plotLineColorGrowing,O=void 0===F?"rgba(33, 150, 243, 1)":F,D=e.plotLineColorFalling,N=void 0===D?"rgba(33, 150, 243, 1)":D,L=e.gridLineColor,X=void 0===L?"rgba(240, 243, 250, 1)":L,P=e.scaleFontColor,B=void 0===P?"rgba(120, 123, 134, 1)":P,M=e.belowLineFillColorGrowing,j=void 0===M?"rgba(33, 150, 243, 0.12)":M,x=e.belowLineFillColorFalling,A=void 0===x?"rgba(33, 150, 243, 0.12)":x,R=e.symbolActiveColor,G=void 0===R?"rgba(33, 150, 243, 0.12)":R,z=n(e,["colorTheme","dateRange","exchange","showChart","locale","largeChartUrl","isTransparent","showSymbolLogo","width","height","autosize","plotLineColorGrowing","plotLineColorFalling","gridLineColor","scaleFontColor","belowLineFillColorGrowing","belowLineFillColorFalling","symbolActiveColor"]);return d(a(a(a(a(a(a(a(a(a(a({colorTheme:r,dateRange:t,exchange:s,showChart:c,locale:g,largeChartUrl:p,isTransparent:w,showSymbolLogo:b},E?{width:"100%"}:{width:T}),E?{height:"100%"}:{height:U}),c?{plotLineColorGrowing:O}:{}),c?{plotLineColorFalling:N}:{}),c?{gridLineColor:X}:{}),c?{scaleFontColor:B}:{}),c?{belowLineFillColorGrowing:j}:{}),c?{belowLineFillColorFalling:A}:{}),c?{symbolActiveColor:G}:{}),z),"https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js")},o.o2=function(e){var o=e.symbol,r=void 0===o?"NASDAQ:AAPL":o,i=e.width,t=void 0===i?1e3:i,l=e.locale,s=void 0===l?"en":l,h=e.colorTheme,c=void 0===h?"light":h,m=e.isTransparent,g=void 0!==m&&m,v=e.largeChartUrl,p=void 0===v?void 0:v,u=n(e,["symbol","width","locale","colorTheme","isTransparent","largeChartUrl"]);return d(a({symbol:r,width:t,locale:s,colorTheme:c,isTransparent:g,largeChartUrl:p},u),"https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js")},o.Xw=function(e){var o=e.interval,r=void 0===o?"1m":o,i=e.width,t=void 0===i?425:i,l=e.height,s=void 0===l?450:l,h=e.autosize,c=void 0!==h&&h,m=e.isTransparent,g=void 0!==m&&m,v=e.symbol,p=void 0===v?"NASDAQ:AAPL":v,u=e.showIntervalTabs,w=void 0===u||u,C=e.locale,b=void 0===C?"en":C,y=e.colorTheme,T=void 0===y?"light":y,f=e.largeChartUrl,U=void 0===f?void 0:f,S=n(e,["interval","width","height","autosize","isTransparent","symbol","showIntervalTabs","locale","colorTheme","largeChartUrl"]);return d(a(a(a(a({interval:r},c?{width:"100%"}:{width:t}),c?{height:"100%"}:{height:s}),{isTransparent:g,symbol:p,showIntervalTabs:w,locale:b,colorTheme:T,largeChartUrl:U}),S),"https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js")},o.vB=function(e){var o=e.colorTheme,r=void 0===o?"light":o,i=e.isTransparent,t=void 0!==i&&i,l=e.showSymbolLogo,s=void 0===l||l,h=e.locale,c=void 0===h?"en":h,m=e.symbols,g=void 0===m?v:m,p=n(e,["colorTheme","isTransparent","showSymbolLogo","locale","symbols"]);return d(a({colorTheme:r,isTransparent:t,showSymbolLogo:s,locale:c,symbols:g},p),"https://s3.tradingview.com/external-embedding/embed-widget-tickers.js")},o.GQ=function(e){var o=e.symbols,r=void 0===o?p:o,i=e.showSymbolLogo,t=void 0===i||i,l=e.colorTheme,s=void 0===l?"light":l,h=e.isTransparent,c=void 0!==h&&h,m=e.largeChartUrl,g=void 0===m?void 0:m,v=e.displayMode,u=void 0===v?"adaptive":v,w=e.locale,C=void 0===w?"en":w,b=n(e,["symbols","showSymbolLogo","colorTheme","isTransparent","largeChartUrl","displayMode","locale"]);return d(a({symbols:r,showSymbolLogo:t,colorTheme:s,isTransparent:c,largeChartUrl:g,displayMode:u,locale:C},b),"https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js")},o.TY=function(e){var o=e.colorTheme,r=void 0===o?"light":o,i=e.isTransparent,t=void 0!==i&&i,l=e.displayMode,s=void 0===l?"regular":l,h=e.width,c=void 0===h?480:h,m=e.height,g=void 0===m?830:m,v=e.autosize,p=void 0!==v&&v,u=e.locale,w=void 0===u?"en":u,C=e.symbol,b=void 0===C?void 0:C,y=e.largeChartUrl,T=void 0===y?void 0:y,f=n(e,["colorTheme","isTransparent","displayMode","width","height","autosize","locale","symbol","largeChartUrl"]);return d(a(a(a(a({},p?{width:"100%"}:{width:c}),p?{height:"100%"}:{height:g}),{colorTheme:r,isTransparent:t,displayMode:s,locale:w,symbol:b,largeChartUrl:T}),f),"https://s3.tradingview.com/external-embedding/embed-widget-timeline.js")}}}]);