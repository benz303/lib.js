LazyLoad=function(a){function m(){var a=d.css,b;if(a){b=g.length;while(--b>=0)if(g[b].href===a.urls[0]){i("css");break}e+=1,a&&(e<200?setTimeout(m,50):i("css"))}}function l(a){try{a.sheet.cssRules}catch(b){e+=1,e<200?setTimeout(function(){l(a)},50):i("css");return}i("css")}function k(e,g,k,n,o){var p=function(){i(e)},q=e==="css",r,s,t,u,v,w;j();if(g){g=typeof g=="string"?[g]:g.concat();if(q||b.async||b.gecko||b.opera)f[e].push({urls:g,callback:k,obj:n,context:o});else for(r=0,s=g.length;r<s;++r)f[e].push({urls:[g[r]],callback:r===s-1?k:null,obj:n,context:o})}if(!d[e]&&!!(u=d[e]=f[e].shift())){c||(c=a.head||a.getElementsByTagName("head")[0]),v=u.urls;for(r=0,s=v.length;r<s;++r)w=v[r],q?t=b.gecko?h("style"):h("link",{href:w,rel:"stylesheet"}):(t=h("script",{src:w}),t.async=!1),t.className="lazyload",t.setAttribute("charset","utf-8"),b.ie&&!q?t.onreadystatechange=function(){/loaded|complete/.test(t.readyState)&&(t.onreadystatechange=null,p())}:q&&(b.gecko||b.webkit)?b.webkit?(u.urls[r]=t.href,m()):(t.innerHTML='@import "'+w+'";',l(t)):t.onload=t.onerror=p,c.appendChild(t)}}function j(){if(!b){var c=navigator.userAgent;b={async:a.createElement("script").async===!0},(b.webkit=/AppleWebKit\//.test(c))||(b.ie=/MSIE/.test(c))||(b.opera=/Opera/.test(c))||(b.gecko=/Gecko\//.test(c))||(b.unknown=!0)}}function i(a){var b=d[a],c,g;b&&(c=b.callback,g=b.urls,g.shift(),e=0,g.length||(c&&c.call(b.context,b.obj),d[a]=null,f[a].length&&k(a)))}function h(b,c){var d=a.createElement(b),e;for(e in c)c.hasOwnProperty(e)&&d.setAttribute(e,c[e]);return d}var b,c,d={},e=0,f={css:[],js:[]},g=a.styleSheets;return{css:function(a,b,c,d){k("css",a,b,c,d)},js:function(a,b,c,d){k("js",a,b,c,d)}}}(this.document);LazyLoad['lazyload']=function(callback){LazyLoad.js(['src/example/javascripts/lazyload.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['sizzle']=function(callback){LazyLoad.js(['src/example/javascripts/sizzle.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['jquery']=function(callback){LazyLoad.js(['src/example/javascripts/jquery.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['underscore']=function(callback){LazyLoad.js(['src/example/javascripts/underscore.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['localfile']=function(callback){LazyLoad.js(['src/example/javascripts/localfile.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['jquery-cookie']=function(callback){LazyLoad.js(['src/example/javascripts/jquery.js','src/example/javascripts/jquery-cookie.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['jqueryui']=function(callback){LazyLoad.css(['src/example/stylesheets/jqueryui.css']);LazyLoad.js(['src/example/javascripts/jquery.js','src/example/javascripts/jqueryui.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['qunit']=function(callback){LazyLoad.css(['src/example/stylesheets/qunit.css']);LazyLoad.js(['src/example/javascripts/jquery.js','src/example/javascripts/qunit.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['colorbox']=function(callback){LazyLoad.css(['src/example/stylesheets/colorbox.css']);LazyLoad.js(['src/example/javascripts/jquery.js','src/example/javascripts/colorbox.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['cleditor']=function(callback){LazyLoad.css(['src/example/stylesheets/cleditor.css']);LazyLoad.js(['src/example/javascripts/jquery.js','src/example/javascripts/cleditor.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['jqGrid']=function(callback){LazyLoad.css(['src/example/stylesheets/jqueryui.css','src/example/stylesheets/jqGrid.css']);LazyLoad.js(['src/example/javascripts/jquery.js','src/example/javascripts/jqueryui.js','src/example/javascripts/jqGrid.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['backbone']=function(callback){LazyLoad.js(['src/example/javascripts/underscore.js','src/example/javascripts/backbone.js'],function(){if(typeof callback!=='undefined'){callback();}});};LazyLoad['qunit']();