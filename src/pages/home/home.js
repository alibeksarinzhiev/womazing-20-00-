import React, {useState} from 'react';
import homeImg1 from "../../img/dmitriy-7DD6tfTKqS4-unsplash 1.png"
import homeImg2 from "../../img/ionut-comanici-RDcEWH5hSDE-unsplash 1.png"
import homeImg3 from "../../img/allef-vinicius-YG97wpX0OEg-unsplash 1.png"
import homeProduct1 from "../../img/brooke-cagle-h3vR1F8-caI-unsplash 1.png"
import homeProduct2 from "../../img/christopher-campbell-va0YmkIFtPA-unsplash 1.png"
import homeProduct3 from "../../img/ben-eaton-L_kaTYIuu1o-unsplash 1.png"
import homePrice1 from "../../img/$229.png"
import homeQuaIcon1 from "../../img/quality 1.png"
import homeQuaIcon2 from "../../img/mdi-light_cog.png"
import homeQuaIcon3 from "../../img/hand 1.png"
import homeWmImg from "../../img/adam-winger-fI-TKWjKYls-unsplash 1.png"

const Home = () => {



    return (
        <div className='homePage'>
        <section className='home'>
            <div className="container">
                <div className="home__line1">

                </div>
                <div className="home__box">
                    <div className="home__logo">
                        <h1 className='home__logo-h1'>Новые поступления <br/>
                            в этом сезоне</h1>
                        <p className='home__logo-pishka'>Утонченные сочетания и бархатные <br/>
                            оттенки - вот то, что вы искали в этом <br/>
                            сезоне. Время исследовать.</p>
                        <div className="home__logo-but">
                                <span className='home__logo-span'><svg width="67" height="68" viewBox="0 0 67 68" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="67" height="67" transform="translate(0 0.5)" fill="#6E9C9F" fill-opacity="0.1"/>
<path d="M33 20V48M33 48L26 40.8108M33 48L40 40.8108" stroke="#6E9C9F"/>
</svg>
</span>
                            <a className='home__logo-btnA' href="../../shop"><button className='home__logo-btn'>Открыть магазин</button></a>
                        </div>
                        <div className="home__logo-rects">
                            <span className='home__logo-rect'><svg width="30" height="4" viewBox="0 0 30 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="4" fill="#D1D1D1"/>
</svg>
</span>
                            <span className='home__logo-rect'><svg width="30" height="4" viewBox="0 0 30 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="4" fill="black"/>
</svg>
</span>
                            <span className='home__logo-rect'><svg width="30" height="4" viewBox="0 0 30 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="4" fill="#D1D1D1"/>
</svg>

</span>
                        </div>
                    </div>
                    <div className="home__imgs">
                        <img className='home__img1' src={homeImg1} alt=""/>
                        <img className='home__img2' src={homeImg2} alt=""/>
                        <img className='home__img3' src={homeImg3} alt=""/>
                    </div>
                </div>
                <div className="home__line2">

                </div>
            </div>
        </section>
            <section className='homeProducts'>
                <div className="container">
                    <h1 className='homeProducts__title'>Новая коллекция</h1>
                    <div className="homeProducts__line1">

                    </div>
                    <div className="homeProducts__box">
                        <div className="homeProducts__box-p1">
                            <img className='homeProducts__box-img' src={homeProduct1} alt=""/>
                            <h4 className='homeProducts__box-name'>Футболка USA</h4>
                            <p className='homeProducts__box-price'><img className='homeProducts__box-span' src={homePrice1} alt=""/>$129</p>
                        </div>
                        <div className="homeProducts__box-p1">
                            <img className='homeProducts__box-img' src={homeProduct2} alt=""/>
                            <h4 className='homeProducts__box-name'>Купальник Glow</h4>
                            <p className='homeProducts__box-price'>$129</p>
                        </div>
                        <div className="homeProducts__box-p1">
                            <img className='homeProducts__box-img' src={homeProduct3} alt=""/>
                            <h4 className='homeProducts__box-name'>Свитшот Sweet Shot</h4>
                            <p className='homeProducts__box-price'>$129</p>
                        </div>
                    </div>
                    <div className="homeProducts__line2">

                    </div>
                    <div className="homeProducts__btns">
                        <a className='homeProducts__btnsA' href="../../shop"><button className='homeProducts__btn'>Открыть магазин</button></a>
                    </div>
                    <div className="homeProducts__line3">

                    </div>
                </div>
            </section>
            <section className='homeQua'>
                <div className="container">
                    <h1 className='homeQua__title'>Что для нас важно</h1>
                    <div className="homeQua__line1">

                        </div>
                        <div className="homeQua__box">
                            <div className="homeQua__box-cart">
                                <img className='homeQua__box-img' src={homeQuaIcon1} alt=""/>
                                <h3 className='homeQua__box-title'>Качество</h3>
                                <p className='homeQua__box-desc'>Наши профессионалы работают на <br/>
                                лучшем оборудовании для пошива <br/>
                                одежды беспрецедентного <br/>
                                качества</p>
                            </div>
                            <div className="homeQua__box-cart">
                                <img className='homeQua__box-img' src={homeQuaIcon2} alt=""/>
                                <h3 className='homeQua__box-title'>Скорость</h3>
                                <p className='homeQua__box-desc'>Благодаря отлаженной системе в <br/>
                                Womazing мы можем отшивать до <br/>
                                20-ти единиц продукции в наших <br/>
                                собственных цехах</p>
                            </div>
                            <div className="homeQua__box-cart">
                                <img className='homeQua__box-img' src={homeQuaIcon3} alt=""/>
                                <h3 className='homeQua__box-title'>Ответственность</h3>
                                <p className='homeQua__box-desc'>Мы заботимся о людях и планете. <br/>
                                Безотходное производство и <br/>
                                комфортные условия труда - все <br/>
                                это Womazing</p>
                            </div>
                        </div>
                    <div className="homeQua__line2">

                    </div>
                    </div>
            </section>
            <section className='homeWm'>
                <div className="container">
                    <h1 className='homeWm__title'>Команда мечты Womazing</h1>
                    <div className="homeWm__line1">

                    </div>
                    <div className="homeWm__box">
                            <div className="homeWm__box-cart1">
                                <img className='homeWm__box-img' src={homeWmImg} alt=""/>
                                <span className='homeWm__box-span1'><svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29 8L0.999999 8M0.999999 8L8.18919 0.999999M0.999999 8L8.18919 15" stroke="#858585"/>
</svg>
</span>
                                <span className='homeWm__box-span2'><svg width="29" height="16" viewBox="0 0 29 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.34742e-08 8L28 8M28 8L20.8108 15M28 8L20.8108 1" stroke="black"/>
</svg>
</span>
                                <div className="homeWm__box-swipe">
                                    <span className='homeWm__box-span3'><svg width="30" height="4" viewBox="0 0 30 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="4" fill="white" fill-opacity="0.36"/>
</svg>
</span>
                                    <span className='homeWm__box-span4'><svg width="30" height="4" viewBox="0 0 30 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="4" fill="white"/>
</svg>
</span>
                                    <span className='homeWm__box-span5'><svg width="30" height="4" viewBox="0 0 30 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="30" height="4" fill="white" fill-opacity="0.36"/>
</svg>
</span>
                                </div>
                        </div>
                        <div className="homeWm__box-cart2">
                            <h4 className='homeWm__box-h4'>Для каждой</h4>
                            <p className='homeWm__box-desc'>Каждая девушка уникальна. <br/>
                            Однако, мы схожи в <br/>
                            миллионе мелочей.
                                <br/>
                                <br/>
                                Womazing ищет эти мелочи и <br/>
                                создает прекрасные вещи, <br/>
                                которые выгодно <br/>
                                подчеркивают достоинства <br/>
                                каждой девушки.</p>
                            <a className='homeWm__box-pishka' href="../../brand">Подробнее о бренде</a>
                        </div>
                    </div>
                    <div className="homeWm__line2">
<<<<<<< HEAD

=======
                        
>>>>>>> c47111f4b197af1d2e1cc7ed48421360f16a89da
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;