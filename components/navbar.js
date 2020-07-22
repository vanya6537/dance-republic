import {memo} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import cn from 'classnames';
import {SkipNavLink} from '@reach/skip-nav';
import {slide as Menu} from 'react-burger-menu'
import {isMobile} from 'react-device-detect';
import Container from './container';
import {HARD_FONT_WEIGHT, LANGUAGES, LIGHT_FONT_WEIGHT, PLATFORM_NAME} from "../lib/constants";
import LogoMin from "./logo-min"

import {COLOR_CODE_BLACK, COLOR_CODE_DARK, COLOR_CODE_RED, COLOR_CODE_WHITE} from "./css-config";
import ContactFormButton from "./contact-form-button"

const burgerStyles = {
    bmBurgerButton: {
        position: 'fixed',
        width: '30px',
        height: '24px',
        right: '30px',
        top: '24px'
    },
    bmBurgerBars: {
        background: '#373a47'
    },
    bmBurgerBarsHover: {
        background: COLOR_CODE_RED
    },
    bmCrossButton: {
        height: '24px',
        width: '24px',
        right: '30px',
        bottom: '90px',
        top: null
    },
    bmCross: {
        background: COLOR_CODE_DARK
    },
    bmMenuWrap: {
        position: 'fixed',
        height: '100%',
        right: '0',
        width: '100%',
        zIndex: 5,
        top: '58px',
        overflowY: 'hidden !important'

    },
    bmMenu: {
        background: COLOR_CODE_WHITE,
        padding: '0',
        fontSize: '1.15em',
        overflowY: 'hidden !important'
    },
    bmMorphShape: {
        fill: COLOR_CODE_DARK
    },
    bmItemList: {
        color: COLOR_CODE_BLACK,
        padding: '20% 0',
        display: 'inline-block',
        overflowY: 'hidden !important'
    },
    bmItem: {
        // display: 'inline-block',
    },
    bmOverlay: {
        background: 'rgba(0, 0, 0, 0.3)'
    },
}

