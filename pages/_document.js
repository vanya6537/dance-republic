import Document, {Head, Main, NextScript} from 'next/document';
import flush from 'styled-jsx/server';

export default class AppDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        const styles = flush();
        return {...initialProps, styles}
    }

    render() {
        return (
            <html lang="en">
            <Head>
                {this.props.styles}
            </Head>
            <body className="loading main-bg-color">
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}