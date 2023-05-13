import React, { useEffect } from 'react';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import { getAccessToken } from '../../utils/accessToken';
import _replace from 'lodash/replace'
import routes from '../../routes';
import './Header.css';
const Header = () =>{
  const openCataloguePanel = () => {
    let url = routes.CATALOG
    url = _replace(url, ':page', 1)
    url = _replace(url, ':category', 0)
    return url
}
  useEffect(() => {
  }, [])
    return (
        <Navbar className='header' collapseOnSelect expand="sm">
          <Container>
            <Navbar.Brand href={routes.HOME}><img src="/example-transparent.png" width="64" height="64"/></Navbar.Brand>
            <Navbar.Text className="logo-text">
                <h1>VINBAT</h1>
            </Navbar.Text>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto"/>
              <Nav>
              <div className='link'>
              <Nav.Link href={openCataloguePanel()}>
                    Каталог
              </Nav.Link>
              </div>
              <div className='link'>
            { getAccessToken() === null ?
                <NavDropdown title="Авторизація" id="collasible-nav-dropdown">
                  <NavDropdown.Item href={routes.LOGIN}>
                    Увійти
                  </NavDropdown.Item>
                  <NavDropdown.Item href={routes.REGISTER}>
                    Зареєструватися
                  </NavDropdown.Item>
                </NavDropdown> 
                :
                <Nav.Link className='link' href={routes.MY_ACCOUNT}>
                    Мій профіль
                    </Nav.Link>
            }
              </div>
              <div className='link'>
                <Nav.Link href={routes.SUPPORT}>
                    Підтримка
                    </Nav.Link>
              </div>
              <div className='link'>
                <Nav.Link href={routes.ABOUT}>
                    Про нас
                    </Nav.Link>
              </div>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}
export default Header;