import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import Navbar from "../components/Navbar";
import {getBlogs} from "../services/blogService";

export default function Blogs() {
  const [blogData, setBlogData] = useState([]);

  const fetchBlogs = async () => {
    const res = await getBlogs();

    setBlogData(res.blogs);
  };

  useEffect(() => {
    fetchBlogs();

    return () => {
      setBlogData([]);
    };
  }, []);

  return (
    <>
      <Navbar/>
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center mb-8 text-white font-cinzel">
            Insights
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {blogData.map((blog) => (
              <Link
                to={`/blogs/${blog.id}`}
                key={blog.id}
                className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={blog.heroImg}
                  alt={blog.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{blog.summary}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer with "Create Your Blog" Button */}
      <footer className="py-6 text-center"></footer>

      {/* Popup Modal for Blog Creation */}
      {/* {isCreateBlogOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl relative">
            <button
              onClick={handleCloseCreateBlog}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              <span className="material-icons">
                <Close />
              </span>
            </button>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">
              Create Your Blog
            </h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter blog title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Content</label>
                <input
                  type="text"
                  required
                  className="w-full border rounded-lg h-50 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your blog content here..."
                  rows="6"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Attach Files</label>
                <input
                  type="file"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={handleCloseCreateBlog}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 mr-2"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )} */}
    </>
  );
}
