import { useContext } from "react";
import { DataContext } from "../../DataProvider";
import { useState } from "react";
import { useEffect } from "react";
import ReactToPrint from "react-to-print";
import { useRef } from "react";
import './factor.css';


const Factor = () => {
  const Context = useContext(DataContext)
  const [cart, setCart] = Context.cart;
  const [total, setTotal] = useState(0);
  const [products] = Context.products;

  const takh = 0;
  const send = 20000;
  const tax = 1;
  const totalAll = (total + send) - (tax + takh)
  const afterTakh=(products.price)-takh

  useEffect(() => {
    const Total = () => {
      const total = cart.reduce((result, item) => {
        return result + (item.price * item.count)
      }, 0)
      setTotal(total)
    }
    Total()
  }, [cart])


  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
  const componentRef = useRef();


  return (
    <div>
     <div>
     

    </div>
      <div ref={componentRef}  className=" container factor">
        <header className="factorHeader">
          <h1>فاکتور فروش</h1>
          <h4>تاریخ صدور : {new Date().toLocaleString()}</h4>
        </header>
        <div>

          <div className='factorTable'>
            <table>
              <thead>
                <tr>
                  <th>ردیف</th>
                  <th>نام کالا</th>
                  <th>مبلغ (تومان)</th>
                  <th>تخفیف </th>
                  <th style={{width:130}}>مبلغ پس از تخفیف</th>
                </tr>
              </thead>
              {cart.map(product => (
                <tbody>
                  <tr>
                    <td>{product._id}</td>
                    <td>{product.title}</td>
                    <td>{numberWithCommas(product.price)}</td>
                    <td>{takh}</td>
                    <td>{numberWithCommas(product.price - takh)}</td>
                  </tr>
                </tbody>
              ))
              }
              <tr>
                    <td colspan="2">جمع کل</td>
                    <td>{numberWithCommas(total) }</td>
                    <td>{takh}</td>
                    <td>{numberWithCommas(total-(takh))  }</td>
                  </tr>

                  <tbody>
                  <tr>
                    <td colspan="4">جمع کل پس از کسر تخفیف با احتساب مالیات و عوارض (تومان):</td>
                    <td>{numberWithCommas(totalAll)}</td> 
                  </tr>
                  </tbody>
            </table>
          </div>
        </div>

        <div>
          <ul>
            <ReactToPrint
        trigger={() =><li> <button>پرینت</button></li>}
        content={() => componentRef.current}
      />
          </ul>
        </div>
      </div>
      
    </div>
  )

}
export default Factor;