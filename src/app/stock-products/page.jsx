"use client";
import React, { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [editingId, setEditingId] = useState(null); // ID del producto que se edita
  const [editedProduct, setEditedProduct] = useState({}); // Datos editables

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

  // Guardar cambios
  const handleSave = async (id) => {
    // Prepara objeto para enviar
    const body = { ...editedProduct };

    // Separar stock y agregar stock.id si existe
    if (editedProduct.stock?.id) {
      body.stock = {
        id: editedProduct.stock.id,
        cantidad_disponible: editedProduct.stock.cantidad_disponible,
      };
    }

    const response = await fetch(`/api/products/${body.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();
    // Actualizar productos localmente
    setProducts((prev) =>
      prev.map((p) =>
        p.id === body.id
          ? {
              ...p,
              ...result.data,
              stock: result.data.stock ?? editedProduct.stock ?? p.stock,
            }
          : p
      )
    );

    setEditingId(null);
    setEditedProduct({});
  };

  // Eliminar producto
  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  // Cambiar valor del producto editando
  const handleChange = (field, value) => {
    setEditedProduct({ ...editedProduct, [field]: value });
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
            products.map((item) => {
              return (
                <tr key={item.id} className="bg-red-100">
                  <td className="border p-2">
                    {editingId === item.id ? (
                      <input
                        type="text"
                        value={editedProduct.name || item.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="border p-1 w-full"
                      />
                    ) : (
                      item.name
                    )}
                  </td>
                  <td className="border p-2">
                    {editingId === item.id ? (
                      <input
                        type="number"
                        value={editedProduct.price || item.price}
                        onChange={(e) =>
                          handleChange("price", Number(e.target.value))
                        }
                        className="border p-1 w-full"
                      />
                    ) : (
                      item.price
                    )}
                  </td>
                  <td className="border p-2">
                    {editingId === item.id ? (
                      <input
                        type="number"
                        value={
                          editedProduct.stock?.cantidad_disponible ||
                          item.stock?.cantidad_disponible ||
                          0
                        }
                        onChange={(e) =>
                          handleChange("stock", {
                            cantidad_disponible: Number(e.target.value),
                            id: item.stock?.id,
                          })
                        }
                        className="border p-1 w-full"
                      />
                    ) : (
                      item.stock?.cantidad_disponible ?? 0
                    )}
                  </td>
                  <td className="border p-2 flex gap-2 justify-center">
                    {editingId === item.id ? (
                      <>
                        <button
                          onClick={() => handleSave(item.id)}
                          className="bg-green-500 text-white px-2 py-1 rounded"
                        >
                          Guardar
                        </button>
                        <button
                          onClick={() => {
                            setEditingId(null);
                            setEditedProduct({});
                          }}
                          className="bg-gray-500 text-white px-2 py-1 rounded"
                        >
                          Cancelar
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          onClick={() => {
                            setEditingId(item.id);
                            setEditedProduct(item);
                          }}
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
                      </>
                    )}
                  </td>
                </tr>
              );
            })
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
