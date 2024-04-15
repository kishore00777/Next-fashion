import img1 from "@/assets/Products/1.jpg";
import img2 from "@/assets/Products/2.jpg";
import img3 from "@/assets/Products/3.jpg";
import img4 from "@/assets/Products/4.jpg";
import img5 from "@/assets/Products/5.jpg";
import img6 from "@/assets/Products/6.jpg";
import img7 from "@/assets/Products/7.jpg";
import img8 from "@/assets/Products/8.jpg";
import img9 from "@/assets/Products/9.jpg";
import img10 from "@/assets/Products/10.jpg";
import img11 from "@/assets/Products/11.jpg";
import img12 from "@/assets/Products/12.jpg";
import Apple from "@/assets/Brand/Apple.svg";
import Fasttrack from "@/assets/Brand/Fasttrack.svg";
import Boat from "@/assets/Brand/Boat.svg";
import Fire from "@/assets/Brand/Fire.svg";
import Titan from "@/assets/Brand/Titan.svg";
import Noise from "@/assets/Brand/Noise.svg";

export const product = [
  {
    cart: "CART",
    productCount: 1,
    src: Apple,
    alt: "Apple watch",
    price: 459,
    actualPrice: 1099,
    brand: "Apple",
  },
  {
    cart: "CART",
    productCount: 1,
    src: Fasttrack,
    alt: "Fast track watch",
    price: 459,
    actualPrice: 1099,
    brand: "Fast track",
  },
  {
    cart: "CART",
    productCount: 1,
    src: Boat,
    alt: "Boat watch",
    price: 459,
    actualPrice: 1099,
    brand: "Boat",
  },
  {
    cart: "CART",
    productCount: 1,
    src: Fire,
    alt: "Fire watch",
    price: 459,
    actualPrice: 1099,
    brand: "Fire Boltt",
  },
  {
    cart: "CART",
    productCount: 1,
    src: Titan,
    alt: "Titan watch",
    price: 459,
    actualPrice: 1099,
    brand: "Titan",
  },
  {
    cart: "CART",
    productCount: 1,
    src: Noise,
    alt: "Noise watch",
    price: 459,
    actualPrice: 1099,
    brand: "Noise",
  },
  {
    cart: "CART",
    productCount: 1,
    src: img1,
    alt: "Elite Golden Chain Timepiece",
    price: 459,
    actualPrice: 699,
    brand: "TimeLux",
  },
  {
    cart: null,
    productCount: null,
    src: img2,
    alt: "Luxe Gold Link Watch",
    price: 459,
    actualPrice: null,
    brand: "GoldTime",
  },
  {
    cart: "CART",
    productCount: 1,
    src: img3,
    alt: "Prestige Chain Link Timekeeper",
    price: 459,
    actualPrice: 699,
    brand: "ChronoCraft",
  },
  {
    cart: null,
    productCount: null,
    src: img4,
    alt: "Golden Chainlink Elegance",
    price: 459,
    actualPrice: null,
    brand: "EleganceWatches",
  },
  {
    cart: null,
    productCount: null,
    src: img5,
    alt: "Regal Chain Strap Watch",
    price: 459,
    actualPrice: null,
    brand: "RegalTimepieces",
  },
  {
    cart: null,
    productCount: null,
    src: img6,
    alt: "Golden Linkage Timepiece",
    price: 459,
    actualPrice: 899,
    brand: "LuxuryHorology",
  },
  {
    cart: null,
    productCount: null,
    src: img7,
    alt: "Chain-Strap Golden Elegance",
    price: 459,
    actualPrice: null,
    brand: "GoldenStyle",
  },
  {
    cart: null,
    productCount: null,
    src: img8,
    alt: "Elite Chain Bracelet Watch",
    price: 459,
    actualPrice: null,
    brand: "EliteWatches",
  },
  {
    cart: null,
    productCount: null,
    src: img9,
    alt: "Chainlink Golden Timepiece",
    price: 459,
    actualPrice: 1099,
    brand: "GoldenLinks",
  },
  {
    cart: null,
    productCount: null,
    src: img10,
    alt: "Golden Chain Link Watch",
    price: 459,
    actualPrice: null,
    brand: "GoldenChains",
  },
  {
    cart: null,
    productCount: null,
    src: img11,
    alt: "Elite Gold Link Timekeeper",
    price: 459,
    actualPrice: null,
    brand: "GoldElite",
  },
  {
    cart: null,
    productCount: null,
    src: img12,
    alt: "Regal Chainlink Wristwatch",
    price: 459,
    actualPrice: 899,
    brand: "RegalWatches",
  },
].map((item, index) => ({ ...item, id: index }));
