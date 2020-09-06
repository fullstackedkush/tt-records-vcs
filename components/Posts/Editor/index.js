import styled from "styled-components";

const Wrapper = styled.section`
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

    h2.subtitle {
        font-family: 'Nimbus Sans L';
        font-weight: regular;
        font-size: 32px;
        letter-spacing: -0.96px;
        line-height: 48px;
    }

    h2.title {
        font-family: 'Nimbus Sans L';
        font-weight: bold;
        font-size: 48px;
        letter-spacing: -1.14px;
        line-height: 45px;
    }

    @media only screen and (min-width: 1000px) {
        .content__container {
            position: relative;
        }
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
        }
    }

    .date {
        display: inline-block;
    }
`

const Editor = () => {
    return <Wrapper>
    <div class="text__container">
        <h2 class="subtitle">The Quietus Reviews:</h2>
        <h2 class="title">Thammudu & Mishti - MATTERS OF ASCENSION</h2>
        <div class="content__container">
            <p class="category">Editor</p>
            <date class="date">Added June 27th 2019</date>
        </div>
    </div>
</Wrapper>
}

export default Editor