import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <script src="https://kit.fontawesome.com/a3dd942b24.js" crossOrigin="anonymous"></script>
    </Head>
   
    {children}
    <footer className="p-4 bg-white shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://www.linkedin.com/in/anastasiia-kudriavtseva/" className="hover:underline">Kudriavtseva</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
       
        <li>
            <a href="https://github.com/proxrustes" className="mr-4 hover:underline md:mr-6">Github</a>
        </li>
        <li>
            <a href="https://www.instagram.com/leider_doch" className="hover:underline">Instagram</a>
        </li>
    </ul>
</footer>
  </div>
)

export default Layout
