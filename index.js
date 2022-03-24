// code your solution here
function saturdayFun(string){
if(string === undefined){
    return "This Saturday, I want to roller-skate!"
    
}
else return "This Saturday, I want to " + `${string}` + "!"
}

function mondayWork(string){
    if(string === undefined){
        return "This Monday, I will go to the office."
        
    }
    else return "This Monday, I will " + `${string}` + "."
    }

    function wrapAdjective(name){
        if (name === undefined){
            return "*"
        }

        return function (string){
            if(string === undefined){
                return "special"}
                else return "You are " + `${name}` + `${string}` + `${name}` + "!"
            }
    }