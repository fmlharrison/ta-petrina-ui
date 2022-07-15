import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

import { PropertySummary } from "./types";

const Home: NextPage<{ properties: PropertySummary[] }, {}> = ({
  properties,
}) => {
  const house = properties[0];
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Head>
        <title>Ta Petrina - Properties</title>
        <meta name="description" content="List of the Ta Petrina properties" />
        <link rel="icon" href="/chios.ico" />
      </Head>

      <div className="grid grid-cols-3 gap-4">
        {properties.map((property) => {
          return (
            <div
              key={property.id}
              className="max-w-xs rounded overflow-hidden shadow-lg my-2 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            >
              <Image
                className="w-full"
                src={
                  property.attributes.heroImage.data?.attributes.formats.small
                    .url ||
                  "https://res.cloudinary.com/ta-petrina/image/upload/v1657637777/small_panayiotis_terrace_a5ae71c62b.jpg"
                }
                alt="Sunset in the mountains"
                layout="responsive"
                width={
                  property.attributes.heroImage.data?.attributes.formats.small
                    .width || 500
                }
                height={
                  property.attributes.heroImage.data?.attributes.formats.small
                    .height || 375
                }
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  {property.attributes?.name}
                </div>
                <p className="text-grey-darker text-base">
                  {property.attributes?.summary}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch(
    "https://ta-petrina-backend.herokuapp.com/api/properties?fields[0]=name&fields[1]=summary&populate[0]=heroImage"
  );
  const data = await res.json();
  const properties = data.data;

  return {
    props: {
      properties,
    },
  };
}
