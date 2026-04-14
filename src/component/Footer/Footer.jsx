import React from "react";
import FooterPng from "../../assets/logo-xl.png";
import InstagramPng from '../../assets/instagram.png'
import FacebookPng from '../../assets/facebook.png';
import TwitterPng from '../../assets/twitter.png'

const Footer = () => {
    return (
        <footer className="footer footer-horizontal footer-center bg-[#244D3F] text-primary-content p-2">
            <aside>
                <svg
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    className="inline-block fill-current"
                ></svg>
                <img src={FooterPng} alt="" className="w-80 h-auto" />
                <p className=" text-[#b9c0ca]">
                    Your personal shelf of meaningful connections. Browse, tend, and
                    nurture the relationships that matter most.
                </p>
            </aside>
            <nav>
                <h2 className="text-xl font-medium -mt-7 pb-2">Socal Links</h2>
                <div className="grid grid-flow-col gap-4">
                    <a>
                        <img src={InstagramPng} alt="" className="w-8 h-8" />
                    </a>
                    <a>
                        <img src={FacebookPng} alt="" className="w-8 h-8" />
                    </a>
                    <a>
                        <img src={TwitterPng} alt="" className="w-8 h-8" />
                    </a>


                </div>
            </nav>
            <hr className="w-8/12 text-gray-600" />
            <div className="flex flex-col md:flex-row justify-between items-center w-8/12 mb-8  ">
                <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
                <div className="flex gap-4">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p> Cookies</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
