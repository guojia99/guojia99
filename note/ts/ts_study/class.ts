const Site = /** @class */ (function () {
    function Site() {
    }

    Site.prototype.name = function () {
        console.log("Runoob");
    };
    return Site;
}());
const obj = new Site();
obj.name();