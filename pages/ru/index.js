import React, {useState} from "react";
import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";
import Hero from "../../components/hero";
import ContactFormButton from "../../components/contact-form-button";

export default function IndexPage() {
    const [showModal, toggleModal] = useState(false);

    return (
        <Page title="ПРОЕКТ Netsl:)" description="Hey there!" formState={{showModal, toggleModal}}>
            <Container>
                <Hero/>
                <h1>РАШН ПЕЙДЖ</h1>
                <p>{ORG_NAME}</p>
                <ContactFormButton onClick={(e) => {
                    document.getElementById('cf-contact-us').classList.add('loading');
                    toggleModal(!showModal);
                    e.preventDefault();

                }}>Запишись к нам!</ContactFormButton>
            </Container>
            <Footer/>

        </Page>


    )
}