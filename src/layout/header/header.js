import React, {useState} from 'react';
import style from '../../style/header.scss'

const Header = () => {






    return (
        <header className="header">
                <a className='header__logo' href='../../'><svg width="139" height="25" viewBox="0 0 139 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_52820_553)">
                        <path d="M21.5169 22.6493L21.1587 20.9776C20.4206 17.5332 19.0682 14.2964 17.1386 11.3529V8.64058C18.0275 7.97178 18.6035 6.9084 18.6035 5.71289V4.24805C18.6035 3.84355 18.2756 3.51562 17.8711 3.51562H17.1386V0.732422C17.1386 0.32793 16.8107 0 16.4062 0C16.0017 0 15.6738 0.32793 15.6738 0.732422V3.52339C14.3584 3.6001 13.2059 4.29209 12.5 5.31528C11.7941 4.29209 10.6416 3.6001 9.32614 3.52339V0.732422C9.32614 0.32793 8.99821 0 8.59372 0C8.18922 0 7.86129 0.32793 7.86129 0.732422V3.51562H7.12887C6.72438 3.51562 6.39645 3.84355 6.39645 4.24805V5.71289C6.39645 6.9084 6.97243 7.97178 7.86129 8.64058V11.3529C5.9317 14.2964 4.57931 17.5332 3.84123 20.9776L3.48302 22.6493C3.40646 23.0066 3.60504 23.3658 3.9485 23.4909C6.69738 24.4923 9.57448 25 12.5 25C15.4255 25 18.3026 24.4923 21.0514 23.4909C21.3949 23.3658 21.5935 23.0067 21.5169 22.6493ZM15.9179 4.98047H17.1386V5.71289C17.1386 6.92446 16.1529 7.91016 14.9414 7.91016H13.2324V7.66602C13.2324 6.1852 14.4371 4.98047 15.9179 4.98047ZM7.86129 4.98047H9.082C10.5628 4.98047 11.7675 6.1852 11.7675 7.66602V7.91016H10.0586C8.84699 7.91016 7.86129 6.92446 7.86129 5.71289V4.98047ZM10.0586 9.375H14.9414C15.1922 9.375 15.4371 9.34956 15.6738 9.30132V10.8398H9.32614V9.30132C9.56286 9.34956 9.80778 9.375 10.0586 9.375ZM12.5 23.5352C9.95846 23.5352 7.45558 23.128 5.0507 22.3244L5.2735 21.2846C5.96115 18.0757 7.21051 15.0566 8.98898 12.3047L16.0109 12.3047C17.7894 15.0566 19.0387 18.0757 19.7264 21.2845L19.9492 22.3244C17.5444 23.128 15.0415 23.5352 12.5 23.5352Z" fill="black"/>
                    </g>
                    <path d="M41.52 6.704H42.88L44.384 10.656L45.904 6.704H47.264L45.296 11.648L47.248 16.336L51.088 6.64H52.656L47.904 18H46.656L44.4 12.64L42.128 18H40.88L36.144 6.64H37.696L41.552 16.336L43.488 11.648L41.52 6.704ZM59.9274 18.08C59.1274 18.08 58.402 17.92 57.7514 17.6C57.1007 17.28 56.5354 16.848 56.0554 16.304C55.586 15.7493 55.2234 15.1307 54.9674 14.448C54.7114 13.7547 54.5834 13.0453 54.5834 12.32C54.5834 11.5627 54.7167 10.8427 54.9834 10.16C55.2607 9.46667 55.6394 8.85333 56.1194 8.32C56.61 7.776 57.1807 7.34933 57.8314 7.04C58.482 6.72 59.1914 6.56 59.9594 6.56C60.7594 6.56 61.4847 6.72533 62.1354 7.056C62.786 7.38667 63.346 7.82933 63.8154 8.384C64.2847 8.93867 64.6474 9.55733 64.9034 10.24C65.1594 10.9227 65.2874 11.6213 65.2874 12.336C65.2874 13.0933 65.154 13.8187 64.8874 14.512C64.6207 15.1947 64.242 15.808 63.7514 16.352C63.2714 16.8853 62.706 17.3067 62.0554 17.616C61.4047 17.9253 60.6954 18.08 59.9274 18.08ZM56.0394 12.32C56.0394 12.896 56.13 13.456 56.3114 14C56.5034 14.5333 56.77 15.008 57.1114 15.424C57.4527 15.84 57.8634 16.1707 58.3434 16.416C58.8234 16.6613 59.3567 16.784 59.9434 16.784C60.5514 16.784 61.0954 16.656 61.5754 16.4C62.0554 16.144 62.4607 15.8027 62.7914 15.376C63.1327 14.9493 63.3887 14.4693 63.5594 13.936C63.7407 13.4027 63.8314 12.864 63.8314 12.32C63.8314 11.744 63.7354 11.1893 63.5434 10.656C63.362 10.1227 63.0954 9.648 62.7434 9.232C62.402 8.80533 61.9914 8.47467 61.5114 8.24C61.042 7.99467 60.5194 7.872 59.9434 7.872C59.3354 7.872 58.7914 8 58.3114 8.256C57.8314 8.50133 57.4207 8.83733 57.0794 9.264C56.7487 9.69067 56.4927 10.1707 56.3114 10.704C56.13 11.2267 56.0394 11.7653 56.0394 12.32ZM78.7121 18V9.328L74.9681 16H74.0881L70.3281 9.328V18H68.8881V6.64H70.4081L74.5201 14.016L78.6481 6.64H80.1521V18H78.7121ZM87.9285 6.64H89.1445L93.7845 18H92.2485L90.9045 14.672H86.1365L84.8085 18H83.2725L87.9285 6.64ZM90.5845 13.552L88.5365 8.304L86.4245 13.552H90.5845ZM96.0526 16.88L103.381 7.92H96.1966V6.64H105.061V7.76L97.8606 16.72H105.061V18H96.0526V16.88ZM108.594 18V6.64H110.034V18H108.594ZM115.791 9.296V18H114.351V6.64H115.567L122.511 15.52V6.656H123.951V18H122.639L115.791 9.296ZM132.823 18.08C132.076 18.08 131.378 17.92 130.727 17.6C130.087 17.2693 129.527 16.832 129.047 16.288C128.567 15.7333 128.194 15.1147 127.927 14.432C127.66 13.7387 127.527 13.024 127.527 12.288C127.527 11.52 127.66 10.7947 127.927 10.112C128.194 9.41867 128.562 8.80533 129.031 8.272C129.511 7.73867 130.071 7.32267 130.711 7.024C131.362 6.71467 132.066 6.56 132.823 6.56C133.922 6.56 134.828 6.78933 135.543 7.248C136.258 7.70667 136.796 8.304 137.159 9.04L136.055 9.808C135.724 9.14667 135.271 8.656 134.695 8.336C134.119 8.016 133.484 7.856 132.791 7.856C132.215 7.856 131.692 7.97867 131.223 8.224C130.754 8.46933 130.348 8.80533 130.007 9.232C129.676 9.648 129.42 10.1227 129.239 10.656C129.068 11.1893 128.983 11.744 128.983 12.32C128.983 13.1307 129.154 13.8773 129.495 14.56C129.847 15.232 130.322 15.7707 130.919 16.176C131.516 16.5813 132.188 16.784 132.935 16.784C133.543 16.784 134.124 16.64 134.679 16.352C135.244 16.0533 135.778 15.6 136.279 14.992V13.424H133.831V12.336H137.495V18H136.279V16.464C135.298 17.5413 134.146 18.08 132.823 18.08Z" fill="black"/>
                    <defs>
                        <clipPath id="clip0_52820_553">
                            <rect width="25" height="25" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
                </a>
            <ul className="header__ul">
                <li className="header__li"><a className="header__a" href="../../">Главная</a></li>
                <li className="header__li"><a className="header__a" href="../../shop">Магазин</a></li>
                <li className="header__li"><a className="header__a" href="../../brand">О бренде</a></li>
                <li className="header__li"><a className="header__a" href="../../contacts">Контакты</a></li>
            </ul>
                <div className="header__all">
                    <h3  className="header__tel"><svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_52820_564)">
                            <path d="M2.25235 4.81643C0.750523 6.31823 0.750523 8.7618 2.25232 10.2636L3.05001 9.46592C1.9881 8.40402 1.98807 6.67613 3.05004 5.61417C4.11197 4.55224 5.83985 4.55224 6.90179 5.61414L7.69947 4.81646C6.1977 3.31463 3.75412 3.31466 2.25235 4.81643Z" fill="#6E9C9F"/>
                            <path d="M3.84133 6.39119C3.20916 7.02336 3.20913 8.05201 3.8413 8.68421L4.63901 7.88653C4.54584 7.79335 4.49453 7.66947 4.49453 7.53772C4.49453 7.40599 4.54587 7.2821 4.63904 7.18893C4.73221 7.09576 4.8561 7.04444 4.98782 7.04444C5.11958 7.04444 5.24349 7.09576 5.33664 7.18893L6.13432 6.39122C5.50215 5.75902 4.4735 5.75902 3.84133 6.39119Z" fill="#6E9C9F"/>
                            <path d="M13.7482 4.43513L11.855 2.54848L7.92331 6.47367L9.44752 8.04781C9.19208 8.50125 8.63784 9.3699 7.69327 10.3145C6.74859 11.2592 5.8736 11.8197 5.41581 12.0792L3.87255 10.5556L0.00219727 14.4029L1.88504 16.2983C2.60479 17.0181 3.69992 17.2046 4.61014 16.7625C5.99915 16.0879 8.0954 14.8431 10.1942 12.7443C12.2931 10.6455 13.5378 8.54924 14.2124 7.16023C14.3723 6.83109 14.4499 6.47787 14.4499 6.12692C14.4499 5.5072 14.2077 4.89464 13.7482 4.43513ZM13.1977 6.66732C12.5609 7.97846 11.3845 9.95865 9.39655 11.9466C7.40862 13.9345 5.42842 15.1109 4.11729 15.7477C3.63929 15.9799 3.06281 15.8806 2.68414 15.5019L1.59739 14.4079L3.87537 12.1436L5.19009 13.4415L5.54183 13.2849C5.59899 13.2595 6.95941 12.6438 8.4911 11.1121C10.0238 9.57947 10.6266 8.23054 10.6515 8.17386L10.804 7.82683L9.50671 6.48705L11.8558 4.14178L12.9511 5.23327C13.3306 5.6133 13.4298 6.18952 13.1977 6.66732Z" fill="#6E9C9F"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_52820_564">
                                <rect width="17" height="17" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

                        +7 (495) 823-54-12</h3>
                    <h4 className="Header__mag"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_52823_293)">
                            <path d="M23.8454 8.2243C23.7281 8.10906 23.5642 8.05442 23.4012 8.07624H17.0343V5.26295C17.0343 2.4826 14.7804 0.228699 12.0001 0.228699C9.21971 0.228699 6.96582 2.4826 6.96582 5.26295V8.07624H0.598861C0.421164 8.07624 0.243523 8.07624 0.154646 8.2243C0.0352739 8.33902 -0.0201042 8.5051 0.00659291 8.66851L2.22761 20.81C2.53789 22.5037 4.00034 23.7431 5.72199 23.7713H18.278C20.0046 23.7289 21.464 22.4797 21.7724 20.7804L23.9934 8.66851C24.0201 8.5051 23.9648 8.33902 23.8454 8.2243ZM8.1503 5.26295C8.1503 3.13682 9.87388 1.41324 12 1.41324C14.1261 1.41324 15.8497 3.13682 15.8497 5.26295V8.07624H8.1503V5.26295ZM20.5879 20.6323C20.3884 21.7547 19.4179 22.5759 18.278 22.5868H5.72199C4.58212 22.5759 3.61161 21.7547 3.41215 20.6323L1.30959 9.26078H22.6904L20.5879 20.6323Z" fill="black"/>
                            <path d="M16.4419 15.0354C16.769 15.0354 17.0341 14.7702 17.0341 14.4431V12.6663C17.0341 12.3392 16.769 12.074 16.4419 12.074C16.1148 12.074 15.8496 12.3392 15.8496 12.6663V14.4431C15.8496 14.7702 16.1148 15.0354 16.4419 15.0354Z" fill="black"/>
                            <path d="M7.55809 15.0354C7.8852 15.0354 8.15036 14.7702 8.15036 14.4431V12.6663C8.15036 12.3392 7.8852 12.074 7.55809 12.074C7.23098 12.074 6.96582 12.3392 6.96582 12.6663V14.4431C6.96582 14.7702 7.23098 15.0354 7.55809 15.0354Z" fill="black"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_52823_293">
                                <rect width="24" height="24" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                    </h4>
                </div>
        </header>
    );
};

export default Header;