function Navbar({formState}) {
    const router = useRouter();
    const pathNameSplit = router.pathname.split('/');
    const language = pathNameSplit[1]
    const contactFormText = ["Contact Us", "Contact Us FI", "Записаться"][LANGUAGES.indexOf(language)];
    // console.log(pathNameSplit);

    const thisPage = pathNameSplit[pathNameSplit.length - 1];
    // console.log(thisPage);
    console.log(thisPage)

    const langLinks = LANGUAGES.map(lang => {
        return <Link href={`/${[lang, ...router.pathname.split('/').slice(2)].join('/')}`}>
            <a
                className={cn(`fw5 ${lang === language ? '' : 'mute'}`)}
                // title="Second Post"
            >
                {lang.toUpperCase()}
            </a>
        </Link>
    })

    const menuObjects = [
        {path: 'prices', titles: ['Prices', 'Finnish Prices', 'Цены']},
        {path: 'schedule', titles: ['Schedule', 'Finnish Schedule', 'Расписание']},
        {path: 'info', titles: ['About Us', 'Finnish About Us', 'О нас']}
    ]
    const menuLinks = menuObjects.map(menuObj => {
        return <Link href={`/${language}/${menuObj.path}`}>

            <a
                className={cn(thisPage !== menuObj.path ? "mute" : "")}
            >
                {menuObj.titles[LANGUAGES.indexOf(language)]}
            </a>

        </Link>
    })

    return (
        <Container center>
            <SkipNavLink tabIndex="0"/>
            <h1 className="visually-hidden" aria-hidden="true">
                {PLATFORM_NAME}
            </h1>
            <div className="mobile-top">
                <Link href={`/${language}`}>
                    <a className="mobile-logo" title="Go to the homepage" style={{color: "black"}}>
                        <LogoMin height='35px' style={{transform: 'translateY(10px)', float: 'left'}}/>
                    </a>
                </Link>
            </div>

            {!isMobile ? <div className="links">
                    <Link href={`/${language}`}>
                        <a className="logo">
                            <LogoMin size={70}/>
                        </a>
                    </Link>
                    {menuLinks}

                    <div className="feedback-wrapper">
                        <div className="langs">
                            {langLinks}
                        </div>

                        {/* <div className="header-feedback"> */}
                        {/*    <HeaderFeedback/> */}
                        {/* </div> */}
                        <ContactFormButton id="cf-contact-us" onClick={e => {
                            // console.log(formState.showModal)
                            // setLoading(!loading);
                            // if (formState.showModal){
                            formState.toggleModal(true)
                            // }
                            document.getElementById('cf-contact-us').classList.add('loading');
                            // setLoading(true);
                            e.preventDefault();
                        }}>
                            {contactFormText}
                        </ContactFormButton>
                    </div>
                </div>
                :
                <Menu noOverlay right
                      styles={burgerStyles} id="burger-menu-wrapper">
                    <ul>
                        <li>
                            <Link href={`/${language}`}>
                                <a className={cn(LANGUAGES.indexOf(thisPage) === -1 ? 'mute' : '')}>{['Main', 'FinMain', 'Главная страница'][LANGUAGES.indexOf(language)]}</a>
                            </Link>
                        </li>
                        {menuLinks.map((listItem) => {
                            return (<li key={listItem.href}>{listItem}</li>)
                        })}
                    </ul>

                    <ContactFormButton id="cf-contact-us" onClick={e => {
                        formState.toggleModal(true)
                        document.getElementById('cf-contact-us').classList.add('loading');
                        document.getElementById('burger-menu-wrapper').style.transform = 'translate3d(100%, 0px, 0px)';
                        e.preventDefault();
                    }}>
                        {contactFormText}
                    </ContactFormButton>

                    {langLinks}
                </Menu>}
            <style jsx>{`
        nav {
          position: relative;
          flex: 1;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .links {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          z-index: 1;
          font-weight: ${LIGHT_FONT_WEIGHT};
        }

        .links a {
          text-decoration: none;
          transition: color 0.2s ease;
          // color: ${COLOR_CODE_DARK}
        }

        .links a:hover {
          color: ${COLOR_CODE_RED};
        }

        .links a.selected {
          color: ${COLOR_CODE_DARK};
          font-weight: ${HARD_FONT_WEIGHT};
        }
        
        .links a:first-child{
          display: flex;
        }

        a.icon,
        a.icon > :global(div.container) {
          /* Remove additional space from SVG */
          display: inline-flex;
          justify-content: center;
        }

        a.icon > :global(div.container) {
          overflow: visible;
        }

        .mobile-logo,
        .mobile-top {
          display: none;
        }

        .header-feedback {
          display: inline-flex;
        }
        
        .langs {
          width: 110px;
          display: flex;
          // align-items: center;
          justify-content: space-between;
          // font-weight: 400;
          // font-size: 24px;
          margin-right:30px;
        }
        
        .feedback-wrapper {
          display: inline-flex;
          height: 80px;
          align-items: center;

        }
        /* Mobile */

        @media (max-width: 640px) {
          .mobile-logo {
            display: block;
          }
          
          .f-reset {
         padding: 5px 0;
         // display: inline-flex;
          }

          nav {
            height: unset;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 1rem 0;
          }

          nav .links .logo,
          nav .links .icon {
            display: none;
          }

          nav .links a {
            font-size: 24px;
          }

          .mobile-top {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 0.5rem;
          }

          .mobile-top > .icons {
            display: flex;
            align-items: center;
          }

          .mobile-top > .icons a:nth-child(2) {
            margin-left: 2rem;
          }
        }

        // @media (max-width: 950px) {
          // .header-feedback {
          //   display: none;
          // }
        // }
         .lang-links > a {
                margin: 10px;
            }
           
         .bm-item-list > a {
            display: inline-block;
         }
         
         .links {
         display: ${!isMobile}
         }
         #burger-menu-wrapper {
         display: ${isMobile}
         }
      `}</style>

        </Container>
    );

}

export default memo(Navbar);
