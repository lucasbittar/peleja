import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head';
import * as gtag from '../lib/gtag'

import 'antd/dist/antd.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/global.css';

import { GA_TRACKING_ID } from '../api/constants';

function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])
  return (
    <>
      <Head>
        <script data-ad-client="ca-pub-7870915756691193" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var disqus_config = function () {
                this.page.url = window.location.href;
                this.page.identifier = window.location.pathname;
              };
              (function() { // DON'T EDIT BELOW THIS LINE
                var d = document, s = d.createElement('script');
                s.src = 'https://peleja.disqus.com/embed.js';
                s.setAttribute('data-timestamp', +new Date());
                (d.head || d.body).appendChild(s);
              })();
        `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w, d){
            var id='embedly-platform', n = 'script';
            if (!d.getElementById(id)){
              w.embedly = w.embedly || function() {(w.embedly.q = w.embedly.q || []).push(arguments);};
              var e = d.createElement(n); e.id = id; e.async=1;
              e.src = ('https:' === document.location.protocol ? 'https' : 'http') + '://cdn.embedly.com/widgets/platform.js';
              var s = d.getElementsByTagName(n)[0];
              s.parentNode.insertBefore(e, s);
            }
            })(window, document);
        `,
          }}
        />
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
