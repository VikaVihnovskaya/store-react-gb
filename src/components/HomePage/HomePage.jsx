import products from "../../data/products";
import {Link} from "react-router-dom";
import Header from "../Header/Header";
import ProductItem from "../Products/ProductItem";
import Footer from "../Footer/Footer";

function HomePage() {
  return (
      <div className="box-content">
        <Header />
        <div className="content">
          <div className="top_brand">
            <div className="top_brand_img">
              <img className="top_brand_pic" src="/images/banner.png" alt="Man" />
              <div className="top_brand_title">
                <div className="top_brand_text">
                  <h1 className="tb_large">THE BRAND</h1>
                  <h2 className="tb_small">
                    OF LUXERIOUS <span className="tb_small tb_small__highlighted">FASHION</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="offers center">
            <div className="small_offers">
              <div className="offer offer__for_women">
                <h4 className="offer_subtitle">30% OFF</h4>
                <h3 className="offer_title">FOR WOMEN</h3>
              </div>
              <div className="offer offer__for_men">
                <h4 className="offer_subtitle">HOT DEAL</h4>
                <h3 className="offer_title">FOR MEN</h3>
              </div>
              <div className="offer offer__for_kids">
                <h4 className="offer_subtitle">NEW ARRIVALS</h4>
                <h3 className="offer_title">FOR KIDS</h3>
              </div>
            </div>
            <div className="offer offer__accesories">
              <h4 className="offer_subtitle">LUXIROUS & TRENDY</h4>
              <h3 className="offer_title">ACCESORIES</h3>
            </div>
          </div>
          <div className="products center">
            <p className="products_title">Fetured Items</p>
            <p className="products_text">
              Shop for items based on what we featured in this week
            </p>
            <div className="product_items">
              {products.slice(6).map((product) => (
                  <ProductItem
                      key={product.id}
                      id={product.id}
                      title={product.title}
                      description={product.description}
                      price={product.price}
                      image={product.image}
                      size={product.size}
                  />
              ))}
            </div>
            <div className="products_button">
              <Link className="browse_button" to="/catalog">
                Browse All Product
              </Link>
            </div>
          </div>
          <section>
            <div className="features center">
              <figure>
                <div className="feature">
                  <div className="delivery__icon">
                    <div className="delivery__descr__icon">
                      <img src="/images/forma_1_1322.png" alt="/"/>
                    </div>
                  </div>
                  <h4 className="feature_title">Free Delivery</h4>
                  <p className="feature_description">
                    Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.
                  </p>
                </div>
              </figure>
              <figure>
                <div className="feature">
                  <div className="delivery__icon">
                    <div className="delivery__descr__icon">
                      <img src="/images/forma_1_1340.png" alt="/"/>
                    </div>
                  </div>
                  <h4 className="feature_title">Sales & discounts</h4>
                  <p className="feature_description">
                    Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.
                  </p>
                </div>
              </figure>
              <figure>
                <div className="feature">
                  <div className="delivery__icon">
                    <div className="delivery__descr__icon">
                      <img src="/images/forma_1_1341.png" alt="/"/>
                    </div>
                  </div>
                  <h4 className="feature_title">Quality assurance</h4>
                  <p className="feature_description">
                    Worldwide delivery on all. Authorit tively morph
                    next-generation innov tion with extensive models.
                  </p>
                </div>
              </figure>
            </div>
          </section>
        </div>
        <Footer/>
      </div>
  );
}
export default HomePage;