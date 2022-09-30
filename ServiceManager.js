"use strict";
exports.__esModule = true;
exports.ServiceManager = void 0;
var Service_1 = require("./Service");
var ServiceManager = /** @class */ (function () {
    function ServiceManager() {
        this.listService = [];
        var service1 = new Service_1.Service(1, "CAKE", 10000);
        var service2 = new Service_1.Service(2, "STING", 12000);
        var service3 = new Service_1.Service(3, "MYTOM", 13000);
        this.listService.push(service1, service2, service3);
    }
    ServiceManager.prototype.add = function (t) {
        this.listService.push(t);
    };
    ServiceManager.prototype["delete"] = function (name) {
    };
    ServiceManager.prototype.edit = function (name, t) {
    };
    ServiceManager.prototype.findALL = function () {
    };
    ServiceManager.prototype.findByName = function (name) {
    };
    ServiceManager.prototype.findById = function (id) {
        for (var i = 0; i < this.listService.length; i++) {
            if (this.listService[i].id == id) {
                return i;
            }
        }
        return -1;
    };
    return ServiceManager;
}());
exports.ServiceManager = ServiceManager;
