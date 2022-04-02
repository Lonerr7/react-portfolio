import { formApi } from '../api/api';

const DISPLAY_SENDING_STATUS = 'DISPLAY_SENDING_STATUS';
const REMOVE_SENDING_STATUS = 'REMOVE_SENDING_STATUS';

const initialState = {
  statusCode: null,
  statusMessage: '',
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_SENDING_STATUS:
      return {
        ...state,
        statusCode: action.newStatusCode,
        statusMessage:
          action.newStatusCode === 200
            ? 'Email was successfully sent! I will reply soon.'
            : `Something went wrong, please try again later. Error: ${action.newStatusMessage}`,
      };
    case REMOVE_SENDING_STATUS:
      return {
        ...state,
        statusMessage: '',
      };
    default:
      return state;
  }
};

const sendEmailSuccess = (newStatusCode, newStatusMessage) => ({
  type: DISPLAY_SENDING_STATUS,
  newStatusCode,
  newStatusMessage,
});

const removeSendingStatusSuccess = () => ({
  type: REMOVE_SENDING_STATUS,
});

export const sendEmail = (values) => async (dispatch) => {
  try {
    const response = await formApi.sendMessage(values);
    dispatch(sendEmailSuccess(response.status, response.text));
    setTimeout(() => dispatch(removeSendingStatusSuccess()), 3000);
  } catch (error) {
    dispatch(sendEmailSuccess(error.status, error.text));
    setTimeout(() => dispatch(removeSendingStatusSuccess()), 3000);
  }
};

export default formReducer;
