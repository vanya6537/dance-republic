import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";
import {useState} from "react";

export default function SchedulePage() {
    const [showModal, toggleModal] = useState(false);

    return (
        <Page title={`Finnish Schedule`} description={'Finnish Schedule'} formState={{showModal, toggleModal}}>
            <Container>
                <h1>Finnish Schedule</h1>
                <p>{ORG_NAME}</p>
            </Container>
            <Footer/>

        </Page>


    )
}