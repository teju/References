/*! Thrive Leads - The ultimate Lead Capture solution for wordpress - 2016-04-13
* https://thrivethemes.com 
* Copyright (c) 2016 * Thrive Themes */
var TL_Front=TL_Front||{},ThriveGlobal=ThriveGlobal||{$j:jQuery.noConflict()};TL_Front.add_page_css=function(a){ThriveGlobal.$j.each(a,function(a,b){a+="-css",ThriveGlobal.$j("#"+a).length||ThriveGlobal.$j('<link rel="stylesheet" id="'+a+'" type="text/css" href="'+b+'"/>').appendTo("head")})},TL_Front.add_head_script=function(a,b,c){var d=document.createElement("script"),e=ThriveGlobal.$j("head")[0];d.async=!0,"function"==typeof c&&(d.onload=d.onreadystatechange=c),"undefined"!=typeof b&&(d.id=b),d.src=a,e.insertBefore(d,e.firstChild)},TL_Front.add_page_js=function(a,b){function c(){return 0===d?void b():void setTimeout(c,50)}"function"!=typeof b&&(b=function(){});var d=0;ThriveGlobal.$j.each(a,function(a,b){if(a+="-js",b&&!ThriveGlobal.$j("#"+a).length){if(d++,-1!==b.indexOf("connect.facebook.net"))return TL_Front.add_head_script(b,a,function(){d--}),!0;ThriveGlobal.$j.getScript(b,function(){d--})}}),c()},ThriveGlobal.$j(function(){function a(){function a(a){if(a.find('[data-validation="email"]').length)return a.find('[data-validation="email"]').val();var b="";return a.find("input").each(function(){return this.name&&this.name.match(/email/i)?(b=this.value,!1):void 0}),b}return TL_Const.forms?(ThriveGlobal.$j("body").on("submit",".tve-leads-conversion-object form",function(b){var c=ThriveGlobal.$j(this),d=c.parents(".tve-leads-conversion-object").first().attr("data-tl-type"),e={};if(c.data("tl-do-submit")||!d||!TL_Const.forms[d])return!0;c.find("input").each(function(){var a=ThriveGlobal.$j(this),b=a.attr("name");"undefined"!=typeof b&&-1===TL_Const.ignored_fields.indexOf(b)&&(e[a.attr("name")]=a.val())});var f={security:TL_Const.security,action:TL_Const.action_conversion,type:d,tl_data:TL_Const.forms[d],custom_fields:e,email:a(c),current_screen:TL_Const.current_screen};return ThriveGlobal.$j.each(TL_Const.custom_post_data,function(a,b){f[a]=b}),ThriveGlobal.$j.ajax({url:TL_Const.ajax_url,data:f,type:"post",async:!1}),("undefined"==typeof c.attr("action")||""===c.attr("action"))&&(b.preventDefault(),location.reload()),!0}),void ThriveGlobal.$j("body").on("form_conversion.tcb",".tve-leads-conversion-object form",function(a){var b=ThriveGlobal.$j(this),c=b.parents(".tve-leads-conversion-object").first().attr("data-tl-type");if(!c||!TL_Const.forms[c])return!0;var d={type:c,tl_data:TL_Const.forms[c],current_screen:TL_Const.current_screen};ThriveGlobal.$j.each(TL_Const.custom_post_data,function(a,b){d[a]=b}),a.post_data=a.post_data||{},a.post_data.thrive_leads=d}).on("lead_conversion_success.tcb",".tve_lead_lock_shortcode form",function(a){var b=ThriveGlobal.$j(this),c=b.parents(".tve_content_lock");c.removeClass("tve_lead_lock").find(".tve_lead_lock_shortcode").remove(),c.find(".tve_lead_locked_overlay").remove(),a.content_unlocked=!0})):!1}function b(b){function e(a){var b=a.replace("two_step_","");d.filter(".tl-2step-trigger-"+b).show()}function f(){return c?(TCB_Front.event_triggers(ThriveGlobal.$j("body")),TCB_Front.onDOMReady(),a(),void ThriveGlobal.$j(TCB_Front).trigger("tl-ajax-loaded")):void setTimeout(f,50)}if(b&&b.res&&b.js&&b.html){if(TL_Front.add_page_css(b.res.css),TL_Front.add_page_css(b.res.fonts),b.html&&(b.html.widget||ThriveGlobal.$j(".tl-widget-container").remove(),ThriveGlobal.$j.each(b.html,function(a,c){if(!c)return!0;if("in_content"===a){var d="after",f=ThriveGlobal.$j(".tve-tl-cnt-wrap"),g=f.find("p").filter(":visible");0===g.length&&0==b.in_content_pos?ThriveGlobal.$j(".tve-tl-cnt-wrap").prepend(c):(0==b.in_content_pos&&(b.in_content_pos=1,d="before"),g.eq(parseInt(b.in_content_pos)-1)[d](c))}else{var h=ThriveGlobal.$j(".tl-placeholder-f-type-"+a);if(b.js[a]&&b.js[a].content_locking){var i=h.parents(".tve_content_lock").first();if(b.js[a].has_conversion)return i.removeClass("tve_lock_hide"),!0;"tve_lock_blur"==b.js[a].lock&&i.removeClass("tve_lock_hide").addClass(b.js[a].lock)}h.replaceWith(c),"widget"===a&&ThriveGlobal.$j(".tl-widget-container").children().unwrap(),0===a.indexOf("two_step")&&e(a)}})),b.body_end){var g=ThriveGlobal.$j(b.body_end);g.find(".tve_wistia_popover").each(function(){ThriveGlobal.$j("#"+this.id).length&&this.parentNode.removeChild(this)}),ThriveGlobal.$j("body").append(g)}TL_Front.add_page_js(b.res.js,function(){c=!0}),setTimeout(f,50),TL_Const.forms=b.js}}if("undefined"!=typeof TL_Const){if(ThriveGlobal.$j(".tve-leads-screen-filler iframe, .tve-leads-ribbon iframe").not(".thrv_social_default iframe").not(".tcb-dr-done").each(function(){var a=ThriveGlobal.$j(this).addClass("tcb-dr-done");a.attr("src")&&a.attr("data-src",a.attr("src")),a.attr("src","")}),ThriveGlobal.$j(TL_Front).on("showform.thriveleads",function(a,b){var c,d=b.$target?b.$target:ThriveGlobal.$j("."+b.form_id);d.length&&(d.attr("data-s-state")&&(d=d.closest(".tl-states-root").find('[data-state="'+d.attr("data-s-state")+'"] .tl-lb-target')),c=d.hasClass("tve-tl-anim")?d:d.find(".tve-tl-anim"),d.css("display",""),setTimeout(function(){c.addClass("tve-leads-triggered"),TL_Front.handle_typefocus(c,"start"),TCB_Front.postGridLayout()},0),"function"==typeof TL_Front["open_"+b.form_type]?TL_Front["open_"+b.form_type](d,b.TargetEvent):d.show(),setTimeout(function(){d.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src")&&a.attr("src",a.attr("data-src"))})},200))}),TL_Const.ajax_load||TL_Front.do_impression(),TL_Const.ajax_load){var c=!1,d=ThriveGlobal.$j(".tve-leads-two-step-trigger").hide(),e={main_group_id:TL_Const.main_group_id,shortcode_ids:TL_Const.shortcode_ids,two_step_ids:TL_Const.two_step_ids,action:"tve_leads_ajax_load_forms",security:TL_Const.security,display_options:TL_Const.display_options,current_screen:TL_Const.current_screen};return ThriveGlobal.$j.each(TL_Const.custom_post_data,function(a,b){e[a]=b}),void(window.TVE_Dash&&!TVE_Dash.ajax_sent?ThriveGlobal.$j(document).on("tve-dash.load",function(a){TVE_Dash.add_load_item("tl_lazy_load",e,b)}):ThriveGlobal.$j.ajax({url:TL_Const.ajax_url,type:"post",dataType:"json",data:e,xhrFields:{withCredentials:!0}}).done(b))}a()}}),TL_Front.do_impression=function(){var a=TL_Front.impressions_data;if(void 0===a)return void console.log("No form to register impression for !");var b={security:TL_Const.security,action:TL_Const.action_impression,tl_data:a,current_screen:TL_Const.current_screen};ThriveGlobal.$j.each(TL_Const.custom_post_data,function(a,c){b[a]=c}),window.TVE_Dash&&!TVE_Dash.ajax_sent?TVE_Dash.add_load_item("tl_impression",b):ThriveGlobal.$j.post(TL_Const.ajax_url,b)},TL_Front.switch_lightbox_state=function(a,b){return a.find(".tve_p_lb_overlay").css("opacity","0.8"),a.find(".tve_p_lb_content").css("top",b.find(".tve_p_lb_content").css("top")).addClass("tve-leads-triggered"),window.tve_lb_switch_state=!0,TL_Front.open_lightbox(a.find(".tl-lb-target"))},TL_Front.close_lightbox=function(){var a=ThriveGlobal.$j("body"),b=ThriveGlobal.$j("html"),c="tve-o-hidden tve-l-open tve-hide-overflow",d=arguments[0]||a.data("tl-open-lightbox");d&&d.length&&(d.find(".tve-tl-anim").removeClass("tve-leads-triggered"),window.tve_lb_switch_state||(a.removeClass(c).css("padding-right",""),b.removeClass(c).removeClass(b.data("tl-anim-class"))),window.tve_lb_switch_state=!1,setTimeout(function(){d.addClass("tve_lb_closing"),d.removeClass("tve_lb_open tve_lb_opening tve_lb_closing tve_p_lb_background").css({visibility:"hidden",position:"fixed",left:"-9000px"}).find("tve_p_lb_content").trigger("tve.lightbox-close")},200),d.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),TL_Front.handle_typefocus(d,"pause"),ThriveGlobal.$j("#tve-lg-error-container").hide())},TL_Front.open_lightbox=function(a,b){function c(){var a=ThriveGlobal.$j,b={border:"none",height:"200px",margin:"0",padding:"0",width:"200px"},c=a("<div>").css(a.extend({},b)),d=a("<div>").css(a.extend({left:"-1000px",overflow:"scroll",position:"absolute",top:"-1000px"},b)).append(c).appendTo("body").scrollLeft(1e3).scrollTop(1e3),e={height:d.offset().top-c.offset().top||0,width:d.offset().left-c.offset().left||0};return d.remove(),e}var d=window.tve_lb_switch_state;ThriveGlobal.$j.fn.thrive_iphone_placeholder&&a.find("input[placeholder]").thrive_iphone_placeholder(),TL_Front.close_lightbox(ThriveGlobal.$j(".tve_p_lb_background.tve_lb_open")),a.css({visibility:"",position:"",left:"",display:""}).parents(".tl-style").css({visibility:"",position:"",left:"",display:""});var e=ThriveGlobal.$j("body"),f=ThriveGlobal.$j("html"),g="tve-o-hidden tve-l-open tve-hide-overflow",h=c().width,i=parseInt(e.css("paddingRight")),j=ThriveGlobal.$j(".tve_p_lb_background.tve_lb_open").length;isNaN(i)&&(i=0),ThriveGlobal.$j(".tve_p_lb_close").off().on("click",function(){TL_Front.close_lightbox()}),e.off("keyup.tve_lb_close").on("keyup.tve_lb_close",function(a){27==a.which&&TL_Front.close_lightbox()}),ThriveGlobal.$j(".tve_p_lb_overlay").off("click.tve_lb_close").on("click.tve_lb_close",function(){TL_Front.close_lightbox()}),e.data("tl-open-lightbox",a),a.addClass("tve_p_lb_background"),e.addClass(g),f.addClass(g);var k=ThriveGlobal.$j(window).height(),l=k<ThriveGlobal.$j(document).height();!d&&l&&e.css("padding-right",i+h+"px"),a.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=jQuery(this);a.attr("data-src")&&a.attr("src",a.attr("data-src"))});var m="";ThriveGlobal.$j.each(a.parents(".tl-states-root").attr("class").split(" "),function(a,b){return 0===b.indexOf("tl-anim")?(m=b,!1):void 0}),f.addClass(m).data("tl-anim-class",m),setTimeout(function(){function b(){var b=a.find(".tve_p_lb_content").outerHeight(!0)+2*parseInt(a.css("padding-top")),c=a.find(".tve_p_lb_content"),d=ThriveGlobal.$j(window).height(),e=(d-b)/2;a.find(".tve_p_lb_overlay").css({height:b+80+"px","min-height":d+"px"}),j?c.animate({top:40>e?40:e},100):c.css("top",(40>e?40:e)+"px"),b+40>d&&a.addClass("tve-scroll")}setTimeout(function(){a.addClass("tve_lb_opening")},0),a.find("iframe").not(".thrv_social_default iframe").each(function(){var a=ThriveGlobal.$j(this);!a.data("tve_ifr_loaded")&&a.attr("data-src")&&a.data("tve_ifr_loaded",1).attr("src",a.attr("data-src"))}),b(),ThriveGlobal.$j(window).on("resize",b)},20),setTimeout(function(){a.removeClass("tve_lb_opening").addClass("tve_lb_open").find(".tve_p_lb_content").trigger("tve.lightbox-open"),ThriveGlobal.$j(window).trigger("scroll")},300),b&&b.preventDefault&&(b.preventDefault(),b.stopPropagation()),a.parents(".tl-states-root").off("switchstate").on("switchstate",function(a,b){var c=Array.prototype.slice.call(arguments,1);TL_Front.switch_lightbox_state.apply(TL_Front,c)})},TL_Front.open_two_step_lightbox=TL_Front.open_lightbox,TL_Front.open_ribbon=function(a){function b(){var b=a.attr("data-position")||"top";"top"===b?a.css("top",ThriveGlobal.$j("#wpadminbar").length?"32px":"0px"):"bottom"===b&&(a.css("bottom","0px"),a.css("top","auto")),a.find(".tve-ribbon-close").on("click",function(){a.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),a.removeClass("tve-leads-triggered"),"top"===b?ThriveGlobal.$j("body").animate({"margin-top":"0px"},200):"bottom"===b&&ThriveGlobal.$j("body").animate({"margin-bottom":"0px"},200),TL_Front.handle_typefocus(a,"pause"),setTimeout(function(){a.css(b,"")},400),ThriveGlobal.$j("#tve-lg-error-container").hide()});var c=0,d=a.outerHeight(),e=setInterval(function(){c++;var f=a.outerHeight();(f!=d||10==c)&&clearInterval(e),"top"===b?ThriveGlobal.$j("body").animate({"margin-top":f+"px"},200):"bottom"===b&&ThriveGlobal.$j("body").animate({"margin-bottom":f+"px"},200)},100);a.off("switchstate").on("switchstate",function(a,b){var c=Array.prototype.slice.call(arguments,1);TL_Front.switch_ribbon_state.apply(TL_Front,c)})}TL_Const.forms.greedy_ribbon?(TL_Const.close_callbacks=TL_Const.close_callbacks||{},TL_Const.close_callbacks.greedy_ribbon=[b]):b()},TL_Front.switch_ribbon_state=function(a){var b=a.outerHeight(!0),c="top"===a.parent().attr("data-position")?"margin-top":"margin-bottom",d={};d[c]=b+"px",ThriveGlobal.$j("body").animate(d,200)},TL_Front.open_greedy_ribbon=function(a){var b=ThriveGlobal.$j("body"),c=ThriveGlobal.$j(window);c.scrollTop(0),b.addClass("tve-tl-gr-anim"),a.css("top",ThriveGlobal.$j("#wpadminbar").length?"32px":"0px");var d=c.height();b[0].style.setProperty("margin-top",d+"px","important");var e=1;c.scroll(function(){var f=b.hasClass("tve-tl-gr-anim");if(1===e&&f){var g=c.scrollTop();if(g>d){var h=a.find(".tve_ea_thrive_wistia").length||a.find(".tve_with_wistia_popover");h&&ThriveGlobal.$j(".wistia_placebo_close_button").trigger("click"),b.removeClass("tve-tl-gr-anim"),a.addClass("tve-no-animation");var i=g-d;a.removeClass("tve-leads-triggered"),a.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),b[0].style.removeProperty("margin-top"),b.css("margin-top",d),b.css("margin-top","0px"),c.scrollTop(i),a.removeClass("tve-no-animation"),e=0,TL_Front.form_closed("greedy_ribbon")}}}),a.off("switchstate").on("switchstate",function(a,b){})},TL_Front.open_screen_filler=function(a,b){function c(a){a.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),a.removeClass("tve-leads-triggered"),TL_Front.handle_typefocus(a,"pause"),ThriveGlobal.$j(document).off("keyup.close-screenfiller"),ThriveGlobal.$j("body").animate({"margin-top":"0px"},200),e.removeClass(d),f.removeClass(f.data("tl-s-anim-class")),setTimeout(function(){a.css("top","").hide()},400),ThriveGlobal.$j("#tve-lg-error-container").hide()}var d="tve-so-hidden tve-sl-open tve-s-hide-overflow",e=ThriveGlobal.$j("html,body"),f=ThriveGlobal.$j("html");if(ThriveGlobal.$j.fn.thrive_iphone_placeholder&&a.find("input[placeholder]").thrive_iphone_placeholder(),a.css("top",ThriveGlobal.$j("#wpadminbar").length?"32px":"0px").css("visibility",""),a.hasClass("stl-anim-slip_from_top")===!0){var g=ThriveGlobal.$j(window).scrollTop();a.css("top",g).css("visibility","")}a.find(".tve-screen-filler-close").on("click",function(){c(a)}),e.addClass(d);var h="";ThriveGlobal.$j.each(a.attr("class").split(" "),function(a,b){return 0===b.indexOf("stl-anim")?(h=b,!1):void 0}),f.addClass(h).data("tl-s-anim-class",h),b&&b.preventDefault&&(b.preventDefault(),b.stopPropagation()),ThriveGlobal.$j(document).off("keyup.close-screenfiller").on("keyup.close-screenfiller",function(b){27==b.which&&c(a)})},TL_Front.switch_slide_in_state=function(a){TL_Front.slide_in_position(a.find(".thrv-leads-slide-in"))},TL_Front.slide_in_position=function(a){if(ThriveGlobal.$j(window).width()<=782){var b="tve-o-hidden tve-l-open tve-hide-overflow",c=ThriveGlobal.$j(window).height(),d=ThriveGlobal.$j("body"),e=ThriveGlobal.$j("html");setTimeout(function(){var f=a.outerHeight(),g=(c-f)/2;d.addClass(b),e.addClass(b),a.parents(".tve-leads-conversion-object").first().css({height:f+80+"px","min-height":c+"px"}),a.css("top",(40>g?40:g)+"px"),f+40>c&&a.parents(".tve-leads-slide-in").css("overflow-y","scroll")},0)}},TL_Front.open_slide_in=function(a){function b(a){a.removeClass("tve-leads-triggered"),TL_Front.handle_typefocus(a,"pause"),ThriveGlobal.$j(document).off("keyup.close-slidein"),d.removeClass(c),e.removeClass(c),a.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),ThriveGlobal.$j("#tve-lg-error-container").hide()}var c="tve-o-hidden tve-l-open tve-hide-overflow",d=ThriveGlobal.$j("body"),e=ThriveGlobal.$j("html");ThriveGlobal.$j.fn.thrive_iphone_placeholder&&a.find("input[placeholder]").thrive_iphone_placeholder(),TL_Front.slide_in_position(a.find(".thrv-leads-slide-in").filter(":visible")),a.off().on("click",".tve-leads-close",function(){b(a)}),a.on("switchstate",function(a,b){var c=Array.prototype.slice.call(arguments,1);TL_Front.switch_slide_in_state.apply(TL_Front,c)}),ThriveGlobal.$j(document).off("keyup.close-slidein").on("keyup.close-slidein",function(c){27==c.which&&b(a)})},TL_Front.close_form=function(a,b,c,d){var e=ThriveGlobal.$j(a),f=e.parents(".tve-leads-triggered"),g=f.attr("data-tl-type");switch(void 0===g&&f.hasClass("tve-leads-widget")?g="widget":void 0===g&&f.hasClass("tve-leads-post-footer")?g="post-footer":void 0===g&&f.hasClass("tve-leads-slide-in")?g="slide-in":void 0===g&&f.hasClass("tve-leads-in-content")?g="in-content":void 0===g&&f.hasClass("tve-leads-shortcode")?g="shortcode":void 0===g&&f.hasClass("tve-leads-greedy_ribbon")&&(g="greedy_ribbon"),f.removeClass("tve-leads-triggered"),TL_Front.handle_typefocus(f,"pause"),g){case"ribbon":f.find(".tve-ribbon-close").trigger("click");break;case"slide-in":f.find(".tve-leads-close").trigger("click"),f.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")});break;case"post-footer":case"in-content":case"shortcode":f.fadeOut(200,function(){TL_Front.form_closed(g)});break;case"widget":f.parent().slideUp(200);break;case"greedy_ribbon":var h=ThriveGlobal.$j("body"),i=ThriveGlobal.$j(window),j=h.css("margin-top");h[0].style.removeProperty("margin-top"),f.find(".thrv_responsive_video iframe, .thrv_custom_html_shortcode iframe, .thrv_responsive_video video").each(function(){var a=ThriveGlobal.$j(this);a.attr("data-src",a.attr("src")),a.attr("src","")}),h.css("margin-top",j),i.scrollTop(0),h.animate({"margin-top":"0px"},600,"linear",function(){TL_Front.form_closed(g)}).removeClass("tve-tl-gr-anim")}},TL_Front.form_closed=function(a){TL_Const.close_callbacks&&TL_Const.close_callbacks[a]&&ThriveGlobal.$j.each(TL_Const.close_callbacks[a],function(a,b){ThriveGlobal.$j.isFunction(b)&&b()})},TL_Front.handle_typefocus=function(a,b){a.find(".tve_typefocus").each(function(){var a=jQuery(this);a.attr("data-typefocus",b)})};