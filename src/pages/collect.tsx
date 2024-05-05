import React, { useState } from 'react';
import Layout from '@/components/Layout';
import Container from '@/components/Container';
import FormRow from '@/components/FormRow';
import FormLabel from '@/components/FormLabel';
import InputText from '@/components/InputText';
import Button from '@/components/Button';
import { useLocation } from 'wouter';

function Collect() {
  const [inputData, setInputData] = useState('');
  const [location, setLocation] = useLocation();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://hook.eu1.make.com/ntq6gutbmn1tf96o7ynykxgr7oijgb9n', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: inputData }),
      });

      if (response.ok) {
        setLocation('/');
      } else {
        throw new Error('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <Layout>
      <Container>
        <form onSubmit={handleSubmit} className="max-w-md border border-gray-200 rounded p-6 mx-auto">
          <FormRow className="mb-5 text-black">
            <FormLabel htmlFor="inputData">Enter Data:</FormLabel>
            <InputText
              id="inputData"
              name="inputData"
              type="text"
              value={inputData}
              onChange={handleInputChange}
            />
          </FormRow>
          <Button>Send</Button>
        </form>
      </Container>
    </Layout>
  );
}

export default Collect;