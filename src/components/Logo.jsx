import React from 'react';
// const imgUrl = new URL("../assets/reactBild.png", import.meta.url).href;
const Logo = () => {
    return (
        <div>
            <div className="logo">
               <img src="./src/assets/images.png" alt="logo react" height={50} width={50} />
                <h2>React World</h2>
            </div>
        </div>
    );
};

export default Logo;