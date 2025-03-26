import axios from "axios";
import { Paises }from "@/lib/Enums"
const client = axios.create({
    baseURL : "https://api.proteccionimnunitaria.com",
    headers : {
        'Content-type': 'application/json'
    }
})
const user:string = "user_api_4life";
const password:string = "fawefadcsxwdrqedfgregergffdsfawefwe";
let token:string = "";

export async function GetProducts ({ Pais } : { Pais : Paises}) : Promise<Product4life[]> {
    if(token == "")
        token = await GetToken();
    client.defaults.headers["Authorization"] = `Bearer ${token}`

    let response = await client.post("/GetAllProducts", { idPais : Pais});
    if(response.status == 401){
        token = await GetToken();
        client.defaults.headers["Authorization"] = `Bearer ${token}`
        response = await client.post("/GetAllProducts", { idPais : Pais});
    }
    
    return response.data;
}
async function GetToken(): Promise<string> {
    let response = await client.post("/auth/login",{
        User : user,
        Password : password
    });
    return response.data.token;
}

export interface Product4life {
    id?: number;                 // Correspondiente a int en C#
    name?: string;               // Correspondiente a string en C#
    description?: string;        // Correspondiente a string en C#
    urlProduct?: string;        // Correspondiente a string en C#
    urlImage?: string;           // Correspondiente a string en C#
    priceDolars?: number;        // Correspondiente a decimal en C#
    priceArgentinos?: number;    // Correspondiente a decimal en C#
    idPais?: number;             // Correspondiente a int en C#
    fechaConversion?: Date;      // Correspondiente a DateTime en C#
}

export async function GetProductWithPrice({idProduct}:{idProduct : number}) : Promise<Product4life>{
    if(token == "")
        token = await GetToken();
    client.defaults.headers["Authorization"] = `Bearer ${token}`
    let response = await client.post("/GetPrice", { idProduct : idProduct});
    if(response.status == 401){
        token = await GetToken();
        client.defaults.headers["Authorization"] = `Bearer ${token}`
        response = await client.post("/GetPrice", { idProduct : idProduct});
    }
    
    return response.data;
}