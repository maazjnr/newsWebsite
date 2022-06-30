import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ImLocation2 } from 'react-icons/im';
import { MdEmail } from 'react-icons/md';
import { MdCall } from 'react-icons/md';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {

    return(
        <Container className="footer">
        <Row>

            <Col  lg={3} md={6} sm={6} xm={6}>
            <h6><a className="instagram" href="https://www.instagram.com/maazjnr/" alt="email">
            <AiFillInstagram className="insta-icon"/>maazjnr</a></h6>
            </Col>


            <Col lg={3} md={6} sm={6} xm={6}>
            <h6 style={{
                color: "#8db0a5"
            }}> <ImLocation2 className="location-icon" />Abuja, Nigeria</h6>
            </Col>


            <Col lg={3} md={6} sm={6} xm={6}>
            <h6> <a className="email-link" href="tel:+2349059898242" alt="email">
            <MdCall className="email-icon"/> +2349059898242</a></h6>
            </Col>


            <Col lg={3} md={6} sm={6} xm={6}>
            <h6><a className="email-link" href="mailto:goalmaaz@gmail.com" alt="email">
            <MdEmail className="email-icon"/>
            goalmaaz@gmail.com
            </a></h6>
            </Col>

        </Row>

        </Container>
    )
}

export default Footer
