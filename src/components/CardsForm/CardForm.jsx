import Form from 'react-bootstrap/Form';

const NewCardForm = () => {

    return (
        <>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Disabled input</Form.Label>
                <Form.Control placeholder="abled input" abled />
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Label>Disabled select menu</Form.Label>
                <Form.Select abled>
                    <option>Anatomy</option>
                    <option>Biology</option>
                    <option>Chemistry</option>
                    <option>Geography</option>
                    <option>History</option>
                    <option>Law</option>
                    <option>Maths</option>
                    <option>Music</option>
                    <option>Pograming</option>
                    <option>Fisics</option>
                    <option>Other</option>
                </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Can't check this" disabled />
            </Form.Group>
        </>
    );
}

export default NewCardForm
