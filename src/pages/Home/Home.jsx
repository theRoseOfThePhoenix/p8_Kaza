import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerImg from "../../asset/banner_img2.jpeg";
function Home() {
  return (
    <div>
      <Banner
        src={BannerImg}
        alt={`Photo d'une côte de Mer`}
        title={`Chez vous, partout et ailleurs`}
      />
    </div>
  );
}
export default Home;
