import React from 'react';
import './Footer.css';

import logo_inria from '../images/logo_inria.png'
import logo_uca from '../images/logo_uca.png'
import logo_cnrs from '../images/logo_cnrs.png'
import logo_mines from '../images/logo_mines.png'
import logo_cirad from '../images/logo_cirad.png'

const Footer = () => (
    <div className="panelFooter">
        <div className="footer-wrap">
            <div className="widgetFooter">
                <span className="text-muted">ISSA project links</span>
                <ul id="footerUsefulLink">
                    <li>
                        <a href="https://issa.cirad.fr/">Project website</a>
                    </li>
                    <li>
                        <a href="https://github.com/issa-project">Github</a>
                    </li>
                    <li>
                        <a href="mailto:issa-contact@cirad.fr">Contact</a>
                    </li>
                </ul>
            </div>

            <div className="">
                <div className="widgetFooter">
                    <img src={logo_cirad} width={80} alt="Cirad"/>
                </div>
                <div className="widgetFooter">
                    <img src={logo_mines} width={70} alt="Mines d'Alès"/>
                </div>
                <div className="widgetFooter">
                    <img src={logo_inria} width={90} alt="Inria"/>
                </div>
                <div className="widgetFooter">
                    <img src={logo_uca} width={60} alt="UCA"/>
                </div>
                <div className="widgetFooter">
                    <img src={logo_cnrs} width={45} alt="CNRS"/>
                </div>
            </div>
        </div>
    </div>
);

export default Footer;
