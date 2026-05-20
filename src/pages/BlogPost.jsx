import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogs";

function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-red-400">Post Not Found</h1>
          <p className="mb-6 text-slate-400">Sorry, the blog post you're looking for doesn't exist.</p>
          <Link
            to="/blog"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
          >
            Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  // Get previous and next posts for navigation
  const currentIndex = blogPosts.findIndex((p) => p.id === parseInt(id));
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      {/* Back Button */}
      <Link
        to="/blog"
        className="mb-8 inline-flex items-center text-blue-400 transition hover:text-blue-300"
      >
        ← Back to Blog
      </Link>

      {/* Featured Image */}
      <div className="mb-8 overflow-hidden rounded-lg">
        <img
          src={post.image}
          alt={post.title}
          className="h-96 w-full object-cover"
        />
      </div>

      {/* Header */}
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between gap-4">
          <span className="inline-block rounded-full bg-blue-600/20 px-3 py-1 text-sm text-blue-400">
            {post.category}
          </span>
          <span className="text-sm text-slate-400">{post.date}</span>
        </div>

        <h1 className="mb-4 text-4xl font-bold">{post.title}</h1>
        <p className="text-lg text-slate-300">{post.excerpt}</p>
      </div>

      {/* Divider */}
      <div className="mb-8 border-t border-slate-700" />

      {/* Content */}
      <div className="prose prose-invert mb-12 max-w-none">
        {post.content.split("\n").map((paragraph, index) => (
          <p key={index} className="mb-4 text-slate-300 leading-relaxed">
            {paragraph.trim()}
          </p>
        ))}
      </div>

      {/* Divider */}
      <div className="mb-8 border-t border-slate-700" />

      {/* Navigation */}
      <div className="grid gap-4 md:grid-cols-2">
        {previousPost ? (
          <Link
            to={`/blog/${previousPost.id}`}
            className="group rounded-lg bg-slate-800 p-6 transition hover:bg-slate-700"
          >
            <p className="text-sm text-slate-400 group-hover:text-slate-300">← Previous Post</p>
            <p className="mt-2 font-semibold group-hover:text-blue-400">{previousPost.title}</p>
          </Link>
        ) : (
          <div />
        )}

        {nextPost ? (
          <Link
            to={`/blog/${nextPost.id}`}
            className="group rounded-lg bg-slate-800 p-6 transition hover:bg-slate-700"
          >
            <p className="text-sm text-slate-400 group-hover:text-slate-300">Next Post →</p>
            <p className="mt-2 font-semibold group-hover:text-blue-400">{nextPost.title}</p>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Back to Blog */}
      <div className="mt-12 text-center">
        <Link
          to="/blog"
          className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-white transition hover:bg-blue-700"
        >
          Back to All Articles
        </Link>
      </div>
    </main>
  );
}

export default BlogPost;
