import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { updateCart } from './addToCartSlice';

import Toast from '../Toast/Toast';

function AddToCart({ cartData }) {
    const dispatch = useDispatch();
    const [showToast, setShowToast] = useState(false);

    function handleClick() {
        dispatch(updateCart(cartData));
        setShowToast(true); // Show toast after dispatching action
    }

    return (
        <>
            {showToast && <Toast />} 
            <div className="font-[sans-serif] space-x-4 space-y-4 text-center">
                <button
                    onClick={handleClick}
                    type="button"
                    className="px-5 py-2.5 rounded-lg text-white text-sm tracking-wider font-medium border border-current outline-none bg-blue-700 hover:bg-blue-800 active:bg-blue-700"
                >
                    Add To Cart
                </button>
            </div>
        </>
    );
}

export default AddToCart;
