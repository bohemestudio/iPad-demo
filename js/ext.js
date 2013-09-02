// Avoid `console` errors in browsers that lack a console.
if (!(window.console && console.log)) {
    (function() {
        var noop = function() {};
        var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
        var length = methods.length;
        var console = window.console = {};
        while (length--) {
            console[methods[length]] = noop;
        }
    }());
}

// Place any jQuery/helper plugins in here.

//Slider Plugin: http://swipejs.com/
/*
 * Swipe 1.0
 *
 * Brad Birdsall, Prime
 * Copyright 2011, Licensed GPL & MIT
 *
*/
window.Swipe=function(e,t){if(!e)return null;var n=this;this.options=t||{},this.index=this.options.startSlide||0,this.speed=this.options.speed||300,this.callback=this.options.callback||function(){},this.delay=this.options.auto||0,this.container=e,this.element=this.container.children[0],this.container.style.overflow="hidden",this.element.style.listStyle="none",this.element.style.margin=0,this.setup(),this.begin(),this.element.addEventListener&&(this.element.addEventListener("touchstart",this,!1),this.element.addEventListener("touchmove",this,!1),this.element.addEventListener("touchend",this,!1),this.element.addEventListener("webkitTransitionEnd",this,!1),this.element.addEventListener("msTransitionEnd",this,!1),this.element.addEventListener("oTransitionEnd",this,!1),this.element.addEventListener("transitionend",this,!1),window.addEventListener("resize",this,!1))},Swipe.prototype={setup:function(){this.slides=this.element.children,this.length=this.slides.length;if(this.length<2)return null;this.width="getBoundingClientRect"in this.container?this.container.getBoundingClientRect().width:this.container.offsetWidth;if(!this.width)return null;this.container.style.visibility="hidden",this.element.style.width=this.slides.length*this.width+"px";var e=this.slides.length;while(e--){var t=this.slides[e];t.style.width=this.width+"px",t.style.display="table-cell",t.style.verticalAlign="top"}this.slide(this.index,0),this.container.style.visibility="visible"},slide:function(e,t){var n=this.element.style;t==undefined&&(t=this.speed),n.webkitTransitionDuration=n.MozTransitionDuration=n.msTransitionDuration=n.OTransitionDuration=n.transitionDuration=t+"ms",n.MozTransform=n.webkitTransform="translate3d("+ -(e*this.width)+"px,0,0)",n.msTransform=n.OTransform="translateX("+ -(e*this.width)+"px)",this.index=e},getPos:function(){return this.index},prev:function(e){this.delay=e||0,clearTimeout(this.interval),this.index&&this.slide(this.index-1,this.speed)},next:function(e){this.delay=e||0,clearTimeout(this.interval),this.index<this.length-1?this.slide(this.index+1,this.speed):this.slide(0,this.speed)},begin:function(){var e=this;this.interval=this.delay?setTimeout(function(){e.next(e.delay)},this.delay):0},stop:function(){this.delay=0,clearTimeout(this.interval)},resume:function(){this.delay=this.options.auto||0,this.begin()},handleEvent:function(e){switch(e.type){case"touchstart":this.onTouchStart(e);break;case"touchmove":this.onTouchMove(e);break;case"touchend":this.onTouchEnd(e);break;case"webkitTransitionEnd":case"msTransitionEnd":case"oTransitionEnd":case"transitionend":this.transitionEnd(e);break;case"resize":this.setup()}},transitionEnd:function(e){this.delay&&this.begin(),this.callback(e,this.index,this.slides[this.index])},onTouchStart:function(e){this.start={pageX:e.touches[0].pageX,pageY:e.touches[0].pageY,time:Number(new Date)},this.isScrolling=undefined,this.deltaX=0,this.element.style.MozTransitionDuration=this.element.style.webkitTransitionDuration=0},onTouchMove:function(e){if(e.touches.length>1||e.scale&&e.scale!==1)return;this.deltaX=e.touches[0].pageX-this.start.pageX,typeof this.isScrolling=="undefined"&&(this.isScrolling=!!(this.isScrolling||Math.abs(this.deltaX)<Math.abs(e.touches[0].pageY-this.start.pageY))),this.isScrolling||(e.preventDefault(),clearTimeout(this.interval),this.deltaX=this.deltaX/(!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0?Math.abs(this.deltaX)/this.width+1:1),this.element.style.MozTransform=this.element.style.webkitTransform="translate3d("+(this.deltaX-this.index*this.width)+"px,0,0)")},onTouchEnd:function(e){var t=Number(new Date)-this.start.time<250&&Math.abs(this.deltaX)>20||Math.abs(this.deltaX)>this.width/2,n=!this.index&&this.deltaX>0||this.index==this.length-1&&this.deltaX<0;this.isScrolling||this.slide(this.index+(t&&!n?this.deltaX<0?1:-1:0),this.speed)}}
