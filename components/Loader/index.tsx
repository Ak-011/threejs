import cx from 'classnames';

import styles from './styles.module.scss';

interface LoaderProps {
    size?: number;
    color?: string;
}

const Loader = (props: LoaderProps) => {
    const { size = 'large', color = 'black' } = props;
    return (
        <div className={cx(styles.ldsRing, styles[size])}>
            <div className={cx(styles[size], styles[color])} />
            <div className={cx(styles[size], styles[color])} />
            <div className={cx(styles[size], styles[color])} />
            <div className={cx(styles[size], styles[color])} />
        </div>
    );
};

export default Loader;
