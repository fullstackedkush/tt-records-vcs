import styled from "styled-components";

const FullContainer = styled.div`
position: relative;
padding-bottom: 38px;
margin-bottom: 38px;

@media only screen and (min-width: 800px) {
    margin-bottom: 59px;
}

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

const VideoWrapper = styled.section`

    video {
        width: 100%;
        height: auto;
        position: relative;
    }

    h2.title {
        font-family: 'Nimbus Sans L';
        font-weight: bold;
        font-size: 24px;
        letter-spacing: -0.72px;
        line-height: 29px;
    }

    h2.subtitle {
        font-family: 'Nimbus Sans L';
        font-weight: bold;
        font-size: 20px;
        letter-spacing: -0.6px;
        line-height: 24px;
    }

    .play__button {
        font-family: 'Nimbus Sans L';
        font-weight: bold;
        font-size: 18px;
        letter-spacing: -0.54px;
        line-height: 27px;
    }

    .video__description {
        position: absolute;
        top: calc(50% - 84px);
        left: 20px;
        z-index: 999;
        color: white;
        display: flex;
        flex-direction: row;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        align-content: center;
        justify-content: center;
        cursor: pointer;
    }

    span:after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 49px;
        left: 0;
        background-image: url(../img/square-bg-spaced.png);
        min-width: 100%;
    }

    .video__description.hide {
        visibility: hidden;
        opacity: 0;
      }
      .video__description {
        visibility: visible;
        opacity: 1;
        transition: visibility 0s, opacity 0.5s linear;
      }

      video.hide .playButton {
          display: none !important;
      }


    .video__inner__description {
        color: white;
        width: 604px;
        display: flex;
        justify-content: center;
        z-index: 999;
    }

    .detail__container {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .video__description .play__video {
        min-width: 30%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .play__circle {
        width: 50%;
        border-radius: 50%;
        line-height: 0;
        background: transparent;
        position: relative;
        border: 1px solid white;
        width: 82px;
    }

      .play__circle:after {
        content: "";
        display: block;
        padding-bottom: 100%;
      }
      .play__txt {
        position: absolute;
        bottom: calc(50% - 15px);
        width: 100%;
        text-align: center;
        font-family: 'Nimbus Sans L';
        font-weight: bold;
        font-size: 12px;
        letter-spacing: -0.36px;
        line-height: 27px;
      }

      .clickToPlay {
          display: none !important;
      }

      @media only screen and (min-width: 800px) {
        .play__circle {
            width: 165px;
        }

        .play__txt {
            font-size: 18px;
            letter-spacing: -0.54px;
        }

        h2.detail__title {
            font-size: 24px;
            letter-spacing: -0.72px;
            line-height: 36px;
        }

        h2.title {
            font-size: 48px;
            letter-spacing: -1.44px;
            line-height: 64px;
        }

        h2.subtitle {
            font-size: 41px;
            letter-spacing: -0.96px;
            line-height: 41px;
        }
    
        p.play__button {
            font-size: 18px;
            letter-spacing: -0.54px;
            line-height: 27px;
        }

        .video__inner__description {
            justify-content: space-between;
        }
    }
`

const CompactContainer = styled.div`

    min-width: 100%;
    margin-bottom: 0;

    .text__container {
        display: flex;
        flex-direction: column;   
        justify-content: space-between;
        min-width: 100%;
        align-content: center;
        padding-bottom: 10px;   
        margin-left: 0;

        @media only screen and (min-width: 1000px) {
            flex-direction: row;  
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

const Video = ({title, subtitle, image, view, link, publishedDate }) => {
    
    return <VideoWrapper>
{view === 'full' ? (
    <FullContainer>
        <video controls
        src={link}
        poster={image.url} className="video">

        </video>

        <div className="video__description">
            <div className="video__inner__description">
                <div className="play__video">
                    <div className="play__circle">
                        <div className="play__txt">Play Video</div>
                    </div>
                </div>
                <div className="detail__container">
                    <h2 className="detail__title">Official Video</h2>
                        <h2 className="title">{title}</h2>
                        <h2 className="subtitle">{subtitle}</h2>
                </div>
            </div>
        </div>
    </FullContainer>
    ) : (
    <CompactContainer>
            <div className="text__container">
                <h2 className="subtitle">{subtitle}</h2>
                <h2 className="title">{title}</h2>
                <div className="content__container">
                    <p className="category category__mobile">Video</p>
                    <date className="date">Added {publishedDate}</date>
                    <p className="category category__desktop">Video</p>
                </div>
            </div>
        </CompactContainer>
    )}
</VideoWrapper>
}

export default Video