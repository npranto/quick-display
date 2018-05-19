import NavigationBar from './NavigationBar/NavigationBar';
import Welcome from './Welcome/Welcome';
import Features from './Features/Features';
import Usage from './Usage/Usage';
import Technologies from './Technologies/Technologies';
import Contributors from './Contributors/Contributors';
import './App.css';

const App = () => `
  <main class="App">
    <section class="navigation">
      ${NavigationBar()}
    </section>
    <section class="content">
      ${Welcome()}
      ${Features()}
      ${Usage()}
      ${Technologies()}
      ${Contributors()}
    </section>
  </main>
`;

export default App;
