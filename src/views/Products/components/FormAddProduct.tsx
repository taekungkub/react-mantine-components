import { Box, Button, Card, Divider, Flex, Grid, Group, TextInput, Image } from "@mantine/core";
import PageTitle from "../../../components/PageTitle";
import { joiResolver, useForm } from "@mantine/form";
import Joi from "joi";
import DropImage from "./DropImage";
import { FileWithPath } from "@mantine/dropzone";
import { useState } from "react";

function FormAddProduct() {
  const schema = Joi.object({});

  const form = useForm({
    initialValues: { title: "", description: "", sku: "", price: "", category: "", tags: "", vendor: "", brand: "", images: [] },
    validate: joiResolver(schema),
  });

  function handleSubmit() {
    console.log("Submit !");
    console.log(form.values);
  }

  const [visible, setVisible] = useState(true);
  const [files, setFiles] = useState<FileWithPath[]>([]);
  const [images, setImages] = useState<FileWithPath[]>([]);
  const [isHasImage, setIsHasImage] = useState(false);
  
  function handleSetFile(e: any) {
    setImages((oldArray) => [...oldArray, ...e]);
    setIsHasImage(true);
    console.log(images);
  }

  function handleDeleteFile(index: number) {
    setImages((prevState) => prevState.filter((prevItem, i) => i !== index));
    if (images.length <= 1) {
      setIsHasImage(false);
    }
  }

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit())}>
      <Grid>
        <Grid.Col md={7}>
          <Flex direction={"column"} gap={20} mt={20}>
            <TextInput label="Product Title" />
            <TextInput label="description" />
          </Flex>

          <Divider my={40} />
          <PageTitle title="Pricing" subtitle="Section to config product sales information"></PageTitle>

          <Flex direction={"column"} gap={20} mt={20}>
            <Grid>
              <Grid.Col sm={6}>
                <TextInput label="SKU" />
              </Grid.Col>
              <Grid.Col sm={6}>
                <TextInput label="Price" />
              </Grid.Col>
            </Grid>
          </Flex>

          <Divider my={40} />
          <PageTitle title="Organizations" subtitle="Section to config the product attribute"></PageTitle>

          <Flex direction={"column"} gap={20} mt={20}>
            <Grid>
              <Grid.Col sm={6}>
                <TextInput label="Category" />
              </Grid.Col>
              <Grid.Col sm={6}>
                <TextInput label="Tags" />
              </Grid.Col>
              <Grid.Col sm={6}>
                <TextInput label="Brand" />
              </Grid.Col>
              <Grid.Col sm={6}>
                <TextInput label="Vendor" />
              </Grid.Col>
            </Grid>
          </Flex>
        </Grid.Col>
        <Grid.Col md={5}>
          <PageTitle title="Product Image" subtitle="Add or change image for the product"></PageTitle>

          <DropImage handleSetFile={handleSetFile} isHasImage={isHasImage} images={images} handleDeleteFile={handleDeleteFile} />
        </Grid.Col>
      </Grid>
      <Card p={0} py={20} my={10} sx={{ position: "sticky", bottom: 0 }}>
        <Button type="submit">Submit</Button>
        <Button variant="default">Discard</Button>
      </Card>
    </form>
  );
}

export default FormAddProduct;
