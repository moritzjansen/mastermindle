import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Mastermindle' }: Props) => (
  <div className='flex flex-col justify-start h-full bg-gradient-to-br from-slate-200 to to-slate-400'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <h1 className='font-bold text-3xl text-center text-ca py-4 font-'>MASTERMINDLE</h1>
    </header>
    {children}
  </div>
)

export default Layout
