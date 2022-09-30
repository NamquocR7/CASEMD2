export interface Manager<T>{
    add(t:T)
    findALL();
    edit(name:string,t:T);
    delete(name:string);
    findByName(name:string);
}