import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import BlogContainer from "../layouts/BlogContainer";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="blogWrapper">
      <BlogContainer>
        <div
          className="blogpost"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
      </BlogContainer>
    </div>
  );
};

BlogPost.propTypes = {
  data: PropTypes.object.isRequired
};

export default BlogPost;

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
