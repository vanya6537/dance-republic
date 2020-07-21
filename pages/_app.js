import fontTheme from '../styles/font';
import NProgress from '../components/nprogress';
import 'react-phone-number-input/style.css'
import '../styles/additional.css'

export default function App({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            <NProgress/>
            <style jsx global>
                {fontTheme}
            </style>
        </>
    );
}
