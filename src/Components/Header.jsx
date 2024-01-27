import { useContext } from "react";
import logoImg from "../assests/logo.jpg";
import Button from "./UI/Button";
import cartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";
const Header = () => {
  const cartCtx = useContext(cartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const handleShowCart = () => {
    userProgressCtx.showCart();
  };

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly>
          Cart ({totalCartItems})
        </Button>
      </nav>
    </header>
  );
};

export default Header;
