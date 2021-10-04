import teacher from '../../assets/teacher.jpg';
import teacher2 from '../../assets/teacher2.jpg';
import teacher3 from '../../assets/teacher3.jpg';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar my-5">
            <h2 className="my-4">Our Teachers</h2>
            <div className="teacher mb-3 mx-5">
                <h4>San Franchisco</h4>
                <img src={teacher} className="img-fluid mb-3 my-3" alt="teacher"/>
            </div>
            <div className="teacher mb-3 mx-5">
                <h4>San Franchisco</h4>
                <img src={teacher2} className="img-fluid mb-3 my-3" alt="teacher 2"/>
            </div>
            <div className="teacher mb-3 mx-5">
                <h4>San Franchisco</h4>
                <img src={teacher3} className="img-fluid mb-3 my-3" alt="teacher 3"/>
            </div>
        </div>
    );
};

export default Sidebar;