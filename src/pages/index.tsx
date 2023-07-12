import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { NextPageAuth } from '@/providers/authProviders/types'
import Meta from '@/ui/meta/meta'

const inter = Inter({ subsets: ['latin'] })
const Home:NextPageAuth =()=> {
  return (
    <Meta title = "Main Page">
      <main >
        Hello
      </main>
      </Meta>

  )
}

export default Home
