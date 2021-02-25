import { AppContext, AppProps } from 'next/app';
import getConfig from 'next/config';

function MyApp({ Component, statusCode, pageProps }) {
  // render error on the client
  // if (statusCode) {
  //   return internals of _error component
  // }

  return (
    <>
      {/* temp */}
      <style>{`body { display: block !important }`}</style>
      <Component {...pageProps} />
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const userAgent = ctx.req
    ? ctx.req.headers['user-agent'] || ''
    : navigator.userAgent;

  return {
    pageProps,
    userAgent,
  };
};

export default MyApp;
