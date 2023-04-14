import React from 'react';
import type { IButtonProps } from './IButtonProps';
import { cx } from '@emotion/css';
import { ButtonStyle } from './ButtonStyle';
import type { IColor } from '../../../common';
import { Loader } from '../../../common/components/Loader';

export const Button: React.FunctionComponent<IButtonProps> = (props: IButtonProps) => {
    /* eslint-disable */
    const {
        children,
        radius = '0px',
        callBack,
        baseColor = '#999',
        hoverColor = '#333',
        template,
        textColor = '#222',
        size,
        fontFamily = 'Arial',
        isBlock = false,
        isDisabled = false,
        isLoading = false
    } = props;
    const color: IColor = {
        baseColor,
        hoverColor
    };

    /*const buildSizeLoading = (): number => {
        switch (size) {
            case ButtonSizeTypes.XS:
                return 10;
            case ButtonSizeTypes.MD:
                return 20
            case ButtonSizeTypes.LG:
                return 30;
        }
    }*/

    const listenOnClick = () => {
        if (!isLoading || !isDisabled) {
            return callBack ? callBack() : null;
        }
    };

    return (
        <div>
            <button className={cx(ButtonStyle.baseButton(radius, color, template, textColor, size, fontFamily, isBlock, isDisabled, isLoading))} onClick={listenOnClick}>
                <div className={cx(ButtonStyle.gridButton())}>{isLoading ? <Loader /> : <span>{children}</span>}</div>
            </button>
        </div>
    );
};
