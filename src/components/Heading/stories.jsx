import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => <Heading {...args} />;
