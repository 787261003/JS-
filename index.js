const num = prompt('请输入班级总人数');
let sum = 0;
let average = 0;
for (let i = 1; i <= num; i++) {
    let score = prompt(`请输入第${i}个学生成绩`);
    sum += parseFloat(score);
}
average = sum / num;
alert(sum);
alert(average);
