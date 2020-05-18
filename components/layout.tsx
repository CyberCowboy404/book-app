import Head from 'next/head'
import Header from './header'
import Navigation from './navigation'
import Link from 'next/link'

export default function Layout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <Navigation></Navigation>
            <main>{children}</main>
            <footer></footer>
        </div>
    )
}