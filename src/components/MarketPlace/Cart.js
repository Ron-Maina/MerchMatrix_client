import React, { useEffect, useState } from 'react';

import { useSelector} from 'react-redux';
import { selectCurrentUser } from '../../features/Authentication/authSlice';


function Cart() {
    // const [quantity, setQuantity] = useState(2);
    const [products, setProducts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const user = useSelector(selectCurrentUser);
    const token = localStorage.getItem('accessToken');


    useEffect(() => {
        if (user) {
            fetch('http://127.0.0.1:5000/merchmatrixapi/mycart', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                const total = data.reduce((acc, product) => acc + product.price, 0);
                setTotalPrice(total);
            })
            .catch(error => console.error('Error:', error));
        }
    }, [token, user]);

    function handleDelete(product_id) {
        if (user) {
            fetch(`http://127.0.0.1:5000/merchmatrixapi/mycart/${user.id}/${product_id}`, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                setProducts(data);
                const total = data.reduce((acc, product) => acc + product.price, 0);
                setTotalPrice(total);
            })
            .catch(error => console.error('Error:', error));
        }
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    return (
        <div className="font-sans max-w-4xl mx-auto my-10 bg-white py-4">
            <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2 bg-gray-100 p-4 rounded-md">
                    <h2 className="text-2xl font-bold text-gray-800">Cart</h2>
                    <hr className="border-gray-300 my-4" />

                    <div className="space-y-4">
                        <div className="grid sm:grid-cols-3 items-center gap-4">
                            {products?.map(product => (
                                <div className="sm:col-span-2 flex items-center gap-4">
                                    <div key={product.id} className="w-24 h-24 shrink-0 bg-white p-1 rounded-md">
                                        <img src={product.image} alt= {product.product_name} className="w-full h-full object-contain" />
                                    </div>

                                    <div>
                                        <h3 className="text-base font-bold text-gray-800">{product.product_name}</h3>
                                        <div className="ml-auto">
                                            <h4 className="my-3 text-sm font-semibold text-gray-800">{`Ksh. ${product.price}`}</h4>
                                        </div>
                                        <h6 
                                            onClick={() => handleDelete(product.product_id)}
                                            className="text-xs text-red-500 cursor-pointer mt-0.5"
                                        >
                                            Remove
                                        </h6>

                                        <div className="flex gap-4 mt-4">
                                            <div>
                                                {/* <button type="button"
                                                    className="flex items-center px-2.5 py-1.5 border border-gray-300 text-gray-800 text-xs outline-none bg-transparent rounded-md">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 124 124">
                                                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                    </svg>

                                                    <span className="mx-2.5">{quantity}</span>

                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-2.5 fill-current" viewBox="0 0 42 42">
                                                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                    </svg>
                                                </button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             ))}
                           
                        </div>

                    </div>
                </div>

                <div className="bg-gray-100 rounded-md p-4 md:sticky top-0">
                    <div className="flex border border-blue-600 overflow-hidden rounded-md">
                        <input type="email" placeholder="Promo code"
                            className="w-full outline-none bg-white text-gray-600 text-sm px-4 py-2.5" />
                        <button type='button' className="flex items-center justify-center font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 px-4 text-sm text-white">
                            Apply
                        </button>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="mt-8">
                            <h3 className="text-base font-semibold text-gray-800 mb-4">Shipping Address</h3>
                            <div className="grid md:grid-cols-2 gap-4">
                                <input type="text" placeholder="Address Line"
                                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                                <input type="text" placeholder="City"
                                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                                <input type="text" placeholder="State"
                                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                                <input type="text" placeholder="Zip Code"
                                    className="px-4 py-3.5 bg-white text-gray-800 w-full text-sm border-b focus:border-gray-800 outline-none" />
                            </div>
                        </div>
                    </form>

                    <ul className="text-gray-800 mt-8 space-y-4">
                        <li className="flex flex-wrap gap-4 text-sm">Discount <span className="ml-auto font-bold">Ksh. 0</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Shipping <span className="ml-auto font-bold">Ksh. 0</span></li>
                        <li className="flex flex-wrap gap-4 text-sm">Tax <span className="ml-auto font-bold">Ksh. 0</span></li>
                        <li className="flex flex-wrap gap-4 text-sm font-bold">Total <span className="ml-auto">{`Ksh. ${totalPrice}`}</span></li>
                    </ul>

                    <div className="mt-8 space-y-2">
                        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-blue-600 hover:bg-blue-700 text-white rounded-md">Checkout</button>
                        <button type="button" className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide bg-transparent text-gray-800 border border-gray-300 rounded-md">Continue Shopping  </button>
                    </div>
                </div>
            </div>
            <div>
                <h3 className="my-5 font-semibold">Terms and Conditions</h3>
                <ul>
                    <li className="my-2"><strong>1. Availability</strong>: Products are subject to availability, and we cannot guarantee that all items will be in stock at the time of your order. We reserve the right to limit the quantity of any item sold and to discontinue any product at any time.</li>
                    <li className="my-2"><strong>2. Pricing</strong>: Prices for products are subject to change without notice. We are not responsible for typographical errors in pricing or product information. In the event of a pricing error, we reserve the right to cancel any orders placed for the incorrect price.</li>
                    <li className="my-2"><strong>3. Order Acceptance</strong>: Your receipt of an order confirmation does not signify our acceptance of your order. We reserve the right to accept or decline your order for any reason, including but not limited to the unavailability of the product, errors in pricing, or issues identified by our fraud prevention team.</li>
                    <li className="my-2"><strong>4. Payment Methods</strong>: We accept various payment methods as indicated on our website. By providing a payment method, you represent and warrant that you are authorized to use the designated payment method and that you authorize us to charge your payment method for the total amount of your purchase.</li>
                </ul>
                <p className="my-4 font-semibold">By purchasing from our website, you acknowledge that you have read, understood, and agree to be bound by this Product Policy and Agreement. Thank you for shopping with us!</p>

            </div>
        </div>
    );
}

export default Cart;