/**
 * Created by Dörthe on 20.05.2016.
 */
export interface ILinkDef {
    url: string;
    beschreibung: string;
    image? : string;
}

export class LinkDef implements ILinkDef {

    constructor(public url:string, public beschreibung:string) {

    }
}