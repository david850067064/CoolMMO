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
var MoveComponent = (function (_super) {
    __extends(MoveComponent, _super);
    function MoveComponent() {
        return _super.call(this) || this;
    }
    MoveComponent.prototype.start = function () {
        _super.prototype.start.call(this);
    };
    MoveComponent.prototype.stop = function () {
        _super.prototype.stop.call(this);
        this.endX = null;
        this.endY = null;
        this.radian = null;
        this.distance = null;
        this.node = null;
    };
    MoveComponent.prototype.update = function (advancedTime) {
        _super.prototype.update.call(this, advancedTime);
        if (this.entity.pathChange) {
            this.entity.pathChange = false;
            this.node = null;
        }
        if (!this.node) {
            if (!this.entity.path) {
                return;
            }
            if (!this.entity.path.length) {
                this.entity.path = null;
                return;
            }
            this.nextNode();
            if (this.node) {
                this.move(advancedTime);
            }
        }
        else {
            this.move(advancedTime);
        }
    };
    MoveComponent.prototype.move = function (advancedTime) {
        var useSpeed = this.entity.speed / (1000 / 60) * advancedTime;
        if (this.distance > useSpeed) {
            var speedX = Math.cos(this.radian) * useSpeed;
            var speedY = Math.sin(this.radian) * useSpeed;
            this.entity.x += speedX;
            this.entity.y += speedY;
            this.distance -= useSpeed;
        }
        else {
            this.entity.x = this.endX;
            this.entity.y = this.endY;
            this.entity.col = this.node.x;
            this.entity.row = this.node.y;
            this.node = null;
            // console.log(this._gameEntity.col, this._gameEntity.row);
        }
    };
    MoveComponent.prototype.nextNode = function () {
        this.node = this.entity.path.shift();
        var p = RpgGameUtils.convertCellToXY(this.node.x, this.node.y);
        this.endX = p.x;
        this.endY = p.y;
        this.radian = App.MathUtils.getRadian2(this.entity.x, this.entity.y, this.endX, this.endY);
        this.distance = App.MathUtils.getDistance(this.entity.x, this.entity.y, this.endX, this.endY);
        this.entity.dir = RpgGameUtils.computeGameObjDir(this.entity.x, this.entity.y, this.endX, this.endY);
        // console.log(angle, this._gameEntity.dir);
    };
    return MoveComponent;
}(Component));
__reflect(MoveComponent.prototype, "MoveComponent");
