import React from 'react';

const Container = ({children,className}) => {
    return (
        <div className={`${className} max-w-350 mx-auto px-4 sm:px-5 md:px-8`}>
            {children}
        </div>
    );
};

export default Container;