import {memo} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/router';
import {useAmp} from 'next/amp';
import cn from 'classnames';
import {SkipNavLink} from '@reach/skip-nav';
import Container from './container';

import GitHubLogo from './icons/github';
import HeaderFeedback from './header-feedback';
import {PLATFORM_NAME} from "../lib/constants";


function Navbar() {
    const {route} = useRouter();
    const isAmp = useAmp();

    return (
        <Container center>
            <SkipNavLink tabIndex="0"/>
            <h1 className="visually-hidden" aria-hidden="true">
                {PLATFORM_NAME}
            </h1>
            <nav className="f-reset">
                <div className="mobile-top">
                    <Link href="/">
                        <a className="mobile-logo" title="Go to the homepage" style={{color: "black"}}>
                            <h1>{PLATFORM_NAME}</h1>
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
                    <Link href="/">
                        <a className="logo" style={{color: "black"}}>
                            <h1>{PLATFORM_NAME}</h1>
                        </a>
                    </Link>
                    <Link href='/posts/first-post'>
                        <a
                            className={cn('mute', {
                                selected: route.startsWith('/showcase')
                            })}
                            title="First Post"
                        >
                            First Post
                        </a>

                    </Link>
                    <Link href='/posts/second-post'>
                        <a
                            className={cn('mute', {
                                selected: route.startsWith('/showcase')
                            })}
                            title="Second Post"
                        >
                            Second Post
                        </a>

                    </Link>

                    {!isAmp && (
                        <div className="header-feedback">
                            <HeaderFeedback/>
                        </div>
                    )}
                    <a
                        href="https://github.com/vanya6537/dance-republic"
                        aria-label="Project on GitHub"
                        rel="noopener noreferrer"
                        target="_blank"
                        className="icon mute"
                    >
                        <GitHubLogo color="currentColor"/>
                    </a>
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
        }

        .links a:hover {
          color: #000;
        }

        .links a.selected {
          color: #0070f3;
          font-weight: 600;
        }

        .links a:first-child,
        .links a:last-child {
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
      `}</style>
        </Container>
    );
}

export default memo(Navbar);
