import React from 'react';

const Contacts = () => {
    return (
        <div>
            <section className='contactsLogo'>
                <div className="container">
                    <div className="contactsLogo__line1">

                    </div>
                        <h2 className='contactsLogo__title'>Контакты</h2>
                    <div className="contactsLogo__box">
                        <p className='contactsLogo__pishka1'>Главная</p>
                        <span className='contactsLogo__span'>—</span>
                        <p className='contactsLogo__pishka2'>Контакты</p>
                    </div>
                    <div className="contactsLogo__line2">

                    </div>
                </div>
            </section>
            <section className='contactsCart'>
                <div className="container">
                    <div className="contactsCart__box">
                        <p className='contactsCart__pishka'>Карта с любой точкой</p>
                    </div>
                    <div className="contactsCart__line">

                    </div>
                </div>
            </section>
            <section className='contactsAddress'>
                <div className="container">
                    <div className="contactsAddress__box">
                        <div className="contactsAddress__box-cart1">
                            <p className='contactsAddress__box-nav'>Телефон</p>
                            <p className='contactsAddress__box-pishka'>+7 (495) 823-54-12</p>
                        </div>
                        <div className="contactsAddress__box-cart1">
                            <p className='contactsAddress__box-nav'>E-mail</p>
                            <p className='contactsAddress__box-pishka'>info@sitename.com</p>
                        </div>
                        <div className="contactsAddress__box-cart1">
                            <p className='contactsAddress__box-nav'>Адрес</p>
                            <p className='contactsAddress__box-pishka'>г. Москва, 3-я улица Строителей, 25</p>
                        </div>
                    </div>
                    <div className="contactsAddress__line">

                    </div>
                </div>
            </section>
            <section className='contactsHelp'>
                <div className="container">
                    <h2 className='contactsHelp__title'>Напишите нам</h2>
                    <div className="contactsHelp__line1">

                    </div>
                    <div className="contactsHelp__box">
                        <div className="contactsHelp__box-cart">
                            <p className='contactsHelp__box-pishka'>Имя</p>
                            <input className='contactsHelp__box-input' type="text"/>
                            <span className='contactsHelp__box-span'><svg width="350" height="1" viewBox="0 0 350 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="350" y2="0.5" stroke="black"/>
</svg>
</span>
                        </div>
                        <div className="contactsHelp__line0">

                        </div>
                        <div className="contactsHelp__box-cart">
                            <p className='contactsHelp__box-pishka'>E-mail</p>
                            <input className='contactsHelp__box-input' type="email"/>
                            <span className='contactsHelp__box-span'><svg width="350" height="1" viewBox="0 0 350 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="350" y2="0.5" stroke="black"/>
</svg>
</span>
                        </div>
                        <div className="contactsHelp__line0">

                        </div>
                        <div className="contactsHelp__box-cart">
                            <p className='contactsHelp__box-pishka'>Телефон</p>
                            <input className='contactsHelp__box-input' type="tel"/>
                            <span className='contactsHelp__box-span'><svg width="350" height="1" viewBox="0 0 350 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="350" y2="0.5" stroke="black"/>
</svg>
</span>
                        </div>
                        <div className="contactsHelp__line0">

                        </div>
                        <div className="contactsHelp__box-cart">
                            <p className='contactsHelp__box-pishka'>Сообщение</p>
                            <input className='contactsHelp__box-input1' type="text"/>
                            <span className='contactsHelp__box-span1'><svg width="443" height="1" viewBox="0 0 443 1" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="0.5" x2="443" y2="0.5" stroke="black"/>
</svg>
</span>
                        </div>
                        <div className="contactsHelp__line0">

                            </div>
                            <button className='contactsHelp__btn1'>Отправить</button>
                            <div className="contactsHelp__line2">

                            </div>
                            <button className='contactsHelp__btn2'>Сообщение успешно отправлено</button>
                            <div className="contactsHelp__line3">

                            </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contacts;