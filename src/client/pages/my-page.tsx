import React from 'react';

function MyPage(props) {
  return <pre>{JSON.stringify(props)}</pre>;
}

MyPage.getInitialProps = async (req, res) => {
  if (typeof window === 'undefined') {
    return req.query.pageData;
  }

  // const response = await fetch('http://localhost:8000');
  // return response.json();

  return {
    myApp: 'my-test-app',
  };
};

export default MyPage;
