import { Button, Space, Typography } from 'antd'
import React from 'react'
import { logout } from '../../Redux/Slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from '@emotion/styled';

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    }
  return (
    <>
        <Container>
            <WebTitle>
                Rental Car App
            </WebTitle>
            <LogButton onClick={handleLogout}>
                Logout
            </LogButton>
        </Container>
    </>
  )
}

export default Header;

const Container = styled(Space)(() => ({
    display: 'flex',
    justifyContent: 'space-between',
    paddingInline: '10%',
    height: '80px'
  }));
const WebTitle = styled(Typography)(() => ({
    fontSize: '27px',
    fontWeight: '400'
  }));
const LogButton = styled(Button)(() => ({
    height: '40px',
    backgroundColor: '#553E97',
    color: 'white !important',
    '&:hover': {
        backgroundColor: '#432F7A !important',
      }
  }));