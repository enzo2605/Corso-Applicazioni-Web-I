import { Container, Navbar } from 'react-bootstrap'
import PropTypes from 'prop-types';

function NavHeader(props) {
    return( 
    <Navbar bg="dark" data-bs-theme="dark"> 
        <Container fluid>
            <Navbar.Brand> HeapOverrun - Question # { props.questionNum } </Navbar.Brand>
        </Container>
    </Navbar>
    )
}

// Validazione della props
NavHeader.propTypes = {
    questionNum: PropTypes.number
}

export default NavHeader;