import { Meta, StoryObj } from '@storybook/html';
import { Lightbox, LightboxProps } from './lightbox-module';

const meta = {
  title: 'Features/Common/Lightbox',
  tags: ['autodocs'],
  parameters: {
    layout: 'centered'
  },
  render: (args) => Lightbox(args)
} satisfies Meta<LightboxProps>;

export default meta;

type Story = StoryObj<LightboxProps>;

export const Example: Story = {
  args: {
    title: 'Lightbox Title',
    content: `
    <div id="lightbox__content">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <div id="lightbox__content__cta">
          <button type="button" class="btn btn--small btn--dark--fill btn--fillWidth">[FPO Give Once]</button>
          <button type="button" class="btn btn--small btn--dark--outline btn--fillWidth">[FPO Give Monthly]</button>
      </div>
    </div>
    <script>    
    document.getElementById("open").onclick = () =>{
      document.querySelector("lightbox-module").toggleAttribute('open');
    }
</script>
    `
  }
};
