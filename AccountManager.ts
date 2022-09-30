
import {Account} from "./Account";

export class AccountManager {
    listAccount: Account[]=[];
    add(t: Account) {
        this.listAccount.push(t);
    }

    delete(id:number) {
        let index=this.findById(id)
        this.listAccount.splice(index,1);
    }

    edit(id:number, t: Account) {
        let index = this.findById(id)
        this.listAccount[index]=t;
    }

    findALL() {
        console.log( this.listAccount);
    }

    findById(id:number) {
        for (let i = 0; i < this.listAccount.length; i++) {
            if(this.listAccount[i].id==id){
                return i;
            }
        }
        return  -1;
    }

}