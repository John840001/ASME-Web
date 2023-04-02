import { createTheme, NextUIProvider } from '@nextui-org/react';

const theme = createTheme({
  type: "dark", // it could be "light" or "dark"
  theme: {
    colors: {
      primary: "#E42024",
      secondary: "#333333",
      success: "#00BFA6",
      error: "#FF0000",
      warning: "#FFC107",
      background: "#000000",
    },
      
  }
})
function MyApp({ Component, pageProps }) {
  return (
    <NextUIProvider theme={theme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;
