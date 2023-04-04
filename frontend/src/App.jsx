import "./styles.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import BlogPage from "./components/BlogPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import fetchData from "./blogs";
import CalcMain from "./components/Calculator/CalcMain";
import { useState } from "react";
export default function App() {
  const blogdataPromise = fetchData();
  const [blogdata,setBlogdata]= useState([{}])

  blogdataPromise.then(data => {
    setBlogdata([...data.blogData]);
  //  console.log([...data.blogData]);
  });
 
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/blogs" element={<BlogPage />}>
            {blogdata.map((blog) => (
              <Route path={`/blogs/${blog.id}`} key={blog.id} element={<></>} />
            ))}
            <Route path={`/blogs/1`} element={<></>} />
          </Route>
          <Route path="calculator" element={<CalcMain />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
