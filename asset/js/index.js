const result = document.querySelector(".result");
const input = document.querySelector(".input");
const items = document.querySelectorAll(".caculator__card-item");

items.forEach((item) => {
    item.addEventListener("click", () => {
        if (input.innerHTML == "0") {
            input.innerHTML = "";
        }
        if (item.innerHTML == "Clear all") {
            result.innerHTML = "";
            input.innerHTML = "0";
        } else if (item.innerHTML == "Delete") {  //Xóa phần tử cuối
            let arrInput = input.innerHTML;
            let arrLenght = arrInput.length;

            arrInput = arrInput.slice(0, -1);

            if (arrLenght != 0) {
                input.innerHTML = arrInput;
            } else input.innerHTML = "0";
        } else if (item.innerHTML == "=") {
            if (input.innerHTML == "") {
                input.innerHTML = "0";
            } else {
                try {
                    result.innerHTML = input.innerHTML + " =";
                    // evl hàm tính biểu thức có trong chuỗi
                    input.innerHTML = eval(input.innerHTML);
                } catch (error) {
                    alert("Error");
                }
            }
        } else {
            input.innerHTML += item.innerHTML;
        }
    });
});
