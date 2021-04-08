import { HomePage } from '.';

export default {
  title: 'HomePage',
  component: HomePage,
  args: {
    children: 'HomePage',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <HomePage {...args} />
    </div>
  );
};
