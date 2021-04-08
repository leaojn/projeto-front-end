import { Missao } from '.';

export default {
  title: 'Missao',
  component: Missao,
  args: {
    children: 'Missao',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Missao {...args} />
    </div>
  );
};
