import { Container, Card, Button, Col } from "react-bootstrap"
import cardsService from "../../services/cards.services"
import { useEffect, useState } from "react"
import CardResume from "../CardResume/CardResume"


const CardMainContent = ({ cardInfoContent }) => {


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

    const updateContentInServer = () => {
        cardsService
            .editCards(cardID, {
                main_content: mainContent,
                resume1,
                resume2,
                resume3,
                resume4,
            })
    }


    if (!cardInfoContent) {
        return <h1> loading </h1>
    }

    return (
        <Container>

            <CardResume content={mainContent} setContent={setMainContent} onSubmmit={updateContentInServer} />

            <hr />
            <CardResume content={resume1} setContent={setResume1} onSubmmit={updateContentInServer} />

            <hr />
            <CardResume content={resume2} setContent={setResume2} onSubmmit={updateContentInServer} />

            <hr />
            <CardResume content={resume3} setContent={setResume3} onSubmmit={updateContentInServer} />

            <hr />
            <CardResume content={resume4} setContent={setResume4} onSubmmit={updateContentInServer} />

        </Container >

    )
}
export default CardMainContent