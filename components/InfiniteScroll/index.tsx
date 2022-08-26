import React, { useEffect, useState } from 'react';

import { NextImageSrc, windowDimensionsTypes } from '@utils/types';
import useWindowDimensions from '@utils/useWindowDimensions';
import { WINDOW_SIZE } from '@utils/windowSize';
import Image from '../Images';

import styles from './styles.module.scss';

// in case of single track, send same data in trackOnePartnersLogo & mobileTrackOnePartnersLogo and isOneTrack true

interface InfiniteScrollProps {
    trackOnePartnersLogo: NextImageSrc[];
    trackTwoPartnersLogo?: NextImageSrc[];
    trackThirdPartnersLogo?: NextImageSrc[];
    mobileTrackOnePartnersLogo: NextImageSrc[];
    mobileTrackTwoPartnersLogo?: NextImageSrc[];
    mobileTrackThreePartnersLogo?: NextImageSrc[];
    mobileTrackFourPartnersLogo?: NextImageSrc[];
    mobileTrackFifththPartnersLogo?: NextImageSrc[];
    isOneTrack?: boolean;
}

const InfiniteScroll = (props: InfiniteScrollProps) => {
    const {
        trackOnePartnersLogo,
        trackTwoPartnersLogo,
        trackThirdPartnersLogo,
        mobileTrackOnePartnersLogo,
        mobileTrackTwoPartnersLogo,
        mobileTrackThreePartnersLogo,
        mobileTrackFourPartnersLogo,
        mobileTrackFifththPartnersLogo,
        isOneTrack,
    } = props;

    const [windowWidth, setWindowWidth] = useState<number>(0);

    const windowDimensions: windowDimensionsTypes = useWindowDimensions();

    useEffect(() => {
        if (windowDimensions.width) {
            setWindowWidth(windowDimensions.width);
        }
    }, [windowDimensions]);

    return (
        <>
            {windowWidth >= WINDOW_SIZE.DESKTOP ? (
                <div className={styles.mainContainer}>
                    <div className={isOneTrack ? styles.slideTrackOneForSix : styles.slideTrackOne}>
                        {trackOnePartnersLogo.map((content, i) => (
                            <div
                                // eslint-disable-next-line react/no-array-index-key
                                key={i.toString()}
                                className={isOneTrack ? styles.slideForSix : styles.slide}
                            >
                                <Image icon={content} alt="img" />
                            </div>
                        ))}
                    </div>
                    <div className={styles.slideTrackSecond}>
                        {trackTwoPartnersLogo?.map((content, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div key={i.toString()} className={styles.slide}>
                                <Image icon={content} alt="img" />
                            </div>
                        ))}
                    </div>
                    <div className={styles.slideTrackThird}>
                        {trackThirdPartnersLogo?.map((content, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div key={i.toString()} className={styles.slide}>
                                <Image icon={content} alt="img" />
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles.container}>
                    <div className={isOneTrack ? styles.slideTrackOneForSix : styles.slideTrackOne}>
                        {mobileTrackOnePartnersLogo.map((content, i) => (
                            // eslint-disable-next-line react/no-array-index-key
                            <div key={i.toString()} className={styles.slide}>
                                <Image icon={content} alt="img" />
                            </div>
                        ))}
                    </div>

                    {isOneTrack ? null : (
                        <>
                            <div className={styles.slideTrackSecond}>
                                {mobileTrackTwoPartnersLogo?.map((content, i) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <div key={i.toString()} className={styles.slide}>
                                        <Image icon={content} alt="img" />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.slideTrackThird}>
                                {mobileTrackThreePartnersLogo?.map((content, i) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <div key={i.toString()} className={styles.slide}>
                                        <Image icon={content} alt="img" />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.slideTrackfourth}>
                                {mobileTrackFourPartnersLogo?.map((content, i) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <div key={i.toString()} className={styles.slide}>
                                        <Image icon={content} alt="img" />
                                    </div>
                                ))}
                            </div>
                            <div className={styles.slideTrackfifth}>
                                {mobileTrackFifththPartnersLogo?.map((content, i) => (
                                    // eslint-disable-next-line react/no-array-index-key
                                    <div key={i.toString()} className={styles.slide}>
                                        <Image icon={content} alt="img" />
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

InfiniteScroll.defaultProps = {
    isOneTrack: false,
};

export default InfiniteScroll;
