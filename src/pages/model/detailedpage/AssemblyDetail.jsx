import React from "react";
import { DetailedPage } from "./DetailedPage";
import { Carousel } from "./DetailCarousel";
import { Eat } from "../../../shared/ui/eat/Eat";
import { Izba } from "../../../shared/ui/izba/izba";

export const AssemblyDetail = () => {
  return (
    <div>
      <DetailedPage />
      <div className="carousel-container">
        <Carousel />
        <Carousel />
      </div>
      <div className="cards-also">
        <h2>С этим товаром смотрят</h2>
        <Eat />
      </div>
      <div className="cards-also">
        <h2>С этим товаром покупают</h2>
        <Izba />
      </div>
    </div>
  );
};
