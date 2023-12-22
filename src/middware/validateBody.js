const validateBody = schema => async (req, res, next) => {
    try {
        await schema.validateAsync(req.body);
        next();
    } catch (e) {
        return res.status(400).json({
            error: e.message
        });
    }
};

module.exports = validateBody;