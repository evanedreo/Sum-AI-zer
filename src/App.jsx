import Hero from "./components/Hero";
import Demo from "./components/Demo";
import { Analytics } from '@vercel/analytics/react';

import "./App.css";

const App = () => {
  return (
    <main>
      <Analytics/>
      <div className='main'>
        <div className='gradient' />
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  );
};

export default App;
