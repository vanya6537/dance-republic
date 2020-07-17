import React, {useContext} from "react";
import {LANGUAGES} from "../lib/constants";
import LanguageContext from "./LanguageContext";
import Link from "next/link";
import cn from "classnames";
import {useRouter} from 'next/router';

const LanguageSwitcher = () => {
    const {language, setLanguage} = useContext(LanguageContext);
    let nextLanguage = LANGUAGES[(LANGUAGES.indexOf(language) + 1) % LANGUAGES.length];
    const router = useRouter();
    return (
        <Link href={'/' + [nextLanguage, ...router.pathname.split('/').slice(2)].join('/')}>
            <a
                className={cn('mute', {
                    selected: router.route.startsWith('/showcase')
                })}
                title="Second Post"
                onClick={() => setLanguage(nextLanguage)}
            >
                {nextLanguage.toUpperCase()}
            </a>

        </Link>
    );
};

export default LanguageSwitcher;
