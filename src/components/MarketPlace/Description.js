import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner';
import { IoIosArrowBack } from 'react-icons/io';


// import ImageSlider from '../ImageSlider';


function Description({ product }) {
    const { title } = useParams();

    const [loading, setLoading] = useState(true);
    // const [imgIndex, setImgIndex] = useState(0);


    useEffect(() => {
        if (product !== undefined) {
            setLoading(false);
        }
    }, [product]);

    return (
        <div className="flex items-center justify-center min-h-screen p-4 bg-gray-200">
            {loading ? (
                <Triangle
                    visible
                    height="200"
                    width="200"
                    color="#703BF7"
                    ariaLabel="triangle-loading"
                    wrapperStyle={{ fontSize: '150px' }}
                    wrapperClass="w-full flex justify-center items-center"
                />
            ) : (
                <div className="relative flex lg:flex-row flex-col bg-white dark:bg-grayshade-400 border border-grayshade-300 rounded-xl p-4 lg:p-10 max-w-4xl">
                    <Link
                        className="absolute text-xs lg:text-base flex items-center dark:text-grayshade-50 text-grayshade-300 bg-zinc-200 dark:bg-grayshade-500 border border-grayshade-50 dark:border-grayshade-300 px-4 py-2 top-[1%] right-[2%] rounded-full"
                        to="/marketplace"
                    >
                        <IoIosArrowBack className="text-grayshade-400 dark:text-white mr-2" />{' '}
                        Back
                    </Link>
                    
                    <div className='flex flex-row lg:flex-col justify-around rounded-2xl'>
                        <img className='lg:w-4/6 max-sm:w-full rounded-xl object-cover' src={product.image} alt={product.title}/>
                    </div>

                    <div className="lg:p-8 flex flex-col justify-center">
                        <p className="text-4xl max-sm:text-2xl font-semibold">{product.title}</p>
                        <div>
                            <h3 className="relative text-xs lg:text-base inline-flex items-center dark:text-grayshade-50 text-grayshade-300 bg-zinc-200 dark:bg-grayshade-500 border border-grayshade-50 dark:border-grayshade-300 px-2 py-1 my-4 top-[1%] right-[2%] rounded-full">
                                {product.category}
                            </h3>
                        </div>
                        <p className="text-xl max-sm:text-base font-small text-grayshade-50 my-10">
                            {product.description}
                        </p>
                        <div className="flex justify-between items-center">
                            <div>
                                <p className="text-grayshade-100 dark:text-grayshade-50 text-lg">Price</p>
                                <p className="font-bold text-grayshade-300 dark:text-black                                 text-2xl">
                                    $ {product.price}
                                </p>
                            </div>
                            {/* <AddToCart
                                cartData={{
                                    id: product.id,
                                    title: product.title,
                                    price: product.price,
                                }}
                            /> */}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Description;

