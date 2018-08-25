var SceneConsts;
(function (SceneConsts) {
    /**
     * Game场景
     * @type {number}
     */
    SceneConsts[SceneConsts["Game"] = 1] = "Game";
    /**
     * 游戏场景
     * @type {number}
     */
    SceneConsts[SceneConsts["UI"] = 2] = "UI";
    /**
     * Loading场景
     * @type {number}
     */
    SceneConsts[SceneConsts["LOADING"] = 3] = "LOADING";
    /**
     * RpgGame场景
     * @type {number}
     */
    SceneConsts[SceneConsts["RpgGame"] = 4] = "RpgGame";
})(SceneConsts || (SceneConsts = {}));
