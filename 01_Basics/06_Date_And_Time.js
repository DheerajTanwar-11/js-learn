let currentDate = new Date() // This given date and time in not so readable format
console.log(currentDate)
console.log(currentDate.toString()) // Through this we get date and time in a readable format
console.log(currentDate.toLocaleString()) // Through this we get date and time in most readable format
console.log(currentDate.toDateString()) // Through this we get only date
console.log(currentDate.toLocaleTimeString()) // Through this we get universal time
console.log(currentDate.toLocaleString('default',{timeZone:'Asia/Kolkata'})) // Through this we get other timezones like Indian Standard Time