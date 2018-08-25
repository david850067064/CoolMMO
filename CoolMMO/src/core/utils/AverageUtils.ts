/**
 * 主要用于在不同帧存储不同数据，计算平均数，多用于基于时间差的功能的平滑性处理
 * 平均数工具类
 */
class AverageUtils {

    private maxNum:number;
    private nums:Array<number> = [];
    private numsLen:number = 0;
    private numSum:number = 0;

    /**
     * 构造函数
     * @param $maxNum 参与计算的最大值
     */
    public constructor($maxNum:number = 10) {
        this.maxNum = $maxNum;
    }

    /**
     * 加入一个值
     * @param value
     */
    public push(value:number):void {
        if (this.numsLen > this.maxNum) {
            this.numsLen--;
            this.numSum -= this.nums.shift();
        }
        this.nums.push(value);
        this.numSum += value;
        this.numsLen++;
    }

    /**
     * 获取平均值
     * @returns {number}
     */
    public getValue():number {
        return this.numSum / this.numsLen;
    }

    /**
     * 清空
     */
    public clear():void {
        this.nums.splice(0);
        this.numsLen = 0;
        this.numSum = 0;
    }
}
