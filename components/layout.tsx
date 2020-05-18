import Head from 'next/head'
import Header from './header'
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
            <main>{children}</main>
            <footer></footer>
        </div>
    )
}