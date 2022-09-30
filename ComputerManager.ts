import {Manager} from "./Manager";
import {Computer} from "./Computer";

export class ComputerManager implements Manager<Computer>{
    listComputer: Computer[]=[];
    constructor() {
        let com1 = new Computer("MAY1","OFF")
        let com2 = new Computer("MAY2","OFF")
        let com3 = new Computer("MAY3","OFF")
        let com4 = new Computer("MAY4","OFF")
        let com5 = new Computer("MAY5","OFF")
        let com6 = new Computer("MAY6","OFF")
        let com7 = new Computer("MAY7","OFF")
        let com8 = new Computer("MAY8","OFF")
        this.listComputer.push(com1,com2,com3,com4,com5,com6,com7,com8);
    }


    add(t: Computer) {
        this.listComputer.push(t)
    }

    delete(name: string) {
        let index=this.findByName(name);
        this.listComputer.splice(index,1);
    }


    edit(name: string, t: Computer) {
        let index= this.findByName(name);
        this.listComputer[index]=t;
    }

    findALL() {
        for (let i = 0; i < this.listComputer.length; i++) {

            console.log(`Name:${this.listComputer[i].name} - Status:${this.listComputer[i].status}`);
        }
    }

    findByName(name: string) {
        for (let i = 0; i < this.listComputer.length; i++) {
            if(this.listComputer[i].name==name){
                return i;
            }
        }
        return -1
    }
    showOnline():any {
        for (let i = 0; i < this.listComputer.length; i++)
        {
            if(this.listComputer[i].status == "ON") {
                console.log(`Name:${this.listComputer[i].name} - Status:${this.listComputer[i].status}`)
            }
        }
    }
    showOffline() : any{
        for (let i = 0; i < this.listComputer.length; i++)
        {
            if(this.listComputer[i].status == "OFF") {
                console.log(`Name:${this.listComputer[i].name} - Status:${this.listComputer[i].status}`);
            }
        }
    }
    showByName(name: string) {
        let index = this.findByName(name);
        if(index == -1) {
            console.log(`Khong co may voi ten: ${name}`);
        }else {
            console.log(`Name: ${this.listComputer[index].name} - Status: ${this.listComputer[index].status}`);
        }
    }


}