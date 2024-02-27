import { useState } from 'react';
import { BrowserRouter as Router, Link, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
       <Router>
      <nav>
        <div>
          <Link to="/">CHATTER</Link>
        </div>
        <div className="navlinks">
          <Link to="/">Home</Link>
          <Link to="/about">About us</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blogs">Blogs</Link>
        </div>
        <div>
          <Link to="/login">
            <button>Log in</button>
          </Link>
          <Link to="/signup">
            <button>Sign up</button>
          </Link>
        </div>
      </nav>

      <Route path="/about" component={AboutUs} />
      <Route path="/contact" component={Contact} />
      <Route path="/blogs" component={Blogs} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/" exact component={Home} />
    </Router>
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
            Chatter is a multi-functional platform where authors and readers can
            have access to their own content. It aims to be a traditional
            bookworm's heaven and a blog to get access to more text based
            content. Our vision is to foster an inclusive and vibrant community
            where diversity is celebrated. We encourage open-mindedness and
            respect for all individuals, regardless of their backgrounds or
            beliefs. By promoting dialogue and understanding, we strive{' '}
          </p>
        </div>
        <div>
          <img
            src="https://s3-alpha-sig.figma.com/img/b841/9d87/2cdd8a0b91fc4ac38a15c5566ddc5de5?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=F-ONIyKAEIwbg9-U4bj~nAsJOSLh7kPFf57NB5etL-b7GQWblMvf8d4uttmCF9Pblx4GIOsjfdfmI1zWuGBO5epfsYzJ2elJla7EbY4DHUuPHn1gqxPMvO34ZQ~Eqk7mS8jSgDQ29IqDJvIwmYRtRgAoaXUsuKKQNtGFO6ly5aFFgIHr6oRw4JHoWt8qlQcvAeVWLZMW4-UnsnbkKBt4994dSjAuBHQZJ5OQ-B2~22wkOwVIdoR-TotyCYDQ7bf98mBcW92qm1uY5LemYr7UPqf91aOqcOof8yq1qJkx0UKsk3vNhtf8jT6L7uuB~Ky1Dfy8h8Z8qf~9tFB2WZYleA__"
            alt=""
          />
        </div>
      </div>
      <div className="why-join-chatter">
        <h3
          style={{
            textAlign: 'center',
            fontSize: '48px',
            fontWeight: 700,
            lineHeight: '72px',
            letterSpacing: '0em',
          }}
        >
          Why you should join chatter
        </h3>
        <p
          style={{
            textAlign: 'center',
            marginLeft: '4.25%',
            marginRight: '4.25%',
            marginBottom: '36px',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '27px',
          }}
        >
          Our goal is to make writers and readers see our platform as their next
          heaven for blogging, ensuring ease in interactions, connecting with
          like-minded peers, have access to favorite content based on interests
          and able to communicate your great ideas with people
        </p>
        <div className="why-chatter-flex">
          <div className="why-chatter">
            <div>
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 2H2V28C2 28.5304 2.21071 29.0391 2.58579 29.4142C2.96086 29.7893 3.46957 30 4 30H30V28H4V2Z"
                    fill="black"
                  />
                  <path
                    d="M30 9H23V11H26.59L19 18.59L14.71 14.29C14.617 14.1963 14.5064 14.1219 14.3846 14.0711C14.2627 14.0203 14.132 13.9942 14 13.9942C13.868 13.9942 13.7373 14.0203 13.6154 14.0711C13.4936 14.1219 13.383 14.1963 13.29 14.29L6 21.59L7.41 23L14 16.41L18.29 20.71C18.383 20.8037 18.4936 20.8781 18.6154 20.9289C18.7373 20.9797 18.868 21.0058 19 21.0058C19.132 21.0058 19.2627 20.9797 19.3846 20.9289C19.5064 20.8781 19.617 20.8037 19.71 20.71L28 12.41V16H30V9Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
            <h4>Analytics</h4>
            <p>
              Analytics to track the number of views, likes and comment and also
              analyze the performance of your articles over a period of time
            </p>
          </div>

          <div className="why-chatter">
            <div>
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 11C11.0609 11 12.0783 10.5786 12.8284 9.82843C13.5786 9.07828 14 8.06087 14 7C14 5.93913 13.5786 4.92172 12.8284 4.17157C12.0783 3.42143 11.0609 3 10 3C8.93913 3 7.92172 3.42143 7.17157 4.17157C6.42143 4.92172 6 5.93913 6 7C6 8.06087 6.42143 9.07828 7.17157 9.82843C7.92172 10.5786 8.93913 11 10 11ZM2 15.5C2 14.837 2.26339 14.2011 2.73223 13.7322C3.20107 13.2634 3.83696 13 4.5 13H10.875C10.6264 13.6375 10.4992 14.3158 10.5 15C10.5 16.86 11.423 18.505 12.837 19.5H10.5C9.76873 19.4999 9.05142 19.7003 8.42606 20.0793C7.8007 20.4584 7.29121 21.0016 6.953 21.65C5.037 21.157 3.811 20.198 3.054 19.11C2 17.595 2 16.026 2 15.75V15.5ZM25.047 21.65C26.963 21.157 28.189 20.198 28.946 19.11C30 17.595 30 16.025 30 15.75V15.5C30 14.837 29.7366 14.2011 29.2678 13.7322C28.7989 13.2634 28.163 13 27.5 13H21.125C21.367 13.62 21.5 14.294 21.5 15C21.5 16.86 20.577 18.505 19.163 19.5H21.5C22.2313 19.4999 22.9486 19.7003 23.5739 20.0793C24.1993 20.4584 24.7088 21.0016 25.047 21.65ZM26 7C26 8.06087 25.5786 9.07828 24.8284 9.82843C24.0783 10.5786 23.0609 11 22 11C20.9391 11 19.9217 10.5786 19.1716 9.82843C18.4214 9.07828 18 8.06087 18 7C18 5.93913 18.4214 4.92172 19.1716 4.17157C19.9217 3.42143 20.9391 3 22 3C23.0609 3 24.0783 3.42143 24.8284 4.17157C25.5786 4.92172 26 5.93913 26 7ZM8 23.5C8 22.837 8.26339 22.2011 8.73223 21.7322C9.20107 21.2634 9.83696 21 10.5 21H21.5C21.8283 21 22.1534 21.0647 22.4567 21.1903C22.76 21.3159 23.0356 21.5001 23.2678 21.7322C23.4999 21.9644 23.6841 22.24 23.8097 22.5433C23.9353 22.8466 24 23.1717 24 23.5V23.75C24 24.025 24 25.595 22.946 27.11C21.846 28.691 19.756 30 16 30C12.245 30 10.154 28.691 9.054 27.11C8 25.595 8 24.026 8 23.75V23.5ZM16 19C17.0609 19 18.0783 18.5786 18.8284 17.8284C19.5786 17.0783 20 16.0609 20 15C20 13.9391 19.5786 12.9217 18.8284 12.1716C18.0783 11.4214 17.0609 11 16 11C14.9391 11 13.9217 11.4214 13.1716 12.1716C12.4214 12.9217 12 13.9391 12 15C12 16.0609 12.4214 17.0783 13.1716 17.8284C13.9217 18.5786 14.9391 19 16 19Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
            <h4>Social interactions</h4>
            <p>
              Users on the platform can interact with posts they like, comment
              and engage in discussions
            </p>
          </div>

          <div className="why-chatter">
            <div>
              <span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M26.6667 12V14H5.33333V12H26.6667ZM21.3333 4V6H5.33333V4H21.3333ZM16 28V18H26.6667V28H16ZM18.6667 20V26H24V20H18.6667ZM26.6667 8V10H5.33333V8H26.6667ZM0 0H32V32H0V0ZM29.3333 30V2H2.66667V30H29.3333ZM13.3333 26V28H5.33333V26H13.3333ZM13.3333 18V20H5.33333V18H13.3333ZM13.3333 22V24H5.33333V22H13.3333Z"
                    fill="black"
                  />
                </svg>
              </span>
            </div>
            <h4>Content creation</h4>
            <p>
              Write nice and appealing with our in-built markdown, a rich text
              editor
            </p>
          </div>
        </div>
      </div>
      <article>
        <div>
          <img src="../assets/Man.svg" alt="picture of a man" />
        </div>
        <div>
          <p>
            "Chatter has become an integral part of my online experience. As a
            user of this incredible blogging platform, I have discovered a
            vibrant community of individuals who are passionate about sharing
            their ideas and engaging in thoughtful discussions.”
          </p>
          <p><span>Adebobola Muhydeen,</span> Software developer at Apple </p>
          <button>Join chatter</button>
        </div>
      </article>
      <main>
        <div>
          
        </div>
        <div>
          <h2>Write, read and connect with great minds on chatter</h2>
          <p>Share people your great ideas, and also read write-ups based on your interests. connect with people of same interests and goals  </p>
          <button>Get started</button>
        </div>
      </main>
      <footer>
        <div>
        <h2>CHATTER</h2>
        </div>
        <div>
          <h5>Explore</h5>
          <ol>
            <li>Community</li>
            <li>Trending Blogs</li>
            <li>Chatter for teams</li>
          </ol>
        </div>
        <div>
          <h5>Support</h5>
          <ol>
            <li>Support docs</li>
            <li>Join slack</li>
            <li>Contact</li>
          </ol>
        </div>
        <div>
          <h5>Official blog</h5>
          <ol>
            <li>Official blog</li>
            <li>Engineering blog</li>
          </ol>
        </div>
      </footer>
    </>
  );
}

export default App;
