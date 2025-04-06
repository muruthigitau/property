import Link from "next/link";

const AboutUs = () => {
  return (
    <div
      class="page-header parallaxie"
      style='background-image: url("/images/hero.jpg"); background-size: cover; background-repeat: no-repeat; background-attachment: fixed; background-position: center 46.6172px;'
    >
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/* <!-- Subpage Header Box Start --> */}
            <div class="page-header-box">
              <h1 class="text-anime">
                <div
                  class="line"
                  style="display: block; text-align: center; width: 100%;"
                >
                  <div class="word" style="display: inline-block;">
                    <div
                      class="char"
                      style="display: inline-block; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
                    >
                      A
                    </div>
                    <div
                      class="char"
                      style="display: inline-block; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
                    >
                      b
                    </div>
                    <div
                      class="char"
                      style="display: inline-block; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
                    >
                      o
                    </div>
                    <div
                      class="char"
                      style="display: inline-block; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
                    >
                      u
                    </div>
                    <div
                      class="char"
                      style="display: inline-block; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
                    >
                      t
                    </div>
                  </div>{" "}
                  <div class="word" style="display: inline-block;">
                    <div
                      class="char"
                      style="display: inline-block; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
                    >
                      U
                    </div>
                    <div
                      class="char"
                      style="display: inline-block; opacity: 1; visibility: inherit; transform: translate(0px, 0px);"
                    >
                      s
                    </div>
                  </div>
                </div>
              </h1>
              <nav
                class="wow fadeInUp"
                data-wow-delay="0.25s"
                style="visibility: visible; animation-delay: 0.25s; animation-name: fadeInUp;"
              >
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <Link href="/">Home</Link>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    About us
                  </li>
                </ol>
              </nav>
            </div>
            {/* <!-- Subpage Header Box End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
