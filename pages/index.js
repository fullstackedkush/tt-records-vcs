import Head from 'next/head'
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Overlay from "../components/Nav/Overlay";
import Radio from "../components/Posts/Radio";
import Editor from "../components/Posts/Editor";
import Releases from "../components/Posts/Releases";
import Event from "../components/Posts/Event";
import Video from "../components/Posts/Video";
import FooterWrapper from "../components/Footer";
import styled from "styled-components";
import {GetPostsDocument, useGetPostsQuery} from "../schema";
import {initializeApollo} from "../utilites";

const ContainerWrapper = styled.div`
  max-width: 1140px;
  padding: 0 1rem;
  margin: 1rem auto 80px;
`

const Home = ()  => {
    const {data, loading, refetch} = useGetPostsQuery()

    const changeCategory = (e) => {
        const {value} = e.target;
        refetch({
            where: {
                ...(value !== 'all' ? {
                    category: value
                } : {})
            }
        })
    }

    const filters = [
        {
            value: 'release',
            label: 'Releases',
        },
        {
            value: 'video',
            label: 'Video',
        },
        {
            value: 'editorial',
            label: 'Editorial',
        },
        {
            value: 'event',
            label: 'Events',
        },
        {
            value: 'radio',
            label: 'Radio',
        },
        {
            value: 'all',
            label: 'All',
        }
    ]


    if(!data || loading) return <>Loading</>
console.log(data)
    return (
        <>
            <Head>
                <title>TT records | Homepage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav>
                <form>
                    {filters.map(v => (
                        <label key={v.value}>
                            <input type="radio" value={v.value} name="filter" onChange={changeCategory} />
                            {v.label}
                            <span/>
                        </label>
                    ))}
                </form>
            </Nav>
            <Hero title="London Record Label & Occasional Function. Extra Text to bring it to a 2nd line.">
                <div className="info__option">
                    <p>View in:</p>
                    <ul>
                        <li className="full"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="14" height="14" fill="white"/></svg>Full</li>
                        <li className="compact"><svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="14" height="2" fill="white"/><rect y="4" width="14" height="2" fill="white"/><rect y="8" width="14" height="2" fill="white"/><rect y="12" width="14" height="2" fill="white"/></svg>Compact</li>
                    </ul>
                </div>
            </Hero>
            <Overlay></Overlay>
            <ContainerWrapper>
                {data.posts.map(v => (
                    <>
                        {v.category === 'radio' && (
                            <Radio {...v} key={v.id}/>
                        )}
                        {v.category === 'editorial' && (
                            <Editor {...v} key={v.id}/>
                        )}
                        {v.category === 'release' && (
                            <Releases {...v} key={v.id}/>
                        )}
                        {v.category === 'event' && (
                            <Event {...v} key={v.id}/>
                        )}
                        {v.category === 'video' && (
                            <Video {...v} key={v.id}/>
                        )}
                    </>
                ))}
            </ContainerWrapper>
            <FooterWrapper></FooterWrapper>
        </>
    )
}


export async function getStaticProps() {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: GetPostsDocument,
    })

    return {
        props: {
            initialApolloState: apolloClient.cache.extract(),
        },
        revalidate: 1,
    }
}



export default Home;
