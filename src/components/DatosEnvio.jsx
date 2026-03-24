"use client";
import { useState } from "react";
const DatosEnvio = ({ idProduct })=>{
    const [datosEnvio, setDatosEnvio] = useState({
        nombre: "",
        telefono: "",
        email: "",
        ciudad: "",
        direccion: "",
    });
    const [generandoPago, setGenerandoPago] = useState(false);
    const handlerSubmit = async (e) => {
        if(generandoPago) return;
        if(!datosEnvio.nombre || !datosEnvio.telefono || !datosEnvio.email || !datosEnvio.ciudad || !datosEnvio.direccion){
            alert("Por favor complete todos los campos");
            return;
        }
        e.preventDefault();
        setGenerandoPago(true);
        try {
            const items = [{
                idProduct: idProduct,
            }];
            const res = await fetch("/api/mp/crear-preferencia", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ items, customer: datosEnvio}),
            });
            const data = await res.json();
            if (data.link) window.location.href = data.link;
            else throw new Error();

        } catch (error) {
            alert("Error al intentar pagar");
        }
    }
    return (
      <div className="mt-12 bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6">
          Datos para el envío
        </h2>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nombre completo"
            className="border rounded-lg p-3"
            name="nombre"
            value={datosEnvio.nombre}
            onChange={(e) => setDatosEnvio({...datosEnvio, nombre: e.target.value})}
            required
          />

          <input
            type="tel"
            placeholder="Teléfono"
            className="border rounded-lg p-3"
            name="telefono"
            value={datosEnvio.telefono}
            onChange={(e) => setDatosEnvio({...datosEnvio, telefono: e.target.value})}
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={datosEnvio.email}
            onChange={(e) => setDatosEnvio({...datosEnvio, email: e.target.value})}
            required
            className="border rounded-lg p-3"
          />

          <input
            type="text"
            value={datosEnvio.ciudad}
            placeholder="Ciudad / Provincia"
            className="border rounded-lg p-3"
            name="ciudad"
            onChange={(e) => setDatosEnvio({...datosEnvio, ciudad: e.target.value})}
            required
          />

          <input
            type="text"
            placeholder="Dirección de envío"
            value={datosEnvio.direccion}
            onChange={(e) => setDatosEnvio({...datosEnvio, direccion: e.target.value})}
            name="direccion"
            className="border rounded-lg p-3 md:col-span-2"
            required
          />

          <a
            // type="submit"
            onClick={handlerSubmit}
            className={`${generandoPago ? "bg-gray-800" : "bg-green-600 hover:bg-green-700 transition cursor-pointer" } md:col-span-2 text-white py-3 rounded-lg font-semibold text-center`}
          >
            {generandoPago ? "Generando pago..." : "Pagar"}
          </a>
        </form>
      </div>
    );
}
export default DatosEnvio;