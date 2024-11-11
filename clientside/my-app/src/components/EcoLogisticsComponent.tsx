import React from 'react';

const EcoLogisticsComponent = () => {
    return (
        <div className="eco-logistics-container">
            <h1 className="title">Eco-Logistics</h1>
            <div className="path-section">
                <div className="circle">
                    <div className="click-icon">👆</div>
                </div>
                <div className="arrow"></div>
                <div className="circle"></div>
                <div className="arrow"></div>
                <div className="circle"></div>
                <div className="arrow"></div>
                <div className="circle"></div>
                <div className="arrow"></div>
                <div className="circle"></div>
            </div>

            <div className="why-us-section">
                <h2>WHY US ?!?</h2>
                <div className="text-block">
                    <ul>
                        <li>Material liability to the client;</li>
                        <li>High level of service, even in December;</li>
                        <li>GPS monitoring of transport;</li>
                        <li>Собственный и привлеченный транспорт;</li>
                        <li>Full range of services for online stores.</li>
                    </ul>
                    <ul>
                        <li>Partnership relationships;</li>
                        <li>Social obligations;</li>
                        <li>Environmental responsibility;</li>
                        <li>Growth in technology and quality of services;</li>
                        <li>Warehouse within the ring road.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default EcoLogisticsComponent;
