function addnewwe(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("we");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("wem");
    let weAddOb=document.getElementById("wenew");

    weOb.insertBefore(newNode, weAddOb);
}


function addnewaq(){
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aq");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let aqOb=document.getElementById("aqm");
    let aqAddOb=document.getElementById("aqnew");

    aqOb.insertBefore(newNode, aqAddOb);
}

function preview(){
    let name=document.getElementById("name").value;
    let namet=document.getElementById("namet");
    namet.innerHTML=name;
    document.getElementById("name2t").innerHTML=name;
    
    //contact
    document.getElementById("contactt").innerHTML=document.getElementById("contact").value;

    //address
    document.getElementById("addresst").innerHTML=document.getElementById("address").value;

    //Links
    document.getElementById("fbt").innerHTML=document.getElementById("fb").value;
    document.getElementById("igt").innerHTML=document.getElementById("ig").value;
    document.getElementById("linket").innerHTML=document.getElementById("linke").value;

    //Objective
    document.getElementById("objt").innerHTML=document.getElementById("obj").value;

    //Work Experience
    let wes=document.getElementsByClassName("we")
    let str="";
    for(let e of wes){
        str+=`<li>${e.value}</li>`;
    }
    document.getElementById("wet").innerHTML=str;

    //Academic Qualification
    let aq=document.getElementsByClassName("aq")
    let str1="";
    for(let e of aq){
        str1+=`<li>${e.value}</li>`;
    }
    document.getElementById("aqt").innerHTML=str1;

    document.getElementById("resume-form").style.display="none";
    document.getElementById("resume-template").style.display="block";


}

function save(){
    window.print();
}