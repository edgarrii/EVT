import previewCarFirst from "../assets/preview-car-1.png";
import previewCarSecond from "../assets/preview-car-2.png";
import previewCarThird from "../assets/preview-car-3.png";
import mainImgMacan from "../assets/car-1.png";
import mainImg911 from "../assets/car-2.png";
import mainImg718 from "../assets/car-3.png";

export const dataWithCars = [
  {
    id: 1,
    model: "Porsche 911",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quasi?",
    previewImg: previewCarFirst,
    mainImg: mainImg911,
    startPrice: "210242$",
    middlePrice: "215200$",
    finalPrice: "230242$",
  },
  {
    id: 2,
    model: "Porsche Macan",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quasi?",
    previewImg: previewCarSecond,
    mainImg: mainImgMacan,
    startPrice: "150344$",
    middlePrice: "189200$",
    finalPrice: "200242$",
  },
  {
    id: 3,
    model: "Porsche 718",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quasi?",
    previewImg: previewCarThird,
    mainImg: mainImg718,
    startPrice: "199900$",
    middlePrice: "220432$",
    finalPrice: "250242$",
  },
  // {
  //   id: 4,
  //   model: "Porsche Ty",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quasi?",
  //   previewImg: previewCarThird,
  //   mainImg: mainImg718,
  //   price: "199900$",
  // },
  // {
  //   id: 5,
  //   model: "Porsche 123",
  //   description:
  //     "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, quasi?",
  //   previewImg: previewCarThird,
  //   mainImg: mainImg911,
  //   price: "199900$",
  // },
];
