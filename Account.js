"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(id, userName, passWord) {
        this._userName = userName;
        this._passWord = passWord;
        this._id = id;
    }
    Object.defineProperty(Account.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "userName", {
        get: function () {
            return this._userName;
        },
        set: function (value) {
            this._userName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Account.prototype, "passWord", {
        get: function () {
            return this._passWord;
        },
        set: function (value) {
            this._passWord = value;
        },
        enumerable: false,
        configurable: true
    });
    return Account;
}());
exports.Account = Account;
