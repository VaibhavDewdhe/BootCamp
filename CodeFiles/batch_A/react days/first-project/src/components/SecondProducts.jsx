import Product from "./product/Product";

export default () => {
    let products = [
        {
            imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/g/0/-original-imahcd9nqyg48ejm.jpeg?q=70",
            title: "Acer Aspire 7",
            price: 53000,
            features: [
                '8 gb RAM',
                '512 gb storage (SSD)',
                '4gb graphics card',
                'Intel core I5 8th generation processor'
            ]
        },

        {
            imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/g/0/-original-imahcd9nqyg48ejm.jpeg?q=70",
            title: "Lenovo Ideapad ",
            price: 53000,
            features: [
                '8 gb RAM',
                '512 gb storage (SSD)',
                '4gb graphics card',
                'Intel core I5 8th generation processor'
            ]
        },
        {
            imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/g/0/-original-imahcd9nqyg48ejm.jpeg?q=70",
            title: "Acer Aspire 7",
            price: 53000,
            features: [
                '8 gb RAM',
                '512 gb storage (SSD)',
                '4gb graphics card',
                'Intel core I5 8th generation processor'
            ]
        },
        {
            imgurl: "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/g/0/-original-imahcd9nqyg48ejm.jpeg?q=70",
            title: "Acer Aspire 7",
            price: 53000,
            features: [
                '8 gb RAM',
                '512 gb storage (SSD)',
                '4gb graphics card',
                'Intel core I5 8th generation processor'
            ]
        }
    ]
    return <div>
        <h1>products</h1>
        {/* <Product data={product} />
         */}

         {
            products.map(e => <Product data={e}/>)
         }
    </div>;
}