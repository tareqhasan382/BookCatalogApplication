"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const http_status_1 = __importDefault(require("http-status"));
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const jwtHelpers_1 = require("../../../helpers/jwtHelpers");
const prisma_1 = __importDefault(require("../../../shared/prisma"));
// import bcrypt = require('bcrypt');
const signup = (data) => __awaiter(void 0, void 0, void 0, function* () {
    //  const { name, email, password, role, contactNo, address, profileImg } =
    //     data;
    //   const hashedPassword = await bcrypt.hash(password, 10);
    //   const userData = {
    //     name: name,
    //     email: email,
    //     password: hashedPassword,
    //     role: role,
    //     contactNo: contactNo,
    //     address: address,
    //     profileImg: profileImg,
    //   };
    const result = yield prisma_1.default.users.create({ data });
    return result;
});
const login = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = payload;
    const user = yield prisma_1.default.users.findUnique({
        where: { email },
    });
    if (!user) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'User does not exist');
    }
    // const isPasswordValid = await bcrypt.compare(password, user.password);
    // if (!isPasswordValid) {
    //   throw new ApiError(httpStatus.NOT_FOUND, 'Invalid password');
    // }
    const isPasswordValid = yield (password === user.password);
    console.log('isPasswordValid:', isPasswordValid);
    if (!isPasswordValid) {
        throw new ApiError_1.default(http_status_1.default.NOT_FOUND, 'Invalid password');
    }
    const { id: userId, role } = user;
    const accessToken = jwtHelpers_1.jwtHelpers.createToken({ userId, role }, process.env.secret, process.env.expires_in);
    return {
        accessToken,
        userId,
        role,
    };
});
exports.AuthService = {
    signup,
    login,
};
