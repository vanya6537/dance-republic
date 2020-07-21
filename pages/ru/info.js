import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";
import {useState} from "react";

export default function InfoPage() {
    const [showModal, toggleModal] = useState(false);

    return (
        <Page title={`Информация`} description={'Информация'} formState={{showModal, toggleModal}}>
            <Container>
                <h1>Информация и контактные данные</h1>
                <p>{ORG_NAME}</p>
            </Container>
            <Footer/>

        </Page>


    )
}