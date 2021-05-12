let 右空白 = false, 左空白 = false, 中空白 = false;
function main(){
    let 入力 = document.getElementById("入力欄").value;
    let 行分割 = 入力.split('\n');
    let 行数 = 行分割.length;
    let 最大字数 = 0;
    let 列分割 = new Array();
    let 出力 = "";
    for (let i = 0; i < 行数; i++) {
        if(行分割[i].length > 最大字数) {
            最大字数 = 行分割[i].length;
        }
    }
    for (let i = 0; i < 行数; i++) {
        while (行分割[i].length < 最大字数){
            行分割[i] += "　";
        }
    }
    for (let i = 0; i < 最大字数; i++) {
        列分割.push("");
        if(左空白){列分割[i]="　";}
        for(let j = 行数 - 1; j >= 0; j--) {
            列分割[i] += 行分割[j].charAt(i);
            if(中空白){
                if(j!=0){
                    列分割[i]+="　";
                }
            }
        }
        if(右分割){列分割[i]="　";}
    }
    出力 = 列分割.join('\n');
    document.getElementById("出力欄").innerText = 出力;
    document.getElementById("ダミー").value = 出力;
}
function 右変更(){
    if (右空白 == true) {
        右空白 = false;
        document.getElementById("右ボタン").value = "「入れる」に変更";
    } else {
        右空白 = true;
        document.getElementById("右ボタン").value = "「入れない」に変更";
    }
}
function 左変更(){
    if (左空白 == true) {
        左空白 = false;
        document.getElementById("左ボタン").value = "「入れる」に変更";
    } else {
        左空白 = true;
        document.getElementById("左ボタン").value = "「入れない」に変更";
    }
}
function 中変更(){
    if (中空白 == true) {
        中空白 = false;
        document.getElementById("中ボタン").value = "「入れる」に変更";
    } else {
        中空白 = true;
        document.getElementById("中ボタン").value = "「入れない」に変更";
    }
}
function コピー(){
    document.getElementById("ダミー").select();
    document.execCommand("copy");
}

