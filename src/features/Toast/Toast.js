import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectSuccess, selectError } from '../Cart/addToCartSlice';

function Toast() {
    let success = useSelector(selectSuccess);
    let error = useSelector(selectError);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (success || error) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 1500); // Adjust the duration as needed (3000ms = 3 seconds)

            return () => {
                clearTimeout(timer)
            };
        }
       
    }, [success, error]);

    return (
        <>
            {isVisible && (
                <div className={`flex font-[sans-serif] space-y-6 mx-auto w-auto mt-4 ${success ? 'bg-green-500' : 'bg-red-500'} text-white font-semibold tracking-wide flex items-center max-w-sm p-4 rounded-md shadow-md ${success ? 'shadow-green-200' : 'shadow-red-200'}`} role="alert">
                    <span className="flex flex-inline text-sm ">{success ? 'Successfully Added' : 'Something went wrong'}</span>
                </div>
            )}
        </>
    );
}

export default Toast;
