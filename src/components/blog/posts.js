import Link from "next/link";
import Image from "next/image";

const Posts = () => {
  return (
    <div class="latest-posts">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h3 class="wow fadeInUp">News & Blog</h3>
              <h2 class="text-anime">Read Our Latest News</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            {/* <!-- Post Item Start --> */}
            <div class="post-item wow fadeInUp" data-wow-delay="0.25s">
              {/* <!-- Post Featured Image Start --> */}
              <div class="post-featured-image">
                <figure>
                  <Link href="#">
                    <img src="images/post-1.jpg" alt="" />
                  </Link>
                </figure>

                <div class="post-read-more">
                  <Link href="#" class="btn-default">
                    Read More
                  </Link>
                </div>
              </div>
              {/* <!-- Post Featured Image End --> */}

              {/* <!-- Post Body Start --> */}
              <div class="post-body">
                <div class="post-category">
                  <ul>
                    <li>
                      <Link href="#">Apartments</Link>
                    </li>
                  </ul>
                </div>

                <h3>
                  <Link href="#">
                    Our Latest Development Projects by More Efficie.
                  </Link>
                </h3>
              </div>
              {/* <!-- Post Body End --> */}
            </div>
            {/* <!-- Post Item End --> */}
          </div>

          <div class="col-lg-4">
            {/* <!-- Post Item Start --> */}
            <div class="post-item wow fadeInUp" data-wow-delay="0.5s">
              {/* <!-- Post Featured Image Start --> */}
              <div class="post-featured-image">
                <figure>
                  <Link href="#">
                    <img src="images/post-2.jpg" alt="" />
                  </Link>
                </figure>

                <div class="post-read-more">
                  <Link href="#" class="btn-default">
                    Read More
                  </Link>
                </div>
              </div>
              {/* <!-- Post Featured Image End --> */}

              {/* <!-- Post Body Start --> */}
              <div class="post-body">
                <div class="post-category">
                  <ul>
                    <li>
                      <Link href="#">Office</Link>
                    </li>
                  </ul>
                </div>

                <h3>
                  <Link href="#">
                    Cultivating Market Leadership from the Inside.
                  </Link>
                </h3>
              </div>
              {/* <!-- Post Body End --> */}
            </div>
            {/* <!-- Post Item End --> */}
          </div>

          <div class="col-lg-4">
            {/* <!-- Post Item Start --> */}
            <div class="post-item wow fadeInUp" data-wow-delay="0.75s">
              {/* <!-- Post Featured Image Start --> */}
              <div class="post-featured-image">
                <figure>
                  <Link href="#">
                    <img src="images/post-3.jpg" alt="" />
                  </Link>
                </figure>

                <div class="post-read-more">
                  <Link href="#" class="btn-default">
                    Read More
                  </Link>
                </div>
              </div>
              {/* <!-- Post Featured Image End --> */}

              {/* <!-- Post Body Start --> */}
              <div class="post-body">
                <div class="post-category">
                  <ul>
                    <li>
                      <Link href="#">Apartments</Link>
                    </li>
                  </ul>
                </div>

                <h3>
                  <Link href="#">
                    We Are the Next Generation of the Advertising.
                  </Link>
                </h3>
              </div>
              {/* <!-- Post Body End --> */}
            </div>
            {/* <!-- Post Item End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Posts;
