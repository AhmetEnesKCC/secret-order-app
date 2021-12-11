import Head from "next/head";
import { MdPeople } from "react-icons/md";
import {
  FaCarAlt,
  FaBuilding,
  FaArrowDown,
  FaArrowCircleDown,
} from "react-icons/fa";
import ExplainedInNumber from "../components/index/explainedInNumber";
import BundleLogo from "../public/images/svg/bundle logo.svg";
import BundleBox from "../components/index/bundleBox";
import Image from "next/image";

export default function Home() {
  const numberData = [
    {
      text: "Mutlu Musteri",
      data: 170_000,
      icon: MdPeople,
    },
    {
      text: "Gonullu",
      data: 12_000,
      icon: FaCarAlt,
    },
    {
      text: "Sirket",
      data: 780,
      icon: FaBuilding,
    },
  ];

  const newsData = [
    {
      title: "Buyuk Yatirim",
      text: "Ulastir.com 1 milyar euro yatirim aldi.",
      imageID: "lhltMGdohc8",
      link: "#",
    },
    {
      title: "Artik Londra'da",
      text: "Londra da ulastir.com'la ulastiriyor.",
      imageID: "jAj5yVH8Ooc",
      link: "#",
    },
    {
      title: "En guvenlisi",
      text: "Yapilan arastirmalara gore en guvenli tasima sirketi ulastir.com oldu",
      imageID: "wMSZGRzEApw",
      link: "#",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen  w-full">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-screen">
        <div className="relative">
          <div className="w-full h-screen">
            <Image src="/images/truck.gif" layout="fill" />
          </div>
          <p className="text-white bg-main-orange text-3xl text-center left-1/2 -translate-x-1/2 lg:left-0 lg:-translate-x-0 w-[60%] lg:text-6xl lg:text-left  bg-opacity-80 lg:py-10 lg:pl-[calc(10%+4rem)] pr-1  absolute z-30 top-1/2 transform -translate-y-1/2 font-main font-extrabold lg:w-[800px]">
            Tam istediginiz anda olabilecek en hizli sekilde sag salim
          </p>
          <a
            onClick={() => {
              const element = document.querySelector("#rakam_box");
              element.scrollIntoView({ behavior: "smooth" });
            }}
            className="absolute bottom-[100px] z-30 left-1/2 -translate-x-1/2 text-main-orange text-6xl cursor-pointer bg-white p-2 rounded-full hover:text-main-purple"
          >
            <FaArrowCircleDown />
          </a>
        </div>
        <div
          className="w-full bg-white pt-40 pb-40"
          id="rakam_box"
          style={{
            scrollMarginTop: "100px",
          }}
        >
          <h3 className="text-main-orange font-main font-bold text-4xl lg:text-6xl text-center">
            Rakamlarla Biz
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 text-center mt-40 space-y-40 lg:space-y-0">
            {numberData.map((d) => {
              return (
                <ExplainedInNumber
                  key={d.data}
                  Icon={d.icon}
                  text={d.text}
                  data={d.data}
                />
              );
            })}
          </div>
        </div>
        <div className="w-full py-40 bg-main-blue-v2 px-10  lg:px-[calc(10%+4rem)] relative min-h-[2000px] mt-40">
          <h3 className="text-white text-4xl lg:text-5xl font-main font-extrabold pb-40">
            2H1G ile neden biz
          </h3>
          <div className="absolute top-[500px] left-[100px] text-[500px] z-0 text-white text-opacity-10 select-none">
            H
          </div>
          <div className="absolute bottom-[500px] left-[100px] lg:right-[500px] text-[500px] z-0 text-white text-opacity-10 select-none">
            G
          </div>
          <div className="text-white">
            <h2 className="inline-block text-8xl font-main mr-10">1.</h2>
            <h4 className="inline-block font-main text-5xl font-extrabold">
              Hesapli
            </h4>
            <p className="text-3xl font-main lg:w-[600px] mt-10">
              Ortaya cikis mottomuz olan birlikten kuvvet dogar sloganimizla en
              kaliteli hizmeti en butce dostu sekilde vermeye calisiyoruz
            </p>
          </div>
          <div className="text-white lg:float-right mt-60">
            <h2 className="inline-block text-8xl font-main mr-10 font-extrabold">
              2.
            </h2>
            <h4 className="inline-block font-main text-5xl">Hizli</h4>
            <p className="text-3xl font-main lg:w-[600px] mt-10">
              Ulastir.com sahip oldugu altyapi ve puanlama hizmetleriyle
              teslimatin olabilecek en hizli sekilde olmasi icin cabaliyor.
            </p>
          </div>
          <div className="text-white lg:float-left clear-both mt-60">
            <h2 className="inline-block text-8xl font-main mr-10">3.</h2>
            <h4 className="inline-block font-main text-5xl font-extrabold">
              Guvenli
            </h4>
            <p className="text-3xl font-main  lg:w-[600px] mt-10">
              Her seyden once guvenligi on planda tutuyor, Sigorta ve koruma
              destek hizmetlerimizle teslimatinizi guvence altina aliyoruz.
            </p>
          </div>
        </div>
        <div className="px-20 lg:px-[calc(10%+4rem)] py-40 bg-bundle-bg mt-20">
          <BundleLogo className="scale-50 origin-left" />
          <h3 className="text-white text-5xl mt-32 font-main">
            Bazi Ulastir.com Haberleri
          </h3>
          <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-x-10 lg:h-[400px] lg:children:w-[400px] space-y-40 lg:space-y-0">
            {newsData.map((n) => {
              return <BundleBox {...n} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticProps = () => {
  return {
    props: {
      header: {
        container: "bg-white",
        links: "!text-main-blue-v2",
        logo: "text-main-blue-v2",
        box_link: "bg-gray-500",
        show_sub: true,
      },
    },
  };
};
