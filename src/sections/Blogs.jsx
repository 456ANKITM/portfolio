import React from 'react';

const Blogs = () => {
  const blogs = [
    {
      title: "Understanding React Hooks",
      date: "March 10, 2026",
      author: "Ankit Mishra",
      description: "A deep dive into React Hooks: useState, useEffect, and custom hooks to make your components cleaner and more efficient.",
      tags: ["React", "Hooks", "Frontend"]
    },
    {
      title: "Building a REST API with Node.js",
      date: "February 25, 2026",
      author: "Ankit Mishra",
      description: "Learn how to build a robust REST API using Node.js, Express, and MongoDB with practical examples.",
      tags: ["Node JS", "Express", "API"]
    },
    {
      title: "Deploying Your App with Vercel",
      date: "January 18, 2026",
      author: "Ankit Mishra",
      description: "Step-by-step guide to deploying your frontend and full-stack applications on Vercel, including environment variables and CI/CD.",
      tags: ["Vercel", "Deployment", "Next JS"]
    },
  ];

  return (
    <section id="blogs" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fadein">
            Insights & Articles
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animate-delay-100 text-secondary-foreground">
            Blog
          </h2>
          <p className="text-muted-foreground animate-fade-in animate-delay-200">
            Sharing knowledge, tips, and tutorials on web development, cloud technologies, and software engineering.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500 animate-fade-in"
              style={{ animationDelay: `${(index + 1) * 150}ms` }}
            >
              <span className="text-sm text-primary font-medium">{blog.date}</span>
              <h3 className="text-xl font-semibold mt-2">{blog.title}</h3>
              <p className="text-muted-foreground">{`By ${blog.author}`}</p>
              <p className="text-sm text-muted-foreground mt-4">{blog.description}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {blog.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs;
