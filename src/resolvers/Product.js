module.exports = {
    category: (parent, args, context) => {
        let { categoryId: id } = parent;
        let {
            data: { categories },
            modules: { _ },
        } = context;

        let productCategory = _.find(categories, { id });
        return productCategory;
    },
    reviews: (parent, args, context) => {
        let { id: productId } = parent;
        let {
            data: { reviews },
            modules: { _ },
        } = context;

        let productReviews = _.filter(reviews, { productId });
        return productReviews;
    },
};
