import axios from "axios";
import { GET_ORDER, GET_ORDERS, SINGLE_ORDER_UPDATE } from "../constants";

export const postOrders = (ordenes) => {
  return axios
    .post("/api/order/excel", ordenes)
    .then((order) => console.log(order));
};

const getOrders = function (orders) {
  return {
    type: GET_ORDERS,
    orders,
  };
};

const getSingleOrder = function (order) {
  return {
    type: GET_ORDER,
    order,
  };
};

/* const singleOrderUpdate = function (estado) {
  return {
    type: SINGLE_ORDER_UPDATE,
    estado
  }
} */

export const fetchOrders = () => (dispatch) => {
  axios.get("/api/order/excel").then((orders) => dispatch(getOrders(orders)));
};

export const fetchSingleOrder = (id) => (dispatch) => {
  axios.get(`/api/order/${id}`).then((order) => {
    let parsedOrder = {
      ...order.data,
      products: JSON.parse(order.data.products),
      client: JSON.parse(order.data.client),
      destination: JSON.parse(order.data.destination),
    };
    return dispatch(getSingleOrder(parsedOrder));
  });
};

export const orderStateUpdate = (estado, id) => (dispatch) => {
  console.log('estado y id', estado, id )
  return axios.put(`/api/order/${id}`, { state: estado })
/*     .then((order) => {
      console.log('order', order)
      return dispatch(singleOrderUpdate(order.data.state))
  }) */
}


