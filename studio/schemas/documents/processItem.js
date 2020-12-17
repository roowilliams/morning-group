export default {
  name: "processItem",
  type: "document",
  title: "Process Item",
  __experimental_actions: ["create", "update", "delete", "publish"],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "image",
      title: "Image",
      type: "figure"
    },
    {
      name: "body",
      title: "Body",
      type: "bioPortableText"
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true
    }
  ],
  preview: {
    select: {
      title: "title",
      media: "image"
    }
  }
};
