/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require(`path`);
const pages = require('./src/data/internal-links');
const slugify = require('slugify');

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
      const path = `${pages.users}/${slugify(obj.node.data.Name, {lower: true})}`
      console.log(path)
      createPage({
        // Path for this page — required
        path,
        component: profileTemplate,
        context: {
          data: obj.node.data
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
  })
}

