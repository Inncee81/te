(function () {var head = document.getElementsByTagName("head")[0];var style = document.createElement("style");style.type = "text/css";style.innerHTML = ".kx-dropdown-list{background-color:#000;font-family:proxima-nova,'helvetica neue',helvetica,arial,sans-serif;color:#aaa;font-size:14px;text-transform:uppercase;text-align:left;position:relative;cursor:pointer;height:24px;background-image:url(/modules/common/components/dropdown_list/images/arrow.png?1463612477);background-repeat:no-repeat;background-position:right center}.kx-dropdown-list.kx-dropdown-list-disabled{cursor:default;color:#636363}.kx-dropdown-list .kx-dropdown-list-label-wrapper,.kx-dropdown-list .kx-dropdown-list-panel{border:1px solid #383838}.kx-dropdown-list .kx-dropdown-list-label-wrapper{display:table;border-radius:0;border:1px solid #494949;height:100%;width:100%;padding-right:30px;padding-left:10px;position:relative}.kx-dropdown-list .kx-dropdown-list-label-icon{width:18px;height:20px;background-size:cover;background-position:0 0;background-repeat:no-repeat;position:absolute;left:4px;top:5px}.kx-dropdown-list .kx-dropdown-list-label{display:table-cell;vertical-align:middle}.kx-dropdown-list .kx-dropdown-list-panel{z-index:1;position:absolute;padding:10px 0;top:23px;right:0;left:0;background-color:#202020;background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#202020),color-stop(100%,#181818));background-image:-webkit-linear-gradient(#202020,#181818);background-image:-moz-linear-gradient(#202020,#181818);background-image:-o-linear-gradient(#202020,#181818);background-image:linear-gradient(#202020,#181818)}.kx-dropdown-list .kx-dropdown-list-panel .kx-dropdown-list-title{color:#8a8989;font-size:11px;line-height:11px;font-weight:400;margin-bottom:5px;padding:0 10px}.kx-dropdown-list .kx-dropdown-list-panel .kx-dropdown-list-items{max-height:400px;overflow-y:auto}.kx-dropdown-list .kx-dropdown-list-items li{text-align:left;cursor:pointer;color:#636363;padding:0 10px}.kx-dropdown-list .kx-dropdown-list-items li:hover{color:#9e9e9e;background-color:#373737}.kx-dropdown-list .kx-dropdown-list-items li .kx-selected-icon{color:#9e9e9e;padding-right:20px;background:url(/modules/common/components/dropdown_list/images/checkmark.png?1463612477) center center no-repeat;cursor:default;width:16px;height:31px;float:right}.kx-dropdown-list .kx-dropdown-list-items li div,.kx-dropdown-list .kx-dropdown-list-items li img{display:inline-block;vertical-align:middle}.kx-dropdown-list .kx-dropdown-list-items li img{padding-right:10px}.kx-dropdown-list.kx-game-context-select{height:30px;width:43px;background-color:#373737;background-image:url(/modules/common/components/dropdown_list/images/carrot.png?1463612477);background-position:22px center}.kx-dropdown-list.kx-game-context-select .kx-dropdown-list-label-wrapper{border:none}.kx-dropdown-list.kx-game-context-select .kx-dropdown-list-panel{width:335px;top:37px;left:-2px;background-color:#222;background-image:-webkit-gradient(linear,50% 0,50% 100%,color-stop(0%,#222),color-stop(100%,#222));background-image:-webkit-linear-gradient(#222,#222);background-image:-moz-linear-gradient(#222,#222);background-image:-o-linear-gradient(#222,#222);background-image:linear-gradient(#222,#222);border:1px solid #888}";head.appendChild(style);}());

