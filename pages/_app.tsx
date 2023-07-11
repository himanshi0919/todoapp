import React, { ReactElement } from 'react';

import Header from '@/components/Header';
import '@/styles/globals.css';

interface AppProps {
  Component: React.FC;
  pageProps: any;
}

const App: React.FC<AppProps> = ({ Component, pageProps }): ReactElement => {
  return (
    <>
      <Header/>
      <div className="container mx-auto min-h-screen">
        <Component {...pageProps} />
      </div>
      
    </>
  );
};

export default App;
