import React, { useEffect, ReactNode } from 'react';
import cx from 'classnames';

import Images from '@components/Images';

import styles from './styles.module.scss';

interface ModalProps {
    isModalOpen: boolean;
    showCrossIcon: boolean;
    children: ReactNode;
    backgroundColorClass?: 'whiteBg' | 'greyBg' | 'none';
    isVideo?: boolean;
    isAnimationTriggered?: boolean;
    closeModal: () => void;
}

const Modal = (props: ModalProps) => {
    const {
        isModalOpen,
        showCrossIcon,
        children,
        backgroundColorClass = 'whiteBg',
        isVideo,
        isAnimationTriggered = false,
        closeModal,
    } = props;

    /*
     * hide document overflow when modal is open
     * show document overflow when modal is close
     */
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isModalOpen]);

    return (
        <>
            {isModalOpen ? (
                <div
                    className={styles.modalContainer}
                    style={isVideo ? { backgroundColor: 'black' } : {}}
                    role="button"
                    tabIndex={0}
                    onClick={() => {
                        closeModal();
                    }}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') closeModal();
                    }}
                >
                    <div
                        className={cx(
                            isVideo ? styles.videoModalSection : styles.modalSection,
                            styles[backgroundColorClass],
                            isAnimationTriggered ? styles.slideDownAnimation : '',
                        )}
                        role="button"
                        tabIndex={0}
                        onClick={(event) => {
                            event.stopPropagation();
                        }}
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') event?.stopPropagation();
                        }}
                    >
                        {showCrossIcon && (
                            <div
                                className={styles.crossButtonIcon}
                                role="button"
                                tabIndex={0}
                                onClick={closeModal}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') closeModal();
                                }}
                            >
                                {/* TODO: Add you icon here */} 
                                <Images
                                    icon={isVideo ? '' : ''}
                                    alt="cross-icon"
                                    width={25}
                                    height={25}
                                />
                            </div>
                        )}
                        <div
                            className={`${styles.modalChildren} ${
                                !showCrossIcon && styles.modalChildrenMargin
                            }`}
                        >
                            {children}
                        </div>
                    </div>
                </div>
            ) : null}
        </>
    );
};

Modal.defaultProps = {
    backgroundColorClass: 'whiteBg',
};

export default Modal;
