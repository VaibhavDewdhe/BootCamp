import "./Product.css";
import Features from "../Features";
const Product = function (prs) {
  return (
    <div id="parent">
      <div>
        <img src={prs.data.imgurl} alt="" />
        <div>
          <input type="checkbox" /> <span>Add to Compare</span>
        </div>
      </div>
      <div id="product-details">
        <h3>{prs.data.title}</h3>
        <Features features={prs.data.features}/>
      </div>
      <div>
        <h2>₹{prs.data.price}</h2>
      </div>
    </div>
  );
};

export default Product;
