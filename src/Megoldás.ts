import Fuvar from "./Fuvar";
import fs from "fs";

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
}
