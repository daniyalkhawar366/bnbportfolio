import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("homepage");

  // Remove all but the first 'experience' slice
  let experienceFound = false;
  const filteredSlices = page.data.slices.filter((slice) => {
    if (slice.slice_type === "tech_list") return false;
    if (slice.slice_type === "experience") {
      if (experienceFound) return false;
      experienceFound = true;
      return true;
    }
    return true;
  });

  return <SliceZone slices={filteredSlices} components={components} />;
}

export const metadata = {
  title: "Daniyal Khawar | Airbnb Co-host",
  description: "Portfolio of Daniyal Khawar, Airbnb Co-host.",
};
