import React from 'react';
import { Link } from 'react-router-dom';
import './FooterCol.css';

const FooterCol = (props) => {
    return (
        <div className="col-md-3 ">
            <h6 className="text-primary">{props.menuTitle ? props.menuTitle : " "}</h6>
            <ul className="list-unstyled mt-4 tex-decoration">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} className="text-secondary">{item.name}</Link></li>)
                 }
            </ul>
            {props.children && props.children}
        </div>
    );
};

export default FooterCol;