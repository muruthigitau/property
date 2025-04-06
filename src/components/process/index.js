import Link from "next/link";

const Process = () => {
  return (
    <div class="how-it-works">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            {/* <!-- Section Title Start --> */}
            <div class="section-title">
              <h3 class="wow fadeInUp">How it works</h3>
              <h2 class="text-anime">Find a Perfect Home</h2>
            </div>
            {/* <!-- Section Title End --> */}
          </div>
        </div>

        <div class="row">
          <div class="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div class="how-it-work-item wow fadeInUp" data-wow-delay="0.25s">
              <div class="icon-box">
                <img src="images/icon-how-1.svg" alt="" />
              </div>

              <h3>Find Property</h3>
              <p>Idenify what you need</p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div class="how-it-work-item wow fadeInUp" data-wow-delay="0.5s">
              <div class="icon-box">
                <img src="images/icon-how-2.svg" alt="" />
              </div>

              <h3>Meet Retailer</h3>
              <p>Meet the person leasing and discuss the property</p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div class="how-it-work-item wow fadeInUp" data-wow-delay="0.75s">
              <div class="icon-box">
                <img src="images/icon-how-3.svg" alt="" />
              </div>

              <h3>Documents</h3>
              <p>
                Make sure all the documents are in place and validate the
                property
              </p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>

          <div class="col-lg-3 col-md-6">
            {/* <!-- How it Work Item Start --> */}
            <div class="how-it-work-item wow fadeInUp" data-wow-delay="1s">
              <div class="icon-box">
                <img src="images/icon-how-4.svg" alt="" />
              </div>

              <h3>Take the keys</h3>
              <p>Close the deal and take the keys</p>
            </div>
            {/* <!-- How it Work Item End --> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Process;
