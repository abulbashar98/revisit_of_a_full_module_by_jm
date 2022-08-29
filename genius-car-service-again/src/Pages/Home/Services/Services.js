import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    return (
        <div className='container'>
            <h1 className='text-primary text-center my-5'>Our Services</h1>
            <div className="services-container">
                {
                    services.map(service => <Service
                        key={service.id}
                        // name={service.name}
                        // img={service.img}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services; <h1>Services: </h1>