import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
      <div className='home'>
        <div className='home__container'>
            <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/TheLordoftherings-Trailer/PV/1500x600_Hero-Tall._CB631634134_.jpg" alt="Amazon Banner" />

            <div className='home__row'>
                {/* Product */}
                <Product 
                                id= '55967897'
                title='The Lean Startup: How Constant Innovation Creates Radically Successful Businesses' 
                price={521}
                image='https://upload.wikimedia.org/wikipedia/en/1/11/Lean_Startup.png'
                rating={3}
                 />


                {/* Product */}
                <Product 
                                id= '74130289'
                title='HP Omen AMD Ryzen 5-5600H 16.1-inch(40.9 cm) Micro-Edge, IPS, Anti-Glare, Fhd Gaming Laptop (8Gb RAM/512 GB SSD/144 Hz/Geforce GTX 1650 Graphics/Alexa/Windows 11/Ms Office),16-C0136Ax' 
                price={78680}
                image='https://m.media-amazon.com/images/I/71999J1wmGL._AC_UY218_.jpg'
                rating={5} />
                
            </div>

            <div className='home__row'>
                {/* Product */}
                <Product 
                                id= '02445698'
                title='OnePlus Nord CE 2 5G (Gray Mirror, 8GB RAM, 128GB Storage)' 
                price={24999}
                image='https://m.media-amazon.com/images/I/619n6kxuGsL._AC_UY218_.jpg'
                rating={4} />

                {/* Product */}
                <Product
                                id= '78936521'
                 title='Apple iPhone 13 Pro Max (128GB) - Sierra Blue' 
                price={120900}
                image='https://m.media-amazon.com/images/I/61i8Vjb17SL._AC_UY218_.jpg'
                rating={4} />

                {/* Product */}
                <Product 
                                id= '45978963'
                title='Apple iPhone 13 (128GB) - Midnight' 
                price={69990}
                image='https://m.media-amazon.com/images/I/61VuVU94RnL._AC_UY218_.jpg'
                rating={4} />
            </div>

            <div className='home__row'>
                {/* Product */}
                <Product 
                id= '55698756'
                title='Samsung 138 cm (55 inches) The Frame Series 4K Ultra HD Smart QLED TV QA55LS03AAKLXL (Black)' 
                price={79990}
                image='https://m.media-amazon.com/images/I/81V+s2BBy3L._AC_UY218_.jpg'
                rating={4} />
            </div>


        </div>
            

    </div>
  )
}

export default Home;