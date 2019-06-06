import React from "react";
import { Link, graphql } from "gatsby";
import "../Styles/Blog.css";
import NavBar from "../Components/NavBar";

const Blog = ({ data }) => (
  <div className="blogWrapper">
    <NavBar />
    {/* TODO: Change the head title in the future... */}
    {data.allMarkdownRemark.edges.map(({ node }) => {
      console.log(node);
      return (
        <article key={node.id} className="blog-post-item-container">
          {/* TODO: Make this an image container */}

          <Link to={node.fields.slug} className="blog-post-item-link">
            <div className="blogpostContainer">{node.frontmatter.title}</div>
          </Link>
        </article>
      );
    })}
  </div>
);

export default Blog;

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          id
          fields {
            slug
          }
        }
      }
    }
  }
`;
