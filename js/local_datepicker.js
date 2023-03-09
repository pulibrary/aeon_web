var ranges = [ { start: new Date(0), end: new Date(2010, 11, 21) },
               { start: new Date(2010, 11, 27), end: new Date(2010, 11, 30) },
               { start: new Date(2011, 0, 3), end: new Date(2011, 0, 16) },
               { start: new Date(2011, 0, 18), end: new Date(2011, 2, 4) },
               { start: new Date(2011, 2, 7), end: new Date(2011, 3, 21) },
               { start: new Date(2011, 3, 23), end: new Date(2011, 4, 6) },
               { start: new Date(2011, 4, 10), end: new Date(2011, 4, 13) },            
               { start: new Date(2011, 4, 16), end: new Date(2011, 4, 29) },
               { start: new Date(2011, 4, 31), end: new Date(2011, 6, 3) },
               { start: new Date(2011, 6, 5), end: new Date(2011, 8, 4) },
               { start: new Date(2011, 8, 6), end: new Date(2011, 10, 23) },
               { start: new Date(2011, 10, 26), end: new Date(2011, 11, 23) },
               { start: new Date(2012, 0, 2), end: new Date(2012, 0, 15) },
               { start: new Date(2012, 0, 17), end: new Date(2012, 0, 31) } ];
$(function() {
  $("[id$='ScheduledDate']").datepicker({
    numberOfMonths: 1,
    beforeShowDay: function(date) {
        for(var i=0; i<ranges.length; i++) {
          if(date >= ranges[i].start && date <= ranges[i].end) return [true, ''];
        }
        return [false, ''];
    },
    changeMonth: true,
    changeYear: true,
    minDate: 0,
    maxDate: ranges[ranges.length -1].end
  });



});