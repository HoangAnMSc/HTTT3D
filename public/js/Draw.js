const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
$(document).ready(function(){
  
    $("#mySubmit").click(function(e){
          e.preventDefault()
          value=$("#myInput").val();
          Select_Item = $("#Select_Item").val();
  
  
          switch (Select_Item) {
              case "1":{
                   $.ajax({
                      url: '/store',
                      type: 'POST',
                      data: {
                          x: value[1],
                          y: value[3]
                      },
                      dataType: "application/json",
                      success: function(data, status, jqXHR) {
                          alert('Email Sent');
                      },
                      error: function(msg){
                          console.log(msg);
                      }               
                  });
              }
          }
          $(".List_DS").prepend("<li>"+value+"</li>");
          ctx.arc(100, 75, 50, 0, 2 * Math.PI);
          ctx.stroke();
    });
  
  });
  