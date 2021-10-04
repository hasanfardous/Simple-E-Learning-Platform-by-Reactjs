import imgNotFound from '../../assets/not-found.jpg';

function NotFound() {
  return (
    <div className="NotFound">
      <img src={imgNotFound} className="img-fluid" alt="not found"/>
    </div>
    );
  }
  
export default NotFound;