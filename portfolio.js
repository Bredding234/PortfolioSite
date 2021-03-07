import React from 'react';

export default class Portfolio extends React.Component {
    render() {
        return (

            <section id="portfolio" className="portfolio section-bg">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                    </div>

                    <div className="row" data-aos="fade-up">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" className="filter-active">All</li>
                                <li data-filter=".filter-react">React</li>
                                <li data-filter=".filter-javaScript">Javascript</li>
                                <li data-filter=".filter-java">Java</li>
                                <li data-filter=".filter-ROR">Ruby On Rails</li>
                                <li data-filter=".filter-fullStack">Full Stack app</li>
                                <li data-filter=".filter-python">Python</li>
                                <li data-filter=".filter-mongoDb">Mongo DB</li>
                                <li data-filter=".filter-OS">Operating System</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-4 col-md-6 portfolio-item filter-react">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/Weather-rest-api.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/Weather-rest-api.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="https://github.com/Bredding234/weather-react" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-java">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/java1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/java1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="assets/img/portfolio/java1.jpg" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-mongoDb">
                            <div className="portfolio-wrap">
                                <img src="https://ucarecdn.com/1a79e840-0b77-4bd6-9d8e-d4c4a8f214fd/" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="https://ucarecdn.com/1a79e840-0b77-4bd6-9d8e-d4c4a8f214fd/" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="https://ucarecdn.com/1a79e840-0b77-4bd6-9d8e-d4c4a8f214fd/" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                      
                        <div className="col-lg-4 col-md-6 portfolio-item filter-javaScript">
                            <div className="portfolio-wrap">
                                <img src="https://ucarecdn.com/57db0928-edd3-45c2-b8fa-48aa46480c10/" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="https://ucarecdn.com/57db0928-edd3-45c2-b8fa-48aa46480c10/" target="_blank" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="https://github.com/Bredding234/Calculate-Calories-Website-Front-End-" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-ROR">
                            <div className="portfolio-wrap">
                                <img src="https://ucarecdn.com/2dcbab5a-66ae-4237-8834-ce4c7d2bf6e5/" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="https://ucarecdn.com/2dcbab5a-66ae-4237-8834-ce4c7d2bf6e5/" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="https://github.com/Bredding234/Rails-Project" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-fullStack">
                            <div className="portfolio-wrap">
                                <img src="https://ucarecdn.com/1a79e840-0b77-4bd6-9d8e-d4c4a8f214fd/" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="https://ucarecdn.com/1a79e840-0b77-4bd6-9d8e-d4c4a8f214fd/" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="https://github.com/Bredding234/Full-stack-app-login" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-java">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/java2.png" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/java2.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Web 3"><i className="bx bx-plus"></i></a>
                                    <a href="#" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-java">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/java3.png" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/java3.png" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 2"><i className="bx bx-plus"></i></a>
                                    <a href="https://github.com/Bredding234/Tic-tac-toe-client-and-server" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-python">
                            <div className="portfolio-wrap">
                                <img src="assets\img\portfolio\python_guessing_game.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets\img\portfolio\python_guessing_game.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="App 1"><i className="bx bx-plus"></i></a>
                                    <a href="https://github.com/Bredding234/Python" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 portfolio-item filter-OS">
                            <div className="portfolio-wrap">
                                <img src="assets/img/portfolio/os1.jpg" className="img-fluid" alt="" />
                                <div className="portfolio-links">
                                    <a href="assets/img/portfolio/os1.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox" title="Card 2"><i className="bx bx-plus"></i></a>
                                    <a href="https://github.com/Bredding234/Advanced-Multithreading-in-OS" target="_blank" title="More Details"><i className="bx bx-link"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        )
    }
}