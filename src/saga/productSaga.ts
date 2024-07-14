import { takeLatest, call, put } from "redux-saga/effects";
import {
  fetchProductFailure,
  fetchProductRequest,
  fetchProductSuccess,
} from "../slices/productSlice";

function* fetchProduct () {
  try {
    const response: Response = yield call(
      fetch,
      "http://localhost:3000/product"
    );
    const data:Response = yield response.json();
    yield put(fetchProductSuccess(data));
  } catch (err) {
    console.log(err);
    yield put(fetchProductFailure(err));
  }
}

export function* watchProductSaga() {
  yield takeLatest(fetchProductRequest.type, fetchProduct);
}
