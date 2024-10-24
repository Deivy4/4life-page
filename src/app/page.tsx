import Image from "next/image"
import ItemNote from '../components/ItemNote'
import Product from "@/components/Product"
export default function Home() {

  const notes = [
    { urlImage : "/Bolivia-new-bcv.jpg", text : `¡Te lo decimos de corazón! 4Life Transfer Factor BCV es un suplemento elaborado con precisión para ofrecer respaldo enfocado en la salud del sistema cardiovascular y circulatorio
4Life Transfer Factor BCV combina la tecnología de Targeted Transfer Factor exclusiva de 4Life con ingredientes específicos como la coenzima Q10, el ginkgo biloba, ajo y el extracto de levadura de arroz rojo.`, title : "Transfer Factor BCV"},
    { urlImage : "/Bolivia_tf_boost.jpg", text : `Este producto contiene 4Life Transfer Factor. Este producto, ligeramente efervescente y con sabor a naranja, también contiene una cantidad impresionante de vitamina C, así como zinc y vitamina D de alta potencia, para ofrecer un amplio rango de defensa para el sistema inmunológico y respaldo antioxidante; repone los electrolitos perdidos para respaldar la hidratación, promoviendo un envejecimiento saludable.`, title : "4Life Transfer Factor Boost"},
    { urlImage : "/TFPlus_060524US.webp", text : `Esta fórmula exclusiva brinda el máximo nivel de nuestros ingredientes.
Combina las proteínas de calostro bovino y yema de huevo e incluye ingredientes adicionales conocidos por su capacidad nutritiva como los hongos shiitake y maitake, junto con cordyceps, agaricus, hexafosfato de inositol, betaglucanos y beta sitosterol ayudan a reforzar el sistema inmunológico y el funcionamiento saludable de los sistemas corporales acompañado de una dieta balanceada y ejercicios`, title : "4Life Transfer Factor Plus"},
    { urlImage : "/Bolivia_tri_factor_formula_new.webp", text : `Este producto contiene ingredientes producidos por el sistema inmunitario para el sistema inmunitario; representa un avance revolucionario en la ciencia de 4Life Transfer Factor y eleva los estándares del respaldo para el sistema inmunitario con 4Life Transfer Factor Tri-Factor Formula.`, title : "Transfer Tri-Factor Formula"},
    { urlImage : "/Bolivia_new_recall.webp", text : `Dale un impulso a tu cerebro con 4Life Transfer Factor ReCall, esta fórmula completa provee el exclusivo Targeted Transfer Factor de 4Life, antioxidantes y una mezcla sinérgica de nutrientes herbales.`, title : "Transfer Factor Recall"},
    { urlImage : "/Bolivia-belle-vie-new.jpg", text : `¡Que viva la feminidad! 4Life Transfer Factor Belle Vie, es un producto de la línea Target Transfer Factor fortificado con mezclas exclusivas de ingredientes específicos para dar el respaldo antioxidativo y otros beneficios para ellas.`, title : "4Life Transfer Factor Belle Vie"},
    { urlImage : "/Bolivia_malepro_blue_cap.jpg", text : `Al igual que un traje que está hecho a la medida, MalePro está diseñado especialmente para las necesidades específicas de los hombres. Formulado específicamente para dar respaldo al bienestar general masculino.
Rico en ingredientes nutricionales importantes. Contiene calostro bovino y yema de huevo`, title : "4Life Transfer Factor MalePro"},
    { urlImage : "/3223fce6-15c7-4b00-b512-d86f961d3d12.jpg", text : `¡Siéntete de 22™! 4Life Transfer Factor® Renuvo® es una fórmula para cualquier persona que busca un respaldo ante a los factores estresantes de la vida diaria y promueve la recuperación total del cuerpo. Incluye 4Life Transfer Factor`, title : "TF Renuvo"},
  ]
  return (
    <div className="mt-14 flex flex-col justify-center items-center">
      <div className="mt-2 flex justify-center w-full items-center text-white container mx-auto">
        <div>
          <Image className="rounded" width={300}
          height={500}
          alt="Transfer factor" src={"/photo_davidazul.jpg"}/>
        </div>
        <div className="flex justify-center items-center w-[50%]">
          <p className="text-2xl">Afiliados independientes de 4life</p>
        </div>
      </div>
      <h2 className="text-4xl my-8">Productos de 4life</h2>
      <div className="justify-center text-white container">
        <div className="w-[100%] flex flex-wrap gap-4  justify-center mb-8">
          {notes.map((item, index)=>{
            return <Product key={index} urlImage={item.urlImage} title={item.title} contentText={item.text}/>
          })}
        </div>
      </div>
      {/* <h2 className="text-4xl my-8">Notas y reseñas</h2>
      <div className="bg-orange-500 justify-center text-white container">
        <div className="w-[100%] flex flex-wrap gap-4 items-center justify-center">
          {notes.map((item, index)=>{
            return <ItemNote contentText={item.text}/>
          })}
        </div>
      </div> */}
    </div>
  )
}
