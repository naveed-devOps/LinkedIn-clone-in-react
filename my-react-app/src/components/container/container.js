 
import React from 'react';
import './container.css';
import logo2 from '../../assets/M logo.jpg';
import media from '../../assets/media.png';
import event from '../../assets/event.png';
import article from '../../assets/article.png';
import iota from '../../assets/iota.png';
import jaanlo from '../../assets/jaanlo.jpg';
import girl from '../../assets/girl.jpg';
import hiring from '../../assets/hiring.jpg';
import linkedin_news_asia_logo from '../../assets/linkedin_news_asia_logo (1).jpg';
import cold from '../../assets/cold.jpg';
import hiring1 from '../../assets/hiring page.jpg';
import beard from '../../assets/beard.jpg';
import coursera from '../../assets/coursera.jpg';
import glasses from '../../assets/glasses.jpg';
import table from '../../assets/table.jpg';
import sticky from '../../assets/sticky img.png';


const Container = () => {
  return (
   <div class="jc">
    <div class="container">
        <div class="box1 box">
            <div class="box1-abs"></div>
            <div class="box1-name">
                <img src={logo2}/>
                <div class="name-in">
                    <h2>Muhammad Usama Arshad</h2>
                    <p>Student at Arid Agriculture University</p>
                </div>
            </div>
            <div class="box1-connection">
                <div class="box1-left">
                    <p>connections</p>
                    <p>connect with alumni</p>
                </div>
                <div class="box1-right">
                    <i class="fa-solid fa-user"></i>
                </div>
            </div>
            <div class="box1-upgrade">
                <div class="box1-top">
                    <p>Strengthen your profile with an AI <br/> writing assistant</p>
                </div>
                <div class="box1-bottom">
                    <div class="bottom-yellow"></div>
                    Upgrade my plan
                </div>
            </div>
            <div class="box1-items">
                <i class="fa-solid fa-bookmark"></i>
                <p>My items</p>
            </div>
        </div>
        <div class="box2 box">
            <div class="box2-top">
                <img src={logo2} />
                <input type="text" placeholder="Start a post"/>
            </div>
            <div class="box2-bottom">
                <div class="box2-left">
                    <img src={media} alt=""/>
                    Media
                </div>
                <div class="box2-mid">
                    <img src={event}/>
                    Event
                </div>
                <div class="box2-right">
                    <img src={article}/>
                    Article
                </div>
            </div>
        </div>
        <div class="box3 box">
            <div class="box3-top">
                <p>Add to your feed</p>
                <img src={iota}/>
            </div>
            <div class="box3-account">
                <div class="box3-account-left">
                    <img src={jaanlo}/>
                </div>
                <div class="box3-account-right">
                    <p>Nando's Pakistan</p>
                    <span>Company • Restaurants</span>
                    <button>+ Follow</button>
                </div>
            </div>
            <div class="box3-account">
                <div class="box3-account-left">
                    <img src={girl}/>
                </div>
                <div class="box3-account-right">
                    <p>Nando's Pakistan</p>
                    <span>Company • Restaurants</span>
                    <button>+ Follow</button>
                </div>
            </div>
            <div class="box3-account">
                <div class="box3-account-left">
                    <img src={hiring}/>
                </div>
                <div class="box3-account-right">
                    <p>Arslan Ahmed</p>
                    <span>Company • Restaurants</span>
                    <button>+ Follow</button>
                </div>
            </div>
            <div class="box3-bottom">
                View all recommendations <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
        <div class="box4 box">
            <div class="post one">
                <div class="post-top">
                    <div class="post-left">
                        <img src={linkedin_news_asia_logo}/>
                        LinkedIn News Asia<br/>
                        4,390,800 followers <br/>
                        6h • Edited •    
                    </div>
                    <div class="post-right">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <p>Welcome to the Wrap-Up, your summary of the day's top news and talking points, curated by LinkedIn News Asia. Today, we ask: What opportunities are you looking forward to in the new year?</p>
                <img src={cold}/>
            </div>
            <div class="post one">
                <div class="post-top">
                    <div class="post-left">
                        <img src={linkedin_news_asia_logo}/>
                        LinkedIn News Asia<br/>
                        4,390,800 followers <br/>
                        6h • Edited •    
                    </div>
                    <div class="post-right">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <p>Welcome to the Wrap-Up, your summary of the day's top news and talking points, curated by LinkedIn News Asia. Today, we ask: What opportunities are you looking forward to in the new year?</p>
                <img src={hiring1}/>
            </div>
            <div class="post one">
                <div class="post-top">
                    <div class="post-left">
                        <img src={beard}/>
                        LinkedIn News Asia<br/>
                        4,390,800 followers <br/>
                        6h • Edited •    
                    </div>
                    <div class="post-right">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <p>Welcome to the Wrap-Up, your summary of the day's top news and talking points, curated by LinkedIn News Asia. Today, we ask: What opportunities are you looking forward to in the new year?</p>
                <img src={coursera}/>
            </div>
            <div class="post one">
                <div class="post-top">
                    <div class="post-left">
                        <img src={glasses}/>
                        LinkedIn News Asia<br/>
                        4,390,800 followers <br/>
                        6h • Edited •    
                    </div>
                    <div class="post-right">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <p>Welcome to the Wrap-Up, your summary of the day's top news and talking points, curated by LinkedIn News Asia. Today, we ask: What opportunities are you looking forward to in the new year?</p>
                <img src={table}/>
            </div>
        </div>
        <div class="box5 box">
            <div class="box5-top">
                <div class="box5-left">
                  <a href="#">Groups</a>  
                  <a href="#">Events</a>  
                  <a href="#">Followed Hashtags</a>  
                </div>
                <div class="box5-right">
                    +
                </div>
            </div>
            <div class="box5-bottom">Discover more</div>
        </div>
        <div class="box6 box">
            <img src={sticky}/>
            <div class="box6-bottom">
              <a href="#">About</a>  
              <a href="#">Accessibility</a>  
              <a href="#">Help Center</a>  <br/>
              <a href="#">Privacy & Terms </a>  
              <a href="#">Ad Choices</a>  <br/>
              <a href="#">Advertising</a>  
              <a href="#">Business Services </a>  <br/>
              <a href="#">Get the LinkedIn app</a>  
              <a href="#">More</a>  
            </div>
            <div class="box6-copyright">
                <img src="https://static.licdn.com/aero-v1/sc/h/aahlc8ivbnmk0t3eyz8as5gvr"/>
                LinkedIn Corporation © 2024
            </div>
        </div>
    </div>
    </div>
  );
};

export default Container;
