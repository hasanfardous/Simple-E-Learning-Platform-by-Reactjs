import './Services.css';
import { useEffect, useState } from 'react';
import Service from './Service/Service';
import { Spinner } from 'react-bootstrap';

function Services(props) {
    const [services, setServices] = useState([]);
    useEffect(()=>{
        fetch('./datas.JSON')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
  return (
        <div className="container">
            <div className="row">
                <div className="Services-wrapper my-5">
                    <h2 className="my-4">{props.title||'All Courses'}</h2>
                    <div className="Services">
                        {
                            services.length === 0 ? <Spinner animation="grow" /> : 
                            services.slice(0, props.items).map(service => <Service key={service.key} data={service}></Service>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default Services;