import { Card, Header, Body, Title, Text, ListGroup, ListGroupItem } from 'react-bootstrap';
import Rating from 'react-rating';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons';
import { faUsers } from '@fortawesome/free-solid-svg-icons';
import './Service.css';


function Service(props) {

  const {key, name, rating, reviews, enrolled, img, fee} = props.data;
  return (
    <div className="Service mx-3">
      <Card className="mb-4">
      <Card.Img height="300" variant="top" src={img} />
        <Card.Body>
          <h3><b>{name}</b></h3>
          <h5>Course fee: ${fee}</h5>
          <Rating
            emptySymbol={<FontAwesomeIcon icon={farFaStar} />}
            fullSymbol={<FontAwesomeIcon icon={fasFaStar} />}
            initialRating={rating}
            style={{color: 'gold'}}
            readonly
          /> <small>({reviews} reviews)</small>
          <p>Enrolled: <FontAwesomeIcon icon={faUsers} /> {enrolled} students</p>
          <button className="btn btn-lg btn-warning mb-2">Enroll Now</button>
        </Card.Body>
      </Card>
    </div>
    );
  }
  
export default Service;