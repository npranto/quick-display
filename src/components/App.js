import NavigationBar from './NavigationBar/NavigationBar';
import './App.css';

const App = () => `
  <main class="App">
    <section class="navigation">
      ${NavigationBar()}
    </section>
    <section class="content">
      Content...
    </section>
  </main>
`;

export default App;
