import React from "react";
import App, { Container } from "next/app";
import Header from "./components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

export default class EvaluationApp extends App {
    static async getInitialProps({ Component, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
          pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }

    render() {
        const { Component, pageProps } = this.props;
        return (
            <Container>
                <Header />
                <CssBaseline />
                <Component {...pageProps} />
            </Container>
        );
    }
}
