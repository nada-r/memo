import Layout from "@/components/Layout";
import Container from "@/components/Container";
import FormRow from "@/components/FormRow";
import FormLabel from "@/components/FormLabel";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

import { useState, useEffect } from "react";

function Create() {
  /**
   * handleOnSubmit
   */

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [badge, setBadge] = useState(0);
  const [image, setFile] = useState(null);


  useEffect(() => {
    if (image) {
      console.log("Image is now set:", image);
    }
  }, [image]);



  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    let result = await fetch("http://localhost:3001/", {
      method: "post",
      body: JSON.stringify({ title, description, website, badge, image }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log('file',image);

    const jsonData = {
      name: title,
      image: image,
    };

    console.log('jsonData', jsonData);

    const options = {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData)
    };

    fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', options)
    .then(response => response.json())
    .then(response => {
      setFile(response.IpfsHash);
      alert('Image loaded on IPFS successfully!');
    })
    .catch(err => {
      console.error(err);
      alert('Error uploading file!');
    });
  
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;

    switch (name) {
      case "name":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "message":
        setWebsite(value);
        break;
      case "badgeCount":
        setBadge(parseInt(value, 10));
        break;
      case "image":
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
      
        const uploadFileToIPFS = () => {
          if (!selectedFile) {
            alert('Please select a file first!');
            return;
          }
          const form = new FormData();
          form.append("file", selectedFile);
          form.append("pinataMetadata", JSON.stringify({ name: selectedFile.name }));
          form.append("pinataOptions", JSON.stringify({ cidVersion: 1 }));
      
          const options = {
            method: 'POST',
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT}`,
            },
            body: form
          };
      
          fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', options)
            .then(response => response.json())
            .then(response => {
              setFile(response.IpfsHash);
              alert('Image loaded on IPFS successfully!');
            })
            .catch(err => {
              console.error(err);
              alert('Error uploading file!');
            });
        };
      
        uploadFileToIPFS();
        break;
      default:
        break;
    }
  }

  return (
    <Layout>
      <Container>
        <h1 className="text-6xl font-black text-center text-slate-900 mb-20">
          Let's create your drop!
        </h1>

        <form
          className="max-w-md border border-gray-200 rounded p-6 mx-auto"
          onSubmit={handleOnSubmit}
        >
          <FormRow className="mb-5 text-black">
            <FormLabel htmlFor="name">Title</FormLabel>
            <InputText
              id="name"
              name="name"
              type="text"
              value={title}
              onChange={handleOnChange}
            />
          </FormRow>

          <FormRow className="mb-5 text-black">
            <FormLabel htmlFor="description">Description</FormLabel>
            <InputText
              id="description"
              name="description"
              type="text"
              value={description}
              onChange={handleOnChange}
            />
          </FormRow>

          <FormRow className="mb-5 text-black">
            <FormLabel htmlFor="message">
              Website your attendees should visit
            </FormLabel>
            <InputText
              id="message"
              name="message"
              type="text"
              value={website}
              onChange={handleOnChange}
            />
          </FormRow>

          <FormRow className="mb-5 text-black">
            <FormLabel htmlFor="badgeCount">
              How many badges would you like to drop?
            </FormLabel>
            <InputText
              id="badgeCount"
              name="badgeCount"
              type="number"
              value={badge}
              onChange={handleOnChange}
            />
          </FormRow>

          <FormRow className="mb-5 text-black">
            <FormLabel htmlFor="image">Add Artwork</FormLabel>
            <input
              id="image"
              type="file"
              name="image"
              onChange={handleOnChange}
            />
          </FormRow>

          <Button>Submit</Button>
        </form>
      </Container>
    </Layout>
  );
}

export default Create;
