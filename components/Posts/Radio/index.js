import styled from "styled-components";

const Wrapper = styled.section`
position: relative;

margin-bottom: 38px;

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
`

const FullContainer = styled.div`

@media only screen and (min-width: 800px) {
    margin-bottom: 59px;
}

@media only screen and (min-width: 800px) {
    display: flex;
}

    .text__container {
        display: flex;
        flex-direction: column;
        align-content: center;
        justify-content: center;
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
const ImageContainer = styled.div`
.play {
    display: none;
}

@media only screen and (min-width: 800px) {
    max-width: 418px;
    .play {
        position: absolute;
        top: calc(50% - 37.5px);
        left: 10px;
        background: white;
        border: 1px solid white;
        display: block;
    }
}


`

const CompactContainer = styled.div`

    min-width: 100%;


    .text__container {
        display: flex;
        flex-direction: column;   
        justify-content: space-between;
        min-width: 100%;
        align-content: center;
        padding-bottom: 10px;

        @media only screen and (min-width: 1000px) {
            flex-direction: row;  
            margin-top: 30px;
            padding-bottom: 0;
        }
    }

    h2.subtitle {
        font-size: 24px;
        line-height: 14px;
        font-family: 'Nimbus Sans L';
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -0.96px;
        line-height: 32px;
    }

    h2.title {
        font-size: 24px;
        line-height: 14px;
        font-family: 'Nimbus Sans L';
        font-weight: 400;
        font-size: 24px;
        letter-spacing: -0.96px;
        line-height: 32px;
        margin-bottom: 8px;

        @media only screen and (min-width: 1000px) {
            display: flex;
            align-content: center;
            justify-content: center;
        }
    }

    .content__container {
        font-size: 12px;
        line-height: 14px;
        position: relative;
    }

    .category {
        font-family: 'Nimbus Sans L';
        font-weight: 400;
        font-size: 16px;
        letter-spacing: -0.48px;
        line-height: 24px;
        display: inline-block;
        background: #111;
        color: white;
        padding: 0 3px;
        position: relative;
        margin-right: 10px;

        &:before {
            content: "\u25AA";
            display: inline-block;
            color: black;
            position: absolute;
            left: -10px;
        }
    }

    .category__mobile {     
        display: inline-block;
        margin-right: 18px;


        &:after {
            content: "\u25AA";
            display: inline-block;
            color: black;
            position: absolute;
            right: -10px;
        }

        &:before {
            display: none;
        }
    }

    .category__desktop {
        display: none;

        &:after {
            display: none;
        }
    }

    @media only screen and (min-width: 1000px) {
        .category__desktop {
            display: inline-block;
        }

        .category__mobile {
            display: none;
        }
    }

    date {
        display: inline-block;
        font-size: 16px;
        margin-right: 14px;
    }


`

const Radio = ({title, subtitle, image, view }) => {
    return <Wrapper>
        {view === 'full' ? (
        <FullContainer>
            <ImageContainer>
                {image && (
                    <img src={image.url} alt={title} />
                )}
                <svg className="play" width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 75V37.5V0H37.5H75V37.5V75H37.5H0ZM27 51L54 37.5L27 24V51Z" fill="#111111"/></svg>
            </ImageContainer>
            <div className="text__container">
                <h2 className="subtitle">{subtitle}:</h2>
                <h2 className="title">{title}</h2>
                <div className="content__container">
                    <p className="category">Radio</p>
                    <date className="date">Added March 20th 2020</date>
                </div>
            </div>
        </FullContainer>
        ) : (
        <CompactContainer>
            <div className="text__container">
                <h2 className="subtitle">On NTS:</h2>
                <h2 className="title">TT W/ DJ PITCH, GRIBS AND KAMAAHSHATEE</h2>
                <div className="content__container">
                    <p className="category category__mobile">Radio</p>
                    <date className="date">Added March 20th 2020</date>
                    <p className="category category__desktop">Radio</p>
                </div>
            </div>
        </CompactContainer>
        )}
    </Wrapper>
};

export default Radio;
