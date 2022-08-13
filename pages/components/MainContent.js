import { Splide, SplideSlide } from "@splidejs/react-splide";
const MainContent = () => {
  return (
    <>
      <main>
        <section className="container my-3 main">
          <div className="row justify-content-center align-items-center slider">
            <div className=" col-lg-8 col-12">
              <div
                id="carouselExampleControls"
                className="carousel slide carousel-fade  mx-auto mb-3 "
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="s1.jpg"
                      className="d-block w-100 "
                      alt="slider-image"
                    />
                    <div className="slider-text left left">
                      <h1 className="">Beauty</h1>
                      <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                      </p>
                      <a href="#" className="more">
                        More
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="s2.jpg"
                      className="d-block w-100 "
                      alt="slider-image"
                    />
                    <div className="slider-text left">
                      <h1 className="">Beauty</h1>
                      <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                      </p>
                      <a href="#" className="more">
                        More
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/s3.jpg"
                      className="d-block w-100 "
                      alt="slider-image"
                    />
                    <div className="slider-text left">
                      <h1 className="">Beauty</h1>
                      <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                      </p>
                      <a href="#" className="more">
                        More
                      </a>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <img
                      src="/s4.jpg"
                      className="d-block w-100 "
                      alt="slider-image"
                    />
                    <div className="slider-text left">
                      <h1 className="">Beauty</h1>
                      <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam, quidem.
                      </p>
                      <a href="#" className="more">
                        More
                      </a>
                    </div>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="services container  my-3">
          <Splide
            options={{
              type: "loop",
              width: "100%",
              autoplay: true,
              interval: 2000,
              perPage: 3,
              perMove: 1,
            }}
            aria-label="My Favorite Images"
          >
            <SplideSlide>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="c1.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="c3.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="c4.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="c1.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="c3.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="c4.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </SplideSlide>
          </Splide>
          {/* <div>
            <h2 className="text-center my-3 fs-1">Haircut</h2>
            <div className=" d-flex justify-content-evenly flex-wrap align-items-center w-100">
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="c1.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="c3.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="c4.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center my-3 fs-1">Make Up</h2>
            <div className=" d-flex justify-content-evenly flex-wrap align-items-center w-100">
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="m1.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="m2.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="m3.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-center my-3 fs-1">Nails and Hand</h2>
            <div className=" d-flex justify-content-evenly flex-wrap align-items-center w-100">
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="n1.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>

              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="n2.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: 18 + "rem" }}>
                <img src="n3.jpg" className="card-img-top" alt="services" />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
        </section>
      </main>
    </>
  );
};
export default MainContent;
