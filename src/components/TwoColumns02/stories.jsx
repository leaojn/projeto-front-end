import { TwoColumns02 } from '.';

export default {
  title: 'TwoColumns02',
  component: TwoColumns02,
  args: {
    children: 'TwoColumns02',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TwoColumns02 {...args} />
    </div>
  );
};
