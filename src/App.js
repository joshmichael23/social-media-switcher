import logo from './logo.svg';
import './App.css';
import './style.css'
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';
import instagram from './images/icon-instagram.svg';
import youtube from './images/icon-youtube.svg';
import up from './images/icon-up.svg';
import down from './images/icon-down.svg';
import { useState } from 'react';

function App() {

  const [dark, setDark] = useState(false);
  return (
    <div className={(dark? 'dark': 'light') + " App"}>
      
      <div className='wrapper'>
        <header className={dark? 'dark': 'light'}>
          <div className='header'>
            <h1>Social Media Dashboard</h1>
            <p>Total Followers: 23,004</p>
          </div>

          <div className="checkboxContainer">
            <p>Dark Mode</p>
            <label for="checkbox"> <input onChange={() => setDark(dark=>!dark)} type="checkbox" name="" id="checkbox" /><span class="slider"></span></label>
          </div>
        </header>
        <main>
          <div className="uppercards">
              <div className={(dark? 'dark': 'light')  + " bigcard facebook"}>
                  <div className="social-media">
                    <img src={facebook} alt="" />
                    <p>@nathanf</p>
                    </div>
                  <h3>1987 <span>FOLLOWERS</span></h3>
                  <div className="changes up"><img src={up} alt="" />12 Today</div>
              </div>

              <div className={(dark? 'dark': 'light')  + " bigcard twitter"}>
                  <div className="social-media">
                  <img src={twitter} alt="" />
                    <p>@nathanf</p>
                    </div>
                  <h3>1044 <span>FOLLOWERS</span></h3>
                  <div className="changes up"><img src={up} alt="" />99 Today</div>
              </div>

              <div className={(dark? 'dark': 'light')  + " bigcard instagram"}>
                  <div className="social-media">
                  <img src={instagram} alt="" />
                    <p>@realnathanf</p>
                  </div>
                  <h3>11k <span>FOLLOWERS</span></h3>
                  <div className="changes up"><img src={up} alt="" />1099 Today</div>
              </div>

              <div className={(dark? 'dark': 'light')  + " bigcard youtube"}>
                  <div className="social-media">
                  <img src={youtube} alt="" />
                    <p>Nathan F. </p>
                  </div>
                  <h3>8239 <span>SUBCRIBERS</span></h3>
                  <div className="changes down"><img src={down} alt="" />12 Today</div>
              </div>
          </div>
          <div className="lowercards">

              <h2>Overview - Today</h2>
              <div className={(dark? 'dark': 'light')  + " smallcard"}>
                  <p>Page Views</p>
                  <img src={facebook} alt="Facebook Icon" />
                  <h3>87</h3>
                  <div className="changes up">
                  <img src={up} alt="" /> 3%
                  </div>
              </div>

              <div className={(dark? 'dark': 'light')  + " smallcard"}>
                  <p>Likes</p>
                  
                  <img src={facebook} alt="Facebook Icon" />
                  <h3>52</h3>
                  <div className="changes down">
                  <img src={down} alt="" /> 2%
                  </div>
              </div>

              <div className={(dark? 'dark': 'light')  + " smallcard"}>
                  <p>Likes</p>
                  
                  <img src={instagram} alt="Instagram Icon" />
                  <h3>5462</h3>
                  <div className="changes up">
                  <img src={up} alt="" />2257%
                  </div>
              </div>

              <div className={(dark? 'dark': 'light')  + " smallcard"}>
                  <p>Profile Views</p>
                  <img src={instagram} alt="Instagram Icon" />
                  <h3>52k</h3>
                  <div className="changes up">
                  <img src={up} alt="" /> 1375% 
                  </div>
              </div>

              <div className={(dark? 'dark': 'light')  + " smallcard"}>
                  <p>Retweets</p>
                  <img src={twitter} alt="Twitter Icon" />
                  <h3>117</h3>
                  <div className="changes up">
                  <img src={up} alt="" />303%
                  </div>
              </div>

              <div className={(dark? 'dark': 'light')  + " smallcard"}>
                  <p>Likes</p>
                  <img src={twitter} alt="Twitter Icon" />
                  <h3>507</h3>
                  <div className="changes up">
                  <img src={up} alt="" />553%
                  </div>
              </div>

              <div className={(dark? 'dark': 'light')  + " smallcard"}>
                  <p>Likes</p>
                  <img src={youtube} alt="Youtube Icon" />
                  <h3>107</h3>
                  <div className="changes down">
                  <img src={down} alt="" />19%
                  </div>
              </div>

              <div className={(dark? 'dark': 'light')  + " smallcard"}> 
                  <p>Total Views</p>
                  <img src={youtube} alt="Youtube Icon" />
                  <h3>1407</h3>
                  <div className="changes down">
                  <img src={down} alt="" />12%
                  </div>
              </div>



          </div>
        </main>
      </div>
                                

      
    </div>
  );
}

export default App;
