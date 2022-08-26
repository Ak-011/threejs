import React, { useLayoutEffect, useRef } from 'react';

import styles from './styles.module.scss';

interface ShimmerProps {
    loading: boolean;
    children?: React.ReactNode;
    style?: { [key: string]: string };
}

const Shimmer = (props: ShimmerProps) => {
    const { loading = false, children = <span />, style } = props;

    const container = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (container.current) {
            if (style) {
                Object.keys(style).forEach((key) => {
                    (container.current as HTMLDivElement).style.setProperty(`--${key}`, style[key]);
                });
            }
        }
    }, [style]);

    if (loading) {
        return (
            <div className={styles.mainContainer}>
                <div ref={container} className={styles.container} />
            </div>
        );
    }

    return <>{children}</>;
};

export default Shimmer;
