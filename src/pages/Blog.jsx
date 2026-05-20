import { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogs";

function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", ...new Set(blogPosts.map((post) => post.category))];

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6">
      <div className="mb-12">
        <h1 className="mb-4 text-4xl font-bold">Blog</h1>
        <p className="mb-8 text-slate-300">
          Explore articles about fashion, technology, and business.
        </p>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-lg bg-slate-800 px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full px-4 py-2 transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-300 hover:bg-slate-700"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group overflow-hidden rounded-lg bg-slate-800 transition hover:shadow-lg hover:shadow-blue-500/20"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover transition group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <span className="inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
                    {post.category}
                  </span>
                  <span className="text-sm text-slate-400">{post.date}</span>
                </div>

                <h3 className="mb-2 text-lg font-semibold group-hover:text-blue-400">
                  {post.title}
                </h3>

                <p className="line-clamp-2 text-slate-300">{post.excerpt}</p>

                <div className="mt-4 text-blue-400 transition group-hover:text-blue-300">
                  Read More →
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-slate-400">
            No articles found. Try adjusting your search or filters.
          </p>
        </div>
      )}
    </main>
  );
}

export default Blog;
