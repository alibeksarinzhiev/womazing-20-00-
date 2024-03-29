import React from 'react';

import cartNavProduct1 from "../../img/brooke-cagle-h3vR1F8-caI-unsplash 1.png"

const Cart = () => {
    return (
        <div>
            <section className='cart'>
                <div className="container">
                    <div className="cart__line1">

                    </div>
                    <h1 className='cart__title'>Корзина</h1>
                    <div className="cart__top">
                        <p className='cart__top-p1'>Главная</p>
                        <span className='cart__top-span'>—</span>
                        <p className='cart__top-p2'>Корзина</p>
                    </div>
                </div>
            </section>
            <section className="tovar">
                <div className="container">
                    <div className="tovar__all">
                        <div className="tovar__title">
                            <a  className="tovar__a" href="">Товар</a>
                            <ul className="tovar__ul">
                                <li className="tovar__li">
                                    <a className="tovar__ai" href="#">Цена</a>
                                </li>
                                <li className="tovar__li">
                                    <a className="tovar__ai" href="#">Количество</a>
                                </li>
                                <li className="tovar__li">
                                    <a className="tovar__ai" href="#">Всего</a>
                                </li>
                            </ul>
                        </div>
                        <h1 className="tovar__svg"><svg width="1108" height="1" viewBox="0 0 1108 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line y1="0.5" x2="1108" y2="0.5" stroke="#CCCCCC"/>
                        </svg>
                        </h1>
                    </div>
                </div>
            </section>
            <section className="usa">
                <div className="container">
                    <div className="usa__all">
                        <div className="usa__title">
                            <a  href=""><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L13 13M13 1L1 13" stroke="black"/>
                            </svg>
                            </a>
                            <img className="usa__img" src="" alt=""/>
                            <h1 className="usa__h1">Футболка USA</h1>
                        </div>
                        <div className="usa__price">
                            <h2 className="usa__ui">$129</h2>
                            <input className="usa__in" type="text"/>
                            <h3 className="usa__ui">$129</h3>
                        </div>
                    </div>
                </div>
            </section>
            <section className="kupon">
                <div className="container">
                    <div className="kupon__all">
                        <div className="kupon__title">
                            <div className="kupon__in">
                                <h1 className="kupon__in-h1">Введите купон</h1>
                                <input className="kupon__in-input" type="text"/>
                                <span className="kupon__in-span"><svg width="255" height="1" viewBox="0 0 255 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="255" y2="0.5" stroke="black"/>
</svg>
</span>
                            </div>
                            <button className="kupon__btn">
                                Применить купон
                            </button>
                        </div>
                        <button className="kupon__btn1">Обновить корзину</button>
                    </div>
                </div>
            </section>
            <section className="result">
                <div className="container">
                    <div className="result__all">
                        <div className="result__title">
                            <div className="result__icon">
                                <h1 className="result__h">Подытог:</h1>
                                <h2 className="result__h">$129</h2>
                            </div>
                            <button className="result__btns">
                                <button className='result__btn0'>Итого:</button>
                                <button className='result__btn0'>$129</button>
                            </button>
                        </div >
                        <a href="../../success"><button className="result__btn1">
                            Оформить заказ
                        </button></a>
                        </div>
                        </div>
                <div className="result__line0">

                </div>
            </section>


        </div>
    );
};

export default Cart;