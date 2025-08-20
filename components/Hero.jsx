"use client";
import Link from "next/link";
import hero_image from "@/public/images/hero-section/hero-image.png";

const HeroOne = () => {
  return (
    <section className="hero-one">
      <div className="left-side">
        <h1>
          <div>Find Perfect Hotels</div>
          <div>anywhere you go.</div>
        </h1>
        <p>We've been in the hotels business across the world for 5 years now. We assure you that you will always enjoy your stay with us.</p>
        <div className="buttons">
          <Link
            className="sign-up"
            href="/sign-up"
          >
            Sign Up
          </Link>
          <Link
            className="sign-hotels"
            href="/hotels"
          >
            Search Hotels
          </Link>
        </div>
      </div>
      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${hero_image.src})`,
        }}
      ></div>
    </section>
  );
};

export default HeroOne;
