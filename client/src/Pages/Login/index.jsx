import React, { useEffect } from 'react';
import { Button, Form, Input, Space, Typography, message } from 'antd';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../Redux/Slices/authSlice';


const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user } = useSelector(state => state?.auth);
  
    useEffect(() => {
      user.email && navigate('/dashboard');
    }, [])

    if(user.email){
        return (
            <></>
        )
    }

    const onFinish = (values) => {

      fetch('https://rental-car-api.vercel.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then((res) => 
        res.json()
      ).then((data) => {
        if(data.success){
            let userObj = {
              email: values?.email,
              accessToken: data?.accessToken,
            }
            dispatch(login(userObj));
            navigate('/dashboard');
        }else{
          message.error(`Error: ${data.message}`);
        }
      }).catch((err) => {
        console.log(err);
      })
    };
    
    const onFinishFailed = (errorFields) => {
        const consecutiveSpacesError = errorFields.find((field) =>
            field.errors.toString().includes("consecutive spaces")
        );
        consecutiveSpacesError
        ? message.error("Please Remove Consecutive Spaces!")
        : message.error("Please Fill Required Fields!");
    };
    
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      };

    return (
        <Container>
            <Form
                layout="vertical"
                style={{
                    maxWidth: 500,
                    width: 'auto',
                    margin: '0 auto',
                    border: '1px solid #d9d9d9',
                    borderRadius: '20px',
                    padding: '40px 30px'
                }}
                onFinish={onFinish}
                onFinishFailed={({ errorFields }) => onFinishFailed(errorFields)}
            >
                <Heading>
                    Sign In
                </Heading>
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                          whitespace: true,
                          required: true,
                          validator: (_, value) => {
                            if (!value || value.trim() === "") {
                              return Promise.reject("please enter email");
                            } else if (/\s{2,}/.test(value)) {
                              return Promise.reject(
                                "please remove consecutive spaces"
                              );
                            }else if (!isValidEmail(value)) {
                              return Promise.reject("please enter a valid email");
                            }
                            return Promise.resolve();
                          },
                        },
                      ]}
                >
                    <InputUsername />
                </Form.Item>
            
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                >
                <InputPassword />
                </Form.Item>
            
                <Form.Item>
                    <LogButton type="primary" htmlType="submit">
                        Submit
                    </LogButton>
                </Form.Item>
            </Form>
        </Container>
    )
};
export default Login;

const Heading = styled(Typography)(() => ({
fontSize: 'clamp(22px, 3vw, 30px)',
fontWeight: '700',
textAlign: 'center',
margin: '0px auto 30px'
  }));

const Container = styled(Space)(() => ({
    display: 'grid',
    height: '100vh',
    marginInline: '20px'
  }));

  const inputStyle = {
    height: '40px',
    '&:hover': {
        borderColor: '#553E97',
      },
      "&:focus, &:active, &:focus-within": {
        borderColor: '#553E97',
        boxShadow: 'none !important',
      }
  }
const InputUsername = styled(Input)(() => (inputStyle));
const InputPassword = styled(Input.Password)(() => (inputStyle));

const LogButton = styled(Button)(() => ({
    marginTop: '20px',
    width: '100%',
    height: '40px',
    backgroundColor: '#553E97',
    color: 'white',
    '&:hover': {
        backgroundColor: '#432F7A !important',
      }
  }));