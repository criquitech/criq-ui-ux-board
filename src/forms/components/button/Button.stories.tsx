import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Button} from './Button';
import {ButtonSizeTypes, ButtonTemplateTypes, ButtonType} from './ButtonTemplateTypes';

// @ts-ignore
import CustomMDXDocumentation from './Button-Doc.mdx';
import React from 'react';

export default {
    title: 'Module/Button',
    component: Button,
    argTypes: {
        baseColor: { control: 'color' },
        hoverColor: { control: 'color' },
        textColor: { control: 'color' }
    },
    decorators: [
        (Story) => (
            <div style={{ margin: '1em' }}>
                <Story />
            </div>
        )
    ],
    parameters: {
        actions: { handles: ['click'] },
        docs: {
            page: CustomMDXDocumentation
        }
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    size: ButtonSizeTypes.XS,
    type: ButtonType.BUTTON,
    template: ButtonTemplateTypes.FILL,
    children: 'Text'
};
