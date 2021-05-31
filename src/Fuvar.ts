export default class Fuvar {
    private _napSorszám: number;
    private _fuvarszám: number;
    private _megtettTáv: number;

    public get súly(): number {
        return this._napSorszám * 100 + this._fuvarszám;
    }

    public get napSorszám(): number {
        return this._napSorszám;
    }

    public get fuvarszám(): number {
        return this._fuvarszám;
    }

    public get megtettTáv(): number {
        return this._megtettTáv;
    }

    public constructor(sor: string) {
        const m: string[] = sor.split(" ");
        this._napSorszám = parseInt(m[0]);
        this._fuvarszám = parseInt(m[1]);
        this._megtettTáv = parseInt(m[2]);
    }
}
