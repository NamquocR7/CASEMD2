import {AccountManager} from "./AccountManager";
import {ComputerManager} from "./ComputerManager";
import {ServiceManager} from "./ServiceManager";
import {Computer} from "./Computer";
import {DailyIncome} from "./Daylyincome";
import {Account} from "./Account";

let listAccountManagement: AccountManager=new AccountManager();
let listComputerManager: ComputerManager= new ComputerManager();
let listServiceManager: ServiceManager= new ServiceManager();
// @ts-ignore
let input = require('readline-sync');
let price = 10;
let priceService = 0;
let currentDate = new Date();
let dailyIncome = new DailyIncome();
dailyIncome.date = `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}`;
dailyIncome.income = 0;
function account() {
    let menu = `
    ====MENU====
    1. Dang ky
    2. Dang nhap
    0. Out
    `
    let choice: number;
    do {
        console.log(menu)
        choice = +input.question("Nhap lua chon: ");
        switch (choice) {
            case 1:
                let id= +input.question("Nhap id: ");
                let name = input.question("Nhap TK dangky: ");
                let pass = input.question("Nhap MK dangky: ");
                let user = new Account(id, name, pass);
                listAccountManagement.add(user);
                break;
            case 2:
                let userName = input.question("Nhap TK: ");
                let userPass = input.question("Nhap MK: ");
                if (userName == "1" && userPass == "1") {
                    menuCyber();
                }
                if (userName == name && userPass == pass) {
                    menuCyber();
                } else {
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

function menuCyber(){
    let menu=`
    -------MENU-------
    1.Hien thi cac may
    2.Them may
    3.Chinh thong tin may
    4.Xoa may
    5.Mo may va them dich vu
    6.Tat may
    7.Tuy chon tai khoan
    8.Thanh toan->Doanh thu
    0.Exit
    `
    let choice;
    do{
        console.log(menu)
        choice=+input.question("Nhap lua chon cua ban:");
        switch (choice){
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
                dailyIncome.income += offComputer()
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

    }while(choice!=0)

}
function showComputer(){

let Menu = "----------Menu-----------\n" +
    "1.Hien thi tat ca may.\n" +
    "2.Hien thi may ON.\n" +
    "3.Hien thi may OFF.\n" +
    "4.Hien thi may theo ten.\n" +
    "0.Exit \n" +
    "-----------------------------";
let choice;
do{
    console.log(Menu);
    choice = +input.question("Nhap lua chon cua ban: ");
    switch (choice) {
        case 1:
            listComputerManager.findALL()
            break;
        case 2:
            listComputerManager.showOnline()
            break;
        case 3:
            listComputerManager.showOffline()
            break;
        case 4:
            let computerName = input.question("Nhap ten may ");
            while (listComputerManager.findByName(computerName) == -1) {
                console.log("Thong tin sai, moi nhap lai.");
                computerName = input.question("Nhap ten may: ");
            }
            listComputerManager.showByName(computerName);
            break;
        case 0:
            break;
        default:
            console.log("Sai, moi nhap lai.")
            break;
    }
}while (choice != 0);
}
function addComputer() {
    function checkValidName(name){
        for (let i = 0; i < listComputerManager.listComputer.length; i++) {
            if(name == listComputerManager.listComputer[i].name) {
                return false;
            }
        }
        return true;
    }
    let computerName = input.question("Nhap ten may: ");
    while (!checkValidName(computerName)) {
        console.log("Ten may da ton tai, nhap ten khac");
        computerName = input.question("Nhap ten may: ");
    }

    let addComputer = new Computer(computerName, "OFF");
    listComputerManager.add(addComputer);
    console.log(`Da them ${computerName} Thanh Cong!`)

}

function deleteComputer(){
        console.log("Cac may o thoi diem hien tai: ");
        listComputerManager.findALL();
        console.log("May ban muon xoa?");
        let option = input.question("Ten may: ");
        while (listComputerManager.findByName(option) == -1) {
            console.log("Sai, moi ban nhap lai.");
            option = input.question("Ten may: ");
        }
        listComputerManager.delete(option);
    }

function editComputer() {
    let nameEdit = input.question("Nhap ten may muon chinh: ");
    if (listComputerManager.findByName(nameEdit) == -1) {
        console.log("Ten may khong ton tai");
    } else {
        let nameEditt = input.question(" Nhap ten: ");
        let statusEdit = input.question("Nhap trang thai: ");
        listComputerManager.edit(nameEdit, new Computer( nameEditt, statusEdit));
    }
}
function openComputer() {

    let menu = `
    1. Mo may
    2. Them dich vu
    0. Thoat
    `
    let choice: number;
    do {
        console.log(menu);
        choice = +input.question("Nhap lua chon cua ban: ");
        switch (choice) {
            case 1:
                let nameOpen = input.question("Chon ten may ban muon mo: ");
                if (listComputerManager.findByName(nameOpen) == -1) {


                    console.log("Khong co ten may");
                } else {
                    let index = listComputerManager.findByName(nameOpen);
                    if (listComputerManager.listComputer[index].status == "OFF") {
                        listComputerManager.listComputer[index].status = "ON";
                        listComputerManager.listComputer[index].time.startTime = Date.now();
                        showComputer();
                        console.log("May da duoc mo!");
                    } else {
                        console.log("May dang chay!");
                    }
                }
                break;
            case 2:
                let nameAdd = input.question("May them dich vu:");
                if (listComputerManager.findByName(nameAdd) == -1) {
                    console.log("Khong ton tai");
                } else {
                    let index1 = listComputerManager.findByName(nameAdd);
                    if (listComputerManager.listComputer[index1].status == "OFF"){
                        console.log("May dang OFF");
                    } else if (listComputerManager.listComputer[index1].status == "ON") {
                        console.log(listServiceManager);
                        let idService = +input.question("Nhap id san pham: ");
                        if (idService >= 1 && idService <= 4) {
                            let index2 = listServiceManager.findById(idService);
                            listComputerManager.listComputer[index1].service.push(listServiceManager.listService[index2]);
                            for (let i = 0; i < listComputerManager.listComputer.length; i++) {
                                if (i == index1) {
                                    console.log(listComputerManager.listComputer[index1].service);
                                    for (let j = 0; j < listServiceManager.listService.length; j++) {
                                        if (j == index2) {
                                            console.log(listServiceManager.listService[index2].nameService + " Gia:" + listServiceManager.listService[index2].price);
                                            priceService += listServiceManager.listService[index2].price;
                                            return priceService;
                                        }
                                    }
                                }
                            }
                        } else {
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
    let totalMoney = 0;
    let nameOff = input.question("Chon ten may ban muon tat: ");
    if (listComputerManager.findByName(nameOff) == -1) {
        console.log("May khong ton tai, moi nhap lai!!");
    } else {
        let index1 = listComputerManager.findByName(nameOff);
        if (listComputerManager.listComputer[index1].status == "OFF") {
            console.log("May dang tat!");
        } else if (listComputerManager.listComputer[index1].status == "ON") {
            listComputerManager.listComputer[index1].status = "OFF";
            listComputerManager.listComputer[index1].time.endTime = Date.now();
            showComputer();

            console.log("Tat may thu: " + (index1 + 1));
            let totalTime = (listComputerManager.listComputer[index1].time.endTime - listComputerManager.listComputer[index1].time.startTime) / 1000;
            let totalMoney = totalTime * price + priceService;
            console.log("Thoi gian su dung: " + totalTime + " s ");
            console.log("Tong tien: " + totalMoney + "VND");
            return totalMoney;
        }
    }
    return dailyIncome.income += totalMoney;

}
function addAccount() {
    let menuAccount = `
    ------Account-----
    1. Them account
    2. Sua account
    3. Xoa account
    4. Hien thi list accounts
    0. Exit
    `
    let choice1: number;
    do {
        console.log(menuAccount);
        choice1 = +input.question("Nhap lua chon cua ban: ");
        switch (choice1) {
            case 1:
                let id1 = +input.question("Nhap id:")
                let name1 = input.question("NHap tai khoan: ");
                let pass1 = input.question("Nhap mat khau: ");
                let user = new Account(id1, name1, pass1);
                listAccountManagement.add(user);
                break;
            case 2:
                let id2 = +input.question("NHap id acc muon sua: ");
                let name2 = input.question("Ten tk moi: ");
                let pass2 = input.question("MK moi: ");
                listAccountManagement.edit(id2, new Account(id2, name2, pass2));
                break;
            case 3:
                let id3 = +input.question("Chon ID TK muon xoa: ");
                listAccountManagement.delete(id3);
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
    console.log(`${dailyIncome.date}:$${dailyIncome.income} `+"VND");
}






account();