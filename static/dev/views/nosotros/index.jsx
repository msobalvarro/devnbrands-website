import React, { PureComponent } from 'react'
import NavBar from '../../components/navbar'
import Footer from '../../components/footer'
import Image from 'react-lazy-image'
import './estilos-nosotros.css'

const Nosotros = () => (
    <React.Fragment>
        <NavBar />

        <div id="view-about">
            <div className="content-main">
                <h1>Historia de Dev & Brands</h1>

                <div className="sub-content">
                    <div className="col">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Exercitationem illum neque molestiae dignissimos nostrum magnam quam
                            voluptas ipsum adipisci error ex dolor deserunt accusamus velit, nisi ducimus at commodi nesciunt?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Exercitationem illum neque molestiae dignissimos nostrum magnam quam
                            voluptas ipsum adipisci error ex dolor deserunt accusamus velit, nisi ducimus at commodi nesciunt?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Exercitationem illum neque molestiae dignissimos nostrum magnam quam
                            voluptas ipsum adipisci error ex dolor deserunt accusamus velit, nisi ducimus at commodi nesciunt?
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Exercitationem illum neque molestiae dignissimos nostrum magnam quam
                            voluptas ipsum adipisci error ex dolor deserunt accusamus velit, nisi ducimus at commodi nesciunt?
                        </p>
                    </div>
                    <div className="col">
                        <Image source="./static/img/about.png" />
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </React.Fragment>
)

export default Nosotros