import { Client } from '.';

export default {
  title: 'Client',
  component: Client,
  args: {
    children: 'Client',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Client {...args} />
    </div>
  );
};
