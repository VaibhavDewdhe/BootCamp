import "./Product.css";

const Product = function (prs) {
  return (
    <div id="parent">
      <div>
        <img
          src={prs.imgurl}
          alt=""
        />
        <div>
          <input type="checkbox" /> <span>Add to Compare</span>
        </div>
      </div>
      <div id="product-details">
        <h3>
          Lenovo IdeaPad Slim 5 WUXGA IPS Intel Core i5 12th Gen 12450H - (16
          GB/512 GB SSD/Windows 11 Home) 16I...
        </h3>
        <ul>
          <li>Intel Core i5 Processor (12th Gen)</li>
          <li>16 GB LPDDR5 RAM</li>
          <li>Windows 11 Operating System</li>
          <li>512 GB SSD</li>
          <li>40.64 cm (16 Inch) Display</li>
          <li>
            1Yr Warranty + 1 Yr Premium Care and 1 Yr Accidental Damage
            Protection
          </li>
        </ul>
      </div>
      <div>
        <h2>₹ {prs.price}</h2>
      </div>
    </div>
  );
};

export default Product;
