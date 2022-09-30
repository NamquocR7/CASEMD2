"use strict";
exports.__esModule = true;
var AccountManager_1 = require("./AccountManager");
var ComputerManager_1 = require("./ComputerManager");
var ServiceManager_1 = require("./ServiceManager");
var Computer_1 = require("./Computer");
var Daylyincome_1 = require("./Daylyincome");
var Account_1 = require("./Account");
var listAccountManagement = new AccountManager_1.AccountManager();
var listComputerManager = new ComputerManager_1.ComputerManager();
var listServiceManager = new ServiceManager_1.ServiceManager();
// @ts-ignore
var input = require('readline-sync');
var price = 10;
var priceService = 0;
var currentDate = new Date();
var dailyIncome = new Daylyincome_1.DailyIncome();
dailyIncome.date = "".concat(currentDate.getDate(), "-").concat(currentDate.getMonth() + 1, "-").concat(currentDate.getFullYear());
dailyIncome.income = 0;
function account() {
    var menu = "\n    ====MENU====\n    1. Dang ky\n    2. Dang nhap\n    0. Out\n    ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Nhap lua chon: ");
        switch (choice) {
            case 1:
                var id = +input.question("Nhap id: ");
                var name_1 = input.question("Nhap TK dangky: ");
                var pass = input.question("Nhap MK dangky: ");
                var user = new Account_1.Account(id, name_1, pass);
                listAccountManagement.add(user);
                break;
            case 2:
                var userName = input.question("Nhap TK: ");
                var userPass = input.question("Nhap MK: ");
                if (userName == "1" && userPass == "1") {
                    menuCyber();
                }
                if (userName == name_1 && userPass == pass) {
                    menuCyber();
                }
                else {
                    console.log("Sai nhap lai di!!");
                }
                break;
            case 0:
                break;
            default:
                console.log("Wrong, please re-enter");
                break;
        }
    } while (choice != 0);
}
function menuCyber() {
    var menu = "\n    -------MENU-------\n    1.Hien thi cac may\n    2.Them may\n    3.Chinh thong tin may\n    4.Xoa may\n    5.Mo may va them dich vu\n    6.Tat may\n    7.Tuy chon tai khoan\n    8.Thanh toan->Doanh thu\n    0.Exit\n    ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Nhap lua chon cua ban:");
        switch (choice) {
            case 1:
                showComputer();
                break;
            case 2:
                addComputer();
                break;
            case 5:
                openComputer();
                break;
            case 6:
                dailyIncome.income += offComputer();
                break;
            case 3:
                editComputer();
                break;
            case 4:
                deleteComputer();
                break;
            case 7:
                addAccount();
                break;
            case 8:
                turnover();
                break;
            case 0:
                break;
            default:
                console.log("Wrong, please re-enter");
                break;
        }
    } while (choice != 0);
}
function showComputer() {
    var Menu = "----------Menu-----------\n" +
        "1.Hien thi tat ca may.\n" +
        "2.Hien thi may ON.\n" +
        "3.Hien thi may OFF.\n" +
        "4.Hien thi may by name.\n" +
        "0.Exit \n" +
        "-----------------------------";
    var choice;
    do {
        console.log(Menu);
        choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1:
                listComputerManager.findALL();
                break;
            case 2:
                listComputerManager.showOnline();
                break;
            case 3:
                listComputerManager.showOffline();
                break;
            case 4:
                var computerName = input.question("Nhap ten may ");
                while (listComputerManager.findByName(computerName) == -1) {
                    console.log("Thong tin sai, moi nhap lai.");
                    computerName = input.question("Nhap ten may: ");
                }
                listComputerManager.showByName(computerName);
                break;
            case 0:
                break;
            default:
                console.log("Sai, moi nhap lai.");
                break;
        }
    } while (choice != 0);
}
function addComputer() {
    function checkValidName(name) {
        for (var i = 0; i < listComputerManager.listComputer.length; i++) {
            if (name == listComputerManager.listComputer[i].name) {
                return false;
            }
        }
        return true;
    }
    var computerName = input.question("Nhap ten may: ");
    while (!checkValidName(computerName)) {
        console.log("Ten may da ton tai, nhap ten khac");
        computerName = input.question("Nhap ten may: ");
    }
    var addComputer = new Computer_1.Computer(computerName, "OFF");
    listComputerManager.add(addComputer);
    console.log("Da them ".concat(computerName, " Thanh Cong!"));
}
function deleteComputer() {
    console.log("Cac may o thoi diem hien tai: ");
    listComputerManager.findALL();
    console.log("May ban muon xoa?");
    var option = input.question("Ten may: ");
    while (listComputerManager.findByName(option) == -1) {
        console.log("Sai, moi ban nhap lai.");
        option = input.question("Ten may: ");
    }
    listComputerManager["delete"](option);
}
function editComputer() {
    var nameEdit = input.question("Nhap ten may muon chinh: ");
    if (listComputerManager.findByName(nameEdit) == -1) {
        console.log("Ten may khong ton tai");
    }
    else {
        var nameEditt = input.question(" Nhap ten: ");
        var statusEdit = input.question("Nhap trang thai: ");
        listComputerManager.edit(nameEdit, new Computer_1.Computer(nameEditt, statusEdit));
    }
}
function openComputer() {
    var menu = "\n    1. Mo may\n    2. Them dich vu\n    0. Thoat\n    ";
    var choice;
    do {
        console.log(menu);
        choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1:
                var nameOpen = input.question("Chon ten may ban muon mo: ");
                if (listComputerManager.findByName(nameOpen) == -1) {
                    console.log("Khong co ten may");
                }
                else {
                    var index = listComputerManager.findByName(nameOpen);
                    if (listComputerManager.listComputer[index].status == "OFF") {
                        listComputerManager.listComputer[index].status = "ON";
                        listComputerManager.listComputer[index].time.startTime = Date.now();
                        showComputer();
                        console.log("May da duoc mo!");
                    }
                    else {
                        console.log("May dang chay!");
                    }
                }
                break;
            case 2:
                var nameAdd = input.question("May them dich vu:");
                if (listComputerManager.findByName(nameAdd) == -1) {
                    console.log("Khong ton tai");
                }
                else {
                    var index1 = listComputerManager.findByName(nameAdd);
                    if (listComputerManager.listComputer[index1].status == "OFF") {
                        console.log("May dang OFF");
                    }
                    else if (listComputerManager.listComputer[index1].status == "ON") {
                        console.log(listServiceManager);
                        var idService = +input.question("Nhap id san pham: ");
                        if (idService >= 1 && idService <= 4) {
                            var index2 = listServiceManager.findById(idService);
                            listComputerManager.listComputer[index1].service.push(listServiceManager.listService[index2]);
                            for (var i = 0; i < listComputerManager.listComputer.length; i++) {
                                if (i == index1) {
                                    console.log(listComputerManager.listComputer[index1].service);
                                    for (var j = 0; j < listServiceManager.listService.length; j++) {
                                        if (j == index2) {
                                            console.log(listServiceManager.listService[index2].nameService + " Gia:" + listServiceManager.listService[index2].price);
                                            priceService += listServiceManager.listService[index2].price;
                                            return priceService;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            console.log("Khong co san pham!");
                        }
                    }
                    return dailyIncome.income += priceService;
                }
                break;
            case 0:
                break;
            default:
                console.log("Sai nhap lai");
                break;
        }
    } while (choice != 0);
}
function offComputer() {
    var totalMoney = 0;
    var nameOff = input.question("Chon ten may ban muon tat: ");
    if (listComputerManager.findByName(nameOff) == -1) {
        console.log("May khong ton tai, moi nhap lai!!");
    }
    else {
        var index1 = listComputerManager.findByName(nameOff);
        if (listComputerManager.listComputer[index1].status == "OFF") {
            console.log("May dang tat!");
        }
        else if (listComputerManager.listComputer[index1].status == "ON") {
            listComputerManager.listComputer[index1].status = "OFF";
            listComputerManager.listComputer[index1].time.endTime = Date.now();
            showComputer();
            console.log("Tat may thu: " + (index1 + 1));
            var totalTime = (listComputerManager.listComputer[index1].time.endTime - listComputerManager.listComputer[index1].time.startTime) / 1000;
            var totalMoney_1 = totalTime * price + priceService;
            console.log("Thoi gian su dung: " + totalTime + " s ");
            console.log("Tong tien: " + totalMoney_1 + "VND");
            return totalMoney_1;
        }
    }
    return dailyIncome.income += totalMoney;
}
function addAccount() {
    var menuAccount = "\n    ------Account-----\n    1. Them account\n    2. Sua account\n    3. Xoa account\n    4. Hien thi list accounts\n    0. Exit\n    ";
    var choice1;
    do {
        console.log(menuAccount);
        choice1 = +input.question("Nhap lua chon cua ban: ");
        switch (choice1) {
            case 1:
                var id1 = +input.question("Nhap id:");
                var name1 = input.question("NHap tai khoan: ");
                var pass1 = input.question("Nhap mat khau: ");
                var user = new Account_1.Account(id1, name1, pass1);
                listAccountManagement.add(user);
                break;
            case 2:
                var id2 = +input.question("NHap id acc muon sua: ");
                var name2 = input.question("Ten tk moi: ");
                var pass2 = input.question("MK moi: ");
                listAccountManagement.edit(id2, new Account_1.Account(id2, name2, pass2));
                break;
            case 3:
                var id3 = +input.question("Chon ID TK muon xoa: ");
                listAccountManagement["delete"](id3);
                break;
            case 4:
                listAccountManagement.findALL();
                break;
            case 0:
                break;
        }
    } while (choice1 != 0);
}
function turnover() {
    console.log("Doanh thu toi thoi diem hien tai: ");
    console.log("".concat(dailyIncome.date, ":$").concat(dailyIncome.income, " ") + "VND");
}
account();
