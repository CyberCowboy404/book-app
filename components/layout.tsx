import Head from 'next/head'
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
                
                {/* TODO: create configurable meta tags
                <meta
                    name="description"
                    content=""
                />
                <meta
                    //todo, add configurable meta tags
                    property="og:image"
                />    
                
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
                 */}
            </Head>
            <header>
                
            </header>
            <main>{children}</main>
        </div>
    )
}