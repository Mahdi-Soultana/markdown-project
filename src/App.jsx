import React, { useState } from "react";
import Article from "./components/Article/Article";
import MarkDown from "./components/Markdown/MarkDown";

const markInit = `
### Heading

# H1
## H2
### H3

### Bold

**bold text**

### Italic

*italicized text*

### Blockquote

> blockquote

### Ordered List

1. First item
2. Second item
3. Third item

### Unordered List

- First item
- Second item
- Third item



### Horizontal Rule

---

### Link

[Markdown Guide](https://www.markdownguide.org)

### Image

![alt text](https://www.markdownguide.org/assets/images/tux.png)

## Extended Syntax

These elements extend the basic syntax by adding additional features. Not all Markdown applications support these elements.

### Table

| Syntax | Description |
| ----------- | ----------- |
| Header | Title |
| Paragraph | Text |



### Footnote

Here's a sentence with a footnote. [^1]

[^1]: This is the footnote.

### Heading ID

### My Great Heading {#custom-id}

### Definition List

term
: definition

### Strikethrough

~~The world is flat.~~

### Task List

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
`;

function App() {
  const markdownState = useState(markInit);
  return (
    <>
      <h1 className="title">Convert Your Mark-Down</h1>
      <div className="container">
        <Article markdown={markdownState[0]} />
        <MarkDown markdownState={markdownState} />
      </div>
    </>
  );
}

export default App;
