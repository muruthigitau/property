import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { blogData, categories, popularTags } from "@/data/blogdata";

const BlogDetails = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the current post by slug
  const currentPost = blogData.find((post) => post.slug === slug);

  // Find related posts
  const relatedPosts = currentPost?.relatedPosts
    ? blogData.filter((post) => currentPost.relatedPosts.includes(post.id))
    : [];

  if (!currentPost) {
    return <div>Loading...</div>;
  }

  return (
    <div className="blog-single-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            {/* Post Content */}
            <div className="post-content">
              {/* Post Featured Image */}
              <div
                className="post-featured-image wow fadeInUp"
                data-wow-delay="0.25s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.25s",
                  animationName: "fadeInUp",
                }}
              >
                <figure className="image-anime">
                  <Image
                    src={currentPost?.image}
                    alt={currentPost?.title}
                    width={800}
                    height={500}
                    layout="responsive"
                  />
                </figure>
              </div>

              {/* Post Entry */}
              <div
                className="post-entry wow fadeInUp"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="post-meta">
                  <span>By {currentPost?.author}</span>
                  <span>{currentPost?.date}</span>
                  <span>{currentPost?.category}</span>
                </div>

                {/* Render HTML content safely */}
                <div
                  dangerouslySetInnerHTML={{ __html: currentPost?.content }}
                />
              </div>

              {/* Post Tags */}
              <div className="row">
                <div className="col-lg-8">
                  <div
                    className="post-tags wow fadeInUp"
                    data-wow-delay="0.25s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.25s",
                      animationName: "fadeInUp",
                    }}
                  >
                    Tags:
                    {currentPost?.tags?.map((tag, index) => (
                      <Link key={index} href={`/blog/tag/${tag}`}>
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Social Sharing */}
                <div className="col-lg-4">
                  <div
                    className="post-social-sharing wow fadeInUp"
                    data-wow-delay="0.5s"
                    style={{
                      visibility: "visible",
                      animationDelay: "0.5s",
                      animationName: "fadeInUp",
                    }}
                  >
                    <ul>
                      <li>
                        <Link href="#">
                          <i className="fab fa-facebook-f"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-twitter"></i>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <i className="fab fa-linkedin-in"></i>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="col-lg-4">
            <div className="post-sidebar">
              {/* Search Widget */}
              <div
                className="search-box-widget wow fadeInUp"
                data-wow-delay="0.25s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.25s",
                  animationName: "fadeInUp",
                }}
              >
                <div className="search-form">
                  <form action="#" method="get">
                    <div className="input-group">
                      <input
                        className="form-control"
                        type="search"
                        placeholder="Search articles..."
                      />
                      <span className="input-group-append">
                        <button className="btn-default" type="button">
                          <i className="fa fa-search"></i>
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
              </div>

              {/* Categories */}
              <div
                className="category-box-widget wow fadeInUp"
                data-wow-delay="0.5s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.5s",
                  animationName: "fadeInUp",
                }}
              >
                <h3>Categories</h3>
                <ul>
                  {categories?.map((category) => (
                    <li key={category.id}>
                      <Link href={`/blog/category/${category.slug}`}>
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Posts */}
              <div
                className="recent-posts-widget wow fadeInUp"
                data-wow-delay="0.75s"
                style={{
                  visibility: "visible",
                  animationDelay: "0.75s",
                  animationName: "fadeInUp",
                }}
              >
                <h3>Related Articles</h3>
                <div className="recent-posts-lists">
                  {relatedPosts?.map((post) => (
                    <div key={post.id} className="recent-post-item">
                      <div className="post-image">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={100}
                          height={100}
                          objectFit="cover"
                        />
                      </div>
                      <div className="post-info">
                        <p className="meta">
                          <Link
                            href={`/blog/category/${post.category.toLowerCase()}`}
                          >
                            {post.category}
                          </Link>
                        </p>
                        <h4>
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Popular Tags */}
              <div
                className="popular-tags-widget wow fadeInUp"
                data-wow-delay="1s"
                style={{
                  visibility: "visible",
                  animationDelay: "1s",
                  animationName: "fadeInUp",
                }}
              >
                <h3>Popular Tags</h3>
                <div className="tag-clouds">
                  <ul>
                    {popularTags?.map((tag) => (
                      <li key={tag.id}>
                        <Link href={`/blog/tag/${tag.slug}`}>{tag.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
