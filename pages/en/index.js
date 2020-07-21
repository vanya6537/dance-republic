import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import Hero from '../../components/hero';
import ContactFormButton from '../../components/contact-form-button';
import React, {useState} from 'react';


export default function IndexPage() {

    const [showModal, toggleModal] = useState(false);
    // const closeModal = (_) =>{
    //     toggleModal(false);
    //     window.scrollTo(0,windowOffset)
    // }
    return (
        <Page title={`Next.js Showcase project by Netsl:)`} description={'Hey there!'}
              formState={{showModal, toggleModal}}>
            <Container>
                <Hero/>
                <ContactFormButton onClick={(e) => {
                    document.getElementById('cf-contact-us').classList.add('loading');
                    toggleModal(!showModal);
                    e.preventDefault();

                }}>Enroll</ContactFormButton >
            </Container>
            <Footer/>
        </Page>


    )
}