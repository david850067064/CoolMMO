/**
 * 封装console.log，便于正式上线时，关闭所有log输出
 */
class Log {
    /**
     * Debug_Log
     * @param messsage 内容
     * @constructor
     */
    public static trace(...optionalParams:any[]):void {
        if (App.DebugUtils.isDebug) {
            optionalParams[0] = "[DebugLog]" + optionalParams[0];
            console.log.apply(console, optionalParams);
        }
    }
}