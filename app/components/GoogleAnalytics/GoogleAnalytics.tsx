'use client';

import Script from 'next/script';

const GoogleAnalytics = () => {
  const isDevelopment = process.env.NODE_ENV === 'development';
  return (
    <>
      {!isDevelopment && (
        <>
          <Script
            async
            strategy='beforeInteractive'
            src='https://www.googletagmanager.com/gtag/js?id=G-YZLSKD0M1Y'
          />
          <Script strategy='beforeInteractive' id='google-analytics'>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
                
              gtag('config', 'G-YZLSKD0M1Y'); 
            `}
          </Script>
        </>
      )}
    </>
  );
};

export default GoogleAnalytics;
