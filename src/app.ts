// カウンアップ
const textarea = <HTMLTextAreaElement>document.getElementById("textarea"); //最初のテキストエリア
const currentCharNum = <HTMLSpanElement>document.getElementById("count1");

textarea.addEventListener("keyup", function () {
  let count:string | number = textarea.value;
  count = count.replace(/\r?\n/g, "");
  // currentCharNumの中身をcountで書き換える
  // countのlength分
  currentCharNum.innerHTML = count.length.toString();
});

// カウントダウン
const element = <HTMLSpanElement>document.getElementById("count2"); //カウントダウンで文字数を入力して設定される箇所
const btn = <HTMLButtonElement>document.getElementById("btn");
const limit = <HTMLSpanElement>document.getElementById("limit"); //設定したカウント数を表示

//入力された文字数をを表示<<
btn.addEventListener("click", () => {
  const word = <HTMLInputElement>document.getElementById("word"); // 設定される文字数
  const limitNumber = word.value;
  limit.innerHTML = limitNumber;
  element.innerHTML = limitNumber;
});

function count_down(obj: HTMLTextAreaElement): void {
  let divLimitNumber: string | number = limit.innerHTML;
  divLimitNumber = parseInt(divLimitNumber, 10);
  let obj_length:string | number = obj.value.replace(/\r?\n/g, "");
  obj_length = obj_length.length;
  let count = divLimitNumber - obj_length;
  element.innerHTML = count.toString();
  if (divLimitNumber - obj.value.length < 0) {
    element.style.color = "red";
  } else {
    element.style.color = "grey";
  }
}
