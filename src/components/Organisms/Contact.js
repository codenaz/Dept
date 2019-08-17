import React, { useState, useEffect, useCallback } from 'react';
import { Flex, Box } from 'reflexbox';
import { Input } from '../Atoms/Input';
import { SecondaryButton } from '../Atoms/Button';

export const Contact = () => {
  const [form, setForm] = useState({
    name: { value: '' },
    email: { value: '' },
    message: { value: '' }
  });
  const [formError, setFormError] = useState({});

  const validateEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  const validateForm = useCallback(form => {
    const error = {};
    if (!form.message.value) {
      error.message = 'Message cannot be empty';
    }
    if (!form.name.value) {
      error.name = 'Name cannot be empty';
    }
    if (!validateEmail(form.email.value)) {
      error.email = 'This email is invalid';
    }
    if (!form.email.value) {
      error.email = 'Email cannot be empty';
    }
    setFormError(error);
  }, []);

  useEffect(() => {
    validateForm(form);
  }, [form, validateForm]);

  const handleFormChange = e => {
    e.preventDefault();
    const updatedForm = { ...form };
    updatedForm[e.target.name] = { touched: true, value: e.target.value };
    setForm(updatedForm);
  };

  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      width={'100%'}
      px={['1rem', '1rem', '2rem']}
    >
      <Flex
        lineHeight={['1.07']}
        mt={['3rem']}
        textAlign={['center', 'center', 'left']}
        fontSize={['1.8rem', '1.8rem', '3.6rem']}
        width={[1, 1, 1 / 3]}
        p={[0, 0, '3rem']}
      >
        <Box as='h4'>QUESTION? WE ARE HERE TO HELP!</Box>
      </Flex>
      <Flex
        flexDirection={['column', 'column', 'row']}
        flexWrap='wrap'
        px={['2%', '2%', '0']}
        mt={'3rem'}
        width={[1, 1, 2 / 3]}
      >
        <Flex
          mt={['1rem']}
          width={[1, 1, 1 / 2]}
          flexDirection='column'
          pr={[0, 0, '2rem']}
        >
          <label htmlFor='name'>Name</label>
          <Input
            name='name'
            id='name'
            value={form.name.value}
            onChange={handleFormChange}
          />
          {form.name.touched && formError.name && (
            <Box as='p' color='red'>
              {formError.name}
            </Box>
          )}
        </Flex>
        <Flex
          mt={['1rem']}
          width={[1, 1, 1 / 2]}
          flexDirection='column'
          pr={[0, 0, '2rem']}
        >
          <label htmlFor='email'>Email</label>
          <Input
            name='email'
            id='email'
            value={form.email.value}
            onChange={handleFormChange}
          />
          {form.email.touched && formError.email && (
            <Box as='p' color='red'>
              {formError.email}
            </Box>
          )}
        </Flex>
        <Flex
          mt={['1rem']}
          width={[1, 1, 1 / 2]}
          flexDirection='column'
          pr={[0, 0, '2rem']}
        >
          <label htmlFor='message'>Message</label>
          <Input
            height={'5rem'}
            name='message'
            id='message'
            value={form.message.value}
            onChange={handleFormChange}
          />
          {form.message.touched && formError.message && (
            <Box as='p' color='red'>
              {formError.message}
            </Box>
          )}
        </Flex>
        <Flex width={1}>
          <SecondaryButton width={'30%'}>SEN</SecondaryButton>
        </Flex>
      </Flex>
    </Flex>
  );
};
