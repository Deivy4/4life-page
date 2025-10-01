"use client";

import React from "react";
import { useSidebar } from "@/context/SideBarContext";
import { useCart } from "react-use-cart";

export default function SideRightBar() {
  const { isOpen, closeSideBar } = useSidebar();
  const { items, updateItemQuantity, removeItem, cartTotal } = useCart();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          onClick={closeSideBar}
          className="fixed inset-0 bg-black bg-opacity-50 z-[9]"
        ></div>
      )}

      {/* SideBar */}
      <div
        className={`p-4 fixed top-0 right-0 h-full w-[80%] md:w-[40%] z-40 bg-white shadow-lg transform transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <article className="flex flex-col gap-8 h-full">
          <h2 className="text-xl border-b-2">Carrito</h2>

          <div className="flex flex-col justify-between h-full">
            {/* Productos en carrito */}
            <div className=" flex flex-col overflow-y-auto max-h-[70vh]">
              {items.length === 0 && <p>El carrito está vacío</p>}

              {items.map((item) => (
                <div
                  key={item.id}
                  className="border-b border-solid border-black pb-1 mb-1"
                >
                  <h3>{item.name}</h3>
                  <p>Precio: ${item.price}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <div className="flex ">
                    <div className="flex gap-2  items-center">
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 bg-gray-200 rounded"
                      >
                        -
                      </button>
                      <button
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 bg-gray-200 rounded"
                      >
                        +
                      </button>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="px-2 bg-red-500 text-white rounded"
                      >
                        Eliminar
                      </button>
                    </div>
                    <div className="w-full flex items-end justify-end">
                      <img src={`${item.urlImage}`} alt="" width={115} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Total y acción */}
            {items.length > 0 && (
              <div className="mt-4">
                <h3>Total: ${cartTotal}</h3>
                <button
                  onClick={() =>
                    window.open("https://wa.link/q8qr69", "_blank")
                  }
                  className="w-full p-2 text-lg bg-green-600 text-white rounded-md mt-2"
                >
                  Ir a pagar
                </button>
              </div>
            )}
          </div>
        </article>
      </div>
    </>
  );
}
