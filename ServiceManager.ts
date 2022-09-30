import {Manager} from "./Manager";
import {Service} from "./Service";

export class ServiceManager implements Manager<Service>{
    listService: Service[]=[];
    constructor() {
        let service1 = new Service(1,"CAKE",10000)
        let service2 = new Service(2,"STING",12000)
        let service3 = new Service(3,"MYTOM",13000)
        this.listService.push(service1,service2,service3);
    }
    add(t: Service)
     {
        this.listService.push(t)

    }

    delete(name: string) {
    }

    edit(name: string, t: Service) {
    }

    findALL() {
    }

    findByName(name: string) {
    }
    findById(id:number){
        for (let i = 0; i < this.listService.length; i++) {
            if(this.listService[i].id==id){
                return i;
            }

        }return -1;
    }

}