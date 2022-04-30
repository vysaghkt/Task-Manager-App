import { useFormContext } from "react-hook-form"
import { Button, Container, Form, Row } from "reactstrap"
import "./styles.css"

const HomeView: React.FC<{
    onSubmit: VoidFunction
}> = props => {

    const { register } = useFormContext()

    return (
        <Container className="d-flex justify-content-center mt-5">
            <Row>
                <Form onSubmit={props.onSubmit}>
                    <input
                        type="text"
                        {...register("task")}
                        placeholder="Enter Task"
                        autoComplete="off"
                    />
                    <Button
                        type="submit"
                        className="submit-btn"
                    >
                        Add
                    </Button>
                </Form>
            </Row>
        </Container>
    )
}

export default HomeView