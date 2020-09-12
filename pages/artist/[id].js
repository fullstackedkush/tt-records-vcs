import styled from "styled-components";
import { useRouter } from 'next/router'

const ContainerWrapper = styled.div`
  max-width: 1140px;
  padding: 0 1rem;
  margin: 1rem auto 80px;
`

const Artist = ()  => {
    const router = useRouter()
    const { id } = router.query

   return (
        <>
            <p>
                {id}
            </p>

            <p>
                yeet
            </p>

            </>
    )
}




export default Artist;
