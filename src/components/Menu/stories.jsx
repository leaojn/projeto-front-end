import { Menu } from '.';

import linksMock from '../NavLinks/mock';

export default {
  title: 'Menu',
  component: Menu,

  args: {
    children: 'Menu',
    logoData: {
      text: 'Logo',
      link: '#target',
      srcImg: '',
    },
    links: linksMock,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Menu {...args} />
    </div>
  );
};
