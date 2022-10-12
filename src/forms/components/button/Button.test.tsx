import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import React from 'react';

import { ButtonSizeTypes, ButtonTemplateTypes, ButtonType } from './ButtonTemplateTypes';
import { Button } from './Button';

describe('@components/Button', () => {
    it('Given a normal component call it should render component', () => {
        const component = render(
            <Button type={ButtonType.BUTTON} template={ButtonTemplateTypes.ALTERNATIVE} size={ButtonSizeTypes.MD}>
                My Button
            </Button>
        );
        component.getByText('My Button');
    });
});
