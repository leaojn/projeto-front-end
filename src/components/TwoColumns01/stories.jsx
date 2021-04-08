import { TwoColumns01 } from '.';

export default {
  title: 'TwoColumns01',
  component: TwoColumns01,
  args: {
    children: 'TwoColumns01',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TwoColumns01 {...args} />
    </div>
  );
};
