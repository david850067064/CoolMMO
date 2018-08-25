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
var GameConfigUtils = (function (_super) {
    __extends(GameConfigUtils, _super);
    function GameConfigUtils() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        //渲染尺寸
        _this.DeviceW = 1136;
        _this.DeviceH = 640;
        //以1136*640作为设计尺寸
        _this.DesginW = 1136;
        _this.DesginH = 640;
        _this.Scale = 1;
        return _this;
    }
    GameConfigUtils.prototype.init = function () {
        var bw;
        var bh;
        //我们是竖屏，所以高要比宽长,高取大的
        if (BrowserUtils.getInstance().getHeight() < BrowserUtils.getInstance().getWidth()) {
            bw = BrowserUtils.getInstance().getHeight();
            bh = BrowserUtils.getInstance().getWidth();
        }
        else {
            bw = BrowserUtils.getInstance().getWidth();
            bh = BrowserUtils.getInstance().getHeight();
        }
        //比如说在设备尺寸上大于美术设计尺寸时，我们就让渲染尺寸等于美术设计尺寸，反之用设备尺寸。
        var scaleRatio = bw / bh;
        this.DeviceW = Math.min(bw, this.DesginW);
        this.DeviceH = Math.min(bh, this.DesginH);
        var scaleW = bw / this.DesginW;
        var scaleH = bh / this.DesginH;
        if (scaleW < scaleH) {
            this.DeviceW = this.DeviceH * scaleRatio;
        }
        else if (scaleW > scaleH) {
            this.DeviceH = this.DeviceW / scaleRatio;
        }
        //1.不留黑边 2.保证渲染区域最小
        scaleW = this.DeviceW / this.DesginW; //0.9
        scaleH = this.DeviceH / this.DesginH; //0.7
        this.Scale = Math.min(scaleW, scaleH);
    };
    GameConfigUtils.IsDebug = false;
    GameConfigUtils.BmpFntName = "bmpFont";
    GameConfigUtils.BmpFntName2 = "bmpFont2";
    GameConfigUtils.ActorPath = "../../res/actor/";
    GameConfigUtils.ModelPath = "../../res/models/";
    GameConfigUtils.SoundPath = "../../res/sound/";
    GameConfigUtils.EffectPath = "../../res/effects/";
    GameConfigUtils.FrameLoopDelay = 1;
    GameConfigUtils.BmpFontPath = "../../res/bitmapFont/font.fnt";
    GameConfigUtils.BmpFontPath2 = "../../res/bitmapFont/font2.fnt";
    return GameConfigUtils;
}(BaseClass));
__reflect(GameConfigUtils.prototype, "GameConfigUtils");
