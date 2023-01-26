import React from 'react';
import { styled } from '@stitches/react';
import { Link, useNavigate } from 'react-router-dom';

const Sidebar = styled('nav', {
  width: '200px',
  height: '100vh',
  background: '#000',
  color: '#fff'
});

const Header = styled('div', {
  padding: '25px 0px',
  textAlign: 'center',
  fontWeight: 'bold',
  fontFamily: 'revert',
  fontSize: '30px'
});

const Menu = styled('ul', {
  display: 'block',
});

const MenuItem = styled('li', {
  padding: '16px 18px 16px 16px',
  '&:hover': {
    color: '#4480C5'
  }
});

export const Routes = () => {
  const navigate = useNavigate();
  const HandleRedirect = () => {
    navigate('/sites')
    navigate(0)
  }

  return (
    <Sidebar>
      <Header>
        <p>HostGator</p>
      </Header>
      <Menu>
        <Link to="/sites" onClick={HandleRedirect}>
          <MenuItem>
            Sites
          </MenuItem>
        </Link>
        <Link to="/emails-list">
          <MenuItem>
            Emails
          </MenuItem>
        </Link>
        <Link to="/dominios">
          <MenuItem>
            Domínios
          </MenuItem>
        </Link>
      </Menu>
    </Sidebar>
  )
}
