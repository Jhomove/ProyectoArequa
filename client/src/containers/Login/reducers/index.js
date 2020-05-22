const loginReducer = (state,action) => {
    switch (action.type) {
        case "OPEN-LOGIN":
            return [
                action.data,
            ]
            break;
        default:
            break;
    }
}

export default loginReducer;