// Used to log all actions of the user
$("#A").prop("checked", true);

function fn1(){
    window.location="../2_M/index.html";
}

let t_n = localStorage.getItem('t_times');
t_n = Number(t_n) + 1;
localStorage.setItem('t_times',t_n);