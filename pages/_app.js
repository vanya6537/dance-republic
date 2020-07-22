import NProgress from '../components/nprogress';
import 'react-phone-number-input/style.css'
import '../styles/additional.css'
import '../styles/font.css'

export default function App({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps} />
            <NProgress/>
        </>
    );
}
