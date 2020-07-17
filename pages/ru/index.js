import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";

export default function IndexPage() {
    return (
        <Page title={`ПРОЕКТ Netsl:)`} description={'Hey there!'}>
            <Container>
                <h1>РАШН ПЕЙДЖ</h1>
                <p>{ORG_NAME}</p>
            </Container>
            <Footer/>

        </Page>


    )
}