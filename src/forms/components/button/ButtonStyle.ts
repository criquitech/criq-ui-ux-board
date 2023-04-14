import { css } from '@emotion/css';
import type { IColor } from '../../../common';
import { ButtonSizeTypes, ButtonTemplateTypes } from './ButtonTemplateTypes';
import { UtilitiesStyles } from '../../../common/styles/UtilitiesStyles';

export const ButtonStyle = {
    defaultResetStyles: () => css`
        font-weight: 700;
        cursor: pointer;
        outline: inherit;
    `,
    buildTheme: (color: IColor, template: ButtonTemplateTypes, textColor: string) => css`
        background-color: ${template === ButtonTemplateTypes.OUTLINE ? '#fff' : color.baseColor};
        color: ${template === ButtonTemplateTypes.OUTLINE ? textColor : '#fff'};
        border: ${template === ButtonTemplateTypes.OUTLINE ? '3px solid ' + color.baseColor : null};

        &:hover {
            ${UtilitiesStyles.defaultResetStyles('all 1s ease-in-out')}
            color: white;
            background-color: ${color.hoverColor};
        }
    `,
    buildSize: (size: ButtonSizeTypes) => {
        switch (size) {
            case ButtonSizeTypes.XS:
                return css`
                    padding: 8px 16px;
                    font-size: 14px;
                `;
            case ButtonSizeTypes.MD:
                return css`
                    font-size: 18px;
                    padding: 12px 30px;
                `;
            case ButtonSizeTypes.LG:
                return css`
                    font-size: 22px;
                    padding: 18px 35px;
                `;
            default:
                return css`
                    padding: 6px 16px;
                    font-size: 13px;
                `;
        }
    },
    buildIsDisabled: (isDisabled: boolean) => {
        if (isDisabled) {
            return css`
                opacity: 0.3;

                &:hover {
                    cursor: not-allowed;
                }
            `;
        }
    },
    buildIsBlocked: (isDisabled: boolean) => {
        if (isDisabled) {
            return css`
                display: block;
                width: 100%;
            `;
        }
    },
    buildBlockLoading: (isLoading: boolean) => {
        if (isLoading) {
            return css`
                display: block;
                padding-left: 50px;
                padding-right: 50px;
            `;
        }
    },
    /* eslint-disable */
    baseButton: (
        radius: string,
        color: IColor,
        template: ButtonTemplateTypes,
        textColor: string,
        size: ButtonSizeTypes,
        fontFamily: string,
        isBlocked: boolean,
        isDisabled: boolean,
        isLoading: boolean
    ) => css`
        border-radius: ${radius};
        border: none;
        font-family: ${fontFamily}, sans-serif;
        ${UtilitiesStyles.defaultResetStyles('all 1s ease-in-out')}
        ${ButtonStyle.defaultResetStyles()}
      ${ButtonStyle.buildTheme(color, template, textColor)}
      ${ButtonStyle.buildSize(size)}
      ${ButtonStyle.buildIsBlocked(isBlocked)}
      ${ButtonStyle.buildBlockLoading(isLoading)}
      ${ButtonStyle.buildIsDisabled(isDisabled)}
    `,
    gridButton: () => css`
        display: flex;
        gap: 20px;
        flex-wrap: nowrap;
        justify-content: space-around;
        align-items: center;
    `
};
