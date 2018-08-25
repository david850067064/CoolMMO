
class GameConfigUtils extends BaseClass
{
    public static  IsDebug:Boolean = false;
    
    public static  BmpFntName:String = "bmpFont";
    
    public static  BmpFntName2:String = "bmpFont2";
    
    public static  ActorPath:String = "../../res/actor/";
    
    public static  ModelPath:String = "../../res/models/";
    
    public static  SoundPath:String = "../../res/sound/";
    
    public static  EffectPath:String = "../../res/effects/";
    
    public static  FrameLoopDelay:Number = 1;
    
    public static  BmpFontPath:String = "../../res/bitmapFont/font.fnt";
    
    public static  BmpFontPath2:String = "../../res/bitmapFont/font2.fnt";
    
    //渲染尺寸
    public  DeviceW = 1136;
    public  DeviceH = 640;
    
    //以1136*640作为设计尺寸
    public  DesginW= 1136;
    public  DesginH = 640;   

    public Scale:number = 1;  
    
    public init():void
    {
        var bw:number;
        var bh:number;
        //我们是竖屏，所以高要比宽长,高取大的
       
        if(BrowserUtils.getInstance().getHeight() < BrowserUtils.getInstance().getWidth())
        {
            bw = BrowserUtils.getInstance().getHeight();
            bh = BrowserUtils.getInstance().getWidth();
        }
        else
        {
            bw = BrowserUtils.getInstance().getWidth();
            bh = BrowserUtils.getInstance().getHeight();
        }
           
        //比如说在设备尺寸上大于美术设计尺寸时，我们就让渲染尺寸等于美术设计尺寸，反之用设备尺寸。
        var scaleRatio = bw/bh;
        this.DeviceW = Math.min(bw, this.DesginW);
        this.DeviceH = Math.min(bh, this.DesginH);
        
        var scaleW:number =  bw / this.DesginW;
        var scaleH:number =  bh / this.DesginH;
        if(scaleW < scaleH)
        {
            this.DeviceW = this.DeviceH * scaleRatio;
        }
        else if(scaleW > scaleH)
        {
            this.DeviceH = this.DeviceW / scaleRatio;
        }
        //1.不留黑边 2.保证渲染区域最小
        
        scaleW =  this.DeviceW / this.DesginW;  //0.9
        scaleH =  this.DeviceH / this.DesginH;     //0.7
        this.Scale = Math.min(scaleW,scaleH);
        
     
    }
    

}
