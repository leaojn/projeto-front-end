import { Contact } from '.';

export default {
  title: 'Contact',
  component: Contact,
  args: {
    children: 'Contact',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Contact {...args} />
    </div>
  );
};
