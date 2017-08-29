 $(function() {
   $('input[type=submit]').click(sendData);
 })

 function sendData(e) {
   e.preventDefault();

   $.ajax({
     url: "https://formspree.io/pl.olga29@gmail.com",
     method: "POST",
     data: {
       question: $('input[type=radio][name=question-answer]').val(),
       age: $('select#age option:checked').val(),
       gender: $('input[type=radio][name=gender]').val(),
       beginning: $('#beginning').val(),
       quantity: $('select#quantity :checked').val(),
       
      // let smokingReason = [];
      //       $.each($("input[name='']:checked"), function(){            
      //           smokingReason.push($(this).val());
            
       stop_smoking: $('input[type=radio][name=stop_smoking]').val(),
       reason_of_stop_smoking: $('#stopreason').val()
     },
     dataType: "json"
   }).done(function() {
     $('form')[0].reset();
   })
 }
 