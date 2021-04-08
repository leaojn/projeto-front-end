import { Cards } from '.';

export default {
  title: 'Cards',
  component: Cards,
  args: {
    children: 'Cards',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Cards {...args} />
    </div>
  );
};
