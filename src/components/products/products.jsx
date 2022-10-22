import { useContext } from 'react'
import { DataContext } from '../../DataProvider';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import Modal from '../modal/Modal';
import './products.css';

function Products() {
    const Context = useContext(DataContext);
    const [products] = Context.products;
    const addCart = Context.addCart;
    const addFavorite = Context.addFavorite;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = products.length / 2;
    const [modal, setModal] = useState(false);
    const [tempdata, setTempData] = useState([]);



    const getData = (title, description, price) => {
        let tempData = [title, description, price];
        setTempData(item => [...tempData])
        return setModal(true);

    }

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, products]);



    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    return (<>
        <div className="container">
            <div className="products">
                {
                    currentItems.map(product => (
                        <div className="card  " key={product._id}>
                            <div className="productImg">

                                <Link to={`/products/${product._id}`}>
                                    <img src={product.images} alt="Loding Error" />
                                </Link>
                                <button onClick={() => addFavorite(product._id)} className='Like'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                                    </svg>
                                </button>
                            </div>

                            <button className="modalBtn"
                                onClick={() => getData(product.title, product.description, product.price)}
                            ><svg xmlns="http://www.w3.org/2000/svg" color="black" width="22" height="22" fill="currentColor" class="bi bi-arrow-up-right-square" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z" />
                                </svg>
                            </button>



                            <div className="box">
                                <h3 title={product.title}>
                                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                                </h3>
                                <div className='descriptionDiv'><p>{product.description}</p></div>
                                <h4>{numberWithCommas(product.price)} تومان</h4>
                                <button className="addCart" onClick={() => addCart(product._id)}>
                                    افزودن به سبد خرید
                                </button>
                            </div>

                        </div>


                    ))
                }
                {
                    modal === true ? <Modal title={tempdata[0]} description={tempdata[1]} price={tempdata[2]} hide={() => setModal(false)} /> : ''
                }


            </div>
        </div>
        <ReactPaginate
            breakLabel="..."
            nextLabel="»"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="«"
            renderOnZeroPageCount={null}
            containerClassName='pagination'
            pageLinkClassName='page-num'
            previousLinkClassName='page-num'
            nextLinkClassName='page-num'
            activeLinkClassName='active'
        />

    </>
    );
}
export default Products;
