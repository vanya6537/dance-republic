import {memo, useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useAmp} from 'next/amp';
import cn from 'classnames';
import {SkipNavLink} from '@reach/skip-nav';
import Container from './container';
import GitHubLogo from './icons/github';
import HeaderFeedback from './header-feedback';
import {LANGUAGES, PLATFORM_NAME} from "../lib/constants";
import Logo from "./logo"
import {COLOR_CODE_DARK, COLOR_CODE_RED} from "./css-config";
import ContactFormButton from "./contact-form-button"

function Navbar({formState}) {
    const router = useRouter();
    const isAmp = useAmp();
    const pathNameSplit = router.pathname.split('/');
    const language = pathNameSplit[1]
    const contactFormText = ["Contact Us", "Contact Us FI", "Записаться"][LANGUAGES.indexOf(language)];
    console.log(pathNameSplit);

    const thisPage = pathNameSplit[pathNameSplit.length - 1];
    console.log(thisPage);

    const langLinks = LANGUAGES.map(lang => {
        return <Link href={'/' + [lang, ...router.pathname.split('/').slice(2)].join('/')}>
            <a
                className={cn('fw5 ' + (lang === language ? '' : 'mute'))}
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
        return <Link href={'/' + language + '/' + menuObj.path}>

            <a
                className={cn(thisPage !== menuObj.path ? "mute" : "")}
            >
                {menuObj.titles[LANGUAGES.indexOf(language)].toUpperCase()}
            </a>

        </Link>
    })

    return (
        <Container center>
            <SkipNavLink tabIndex="0"/>
            <h1 className="visually-hidden" aria-hidden="true">
                {PLATFORM_NAME}
            </h1>
            <nav className="f-reset">
                <div className="mobile-top">
                    <Link href={"/" + language}>
                        <a className="mobile-logo" title="Go to the homepage" style={{color: "black"}}>
                            <Logo/>
                        </a>
                    </Link>

                    <div className="icons">
                        <a
                            href="https://github.com/vanya6537/dance-republic"
                            aria-label="Dance Republic on GitHub"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="icon mute"
                        >
                            <GitHubLogo color="currentColor"/>
                        </a>
                    </div>
                </div>

                <div className="links">
                    <Link href={"/" + language}>
                        <a className="logo">
                            <Logo/>
                        </a>
                    </Link>
                    {menuLinks}

                    <div className="feedback-wrapper">
                        <div className="langs">
                            {langLinks}
                        </div>

                        {/*<div className="header-feedback">*/}
                        {/*    <HeaderFeedback/>*/}
                        {/*</div>*/}
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
            </nav>

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
          font-weight: 600;
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
          width: 70px;
          display: flex;
          // align-items: center;
          justify-content: space-between;
          font-weight: 400;
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
            font-size: 14px;
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
      `}</style>
        </Container>
    );
}

export default memo(Navbar);
