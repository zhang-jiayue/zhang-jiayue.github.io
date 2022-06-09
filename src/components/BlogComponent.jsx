import React, { Component } from 'react';
class AboutComponent extends Component {
  render() {
    return (
      <div class="container mx-auto pt-5">
        <div class="d-grid gap-4">
          <div class="row justify-content-md-center">
            <div class="col-md-auto">
              <div class="prof-img">
                {/* <img
                  src={IMG_261}
                  class="rounded mx-auto d-block"
                  alt="Img"
                  width="280"
                  height="280"
                ></img> */}
              </div>
            </div>
            <div class="col-md-auto">
              <div class="main-container home-container">
                <main id="body-fade">
                  <p class="post-title">👋 Hello!</p>
                  <p class="post-title">
                    I'm Jiayue. Currently a 3rd year CS student at York
                    University.
                  </p>
                  <p class="post-title">
                    Thanks for visiting! Check out a couple posts and feel free
                    to get in touch at{' '}
                    <a class="homepage-link" href="mailto:jiayuez@my.yorku.ca">
                      jiayuez@my.yorku.ca
                    </a>
                    !
                  </p>
                </main>
              </div>
            </div>
          </div>
        </div>
        {/* <div></div>
        <div
          class="main-container home-container"
          style={{ 'padding-bottom': '100px' }}
        >
          <main id="body-fade">
            <p class="post-title">👋 Hello!</p>
            <p class="post-title">
              I'm Jiayue. Currently a 3rd year CS student at York University.
            </p>
            <p class="post-title">
              Thanks for visiting! Check out a couple posts and feel free to get
              in touch at{' '}
              <a class="homepage-link" href="mailto:jiayuez@my.yorku.ca">
                mailto:jiayuez@my.yorku.ca
              </a>
              !
            </p>
          </main>
        </div> */}
      </div>
    );
  }
}

export default AboutComponent;
