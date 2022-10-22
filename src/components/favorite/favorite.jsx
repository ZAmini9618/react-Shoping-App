import './favorite.css';
import React, { useContext } from 'react'
import { DataContext } from '../../DataProvider'
import { Link } from 'react-router-dom'


export default function Favorite() {
    const Context = useContext(DataContext)
    const [Favorite, setFavorite] = Context.Favorite
    const addCart = Context.addCart



    const remove = (id) => {
        Favorite.forEach((item, index) => {
            if (item._id === id) {
                Favorite.splice(index, 1)
            }
        })
        setFavorite([...Favorite])
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    window.scrollTo(0, 0)

    if (Favorite.length === 0) {
        return <div style={{ marginTop: '100px', display: "flex" }}>
            <Link to="/">
                <img className='emtyLike' src='/img/icons8-wish-list-96.png'></img>
            </Link>
            <h1 className='emtyLikeH'>لیست علاقه مندی شما خالی است...</h1>
        </div>
    }
    return (
        <div style={{ marginTop: 120, display: 'flex', flexWrap: 'wrap' }}>
            {
                Favorite.map(product => (
                    <div className="detailsFavorite FavoriteBox " key={product._id} >
                        <div className="img-containerCart"
                            style={{ backgroundImage: `url(${product.images})` }} />
                        <div className="box-detailsCart" >
                            <Link to={`/products/${product._id}`}><h2>{product.title}</h2></Link>
                            <p>
                                <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", right: -5 }} width="16" height="16" fill="currentColor" className="icons bi bi-info-square-fill" viewBox="0 0 16 16">
                                    <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                </svg>
                                شرح :{product.description}</p>
                            <p>{product.content}</p>
                            <h3><svg xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", right: -5 }} width="16" height="16" fill="currentColor" className="icons bi bi-currency-exchange" viewBox="0 0 16 16">
                                <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6 .46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
                            </svg>
                                {numberWithCommas(product.price)}تومان</h3>
                        </div>
                        <button className='addLike' onClick={() => addCart(product._id)}>
                            افزودن به سبد خرید
                        </button>
                        <div className="delete" onClick={() => remove(product._id)}>X</div>

                    </div>
                ))
            }

        </div>
    )
}
