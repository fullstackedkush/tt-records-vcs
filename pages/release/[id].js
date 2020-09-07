import Head from 'next/head'
import Nav from "../../components/Nav";
import Overlay from "../../components/Nav/Overlay";
import Video from "../../components/Posts/Video";
import FooterWrapper from "../../components/Footer";
import styled from "styled-components";
import { useRouter } from 'next/router'
import {initializeApollo} from "../../utilites";
import {GetPostDocument, GetPostsDocument} from "../../schema";

const FeaturedRelease = styled.header`

display: flex;
justify-content: center;
align-content: center;
flex-direction: column;

.release__category {
    display: inline-block;
    position: relative;
    margin-right: 16px;
    font-family: 'Nimbus Sans L';
    font-size: 14px;
    letter-spacing: -0.42px;
    line-height: 21px;
}

.release__category:after {
    content: "\u25AA";
    display: inline-block;
    color: black;
    position: absolute;
    right: -10px;
    font-size: 10px;
    top: -1px;
}

.content__container {
    border-top: 1px solid #111;
    border-bottom: 1px solid #111;
    padding-top: 30px;
    padding-bottom: 30px;
}

.desktop-bandcamp {
    display: none;
}

.image__container img {
    padding: 15px;
}

@media screen and (min-width: 1100px) {
    .image__container img {
        max-width: 646px;
    }
}

.image__container {
position: relative;
display: flex;
align-content: center;
justify-content: center;
}

.date {
    font-family: 'Nimbus Sans L';
    font-size: 14px;
    letter-spacing: -0.42px;
    line-height: 21px;
}

h1.title {
    font-family: 'Nimbus Sans L';
    font-size: 32px;
    letter-spacing: -0.96px;
    line-height: 38px;
    font-weight: bold;
}

h2 {
    font-family: 'Nimbus Sans L';
    font-size: 34px;
    letter-spacing: -0.84px;
    line-height: 34px;
    font-weight: normal;
}

.content__container {
    display: flex;
    flex-direction: column;
    text-align: center;
}

@media only screen and (min-width: 1000px) {

    .content__container {
        position: relative;
    }

    flex-direction: row;

    .desktop-bandcamp {
        display: block;
    }

    .desktop-bandcamp {
        font-family: 'Nimbus Sans L';
        font-size: 28px;
        letter-spacing: -0.84px;
        line-height: 42px;
        font-weight: bold;
        position: absolute;
        bottom: 10px;
        left: calc(50% - 115px);
    }

    .desktop-bandcamp a {
        text-decoration: none;
        color: #111;
    }

    .image__container {
        width: 50%;
        border-top: 1px solid #111;
        border-bottom: 1px solid #111;
    }

    .content__container {
        width: 50%;
        display: flex;
        align-content: center;
        justify-content: center;
    }

    .content__container .bandcamp {
        display: none;
    }
    .content__container {
        border-right: 1px solid #111;
        border-bottom: 1px solid #111;
    }

    .date {
        font-family: 'Nimbus Sans L';
        font-size: 18px;
        letter-spacing: -0.54px;
        line-height: 27px;
    }

    h1.title {
        font-family: 'Nimbus Sans L';
        font-size: 56px;
        letter-spacing: -1.68px;
        line-height: 67px;
        font-weight: bold;
    }

    h2 {
        font-family: 'Nimbus Sans L';
        font-size: 48px;
        letter-spacing: -1.44px;
        line-height: 58px;
        font-weight: normal;
    }

    .release__category {
        font-family: 'Nimbus Sans L';
        font-size: 18px;
        letter-spacing: -0.54px;
        line-height: 27px;
    }

}

`

const MobileBandcamp = styled.div`


        font-family: 'Nimbus Sans L';
        font-size: 24px;
        letter-spacing: -0.72px;
        line-height: 38px;
        font-weight: bold;
        padding-top: 20px;
        padding-bottom: 20px;
        border-top: 1px solid #111;
        border-bottom: 1px solid #111;
        text-align: center;


     a {
        text-decoration: none;
        color: #111;
    }

    @media only screen and (min-width: 1000px) {
            display: none;
    }

`

