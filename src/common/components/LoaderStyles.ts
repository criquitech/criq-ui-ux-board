import { css } from '@emotion/css';

export const LoaderStyles = {
    base: (size: any, color: string, borderColor: string, borderBottomColor: string) => css`
        width: ${size};
        height: ${size};
        border: 5px solid ${borderColor};
        border-bottom-color: ${borderBottomColor};
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation 1s linear infinite;

        @keyframes rotation {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    `
};
