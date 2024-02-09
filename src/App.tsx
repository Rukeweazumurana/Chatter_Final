import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <nav>
        <div>
          <a href="./">CHATTER</a>
        </div>
        <div class="navlinks">
          <a href="">Home</a>
          <a href="">About us</a>
          <a href="">Contact</a>
          <a href="">Blogs</a>
        </div>
        <div>
          <button>Log in</button>
          <button>Sign up</button>
        </div>
      </nav>
      <div className="chatter-home">
          <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>
          <p>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers.
          </p>
          <button>Get started</button>
      </div>
    </>
  );
}

export default App;
