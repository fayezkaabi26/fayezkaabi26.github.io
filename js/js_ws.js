$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		dataType : "json",
		contentType : "application/json;",
		type : "GET",
		async : false,

		success : function(data) {
			$('#bitcoin_latest_block').append("data height : " + data.height);
			$('#hash').append("data hash : " + data.hash.toString())		
		},

		error : function(xhr, status, err) {
			$('#bitcoin_latest_block').append(err+" N/A");
		}
	});
});

function getAPIData(inputText) {
  $.ajax({
    'url': 'https://api.blockcypher.com/v1/btc/main/blocks',
    'type': 'GET',
    'dataType': 'json',
    'data': {'number': inputText},
    'success': function(response) {
      console.log(response);
    }, 'error': function(response) {
      console.log(response.statusText);
    }
  });
};

$("#query").click(function() {
  // our inputText is going to be equal to the value of the input field
  var inputText = $("#searchBar").val();
  
  // then, as long as our input field isn't blank, let's call that function above and pass in the inputText as an argument
  if (inputText !== "") {
    getAPIData(inputText);
  }
});
