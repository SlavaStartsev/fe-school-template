import { NextPageContext } from 'next';

function ErrorPage() {
  return <span>Error apge</span>;
}

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res?.statusCode || err?.statusCode || 404;

  return { statusCode };
};

export default ErrorPage;
