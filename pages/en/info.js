import {useState} from "react";
import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";

export default function InfoPage() {
    const [showModal, toggleModal] = useState(false);

    return (
        <Page title="Info" description="Info" formState={{showModal, toggleModal}}>
            <Container>
                <h1>Info</h1>
                <p>{ORG_NAME}</p>
            </Container>
            <Footer/>

        </Page>


    )
}