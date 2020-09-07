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



export async function getServerSideProps({ params, res }) {
    const apolloClient = initializeApollo();

    const release = await apolloClient.query({
        query: GetPostDocument,
        variables: {
            id: params.id,
        }
    })

    const { data: { post } } = release;

    if (!post) {
        res.statusCode = 404
        res.end('Not found')
        return
    }

    return { props: { ...release.data.post } }
}


export default Release;
