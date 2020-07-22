import React from 'react'

function redirect(ctx, path) {
    if (ctx.res) {
        ctx.res.writeHead(302, {Location: path})
        ctx.res.end()
    } else {
        document.location.pathname = path
    }
}

export default class Index extends React.Component {
    static async getInitialProps(ctx) {
        redirect(ctx, '/en')
    }

    // eslint-disable-next-line react/require-render-return
    render() {
        <div>nothing here</div>
    }
}