import React from 'react';
import BrandPhoto1 from "../../img/sonnie-hiles-gG70fyu3qsg-unsplash 1.png"
import BrandPhoto2 from "../../img/gbarkz-vqKnuG8GaQc-unsplash 1.png"

const Brand = () => {
    return (
        <div>
            <section className='brand'>
                <div className="container">
                    <div className="brand__line1">

                    </div>
                    <div className="brand__logos">
                        <h2 className='brand__title'>О бренде</h2>
                        <div className="brand__nav">
                            <p className='brand__pishka1'>Главная</p>
                            <span className='brand__span'>—</span>
                            <p className='brand__pishka2'>О бренде</p>
                        </div>
                    </div>
                    <div className="brand__line2">

                    </div>
                </div>
            </section>
            <section className='BrandDesc'>
                <div className="container">
                    <div className="BrandDesc__box1">
                        <img className='BrandDesc__img1' src={BrandPhoto1} alt=""/>
                        <div className="BrandDesc__line1">

                        </div>
                        <div className="BrandDescription1">
                            <h4 className='BrandDescription1__title'>Идея и женщина</h4>
                            <p className='BrandDescription1__desc'>Womazing была основана в 2010-ом и стала одной из самых <br/>
                            успешных компаний нашей страны. Как и многие итальянские <br/>
                            фирмы, Womazing остаётся семейной компанией, хотя ни один <br/>
                            из членов семьи не является модельером.
                                <br/>
                                <br/>
                                Мы действуем по успешной формуле, прибегая к услугам <br/>
                                известных модельеров для создания своих коллекций. Этот <br/>
                                метод был описан критиком моды Колином Макдауэллом как <br/>
                                форма дизайнерского со-творчества, характерная для ряда <br/>
                                итальянских prêt-a-porter компаний. </p>
                        </div>
                    </div>
                    <div className="BrandDesc__line0">

                    </div>
                    <div className="BrandDesc__box2">
                        <div className="BrandDescription2">
                                <h4 className='BrandDescription2__title'>Магия в деталях</h4>
                                <p className='BrandDescription2__desc'>Первый магазин Womazing был открыт в маленьком городке <br/>
                                на севере страны в 2010-ом году. Первая коллекция состояла <br/>
                                из двух пальто и костюма, которые были копиями парижских <br/>
                                моделей.
                                    <br/>
                                    <br/>

                                    Несмотря на то, что по образованию основательница была <br/>
                                    адвокатом, ее семья всегда была тесно связана с шитьём <br/>
                                    (прабабушка основательницы шила одежду для женщин, а <br/>
                                    мать основала профессиональную школу кроя и шитья). <br/>
                                    Стремление производить одежду для масс несло в себе <br/>
                                    большие перспективы, особенно в то время, когда высокая <br/>
                                    мода по-прежнему доминировала, а рынка качественного <br/>
                                    prêt-a-porter попросту не существовало. </p>
                        </div>
                        <div className="BrandDesc__line2">

                        </div>
                        <img className='BrandDesc__img2' src={BrandPhoto2} alt=""/>
                    </div>
                    <div className="BrandDesc__line0">

                    </div>
                    <div className="BrandDesc__box3">
                        <button className='BrandDesc__btn'>Перейти в магазин</button>
                    </div>
                    <div className="BrandDesc__line0">

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Brand;