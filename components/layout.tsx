import Head from 'next/head'
import Link from 'next/link'

import Header from './common/header'
import Navigation from './common/navigation'
import Footer from './common/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <Navigation></Navigation>
            <main>{children}</main>
            <Footer></Footer>
        </div>
    )
}