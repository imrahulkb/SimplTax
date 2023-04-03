import "./styles.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import BlogPage from "./components/BlogPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import blogdata from "./blogs";
import CalcMain from "./components/Calculator/CalcMain";
export default function App() {
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
            <Route path={`/blogs/1`} element={<h1>Hell01</h1>} />
          </Route>
          <Route path="calculator" element={<CalcMain />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
