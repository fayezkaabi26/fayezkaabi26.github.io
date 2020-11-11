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

