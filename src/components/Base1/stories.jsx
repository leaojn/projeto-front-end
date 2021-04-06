import { Base1 } from '.';

export default {
  title: 'Base1',
  component: Base1,
  args: {
    children: 'Base1',
    srcImage: 'assets/images/hb20.svg',
    srcLogo: 'assets/images/logo.svg',
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <Base1 {...args} />
    </div>
  );
};
