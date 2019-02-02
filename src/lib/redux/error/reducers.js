import {
    ADD_ERROR,
    REMOVE_ERROR,
    NO_INTERNET_CONNECTION,
    EMAIL_NOT_FOUND,
    EMAIL_USED,
    INVALID_EMAIL,
    WRONG_PASSWORD,
    UNAUTHORIZED,
    INTERNAL_ERROR
} from "lib/constants"

const initialState = {
    status: null,
    type: "",
    message: ""
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_ERROR:
            let message = ""
            switch (action.error.type) {
                case NO_INTERNET_CONNECTION:
                    message = "Please connect to the internet and try again."
                    break
                case EMAIL_NOT_FOUND:
                    message =
                        "Sorry, we couldn't find an account with that email address."
                    break
                case EMAIL_USED:
                    message =
                        "Sorry, this email address has already associcated with another account."
                    break
                case INVALID_EMAIL:
                    message =
                        "Please make sure your email address has correct format."
                    break
                case WRONG_PASSWORD:
                    message = "Sorry, that password isn't quite right."
                    break
                case UNAUTHORIZED:
                    message =
                        "Sorry, but you are not supposed to access this content."
                    break
                case INTERNAL_ERROR:
                    message = "Something happened on our server... "
                default:
                    message = "Please try again later."
                    break
            }
            return { ...action.error, message }
        case REMOVE_ERROR:
            return initialState
        default:
            return state
    }
}
