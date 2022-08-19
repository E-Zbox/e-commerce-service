module.exports = {
    hello: (parent, args, context) => "Hello World!",
    products: (parent, args, context) => {
        let {
            filter: { onSale, avgRating },
        } = args;
        let {
            data: { products, reviews },
            modules: { _ },
        } = context;

        let filteredProducts = products;

        if (onSale !== undefined) {
            filteredProducts = _.filter(filteredProducts, { onSale });
        }

        if ([1, 2, 3, 4, 5].includes(avgRating)) {
            filteredProducts = filteredProducts.filter((product) => {
                let { id, name } = product;
                let sumRating = 0;
                let reviewCount = 0;
                reviews.forEach(({ productId, rating }) => {
                    if (productId === id) {
                        ++reviewCount;
                        sumRating += rating;
                    }
                });
                let _avgRating = Math.round(sumRating / reviewCount);
                return _avgRating >= avgRating;
            });
        }
        // console.log({ filteredProducts });
        return filteredProducts;
    },
    product: (parent, args, context, info) => {
        let { id } = args;
        let {
            data: { products },
            modules: { _ },
        } = context;
        let product = _.find(products, { id });
        console.log({ info });
        return product;
    },
    categories: (parent, args, context, info) => {
        let {
            data: { categories },
        } = context;
        console.log({ info });
        return categories;
    },
    category: (parent, args, context) => {
        let { id } = args;
        let {
            data: { categories },
            modules: { _ },
        } = context;

        let category = _.find(categories, { id });
        return category;
    },
};
