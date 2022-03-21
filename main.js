name_of_the_guest=[];
name_of_the_guest_array=[];
function add(){
    var name_1=document.getElementById("guest_name").value;
    name_of_the_guest.push(name_1);
    console.log(name_of_the_guest);
    document.getElementById("display_name").innerHTML=name_of_the_guest;
    document.getElementById("submit").style.display="none";
    document.getElementById("guest_name").style.display="none";
    document.getElementById("add").style.display="inline-block"
}
function sort(){
    name_of_the_people.sort();
    console.log(name_of_the_guest_array);
    var display_guest_array_sorting=[];
    var length_name_of_the_guest_array=name_of_the_guest_array.length;
    console.log(length_name_of_the_guest_array);
    for(var a=0; a < length_name_of_the_guest_array;a++){
    display_guest_array_sorting.push("<h4>NAME-"+name_of_the_guest_array[a]+"</h4>");
    console.log(display_guest_array_sorting);
    }
    console.log(display_guest_array_sorting);
    var remove_commas=display_guest_array_sorting.join("");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML=remove_commas;
    }
    function show(){
        document.getElementById("submit").style.display="inline-block";
        document.getElementById("guest_name").style.display="inline-block";
        document.getElementById("add").style.display="none"
    }
    function search(){
        var s=document.getElementById("text").value;
        var found=0;
        var j;
        for(j=0;j=name_of_people.length;j++){
            if(s==name_of_the_people[j]){
                found=found+1;
            }
        }
        document.getElementById("search-items").innerHTML="name found"+found+"time/s";
        console.log("name found"+found+"time/s");
    }
    function so(){
        { var i= names_of_people.join("<br>"); 
        console.log(names_of_people);
        document.getElementById("p1").innerHTML=i.toString(); 
        document.getElementById("sort_button").style.display="block";
        }
    }