import '../App.css';
import adImage2 from "../assets/images/background-pattern.jpg"
import adImage from "../assets/images/ad-image-1.png"
import adImage3 from "../assets/images/ad-image-2.png"
import thumb from "../assets/images/product-thumb-1.png"

export const Home = () => {
  return (
    <>
      <section class="py-3" style={{
        backgroundImage: `url(${adImage2})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="banner-blocks">
                <div class="banner-ad large bg-info block-1">
                  <div class="swiper main-swiper">
                    <div class="swiper-wrapper">
                      <div class="swiper-slide">
                        <div class="row banner-content p-5">
                          <div class="content-wrapper col-md-7">
                            <div class="categories my-3">100% natural</div>
                            <h3 class="display-4">Fresh Smoothie & Summer Juice</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                            <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Shop Now</a>
                          </div>
                          <div class="img-wrapper col-md-5">
                            <img src={thumb} class="img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="row banner-content p-5">
                          <div class="content-wrapper col-md-7">
                            <div class="categories mb-3 pb-3">100% natural</div>
                            <h3 class="banner-title">Fresh Smoothie & Summer Juice</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                            <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</a>
                          </div>
                          <div class="img-wrapper col-md-5">
                            <img src="images/product-thumb-1.png" class="img-fluid" />
                          </div>
                        </div>
                      </div>
                      <div class="swiper-slide">
                        <div class="row banner-content p-5">
                          <div class="content-wrapper col-md-7">
                            <div class="categories mb-3 pb-3">100% natural</div>
                            <h3 class="banner-title">Heinz Tomato Ketchup</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                            <a href="#" class="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</a>
                          </div>
                          <div class="img-wrapper col-md-5">
                            <img src="images/product-thumb-2.png" class="img-fluid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="swiper-pagination"></div>
                  </div>
                </div>
                <div class="banner-ad bg-success-subtle block-2" style={{ background: `url(${adImage}) no-repeat`, backgroundPosition: 'right bottom' }}>
                  <div class="row banner-content p-5">
                    <div class="content-wrapper col-md-7">
                      <div class="categories sale mb-3 pb-3">20% off</div>
                      <h3 class="banner-title">Fruits & Vegetables</h3>
                      <a href="#" class="d-flex align-items-center nav-link">Shop Collection <svg width="24" height="24"><use href="#arrow-right"></use></svg></a>
                    </div>
                  </div>
                </div>
                <div class="banner-ad bg-danger block-3"
                  style={{
                    background: `url(${adImage3}) no-repeat`,
                    backgroundPosition: "right bottom"
                  }}>
                  <div class="row banner-content p-5">
                    <div class="content-wrapper col-md-7">
                      <div class="categories sale mb-3 pb-3">15% off</div>
                      <h3 class="item-title">Baked Products</h3>
                      <a href="#" class="d-flex align-items-center nav-link">Shop Collection <svg width="24" height="24"><use href="#arrow-right"></use></svg></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-5 overflow-hidden">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="section-header d-flex flex-wrap justify-content-between mb-5">
                <h2 class="section-title">Category</h2>
                <div class="d-flex align-items-center">
                  <a href="#" class="btn-link text-decoration-none">View All Categories →</a>
                  <div class="swiper-buttons">
                    <button class="swiper-prev category-carousel-prev btn btn-yellow">❮</button>
                    <button class="swiper-next category-carousel-next btn btn-yellow">❯</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
