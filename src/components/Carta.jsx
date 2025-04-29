import { useState } from "react";
import EstrellaIcono from "../assets/svg/EstrellaIcono";

export default function Carta({
  imagen,
  titulo,
  calificacion,
  precio,
  descuento,
}) {
  const [like, setLike] = useState(false);

  return (
    <div>
      <img src={imagen} alt="" />
      <div className="bg-black cursor-pointer text-white text-center mt-5 py-2 rounded-[8px]">
        Add to cart
      </div>
      <div className="flex">
        {[...Array(calificacion)].map((_, i) => (
          <EstrellaIcono key={i} />
        ))}
      </div>
      <h3 className="font-semibold">{titulo}</h3>
      <h3 className="font-semibold">${precio}</h3>
      <div className="text-5xl cursor-pointer" onClick={() => setLike(!like)}>
        {like ? "❤️" : "🤍"}
      </div>
    </div>
  );
}
