"use client";

import PageLayout from "@/app/layouts/PageLayout";
import Image from "next/image";
import Link from 'next/link';
import { Element } from 'react-scroll';
import LandingSection from "./sections/LandingSection";
import AboutUs from "./sections/AboutUs";
import LargeShowcaseSection from "./sections/LargeShowcaseSection";

export default function Home() {
  return(
    <PageLayout>
      <LandingSection />
      <section className="flex flex-col gap-12 items-center">
        <Element name="largeShowcaseSectionElement"/>
        <LargeShowcaseSection/>
        <Element name="aboutUsSection"/>
        <AboutUs/>
      </section>
    </PageLayout>
  )
}