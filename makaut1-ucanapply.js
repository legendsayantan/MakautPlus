//fix print failure
function printFix(){
    try{
        if (printEnrollConfirm) {
            printEnrollConfirm = function () {
                var divToPrint = document.getElementById('page-wrap');
                while (document.body.firstChild) {
                    document.body.removeChild(document.body.firstChild);
                }
                document.body.appendChild(divToPrint);
                window.print();
                try{
                    window.close();
                }catch(e){}
            }
        }
    }catch(e){}
}
//fix copy prevention
function copyFix (){
    window.oncontextmenu = function () {
        return true
    }
    document.onkeydown = function (e) {
        if (e.ctrlKey) return true;
    }
}

setInterval(function(){
    copyFix()
    printFix()
}, 5000)
copyFix()
printFix()
