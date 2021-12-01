import React, { useState } from "react";

function MarkDown({ markdownState }) {
  const [value, setValue] = markdownState;
  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
    ></textarea>
  );
}

export default MarkDown;
