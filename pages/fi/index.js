import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";
import React, {useState} from "react";
import Hero from "../../components/hero";
import ContactFormButton from "../../components/contact-form-button";

export default function IndexPage() {
    const [showModal, toggleModal] = useState(false);

    return (
        <Page title={`Next.js Showcase project by Netsl:)`} description={'Hey there!'} formState={{showModal, toggleModal}}>
            <Container>
                <Hero/>
                <h1>FINNISH PAGE</h1>
                <p>This is test project.</p>
                <p>In future it will be production version of {ORG_NAME}  web application.</p>
                <p>Now it is sample.</p>
                <ContactFormButton onClick={(e) => {
                    document.getElementById('cf-contact-us').classList.add('loading');
                    toggleModal(!showModal);
                    e.preventDefault();

                }}>Finnish Enroll</ContactFormButton >
            </Container>
            <Footer/>

        </Page>


    )
}