import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import router object
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/Blog';
import FreeCourse from './components/FreeCourse';
import Post from './components/Post';
import CoursePost from './components/CoursePost';
import Contact from './components/Contact';

//createbrowswerrouter method takes array of object as an argument
//object has two fields i.e. path and element which has render on that path
const router = createBrowserRouter([{
  path:"/",
  element:<App/>
},{
  path:"/blog",
  element:<Blog/>
},{
  path:"/freecourse",
  element: <FreeCourse/>
},
{
  path:"/post/:id",
  element:<Post/>
},
{
  path: "blog/post/:id",
  element: <Post/>
},
{
  path: "freecourses/:id",
  element: <CoursePost/>
},
{
  path: "/contact",
  element: <Contact />
}
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* provide the router to react application */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
