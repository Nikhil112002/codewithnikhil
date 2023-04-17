import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../blogs.json";
import Header from "./header";
import FooterAll from "./FooterAll";
const Post = () => {
  const params = useParams();
  let index = params.id;
  console.log(index);
  const postData = blogs[index];
  console.log(postData);
  return (
    <>
      <Header />
      <div class="container col-md-10 mx-auto">
        <div class="content my-5 pt-5">
          <h1
            class="text-center"
            style={{ fontSize: "36px", fontWeight: "700", lineHeight: "40px" }}
          >
            {postData.title}
          </h1>
          <p
            class="text-center"
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "rgb(75, 85, 99)",
            }}
          >
            Category: {postData.category}
          </p>
          <p
            class="text-center aname"
            style={{
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              color: "rgb(75, 85, 99)",
            }}
          >
            Author Name: {postData.authorName}
          </p>
          <img
            src={postData.cover}
            class="rounded mx-auto d-block postimg"
            style={{ height: "500px", width: "800px" }}
            alt="Human "
            width="80%"
          ></img>
          <div class="mt-3 pt-3">
            <p class="center txtcls">{postData.description}</p>
          </div>
        </div>
      </div>
      <FooterAll />
    </>
  );
};

export default Post;
