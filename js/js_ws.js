$(document).ready(function() {
	$.ajax({
		url : "https://api.blockcypher.com/v1/btc/main",
		dataType : "json",
		contentType : "application/json;",
		type : "GET",
		async : false,

		success : function(data) {
			$('#bitcoin_latest_block').append("data :" + data.height);			
		},

		error : function(xhr, status, err) {
			$('#bitcoin_latest_block').append(err+" N/A");
		}
	});
});