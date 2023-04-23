function countElems(arr, elem) {
    return arr.filter((currElem) => currElem == elem).length;
};

function goToMain() {
    model.app.page = "main";
    view();
}