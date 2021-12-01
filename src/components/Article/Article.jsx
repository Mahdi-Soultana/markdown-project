import React from "react";
import ReactMarkdown from "react-markdown";
function Article({ markdown }) {
  return (
    <div>
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  );
}

export default Article;
