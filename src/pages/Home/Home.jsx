import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerImg from "../../asset/banner_img2.jpeg";
import Card from "../../components/Card/Card";

function Home() {
  return (
    <div className="main">
      <Banner
        src={BannerImg}
        alt={`Photo d'une côte de Mer`}
        title={`Chez vous, partout et ailleurs`}
      />
      <Card />
    </div>
  );
}
export default Home;
