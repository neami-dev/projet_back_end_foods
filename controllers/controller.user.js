const asyncWrapper = require("../middlewares/asyncWrapper");
const User = require("../models/model.user");
const appError = require("../utils/appError");
const httpStatusText = require("../utils/httpStatusText");
const bcrypt = require("bcrypt");
const generateJWT = require("../middlewares/generateJWT");

const getAllUsers = asyncWrapper(async (req, res, next) => {
    const users = await User.find({}, { __v: false });
    res.status(200).json({ status: httpStatusText.SUCCESS, data: users });
});

const register = asyncWrapper(async (req, res, next) => {
    const {
        firstName,
        lastName,
        email,
        password,
        dateCreation,
        phoneNumber,
        role,
    } = req.body;
    console.log("fistName",firstName);
    const oldUser = await User.findOne({ email });

    if (oldUser) {
        const error = appError.create(
            "user already exists !",
            400,
            httpStatusText.FAIL
        );
        return next(error);
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        dateCreation,
        phoneNumber,
        role,
    });

    const token = generateJWT({
        email: newUser.newUser,
        _id: newUser._id,
        role: newUser.role,
    });
    newUser.token = token;
    await newUser.save();
    res.status(201).json({
        status: httpStatusText.SUCCESS,
        data: { user: newUser },
    });
});
const login = asyncWrapper(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        const error = appError.create(
            "email and password required !",
            400,
            httpStatusText.FAIL
        );
        return next(error);
    }
    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
        const error = appError.create(
            "user not found",
            404,
            httpStatusText.FAIL
        );
        return next(error);
    }
    const matchedPassword = await bcrypt.compare(password, user.password);
    if (user && matchedPassword) {
        const token = generateJWT({
            email: user.email,
            _id: user.id,
            role: user.role,
        });
        res.status(200).json({
            status: httpStatusText.SUCCESS,
            data: { token, role: user.role },
        });
    }

    res.status(200).json(req.body);
});
module.exports = {
    getAllUsers,
    register,
    login,
};
