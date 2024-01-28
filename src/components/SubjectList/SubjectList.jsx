import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import HomeCard from "../HomeCard/HomeCard";
import './SubjectList.css'

const SubjectList = () => {
    return (
        <Row>
            <Col md={4}>
                <HomeCard title="Maths" subtitle={<Link to={`subject/MATH`} className='subjectlink'>click here</Link>} />
            </Col>
            <Col md={4}>
                <HomeCard title="Anatomy" subtitle={<Link to={`subject/ANATOMY`} className='subjectlink'>click here</Link>} />
            </Col>
            <Col md={4}>
                <HomeCard title="Biology" subtitle={<Link to={`subject/BIOLOGY`} className='subjectlink'>click here</Link>} />
            </Col>
            <Col md={4}>
                <HomeCard title="Chemistry" subtitle={<Link to={`subject/CHEMISTRY`} className='subjectlink'>click here</Link>} />
            </Col>
            <Col md={4}>
                <HomeCard title="Geography" subtitle={<Link to={`subject/GEOGRAPHY`} className='subjectlink'>click here</Link>} />
            </Col>
            <Col md={4}>
                <HomeCard title="History" subtitle={<Link to={`subject/HISTORY`} className='subjectlink'>click here</Link>} />
            </Col>
            <Col md={4}>
                <HomeCard title="Law" subtitle={<Link to={`subject/LAW`} className='subjectlink'>click here</Link>} />
            </Col>
            <Col md={4}>
                <HomeCard title="Music" subtitle={<Link to={`subject/MUSIC`} className='subjectlink'>click here</Link>} />
            </Col>
            <Col md={4}>
                <HomeCard title="Programming" subtitle={<Link to={`subject/PROGRAMMING`} className='subjectlink'>click here</Link>} />
            </Col>
            <Col md={4}>
                <HomeCard title="Physics" subtitle={<Link to={`subject/PHYSICS`} className='subjectlink'>click here</Link>} />
            </Col>
            <Col md={4}>
                <HomeCard title="Other" subtitle={<Link to={`subject/OTHER`} className='subjectlink'>click here</Link>} />
            </Col>
        </Row>
    );
};

export default SubjectList;
