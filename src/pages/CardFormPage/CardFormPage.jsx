import { Container } from 'react-bootstrap'
import NewCardForm from '../../components/CardsForm/CardForm'

const NewCardPage = () => {
    return (
        <Container>
            <h1>New card</h1>
            <hr />
            <NewCardForm />
        </Container>
    )
}

export default NewCardPage
