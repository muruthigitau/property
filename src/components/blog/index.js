import Link from "next/link";
import Image from "next/image";
import { blogData, paginationData } from "@/data/blogdata";

const Blog = () => {
  return (
    <div className="blog-archive-page">
      <div className="container">
        <div className="row">
          {blogData.map((post) => (
            <div className="col-lg-4 col-md-6" key={post.id}>
              {/* Post Item Start */}
              <div
                className="post-item wow fadeInUp"
                data-wow-delay={post.delay}
                style={{
                  visibility: "visible",
                  animationDelay: post.delay,
                  animationName: "fadeInUp",
                }}
              >
                {/* Post Featured Image Start */}
                <div className="post-featured-image">
                  <figure>
                    <Link href={`/blog/${post.slug}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={400}
                        height={300}
                        layout="responsive"
                      />
                    </Link>
                  </figure>

                  <div className="post-read-more">
                    <Link href={`/blog/${post.slug}`} className="btn-default">
                      Read More
                    </Link>
                  </div>
                </div>
                {/* Post Featured Image End */}

                {/* Post Body Start */}
                <div className="post-body">
                  <div className="post-category">
                    <ul>
                      <li>
                        <Link href={`/blog/${post.slug}`}>{post.category}</Link>
                      </li>
                    </ul>
                  </div>

                  <h3>
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <div className="post-meta">
                    <span>{post.date}</span> | <span>By {post.author}</span>
                  </div>

                  <p>{post.excerpt}</p>
                </div>
                {/* Post Body End */}
              </div>
              {/* Post Item End */}
            </div>
          ))}
        </div>

        <div className="row">
          <div className="col-md-12">
            {/* Post Pagination Start */}
            <div
              className="post-pagination wow fadeInUp"
              data-wow-delay="1.5s"
              style={{
                visibility: "visible",
                animationDelay: "1.5s",
                animationName: "fadeInUp",
              }}
            >
              <ul className="pagination">
                {paginationData.map((item) => (
                  <li key={item.id} className={item.active ? "active" : ""}>
                    <Link href={item.link}>
                      {item.label === "<" ? (
                        <i className="fa-solid fa-arrow-left-long"></i>
                      ) : item.label === ">" ? (
                        <i className="fa-solid fa-arrow-right-long"></i>
                      ) : (
                        item.label
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            {/* Post Pagination End */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