(function () {this.Templates=this.Templates||{},this.Templates["common/components/dropdown_list/dropdown-list-item"]=Handlebars.template(function(n,e,a,t,l){function o(n,e){var t,l,o="";return o+='<img src="',(l=a.getIcon)?t=l.call(n,{hash:{},data:e}):(l=n&&n.getIcon,t=typeof l===c?l.call(n,{hash:{},data:e}):l),(t||0===t)&&(o+=t),o+='"></img>'}function s(){return'<div class="kx-selected-icon"></div>'}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,n.helpers),l=l||{};var i,r,d,p="",c="function",h=this,v=a.blockHelperMissing;return d={hash:{},inverse:h.noop,fn:h.program(1,o,l),data:l},(r=a.showIcon)?i=r.call(e,d):(r=e&&e.showIcon,i=typeof r===c?r.call(e,d):r),a.showIcon||(i=v.call(e,i,{hash:{},inverse:h.noop,fn:h.program(1,o,l),data:l})),(i||0===i)&&(p+=i),p+="<div>",(r=a.getText)?i=r.call(e,{hash:{},data:l}):(r=e&&e.getText,i=typeof r===c?r.call(e,{hash:{},data:l}):r),(i||0===i)&&(p+=i),p+="</div>",d={hash:{},inverse:h.noop,fn:h.program(3,s,l),data:l},(r=a.selected)?i=r.call(e,d):(r=e&&e.selected,i=typeof r===c?r.call(e,d):r),a.selected||(i=v.call(e,i,{hash:{},inverse:h.noop,fn:h.program(3,s,l),data:l})),(i||0===i)&&(p+=i),p+="\n"}),this.Templates["common/components/dropdown_list/dropdown-list"]=Handlebars.template(function(n,e,a,t,l){function o(){return'\n<div class="kx-dropdown-list-label-icon"></div>\n'}function s(){return'\n<div class="kx-dropdown-list-title"></div>\n'}this.compilerInfo=[4,">= 1.0.0"],a=this.merge(a,n.helpers),l=l||{};var i,r,d="",p="function",c=this,h=a.blockHelperMissing,v=this.escapeExpression;return d+='<div class="kx-dropdown-list-label-wrapper">\n',i=e&&e.options,i=null==i||i===!1?i:i.showIcons,i=typeof i===p?i.apply(e):i,i=h.call(e,i,{hash:{},inverse:c.noop,fn:c.program(1,o,l),data:l}),(i||0===i)&&(d+=i),d+='\n<div class="kx-dropdown-list-label">',(r=a.currentLabel)?i=r.call(e,{hash:{},data:l}):(r=e&&e.currentLabel,i=typeof r===p?r.call(e,{hash:{},data:l}):r),(i||0===i)&&(d+=i),d+='</div>\n</div>\n<div class="kx-dropdown-list-panel ',(r=a.pointerStyle)?i=r.call(e,{hash:{},data:l}):(r=e&&e.pointerStyle,i=typeof r===p?r.call(e,{hash:{},data:l}):r),d+=v(i)+'" style="display: none;">\n',i=e&&e.options,i=null==i||i===!1?i:i.title,i=typeof i===p?i.apply(e):i,i=h.call(e,i,{hash:{},inverse:c.noop,fn:c.program(3,s,l),data:l}),(i||0===i)&&(d+=i),d+='\n<div class="kx-dropdown-list-items-region"></div>\n</div>\n<div class="kx-dropdown-list-ttip-region"></div>\n'});}());

/* kxl-deployment-tools 2016-05-18 */

