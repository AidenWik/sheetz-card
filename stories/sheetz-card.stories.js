import { html } from 'lit';
import '../src/sheetz-card.js';

export default {
  title: 'SheetzCard',
  component: 'sheetz-card',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ header, backgroundColor }) {
  return html`
    <sheetz-card
      style="--sheetz-card-background-color: ${backgroundColor || 'white'}"
      .header=${header}
    >
    </sheetz-card>
  `;
}

export const App = Template.bind({});
App.args = {
  header: 'My app',
};
