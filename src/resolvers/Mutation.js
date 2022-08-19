module.exports = {
    addCategory: (parent, args, context) => {
        let {
            input: { name },
        } = args;
        console.log({ args });
        let {
            data: { categories },
            modules: { uuidV4 },
        } = context;

        let newCategory = {
            id: uuidV4(),
            name,
        };
        categories.push(newCategory);
        return newCategory;
    },
    addProduct: (parent, args, context) => {
        let {
            input: {
                name,
                description,
                quantity,
                price,
                image,
                onSale,
                categoryId,
            },
        } = args;
        let {
            data: { categories, products },
            modules: { uuidV4 },
        } = context;

        let _productCategory = categories.find(({ id }) => id == categoryId);
        if (_productCategory || categoryId == undefined) {
            let newProduct = {
                id: uuidV4(),
                name,
                description,
                quantity,
                price,
                image,
                onSale,
            };
            if (categoryId !== undefined) {
                newProduct = { ...newProduct, categoryId };
            }
            products.push(newProduct);
            return newProduct;
        }
        return null;
    },
    addReview: (parent, args, context) => {
        let {
            input: { title, comment, rating, productId },
        } = args;
        let {
            data: { reviews, products },
            modules: { uuidV4 },
        } = context;

        let reviewProduct = products.find(({ id }) => id === productId);
        if (reviewProduct) {
            let newReview = {
                id: uuidV4(),
                date: new Date(),
                title,
                comment,
                rating: [1, 2, 3, 4, 5].includes(rating) && rating,
                productId,
            };
            reviews.push(newReview);
            return newReview;
        }
        return null;
    },
};
