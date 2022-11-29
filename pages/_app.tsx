/*
  AUTHOR: Diego Salas Noain
  FILENAME: _app.tsx
  SPECIFICATION: 
    - Displays a page based on the route
  FOR: CS 5364 Information Retrieval Section 001 
*/

import PageWithLayoutType from '../components/layout/types/page-with-layout-type'
import '../styles/globals.css'

type AppLayoutProps = {
  Component: PageWithLayoutType
  pageProps: any,
}

/*
  NAME: App
  PARAMETERS: Component, pageProps
  PURPOSE: Functional component that renders all pages
  PRECONDITION: None
  POSTCONDITION: A page is returned
*/

function App({ Component, pageProps }: AppLayoutProps) {
  const Layout = Component.layout || (() => <Component {...pageProps} />)

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default App;