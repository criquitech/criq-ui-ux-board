import React from 'react';
import { LoaderStyles } from './LoaderStyles';

export const Loader: React.FunctionComponent<any> = (props: any) => {
    console.log(props);
    return (
        <>
            <span className={LoaderStyles.base('20px', '#FFF', '#FF3D00', '#222')}> </span>
        </>
    );
};
