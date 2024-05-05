import React, { useState } from 'react';
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
    <div className="pt-20">
      <Container>
        <div className="flex justify-center">
          <div className="w-40 h-40 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
            <img src="path_to_image.jpg" alt="Embedded Image" />
          </div>
        </div>
        <div className="pt-20">
          <form onSubmit={handleSubmit} className="max-w-md border border-gray-200 rounded p-6 mx-auto">
            <FormRow className="mb-5 text-black">
              <FormLabel htmlFor="inputData">Enter your email to claim your badge</FormLabel>
              <InputText
                id="inputData"
                name="inputData"
                type="text"
                value={inputData}
                onChange={handleInputChange}
              />
            </FormRow>
            <Button className="w-full bg-grey-500 hover:bg-black-700 text-white font-bold py-2 px-4 rounded">Claim</Button>
            <div className="text-center text-2xl my-4">OR</div>
            <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">CLAIM WITH WALLET</Button>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Collect;