

var inArr = [];
var str = "";
var eval_str = "";
var curr=0,pre="";
var count=0;
function initial(){
    inArr = [];
    eval_str = "";
    str = "";
    document.querySelector("#pre_result_display").textContent = "";
    document.querySelector("#calc_display").textContent = "";
    document.querySelector("#curr_result_display").textContent = "";
}


document.querySelector(".clicking_part").addEventListener("click",e=>{

    var input = e.target;
    if(input.id=="equals")
    {
        eval_str = inArr.join("");
        curr = eval(eval_str);
        document.querySelector("#curr_result_display").textContent = curr;
        pre = curr;
        count++;
    }
    else if(input.id=="ac")
    {
        initial();
    }
    else
    {
        inArr.push(input.textContent);
        if(count==0)
        {
            document.querySelector("#pre_result_display").textContent = pre;
            var temp = document.querySelector("#calc_display").textContent;
            document.querySelector("#calc_display").textContent = temp +  input.textContent;
        }
        else
        {
            initial();
            inArr.push(input.textContent);
            document.querySelector("#pre_result_display").textContent = pre;
            var temp = document.querySelector("#calc_display").textContent;
            document.querySelector("#calc_display").textContent = temp +  input.textContent;
            count=0;
        }
    }
 })
