import {useState} from "react";
import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";

export default function PricesPage() {
    const [showModal, toggleModal] = useState(false);

    return (
        <Page title="Finnish Prices" description="Prices" formState={{showModal, toggleModal}}>
            <Container>
                <h1>Здесь будут цены на финском</h1>
                <p>{ORG_NAME}</p>
            </Container>
            <Footer/>

        </Page>


    )
}