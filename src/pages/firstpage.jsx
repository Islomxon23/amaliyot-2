import React from 'react'
import '../css/nav.css'
export default function firstpage() {
  return (
    <div className='sas'>
        <div className='div'>
            <div className='div1'>
              <i class="fa-solid fa-barcode"></i>
              <a href="">SCAN PRODUCTS WITH THE BOTTON SCAN PANEL</a>
            </div>
            <div className='div22'>
              <input type="text" placeholder='TYPE AN ITEM CODE MANUALLY'/>
              <button><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>

        
        <div className='red'>
          <div className='red1'>
          <i class="fa-solid fa-weight-scale"></i>
          <p>WEIGH A PRODUCT</p>
          </div>

          <div className='red11'>
          <i class="fa-solid fa-user-tie"></i>
          <p>CALL AN ASSISTAN</p>
          </div>

          <div className='red22'>
          <i class="fa-solid fa-bag-shopping"></i>
          <p>ADD A BAG</p>
          </div>
        </div>

        <div className='name'>
            <div className='name1'>
                  <table id='tabl' border={1}>
                      <tr>
                        <th>name</th>
                        <th>QTY</th>
                        <th>EACH</th>
                        <th>DISKOUNT</th>
                        <th>TAX</th>
                        <th>TOTAL</th>
                      </tr>
                      <tr>
                        <td>Fresh Salted Mazzarella - 16 oz</td>
                        <td>1</td>
                        <td>$6.49</td>
                        <td>$0.19</td>
                        <td>$0.32</td>
                        <td>$6.81</td>
                      </tr>
                      <tr>
                        <td>Australian Beef Filet Mignon - 4 oz</td>
                        <td>1</td>
                        <td>$44.99</td>
                        <td>$1.12</td>
                        <td>$2.25</td>
                        <td>$47.24</td>
                      </tr>
                      <tr>
                         <td>Wild Alaskian Salmon steak - 8 oz</td>
                         <td>1</td>
                         <td>$12.19</td>
                         <td>$0.00</td>
                         <td>$0.61</td>
                         <td>$12.8</td>
                      </tr>
                      <tr>
                         <td>Organic Fresh Potatos - 2 ib</td>
                         <td>1</td>
                         <td>$7.99</td>
                         <td>$0.19</td>
                         <td>$0.40</td>
                         <td>$8.39</td>
                      </tr>
                      <tr>
                        <td>Margherita Pizza - 1 psc</td>
                        <td>1</td>
                        <td>$12.99</td>
                        <td>$0.29</td>
                        <td>$0.65</td>
                        <td>$13.64</td>
                      </tr>
                      <tr>
                        <td>Organic Blueberries - 6 oz</td>
                        <td>1</td>
                        <td>$6.99</td>
                        <td>$0.00</td>
                        <td>$0.35</td>
                        <td>$7.34</td>
                      </tr>
                  </table>
            </div>
            <div className='name11'>
                <div className='son'>
                  <button>7</button>
                  <button>8</button>
                  <button>9</button>
                </div>
                <div className='son'>
                  <button>4</button>
                  <button>5</button>
                  <button>6</button>
                </div>
                <div className='son'>
                  <button>1</button>
                  <button>2</button>
                  <button>3</button>
                </div>
                <div className='son'>
                  <button>.</button>
                  <button>0</button>
                  <button><i class="fa-solid fa-left-long"></i></button>
                </div>
            </div>
        </div>

        <div className='sub'>
          <div className='sub1'>
              <div className='nol'>
                    <div>
                      <p>Sub Total</p>
                      <p>Discount</p>
                      <p>Tax</p>
                      <p>Total Items</p>
                    </div>
                    <div>
                      <p>$313.56</p>
                      <p>$8.69</p>
                      <p>$15.24</p>
                      <p>$21</p>
                    </div>
              </div>
              <div className='nol11'>
                  <div>
                    <p>Total Amount</p>
                    <h1>$320.11</h1>
                  </div>
              </div>
          </div>
          <div className='sub2'>
             <i class="fa-solid fa-credit-card"></i>
             <h3>GO TO PAYMENT</h3>
          </div>
        </div>

    </div>
  )
}
