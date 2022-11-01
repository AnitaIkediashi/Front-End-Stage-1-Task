import user from "./assets/Anita Ikediashi photo.jpg";
import slack from "./assets/slack.png";
import github from "./assets/github.png";
import zuriLogo from './assets/Zuri.Internship_Logo.png'
import ingressiveLogo from './assets/I4G.png'
import shareBtn from './assets/_Avatar share button.png'

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div className="image">
            <img src={user} alt="user img" id="profile__img" />
            <p id="twitter">bad girl ani</p>
            <p id="slack">Anita Ifeoma Ikediashi</p>
          </div>
          <ul className="links">
            <li>
              <a
                href="https://twitter.com/Anita_ikediashi"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter link
              </a>
            </li>
            <li>
              <a
                href="https://training.zuri.team/"
                target="_blank"
                rel="noopener noreferrer"
                id="btn__zuri"
              >
                Zuri Team
              </a>
            </li>
            <li>
              <a
                href="http://books.zuri.team"
                target="_blank"
                rel="noopener noreferrer"
                id="books"
              >
                Zuri Books
              </a>
            </li>
            <li>
              <a
                href="https://books.zuri.team/python-for-beginners?ref_id=Anita-Ifeoma-Ikediashi"
                target="_blank"
                rel="noopener noreferrer"
                id="book__python"
              >
                Python Books
              </a>
            </li>
            <li>
              <a
                href="https://background.zuri.team"
                target="_blank"
                rel="noopener noreferrer"
                id="pitch"
              >
                Background Check for Coders
              </a>
            </li>
            <li>
              <a
                href="https://books.zuri.team/design-rules"
                target="_blank"
                rel="noopener noreferrer"
                id="book__design"
              >
                Design Books
              </a>
            </li>
          </ul>
        </div>
        <div className="socials">
          <img src={slack} alt="slack logo" />
          <img src={github} alt="github logo" />
        </div>
        <div className="arrow">
          <img src={shareBtn} alt="share link" />
        </div>
      </div>
      <footer className="footer">
        <div className="footer-heading">
          <img src={zuriLogo} alt="zuri logo" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src={ingressiveLogo} alt="14G logo" />
        </div>
      </footer>
    </>
  );
}

export default App;