const TracklistContainer = styled.div`

.tracklist {
    padding-top: 18px;
    padding-bottom: 18px;
    border-top: 1px solid #111;
}



.tracklist .container {
    margin-bottom: 0;
}

.no-margin {
    margin-bottom: 0 !important;
}

.tracklist h2 {
    font-family: 'Nimbus Sans L';
    font-size: 24px;
    letter-spacing: -0.72px;
    line-height: 36px;
    margin-bottom: 24px;
    font-weight: bold;  
}

.credits p {
    font-family: 'Nimbus Sans L';
    font-size: 14px;
    letter-spacing: -0.42px;
    line-height: 24px;
}

.credits {
    margin-bottom: 24px;
}

ul.tracklist__selection {
    margin-bottom: 24px;
}

ul.tracklist__selection li {
    font-family: 'Nimbus Sans L';
    font-size: 18px;
    letter-spacing: -0.54px;
    line-height: 27px;
    font-weight: bold;  
    margin-bottom: 4px;
}

.featured__release__description {
    margin-top: 30px;
}

.featured__release__description p.lead {
    font-family: 'Nimbus Sans L';
    font-size: 22px;
    letter-spacing: -0.66px;
    line-height: 33px;
    margin-bottom: 20px;
    font-weight: bold;  
}

.featured__release__description p {
    font-family: 'Nimbus Sans L';
    font-size: 16px;
    letter-spacing: -0.48px;
    line-height: 24px;
    margin-bottom: 32px;
    font-weight: bold;     
}

@media only screen and (min-width: 1000px) {
    
    display: flex;
    max-width: 1140px;
    margin: 1rem auto;
    margin-bottom: 1rem;
    padding: 0 1rem;
    padding-top: 1rem;
    padding-bottom: 2rem;

    .tracklist {
        border-top: none;
        width: 45%;
        padding-left: 80px;
    }

    .tracklist h2 {
        font-family: 'Nimbus Sans L';
        font-size: 28px;
        letter-spacing: -0.84px;
        line-height: 48px;
        font-weight: bold;  
    }

    .featured__description__container {
        width: 55%;
        border-right: 1px solid #111;
        padding-right: 80px;
    }
}

`

const VideoComponentContainer = styled.div`

    border-top: 1px solid #111;
    border-bottom: 1px solid #111;

    .releases__video {
        border-top: 1px solid #111;
        border-bottom: 1px solid #111;
        padding-top: 15px;
        padding-bottom: 6px;
    }
    
    .releases__video.component::after {
        display: none;
    }

    .tracklist {
        border-top: none;
        width: 45%;
        padding-left: 80px;
    }

    @media only screen and (min-width: 1000px) {

    .video__component {
        border-right: 1px solid #111;
        border-left: 1px solid #111;
        padding-right: 40px;
        padding-left: 40px;
    }

    }

`





const Release = ({id, title})  => {

    return (
        <>
            <Head>
                <title>TT records | Homepage</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav></Nav>
            <Overlay/>

    <FeaturedRelease>
		 
         <div class="content__container">
             <div class="release__container">
                 <p class="release__category">Digital</p>
                 <date class="date">Released March 20th 2020</date>
             </div>
         <h1 class="title">{title}</h1>
         <h2>Joanna Pope</h2>   
         <div class="desktop-bandcamp"><a href="#">Buy on Bandcamp</a></div>       
         </div>
 
         <div class="image__container"><img src="https://media.graphcms.com/op8Om5jgSAGE614eviRI" alt="" /></div>
        
    </FeaturedRelease>
    
    <MobileBandcamp><a href="#">Buy on Bandcamp</a></MobileBandcamp>
        <TracklistContainer>
             <section class="container no-margin featured__description__container">
                 <section class="featured__release__description">
                     <p class="lead">Debuting on TT, ‘Fantasias for Lock-In’ is Joanna Pope’s first release. This EP offers an eco-anxious variant of cheapcore and melodic noise.</p>
                     <p>Foley–heavy worldbuilding is mostly avoided. Respects are paid instead to the orchestral preset and the sentimental harmonies that score sandbox gameplay and mass- market fantasy universes.</p>
                     <p>Joanna Pope is an Australian-German researcher and writer. This music was made during a period of research into badly rendered ecomodernist futures, and the alternatives to these that degrowth might provide.</p>
                 </section>
             </section>
             <section class="tracklist">
                 <section class="container">
                     <h2>Tracklist</h2>
                     <ul class="tracklist__selection">
                         <li>1. Terraforming Accident</li>
                         <li>2. Angels of Growth</li>
                         <li>3. World Society 2</li>
                     </ul>
                     <div class="credits">
                         <p>All tracks written and recorded by Joanna Pope</p>
                         <p>Artwork by Sam Lubicz</p>
                     </div>
                 </section>
             </section>
        </TracklistContainer>

         <VideoComponentContainer>

             <section class="video__component component releases__video container no-margin">
                <Video></Video>
             </section>

        </VideoComponentContainer>

        <FooterWrapper/>
        </>
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
