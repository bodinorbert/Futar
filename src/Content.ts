import fs from "fs";
import http from "http";
import url from "url";
import Megoldás from "./Megoldás";

export default class Content {
    public static content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Futár</title>");
        res.write("</head>");
        res.write("<body><form><pre>");
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const params = new url.URL(req.url as string, `http://${req.headers.host}/`).searchParams;

        // Kezd a kódolást innen -->

        // 1. Olvassa be a tavok.txt állományban található adatokat,
        // s annak felhasználásával oldja meg a következő feladatokat!
        const mo: Megoldás = new Megoldás("tavok.txt");
        // const megold: Megol = new Megoldás("tavok.txt");

        // 2. Hány km volt a hét legelső útja??
        // A kiszámított távolságot írassa ki a képernyőre!
        res.write(`2. Feladat: A hét legelső útja: ${mo.elsőÚtHossza} km.\n`);

        res.write(`3. Feladat: A hét utolsó útja: ${mo.utolsóÚtHossza} km.\n`);

        res.write(`4. Feladat: A futár a követkető napon/napokon nem dolgozott: ${mo.nemDolgozott} \n`);

        res.write(`\n5. feladat: a legtöbb fuvar a(z) {0}. napon volt!`)

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
