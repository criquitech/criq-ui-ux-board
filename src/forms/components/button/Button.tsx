import React from 'react';
import { IButtonProps } from './IButtonProps';

export const Button: React.FunctionComponent<IButtonProps> = (props: IButtonProps) => {
    const { children } = props;

    return (
        <div>
            <button>{children}</button>
        </div>
    );
};
