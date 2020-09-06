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

const ContainerWrapper = styled.div`
  max-width: 1140px;
  margin: 1rem auto;
  margin-bottom: 1rem;
  padding: 0 1rem;
  margin-bottom: 80px;
`

export default function Home() {
  return (
    <>
      <Head>
        <title>TT records homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
        <Nav>
          <form>
            <label>
                <input type="radio" value="releases" name="filter" />
                Releases
                <span></span>
            </label>

            <label>
                <input type="radio" value="video" name="filter" />
                Video
                <span></span>
            </label>


            <label>
                <input type="radio" value="editorial" name="filter" />
                Editorial
                <span></span>
            </label>

            <label>
                <input type="radio" value="events" name="filter" />
                Events
                <span></span>
            </label>

            <label>
                <input type="radio" value="radio" name="filter" />
                Radio
                <span></span>
            </label>

            <label>
                <input type="radio" value="all" name="filter" />
                All
                <span></span>
            </label>
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

        <Radio></Radio>
        <Editor></Editor>
        <Releases></Releases>
        <Event></Event>
        <Video></Video>

      </ContainerWrapper>
      <FooterWrapper></FooterWrapper>
    </>
  )
}
