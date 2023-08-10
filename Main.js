function submit(){
    Student=[];
    var  name_1=document.getElementById("Name_1").value ;
    var  name_2=document.getElementById("Name_2").value ;
    var  name_3=document.getElementById("Name_3").value ;
    var  name_4=document.getElementById("Name_4").value ;
    var  name_5=document.getElementById("Name_5").value ;
    var  name_6=document.getElementById("Name_6").value ;
    Student.push(name_1);
    Student.push(name_2);
    Student.push(name_3);
    Student.push(name_4);
    Student.push(name_5);
    Student.push(name_6);
    document.getElementById("display").innerHTML=Student;
}