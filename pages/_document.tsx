/*
  AUTHOR: Diego Salas Noain
  FILENAME: _document.tsx
  SPECIFICATION: 
    - Configures the header files of the retrieved html
  FOR: CS 5364 Information Retrieval Section 001 
*/

import { Html, Head, Main, NextScript } from 'next/document'

/*
  NAME: Document
  PARAMETERS: None
  PURPOSE: add global styles to the web application
  PRECONDITION: None
  POSTCONDITION: Styles are applied
*/

function Document() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" />
        <link href="https://fonts.googleapis.com/css?family=Work+Sans:200,400&display=swap" rel="stylesheet"></link>
      </Head>
      <body className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document