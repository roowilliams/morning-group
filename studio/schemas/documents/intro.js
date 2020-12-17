export default {
  name: "intro",
  type: "document",
  title: "Intro",
  __experimental_actions: [
    "create",
    "update",
    // 'delete',
    "publish"
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    },
    {
      name: "body",
      type: "text",
      title: "Body",
      description: "Describe who we are and what we do."
    }
  ]
};
