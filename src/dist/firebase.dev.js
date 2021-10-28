"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.auth = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var auth = _app["default"].initializeApp({
  apiKey: "AIzaSyCHQlSb2v-qMzH4daYoR4939AzvTNjH82Q",
  authDomain: "messenger-660bf.firebaseapp.com",
  projectId: "messenger-660bf",
  storageBucket: "messenger-660bf.appspot.com",
  messagingSenderId: "8043976491",
  appId: "1:8043976491:web:22974543f69d2de554976e"
}).auth();

exports.auth = auth;