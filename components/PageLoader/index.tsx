import styles from './styles.module.scss';

const PageLoader = () => {
    const n = 12;
    const iterator = [...Array(n)].map((element, index) => index + 1);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                {iterator.map((index) => (
                    <div key={index} className={styles.spoke} />
                ))}
            </div>
        </div>
    );
};

export default PageLoader;
