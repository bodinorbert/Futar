import Fuvar from "./Fuvar";
import fs from "fs";
import { kill } from "process";

export default class Megoldás {
    private _fuvarok: Fuvar[] = [];

    public get elsőÚtHossza(): number {
        return this._fuvarok[0].megtettTáv;
    }

    public get utolsóÚtHossza(): number {
        const utolsóIndex = this._fuvarok.length - 1;
        return this._fuvarok[utolsóIndex].megtettTáv;
    }

    public constructor(állományNeve: string) {
        for (const sor of fs.readFileSync(állományNeve).toString().split("\n")) {
            if (sor.length != 0) {
                this._fuvarok.push(new Fuvar(sor.trim()));
            }
        }
        this._fuvarok.sort((a, b) => a.súly - b.súly);
    }

    public get szabadnapok(): number{
        return this._fuvarok[0].napSorszám;
        
    }

    public get nemDolgozott(): string {
        let vissza = "";
        for (let nap = 1; nap <= 7; nap++) {
            // Megszámlálás
            let utakSzáma = 0;
            this._fuvarok.forEach(x => {
                if (x.napSorszám == nap) utakSzáma++;
            });
            if (utakSzáma == 0) {
                vissza += `${nap}. `;
            }
        }
        return vissza;
    }
}
