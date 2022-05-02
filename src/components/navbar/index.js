import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {BaseBtn} from "./nav.styles";

const TopNavigationComponent = () => {
    return (
        <Navbar bg="light" expand="lg" style={{ paddingLeft: '100px', height: '80px' }}>
            <Container fluid>
                <Navbar.Brand href="#">
                    <img
                        alt=""
                        src="/assets/UBLogo.png"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    UPBOX</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto"
                        style={{ maxHeight: '100px', display: 'flex', justifyContent:'space-between', paddingRight: '120px' }}
                    >
                        <Nav.Link href="#action1" style={{ paddingRight: '20px' }}>THIS MONTH</Nav.Link>
                        <Nav.Link href="#action2" style={{ paddingRight: '20px' }}>SKIN</Nav.Link>
                        <Nav.Link href="#action3" style={{ paddingRight: '20px' }}>HAIR</Nav.Link>
                        <Nav.Link href="#action4" style={{ paddingRight: '20px' }}>BATH</Nav.Link>
                        <Nav.Link href="#action5" style={{ paddingRight: '20px' }}>SALE</Nav.Link>
                        <BaseBtn
                            width="124px"
                            borderColor="#4A4A4A"
                            border-width="1px"
                            bgColor="white"
                            borderRadius="24px"
                            margin="0 0 0 30px"
                        >
                            LOG IN >
                        </BaseBtn>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default TopNavigationComponent;