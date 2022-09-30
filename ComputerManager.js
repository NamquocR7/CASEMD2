"use strict";
exports.__esModule = true;
exports.ComputerManager = void 0;
var Computer_1 = require("./Computer");
var ComputerManager = /** @class */ (function () {
    function ComputerManager() {
        this.listComputer = [];
        var com1 = new Computer_1.Computer("MAY1", "OFF");
        var com2 = new Computer_1.Computer("MAY2", "OFF");
        var com3 = new Computer_1.Computer("MAY3", "OFF");
        var com4 = new Computer_1.Computer("MAY4", "OFF");
        var com5 = new Computer_1.Computer("MAY5", "OFF");
        var com6 = new Computer_1.Computer("MAY6", "OFF");
        var com7 = new Computer_1.Computer("MAY7", "OFF");
        var com8 = new Computer_1.Computer("MAY8", "OFF");
        this.listComputer.push(com1, com2, com3, com4, com5, com6, com7, com8);
    }
    ComputerManager.prototype.add = function (t) {
        this.listComputer.push(t);
    };
    ComputerManager.prototype["delete"] = function (name) {
        var index = this.findByName(name);
        this.listComputer.splice(index, 1);
    };
    ComputerManager.prototype.edit = function (name, t) {
        var index = this.findByName(name);
        this.listComputer[index] = t;
    };
    ComputerManager.prototype.findALL = function () {
        for (var i = 0; i < this.listComputer.length; i++) {
            console.log("Name:".concat(this.listComputer[i].name, " - Status:").concat(this.listComputer[i].status));
        }
    };
    ComputerManager.prototype.findByName = function (name) {
        for (var i = 0; i < this.listComputer.length; i++) {
            if (this.listComputer[i].name == name) {
                return i;
            }
        }
        return -1;
    };
    ComputerManager.prototype.showOnline = function () {
        for (var i = 0; i < this.listComputer.length; i++) {
            if (this.listComputer[i].status == "ON") {
                console.log("Name:".concat(this.listComputer[i].name, " - Status:").concat(this.listComputer[i].status));
            }
        }
    };
    ComputerManager.prototype.showOffline = function () {
        for (var i = 0; i < this.listComputer.length; i++) {
            if (this.listComputer[i].status == "OFF") {
                console.log("Name:".concat(this.listComputer[i].name, " - Status:").concat(this.listComputer[i].status));
            }
        }
    };
    ComputerManager.prototype.showByName = function (name) {
        var index = this.findByName(name);
        if (index == -1) {
            console.log("Khong co may voi ten: ".concat(name));
        }
        else {
            console.log("Name: ".concat(this.listComputer[index].name, " - Status: ").concat(this.listComputer[index].status));
        }
    };
    return ComputerManager;
}());
exports.ComputerManager = ComputerManager;
