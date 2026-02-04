interface PageProps {
  params: {
    id: string
  }
}

const ENVIO_FIJO = 6000;

import productos from "../../data/products.json";
import DatosEnvio from '@/components/DatosEnvio';
export default function Producto({ params }: PageProps) {
  const producto = productos.find((x:any) => x.id === params.id)

  if (!producto) {
    return <h1>Producto no encontrado</h1>
  }

  const total = producto.precio + ENVIO_FIJO

  return (
    <div className="mt-20 flex justify-center lg:block max-w-5xl mx-auto px-4 py-10">
      {/* PRODUCTO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Imagen */}
        <div className="flex justify-center">
          <img
            src={producto.urlImage}
            alt={producto.title}
            className="max-w-sm rounded-xl shadow-md"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            {producto.title}
          </h1>

          <p className="text-gray-600 mb-6">
            {producto.text}
          </p>

          <div className="space-y-2 text-lg">
            <p>
              <span className="font-semibold">Precio:</span>{" "}
              ${producto.precio.toLocaleString()}
            </p>
            <p>
              <span className="font-semibold">Envío:</span>{" "}
              ${ENVIO_FIJO.toLocaleString()}
            </p>
            <p className="text-xl font-bold">
              Total: ${total.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
        <DatosEnvio idProduct={producto.id} />
      
    </div>
  )
}
