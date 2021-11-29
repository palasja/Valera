function getStr(elId) {
    var dateElement = document.getElementById(elId);
    var val = dateElement.defaultValue == null ? dateElement.defaultValue : dateElement.value;
    return val;
};
export { getStr }