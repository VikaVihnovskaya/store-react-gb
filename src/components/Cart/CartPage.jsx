import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import products from "../../data/products";
import {clearCart, removeFromCart, updateCartItemQuantity} from "../../store/CartReducer";
import Header from "../Header/Header";
import {Link} from "react-router-dom";
import Footer from "../Footer/Footer";

const CartPage = () => {

  const cartItems = useSelector(state => state.cartItems);
  const dispatch = useDispatch();

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      const product = products.find((product) => product.id === item.id);
      total += product.price * item.quantity;
    });
    setTotalPrice(total);
  }, [cartItems]);

  const handleQuantityChange = (e, product) => {
    const value = Number(e.target.value);
    dispatch(updateCartItemQuantity({ product, value }));
  };

  const handleRemoveItem = (product) => {
    dispatch(removeFromCart(product));
  };

  return (
      <div className="box-content">
        <Header />
        <div className="content">
          <div className="head center">
            <h1 className="head_title">SHOPPING CART</h1>
          </div>
          <div className="cart-box center">
            {cartItems.length === 0 ? (
                <h2>Your cart is empty</h2>
            ) : (
                <div className="cart-box__left">
                  <div className="cart-box__products">
                    {cartItems.map((item) => {
                      if (item)
                        return (
                            <div className="cart-box__product_card" key={item.id}>
                              <div className="cart-box__card_img">
                                <img src={item.image} alt="productImg" />
                              </div>
                              <div className="cart-box__card_text">
                                <h4 className="cart-box__card_title">
                                  {item.title}
                                </h4>
                                <p className="cart-box__card_content">
                                  Price:&nbsp;
                                  <span className="cart-box__card_price cart-box__card_value">
                              ${item.price}
                            </span>
                                </p>
                                <p className="cart-box__card_content">
                                  Size:&nbsp;
                                  <span className="cart-box__card_value">
                              {item.size}
                            </span>
                                </p>
                                <label
                                    htmlFor="quantity"
                                    className="cart-box__card_content"
                                >
                                  Quantity:
                                </label>
                                <input
                                    id="quantity"
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => handleQuantityChange(e,item)}
                                />
                              </div>
                              <Link to='#'
                                  className="cart-box__close_icon"
                                  onClick={() => handleRemoveItem(item)}
                              >
                                <img src="/images/close_icon.svg" alt=""/>
                              </Link>
                            </div>
                        );
                      return null;
                    })}
                  </div>
                  <div className="cart-box__buttons">
                    <div className="cart-box__shopping_button">
                      <Link to='#'
                          className="cart-box__shopping_button_title"
                          onClick={() => dispatch(clearCart())}
                      >
                        Clear shopping cart
                      </Link>
                    </div>
                    <div className="cart-box__shopping_button">
                      <Link
                          className="cart-box__shopping_button_title"
                          to="/catalog"
                      >
                        Continue shopping
                      </Link>
                    </div>
                  </div>
                </div>
            )}
            <div className="cart-box__right">
              <div className="cart-box__shipping-form">
                <h4 className="cart-box__shipping-title">SHIPPING ADRESS</h4>
                <input
                    className="cart-box__shipping-field"
                    type="text"
                    id="country"
                    placeholder="Country"
                    value="Bangladesh"
                    required
                />
                <input
                    className="cart-box__shipping-field"
                    type="text"
                    id="territory"
                    placeholder="State"
                    required
                />
                <input
                    className="cart-box__shipping-field"
                    type="text"
                    id="postcode"
                    placeholder="Postcode / Zip"
                    required
                />
                <div className="cart-box__shipping_button">
                  <Link to="/" className="cart-box__shipping_button_title">
                    GET A QUOTE
                  </Link>
                </div>
              </div>
              <div className="cart-box__checkout-box">
                <div className="cart-box__subtotal">
                  <div>SUB TOTAL</div>
                  <div>${totalPrice}</div>
                </div>
                <div className="cart-box__grandtotal">
                  <div>GRAND TOTAL</div>
                  <div className="cart-box__totalprice">
                    ${totalPrice}
                  </div>
                </div>
                <hr className="cart-box__checkout-line" />
                <div className="cart-box__checkout-button">
                  <Link to="/" className="cart-box__checkout_button_title">
                    PROCEED TO CHECKOUT
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
  );
};

export default CartPage;