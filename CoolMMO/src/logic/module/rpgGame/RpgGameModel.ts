class RpgGameModel extends BaseModel {
    public mapId: number;
    public playerData: any;
    public monsterNum: number;

    public constructor($controller: BaseController) {
        super($controller)
    }
}