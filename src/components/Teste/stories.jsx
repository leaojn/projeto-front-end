import { Teste } from '.';

export default {
  title: 'Teste',
  component: Teste,
  args: {
    children: 'Teste',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Teste {...args} />
    </div>
  );
};
