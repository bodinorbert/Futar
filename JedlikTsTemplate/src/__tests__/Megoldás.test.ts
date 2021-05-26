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

    it("Utolsó út", async () => {
        expect(instance.utolsóÚtHossza).toBe(8);
    });

    it("Gazdagsor legnagyobb és legkisebb telkének távolsága", async () => {
        expect(instance.legnagyobbLegkisebbTelkekTávolsága).toBe(5);
    });

    it("Legnagyobb gazdagsori telek házszáma", async () => {
        expect(instance.legnagyobbTelekGazdagsor.házszám).toBe(27);
    });

    it("Legnagyobb gazdagsori telek területe", async () => {
        expect(instance.legnagyobbTelekGazdagsor.terület).toBe(1225);
    });

    it("Legkisebb gazdagsori telek házszáma", async () => {
        expect(instance.legkisebbTelekGazdagsor.házszám).toBe(15);
    });

    it("Legkisebb gazdagsori telek terület", async () => {
        expect(instance.legkisebbTelekGazdagsor.terület).toBe(600);
    });

    it("Adóbevétel a gazdagsoron", async () => {
        expect(instance.agóGazdagsor).toBe(629100);
    });

    it("Fájlok összehasonlítása", async () => {
        expect(fs.readFileSync("joletsor.csv").toString()).toBe(fs.readFileSync("joletsorOH.csv").toString());
    });
});