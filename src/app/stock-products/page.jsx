"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Cargar productos
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("/api/products");
      const result = await response.json();
      setProducts(result.data);
      setIsLoading(false);
    };
    fetchProducts();
  }, []);

  if (isLoading) {
    return (
      <div className="h-[100%] w-full">
        <img
          className="w-full h-svh object-contain max-h-[800px] md:max-h-none"
          src="./loading_Test.gif"
        ></img>
      </div>
    );
  }

  // Eliminar producto
  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, { method: "DELETE" });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="mt-16 px-4 mb-24">
      <h2 className="mt-3 text-4xl text-center text-blue-800 font-bold">
        Productos
      </h2>
      <table className="w-full border-collapse border mt-6">
        <thead>
          <tr className="bg-blue-200">
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Precio</th>
            <th className="border p-2">Stock</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products?.length > 0 ? (
            products.map((item) => (
              <tr key={item.id} className="bg-slate-300">
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.price}</td>
                <td className="border p-2">
                  {item.stock?.cantidad_disponible ?? 0}
                </td>
                <td className="border p-2 flex gap-2 justify-center">
                  <button
                    onClick={() =>
                      router.push(`/stock-products/edit/${item.id}`)
                    }
                    className="bg-yellow-500 text-white px-2 py-1 rounded"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-600 text-white px-2 py-1 rounded"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="text-center p-2">
                No hay productos
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
