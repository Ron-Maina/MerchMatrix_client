import React from 'react'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

import { Triangle } from 'react-loader-spinner';



function Products({onProduct}) {

    const navigate = useNavigate()
    const {productTitle} = useParams()

 
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
            setIsReadMore(!isReadMore);
        };
        return (
            <p className="text">
                {isReadMore ? text.slice(0, 100) : text}
                <span
                    onClick={toggleReadMore}
                    className="read-or-hide"
                    style={{ color: "green" }}
                >
                    {isReadMore ? "...read more" : " show less"}
                </span>
            </p>
        );
    };

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true);
     
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    useEffect(() => {
        if (products !== undefined) {
            setLoading(false);
        }
    }, [products]);

    function handleClick (product){
        onProduct(product)
        navigate(`/description/${product.title}`)
    }

  
    return (
        <div className="font-[sans-serif] bg-gray-100">
            {loading ? (
                <Triangle
                    visible
                    height="200"
                    width="200"
                    color="#703BF7"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{ fontSize: '150px' }}
                    wrapperClass="w-full flex justify-center items-center min-h-screen p-4"
                />
            ) : (
                <div className="p-4 mx-auto lg:max-w-7xl sm:max-w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-xl:gap-4 gap-6">
                        {products?.map(product => (
                            <div className="bg-white rounded-2xl p-5 cursor-pointer hover:-translate-y-2 transition-all relative"
                            onClick={() => handleClick(product)}
                            >
                                <div className="w-5/6 h-[210px] overflow-hidden mx-auto aspect-w-16 aspect-h-8 md:mb-2 mb-4">
                                    <img
                                        src={product.image}
                                        alt="Product 1"
                                        className="h-full w-full object-contain"
                                    />
                                </div>
                                <div>
                                    <h3 className="text-lg font-extrabold text-gray-800"
                                    >
                                        {product.title}
                                    </h3>
                                    
                                    <div className="text-gray-600 text-sm mt-2">
                                        <ReadMore>
                                            {product.description}
                                        </ReadMore>   
                                    </div>
                                    <div>
                                    <h3 className="relative text-xs lg:text-base inline-flex items-center dark:text-grayshade-50 text-grayshade-300 bg-zinc-200 dark:bg-grayshade-500 border border-grayshade-50 dark:border-grayshade-300 px-2 py-1 my-4 top-[1%] right-[2%] rounded-full">
                                        {product.category}
                                    </h3>

                                    </div>
                                    <div className="text-lg text-gray-800 font-bold mt-4 bottom-5 left-5">
                                        <div>{`Ksh. ${Math.round(product.price)}`}</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            )}
        </div>

    )
}

export default Products