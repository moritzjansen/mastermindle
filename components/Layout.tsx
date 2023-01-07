import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Mastermindle' }: Props) => (
  <div className='flex flex-col justify-start h-full bg-gradient-to-b from-slate-300 to to-slate-100'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header className='text-center'>
      <h1 className='font-bold text-3xl text-ca py-2 font-'>MASTERMINDLE</h1>
    </header>
    <main className='max-w-[297px] min-w-[297px] my-0 mx-auto flex flex-col flex-grow'>
      {children}
    </main>
  </div>
)

export default Layout
