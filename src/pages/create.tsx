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

  const [file, setFile] = useState<File | undefined>();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [website, setWebsite] = useState("");
  const [badge, setBadge] = useState(0);

  async function handleOnSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const formData = new FormData();
  }

  function handleOnChange(e: React.FormEvent<HTMLInputElement>) {
    console.log("file", file);
    setFile(target.files[0]);
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
            <InputText id="name" name="name" type="text" value={title} />
          </FormRow>

          <FormRow className="mb-5 text-black">
            <FormLabel htmlFor="email">Description</FormLabel>
            <InputText
              id="email"
              name="email"
              type="email"
              value={description}
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
