import CardsComponents from "../Card/CardComponent"
import cardsService from '../../services/cards.services'
import { Row } from 'react-bootstrap'
import { useEffect, useState } from "react"
import { Link, useParams } from 'react-router-dom'
import userService from "../../services/user.services"
import HomeCard from "../HomeCard/HomeCard"

const SubjectList = () => {
    return (
        <>
            <Row className='custom-padding-subject-list'>
            <p>What subject studying today?</p>
                <HomeCard title="Maths" subtitle={<Link to={`subject/MATH`}>click here</Link>}></HomeCard>
                <HomeCard title="Anatomy" subtitle={<Link to={`subject/ANATOMY`}>click here</Link>}></HomeCard>
                <HomeCard title="Biology" subtitle={<Link to={`subject/BIOLOGY`}>click here</Link>}></HomeCard>
                <HomeCard title="Chemistry" subtitle={<Link to={`subject/CHEMISTRY`}>click here</Link>}></HomeCard>
                <HomeCard title="Geography" subtitle={<Link to={`subject/GEOGRAPHY`}>click here</Link>}></HomeCard>
                <HomeCard title="History" subtitle={<Link to={`subject/HISTORY`}>click here</Link>}></HomeCard>
                <HomeCard title="Law" subtitle={<Link to={`subject/LAW`}>click here</Link>}></HomeCard>
                <HomeCard title="Music" subtitle={<Link to={`subject/MUSIC`}>click here</Link>}></HomeCard>
                <HomeCard title="Programming" subtitle={<Link to={`subject/PROGRAMMING`}>click here</Link>}></HomeCard>
                <HomeCard title="Physics" subtitle={<Link to={`subject/PHYSICS`}>click here</Link>}></HomeCard>
                <HomeCard title="Other" subtitle={<Link to={`subject/OTHER`}>click here</Link>}></HomeCard>
        </Row>
        </>
    )
}

export default SubjectList