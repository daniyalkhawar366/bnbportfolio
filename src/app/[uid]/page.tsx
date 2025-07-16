import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

import { createClient } from "@/prismicio";
import { components } from "@/slices";

type Params = { uid: string };

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  // Filter out the tech_list slice and all but the first 'experience' slice
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

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const client = createClient();
  const page = await client
    .getByUID("page", params.uid)
    .catch(() => notFound());

  return {
    title: page.data.meta_title,
    description: page.data.meta_description,
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("page");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
