const ContentStudyReducer = (state,action) => {
    switch (action.type) {
        case 'ADD-SECTION':
            return action.data;    
        default:
            return state;
    }
}

export default ContentStudyReducer;