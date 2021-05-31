export default class Futár {
    private _napszáma: number;
    private _napi_fuvar: number;
    private _fuvar_km: number;

    public get napszáma(): number {
        return this._napszáma;
    }

    public get napi_fuvar(): number {
        return this._napi_fuvar;
    }

    public get fuvar_km(): number {
        return this._fuvar_km;
    }

}