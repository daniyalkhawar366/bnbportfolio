import React from "react";
import Avatar from "@/components/Avatar";
import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";

import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Biography`.
 */
export type BiographyProps = SliceComponentProps<Content.BiographySlice>;

/**
 * Component for "Biography" Slices.
 */
const Biography = (): JSX.Element => {
  return (
    <Bounded data-slice-type="biography" data-slice-variation="default">
      <div className="grid gap-x-8 gap-y-6 md:grid-cols-[2fr,1fr]">
        <Heading size="xl" className="col-start-1">
          About Me
        </Heading>
        <div className="prose prose-xl prose-slate prose-invert col-start-1">
          <p>
            Hey! I&apos;m Daniyal from Islamabad. I&apos;m into tech, travel, and figuring things out. I love the little things that make a difference: clean spaces, quick responses, and creating good vibes wherever I go. I believe in making people feel genuinely welcome and at home, whether through a warm conversation or just being helpful when needed.<br /><br />
            Always excited to connect with new people and share stories!
          </p>
        </div>
        <Button linkField={{ url: "/contact", link_type: "Web" }} label="Contact Me" />
        <Avatar
          image={{
            url: "/daniyal.jpg",
            width: 1080,
            height: 1080,
            alt: "Daniyal Khawar"
          }}
          className="row-start-1 max-w-sm md:col-start-2 md:row-end-3"
        />
      </div>
    </Bounded>
  );
};

export default Biography;
