// 色の有効性をチェックする関数
function isValidColor(color) {
    const hexRegex = /^#[0-9A-Fa-f]{6}$/i;
    const cssColorNames = [
        "black", "white", "red", "green", "blue", "yellow", "cyan", "magenta",
        "gray", "silver", "maroon", "olive", "lime", "aqua", "fuchsia", "purple",
        "orange", "pink", "brown", "violet", "indigo", "gold", "beige", "ivory",
        "teal", "navy"
    ];
    return hexRegex.test(color) || cssColorNames.includes(color.toLowerCase());
}

function changeColumnsColor(type) {
    const colorInput = document.getElementById("colorInput").value;
    if (!isValidColor(colorInput)) {
        alert("有効な色名または16進数カラーコードを入力してください（例: red, #FF5733）");
        return;
    }

    // 奇数列（2, 5列目）と偶数列（1, 3, 4列目）をクラス名で指定
    const oddClasses = ["col1", "col3", "col5"];
    const evenClasses = ["col2", "col4", "col6"];

    // 一旦全セルの背景色リセット
    const allCells = document.querySelectorAll("#myTable td");
    allCells.forEach(td => td.style.backgroundColor = "");

    if (type === "odd") {
        oddClasses.forEach(cls => {
            const cells = document.querySelectorAll(`#myTable td.${cls}`);
            cells.forEach(td => td.style.backgroundColor = colorInput);
        });
    } else if (type === "even") {
        evenClasses.forEach(cls => {
            const cells = document.querySelectorAll(`#myTable td.${cls}`);
            cells.forEach(td => td.style.backgroundColor = colorInput);
        });
    }
}
