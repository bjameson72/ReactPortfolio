import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </>
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
