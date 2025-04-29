import { logo } from "../assets/images";
import AvatarIcono from "../assets/svg/AvatarIcono";
import BolsoIcono from "../assets/svg/BolsoIcono";
import LupaIcono from "../assets/svg/LupaIcono";

export default function Navbar() {
  return (
    <nav className="flex justify-evenly py-5">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <ul className="flex gap-5">
        <li>Home</li>
        <li>Shop</li>
        <li>Product</li>
        <li>Contact Us</li>
      </ul>
      <div className="flex gap-5">
        <LupaIcono />
        <AvatarIcono />
        <BolsoIcono />
      </div>
    </nav>
  );
}
