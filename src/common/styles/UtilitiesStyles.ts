import { css } from '@emotion/css';

export const UtilitiesStyles = {
    defaultResetStyles: (args: string) => css`
        -webkit-transition: ${args};
        -moz-transition: ${args};
        -ms-transition: ${args};
        -o-transition: ${args};
        transition: ${args};
    `
};
