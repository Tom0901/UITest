import React from "react";
import Layout from "../../components/Layout";
import PostBuilder from "../../components/PostBuilder";

export default function Finances() {
  return (
    <PostBuilder
      title="Finances"
      items={[
        { payload: "some text", type: "text" },
        { payload: "/Entertainment.png", type: "img" },
      ]}
    />
  );
}
