import Container from "../../components/container";
import Page from '../../components/page';
import Footer from '../../components/footer';
import {ORG_NAME} from "../../lib/constants";

export default function IndexPage() {
    return (
        <Page title={`Next.js Showcase project by Netsl:)`} description={'Hey there!'}>
            <Container>
                <h1>FINNISH PAGE</h1>
                <p>This is test project.</p>
                <p>In future it will be production version of {ORG_NAME}  web application.</p>
                <p>Now it is sample.</p>
            </Container>
            <Footer/>

        </Page>


    )
}