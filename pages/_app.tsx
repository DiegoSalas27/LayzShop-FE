import PageWithLayoutType from '../components/layout/types/page-with-layout-type'
import '../styles/globals.css'

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any,
}

function App({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || (() => <Component {...pageProps} />)

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default App;