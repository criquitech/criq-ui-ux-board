// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ButtonSb } from './ButtonSb';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export default {
    title: 'Example/Button',
    component: ButtonSb,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        backgroundColor: { control: 'color' }
    }
} as ComponentMeta<typeof ButtonSb>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ButtonSb> = (args) => <ButtonSb {...args} />;

// @ts-ignore
export const Primary = Template.bind({});
Primary.args = {
    primary: true,
    label: 'Button'
};

// @ts-ignore
export const Secondary = Template.bind({});
Secondary.args = {
    label: 'Button'
};

// @ts-ignore
export const Large = Template.bind({});
Large.args = {
    size: 'large',
    label: 'Button'
};

// @ts-ignore
export const Small = Template.bind({});
Small.args = {
    size: 'small',
    label: 'Button'
};
