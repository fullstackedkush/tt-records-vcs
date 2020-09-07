import styled from "styled-components";

const Marquee = styled.div`
    overflow: hidden;
    position: relative;


    &:before {
    content: '\00a0';
    }

    .scrolling {
    animation: marquee 10s linear infinite;
    display: block;
    min-width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    white-space: nowrap;
    }

    @keyframes marquee {
    from {
    transform: translateX(100%);
    }
    to { 
    transform: translateX(-100%);
    }
    }
`

const MarqueeScroll = ({ title, children, props }) => (

    <Marquee bg={'#111'}>
        <div className="scrolling">{ children }</div>
    </Marquee>
);

export default MarqueeScroll;


