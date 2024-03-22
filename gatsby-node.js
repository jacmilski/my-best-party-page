exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  const postData = await graphql(`
    {
      allDatoCmsRealization {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  postData.data.allDatoCmsRealization.edges.map(({ node }) => {
    createPage({
      path: `/realizacja/${node.slug}`,
      component: require.resolve(
        "./src/components/templates/RealizationTemplate/RealizationTemplate.js"
      ),
      context: {
        realizationId: node.id,
      },
    });
  });
};
