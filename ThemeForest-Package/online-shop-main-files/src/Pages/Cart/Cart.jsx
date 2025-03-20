import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cart, setCart, handleDec, handleInc, total, totalQuantity } = useContext(AuthContext);
    const [shippingMethod, setShippingMethod] = useState("standard");
    const navigate = useNavigate();

    // Shipping cost options
    const shippingCosts = {
        standard: 5.00,
        express: 15.00,
        nextDay: 25.00
    };

    const handleRemove = (id) => {
        const arr = cart.filter((item) => item._id !== id);
        setCart(arr);
    };

    // Calculate final total with shipping
    const finalTotal = total + shippingCosts[shippingMethod];

    const handleCheckout = () => {
        // Store shipping method and costs in sessionStorage
        sessionStorage.setItem('shippingMethod', shippingMethod);
        sessionStorage.setItem('shippingCost', shippingCosts[shippingMethod].toString());
        sessionStorage.setItem('subtotal', total.toString());
        sessionStorage.setItem('finalTotal', finalTotal.toString());
        
        navigate('/checkout');
    };

    return (
        <div>
            <section className="relative z-10 after:contents-[''] after:absolute after:z-0 after:h-full xl:after:w-1/3 after:top-0 after:right-0 after:bg-gray-50 dark:after:bg-gray-800 dark:bg-gray-800">
                <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto relative z-10">
                    <div className="grid grid-cols-12">
                        <div className="col-span-12 xl:col-span-8 lg:pr-8 pt-14 pb-8 lg:py-24 w-full max-xl:max-w-3xl max-xl:mx-auto">
                            <div className="flex items-center justify-between pb-8 border-b border-gray-300 dark:border-gray-700">
                                <h2 className="font-manrope font-bold text-3xl leading-10 text-black dark:text-white">Shopping Cart</h2>
                                <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600 dark:text-gray-400">{totalQuantity} Items</h2>
                            </div>
                            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200 dark:border-gray-700">
                                <div className="col-span-12 md:col-span-7">
                                    <p className="font-normal text-lg leading-8 text-gray-400">Product Details</p>
                                </div>
                                <div className="col-span-12 md:col-span-5">
                                    <div className="grid grid-cols-5">
                                        <div className="col-span-3">
                                            <p className="font-normal text-lg leading-8 text-gray-400 text-center">Quantity</p>
                                        </div>
                                        <div className="col-span-2">
                                            <p className="font-normal text-lg leading-8 text-gray-400 text-center">Total</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {cart?.map((item, i) => (
                                <div key={i} className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6 border-b border-gray-200 dark:border-gray-700 group">
                                    <div className="w-full md:max-w-[126px]">
                                        <img src={item?.image} alt={item?.name} className="mx-auto rounded-xl" />
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                                        <div className="md:col-span-2">
                                            <div className="flex flex-col max-[500px]:items-center gap-3">
                                                <h6 className="font-semibold text-base leading-7 text-black dark:text-white">{item?.name}</h6>
                                                <h6 className="font-normal text-base leading-7 text-gray-500 dark:text-gray-400">{item?.category}</h6>
                                                <h6 className="font-medium text-base leading-7 text-gray-600 dark:text-gray-300">${item?.price}</h6>
                                            </div>
                                        </div>
                                        <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                                            <div className="flex items-center h-full">
                                                <button onClick={() => handleInc(item._id)} className="group rounded-l-xl px-5 py-[18px] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-gray-300">
                                                    +
                                                </button>
                                                <input type="text" className="border-y border-gray-200 dark:border-gray-700 outline-none text-gray-900 dark:text-white font-semibold text-lg w-full max-w-[73px] min-w-[60px] py-[15px] text-center bg-transparent" value={item.quantity} readOnly />
                                                <button onClick={() => handleDec(item._id)} className="group rounded-r-xl px-5 py-[18px] border border-gray-200 dark:border-gray-700 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-600 hover:shadow-gray-300">
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-col items-center max-[500px]:justify-between md:justify-between max-md:mt-3 h-full">
                                            <p className="font-bold text-lg leading-8 text-gray-600 dark:text-gray-300 text-center">${(item.price * item.quantity).toFixed(2)}</p>
                                            <button onClick={() => handleRemove(item._id)} className="text-red-600 dark:text-red-400 flex items-center gap-1">
                                                <RiDeleteBin6Line className="text-xl" /> Remove
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-span-12 xl:col-span-4 bg-gray-50 dark:bg-gray-800 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-24">
                            <h2 className="font-manrope font-bold text-3xl leading-10 text-black dark:text-white pb-8 border-b border-gray-300 dark:border-gray-700">
                                Order Summary
                            </h2>
                            <div className="mt-8">
                                <div className="flex items-center justify-between pb-6">
                                    <p className="font-normal text-lg leading-8 text-black dark:text-white">{totalQuantity} Items</p>
                                    <p className="font-medium text-lg leading-8 text-black dark:text-white">${total.toFixed(2)}</p>
                                </div>
                                
                                {/* Shipping Method Selection */}
                                <div className="mb-6">
                                    <label className="block text-gray-600 dark:text-gray-400 text-sm font-medium mb-2">
                                        Shipping Method
                                    </label>
                                    <select
                                        value={shippingMethod}
                                        onChange={(e) => setShippingMethod(e.target.value)}
                                        className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                                    >
                                        <option value="standard">Standard Delivery - $5.00 (5-7 days)</option>
                                        <option value="express">Express Delivery - $15.00 (2-3 days)</option>
                                        <option value="nextDay">Next Day Delivery - $25.00 (24 hours)</option>
                                    </select>
                                </div>

                                {/* Order Summary */}
                                <div className="space-y-4 border-t border-gray-200 dark:border-gray-700 py-4">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                                        <span className="font-medium text-gray-900 dark:text-white">${total.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                                        <span className="font-medium text-gray-900 dark:text-white">${shippingCosts[shippingMethod].toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                                        <span className="text-lg font-semibold text-gray-900 dark:text-white">Total</span>
                                        <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">${finalTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button
                                    onClick={handleCheckout}
                                    disabled={cart.length === 0}
                                    className="w-full text-center bg-blue-600 dark:bg-blue-500 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-blue-700 dark:hover:bg-blue-600 disabled:bg-gray-400 dark:disabled:bg-gray-600 disabled:cursor-not-allowed mt-6"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Cart;