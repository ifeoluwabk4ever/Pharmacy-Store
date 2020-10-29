import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../components/Banner'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

export default function Landing() {
    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item carousel-img-1 active text-center">
                        <Banner className="carousel-caption d-none d-md-block" title="We are here for you" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat consequatur libero quidem dolor nam veritatis aliquid eveniet iure natus?">
                            <Link to="/drugs" className="btn btn-white">drug bank</Link>
                        </Banner>
                    </div>
                    <div className="carousel-item carousel-img-2 text-center">
                        <Banner className="carousel-caption d-none d-md-block" title="We care, God heals" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat consequatur libero quidem dolor nam veritatis aliquid eveniet iure natus?">
                            <Link to="/drugs" className="btn btn-white">drug bank</Link>
                        </Banner>
                    </div>
                    <div className="carousel-item carousel-img-3 text-center">
                        <Banner className="carousel-caption d-none d-md-block" title="We give our very best" subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fugiat consequatur libero quidem dolor nam veritatis aliquid eveniet iure natus?">
                            <Link to="/drugs" className="btn btn-white">drug bank</Link>
                        </Banner>
                    </div>
                    <a className="carousel-control carousel-control-prev my-auto" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span><FaAngleLeft size={32} color="#222" /></span>
                    </a>
                    <a className="carousel-control carousel-control-next my-auto" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span><FaAngleRight size={32} color="#222" /> </span>
                    </a>
                </div>
            </div>
        </>
    )
}
