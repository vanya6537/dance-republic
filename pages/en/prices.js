import React, {useState} from "react";
import {isMobile} from "react-device-detect";
import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";

export default function PricesPage() {
    const [showModal, toggleModal] = useState(false);

    return (
        <Page title="Prices" description="Prices" formState={{showModal, toggleModal}}>
            <Container padding center minHeight={`calc(100vh - ${isMobile ? "58" : "81"}px)`}>
                <h1>Prices</h1>
                <p>{ORG_NAME}</p>
            </Container>
            <Footer/>

        </Page>


    )
}