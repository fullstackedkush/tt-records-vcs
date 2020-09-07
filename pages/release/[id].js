import styled from "styled-components";
import { useRouter } from 'next/router'
import {initializeApollo} from "../../utilites";
import {GetPostDocument, GetPostsDocument} from "../../schema";

const ContainerWrapper = styled.div`
  max-width: 1140px;
  padding: 0 1rem;
  margin: 1rem auto 80px;
`

const Release = ({id, title})  => {

    return (
        <ContainerWrapper>
            {title}
        </ContainerWrapper>
    )
}



export async function getStaticProps({ params }) {
    const apolloClient = initializeApollo();

    const { data: { post } } = await apolloClient.query({
        query: GetPostDocument,
        variables: {
            id: params.id,
        }
    })

    return { props: { ...post }, revalidate: 1 }
}


export async function getStaticPaths() {
    const apolloClient = initializeApollo();

    const {data: { posts }} = await apolloClient.query({
        query: GetPostsDocument,
        variables: {
            where: {
                category: 'release'
            }
        }
    });

    const paths = posts.map(v => `/release/${v.id}`)

    return { paths, fallback: false }
}

export default Release;
