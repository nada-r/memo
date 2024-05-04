import Layout from "@/components/Layout";
import Container from "@/components/Container";
import FormRow from "@/components/FormRow";
import FormLabel from "@/components/FormLabel";
import InputText from "@/components/InputText";
import Button from "@/components/Button";

import { useState } from "react";

function Create() {
  /**
   * handleOnSubmit
   */

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [badge, setBadge] = useState(0);

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    let result = await fetch("http://localhost:3001/", {
      method: "post",
      body: JSON.stringify({ title, description, website, badge }),
      headers: {
        "Content-Type": "application/json",
      },
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
        setBadge(parseInt(value, 10)); // Convert string to number
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
