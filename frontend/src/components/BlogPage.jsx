import { useState } from "react";
import Blog from "./Blog";
import BlogDetailed from "./BlogDetailed";
import { Route, Routes } from "react-router-dom";
import { Form } from "react-bootstrap";
import BlogFake from "./BlogFake";
import fetchData from "../blogs";

export default function BlogPage() {

  const blogdataPromise = fetchData();
  const [blogdata,setBlogdata]= useState([{}])

  blogdataPromise.then(data => {
    setBlogdata([...data.blogData]);
  });
  

  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogdata.filter((blog) => {
   const blogDetails = blog.detail || []; // make sure blog.detail is an array
    return [
     ...blogDetails
    ].some((detail) =>
      detail.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <Routes>
      <Route
        path="/*"
        element={
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center"
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  margin: "0px",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "20px",
                  width: "75%"
                }}
              >
                <h1 style={{ margin: "5px 20px" }}>Blogs</h1>
                <div style={{ margin: "5px 20px" }}>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search blogs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </Form>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  margin: "10px 7%",
                  justifyContent: "center"
                }}
              >

                {(filteredBlogs.length > 0 ? (
                  filteredBlogs.map((blog) => (
                    <Blog blog={blog} key={blog.id} />
                  ))
                ) : (
                  <p>No blogs found</p>
                ))}
              </div>
            </div>
          </>
        }
      />

      {blogdata.map((blog) => (
        <Route
          path={`/${blog.id}`}
          element={<BlogDetailed blog={blog} key={blog.id} />}
          key={blog.id}
        />
      ))}
    </Routes>
  );
}
