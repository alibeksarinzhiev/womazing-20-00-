import React from 'react';
import style from '../../style/success.scss'
const Success = () => {
    return (
        <div>
            <section className='success'>
                <div className='container'>
                    <div className="success__for">
                        <h1>
                            Заказ получен
                        </h1>
                        <div className='success__category'>
                            <ul className='success__category__all'>
                                <li className='success__all__li'>Главная</li>
                                <li className='success__all__li'>—</li>
                                <li className='success__all__li'>Оформление заказа</li>
                                <li className='success__all__li'>—</li>
                                <li className='success__all__li'>Заказ получен</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="order">
                <div className="container">
                    <div className="order__all">
                        <div className="order__components">
                        <span className="order__span"><svg width="96" height="96" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M65.1219 36.8761C65.4013 37.1547 65.623 37.4858 65.7742 37.8502C65.9254 38.2147 66.0033 38.6054 66.0033 39.0001C66.0033 39.3947 65.9254 39.7854 65.7742 40.1499C65.623 40.5143 65.4013 40.8454 65.1219 41.1241L47.1219 59.124C46.8433 59.4034 46.5122 59.6251 46.1477 59.7763C45.7833 59.9276 45.3925 60.0054 44.9979 60.0054C44.6033 60.0054 44.2126 59.9276 43.8481 59.7763C43.4837 59.6251 43.1526 59.4034 42.8739 59.124L33.8739 50.1241C33.595 49.8451 33.3737 49.514 33.2228 49.1496C33.0718 48.7851 32.9941 48.3945 32.9941 48C32.9941 47.6056 33.0718 47.215 33.2228 46.8505C33.3737 46.4861 33.595 46.155 33.8739 45.876C34.1529 45.5971 34.484 45.3759 34.8484 45.2249C35.2129 45.074 35.6035 44.9963 35.9979 44.9963C36.3924 44.9963 36.783 45.074 37.1474 45.2249C37.5119 45.3759 37.843 45.5971 38.1219 45.876L44.9979 52.7581L60.8739 36.8761C61.1526 36.5967 61.4837 36.375 61.8481 36.2238C62.2126 36.0725 62.6033 35.9947 62.9979 35.9947C63.3925 35.9947 63.7833 36.0725 64.1477 36.2238C64.5122 36.375 64.8433 36.5967 65.1219 36.8761Z" fill="#6E9C9F"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M24 6H72C75.1826 6 78.2348 7.26428 80.4853 9.51472C82.7357 11.7652 84 14.8174 84 18V78C84 81.1826 82.7357 84.2348 80.4853 86.4853C78.2348 88.7357 75.1826 90 72 90H24C20.8174 90 17.7652 88.7357 15.5147 86.4853C13.2643 84.2348 12 81.1826 12 78V18C12 14.8174 13.2643 11.7652 15.5147 9.51472C17.7652 7.26428 20.8174 6 24 6ZM24 12C22.4087 12 20.8826 12.6321 19.7574 13.7574C18.6321 14.8826 18 16.4087 18 18V78C18 79.5913 18.6321 81.1174 19.7574 82.2426C20.8826 83.3679 22.4087 84 24 84H72C73.5913 84 75.1174 83.3679 76.2426 82.2426C77.3679 81.1174 78 79.5913 78 78V18C78 16.4087 77.3679 14.8826 76.2426 13.7574C75.1174 12.6321 73.5913 12 72 12H24Z" fill="#6E9C9F"/>
</svg>
</span>
                            <div className="order__success">
                                <h1 className="order__h1">Заказ успешно оформлен</h1>
                                <h2 className="order__h2">Мы свяжемся с вами в ближайшее время!</h2>
                            </div>
                        </div>
                        <button className="order__btn">Перейти на главную</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Success;