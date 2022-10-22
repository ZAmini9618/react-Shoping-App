import React, { useContext, useState, useEffect } from 'react'
import { DataContext } from '../../DataProvider'
import { Link } from 'react-router-dom'
import './cart.css';


export default function Cart() {
    const Context = useContext(DataContext)
    const [cart, setCart] = Context.cart;
    const [total, setTotal] = useState(0);


    useEffect(() => {
        const Total = () => {
            const total = cart.reduce((result, item) => {
                return result + (item.price * item.count)
            }, 0)
            setTotal(total)
        }
        Total()
    }, [cart])

    const decrease = (id) => {
        cart.forEach(item => {
            if (item._id === id) {
                item.count === 1 ? item.count = 1 : item.count -= 1;
            }
        })
        setCart([...cart])
    }

    const remove = (id) => {
        cart.forEach((item, index) => {
            if (item._id === id) {
                cart.splice(index, 1)
            }
        })
        setCart([...cart])
    }

    const increase = (id) => {
        cart.forEach(item => {
            if (item._id === id && item.count < item.stock) {
                item.count += 1;
            }
        })
        setCart([...cart])
    }

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    if (cart.length === 0) {
        return <>
            <h2 style={{ textAlign: "center", fontSize: "30px", marginTop: 230, fontWeight: '600' }}>سبد  خرید شما خالی است ...</h2>
            <Link to="/">
                <button className='plusbtn'>
                    <svg style={{ position: 'relative', left: 8, bottom: 5, color: "red" }} xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                    </svg>
                </button>
            </Link>
        </>
    }
    return (
        <div className=" allCart container" style={{width:"80%" }}>
            {
                cart.map(product => (
                    <div className=" details cart " key={product._id} >
                        <div className="img-containerCart"
                            style={{ backgroundImage: `url(${product.images})` }} />
                        <div className="boxDetailsCart" >
                            <div>
                                <Link style={{ textDecoration: 'none' }} to={`/products/${product._id}`}><h2>{product.title}</h2></Link>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", right: -5 }} width="16" height="16" fill="currentColor" className="icons bi bi-info-square-fill" viewBox="0 0 16 16">
                                        <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                    </svg>
                                    شرح :{product.description}</p>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", right: -5 }} width="16" height="16" fill="currentColor" className="icons bi bi-tags-fill" viewBox="0 0 16 16">
                                        <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                        <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z" />
                                    </svg>
                                    دسته بندی : {product.category}</span>
                                <p>{product.content}</p>
                                <h3><svg xmlns="http://www.w3.org/2000/svg" style={{ position: "relative", right: -5 }} width="16" height="16" fill="currentColor" className="icons bi bi-currency-exchange" viewBox="0 0 16 16">
                                    <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
                                </svg>
                                    قیمت : {numberWithCommas(product.price)} تومان
                                </h3>
                            </div>
                            <div className=" amount">
                                <button className='count' onClick={() => decrease(product._id)}> - </button>
                                <span>{product.count}</span>
                                <button className="count" onClick={() => increase(product._id)}> + </button>
                            </div>
                            <div className="delete" onClick={() => remove(product._id)}>X</div>
                        </div>
                    </div>
                ))
                }
            <div className="total">
                 <div className='totalPric'>
                    <h3 className='product'>جمع سبد خرید :</h3><h2 className='productPrice'>{numberWithCommas(total)} تومان </h2>
                </div>
                 <Link to="/payment">ثبت خرید</Link>
            </div>
            
        </div>
    )
}