KXL.module("Components.DropdownList",function(a,b,c,d,e,f){a.ItemView=d.ItemView.extend({template:Templates["common/components/dropdown_list/dropdown-list-item"],tagName:"li",templateHelpers:function(){return{getText:function(){return this.model.get(this.options.labelAttr)},getIcon:function(){return this.model.get(this.options.iconAttr)}}},modelEvents:function(){return events={},namespace=this.collection.collection.namespace,events["selected:"+namespace]="render",events["deselected:"+namespace]="render",events},triggers:{click:{stopPropagation:!0,event:"clicked"}},_updateSelectedState:function(){this.$el.toggleClass("kx-dropdown-list-selected",this.collection.collection.selected===this.model)},onRender:function(){this.$el.attr("value",this.model.get(this.options.valueAttr)),this._updateSelectedState(),this.$el.toggleClass("kx-dropdown-list-disabled",this.model.get("disabled"))},serializeData:function(){return{model:this.model,collection:this.collection,options:this.options,selected:this.collection.collection.selected===this.model,showIcon:this.options.showIcon&&Boolean(this.model.get(this.options.iconAttr))}}}),a.ItemsView=d.CollectionView.extend({itemView:a.ItemView,tagName:"ul",className:"kx-dropdown-list-items",itemEvents:{clicked:function(a,b){this.trigger("item:clicked",b)}},buildItemView:function(a,b,c){var d=f.extend(c||{},{model:a,collection:this.options.collection,valueAttr:this.options.valueAttr,iconAttr:this.options.iconAttr,labelAttr:this.options.labelAttr,showIcon:this.options.showIcons}),e=new b(d);return e}}),a.View=b.Components.Layout.extend({template:Templates["common/components/dropdown_list/dropdown-list"],_itemsCollection:void 0,_errorTooltipShowing:!1,isOpen:!1,disabled:!1,className:"kx-dropdown-list kx-no-text-selection",regions:{itemsRegion:".kx-dropdown-list-items-region",tooltipRegion:".kx-dropdown-list-ttip-region"},modelEvents:function(){var a=this,b={};return a.options.modelAttr?(b["change:"+a.options.modelAttr]=function(b,c){a.val(c)},b.validated=function(b,c,d){c.isValid(a.options.modelAttr)?a.hideTooltip():d&&d[a.options.modelAttr]&&a.showTooltip(d[a.options.modelAttr],!0)},b):b},ui:{icon:".kx-dropdown-list-label-icon",label:".kx-dropdown-list-label",panel:".kx-dropdown-list-panel",title:".kx-dropdown-list-title"},collectionEvents:function(){var a=this;return events={},events["select:one"]=function(){this.options.displaySelectedLabel&&a.ui.label.text(a._getSelectedLabel()),a._getSelectedIcon()&&a.ui.icon.css("background-image","url("+a._getSelectedIcon()+")")},events},events:{click:function(a){a&&a.stopPropagation(),this.disabled||(this._errorTooltipShowing&&this.hideTooltip(),this.toggleOpen())}},val:function(a){var b=this;if(void 0===a){var c=b._itemsCollection.selected;return c?c.get(b.options.valueAttr):null}var c=b.collection.find(function(c){return c.get(b.options.valueAttr)==a});c&&b._itemsCollection.select(c)},toggleDisabled:function(a){this.disabled=a,this.disabled&&this.toggleOpen(!1),this.$el.toggleClass("kx-dropdown-list-disabled",a)},toggleOpen:function(a){var b=this,c=void 0===a?!this.isOpen:a;if(c!==this.isOpen){var d=this._clickEventName();c?(e("html").on(d,function(){b.toggleOpen(!1)}),b.options.vent.trigger("dropdown:list:opened")):(e("html").off(d),b.options.vent.trigger("dropdown:list:closed")),this.isOpen=c,this.ui.panel.toggle(c)}},onClose:function(){e("html").off(this._clickEventName())},_clickEventName:function(){return"click.dismiss.dropdown.list."+this.cid},initialize:function(a){var b=this;b.options=f.defaults(a||{},{customClassName:null,labelAttr:"label",valueAttr:"value",iconAttr:"icon",modelAttr:"",noSelectionLabel:"No selection",disabled:!1,displaySelectedLabel:!0,showIcons:!1}),b.disabled=this.options.disabled,b.collection=new c.FilteredCollection(null,{collection:b.options.items}),b._itemsCollection=f.extend(b.collection,new c.PickThis.SingleSelect(b.collection,f.uniqueId("dropdown:list"))),b.listenTo(b._itemsCollection,"select:one",function(){if(b.model&&b.options.modelAttr){var a=b._itemsCollection.selected;b.model.set(b.options.modelAttr,a?a.get(b.options.valueAttr):null)}b.trigger("changed")}),b.model&&b.options.modelAttr&&b.val(b.model.get(b.options.modelAttr))},setTitle:function(a){this.ui.title.text(a),this.ui.title.toggle(a)},_getSelectedLabel:function(){var a=this.collection.selected;return a?a.get(this.options.labelAttr):this.options.noSelectionLabel},_getSelectedIcon:function(){var a=this.collection.selected;return a?a.get(this.options.iconAttr):null},showTooltip:function(a,c,d){var e=f.defaults({},d,{tooltipPos:this.options.tooltipPos}),g=new b.Components.Tooltip.View({$elParent:this.$el,position:e.tooltipPos,text:a});g.listenTo(g,"show",function(){c?g.showError(a,e):g.showText(a,e)}),this._errorTooltipShowing=c,this.tooltipRegion.show(g),this.tooltipRegion.ensureEl(),this.tooltipRegion.$el.show()},hideTooltip:function(){this.tooltipRegion.ensureEl(),this.tooltipRegion.$el.hide()},serializeData:function(){return{currentLabel:this._getSelectedLabel(),options:this.options}},onRender:function(){var b=this;b.$el.addClass(b.options.customClassName);var c=new a.ItemsView({collection:b._itemsCollection,iconAttr:b.options.iconAttr,valueAttr:b.options.valueAttr,labelAttr:b.options.labelAttr,vent:b.options.vent,title:b.options.title,showIcons:b.options.showIcons});c.on("item:clicked",function(a){b._itemsCollection.select(a.model),b.toggleOpen(!1)}),b.itemsRegion.show(c),b.options.title&&b.setTitle(b.options.title),b.toggleDisabled(this.disabled)}})}),KXL.module("Components.DropdownList",function(a,b,c,d,e,f){function g(a){f.each(h,function(b,c){a&&c===a||b&&b.toggleOpen&&b.toggleOpen(!1)})}var h={};a.Controller={getView:function(b){var d=new c.Wreqr.EventAggregator,e=new a.View(f.extend(b,{vent:d}));return e.listenTo(d,"dropdown:list:opened",function(){h[e.cid]=e,g(e.cid)}),e.listenTo(d,"dropdown:list:closed",function(){delete h[e.cid]}),e.on("close",function(){delete h[e.cid]}),e}},b.reqres.setHandlers({"dropdown:list:new:view":function(b){return a.Controller.getView(b)}})});
//# sourceMappingURL=dropdown_list.min.js.map