const credit = 4;
const optional_creds = 3;
const lab_creds = 2;
const hasOptional = false;
var no_of_main = 1;
var no_of_opt = 0;
function addSubMain(){
    no_of_main++;
    let input_field = "<div class='input-group'>"+
                         "<span class='input-group-addon'>Subject "+no_of_main+"</span>"+
                         "<input id='sub"+no_of_main+"' type='text' class='form-control' name='sub1' placeholder='marks' required>"+
                     "</div><br>";
    if (no_of_main > 6){
        alert("cannot add more than 6 subjects");
        return;
    }
    else if(no_of_opt == 2 && no_of_main > 4){
        alert("cannot add more main subjects");
        return;
    }
    $('#subject-field').append(input_field);
    
    
}

function addSubOptional(){
    no_of_opt++;
    let input_field = "<div class='input-group'>"+
                         "<span class='input-group-addon'>Elective "+no_of_opt+"</span>"+
                         "<input id='opt"+no_of_opt+"' type='text' class='form-control' name='sub1' placeholder='marks' required>"+
                     "</div><br>";
    if(no_of_opt > 2){
        alert("cannot add more than 2 electives");
        return;
    }
    else if(no_of_main > 6){
        alert("there are already 6 subjects");
        return;
    }
    $('#subject-field').append(input_field);
}

function calcSGPA() {
    console.log("hello");
    var points = {};
    var i;
    if(no_of_opt > 0){
        for(i=1;i<= no_of_main;i++){
            var id='#sub'+i;
            var item = parseInt($(id).val());
            points[id] = getGrade(item);
        }
        for(i=1;i<= no_of_opt;i++){
            var id='#opt'+i;
            var item = parseInt($(id).val());
            points[id] = getGrade(item);
        }
    }
    else {
        for(i=1;i<=no_of_main;i++){
            var id='#sub'+i;
            var item = parseInt($(id).val());
            points[id] = getGrade(item);
        }
    }
    for(i=1;i<=2;i++) {
        var id1 = '#lab' + i;
        var item1 = parseInt($(id1).val());
        points[id1] = getGrade(item1);
    }
    var keys = Object.keys(points);
    var totalSubPoints = 0;
    var total_creds = 0;
    for(i = 0; i < keys.length; i++){
        if(keys[i].match(/sub/) != null){
            console.log("subject")
            totalSubPoints = totalSubPoints + credit * points[keys[i]];
            total_creds = total_creds+ credit;
        }
        else if(keys[i].match(/opt/) != null){
            console.log("elective")
            totalSubPoints = totalSubPoints + optional_creds * points[keys[i]];
            total_creds += optional_creds;
        }
        else if(keys[i].match(/lab/) != null){
            console.log("lab")
            totalSubPoints = totalSubPoints + lab_creds * points[keys[i]];
            total_creds += lab_creds;
        }
    }
    var SGPA = totalSubPoints/total_creds;
    $('.SGPAresult').html(SGPA);
    console.log("Total points"+totalSubPoints);
    console.log("Total creds"+total_creds);
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

//dont change this it works fine
function calcCGPA() {
    var creds = [24,24,28,28,26,26,22,21]
    var cgpa = new Array();
    var i,sum=0,finalCGPA=0,cred_sum=0,elements=8;
    var id = $('.cgpa');
    for(i=0;i<8;i++) {
        var num = parseFloat($(id[i]).val());
        if (isNaN(num)){
            num = 0;
            --elements;
        }
        cgpa.push(num);
    }
    for (i=0;i<elements;i++)
        cred_sum += creds[i];
    console.log("creds sum is"+cred_sum);
    console.log(cgpa);
    sum = 24*(cgpa[0]+cgpa[1])+28*(cgpa[2]+cgpa[3])+26*(cgpa[4]+cgpa[5])+22*cgpa[6]+21*cgpa[7];
    console.log(sum);
    finalCGPA = sum / cred_sum;
    $('.cgparesult').html(finalCGPA);
}
$(document).ready(function () {
    $('.sgpaCalculate').click(calcSGPA);
    $('.cgpaCalculate').click(calcCGPA);
    $('#addSubject').click(addSubMain);
    $('#addElective').click(addSubOptional);
});
