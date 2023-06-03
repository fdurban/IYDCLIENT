import { Container } from 'react-bootstrap'
import CardForm from '../../components/CardsForm/CardForm'

const NewCardPage = () => {
    return (
        <Container>
            <h1>New card</h1>
            <hr />
            <CardForm />
        </Container>
    )
}

export default NewCardPage
