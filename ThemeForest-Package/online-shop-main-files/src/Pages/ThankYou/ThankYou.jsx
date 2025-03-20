import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const ThankYou = () => {
    const [orderDetails, setOrderDetails] = useState(null);

    useEffect(() => {
        // Get order details from sessionStorage
        const details = JSON.parse(sessionStorage.getItem('orderDetails'));
        if (details) {
            setOrderDetails(details);
        }
    }, []);

    if (!orderDetails) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">No order details found</h1>
                    <Link to="/" className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                        Return to Home
                    </Link>
                </div>
            </div>
        );
    }

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-3xl mx-auto px-4">
                {/* Thank You Message */}
                <div className="text-center mb-8">
                    <FaCheckCircle className="text-green-500 text-5xl mx-auto mb-4" />
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Thank You for Your Order!</h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        Your order has been received and is being processed.
                    </p>
                </div>

                {/* Order Details / Invoice */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                    <div className="border-b dark:border-gray-700 pb-6 mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Order Confirmation</h2>
                        <p className="text-gray-600 dark:text-gray-400">Order ID: {orderDetails.orderId}</p>
                        <p className="text-gray-600 dark:text-gray-400">Date: {formatDate(orderDetails.orderDate)}</p>
                    </div>

                    {/* Customer Information */}
                    <div className="grid grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Customer Information</h3>
                            <p className="text-gray-600 dark:text-gray-400">{orderDetails.firstName} {orderDetails.lastName}</p>
                            <p className="text-gray-600 dark:text-gray-400">{orderDetails.email}</p>
                            <p className="text-gray-600 dark:text-gray-400">{orderDetails.phone}</p>
                        </div>
                        <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-3">Shipping Address</h3>
                            <p className="text-gray-600 dark:text-gray-400">{orderDetails.address}</p>
                            <p className="text-gray-600 dark:text-gray-400">{orderDetails.city}, {orderDetails.state} {orderDetails.zipCode}</p>
                        </div>
                    </div>

                    {/* Order Items */}
                    <div className="mb-8">
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-4">Order Items</h3>
                        <div className="space-y-4">
                            {orderDetails.items.map((item) => (
                                <div key={item._id} className="flex items-center justify-between py-2 border-b dark:border-gray-700">
                                    <div className="flex items-center space-x-4">
                                        <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                        <div>
                                            <h4 className="font-medium text-gray-800 dark:text-white">{item.name}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Quantity: {item.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="font-medium text-gray-800 dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="border-t dark:border-gray-700 pt-6">
                        <div className="space-y-3">
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Subtotal</span>
                                <span>${orderDetails.subtotal.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between text-gray-600 dark:text-gray-400">
                                <span>Shipping ({orderDetails.shippingMethod})</span>
                                <span>${orderDetails.shippingCost.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between font-semibold text-lg pt-3 border-t dark:border-gray-700">
                                <span className="text-gray-800 dark:text-white">Total</span>
                                <span className="text-blue-600 dark:text-blue-400">${orderDetails.finalTotal.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Payment Information */}
                    <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <h3 className="font-semibold text-gray-800 dark:text-white mb-2">Payment Information</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Payment Method: {orderDetails.paymentMethod === 'card' ? 'Credit/Debit Card' :
                                          orderDetails.paymentMethod === 'paypal' ? 'PayPal' : 'Cash on Delivery'}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link
                            to="/"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                        >
                            Continue Shopping
                        </Link>
                        <button
                            onClick={() => window.print()}
                            className="px-6 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-800 dark:text-white transition-colors"
                        >
                            Print Invoice
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou; 