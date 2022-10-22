function calculatedAge() {
    let date = document.getElementById("date").value
    let month = document.getElementById("month").value
    let year = document.getElementById("year").value
    let months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]


    if (cheak(date, month, year, months)) {
        let todays = new Date()

        console.log(todays)
    
        let todaysdate = todays.getDate();
        let todaysmonth = todays.getMonth();
        let todaysyear = todays.getFullYear();
        // console.log(todaysdate)
        // console.log(todaysmonth)
        // console.log(todaysyear)
        if (date > todaysdate) {
            todaysdate = todaysdate + months[month-1]
            todaysmonth = todaysmonth - 1
        }
        if (month > todaysmonth) {
            todaysmonth = todaysmonth + 12
            todaysyear = todaysyear - 1
        }

        let numOfDays = todaysdate - date;
        let numOfMonth = todaysmonth - month;
        let numOfYear = todaysyear - year;

        mesgshown(`Your Age Is ${numOfYear} years, ${numOfMonth} Months & ${numOfDays} Days `)
    }

        // let todaysdate=todays.getDate();
        // let todaysmonth=todays.getMonth()
        // let todaysyear=todays.getYear()
        // console.log(todaysdate)
        // console.log(todaysmonth)
        // console.log(todaysyear)

}
function cheak(date, month, year, months) {
    if (date == null || date == "") {
        mesgshown("enter the valid date")
        return false;
    }
    if (date != parseInt(date)) {
        mesgshown("Please provide valid Date numbers only")
        return false;

    }
    if (date <= 0) {
        mesgshown("Date cannot be 0 or less than 0")
        return false;

    }
    if (month == null || month == "") {
        mesgshown("enter the valid month")
        return false;
    }
    if (month != parseInt(month)) {
        mesgshown("Please provide valid month numbers only")
        return false;

    }
    if (parseInt(month) > 12) {
        mesgshown("Please provide Month value in the range from 1 to 12")
        return false;
    }
    if (month <= 0) {
        mesgshown("month cannot be 0 or less than 0")
        return false;

    }

    if (year == null || year == "") {
        mesgshown("enter the valid year in format of YYYY")
        return false;
    }
    if (String(year).length < 4) {
        mesgshown("Provide year in format YYYY")
        return false;
    }
    if (year != parseInt(year)) {
        mesgshown("Please provide valid year numbers only")
        return false;

    }
    if (year <= 0) {
        mesgshown("year cannot be 0 or less than 0")
        return false;

    }
    if (date > months[month - 1]) {

        mesgshown(`Please provide valid Date with respect to Month`)
        return false;
    }
    return true;


}
function mesgshown(mesg) {
    let given = document.getElementById("mesg")
    given.innerText = mesg
}

// let k=2
//  let kunal= [31,28,31,30,31,30,31,31,30,31,30,31]
//  let jandu =kunal[k-1]
//  console.log(jandu)

