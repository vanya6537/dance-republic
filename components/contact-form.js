import {useEffect, useRef, useState} from 'react'
import {useRouter} from 'next/router'
import {COLOR_CODE_GREY, COLOR_CODE_RED, COLOR_CODE_WHITE} from "./css-config";
import ContactFormButton from './contact-form-button';
import PhoneInput, {getCountryCallingCode, isPossiblePhoneNumber} from 'react-phone-number-input'
import {LANGUAGES} from '../lib/constants'
const preventDefault = f => e => {
    e.preventDefault()
    f(e)
}

const useOutsideAlerter = (ref, formState) => {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            // console.log('contains?');
            // console.log(formState.showModal);
            // console.log(ref.current);
            // console.log(ref.current.contains(event.target));
            if (ref.current && !ref.current.contains(event.target)) {
                formState.toggleModal(false);
                // alert("You clicked outside of me!");
                // console.log('out')
                document.getElementById('cf-contact-us').classList.remove('loading');

            }
        }

        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
};

export default ({action = '/search', formState}) => {
    const router = useRouter()
    const wrapperRef = useRef(null);
    const defaultCountry = "FI";
    const countryCallingCode = getCountryCallingCode(defaultCountry);
    const [value, setValue] = useState('+' + countryCallingCode);
    const [loading, setLoading] = useState(true);
    const pathNameSplit = router.pathname.split('/');
    const language = pathNameSplit[1];
    // const [windowOffset, setWindowOffset] = useState(window.scrollY);
    useOutsideAlerter(wrapperRef, formState);

    const title=["Wanna dance with us?","Wanna dance with us? FINNISH","Хочешь потанцевать?"][LANGUAGES.indexOf(language)];
    const subtitle = ["We will call you back!","We will call you back! FINNISH","Мы тебе перезвоним!"][LANGUAGES.indexOf(language)];


    // const handleParam = setValue => e => setValue(e.target.value)

    const handleSubmit = preventDefault((e) => {
        if (isPossiblePhoneNumber(value)) {
            alert('Success!')
            // setLoading(false);
        } else {
            alert('Invalid')
            // setLoading(true)
        }
        e.preventDefault();
        // router.push({
        //     pathname: action,
        //     phone: value,
        // })
    })

    const checkValue = (value) => {
        console.log(value);
        setValue(value);
        if (isPossiblePhoneNumber(value)) {
            // alert('phone ' + value)
            setLoading(false);
            document.getElementById('cf-submit').style.borderBottom = `1px solid ${COLOR_CODE_RED}`
        } else {
            // alert('invalid')
            document.getElementById('cf-submit').style.borderBottom = `1px solid ${COLOR_CODE_GREY}`

            setLoading(true)
        }
    }

    return (
        <div className="modal" id="modal-cf">
            <div className="modal-content" ref={wrapperRef}>
                {/*<ContactFormButton id="close-form" small onClick={() => {*/}
                {/*    formState.toggleModal(false)*/}
                {/*}}>Close</ContactFormButton>*/}
                <div className="contact-form-wrapper">
                    <h1>{title}</h1>
                    <p>{subtitle}</p>
                    <form onSubmit={handleSubmit} className="contact-form">
                        <PhoneInput
                            international
                            defaultCountry={language.toUpperCase()}
                            // placeholder={["Enter phone number"]}
                            value={value}
                            onChange={checkValue}
                        />
                        <ContactFormButton loading={loading} type="submit" id="cf-submit">Submit</ContactFormButton>

                    </form>
                    {/*<ContactFormButton onClick={()=>{*/}
                    {/*    formState.toggleModal(false);*/}
                    {/*}}>Close</ContactFormButton>*/}

                </div>

            </div>
            <style jsx>{`
            .modal {
            z-index: 3;
            width: 100%;
            height: 100%;
            // background-color: rgb(255,255,255,0.9);
            background-color: ${COLOR_CODE_WHITE};
            position: fixed;
            top: 80px;
            left: 0;
            visibility: ${!formState.showModal ? "hidden" : "visible"};
            }
            
            .modal-content {
            width: 700px;
            // height: 400px;
            background-color: ${COLOR_CODE_WHITE};
            // padding: 40px;
            border-top: 1px solid ${COLOR_CODE_RED};
            border-bottom: 1px solid ${COLOR_CODE_GREY};

            // border-radiuspx;s
            max-width:1024px;
            margin: 100px auto;
            padding: 2rem 4rem;

            }
            
            `}</style>
        </div>
    )
}