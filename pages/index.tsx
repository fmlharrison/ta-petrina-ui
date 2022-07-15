import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage<{}, {}> = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <Head>
        <title>Ta Petrina Houses</title>
        <meta
          name="description"
          content="Ta Petrina House on the island of Chios in Greece"
        />
        <link rel="icon" href="/chios.ico" />
      </Head>

      <div className="max-w-2xl rounded overflow-hidden shadow-lg my-2">
        <Image
          className="w-full"
          src={
            "https://res.cloudinary.com/ta-petrina/image/upload/v1657875327/large_volisso_village_833f86dd0e.jpg"
          }
          alt="Volisso village"
          layout="responsive"
          width={1000}
          height={666}
        />
        <div className="flex flex-col px-6 py-4 justify-center items-center">
          <div className="font-bold text-xl mb-2">Find yourself here</div>
          <p className="text-grey-darker text-base mb-2">
            Ta Petrina&apos;s beautifully restored and charmingly decorated
            village houses offer you the opportunity to spend a relaxing and
            comfortable holiday in the peace and quiet of the traditional
            village of Volissos on the unspoilt island of Chios Greece
          </p>
          <Link href="/properties">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              See the houses
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
