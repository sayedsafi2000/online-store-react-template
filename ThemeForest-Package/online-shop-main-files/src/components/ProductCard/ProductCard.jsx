import { IoCartOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const ProductCard = ({ product, handleClick }) => {
    const navigate = useNavigate();

    const handleDetail = (id) => {
        navigate(`/product/${id}`);
    }

    return (
        <div className="card border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 overflow-hidden bg-white">
            <figure className="relative h-36 overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
                {product.price_discount && (
                    <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                        -{product.price_discount}%
                    </div>
                )}
            </figure>
            <div className="card-body p-3">
                <div className="flex justify-between items-start">
                    <a onClick={() => handleDetail(product._id)} 
                       className="card-title text-[13px] font-medium hover:text-blue-600 cursor-pointer line-clamp-2 flex-1">
                        {product.name}
                    </a>
                    <span className="text-xs text-gray-500">
                        {product.quantity}
                    </span>
                </div>
                <div className="rating flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, index) => (
                        <input
                            key={index}
                            type="radio"
                            name={`rating-${product._id}`}
                            className="mask mask-star-2 bg-orange-400"
                            defaultChecked={index === Math.floor(product.rating) - 1}
                            disabled
                        />
                    ))}
                    <span className="text-xs font-semibold text-gray-600">
                        ({product.rating})
                    </span>
                </div>
                <div className="card-actions justify-between items-center mt-2">
                    <div>
                        <h4 className="font-bold text-[15px] text-blue-600">
                            R {product.price.toFixed(2)}
                        </h4>
                    </div>
                    <button 
                        onClick={() => handleClick(product)} 
                        className="bg-white hover:bg-blue-50 border border-gray-200 p-1.5 rounded-full transition-colors duration-300"
                    >
                        <IoCartOutline className="text-lg text-gray-600 hover:text-blue-600" />
                    </button>
                </div>
            </div>
        </div>
    );
};

ProductCard.propTypes = {
    product: PropTypes.shape({
        _id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        quantity: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        price_discount: PropTypes.number
    }).isRequired,
    handleClick: PropTypes.func.isRequired
};

export default ProductCard; 