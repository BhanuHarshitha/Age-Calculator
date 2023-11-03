function cal() {
    var dat = document.getElementById("day").value;
    var mon = document.getElementById("month").value;
    var yr = document.getElementById("year").value;
    var date = new Date();
    if (dat == null || dat === "" || dat > 31 || dat <= 0) {
        document.getElementById("dayerror").innerHTML = "Please enter a valid date of birth";
        document.getElementById("dayerror").style.color="red";
    } if (mon == null || mon === "" || mon > 12 || mon <= 0) {
        document.getElementById("monerror").innerHTML = "Please enter a valid month of birth";
        document.getElementById("monerror").style.color="red";
    } if (yr == null || yr === "" || yr > date.getFullYear() || yr <= 0) {
        document.getElementById("yrerror").innerHTML = "Please enter a valid year of birth";
        document.getElementById("yrerror").style.color="red";
    } else {
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();

        if (year >= yr) {
            var yrage = year - yr;  // Calculate years
            document.getElementById("yrdis").innerHTML = yrage;
        }

        if (month >= mon) {
            var monthage = month - mon; // Calculate months
            document.getElementById("mondis").innerHTML = monthage;
        } else {
            yrage--;
            var monthage = 12 + month - mon;
            document.getElementById("mondis").innerHTML = monthage;
        }

        if (day >= dat) {
            var dateage = day - dat; // Calculate days
            document.getElementById("daydis").innerHTML = dateage;
        } else {
            monthage--;
            var dateage = 31 + day - dat;

            if (monthage < 0) {
                monthage = 11;
                yrage--;
            }
            document.getElementById("daydis").innerHTML = dateage;
        }
    }
}
function focusevent(){
    document.getElementById("day").style.border="1px solid purple";
    document.getElementById("month").style.border="1px solid purple";
    document.getElementById("year").style.border="1px solid purple";
}
