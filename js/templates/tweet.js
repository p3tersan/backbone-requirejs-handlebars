(function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b.welcome=a(function(a,b,c,d,e){c=c||a.helpers;var f="",g,h,i="function",j=this.escapeExpression;return f+="<h1>",h=c.message,h?g=h.call(b,{hash:{}}):(g=b.message,g=typeof g===i?g():g),f+=j(g)+"</h1>\n",f})})()