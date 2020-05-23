export const validateInputs = htmlCollection => {
    const inputsArray = HtmlCollectionToArray(htmlCollection);
    let status = true;
    inputsArray.every(input => {
        console.log("input",input);
        if(input.value === ''){
            status = false;
            return status;
        }
        status = true;
        return status;
    })
    return status;
}

const HtmlCollectionToArray = htmlCollection => Array.prototype.slice.call( htmlCollection )