"use client";
import React, { useEffect, useState } from "react";

export default function Page({ params }) {
  const { id } = params;
  const [product, setProduct] = useState(null);
  const [activo, setActivo] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`/api/products/${id}`);
      const result = await response.json();
      setProduct(result.data);
      setActivo(result.data.activo);

      // Comenzar fade-out
      setFadeOut(true);

      // Quitar el loader después de la transición
      setTimeout(() => setIsLoading(false), 500); // 500ms = duración de fade
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="relative min-h-screen">
      {/* Contenido principal */}
      {product && (
        <div className="p-4 mt-16 max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">
            Editar producto
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-4">
            <div>
              <h4>Name</h4>
              <input
                type="text"
                defaultValue={product.name}
                className="w-full mb-4 border p-2 rounded"
              />
            </div>
            <div>
              <h4>Price</h4>
              <input
                type="number"
                defaultValue={product.price}
                className="w-full mb-4 border p-2 rounded"
              />
            </div>
            <div>
              <h4>Cantidad disponible</h4>
              <input
                type="number"
                defaultValue={product.stock?.cantidad_disponible ?? 0}
                className="w-full mb-4 border p-2 rounded"
              />
            </div>
            <div>
              <h4>Description</h4>
              <textarea className="w-full mb-4 border px-2 h-28 max-h-28 min-h-28 rounded">
                {product.description}
              </textarea>
            </div>
            <div>
              <h4>UrlImage</h4>
              <input
                type="text"
                defaultValue={product.urlImage}
                className="w-full mb-4 border p-2 rounded"
              />
              <label>
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={activo}
                  onChange={(e) => setActivo(e.target.checked)}
                />
                Activo
              </label>
            </div>
            <div>
              <h4>UrlProduct</h4>
              <input
                type="text"
                defaultValue={product.urlProduct}
                className="w-full mb-4 border p-2 rounded"
              />
            </div>
          </div>

          <button className="md:w-[20%] text-xs sm:text-lg min-w-[150px] md:min-w-[220px] bg-blue-800 text-white hover:bg-blue-700 px-3 py-1 rounded-lg font-bold shadow-lg transition-all duration-300 hover:scale-105">
            Guardar
          </button>
        </div>
      )}

      {/* Loader overlay */}
      {isLoading && (
        <div
          className={`absolute inset-0 flex justify-center items-center bg-white transition-opacity duration-500 ${
            fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <img
            src="/loading_Test.gif"
            alt="Cargando..."
            className="-full h-svh object-contain max-h-[800px] md:max-h-none"
          />
        </div>
      )}
    </div>
  );
}
