import React from 'react';
import style from '../../style/footer.scss'
import '../../img/visa-mastercard 1.png'
const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__row">
                    <ul className="footer__list">
                        <li className="footer__list-title"><a href='../../'><svg width="139" height="25" viewBox="0 0 139 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4_650)">
                                <path d="M21.5169 22.6493L21.1587 20.9776C20.4206 17.5332 19.0682 14.2964 17.1386 11.3529V8.64058C18.0275 7.97178 18.6035 6.9084 18.6035 5.71289V4.24805C18.6035 3.84355 18.2756 3.51562 17.8711 3.51562H17.1386V0.732422C17.1386 0.32793 16.8107 0 16.4062 0C16.0017 0 15.6738 0.32793 15.6738 0.732422V3.52339C14.3584 3.6001 13.2059 4.29209 12.5 5.31528C11.7941 4.29209 10.6416 3.6001 9.32614 3.52339V0.732422C9.32614 0.32793 8.99821 0 8.59372 0C8.18922 0 7.86129 0.32793 7.86129 0.732422V3.51562H7.12887C6.72438 3.51562 6.39645 3.84355 6.39645 4.24805V5.71289C6.39645 6.9084 6.97243 7.97178 7.86129 8.64058V11.3529C5.9317 14.2964 4.57931 17.5332 3.84123 20.9776L3.48302 22.6493C3.40646 23.0066 3.60504 23.3658 3.9485 23.4909C6.69738 24.4923 9.57448 25 12.5 25C15.4255 25 18.3026 24.4923 21.0514 23.4909C21.3949 23.3658 21.5935 23.0067 21.5169 22.6493ZM15.9179 4.98047H17.1386V5.71289C17.1386 6.92446 16.1529 7.91016 14.9414 7.91016H13.2324V7.66602C13.2324 6.1852 14.4371 4.98047 15.9179 4.98047ZM7.86129 4.98047H9.082C10.5628 4.98047 11.7675 6.1852 11.7675 7.66602V7.91016H10.0586C8.84699 7.91016 7.86129 6.92446 7.86129 5.71289V4.98047ZM10.0586 9.375H14.9414C15.1922 9.375 15.4371 9.34956 15.6738 9.30132V10.8398H9.32614V9.30132C9.56286 9.34956 9.80778 9.375 10.0586 9.375ZM12.5 23.5352C9.95846 23.5352 7.45558 23.128 5.0507 22.3244L5.2735 21.2846C5.96115 18.0757 7.21051 15.0566 8.98898 12.3047L16.0109 12.3047C17.7894 15.0566 19.0387 18.0757 19.7264 21.2845L19.9492 22.3244C17.5444 23.128 15.0415 23.5352 12.5 23.5352Z" fill="black"/>
                            </g>
                            <path d="M41.52 6.704H42.88L44.384 10.656L45.904 6.704H47.264L45.296 11.648L47.248 16.336L51.088 6.64H52.656L47.904 18H46.656L44.4 12.64L42.128 18H40.88L36.144 6.64H37.696L41.552 16.336L43.488 11.648L41.52 6.704ZM59.9274 18.08C59.1274 18.08 58.402 17.92 57.7514 17.6C57.1007 17.28 56.5354 16.848 56.0554 16.304C55.586 15.7493 55.2234 15.1307 54.9674 14.448C54.7114 13.7547 54.5834 13.0453 54.5834 12.32C54.5834 11.5627 54.7167 10.8427 54.9834 10.16C55.2607 9.46667 55.6394 8.85333 56.1194 8.32C56.61 7.776 57.1807 7.34933 57.8314 7.04C58.482 6.72 59.1914 6.56 59.9594 6.56C60.7594 6.56 61.4847 6.72533 62.1354 7.056C62.786 7.38667 63.346 7.82933 63.8154 8.384C64.2847 8.93867 64.6474 9.55733 64.9034 10.24C65.1594 10.9227 65.2874 11.6213 65.2874 12.336C65.2874 13.0933 65.154 13.8187 64.8874 14.512C64.6207 15.1947 64.242 15.808 63.7514 16.352C63.2714 16.8853 62.706 17.3067 62.0554 17.616C61.4047 17.9253 60.6954 18.08 59.9274 18.08ZM56.0394 12.32C56.0394 12.896 56.13 13.456 56.3114 14C56.5034 14.5333 56.77 15.008 57.1114 15.424C57.4527 15.84 57.8634 16.1707 58.3434 16.416C58.8234 16.6613 59.3567 16.784 59.9434 16.784C60.5514 16.784 61.0954 16.656 61.5754 16.4C62.0554 16.144 62.4607 15.8027 62.7914 15.376C63.1327 14.9493 63.3887 14.4693 63.5594 13.936C63.7407 13.4027 63.8314 12.864 63.8314 12.32C63.8314 11.744 63.7354 11.1893 63.5434 10.656C63.362 10.1227 63.0954 9.648 62.7434 9.232C62.402 8.80533 61.9914 8.47467 61.5114 8.24C61.042 7.99467 60.5194 7.872 59.9434 7.872C59.3354 7.872 58.7914 8 58.3114 8.256C57.8314 8.50133 57.4207 8.83733 57.0794 9.264C56.7487 9.69067 56.4927 10.1707 56.3114 10.704C56.13 11.2267 56.0394 11.7653 56.0394 12.32ZM78.7121 18V9.328L74.9681 16H74.0881L70.3281 9.328V18H68.8881V6.64H70.4081L74.5201 14.016L78.6481 6.64H80.1521V18H78.7121ZM87.9285 6.64H89.1445L93.7845 18H92.2485L90.9045 14.672H86.1365L84.8085 18H83.2725L87.9285 6.64ZM90.5845 13.552L88.5365 8.304L86.4245 13.552H90.5845ZM96.0526 16.88L103.381 7.92H96.1966V6.64H105.061V7.76L97.8606 16.72H105.061V18H96.0526V16.88ZM108.594 18V6.64H110.034V18H108.594ZM115.791 9.296V18H114.351V6.64H115.567L122.511 15.52V6.656H123.951V18H122.639L115.791 9.296ZM132.823 18.08C132.076 18.08 131.378 17.92 130.727 17.6C130.087 17.2693 129.527 16.832 129.047 16.288C128.567 15.7333 128.194 15.1147 127.927 14.432C127.66 13.7387 127.527 13.024 127.527 12.288C127.527 11.52 127.66 10.7947 127.927 10.112C128.194 9.41867 128.562 8.80533 129.031 8.272C129.511 7.73867 130.071 7.32267 130.711 7.024C131.362 6.71467 132.066 6.56 132.823 6.56C133.922 6.56 134.828 6.78933 135.543 7.248C136.258 7.70667 136.796 8.304 137.159 9.04L136.055 9.808C135.724 9.14667 135.271 8.656 134.695 8.336C134.119 8.016 133.484 7.856 132.791 7.856C132.215 7.856 131.692 7.97867 131.223 8.224C130.754 8.46933 130.348 8.80533 130.007 9.232C129.676 9.648 129.42 10.1227 129.239 10.656C129.068 11.1893 128.983 11.744 128.983 12.32C128.983 13.1307 129.154 13.8773 129.495 14.56C129.847 15.232 130.322 15.7707 130.919 16.176C131.516 16.5813 132.188 16.784 132.935 16.784C133.543 16.784 134.124 16.64 134.679 16.352C135.244 16.0533 135.778 15.6 136.279 14.992V13.424H133.831V12.336H137.495V18H136.279V16.464C135.298 17.5413 134.146 18.08 132.823 18.08Z" fill="black"/>
                            <defs>
                                <clipPath id="clip0_4_650">
                                    <rect width="25" height="25" fill="white"/>
                                </clipPath>
                            </defs>
                        </svg>
                        </a></li>
                        <li className="footer__item">© Все права защищены <br/>Политика конфиденциальности <br/>

                            Публичная оферта</li>
                    </ul>

                    <ul className="footer__list">
                        <li>
                            <ul className="footer__list1" >
                                <li><a className='footer__list1-a' href="../../">Главная</a></li>
                                <li><a className='footer__list1-a' href="../../shop">Магазин</a></li>
                                <li><a className='footer__list1-a' href="../../brand">О бренде</a></li>
                                <li><a className='footer__list1-a' href="../../contacts">Контакты</a></li>
                            </ul>
                        </li>
                        <li><a className='footer__list1-a' href="../../shop">Пальто</a></li>
                        <li><a className='footer__list1-a' href="../../shop">Свитшоты</a></li>
                        <li><a className='footer__list1-a' href="../../shop">Кардиганы</a></li>
                        <li><a className='footer__list1-a' href="../../shop">Толстовки</a></li>
                        <li> </li>
                    </ul>

                    <ul className="footer__list">
                        <li className="footer__list-title">+7 (495) 823-54-12</li>
                        <li className="footer__item2">hello@womazing.com</li>
                        <li className="footer__item1"><h1><svg width="22" height="23" viewBox="0 0 22 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_4_672)">
                                <path d="M15.6094 0.5H6.39066C2.86683 0.5 0 3.36683 0 6.89066V16.1093C0 19.6332 2.86683 22.5 6.39066 22.5H15.6093C19.1332 22.5 22 19.6332 22 16.1094V6.89066C22 3.36683 19.1332 0.5 15.6094 0.5ZM20.2812 16.1093C20.2812 18.6854 18.1854 20.7812 15.6094 20.7812H6.39066C3.81455 20.7812 1.71875 18.6854 1.71875 16.1094V6.89066C1.71875 4.31455 3.81455 2.21875 6.39066 2.21875H15.6093C18.1854 2.21875 20.2812 4.31455 20.2812 6.89066V16.1093Z" fill="black"/>
                                <path d="M11 5.57031C7.73034 5.57031 5.07031 8.23034 5.07031 11.5C5.07031 14.7697 7.73034 17.4297 11 17.4297C14.2697 17.4297 16.9297 14.7697 16.9297 11.5C16.9297 8.23034 14.2697 5.57031 11 5.57031ZM11 15.7109C8.6781 15.7109 6.78906 13.8219 6.78906 11.5C6.78906 9.1781 8.6781 7.28906 11 7.28906C13.3219 7.28906 15.2109 9.1781 15.2109 11.5C15.2109 13.8219 13.3219 15.7109 11 15.7109Z" fill="black"/>
                                <path d="M17.0156 6.34375C17.4902 6.34375 17.875 5.95899 17.875 5.48438C17.875 5.00976 17.4902 4.625 17.0156 4.625C16.541 4.625 16.1562 5.00976 16.1562 5.48438C16.1562 5.95899 16.541 6.34375 17.0156 6.34375Z" fill="black"/>
                            </g>
                            <defs>
                                <clipPath id="clip0_4_672">
                                    <rect width="22" height="22" fill="white" transform="translate(0 0.5)"/>
                                </clipPath>
                            </defs>
                        </svg>
                        </h1>
                            <h2><svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_4_682)">
                                    <path d="M18.5391 0H2.46094C1.1039 0 0 1.1039 0 2.46094V18.5391C0 19.8961 1.1039 21 2.46094 21H18.5391C19.8961 21 21 19.8961 21 18.5391V2.46094C21 1.1039 19.8961 0 18.5391 0ZM19.3594 18.5391C19.3594 18.9914 18.9914 19.3594 18.5391 19.3594H13.6992V13.3711H16.3253L16.6314 10.8281H13.6992V8.08008C13.6992 7.37865 14.2283 6.84961 14.9297 6.84961H16.7754V4.4707C16.2896 4.40213 15.3525 4.30664 14.9297 4.30664C13.973 4.30664 13.0141 4.71023 12.2989 5.41374C11.5621 6.13857 11.1562 7.08801 11.1562 8.08729V10.8281H8.49023V13.3711H11.1562V19.3594H2.46094C2.00864 19.3594 1.64062 18.9914 1.64062 18.5391V2.46094C1.64062 2.00864 2.00864 1.64062 2.46094 1.64062H18.5391C18.9914 1.64062 19.3594 2.00864 19.3594 2.46094V18.5391Z" fill="black"/>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4_682">
                                        <rect width="21" height="21" fill="white"/>
                                    </clipPath>
                                </defs>
                            </svg>
                            </h2>
                            <h3><svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.2712 5.16525L20.2598 5.12109C21.2343 4.53688 22.0211 3.5738 22.3711 2.4707C21.4584 3.01367 20.3904 3.42561 19.3164 3.63867C18.4552 2.7211 17.3061 2.15625 15.9473 2.15625C13.3429 2.15625 11.1855 4.26475 11.1855 6.87305C11.1855 7.24419 11.238 7.60752 11.3203 7.95117V7.99609C7.43875 7.77436 3.92429 5.80031 1.61719 2.96484C1.21231 3.66248 0.988281 4.65939 0.988281 5.52539C0.988281 6.87305 1.78852 8.67805 3.05469 9.52344V9.61328C2.29865 9.58278 1.52429 9.06195 0.898438 8.71484C0.898438 8.73546 0.92584 8.76026 0.92584 8.78088C0.92584 11.0696 2.6034 13.0436 4.76172 13.4766C4.38559 13.5761 3.85582 13.6562 3.45898 13.6562C3.15361 13.6562 2.84877 13.5765 2.56055 13.5215C3.16102 15.3978 4.89648 16.6211 6.96289 16.6211V16.666C5.35446 17.913 3.31577 18.7773 1.12305 18.7773C0.742154 18.7773 0.269531 18.7324 0 18.6875C2.08622 20.0277 4.56631 20.8438 7.23242 20.8438C15.9102 20.8438 20.6641 13.7012 20.6641 7.45703V6.82812C21.5871 6.16144 22.3686 5.26098 23 4.3125C23 4.3125 21.3439 5.09724 20.2712 5.16525ZM18.8672 7.45703C18.8672 8.80523 18.6031 10.221 18.1035 11.5512C17.5785 12.9492 16.8227 14.2107 15.8574 15.3005C14.3434 17.0096 11.6181 19.0469 7.23242 19.0469C7.10354 19.0469 6.97488 19.0446 6.84623 19.0402C7.26966 18.7945 7.67661 18.5211 8.06384 18.2209L8.75977 17.6814V16.8008V16.6211V14.8242L8.0195 14.816C7.21005 14.807 6.55859 14.1483 6.55859 13.3388V11.8696L5.58689 11.6502C5.1569 11.5531 4.85156 11.1711 4.85156 10.7303V9.61328V9.47852L4.8291 8.5626L4.02999 8.02907C3.6849 7.73874 3.37215 7.32406 3.14934 6.87529C5.50724 8.59481 8.30758 9.62379 11.2178 9.79005L13.1172 9.89854V7.99609V7.95117V7.73892L13.0677 7.5325C13.0111 7.29626 12.9824 7.07439 12.9824 6.87305C12.9824 6.09931 13.2911 5.3687 13.8517 4.81576C14.4156 4.25949 15.1598 3.95312 15.9473 3.95312C16.7434 3.95312 17.4362 4.26106 18.0063 4.86841L18.4647 5.35684L18.5202 5.57112L18.5316 5.61528L18.8672 6.91262V7.45703Z" fill="black"/>
                            </svg>
                            </h3>
                        </li>
                        <li className="footer__img"><img src="" alt=""/></li>
                    </ul>
                </div>
            </div>        </footer>
    );
};

export default Footer;