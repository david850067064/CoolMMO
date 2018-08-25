class BrowserUtils extends BaseClass
{


    public getWidth():number
    {
        var wid;
        if(window&&window.innerWidth)
        {
            wid = window.innerWidth;
        }else if((document.body)&&(document.body.clientWidth))
        {
            wid = document.body.clientWidth;
        }
        if (document.documentElement && document.documentElement.clientWidth&&document.documentElement.clientHeight) {
            wid = document.documentElement.clientWidth;
        }
        return wid;
    }

    public getHeight():number
    {
        var hei;
        if(window&&window.innerHeight)
        {
            hei = window.innerHeight;
        }else if((document.body)&&(document.body.clientHeight))
        {
            hei = document.body.clientHeight;
        }
        if(document.documentElement && document.documentElement.clientHeight&& document.documentElement.clientWidth)
        {
            hei = document.documentElement.clientHeight
        }
        return hei;
    }
}