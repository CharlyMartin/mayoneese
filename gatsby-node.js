/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const pages = require('./src/data/internal-links');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const profileTemplate = path.resolve(`src/templates/profile.jsx`);
  
  return graphql(`
    query People {
      allAirtable(filter: {table: {eq: "People"}}) {
        edges {
          node {
            data {

              Name
              Songs {
                data {
                  Name
                  Recipe

                  Artist {
                    data {
                      Name
                    }
                  }
                }
              }

            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {throw result.errors};
    
    result.data.allAirtable.edges.forEach(obj => {
      console.log(obj.node.data.Name);
    })

    // Create blog post pages.
    // result.data.allMarkdownRemark.edges.forEach(edge => {
    //   createPage({
    //     // Path for this page — required
    //     path: `${edge.node.fields.slug}`,
    //     component: blogPostTemplate,
    //     context: {
    //       // Add optional context data to be inserted
    //       // as props into the page component..
    //       //
    //       // The context data can also be used as
    //       // arguments to the page GraphQL query.
    //       //
    //       // The page "path" is always available as a GraphQL
    //       // argument.
    //     },
    //   })
    // })
  })
}

