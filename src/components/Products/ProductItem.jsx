
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/CartReducer";
import {Link} from "react-router-dom";

function ProductItem(product) {
  const dispatch = useDispatch();
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  return (
      <div className="item">
        <div className="item_img">
          <img className="item_pic" src={product.image} alt="productImg"/>
          <div className="hover_img">
            <div className="hover">
              <Link className="add-to-cart" to="/cartPage" onClick={(e) => handleAddToCart(product)}></Link>
              <img src="/images/btn-cart.svg" alt="cart"/>
              <p className="add-text">Add to Cart</p>
            </div>
          </div>
        </div>
          <div className="item_text">
            <h5 className="item_title">{product.title}</h5>
            <p className="item_description">{product.description}</p>
            <p className="item_price">{product.price}</p>
          </div>
      </div>
  );
}

export default ProductItem;
