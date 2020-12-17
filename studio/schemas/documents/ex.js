export default {
  name: "ex",
  type: "document",
  title: "Ex",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name"
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    },
    {
      name: "description",
      title: "Description",
      type: "bioPortableText"
    }
  ],
  preview: {
    select: {
      title: "name",
      media: "image"
    }
  }
};
