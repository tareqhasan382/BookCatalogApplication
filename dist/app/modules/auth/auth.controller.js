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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthControlller = void 0;
const http_status_1 = __importDefault(require("http-status"));
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const auth_service_1 = require("./auth.service");
// import bcrypt = require('bcrypt');
const signup = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // const { name, email, password, role, contactNo, address, profileImg } =
        //   req.body;
        // const hashedPassword = await bcrypt.hash(password, 10);
        // const data = {
        //   name: name,
        //   email: email,
        //   password: hashedPassword,
        //   role: role,
        //   contactNo: contactNo,
        //   address: address,
        //   profileImg: profileImg,
        // };
        const result = yield auth_service_1.AuthService.signup(req.body);
        res.status(400).json({
            statusCode: http_status_1.default.CREATED,
            success: true,
            message: 'signup successfully !!',
            data: result,
        });
    }
    catch (error) {
        res.status(400).json({
            statusCode: http_status_1.default.BAD_REQUEST,
            success: false,
            message: 'something went wrong',
            data: error,
        });
    }
}));
const login = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const loginData = __rest(req.body, []);
        const result = yield auth_service_1.AuthService.login(loginData);
        //console.log('result:', result);
        const { accessToken, userId } = result;
        const cookieOptions = {
            secure: process.env.NODE_ENV == 'production',
            httpOnly: true,
        };
        const token = { accessToken, userId };
        res.cookie('Token', token, cookieOptions);
        res.status(200).json({
            statusCode: http_status_1.default.OK,
            success: true,
            message: 'Users login successfully !!',
            data: token,
        });
    }
    catch (error) {
        res.status(400).json({
            statusCode: http_status_1.default.BAD_REQUEST,
            success: false,
            message: 'something went wrong !!',
            data: error,
        });
    }
}));
exports.AuthControlller = {
    signup,
    login,
};
