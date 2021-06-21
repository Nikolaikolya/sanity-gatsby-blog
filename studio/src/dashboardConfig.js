export default {
  widgets: [
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
                  buildHookId:
                    "60d0b7d9d668d80aad044d9c",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-m9h968ht",
                  apiId: "de8a42f5-cd72-4006-9904-e72ac7e91d7f",
                },
                {
                  buildHookId: "60d0b7dada44c924dd9c043e",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-4rxwxchs",
                  apiId: "32044346-cb5f-46fc-a0af-5fc41deaaee5",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Nikolaikolya/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-4rxwxchs.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
