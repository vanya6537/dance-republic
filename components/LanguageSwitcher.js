import React from "react";
import {LANGUAGES} from "../lib/constants";
import Link from "next/link";
import cn from "classnames";
import {useRouter} from 'next/router';

const LanguageSwitcher = () => {
    const router = useRouter();
    const language = router.pathname.split('/')[1]
    let nextLanguage = LANGUAGES[(LANGUAGES.indexOf(language) + 1) % LANGUAGES.length];
    return (
        <Link href={'/' + [nextLanguage, ...router.pathname.split('/').slice(2)].join('/')}>
            <a
                className={cn('mute', {
                    selected: router.route.startsWith('/showcase')
                })}
                title="Second Post"
            >
                {nextLanguage.toUpperCase()}
            </a>

        </Link>
    );
};

export default LanguageSwitcher;
