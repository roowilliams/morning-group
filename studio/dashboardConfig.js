export default {
  widgets: [
    // {
    //   name: "sanity-tutorials",
    //   options: {
    //     templateRepoId: "sanity-io/sanity-template-gatsby-portfolio"
    //   }
    // },
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "5fd9d3c45dea019fb89483fb",
                  title: "Sanity Studio",
                  name: "morning-group-studio",
                  apiId: "c3ed0aa8-abe9-4c72-9886-0ee3b3e832b3"
                },
                {
                  buildHookId: "5fd9d3c4e1a3389d5fd0a4ab",
                  title: "Portfolio Website",
                  name: "morning-group",
                  apiId: "12ad96ef-24d4-457e-8af4-2ba827ae4de4"
                }
              ]
            }
          }
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/roowilliams/morning-group",
            category: "Code"
          },
          {
            title: "Frontend",
            value: "https://morning-group.netlify.app",
            category: "apps"
          }
        ]
      }
    },
    // {name: 'project-users', layout: {height: 'auto'}},
    {
      name: "document-list",
      options: { title: "Recent projects", order: "_createdAt desc", types: ["sampleProject"] },
      layout: { width: "medium" }
    }
  ]
};
