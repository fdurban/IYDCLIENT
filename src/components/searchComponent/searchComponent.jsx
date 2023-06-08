import { useState } from "react"
import { Form } from "react-bootstrap"


const USearch = ({ filteredUser }) => {

    const [userQuery, setUserQuery] = useState('')

    const handleQueryChange = e => {
        const inputValue = e.target.value
        setUserQuery(inputValue)
        filteredUser(inputValue)
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="U-Search">
                <Form.Control type="text"
                    placeholder="Search by user"
                    value={userQuery}
                    // value={userQuery}
                    onChange={handleQueryChange} />
            </Form.Group>
        </Form>
    )
}

export default USearch