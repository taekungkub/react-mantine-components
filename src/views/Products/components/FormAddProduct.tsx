import { Box, Button, Card, Divider, Flex, Grid, Group, TextInput, Image, Textarea, Select, MultiSelect } from "@mantine/core";
import PageTitle from "@/components/PageTitle";
import { joiResolver, useForm } from "@mantine/form";
import Joi from "joi";
import DropImage from "./DropImage";
import { FileWithPath } from "@mantine/dropzone";
import { useEffect, useState } from "react";
import useToast from "@/hooks/useToast";

interface Props {
  inititialForm: {
    title: string;
    description: string;
    sku: string;
    price: string;
    stock: string;
    category: string;
    tags: string;
    vendor: string;
    brand: string;
    images: Array<string>;
  };
  category?: Array<string>;
}

function FormAddProduct({ inititialForm, category }: Props) {
  const schema = Joi.object({});
  const toast = useToast();

  const form = useForm({
    initialValues: inititialForm,
  });

  const [images, setImages] = useState<Array<FileWithPath | String>>(inititialForm.images);
  const [isHasImage, setIsHasImage] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setImages(inititialForm.images);
    form.setValues(inititialForm);
  }, [inititialForm]);

  useEffect(() => {
    form.setValues((prev) => ({ ...prev, images: images as Array<string> }));

    if (images.length === 0) {
      setIsHasImage(false);
    } else {
      setIsHasImage(true);
    }
  }, [images]);

  function handleSubmit() {
    console.log("Submit !");
    console.log(form.values);
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      toast.success();
    }, 1500);
  }

  function handleSetFileToList(e: Array<FileWithPath | String>) {
    if (images.length >= 10) {
      toast.error("Image is too many");
      return;
    }
    setImages((images) => [...images, ...e]);
  }

  function handleDeleteFile(index: number) {
    setImages((images) => images.filter((image, i) => i !== index));
  }

  useEffect(() => {
    if (inititialForm.images.length >= 1) {
      setIsHasImage(true);
    }
  }, [inititialForm.images]);

  return (
    <form onSubmit={form.onSubmit((values) => handleSubmit())}>
      <Grid>
        <Grid.Col md={7}>
          <Flex direction={"column"} gap={20} mt={20}>
            <TextInput label="Product Title" {...form.getInputProps("title")} />
            <Textarea label="description" {...form.getInputProps("description")} />
          </Flex>

          <Divider my={40} />
          <PageTitle title="Pricing" subtitle="Section to config product sales information"></PageTitle>

          <Flex direction={"column"} gap={20} mt={20}>
            <Grid>
              <Grid.Col sm={6}>
                <TextInput label="Price" {...form.getInputProps("price")} />
              </Grid.Col>
              <Grid.Col sm={6}>
                <TextInput label="Stock" {...form.getInputProps("stock")} />
              </Grid.Col>
              <Grid.Col sm={6}>
                <TextInput label="SKU" />
              </Grid.Col>
            </Grid>
          </Flex>

          <Divider my={40} />
          <PageTitle title="Organizations" subtitle="Section to config the product attribute"></PageTitle>

          <Flex direction={"column"} gap={20} mt={20}>
            <Grid>
              <Grid.Col sm={6}>
                <Select {...form.getInputProps("category")} label="Category" data={category ?? []} />
              </Grid.Col>
              <Grid.Col sm={6}>
                <MultiSelect
                  data={[
                    { value: "unisex", label: "Unisex" },
                    { value: "trend", label: "Trend" },
                  ]}
                  label="Tags"
                />
              </Grid.Col>
              <Grid.Col sm={6}>
                <Select
                  {...form.getInputProps("brand")}
                  label="Brand"
                  data={[
                    { value: "Apple", label: "Apple" },
                    { value: "fauji", label: "fauji" },
                    { value: "Dry Rose	", label: "Dry Rose	" },
                    { value: "Golden", label: "Golden" },
                    { value: "Huawei", label: "Huawei" },
                    { value: "OPPO", label: "OPPO" },
                    { value: "Samsung", label: "Samsung" },
                    { value: "Microsoft Surface	", label: "Microsoft Surface	" },
                  ]}
                />
              </Grid.Col>
              <Grid.Col sm={6}>
                <TextInput label="Vendor" />
              </Grid.Col>
            </Grid>
          </Flex>
        </Grid.Col>
        <Grid.Col md={5}>
          <PageTitle title="Product Image" subtitle="Add or change image for the product"></PageTitle>

          <DropImage
            handleSetFileToList={handleSetFileToList}
            isHasImage={isHasImage}
            images={images}
            handleDeleteFile={handleDeleteFile}
          />
        </Grid.Col>
      </Grid>
      <Card p={0} py={20} my={10} sx={{ position: "sticky", bottom: 0 }}>
        <Group>
          <Button type="submit" loading={isLoading}>
            Submit
          </Button>
          <Button variant="subtle">Discard</Button>
        </Group>
      </Card>
    </form>
  );
}

export default FormAddProduct;
