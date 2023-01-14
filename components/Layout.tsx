import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { colorStrings } from '../constants/colors'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'Mastermindle' }: Props) => (
  <div className='flex flex-col justify-start min-h-[100dvh] bg-slate-200'>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="The wordle like color guessing game bigbraindle, where the user has to guess a sequence of four out of seven colors."></meta>
    </Head>
    <header className='text-center'>
      <h1 className={'font-bold text-3xl text-slate-900 sm:text-7xl sm:mt-5 sm:mb-2 py-2'}>BIGBRAINDLE</h1>
    </header>
    <main className='max-w-[325px] sm:max-w-[410px] px-4 w-full mx-auto flex flex-col flex-grow overflow-hidden'>
      {children}
    </main>
  </div>
)

export default Layout
