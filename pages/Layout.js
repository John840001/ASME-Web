import { Content } from "./Content.js"
import { Box } from "./Box.js";
import Head from "next/head.js";

export const Layout = ({ children }) => (
    <>
        <Head>
            <title>ASMExCRCE</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
            </style>
        </Head>
        <Box
            css={{
                maxW: "100%"
            }}
        >
            {children}
            <Content />
        </Box>
    </>

);
