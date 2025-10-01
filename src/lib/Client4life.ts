import { Paises }from "@/lib/Enums";

export async function GetProducts ({ Pais } : { Pais : Paises}) : Promise<Product4life[]> {
        const responseArg = await fetch(`/api/products-principal/${Pais == Paises.Argentina ? 1 : 2}`)
        return await responseArg.json()
}
export interface Product4life {
    id?: number;                 // Correspondiente a int en C#
    name?: string;               // Correspondiente a string en C#
    description?: string;        // Correspondiente a string en C#
    urlProduct?: string;        // Correspondiente a string en C#
    urlImage?: string;           // Correspondiente a string en C#
    idPais?: number;             // Correspondiente a int en C#
    price?:number   // Correspondiente a DateTime en C#
}
