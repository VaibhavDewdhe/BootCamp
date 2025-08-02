import Product from "./Product";

export default ()=>{
  return <div>
    <Product title = "Acer aspire 7" price={53000} features={['8 gb ram', '512 gb ssd', 'Intel core I5 processor']}/>
    <Product title = "Dell Inspiron" price={53000} features={['8 gb ram', '512 gb ssd', 'Intel core I5 processor']}/>
  </div>;
}