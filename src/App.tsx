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
        <div className="navlinks">
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
        <div>
          <h1>Welcome to Chatter: A Haven for Text-Based Content</h1>
          <p>
            Unleash the Power of Words, Connect with Like-minded Readers and
            Writers.
          </p>
          <button>Get started</button>
          </div>
      </div>
      <div className="about">
        <div>
          <h2>About Chatter</h2>
          <p>
Chatter is a multi-functional platform where authors and readers can have access to their own content. It aims to be a traditional bookworm's heaven and a blog to get access to more text based content. Our vision is to foster an inclusive and vibrant community where diversity is celebrated. We encourage open-mindedness and respect for all individuals, regardless of their backgrounds or beliefs. By promoting dialogue and understanding, we strive </p>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default App;
