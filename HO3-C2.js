var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter Age"));
     floatDays = parseFloat(floatAge * 365.25);
     floatMonths = parseFloat(floatAge * 12);
     intWeeks = parseInt(floatDays/7);
     intFortnights = parseInt(floatDays/14);
     alert("Age = " + floatAge);
     alert("Age in Days = " + floatDays);
     alert("Age in Months = " + floatMonths);
     alert("Age in Weeks = " + intWeeks);
     alert("Age in Fortnights = " + intFortnights);
     