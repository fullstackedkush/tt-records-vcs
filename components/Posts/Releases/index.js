import styled from "styled-components";

const ReleaseWrapper = styled.section`
position: relative;
margin-bottom: 59px;

&:after {
    content: "";
    background: url('data:image/svg+xml;utf8,<svg width="332" height="1" viewBox="0 0 332 1" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.14474 0.5H331.145" stroke="black" stroke-linecap="square" stroke-dasharray="1 2"/></svg>');
    min-width: 100%;
    display: block;
    height: 20px;
    background-repeat: repeat-x;
    margin-top: 30px;
    position: absolute;
    left: 0;
    bottom: -30px;
}

@media only screen and (min-width: 800px) {
    display: flex;
}

.image__container {
    position: relative;
    @media only screen and (min-width: 800px) {
        max-width: 418px;
    }
}

.text__container {
    @media only screen and (min-width: 800px) {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        margin-left: 70px;
    }
}

@media only screen and (min-width: 1000px) {
    .content__container {
        position: relative;
    }
}

h2.title {
    font-family: 'Nimbus Sans L';
    font-weight: bold;
    font-size: 38px;
    letter-spacing: -1.14px;
    line-height: 45px;
}

h2.subtitle {
    font-family: 'Nimbus Sans L';
    font-weight: regular;
    font-size: 28px;
    letter-spacing: -0.84px;
    line-height: 33px;
}

p.text {
    font-family: 'Nimbus Sans L';
    font-weight: regular;
    font-size: 16px;
    letter-spacing: -0.48px;
    line-height: 24px;
}


.category {
    font-family: 'Nimbus Sans L';
    font-weight: bold;
    font-size: 16px;
    letter-spacing: -0.48px;
    line-height: 24px;
    display: inline-block;
    background: #111;
    color: white;
    padding: 0 3px;
    position: relative;
    margin-right: 10px;

    &:after {
        content: "\u25AA";
        display: inline-block;
        color: black;
        position: absolute;
        right: -10px;
        font-size: 10px;
    }
}

.date {
    display: inline-block;
}

`

const Releases = () => {
    return <ReleaseWrapper>
    <div class="image__container">
        <img src="https://media.graphcms.com/MikSrCwRayAXa89yrJvF" alt="tt and nts album" />
    </div>
    <div class="text__container">
        <div class="content__container">
            <p class="category">Release</p>
            <date class="date">Added March 20th 2020</date>
        </div>
        <h2 class="title">Matters of Ascension</h2>
        <h2 class="subtitle">by Thammudu & Mishti</h2>
        <p class="text">Sonically haunted by the ghostly remains of identity, the project questions the potential and limitations of spirituality to leverage material reality. Released February 28, 2020</p>
        <iframe width="100%" height="60" src="https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&feed=%2Ftobagotracks%2Fttm057-cvn%2F"></iframe>
    </div>
    </ReleaseWrapper>
}

export default Releases
