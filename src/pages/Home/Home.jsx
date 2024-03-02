import React from "react";
// @ts-ignore
import Gallery from "../../components/Gallery/Gallery";
import Banner from "../../components/Banner/Banner";
import BannerImg from "../../asset/banner_img2.jpeg";

function Home() {
  return (
    <div className="main">
      <Banner
        src={BannerImg}
        alt={`Photo d'une côte de Mer`}
        title={`Chez vous, partout et ailleurs`}
      />
      <Gallery />
    </div>
  );
}
export default Home;
