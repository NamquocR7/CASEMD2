"use strict";
exports.__esModule = true;
exports.AccountManager = void 0;
var AccountManager = /** @class */ (function () {
    function AccountManager() {
        this.listAccount = [];
    }
    AccountManager.prototype.add = function (t) {
        this.listAccount.push(t);
    };
    AccountManager.prototype["delete"] = function (id) {
        var index = this.findById(id);
        this.listAccount.splice(index, 1);
    };
    AccountManager.prototype.edit = function (id, t) {
        var index = this.findById(id);
        this.listAccount[index] = t;
    };
    AccountManager.prototype.findALL = function () {
        console.log(this.listAccount);
    };
    AccountManager.prototype.findById = function (id) {
        for (var i = 0; i < this.listAccount.length; i++) {
            if (this.listAccount[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    return AccountManager;
}());
exports.AccountManager = AccountManager;
