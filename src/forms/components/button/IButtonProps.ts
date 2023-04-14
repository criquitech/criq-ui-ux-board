import type { ButtonSizeTypes, ButtonTemplateTypes, ButtonType } from './ButtonTemplateTypes';

export interface IButtonProps {
    children?: any;
    radius?: string;
    type: ButtonType;
    template: ButtonTemplateTypes;
    size: ButtonSizeTypes;
    isBlock?: boolean;
    callBack?: () => void;
    isDisabled?: boolean;
    isLoading?: boolean;
    baseColor?: string;
    hoverColor?: string;
    textColor?: string;
    fontFamily?: string | undefined;
}
