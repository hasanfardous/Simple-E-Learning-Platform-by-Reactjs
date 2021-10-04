import { Carousel } from 'react-bootstrap';
import imgNotFound from '../../assets/not-found.jpg';
import './Slider.css';

const Slider = () => {
    const sliderDatas = [
        {id: 1, img: 'https://me.hasanfardous.com/external/slider/slider1.jpg', title: 'First Slide Label', caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'},
        {id: 2, img: 'https://me.hasanfardous.com/external/slider/slider2.jpg', title: 'Second Slide Label', caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'},
        {id: 3, img: 'https://me.hasanfardous.com/external/slider/slider3.jpg', title: 'Third Slide Label', caption: 'Nulla vitae elit libero, a pharetra augue mollis interdum.'}
    ];
    return (
        <Carousel fade>
            {
                sliderDatas.map(slider => <Carousel.Item key={slider.id}>
                    <img src={slider.img} className="d-block w-100" alt="not found"/>
                    <Carousel.Caption>
                    <h3>{slider.title}</h3>
                    <p>{slider.caption}</p>
                    </Carousel.Caption>
                </Carousel.Item>)
            }
        </Carousel>
    );
};

export default Slider;