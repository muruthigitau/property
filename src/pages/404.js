import Breadcrumb from "@/components/hero/breadcrump";
import Layout from "@/components/layout";
import Link from "next/link";

const PageNotFound = () => {
  return (
    <Layout>
      <Breadcrumb />
      <div className="not-found-page">
        <div className="container mx-auto py-16">
          <div className="flex justify-center items-center">
            <div className="text-center">
              {/* Page Not Found Box Start */}
              <div className="page-not-found-box">
                <figure className="animate__animated animate__fadeInUp">
                  <img
                    src="images/img-not-found.svg"
                    alt="Not Found"
                    className="mx-auto"
                  />
                </figure>

                <h2 className="text-4xl font-bold text-gray-700 mt-8">
                  <div className="line">
                    <div className="word inline-block">Oops!</div>
                    <div className="word inline-block">Sorry,</div>
                    <div className="word inline-block">We</div>
                    <div className="word inline-block">Could</div>
                    <div className="word inline-block">Not</div>
                    <div className="word inline-block">Find</div>
                    <div className="word inline-block">the</div>
                    <div className="word inline-block">Page</div>
                  </div>
                </h2>

                {/* Use Link without <a> tag */}
                <Link href="/" passHref>
                  <button className="btn-default mt-6 px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-md shadow-md">
                    Back to Home
                  </button>
                </Link>
              </div>
              {/* Page Not Found Box End */}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PageNotFound;
