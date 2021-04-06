import { FirstPage } from '.';

export default {
  title: 'FirstPage',
  component: FirstPage,
  args: {
    children: 'FirstPage',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <FirstPage {...args} />
    </div>
  );
};
