import Product from "../product/Product";
let laptop1 = {
  title:
    "Lenovo Yoga Slim 6 WUXGA OLED Intel Core i5 13th Gen 13500H - (16 GB/512 GB SSD/Windows 11 Home) 14IRH8 Thin and Light Laptop  (14 inch, Storm Grey, 1.35 Kg, With MS Office)",
  imgurl:
    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/g/0/-original-imahcd9nqyg48ejm.jpeg?q=70",
  features: [
    "Intel Core i5 Processor (12th Gen)",
    "32 GB LPDDR5 RAM",
    "Windows 11 Operating System",
    "512 GB SSD",
    "40.64 cm (16 Inch) Display",
    "1Yr Warranty + 1 Yr Premium Care and 1 Yr Accidental Damage Protection",
  ],
  price: 66990
};
let laptop2 = {
  title:
    "Dell Yoga Slim 6 WUXGA OLED Intel Core i5 13th Gen 13500H - (16 GB/512 GB SSD/Windows 11 Home) 14IRH8 Thin and Light Laptop  (14 inch, Storm Grey, 1.35 Kg, With MS Office)",
  imgurl:
    "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/g/0/-original-imahcd9nqyg48ejm.jpeg?q=70",
  features: [
    "Intel Core i5 Processor (12th Gen)",
    "32 GB LPDDR5 RAM",
    "Windows 11 Operating System",
    "512 GB SSD",
    "40.64 cm (16 Inch) Display",
    "1Yr Warranty + 1 Yr Premium Care and 1 Yr Accidental Damage Protection",
  ],
  price: 66990
};
export default () => {
  return (
    <div>
      {/* <Product title={laptop1.title} imgurl={laptop1.imgUrl} features = {laptop1.features} price={laptop1.price}/> */}
      <Product data={laptop1} />
      <Product data={laptop2} />
      <Product data={laptop1} />
      <Product data={laptop1} />

    </div>
  );
};
