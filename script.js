
var inArr = [];
var str = "";
var eval_str = "";
var curr="",pre="";
var count=1;


// Initially

function initial(){
    pre = "";                    // Array To store Number and Operators
    curr="";                 // String representation Of inArr
    str = "";                      // To store Current Pressed no. or operator
}

function print(){
    document.querySelector("#pre_result_display").textContent = pre;
    document.querySelector("#calc_display").textContent = str;
    document.querySelector("#curr_result_display").textContent = curr;
}

initial();
document.querySelector(".clicking_part").addEventListener("click",e=>{

    var input = e.target;
    if(input.className == "number" || input.className == "operator")
    {
        if(input.id == "equals")
        {
            curr = eval(str);
            print();
            pre = curr;
            str = "";
            count = 1;
        }
        else
        {
            curr = "";
            str += input.textContent;
            print();
        }
    }
    else if(input.id == "ac")
    {
        initial();
        print();
    }
    else if(input.id == "back")
    {
        str = str.substring(0, str.length-1)
        print();
    }
    else if(input.id == "none")
    {
        document.querySelector("#pre_result_display").textContent = "Sorry! I have a Boyfriend.";
    }

        // if(input.className == "number")
    // {
    //     str += input.textContent;
    // }
    // else if(input.className == "operator")
    // {
    //     inArr.push(Number(str));
    //     if(input.id == "equals")
    //     {   
    //         eval_str = inArr.join();
    //         eval_str = eval_str.replace(/,/g,"");
    //         console.log(eval_str);
    //         console.log(eval(eval_str)); 
    //     }
    //     else
    //     {
    //         str = input.textContent;
    //         inArr.push(str);
    //         str = "";
    //         console.log(inArr);
    //     }
    // }
    // document.querySelector("#calc_display").textContent = str;
 })
