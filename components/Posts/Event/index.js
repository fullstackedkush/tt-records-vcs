import styled from "styled-components";

const EventWrapper = styled.section`
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

    img {
        max-width: 418px;
    }
}

    .text__container {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;

        p.text {
            font-family: 'Nimbus Sans L';
            font-weight: regular;
            font-size: 16px;
            letter-spacing: -0.48px;
            line-height: 24px;
        }
    }
    
    .subtitle {
        font-family: 'Nimbus Sans L';
        font-weight: regular;
        font-size: 32px;
        letter-spacing: -0.96px;
        line-height: 48px;
    }
    .title {
        font-family: 'Nimbus Sans L';
        font-weight: bold;
        font-size: 38px;
        letter-spacing: -1.14px;
        line-height: 45px;
    }
    .content__container {
        position: relative;
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

    date {
        display: inline-block;
    }

    @media only screen and (min-width: 800px) {
        .text__container {
            flex-direction: column;
            align-content: center;
            justify-content: center;
            margin-left: 70px;
        }        
    }
`

const Event = () => {
    return <EventWrapper>
    <div class="image__container">
        <img src="https://media.graphcms.com/thtBariSoCmqB6SjNis4" alt="tt and nts album" />
    </div>
    <div class="text__container">
        <div class="content__container">
            <p class="category">Event</p>
            <date class="date">Added March 20th 2020</date>
        </div>
        <h2 class="title">Thammudu & Mishti - Matters of Ascension Release Party</h2>
        <p class="text">Join us in the Four Quarters basement to celebrate the release of 'Matters of Ascension' by Thammudu and Mishti.</p>
    </div>
    </EventWrapper>
}

export default Event
