import Link from 'next/link'
import Container from "../../../components/container";
import Page from "../../../components/page";
import Footer from "../../../components/footer";

export default function FirstPost() {
    return (
        <Page title={`Second Post`} description={'Hey there!'}>
            <Container>
                <h1>FINNISH Post</h1>
                <Link href="/fl">
                    <a>Back to home</a>
                </Link>
                <p>
                    This is Second Post!
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent mi odio, congue vel mi ac,
                    efficitur tempor nisl. Vivamus et interdum lorem. Nam id augue ut tortor vulputate pellentesque.
                    Curabitur eget placerat felis. Morbi dapibus mattis orci, eget pharetra ipsum cursus et. Ut aliquet
                    lobortis sagittis. Suspendisse potenti.

                    Morbi vestibulum luctus ullamcorper. Mauris tristique erat diam, nec placerat velit consectetur non.
                    Sed consectetur efficitur faucibus. Vivamus sapien dui, venenatis non tincidunt eget, ornare sit
                    amet ipsum. Proin pulvinar nisl id ipsum accumsan auctor. Praesent consequat neque eu tortor
                    eleifend tincidunt. Vestibulum ac nibh mollis libero lacinia ultrices vel vitae quam. Nullam quis
                    efficitur massa, vel condimentum ante.

                    Quisque volutpat urna ac magna imperdiet vehicula. Duis a ex congue, congue mi et, varius nisi. Cras
                    sed neque vitae libero pharetra lacinia. Proin interdum orci enim, sed consectetur magna accumsan
                    ac. Pellentesque ultrices a felis volutpat pharetra. Quisque posuere, eros quis ultrices interdum,
                    libero massa efficitur erat, aliquet maximus massa turpis vel quam. Nullam sed bibendum elit, a
                    laoreet nibh. Curabitur sed dictum est. In pretium finibus diam in rutrum. Nulla placerat, mauris eu
                    tristique viverra, enim enim euismod nisl, sed fringilla enim leo ac tellus. Nullam fringilla
                    hendrerit molestie. Duis facilisis egestas leo a mollis. Praesent ut placerat tortor. Maecenas
                    gravida laoreet massa eu congue.

                    Quisque viverra mi a massa rutrum, ac laoreet enim pharetra. Nulla erat sem, sollicitudin ut arcu
                    vitae, laoreet lacinia libero. Donec auctor quam purus, ac pulvinar dui vulputate id. Nunc rutrum,
                    orci non venenatis malesuada, turpis ex aliquet lectus, nec auctor metus odio nec libero. Integer a
                    arcu volutpat, tincidunt metus sed, mattis leo. Sed dictum massa semper facilisis volutpat. Nunc
                    enim nulla, tempor id tincidunt id, vestibulum in enim. Praesent aliquet leo scelerisque urna
                    laoreet, eget consequat augue commodo.

                    Nunc sit amet dui sit amet magna iaculis aliquam nec quis enim. Nam rhoncus dui sit amet magna
                    congue vulputate. Duis ut tristique massa. Vestibulum porttitor suscipit nisi. In lacinia, nibh vel
                    feugiat luctus, nisl justo ullamcorper elit, nec gravida mi ante sit amet augue. Nam a pulvinar
                    massa. Nunc eget sem mattis, pretium ex quis, tristique justo. Fusce lobortis lorem et nisl finibus
                    faucibus. Sed viverra justo non nulla dignissim, sed hendrerit sapien tempor. Vivamus nec cursus
                    leo. Maecenas dictum dui convallis augue viverra sollicitudin sed non augue. Etiam blandit mattis
                    porta. Aenean scelerisque tempus nibh, in iaculis nulla bibendum a. Integer vitae lectus lacinia,
                    pretium felis sit amet, feugiat ligula. Aenean ultricies, nulla sed pellentesque commodo, dolor quam
                    auctor sem, vitae tristique libero lacus quis nulla.
                </p>
            </Container>
            <Footer/>
        </Page>
    )
}