import { Container, Card, Button, Col } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import { useEffect, useState } from "react"
import CardResume from "../CardResume/CardResume"

const CardMainContent = ({ cardInfoContent }) => {

    // TODO: FUSIONAR UN ESTADO ÚNICO CON LOS RESUMENES
    const cardID = cardInfoContent._id

    const [mainContent, setMainContent] = useState(cardInfoContent.main_content)
    const [resume1, setResume1] = useState(cardInfoContent.resume1)
    const [resume2, setResume2] = useState(cardInfoContent.resume2)
    const [resume3, setResume3] = useState(cardInfoContent.resume3)
    const [resume4, setResume4] = useState(cardInfoContent.resume4)

    useEffect(() => {
        setMainContent(cardInfoContent.main_content)
        setResume1(cardInfoContent.resume1)
        setResume2(cardInfoContent.resume2)
        setResume3(cardInfoContent.resume3)
        setResume4(cardInfoContent.resume4)
    }, [cardInfoContent])

    if (!cardInfoContent) {
        return <h1> loading </h1>
    }

    return (
        <>
            <Container>
                <CardResume field={'main_content'} content={mainContent} setContent={setMainContent} cardID={cardID} owner={cardInfoContent.owner} />

                <hr style={{ width: '80rem' }} />
                <CardResume field={'resume1'} content={resume1} setContent={setResume1} cardID={cardID} owner={cardInfoContent.owner} />

                <hr style={{ width: '80rem' }} />
                <CardResume field={'resume2'} content={resume2} setContent={setResume2} cardID={cardID} owner={cardInfoContent.owner} />

                <hr style={{ width: '80rem' }} />
                <CardResume field={'resume3'} content={resume3} setContent={setResume3} cardID={cardID} owner={cardInfoContent.owner} />

                <hr style={{ width: '80rem' }} />
                <CardResume field={'resume4'} content={resume4} setContent={setResume4} cardID={cardID} owner={cardInfoContent.owner} />
            </Container >
            <Button type="danger">Like</Button>
        </>
    )
}

export default CardMainContent

