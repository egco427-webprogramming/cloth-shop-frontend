// https://github.com/szboynono/mosha-vue-toastify

import { createToast } from "mosha-vue-toastify";

const successToast = () =>
  createToast("", {
    title: "AddProduct to cart",
    description: "some good description",
    transition: "slide",
    showIcon: true,
    swipeClose: true,
    position: "bottom-left",
    type: "my-danger",
  });
const errorToast = () =>
  createToast("", {
    title: "some thing went wrong",
    description: "some good description",
    transition: "slide",
    showIcon: true,
    swipeClose: true,
    position: "bottom-left",
    type: "my-danger",
  });
const logoutToast = () =>
  createToast("", {
    title: "see you later",
    description: "some good description",
    transition: "slide",
    showIcon: true,
    swipeClose: true,
    position: "bottom-left",
    type: "my-warning",
  });
const loginToast = () =>
  createToast("", {
    title: "happy shopping",
    description: "some good description",
    transition: "slide",
    showIcon: true,
    swipeClose: true,
    position: "bottom-left",
    type: "default",
  });
const checkoutToast = () =>
  createToast("", {
    title: "your product is on the way to you",
    description: "some good description",
    transition: "slide",
    showIcon: true,
    swipeClose: true,
    position: "bottom-left",
    type: "default",
  });

export default {
  successToast,
  errorToast,
  logoutToast,
  loginToast,
  checkoutToast,
};
