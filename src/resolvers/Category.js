module.exports = {
    products: (parent, args, context) => {
        let { id: categoryId } = parent;
        let {
            filter: { onSale, avgRating },
        } = args;
        let {
            data: { products, reviews },
            modules: { _ },
        } = context;

        let categoryProducts = _.filter(products, { categoryId });

        if (onSale !== undefined) {
            categoryProducts = _.filter(categoryProducts, { onSale });
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
        return categoryProducts;
    },
};
