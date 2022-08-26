import React from 'react';
import Lottie from 'react-lottie';

interface LottiePlayerProps {
    animationData: any;
    loop?: boolean;
    autoplay?: boolean;
    pause?: boolean; // this is to control play/pause
    stop?: boolean; // this is to control start/stop
    height?: number;
    width?: number;
    speed?: number;
}

const LottiePlayer = ({
    animationData,
    loop,
    autoplay,
    pause,
    stop,
    height,
    width,
    speed,
}: LottiePlayerProps) => {
    
    const defaultOptions: any = {
        loop,
        autoplay,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    if (height) {
        defaultOptions.height = height;
    }
    if (width) {
        defaultOptions.width = width;
    }
    
    return (
        <Lottie
            options={defaultOptions}
            isStopped={stop}
            isPaused={pause}
            speed={speed}
        />
    );
};

LottiePlayer.defaultProps = {
    loop: true,
    autoplay: true,
    pause: false,
    stop: false,
    speed: 0.8,
};

export default LottiePlayer;
