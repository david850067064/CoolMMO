var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var BrowserUtils = (function (_super) {
    __extends(BrowserUtils, _super);
    function BrowserUtils() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserUtils.prototype.getWidth = function () {
        var wid;
        if (window && window.innerWidth) {
            wid = window.innerWidth;
        }
        else if ((document.body) && (document.body.clientWidth)) {
            wid = document.body.clientWidth;
        }
        if (document.documentElement && document.documentElement.clientWidth && document.documentElement.clientHeight) {
            wid = document.documentElement.clientWidth;
        }
        return wid;
    };
    BrowserUtils.prototype.getHeight = function () {
        var hei;
        if (window && window.innerHeight) {
            hei = window.innerHeight;
        }
        else if ((document.body) && (document.body.clientHeight)) {
            hei = document.body.clientHeight;
        }
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            hei = document.documentElement.clientHeight;
        }
        return hei;
    };
    return BrowserUtils;
}(BaseClass));
__reflect(BrowserUtils.prototype, "BrowserUtils");
