import React from "react";
import {LANGUAGES} from "../lib/constants";
import Link from "next/link";
import cn from "classnames";
import {useRouter} from 'next/router';

const LanguageSwitcher = () => {
    const router = useRouter();
    const language = router.pathname.split('/')[1]
    // let nextLanguage = LANGUAGES[(LANGUAGES.indexOf(language) + 1) % LANGUAGES.length];
    const links = LANGUAGES.map(lang => {
        return <Link href={'/' + [lang, ...router.pathname.split('/').slice(2)].join('/')}>
            <a
                className={cn('mute', {
                    selected: router.route.startsWith('/showcase')
                })}
                title="Second Post"
            >
                {lang.toUpperCase()}
            </a>
        </Link>
    })
    return (<div className='lang-links'>
            {links}

        </div>

    );
};

export default LanguageSwitcher;
