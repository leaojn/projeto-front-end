import { OneColumn03 } from '.';

export default {
  title: 'OneColumn03',
  component: OneColumn03,
  args: {
    children: 'OneColumn03',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <OneColumn03 {...args} />
    </div>
  );
};
