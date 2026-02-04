import jsonProducts from "@/app/data/products.json";
export async function GetProducts() {
  return jsonProducts;
}
