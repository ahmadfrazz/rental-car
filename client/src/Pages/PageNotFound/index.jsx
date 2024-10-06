import React from 'react';
import { Button, Result, Space, Typography } from 'antd';
import { WarningFilled } from '@ant-design/icons';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function PageNotFound() {
  const nav = useNavigate();
  const { user } = useSelector(state => state?.auth);
  const navigateTo = user.email ? '/dashboard' : '/login' 

  return (
    <>
        <Container>
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited doesn't exist or some other error occured."
              extra={<Button type="primary" onClick={() => nav(navigateTo)} style={{background: '#553E97'}}>Back Home</Button>}
            />
        </Container>
    </>
  )
}

export default PageNotFound;

const Container = styled(Space)(() => ({
    display: 'grid',
    alignContent: 'center',
    justifyItems: 'center',
    height: '100vh',
  }));
const DigitTypo = styled(Typography)(() => ({
    fontWeight: 'bold',
    fontSize: 80,
    color: '#5A5A5A',
  }));
const NotFoundTypo = styled(Typography)(() => ({
    fontWeight: 500,
    fontSize: 25,
    marginTop: '-20px',
    color: '#5A5A5A'
  }));
const Description = styled(Typography)(() => ({
    marginTop: 4,
    color: '#5A5A5A'
  }));
const BackButton = styled(Button)(() => ({
    background: '#553E97 !important',
    color: 'white !important',
    outline: 'none !important'
  }));