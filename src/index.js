module.exports = function check(str, bracketsConfig) {
    let array = [];
    array.push(str[0]);
    for (let i = 1; i < str.length; i++){
        let len = array.length;
        for (let j = 0; j < bracketsConfig.length; j++){
            if (str[i] == bracketsConfig[j][0]){
                if (array[array.length - 1] == str[i] && bracketsConfig[j][0] == bracketsConfig[j][1]){
                    array.pop();
                    break;
                }
                array.push(str[i]);
                break;
            }
            if (str[i] == bracketsConfig[j][1] && bracketsConfig[j][0] == array[array.length - 1]){
                array.pop();
                break;
            }
        }
        if (len == array.length) return false;
    }
    if (array.length > 0) return false;
    else return true;
}
