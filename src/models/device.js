import { query as queryCamera,add as addCamera,del as deleteCamera } from '@/services/camera';

export default {
  namespace: 'device',

  state: {
    res: {
      code: undefined,
      status: undefined,
      msg: '',
      data: [],
    },
    deviceList: {
      code: undefined,
      status: undefined,
      msg: '',
      data: [],
    },
  },

  effects: {
    *fetch({deviceType, payload,callback}, { call, put }) {
      let response;
      switch (deviceType) {
        case "camera":
          response= yield call(queryCamera,payload);
          break;
        case "board":
          response= yield call(queryCamera,payload);
          break;
        case "gas":
          response= yield call(queryCamera,payload);
          break;
      }
      yield put({
        type: 'deviceList',
        payload: response,
      });
      if (callback)callback(response);
    },
    *addCamera({ payload,callback}, { call, put }) {
      const response = yield call(addCamera,payload);
      yield put({
        type: 'res',
        payload: response,
      });
      if (callback)callback(response);
    },
    *deleteCamera({ payload,callback}, { call, put }) {
      const response = yield call(deleteCamera,payload);
      yield put({
        type: 'res',
        payload: response,
      });
      if (callback)callback(response);
    },
  },

  reducers: {
    res(state, action) {
      return {
        ...state,
        res: action.payload,
      };
    },
    deviceList(state, action) {
      return {
        ...state,
        deviceList: action.payload,
      };
    },
  },
};
