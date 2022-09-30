export class Account{
    private _id:number;
    private _userName:string;
    private _passWord:string;

    constructor(id:number,userName: string, passWord: string) {
        this._userName = userName;
        this._passWord = passWord;
        this._id=id;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    get passWord(): string {
        return this._passWord;
    }

    set passWord(value: string) {
        this._passWord = value;
    }
}
