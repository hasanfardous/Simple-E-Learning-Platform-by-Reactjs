import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Sidebar from '../Sidebar/Sidebar';
import './Home.css';

function Home() {
  return (
    <div className="container">
      <div className="row">
        <Slider></Slider>
        <div className="home d-flex justify-content-center">
          <Services title="Latest Courses" items="4"></Services>
          <Sidebar></Sidebar>
        </div>
      </div>
    </div>
    );
  }
  
export default Home;