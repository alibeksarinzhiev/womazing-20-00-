import React from 'react';
import product1 from "../../img/brooke-cagle-h3vR1F8-caI-unsplash 1.png"
import product2 from "../../img/christopher-campbell-va0YmkIFtPA-unsplash 1.png"
import product3 from "../../img/ben-eaton-L_kaTYIuu1o-unsplash 1.png"
import price from "../../img/$229.png"

const Shop = () => {
    return (
        <div>
            <section className='magazine'>
            <div className="container">
                    <div className="magazine__line1">

                    </div>
                        <h2 className='magazine__title'>Магазин</h2>
                    <div className="magazine__box">
                        <p className='magazine__pishka1'>Главная</p>
                        <span className='magazine__box-span'>
                            <svg width="14" height="3" viewBox="0 0 14 3" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.0880001 2.039V0.679H13.399V2.039H0.0880001Z" fill="black"/>
</svg>
</span>
                        <p className='magazine__pishka2'>Магазин</p>
                    </div>
                    <div className="magazine__line2">

                    </div>
            </div>
            </section>
            <section className='ShopNav'>
                <div className="container">
                    <div className="ShopNav__box">
                        <button className='ShopNav__btn'>Все</button>
                        <button className='ShopNav__btn'>Пальто</button>
                        <button className='ShopNav__btn'>Свитшоты</button>
                        <button className='ShopNav__btn'>Кардиганы</button>
                        <button className='ShopNav__btn'>Толстовки</button>
                    </div>
                    <div className="ShopNav__line1">

                    </div>
                    <p className='ShopNav__pishka'>Показано: 9 из 12 товаров</p>
                    <div className="ShopNav__line2">

                    </div>
                </div>
            </section>
            <section className='Shop'>
                <div className="container">
                    <div className="Shop__products">
                        <div className="Shop__product">
                            <img className='Shop__product-img' src={product1} alt=""/>
                            <h5 className='Shop__product-name'>Футболка USA</h5>
                            <p className='Shop__product-price'><span className='Shop__product-span'><img src={price}
                                                                                                         alt=""/></span>$129</p>
                        </div>
                        <div className="Shop__product">
                            <img className='Shop__product-img' src={product2} alt=""/>
                            <h5 className='Shop__product-name'>Купальник Glow</h5>
                            <p className='Shop__product-price'>$129</p>
                        </div>
                        <div className="Shop__product">
                            <img className='Shop__product-img' src={product3} alt=""/>
                            <h5 className='Shop__product-name'>Свитшот Sweet Shot</h5>
                            <p className='Shop__product-price'>$129</p>
                        </div>
                    </div>
                    <div className="Shop__line">

                    </div>
                    <div className="Shop__products">
                        <div className="Shop__product">
                            <img className='Shop__product-img' src={product1} alt=""/>
                            <h5 className='Shop__product-name'>Футболка USA</h5>
                            <p className='Shop__product-price'>$129</p>
                        </div>
                        <div className="Shop__product">
                            <img className='Shop__product-img' src={product2} alt=""/>
                            <h5 className='Shop__product-name'>Купальник Glow</h5>
                            <p className='Shop__product-price'>$129</p>
                        </div>
                        <div className="Shop__product">
                            <img className='Shop__product-img' src={product3} alt=""/>
                            <h5 className='Shop__product-name'>Свитшот Sweet Shot</h5>
                            <p className='Shop__product-price'>$129</p>
                        </div>
                    </div>
                    <div className="Shop__line">
                        
                    </div>
                    <div className="Shop__products">
                        <div className="Shop__product">
                            <img className='Shop__product-img' src={product1} alt=""/>
                            <h5 className='Shop__product-name'>Футболка USA</h5>
                            <p className='Shop__product-price'>$129</p>
                        </div>
                        <div className="Shop__product">
                            <img className='Shop__product-img' src={product2} alt=""/>
                            <h5 className='Shop__product-name'>Купальник Glow</h5>
                            <p className='Shop__product-price'>$129</p>
                        </div>
                        <div className="Shop__product">
                            <img className='Shop__product-img' src={product3} alt=""/>
                            <h5 className='Shop__product-name'>Свитшот Sweet Shot</h5>
                            <p className='Shop__product-price'>$129</p>
                        </div>
                    </div>
                    <div className="Shop__line">

                    </div>
                    <p className='Shop__pishka-bottom'>Показано: 9 из 12 товаров</p>
                    <div className="Shop__line">

                    </div>
                    <div className="Shop__page">
                        <button className='Shop__page-btn'>1</button>
                        <button className='Shop__page-btn'>2</button>
                        <span className='Shop__page-span'><svg width="21" height="11" viewBox="0 0 21 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M-2.18557e-07 5.5L20 5.5M20 5.5L14.8649 10.5M20 5.5L14.8649 0.499999" stroke="black"/>
</svg>
</span>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="shop__line0">

                </div>
            </div>
        </div>
    );
};

export default Shop;