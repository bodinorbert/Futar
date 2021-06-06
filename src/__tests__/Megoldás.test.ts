import fs from "fs";
import Megoldás from "../Megoldás";

describe("Megoldás osztály unit tesztek", () => {
    const instance: Megoldás = new Megoldás("tavok.txt");

    it("Megoldás osztálypéldány ellenőrzése", async () => {
        expect(instance).toBeInstanceOf(Megoldás);
    });

    it("Első út", async () => {
        expect(instance.elsőÚtHossza).toBe(920);
    });

    // it("Utolsó út", async () => {
    //     expect(instance.utolsóÚtHossza).toBe(8);
    // });

    
});