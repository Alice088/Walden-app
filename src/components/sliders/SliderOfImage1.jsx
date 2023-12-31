import React from "react";
import TemplateCardForSlider1 from "./TemplateCardForSlider1"
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";


export default function SliderOfImage1({head, arrPhoto}) {
  return (
    <div className="Container">
      <h4>{head}</h4>

      <div className="Conteiner__Cards">
        <Splide
          aria-label="Photos"
          options={{
            type: "loop",
            drag: "free",
            arrows: false,
            pagination: false,
            perPage: 4,
            autoScroll: {
              pauseOnHover: false,
              pauseOnFocus: false,
              rewind: false,
              speed: 1,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {arrPhoto.map((item) => {
            return (
              <SplideSlide key={item.id}>
                <TemplateCardForSlider1 text={item.text} alt={item.alt} img={item.src}/>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </div>
  );
}
