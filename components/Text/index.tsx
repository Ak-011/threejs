import React, { ReactNode } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

export type FontType =
    | 'h1Large'
    | 'h1'
    | 'h2'
    | 'h2VariantTwo'
    | 'h2Special'
    | 'h3Regular'
    | 'h3Special'
    | 'h3Light'
    | 'h4VariantOne'
    | 'h4VariantTwo'
    | 'h5'
    | 'h6VariantOne'
    | 'h6VariantTwo'
    | 'pRegular'
    | 'pMedium'
    | 'pSemiBold'
    | 'pButtonText'
    | 'pLinks'
    | 'pHeader'
    | 'pMediumSmall';

export type ColorVariant =
    | 'white'
    | 'black'
    | 'yellow'
    | 'blackVariantOne'
    | 'blackVariantTwo'
    | 'purple'
    | 'green'
    | 'lightGreen'
    | 'red'
    | 'darkRed'
    | 'blue'
    | 'whiteVariantOne'
    | 'stoaBlack'
    | 'blackVariantThree';

export type TagType = keyof Pick<
    // eslint-disable-next-line no-undef
    JSX.IntrinsicElements,
    'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label'
>;

interface TextProps {
    tagType?: TagType;
    color?: ColorVariant;
    children?: ReactNode;
    font?: FontType;
    className?: string;
}

const Text = (props: TextProps) => {
    const { tagType: Element = 'p', color = 'black', font = 'h1', className, children } = props;

    return (
        <Element className={cx(className, styles[`text--${font}`], styles[`color--${color}`])}>
            {children}
        </Element>
    );
};

export default Text;
