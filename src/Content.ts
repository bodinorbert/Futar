﻿import fs from "fs";
import http from "http";
import url from "url";

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
        const megold: Megoldás = new Megoldás("tavok.txt");

        // 2. Hány km volt a hét legelső útja??
        // A kiszámított távolságot írassa ki a képernyőre!
        res.write(`2. Feladat: A hét legelső útja: ${megold.elsőÚtHossza}m<br> km.`);

        // 3. Az önkormányzat előírásai szerint a 20 m széles vagy annál keskenyebb telkek esetén
        // teljes utcafront beépítést kell alkalmazni.
        // Határozza meg és a képernyőre írassa ki, hogy ez hány telekre vonatkozik a Jólétsoron!
        res.write(`3. Feladat: A hét utolsó útja: ${megold.utolsóÚtHossza}db telek<br> km.`);

        res.write(`4. Feladat: A futár a hét 2. és 6. napján nem dolgozott.`)

        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}