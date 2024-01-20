module.exports = (asyncFn) => {
    return (res, req, next) => {
        asyncFn(res, req, next).catch((err) => {
            next(err);
        });
    };
};
