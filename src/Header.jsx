import logo from "../src/assets/logo.svg";
import ring from "../src/assets/ring.svg";
import moon from "../src/assets/icons/moon.svg";
import Sun from '../src/assets/icons/sun.svg'
import shoppingCart from "../src/assets/shopping-cart.svg";
import { useContext, useState } from "react";
import CartDetails from "./cine/CartDetails";
import { MovieContext, ThemeContext } from "./context";

export default function Header() {
  const [showCart, setShowCArt] = useState(false);
  const { state } = useContext(MovieContext);
  const {darkMode, setDarkMode} = useContext(ThemeContext)

  const handleShowCart = () => {
    setShowCArt(true);
  };

  const handleCloseCart = () => {
    setShowCArt(false);
  };
  return (
    <header>
      {showCart && <CartDetails onCloseCart={handleCloseCart} />}
      <nav className="container mx-auto flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
            onClick={()=> setDarkMode(darkMode => !darkMode)}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={darkMode ? Sun : moon} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              onClick={handleShowCart}
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={shoppingCart} width="24" height="24" alt="" />
              {state.cartData.length > 0 && <span className="flex justify-center items-center rounded-full absolute top-[-10px] md:top-[-12px] left-[20px] md:left-[28px] bg-[#12CF6F] text-white text-center text-xs md:text-base w-[20px] h-[20px] md:w-[30px] md:h-[30px]">{state.cartData.length}</span>}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
