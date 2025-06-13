
let userInput=document.getElementById('date');

const btn=document.getElementById('cal-btn');

let res=document.getElementById('result');

userInput.max=new Date().toISOString().split("T")[0];


res.innerHTML=`You are 0 years, 0 months and 0 days old .`;


btn.addEventListener('click',calculateAge);

function calculateAge(){
    let birthDate=new Date(userInput.value);

    let d1=birthDate.getDate();
    let m1=birthDate.getMonth()+1;
    let y1=birthDate.getFullYear();

    let today=new Date();

    let d2=today.getDate();
    let m2=today.getMonth()+1;
    let y2=today.getFullYear();

    let d3,m3,y3;

    y3=y2-y1;
    
    if(m2>=m1){
        m3=m2-m1;
    }else {
        y3--;
        m3=12-(m1-m2);
    }

    if(d2>=d1){
        d3=d2-d1;
    }else{
       m3--;
       d3=getDaysInMonth(m1-1,y1)-d1+d2;
    }
   
    if(m3<0){
        m3=11;
        y3--;
    }

    res.innerHTML=`You are ${y3} years, ${m3} months and ${d3} days old`;
    
}

function getDaysInMonth(month,year){
    return new Date(year,month,0).getDate();
}