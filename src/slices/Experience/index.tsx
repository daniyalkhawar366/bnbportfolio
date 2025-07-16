import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Experience`.
 */
export type ExperienceProps = SliceComponentProps<Content.ExperienceSlice>;

/**
 * Component for "Experience" Slices.
 */
const Experience = (): JSX.Element => {
  return (
    <Bounded data-slice-type="experience" data-slice-variation="default">
      <div className="grid gap-16 md:grid-cols-2">
        <section>
          <Heading as="h2" size="lg">
            Education
          </Heading>
          <div className="mt-8 max-w-prose">
            <Heading as="h3" size="md">
              Bachelor of Computer Science
            </Heading>
            <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
              <span>2022 - present</span> <span className="text-3xl font-extralight">/</span> <span>FAST NUCES</span>
            </div>
            <div className="prose prose-lg prose-invert mt-4">
              <p>Currently pursuing a Bachelor of Computer Science with a strong foundation in software engineering, algorithms, and systems. Also building my own startup.</p>
            </div>
          </div>
        </section>
        <section>
          <Heading as="h2" size="lg">
            Skills
          </Heading>
          <div className="prose prose-lg prose-invert mt-8">
            <ul className="list-disc pl-5">
              <li>Full Stack Developer: Building modern web applications, automation, and integrations.</li>
              <li>Airbnb Co-host: Expert in guest communication, property management, and hospitality tech.</li>
            </ul>
          </div>
        </section>
      </div>
    </Bounded>
  );
};

export default Experience;
