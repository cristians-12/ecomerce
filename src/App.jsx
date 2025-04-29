import { useState } from "react";
import { canasta, lampara, lampara2, mueble } from "./assets/images";
import Carta from "./components/Carta";
import Navbar from "./components/Navbar";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <h2>El contador es: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar contador
      </button>

      <Navbar />
      <div className="flex gap-5">
        <Carta
          imagen={mueble}
          titulo={"Loveseat Sofa"}
          calificacion={3}
          precio={"199.00"}
        />
        <Carta
          calificacion={4}
          imagen={lampara}
          precio={24.99}
          titulo={"Table Lamp"}
        />
        <Carta
          imagen={lampara2}
          calificacion={2}
          precio={24.99}
          titulo={"Beige Table Lamp"}
        />
        <Carta
          imagen={canasta}
          calificacion={5}
          precio={24.99}
          titulo={"Bamboo Basket"}
        />
        <Carta
          imagen={canasta}
          calificacion={5}
          precio={24.99}
          titulo={"Bamboo Basket"}
        />
        <Carta
          imagen={canasta}
          calificacion={5}
          precio={24.99}
          titulo={"Bamboo Basket"}
        />
      </div>
    </div>
  );
}
