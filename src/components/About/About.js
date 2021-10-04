import Sidebar from '../Sidebar/Sidebar';
import './About.css';

function About() {
    return (
      <div className="container">
        <div className="row">
          <div className="about-wrapper d-flex justify-content-center">
              <div className="about-content my-5 px-5">
                <h2 className="my-4">About component</h2>

                <p>As a college student, much of your time will be spent interacting with texts of all types, shapes, sizes, and delivery methods. Sound interesting? Oh, it is. In the following sections, we’ll explore the nature of texts, what they will mean to you, and how to explore and use them effectively.</p>

                <p>In academic terms, a text is anything that conveys a set of meanings to the person who examines it. You might have thought that texts were limited to written materials, such as books, magazines, newspapers, and ‘zines (an informal term for magazine that refers especially to fanzines and webzines). Those items are indeed texts—but so are movies, paintings, television shows, songs, political cartoons, online materials, advertisements, maps, works of art, and even rooms full of people. If we can look at something, explore it, find layers of meaning in it, and draw information and conclusions from it, we’re looking at a text.</p>

                <p>Most of the texts you’re exposed to in college will be hard (printed) copy or online written texts like books, articles, and essays—college remains a rather traditional place, and these kinds of texts are still the most common types of learning material. But you’ll also be asked to explore other types of textual materials, and it’s good to be prepared.</p>

                <p>Which of these would be a kind of text?</p>
                <ul>
                    <li>graphic novel or comic book</li>
                    <li>journal written by a 15 year old</li>
                    <li>series of photographs</li>
                    <li>poem</li>
                    <li>movie</li>
                </ul>
              </div>
              <Sidebar></Sidebar>
          </div>
        </div>
      </div>
      );
    }
    
  export default About;