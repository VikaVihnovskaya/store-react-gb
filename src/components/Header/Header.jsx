import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'


const Header = () => {
  const cartItems = useSelector(state => state.cartItems.cartItems);
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  return (
      <header>
        <div className="container">

          <div className="logo-container">
            <Link to='/'>
              <img src='/images/logo.png' alt="Logo"/>
            </Link>
          </div>

          <div className="search-container">
            <Link to='search'>
              <img src='/images/search.svg' alt="Search"/>
            </Link>
          </div>

          <div className="menu-container">
            <ul className="main-menu horizontal-menu">
              <li>
                <Link to='#'>
                  <img src='/images/humburger.svg' alt="burgerMenu"/>
                </Link>
                <div className="dropdown">
                  <h3>MENU</h3>
                  <h4>MAN</h4>
                  <ul className="menu">
                    <li>
                      <NavLink to="/catalog">Accessories</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">Bags</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">Denim</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">T-Shirts</NavLink>
                    </li>
                  </ul>
                  <h4>WOMAN</h4>
                  <ul className="menu">
                    <li>
                      <NavLink to="/catalog">Accessories</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">Jackets & Coats</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">Polos</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">T-Shirts</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">Shirts</NavLink>
                    </li>
                  </ul>
                  <h4>KIDS</h4>
                  <ul className="menu">
                    <li>
                      <NavLink to="/catalog">Accessories</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">Jackets & Coats</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">Polos</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">T-Shirts</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">Shirts</NavLink>
                    </li>
                    <li>
                      <NavLink to="/catalog">Bags</NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="user">
                <Link to='#'>
                  <img src='/images/person.svg' alt="User"/>
                </Link>
              </li>
              <li className="cart">
                <Link to="/cartPage">
                  <img src='/images/btn-cart.svg' alt="Cart"/>
                  {totalItems > 0 && <span className='cart_count'>{totalItems}</span>}
                </Link>

              </li>
            </ul>
          </div>

        </div>
      </header>
  )
}

export default Header;