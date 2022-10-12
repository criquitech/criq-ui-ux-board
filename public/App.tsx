import React from 'react';
import { Button, ButtonSizeTypes, ButtonTemplateTypes, ButtonType } from '../src';

const App = () => {
    return (
        <>
            <h1>Title</h1>
            <Button size={ButtonSizeTypes.MD} type={ButtonType.BUTTON} template={ButtonTemplateTypes.PRIMARY}>
                Hello
            </Button>
        </>
    );
};

export default App;
