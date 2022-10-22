import { useState, useContext } from 'react'
import './header.css';
import { Link } from 'react-router-dom'
import { DataContext } from '../../DataProvider'


export default function Header() {
    const Context = useContext(DataContext)
    const [cart] = Context.cart
    const [Navbar, setNavbar] = useState(false)



    const backgroundChange = () => {
        if (window.scrollY > 100) {
            setNavbar(true)
        } else {
            setNavbar(false)
        }
    }
    window.addEventListener("scroll", backgroundChange)


    return (
        <>
            <header className={Navbar ? 'navbar active' : 'navbar'}>

                <div className='styleMenu '>
                    <Link to="/">𝒔𝒉𝒐𝒑𝒊𝒏𝒈 𝒂𝒑𝒑</Link>
                </div>
                <ul>
                    <li>
                        <div className='headerFavorite'>
                            <Link to={"/favorite"}>
                                <svg style={{ color: "black" }} xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                                </svg>
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="cart-icon">
                            <span>{cart.length}</span>
                            <Link to="/cart">
                                <svg color='black' width={30} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-cart" className="svg-inline--fa fa-shopping-cart fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M528.12 301.319l47.273-208C578.806 78.301 567.391 64 551.99 64H159.208l-9.166-44.81C147.758 8.021 137.93 0 126.529 0H24C10.745 0 0 10.745 0 24v16c0 13.255 10.745 24 24 24h69.883l70.248 343.435C147.325 417.1 136 435.222 136 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-15.674-6.447-29.835-16.824-40h209.647C430.447 426.165 424 440.326 424 456c0 30.928 25.072 56 56 56s56-25.072 56-56c0-22.172-12.888-41.332-31.579-50.405l5.517-24.276c3.413-15.018-8.002-29.319-23.403-29.319H218.117l-6.545-32h293.145c11.206 0 20.92-7.754 23.403-18.681z"></path></svg>
                            </Link>
                        </div>
                    </li>
                </ul>

            </header>
        </>
    )

}



