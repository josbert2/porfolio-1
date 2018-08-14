"use strict";var _createClass=function(){function a(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}return function(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),t}}();function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}$(document).ready(function(){AOS.init();for(var t=d3.select.bind(d3),o=document.body.clientWidth,s=35,r=t("svg").attr("width",o).attr("height",s),e=function(){function i(t,e,n,a){_classCallCheck(this,i),this.piScaled=2*Math.PI/t,this.amplitude=e,this.offset=n,this.opacity=a,this.path=r.append("path").attr("stroke","url(#loaderGradient)").attr("fill","none").attr("stroke-opacity",a),this.line=d3.svg.line().x(function(t){return t.index}).y(function(t){var e,n=Math.abs(o/2-t.index)-(o/2*h-12.5);return e=Math.cos(Math.PI*Math.max(0,Math.min(25,n))/25)/2+.5,s/2+t.value*e})}return _createClass(i,[{key:"draw",value:function(){this.path.attr("d",this.generatePath())}},{key:"generatePath",value:function(){for(var t=[],e=0;e<o;++e)t.push({value:Math.sin((e+this.offset)*this.piScaled)*this.amplitude,index:e});return this.line(t)}}]),i}(),a=[],n=0;n<2;++n){var i=new e(87.5+Math.random()*s*8,s/2-Math.random()*s/4,12.5*n+5*Math.random(),.25+.75*Math.random());i.draw(),a.push(i)}var h=0,l=1;!function t(e){1<h&&0<l?l=-5:h<0&&l<0&&(l=1),h+=.003*l;for(var n=0;n<a.length;++n)a[n].offset+=((n+1)%2*2-1)*(.2*Math.random()+.9),a[n].draw();requestAnimationFrame(t)}()}),$(window).enllax(),function(s,r){r(function(){setTimeout(function(){r("body").removeClass("fade"),r(".loader-wrapper").addClass("isHide"),r(".loader-wrapper").css("display","none")},3e3),r(".ripple").on("click",function(t){t.preventDefault();var e=r("<div/>"),n=r(this).offset(),a=t.pageX-n.left,i=t.pageY-n.top;e.addClass("ripple-effect");var o=r(".ripple-effect");o.css("height",r(this).height()),o.css("width",r(this).height()),e.css({top:i-o.height()/2,left:a-o.width()/2,background:r(this).data("ripple-color")}).appendTo(r(this)),s.setTimeout(function(){e.remove()},2e3)})})}(window,jQuery),$(document).ready(function(){var n=100;$(".more").each(function(){var t=$(this).html();if(t.length>n){var e=t.substr(0,n)+'<span class="moreellipses">...&nbsp;</span><span class="morecontent"><span>'+t.substr(n,t.length-n)+'</span>&nbsp;&nbsp;<a href="" class="morelink"></a></span>';$(this).html(e)}})}),$(document).ready(function(){var t=window.location.href;function e(){var t=$("#content-sub"),e=t.height(),n=t.width(),a=$("#footer"),i=a.height(),o=a.width();console.log("Content Height = "+e+"px"),console.log("Content Width = "+n+"px"),console.log("Footer Height = "+i+"px"),console.log("Footer Width = "+o+"px"),t.css({"margin-bottom":i+35})}$(".site-nav a").each(function(){this.href===t&&$(this).addClass("site-nav__link--active")}),$(window).scroll(function(){150<$(window).scrollTop()?$(".site-header").addClass("pingned"):$(".site-header").removeClass("pingned")}),e(),$(window).resize(function(){e()})}),$(document).on("click",'a[href^="#"]',function(t){t.preventDefault(),$("html, body").animate({scrollTop:$($.attr(this,"href")).offset().top},500)});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwiQU9TIiwiaW5pdCIsImQzIiwic2VsZWN0IiwiYmluZCIsIldJRFRIIiwiYm9keSIsImNsaWVudFdpZHRoIiwiSEVJR0hUIiwic3ZnIiwiYXR0ciIsIldhdmUiLCJ3YXZlbGVuZ3RoIiwiYW1wbGl0dWRlIiwib2Zmc2V0Iiwib3BhY2l0eSIsIl9jbGFzc0NhbGxDaGVjayIsInRoaXMiLCJwaVNjYWxlZCIsIk1hdGgiLCJQSSIsInBhdGgiLCJhcHBlbmQiLCJsaW5lIiwieCIsInYiLCJpbmRleCIsInkiLCJzY2FsZSIsImV4Y2VlZGluZ0Ftb3VudCIsImFicyIsInByb2dyZXNzIiwiU01PT1RIX0RJU1RBTkNFIiwiY29zIiwibWF4IiwibWluIiwidmFsdWUiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJnZW5lcmF0ZVBhdGgiLCJwb2ludHMiLCJpIiwicHVzaCIsInNpbiIsIndhdmVzIiwidyIsInJhbmRvbSIsImRyYXciLCJkaXJlY3Rpb24iLCJkVCIsImxlbmd0aCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndpbmRvdyIsImVubGxheCIsInNldFRpbWVvdXQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiY3NzIiwib24iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiJGRpdiIsImJ0bk9mZnNldCIsInhQb3MiLCJwYWdlWCIsImxlZnQiLCJ5UG9zIiwicGFnZVkiLCJ0b3AiLCIkcmlwcGxlIiwiaGVpZ2h0Iiwid2lkdGgiLCJiYWNrZ3JvdW5kIiwiZGF0YSIsImFwcGVuZFRvIiwicmVtb3ZlIiwialF1ZXJ5Iiwic2hvd0NoYXIiLCJlYWNoIiwiY29udGVudCIsImh0bWwiLCJzdWJzdHIiLCJsb2NhdGlvbiIsImhyZWYiLCJzaXRlRm9vdGVyIiwic2l0ZUNvbnRlbnQiLCJzaXRlQ29udGVudEhlaWdodCIsInNpdGVDb250ZW50V2lkdGgiLCJzaXRlRm9vdGVySGVpZ2h0Iiwic2l0ZUZvb3RlcldpZHRoIiwiY29uc29sZSIsImxvZyIsIm1hcmdpbi1ib3R0b20iLCJzY3JvbGwiLCJzY3JvbGxUb3AiLCJyZXNpemUiLCJhbmltYXRlIl0sIm1hcHBpbmdzIjoiNlhBQUFBLEVBQUFDLFVBQUFDLE1BQUEsV0FFQUMsSUFBQUMsT0F1REEsSUF0REEsSUFBQUosRUFBQUssR0FBQUMsT0FBQUMsS0FBQUYsSUFDQUcsRUFBQVAsU0FBQVEsS0FBQUMsWUFDQUMsRUFBQSxHQUtBQyxFQUFBWixFQUFBLE9BQUFhLEtBQUEsUUFBQUwsR0FDQUssS0FBQSxTQUFBRixHQUdBRyxFQWRBLFdBZUEsU0FBQUEsRUFBQUMsRUFBQUMsRUFBQUMsRUFBQUMsR0FBQUMsZ0JBQUFDLEtBQUFOLEdBQ0FNLEtBQUFDLFNBQUEsRUFBQUMsS0FBQUMsR0FBQVIsRUFDQUssS0FBQUosVUFBQUEsRUFDQUksS0FBQUgsT0FBQUEsRUFDQUcsS0FBQUYsUUFBQUEsRUFFQUUsS0FBQUksS0FBQVosRUFBQWEsT0FBQSxRQUNBWixLQUFBLFNBQUEsd0JBQ0FBLEtBQUEsT0FBQSxRQUNBQSxLQUFBLGlCQUFBSyxHQUNBRSxLQUFBTSxLQUFBckIsR0FBQU8sSUFBQWMsT0FDQUMsRUFBQSxTQUFBQyxHQUFBLE9BQUFBLEVBQUFDLFFBQ0FDLEVBQUEsU0FBQUYsR0FFQSxJQUFBRyxFQUNBQyxFQUFBVixLQUFBVyxJQUFBekIsRUFBQSxFQUFBb0IsRUFBQUMsUUFBQXJCLEVBQUEsRUFBQTBCLEVBQUFDLE1BS0EsT0FIQUosRUFBQVQsS0FBQWMsSUFDQWQsS0FBQUMsR0FBQUQsS0FBQWUsSUFBQSxFQUFBZixLQUFBZ0IsSUExQkEsR0EwQkFOLElBMUJBLElBMkJBLEVBQUEsR0FDQXJCLEVBQUEsRUFBQWlCLEVBQUFXLE1BQUFSLElBbkNBLE9BQUFTLGFBQUExQixFQUFBLENBQUEsQ0FBQTJCLElBQUEsT0FBQUYsTUFBQSxXQXdDQW5CLEtBQUFJLEtBQUFYLEtBQUEsSUFBQU8sS0FBQXNCLGtCQXhDQSxDQUFBRCxJQUFBLGVBQUFGLE1BQUEsV0E2Q0EsSUFEQSxJQUFBSSxFQUFBLEdBQ0FDLEVBQUEsRUFBQUEsRUFBQXBDLElBQUFvQyxFQUNBRCxFQUFBRSxLQUFBLENBQ0FOLE1BQUFqQixLQUFBd0IsS0FBQUYsRUFBQXhCLEtBQUFILFFBQUFHLEtBQUFDLFVBQUFELEtBQUFKLFVBQ0FhLE1BQUFlLElBR0EsT0FBQXhCLEtBQUFNLEtBQUFpQixPQW5EQTdCLEVBQUEsR0F3REFpQyxFQUFBLEdBQ0FILEVBQUEsRUFBQUEsRUFuREEsSUFtREFBLEVBQUEsQ0FDQSxJQUFBSSxFQUFBLElBQUFsQyxFQUNBLEtBQUFRLEtBQUEyQixTQUFBdEMsRUFBQSxFQUNBQSxFQUFBLEVBQUFXLEtBQUEyQixTQUFBdEMsRUFBQSxFQUNBLEtBQUFpQyxFQUFBLEVBQUF0QixLQUFBMkIsU0FDQSxJQUFBLElBQUEzQixLQUFBMkIsVUFFQUQsRUFBQUUsT0FDQUgsRUFBQUYsS0FBQUcsR0FHQSxJQUFBZCxFQUFBLEVBQ0FpQixFQUFBLEdBRUEsU0FBQUQsRUFBQUUsR0FDQSxFQUFBbEIsR0FBQSxFQUFBaUIsRUFDQUEsR0FBQSxFQUNBakIsRUFBQSxHQUFBaUIsRUFBQSxJQUNBQSxFQUFBLEdBRUFqQixHQUFBLEtBQUFpQixFQUNBLElBQUEsSUFBQVAsRUFBQSxFQUFBQSxFQUFBRyxFQUFBTSxTQUFBVCxFQUNBRyxFQUFBSCxHQUFBM0IsVUFBQTJCLEVBQUEsR0FBQSxFQUFBLEVBQUEsSUFBQSxHQUFBdEIsS0FBQTJCLFNBQUEsSUFDQUYsRUFBQUgsR0FBQU0sT0FFQUksc0JBQUFKLEdBRUFBLEtBZUFsRCxFQUFBdUQsUUFBQUMsU0FFQSxTQUFBRCxFQUFBdkQsR0FFQUEsRUFBQSxXQUNBeUQsV0FBQSxXQUNBekQsRUFBQSxRQUFBMEQsWUFBQSxRQUNBMUQsRUFBQSxtQkFBQTJELFNBQUEsVUFDQTNELEVBQUEsbUJBQUE0RCxJQUFBLFVBQUEsU0FDQSxLQUVBNUQsRUFBQSxXQUFBNkQsR0FBQSxRQUFBLFNBQUFDLEdBQ0FBLEVBQUFDLGlCQUVBLElBQUFDLEVBQUFoRSxFQUFBLFVBQ0FpRSxFQUFBakUsRUFBQW9CLE1BQUFILFNBQ0FpRCxFQUFBSixFQUFBSyxNQUFBRixFQUFBRyxLQUNBQyxFQUFBUCxFQUFBUSxNQUFBTCxFQUFBTSxJQUlBUCxFQUFBTCxTQUFBLGlCQUNBLElBQUFhLEVBQUF4RSxFQUFBLGtCQUVBd0UsRUFBQVosSUFBQSxTQUFBNUQsRUFBQW9CLE1BQUFxRCxVQUNBRCxFQUFBWixJQUFBLFFBQUE1RCxFQUFBb0IsTUFBQXFELFVBQ0FULEVBQ0FKLElBQUEsQ0FDQVcsSUFBQUYsRUFBQUcsRUFBQUMsU0FBQSxFQUNBTCxLQUFBRixFQUFBTSxFQUFBRSxRQUFBLEVBQ0FDLFdBQUEzRSxFQUFBb0IsTUFBQXdELEtBQUEsa0JBRUFDLFNBQUE3RSxFQUFBb0IsT0FFQW1DLEVBQUFFLFdBQUEsV0FDQU8sRUFBQWMsVUFDQSxTQWxDQSxDQXVDQXZCLE9BQUF3QixRQUVBL0UsRUFBQUMsVUFBQUMsTUFBQSxXQUVBLElBQUE4RSxFQUFBLElBSUFoRixFQUFBLFNBQUFpRixLQUFBLFdBQ0EsSUFBQUMsRUFBQWxGLEVBQUFvQixNQUFBK0QsT0FDQSxHQUFBRCxFQUFBN0IsT0FBQTJCLEVBQUEsQ0FDQSxJQUVBRyxFQUZBRCxFQUFBRSxPQUFBLEVBQUFKLEdBRUEsOEVBREFFLEVBQUFFLE9BQUFKLEVBQUFFLEVBQUE3QixPQUFBMkIsR0FDQSw2REFDQWhGLEVBQUFvQixNQUFBK0QsS0FBQUEsUUFLQW5GLEVBQUFDLFVBQUFDLE1BQUEsV0FDQSxJQUFBc0IsRUFBQStCLE9BQUE4QixTQUFBQyxLQXdCQSxTQUFBQyxJQUNBLElBQUFDLEVBQUF4RixFQUFBLGdCQUNBeUYsRUFBQUQsRUFBQWYsU0FDQWlCLEVBQUFGLEVBQUFkLFFBRUFhLEVBQUF2RixFQUFBLFdBQ0EyRixFQUFBSixFQUFBZCxTQUNBbUIsRUFBQUwsRUFBQWIsUUFFQW1CLFFBQUFDLElBQUEsb0JBQUFMLEVBQUEsTUFDQUksUUFBQUMsSUFBQSxtQkFBQUosRUFBQSxNQUNBRyxRQUFBQyxJQUFBLG1CQUFBSCxFQUFBLE1BQ0FFLFFBQUFDLElBQUEsa0JBQUFGLEVBQUEsTUFFQUosRUFBQTVCLElBQUEsQ0FDQW1DLGdCQUFBSixFQUFBLEtBdENBM0YsRUFBQSxlQUFBaUYsS0FBQSxXQUNBN0QsS0FBQWtFLE9BQUE5RCxHQUNBeEIsRUFBQW9CLE1BQUF1QyxTQUFBLDRCQUtBM0QsRUFBQXVELFFBQUF5QyxPQUFBLFdBQ0EsSUFBQWhHLEVBQUF1RCxRQUFBMEMsWUFDQWpHLEVBQUEsZ0JBQUEyRCxTQUFBLFdBRUEzRCxFQUFBLGdCQUFBMEQsWUFBQSxhQU1BNkIsSUFFQXZGLEVBQUF1RCxRQUFBMkMsT0FBQSxXQUNBWCxRQXVCQXZGLEVBQUFDLFVBQUE0RCxHQUFBLFFBQUEsZUFBQSxTQUFBQyxHQUNBQSxFQUFBQyxpQkFFQS9ELEVBQUEsY0FBQW1HLFFBQUEsQ0FDQUYsVUFBQWpHLEVBQUFBLEVBQUFhLEtBQUFPLEtBQUEsU0FBQUgsU0FBQXNELEtBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgQU9TLmluaXQoKTtcclxuICAgIGNvbnN0ICQgPSBkMy5zZWxlY3QuYmluZChkMyk7XHJcbiAgICBjb25zdCBXSURUSCA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGg7XHJcbiAgICBjb25zdCBIRUlHSFQgPSAzNTtcclxuICAgIGNvbnN0IFdBVkVTID0gMjtcclxuICAgIGNvbnN0IFNNT09USF9ESVNUQU5DRSA9IDI1O1xyXG5cclxuICAgIC8vIGdlbmVyYXRlIHRoZSBsb2FkZXJcclxuICAgIGNvbnN0IHN2ZyA9ICQoXCJzdmdcIikuYXR0cihcIndpZHRoXCIsIFdJRFRIKVxyXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIEhFSUdIVCk7XHJcblxyXG4gICAgLy8gV2F2ZSBjbGFzc1xyXG4gICAgY2xhc3MgV2F2ZSB7XHJcbiAgICAgICAgY29uc3RydWN0b3Iod2F2ZWxlbmd0aCwgYW1wbGl0dWRlLCBvZmZzZXQsIG9wYWNpdHkpIHtcclxuICAgICAgICAgICAgdGhpcy5waVNjYWxlZCA9IE1hdGguUEkgKiAyIC8gd2F2ZWxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5hbXBsaXR1ZGUgPSBhbXBsaXR1ZGU7XHJcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICAgICAgICAgICB0aGlzLm9wYWNpdHkgPSBvcGFjaXR5O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXRoID0gc3ZnLmFwcGVuZChcInBhdGhcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlXCIsIFwidXJsKCNsb2FkZXJHcmFkaWVudClcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZmlsbFwiLCBcIm5vbmVcIilcclxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3Ryb2tlLW9wYWNpdHlcIiwgb3BhY2l0eSk7XHJcbiAgICAgICAgICAgIHRoaXMubGluZSA9IGQzLnN2Zy5saW5lKClcclxuICAgICAgICAgICAgICAgIC54KHYgPT4gdi5pbmRleClcclxuICAgICAgICAgICAgICAgIC55KHYgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNjYWxlIGl0IG9mZiBpZiBpdCBleGNlZWRzIHRoZSBwcm9ncmVzc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY2FsZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4Y2VlZGluZ0Ftb3VudCA9IE1hdGguYWJzKFdJRFRIIC8gMiAtIHYuaW5kZXgpIC0gKFdJRFRIIC8gMiAqIHByb2dyZXNzIC0gU01PT1RIX0RJU1RBTkNFIC8gMik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHNjYWxlID0gTWF0aC5jb3MoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE1hdGguUEkgKiBNYXRoLm1heCgwLCBNYXRoLm1pbihTTU9PVEhfRElTVEFOQ0UsIGV4Y2VlZGluZ0Ftb3VudCkpIC8gU01PT1RIX0RJU1RBTkNFXHJcbiAgICAgICAgICAgICAgICAgICAgKSAvIDIgKyAwLjU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEhFSUdIVCAvIDIgKyB2LnZhbHVlICogc2NhbGU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRyYXcoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aC5hdHRyKFwiZFwiLCB0aGlzLmdlbmVyYXRlUGF0aCgpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdlbmVyYXRlUGF0aCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgV0lEVEg7ICsraSkge1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBNYXRoLnNpbigoaSArIHRoaXMub2Zmc2V0KSAqIHRoaXMucGlTY2FsZWQpICogdGhpcy5hbXBsaXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGlcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmxpbmUocG9pbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJhdGUgd2F2ZXNcclxuICAgIGNvbnN0IHdhdmVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IFdBVkVTOyArK2kpIHtcclxuICAgICAgICB2YXIgdyA9IG5ldyBXYXZlKFxyXG4gICAgICAgICAgICAyLjUgKiBIRUlHSFQgKyBNYXRoLnJhbmRvbSgpICogSEVJR0hUICogOCwgLy8gd2F2ZWxlbmd0aFxyXG4gICAgICAgICAgICBIRUlHSFQgLyAyIC0gTWF0aC5yYW5kb20oKSAqIEhFSUdIVCAvIDQsIC8vIGFtcGxpdHVkZSBcclxuICAgICAgICAgICAgMjUgLyBXQVZFUyAqIGkgKyBNYXRoLnJhbmRvbSgpICogNSwgLy8gb2Zmc2V0XHJcbiAgICAgICAgICAgIDAuMjUgKyBNYXRoLnJhbmRvbSgpICogMC43NSAvLyBvcGFjaXR5XHJcbiAgICAgICAgKTtcclxuICAgICAgICB3LmRyYXcoKTtcclxuICAgICAgICB3YXZlcy5wdXNoKHcpO1xyXG4gICAgfVxyXG4gICAgLy8gZHJhdyAmIGFuaW1hdGVcclxuICAgIGxldCBwcm9ncmVzcyA9IDA7XHJcbiAgICBsZXQgZGlyZWN0aW9uID0gMTtcclxuXHJcbiAgICBmdW5jdGlvbiBkcmF3KGRUKSB7XHJcbiAgICAgICAgaWYgKHByb2dyZXNzID4gMSAmJiBkaXJlY3Rpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IC01O1xyXG4gICAgICAgIH0gZWxzZSBpZiAocHJvZ3Jlc3MgPCAwICYmIGRpcmVjdGlvbiA8IDApIHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvZ3Jlc3MgKz0gMC4wMDMgKiBkaXJlY3Rpb247XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3YXZlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgICAgICB3YXZlc1tpXS5vZmZzZXQgKz0gKChpICsgMSkgJSAyICogMiAtIDEpICogKE1hdGgucmFuZG9tKCkgKiAwLjIgKyAwLjkpO1xyXG4gICAgICAgICAgICB3YXZlc1tpXS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuICAgIH1cclxuICAgIGRyYXcoKTtcclxufSlcclxuLyokKCcjZnVsbHBhZ2UnKS5mdWxscGFnZSh7XHJcbiAgICBtZW51OiAnI21lbnUnLFxyXG4gICAgc2Nyb2xsQmFyOiB0cnVlLFxyXG4gICAgYW5jaG9yczogWydmaXJzdFBhZ2UnLCAnc2Vjb25kUGFnZScsICd0cmVlUGFnZSddLFxyXG4gICAgbmF2aWdhdGlvbjogdHJ1ZSxcclxuICAgIHNsaWRlc05hdmlnYXRpb246IHRydWUsXHJcbiAgICBuYXZpZ2F0aW9uUG9zaXRpb246ICd0b3AnLFxyXG4gICAgbmF2aWdhdGlvblRvb2x0aXBzOiBbJy0gMDEnLCAnLSAwMicsICctIDAzJ10sXHJcbiAgICBzaG93QWN0aXZlVG9vbHRpcDogdHJ1ZSxcclxuICAgIGxvY2tBbmNob3JzOiB0cnVlLFxyXG4gICAgZWFzaW5nOiAnZWFzZUluT3V0Q3ViaWMnLFxyXG4gICAgZWFzaW5nY3NzMzogJ2Vhc2UnLFxyXG59KTsqL1xyXG4kKHdpbmRvdykuZW5sbGF4KCk7XHJcblxyXG4oZnVuY3Rpb24od2luZG93LCAkKSB7XHJcblxyXG4gICAgJChmdW5jdGlvbigpIHtcclxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2ZhZGUnKTtcclxuICAgICAgICAgICAgJCgnLmxvYWRlci13cmFwcGVyJykuYWRkQ2xhc3MoJ2lzSGlkZScpXHJcbiAgICAgICAgICAgICQoJy5sb2FkZXItd3JhcHBlcicpLmNzcyhcImRpc3BsYXlcIiwgXCJub25lXCIpO1xyXG4gICAgICAgIH0sIDMwMDApO1xyXG5cclxuICAgICAgICAkKCcucmlwcGxlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIHZhciAkZGl2ID0gJCgnPGRpdi8+JyksXHJcbiAgICAgICAgICAgICAgICBidG5PZmZzZXQgPSAkKHRoaXMpLm9mZnNldCgpLFxyXG4gICAgICAgICAgICAgICAgeFBvcyA9IGV2ZW50LnBhZ2VYIC0gYnRuT2Zmc2V0LmxlZnQsXHJcbiAgICAgICAgICAgICAgICB5UG9zID0gZXZlbnQucGFnZVkgLSBidG5PZmZzZXQudG9wO1xyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAkZGl2LmFkZENsYXNzKCdyaXBwbGUtZWZmZWN0Jyk7XHJcbiAgICAgICAgICAgIHZhciAkcmlwcGxlID0gJChcIi5yaXBwbGUtZWZmZWN0XCIpO1xyXG5cclxuICAgICAgICAgICAgJHJpcHBsZS5jc3MoXCJoZWlnaHRcIiwgJCh0aGlzKS5oZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICRyaXBwbGUuY3NzKFwid2lkdGhcIiwgJCh0aGlzKS5oZWlnaHQoKSk7XHJcbiAgICAgICAgICAgICRkaXZcclxuICAgICAgICAgICAgICAgIC5jc3Moe1xyXG4gICAgICAgICAgICAgICAgICAgIHRvcDogeVBvcyAtICgkcmlwcGxlLmhlaWdodCgpIC8gMiksXHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogeFBvcyAtICgkcmlwcGxlLndpZHRoKCkgLyAyKSxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAkKHRoaXMpLmRhdGEoXCJyaXBwbGUtY29sb3JcIilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuYXBwZW5kVG8oJCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICRkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG5cclxufSkod2luZG93LCBqUXVlcnkpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcbiAgICAvLyBDb25maWd1cmUvY3VzdG9taXplIHRoZXNlIHZhcmlhYmxlcy5cclxuICAgIHZhciBzaG93Q2hhciA9IDEwMDsgLy8gSG93IG1hbnkgY2hhcmFjdGVycyBhcmUgc2hvd24gYnkgZGVmYXVsdFxyXG4gICAgdmFyIGVsbGlwc2VzdGV4dCA9IFwiLi4uXCI7XHJcbiAgICB2YXIgbW9yZXRleHQgPSBcIlwiO1xyXG4gICAgdmFyIGxlc3N0ZXh0ID0gXCJcIjtcclxuICAgICQoJy5tb3JlJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgY29udGVudCA9ICQodGhpcykuaHRtbCgpO1xyXG4gICAgICAgIGlmIChjb250ZW50Lmxlbmd0aCA+IHNob3dDaGFyKSB7XHJcbiAgICAgICAgICAgIHZhciBjID0gY29udGVudC5zdWJzdHIoMCwgc2hvd0NoYXIpO1xyXG4gICAgICAgICAgICB2YXIgaCA9IGNvbnRlbnQuc3Vic3RyKHNob3dDaGFyLCBjb250ZW50Lmxlbmd0aCAtIHNob3dDaGFyKTtcclxuICAgICAgICAgICAgdmFyIGh0bWwgPSBjICsgJzxzcGFuIGNsYXNzPVwibW9yZWVsbGlwc2VzXCI+JyArIGVsbGlwc2VzdGV4dCArICcmbmJzcDs8L3NwYW4+PHNwYW4gY2xhc3M9XCJtb3JlY29udGVudFwiPjxzcGFuPicgKyBoICsgJzwvc3Bhbj4mbmJzcDsmbmJzcDs8YSBocmVmPVwiXCIgY2xhc3M9XCJtb3JlbGlua1wiPicgKyBtb3JldGV4dCArICc8L2E+PC9zcGFuPic7XHJcbiAgICAgICAgICAgICQodGhpcykuaHRtbChodG1sKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuICAgIHZhciBwYXRoID0gd2luZG93LmxvY2F0aW9uLmhyZWY7IC8vIGJlY2F1c2UgdGhlICdocmVmJyBwcm9wZXJ0eSBvZiB0aGUgRE9NIGVsZW1lbnQgaXMgdGhlIGFic29sdXRlIHBhdGhcclxuICAgICQoJy5zaXRlLW5hdiBhJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5ocmVmID09PSBwYXRoKSB7XHJcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3NpdGUtbmF2X19saW5rLS1hY3RpdmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBTU3R5a3kgbmF2XHJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiAxNTApIHtcclxuICAgICAgICAgICAgJCgnLnNpdGUtaGVhZGVyJykuYWRkQ2xhc3MoXCJwaW5nbmVkXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICQoJy5zaXRlLWhlYWRlcicpLnJlbW92ZUNsYXNzKFwicGluZ25lZFwiKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgLy8gSU5JVElBVEUgVEhFIEZPT1RFUlxyXG4gICAgc2l0ZUZvb3RlcigpO1xyXG4gICAgLy8gQ09VTEQgQkUgU0lNUExJRklFRCBGT1IgVEhJUyBQRU4gQlVUIEkgV0FOVCBUTyBNQUtFIElUIEFTIEVBU1kgVE8gUFVUIElOVE8gWU9VUiBTSVRFIEFTIFBPU1NJQkxFXHJcbiAgICAkKHdpbmRvdykucmVzaXplKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHNpdGVGb290ZXIoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHNpdGVGb290ZXIoKSB7XHJcbiAgICAgICAgdmFyIHNpdGVDb250ZW50ID0gJCgnI2NvbnRlbnQtc3ViJyk7XHJcbiAgICAgICAgdmFyIHNpdGVDb250ZW50SGVpZ2h0ID0gc2l0ZUNvbnRlbnQuaGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIHNpdGVDb250ZW50V2lkdGggPSBzaXRlQ29udGVudC53aWR0aCgpO1xyXG5cclxuICAgICAgICB2YXIgc2l0ZUZvb3RlciA9ICQoJyNmb290ZXInKTtcclxuICAgICAgICB2YXIgc2l0ZUZvb3RlckhlaWdodCA9IHNpdGVGb290ZXIuaGVpZ2h0KCk7XHJcbiAgICAgICAgdmFyIHNpdGVGb290ZXJXaWR0aCA9IHNpdGVGb290ZXIud2lkdGgoKTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgSGVpZ2h0ID0gJyArIHNpdGVDb250ZW50SGVpZ2h0ICsgJ3B4Jyk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0NvbnRlbnQgV2lkdGggPSAnICsgc2l0ZUNvbnRlbnRXaWR0aCArICdweCcpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGb290ZXIgSGVpZ2h0ID0gJyArIHNpdGVGb290ZXJIZWlnaHQgKyAncHgnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygnRm9vdGVyIFdpZHRoID0gJyArIHNpdGVGb290ZXJXaWR0aCArICdweCcpO1xyXG5cclxuICAgICAgICBzaXRlQ29udGVudC5jc3Moe1xyXG4gICAgICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogc2l0ZUZvb3RlckhlaWdodCArIDM1XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICdhW2hyZWZePVwiI1wiXScsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICBzY3JvbGxUb3A6ICQoJC5hdHRyKHRoaXMsICdocmVmJykpLm9mZnNldCgpLnRvcFxyXG4gICAgfSwgNTAwKTtcclxufSk7Il19
