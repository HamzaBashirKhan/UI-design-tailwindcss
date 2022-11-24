import React from "react";

import arrow from "../../assets/Vector.png";
import shape from "../../assets/Shape.png";
import uber from "../../assets/Group 59.png";
import slack from "../../assets/Slack Logo 1.png";
import netflix from "../../assets/netflix-logo-0 1.png";
import google from "../../assets/Google-logo 1.png";
import airbnb from "../../assets/Airbnb-Logo 1.png";
import imageBeneathLogo from "../../assets/image 1.png";
import largeImage from "../../assets/Team 4.png";
import groupPicture from "../../assets/Group 43.png";
import stars from "../../assets/Group 39.png";
import quotes from "../../assets/quotations.png";
import profile from "../../assets/Group 37.png";
import bluedot from "../../assets/Ellipse 2.png";
import greydot from "../../assets/Ellipse 3.png";
import emoji from "../../assets/emoji.png";
import dot from "../../assets/ovalwhite.png";
import googlewhite from "../../assets/google.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import heart from "../../assets/Heart.png";

function Content() {
  return (
    <>
      <div className="grid lg:grid-cols-2 grid-cols-1 bg-teal py-5">
        <div className="pl-[5rem] lg:ml-20 ml-1 mr-20 lg:mr-0 mt-12">
          <p className="text-white font-semibold line text-6xl grid grid-cols-1">
            <span>We help you </span>
            <span className="mt-3">grow your bussiness</span>
            <span className="mt-3">faster</span>
            <img src={arrow} alt="" className="mt-5" />
            <p className="text-2xl font-semibold text-[1.0rem] py-10">
              specialist expertise and creative business acumen that has helped
              it in setting industry standards for technology and design. It
              works with its clients and end-users through the entire project,
              from the basic strategy layout, design, and implementation to
              deployment and maintenance. .
            </p>
            <div className="flex w-auto justify-start">
              <button className="text-teal bg-white rounded-md text-[1.2rem] font-normal h-[7.2 rem] w-[13rem] p-3">
                Book a Call
              </button>
              <button className="ml-10 text-white text-[1.2rem] font-normal ">
                Get a free Demo
                <i className="fa-solid fa-arrow-right ml-2"></i>
              </button>
            </div>
          </p>
        </div>
        <div className="pr-[5rem] ml-20 mt-12 hidden md:mr-5 lg:block">
          <img src={shape} alt="" className="static" />
          <img
            src={shape}
            alt=""
            className="static lg:-mt-[18rem] lg:ml-[6rem] pb-5"
          />
        </div>
      </div>
      <div className=" w-auto grid grid-flow-col items-center p-20 py-10">
        <img src={slack} alt="" />
        <img src={netflix} alt="" />
        <img src={google} alt="" />
        <img src={airbnb} alt="" />
        <img src={uber} alt="" />
      </div>
      <div className="grid lg:grid-cols-2 grid-cols-1 items-center px-20 py-10">
        <div className="">
          <p className="text-[#005490]  text-7xl leading-[7rem]">
            Find a <strong>aimic</strong> for any area of your business
          </p>
          <button className="text-[#005490] bg-[#C4C4C4] ml-4 rounded-md h-10 px-2 my-1 font-semibold">
            SOA Design & Implementation
          </button>
          <button className="text-[#005490] bg-[#C4C4C4] ml-4 rounded-md h-10 px-2 my-1 font-semibold">
            Cloud Computing
          </button>
          <button className="text-[#005490] bg-[#C4C4C4] ml-4 rounded-md h-10 px-2 my-1 font-semibold">
            Management Consulting
          </button>
          <button className="text-[#005490] bg-[#C4C4C4] ml-4 rounded-md h-10 px-2 my-1 font-semibold">
            Mobile Application Development
          </button>
          <button className="text-[#005490] bg-[#C4C4C4] ml-4 rounded-md h-10 px-2 my-1 font-semibold">
            Entreprise Secutiry Development
          </button>
          <button className="text-[#005490] bg-[#C4C4C4] ml-4 rounded-md h-10 px-2 my-1 font-semibold">
            Tech Consulting Service
          </button>
          <button className="text-[#005490] bg-[#C4C4C4] ml-4 rounded-md h-10 px-2 my-1 font-semibold">
            Strategic Contract Staffing
          </button>
          <button className="text-[#005490] bg-[#C4C4C4] ml-4 rounded-md h-10 px-2 my-1 font-semibold">
            Time and Material Engagement
          </button>
          <button className="text-[#005490] bg-[#C4C4C4] ml-4 rounded-md h-10 px-2 my-1 font-semibold">
            VOIP Services
          </button>
          <button className="text-white bg-[#005490] ml-4 rounded-md h-10 px-2 my-1 font-semibold">
            Digital Marketing
          </button>
        </div>
        <div className="flex justify-center py-10">
          <div className="ml-5">
            <img src={imageBeneathLogo} alt="" />
            <button className="text-white bg-[#005490] rounded-md px-4 my-1 mr-2 mt-2 h-7">
              SEO
            </button>
            <button className="text-white bg-[#005490] rounded-md px-4 my-1 mr-2 mt-2 h-7">
              Content Marketing
            </button>
            <button className="text-white bg-[#005490] rounded-md px-4 my-1 mr-2 mt-2 h-7">
              Email Marketing
            </button>
            <button className="text-white bg-[#005490] rounded-md px-4 my-1 mr-2 mt-2 h-7">
              Pay per Click
            </button>
            <button className="text-white bg-[#005490] rounded-md px-4 my-1 mr-2 mt-2 h-7">
              Affiliate Marketing
            </button>
            <button className="text-white bg-[#005490] rounded-md px-4 my-1 mr-2 mt-2 h-7">
              Socail Media Marketing
            </button>
          </div>
        </div>
      </div>
      <div className="grid w-auto lg:grid-cols-3 grid-cols-1 py-10 px-20">
        <div className="lg:col-span-2 border rounded-md">
          <p className="text-[#005490] font-semibold text-7xl text-center py-5">
            Double Impact
          </p>
          <p className="text-[#005490] text-center ">
            Integrate aimic to double the impact at your firm
          </p>
          <div className="grid grid-cols-2 py-4">
            <p className="text-[#005490] font-semibold md:text-[100px] text-[50px] text-center">
              40%
            </p>
            <p className="text-black text-start py-10 text-xl pr-10">
              of organization’s time is still eaten up by lack of Mapping that
              could be easily delegated.
            </p>
          </div>
          <div className="grid grid-cols-2 py-4">
            <p className="text-[#005490] font-semibold md:text-[100px] text-[50px] text-center">
              8hrs
            </p>
            <p className="text-black text-start py-10 text-xl pr-10">
              amount new Double customers are able to delegate and save in their
              first month.
            </p>
          </div>
        </div>
        <div className="lg:col-span-1 border rounded-md">
          <p className="text-[#005490] font-normal text-3xl text-center py-3">
            Productivity Rate
          </p>
          <p className="text-black text-center py-2 font-semibold">
            Based on our clients Before and Present
          </p>
        </div>
      </div>
      <div>
        {" "}
        <img
          src={largeImage}
          alt=""
          className="grid grid-cols-1  w-full py-10"
        />
      </div>
      <div className="px-20 ml-28 mr-28 rounded-xl py-20 bg-teal grid lg:grid-cols-3 grid-cols-1">
        <div className="lg:col-span-2 px-15">
          <p className="text-white font-bold text-4xl">
            We're here to raise your flag high!⁣⁣
          </p>
          <p className="text-white py-10 ">
            Inspiration is everywhere, we just need to get in front of it!
            Investing in a plan for the future doesn't mean you can't roll with
            the present. Take advantage of our resources- from our incubator to
            our investment arm- and get back on your feet today.
          </p>
          <div className="sm:block hidden sm:justify-center">
            <img src={groupPicture} alt="" />
            <p className="text-white px-4 py-2 underline">and others</p>
          </div>
        </div>
        <div className="lg:col-span-1 flex justify-center py-10 items-center">
          <button className="text-teal  bg-white rounded h-[3.4rem] w-[12rem]">
            Read Case Study's
          </button>
        </div>
      </div>
      <div className="text-center py-10">
        <p className="text-[#005490] font-semibold text-6xl">Case Study</p>
        <p className="py-5 px-5">
          amount new Double customers are able to delegate and save in their
          first month.
        </p>
      </div>
      <div className="bg-teal grid lg:grid-cols-2">
        <div className="px-5">
          <p className="text-white font-bold text-center text-4xl pt-10 pb-3">
            Join aimic
          </p>
          <p className="text-center text-white">
            By amping up your career with practical advice from experts, you can
            do more with your fantastic personality to get the career you want
            and deserve. Join Aimic today!
          </p>
          <div className="flex justify-center">
            <button className="bg-white my-10 text-teal font-semibold rounded h-[3rem] w-[12rem]">
              Check out Openings
            </button>
          </div>
        </div>
        <div className="px-5 flex justify-center">
          <img src={shape} alt="" className=" static lg:block hidden" />
        </div>
      </div>
      <div className="py-20 px-20 grid lg:grid-cols-2 grid-cols-1">
        <div>
          <p className="text-[#005490] font-bold text-4xl">
            Powering the growth of 100+ business & retailers in world.
          </p>
          <p className="py-5 text-[#90A3B4]">
            From single store, startups, to large multi-store brands.
          </p>
        </div>
        <div>
          <div className="flex justify-start lg:py-0 py-5">
            <img src={quotes} alt="" className="px-2" />
            <img src={stars} alt="" className="px-2" />
          </div>
          <p className="py-5 text-[#90A3B4]">
            “With Ehya, we’re able to easily track our performance in full
            detail. It’s become an essential tool for us to grow and engage with
            our audience.”
          </p>
          <div className="flex justify-between px-0">
            <i class="fa-solid angle-left fa-angle-left"></i>
            <img src={profile} alt="" />
            <i class="fa-solid angle-right fa-angle-right"></i>
          </div>
          <div className="flex py-4">
            <img src={bluedot} alt="" />
            <img src={greydot} alt="" className="ml-1" />
            <img src={greydot} alt="" className="ml-1" />
            <img src={greydot} alt="" className="ml-1" />
            <img src={greydot} alt="" className="ml-1" />
          </div>
        </div>
      </div>
      <div className="bg-teal rounded-xl mx-[10rem] mb-10">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div>
            <p className="text-white font-bold text-3xl mx-5 pt-5">
              Grow your business <br /> presence 40X ⁣⁣
            </p>
            <div className="flex pb-5">
              <p className="text-white font-bold text-3xl ml-5 mr-3">faster</p>
              <img src={emoji} alt="" />
            </div>
            <p className="text-white mx-5">
              Join with more 1200+ happy customers
            </p>
            <div className="flex mx-5 my-5 sm:block hidden">
              <img src={groupPicture} alt="" />
              <p className="text-white px-4 py-2 underline">and others</p>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-white text-teal font-bold px-5 rounded py-2  lg:my-0 my-4">
              Get your trial now
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#005490] grid lg:grid-cols-5 text-xl leading-10">
        <div className="py-5 lg:pl-20">
          <div className="flex justify-center">
            <p className="text-white font-bold text-4xl">AIMIC</p>
            <img src={dot} alt="" className="h-3 w-auto" />
          </div>
          <p className="text-white text-center">
            Build a modern and creative website with crealand
          </p>
          <div className="flex lg:justify-between justify-center">
            <img src={googlewhite} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={linkedin} alt="" />
          </div>
        </div>
        <div className="text-white text-start px-20 py-4">
          <p className="pb-4 font-bold">Products</p>
          <div className="text-[#d3d6d8] ">
            <p>Landingpage</p>
            <p>Features</p>
            <p>Documentation</p>
            <p>Referral Program</p>
            <p>Pricing</p>
          </div>
        </div>
        <div className="text-white text-start px-20 py-4">
          <p className="pb-4 font-bold">Services</p>
          <div className="text-[#d3d6d8]">
            <p>Documentation</p>
            <p>Design</p>
            <p>Themes</p>
            <p>Illustrations</p>
            <p>UI Kit</p>
          </div>
        </div>
        <div className="text-white text-start px-20 py-4">
          <p className="pb-4 font-bold">Company</p>
          <div className="text-[#d3d6d8]">
            <p>About</p>
            <p>Terms</p>
            <p>Privacy Policy</p>
            <p>Careers</p>
            <p>Pricing</p>
          </div>
        </div>
        <div className="text-white text-start px-20 py-4">
          <p className="pb-4 font-bold">More</p>
          <div className="text-[#d3d6d8]">
            <p>Documentation</p>
            <p>License</p>
            <p>Changelog</p>
          </div>
        </div>
      </div>
      <div className="bg-[#005490] flex justify-center">
        <img src={heart} alt="" />
      </div>
      <p className="text-white text-center bg-[#005490] py-5">
        Copyright © 2022. Crafted with love by FlyingStars
      </p>
    </>
  );
}

export default Content;
