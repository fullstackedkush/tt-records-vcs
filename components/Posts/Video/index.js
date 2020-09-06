import styled from "styled-components";

const VideoContainer = styled.section`
    position: relative;
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

const Video = () => {
    
    return <VideoContainer>

    <video controls
    src="https://media.graphcms.com/3L8GNmIESqW6Y4PhefW8"
    poster="https://media.graphcms.com/IFzNniGhRRi5cPqeARVa" class="video">

    Sorry, your browser doesn't support embedded videos, but don't worry, you can
    <a href="https://archive.org/details/BigBuckBunny_124">download it</a> 
    and watch it with your favorite video player!

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
                <h2 className="title">Betablockers</h2>
                <h2 className="subtitle">Symrun</h2>
            </div>
        </div>
    </div>
</VideoContainer>
}

export default Video