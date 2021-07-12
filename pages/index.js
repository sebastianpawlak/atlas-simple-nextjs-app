import Head from 'next/head'
import { getApolloClient, getPosts } from '@wpengine/headless';

export default function Home({ data }) {
    return (
        <div>
            <Head>
                <title>ATLAS Headless Simple Next.js App</title>
            </Head>
            <section className="container">
                <h1>ATLAS Headless Simple Next.js App</h1>
                <h3>Posts from Wordpress</h3>
                <ul>
                    {data && data.map(({id, title, excerpt}) => (
                        <li key={id}>
                            <h4>{title}</h4>
                            <div
                                // eslint-disable-next-line react/no-danger
                                dangerouslySetInnerHTML={{ __html: excerpt ?? '' }}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

export async function getServerSideProps() {
    const client = getApolloClient();
    const data = await getPosts(client);

    // Pass data to the page via props
    return { props: { data: data?.nodes || [] } }
}