var credit = 4;
function calcSGPA() {
    console.log("hello");
    var points = {};
    var i;
    for(i=1;i<=6;i++){
        var id='#sub'+i;
        var item = parseInt($(id).val());
        points[id] = getGrade(item);
    }
    for(i=1;i<=2;i++) {
        var id1 = '#lab' + i;
        var item1 = parseInt($(id1).val());
        points[id1] = getGrade(item1);
    }
    var totalSubPoints = 4*(points['#sub1']+points['#sub2']+points['#sub3']+points['#sub4']+points['#sub5']+points['#sub6'])+2*(points['#lab1']+points['#lab2']);
    var SGPA = totalSubPoints/28;
    $('.SGPAresult').html(SGPA);
    console.log(totalSubPoints);
    console.log(points);
    // console.log(myLabs);
}
function getGrade(item) {
    if (item < 40)
        return 0;
    else if (item < 45 && item >=40)
        return 4;
    else if (item < 50 && item >=45)
        return 5;
    else if (item < 60 && item >=50)
        return 6;
    else if (item < 70 && item >=60)
        return 7;
    else if (item < 80 && item >=70)
        return 8;
    else if (item < 90 && item >=80)
        return 9;
    else if (item >=90)
        return 10;
}
function calcCGPA() {
    var cgpa = new Array();
    var i,sum=0,finalCGPA=0;
    var id = $('.cgpa');
    for(i=0;i<8;i++) {
        var num = parseFloat($(id[i]).val());
        if (isNaN(num))
            break;
        cgpa.push(num);
    }
    for (i=0;i<cgpa.length;i++)
        sum += cgpa[i];
    console.log(sum);
    finalCGPA = sum / cgpa.length;
    $('.cgparesult').html(finalCGPA);
}
$(document).ready(function () {
    $('.sgpaCalculate').click(calcSGPA);
    $('.cgpaCalculate').click(calcCGPA);
});
