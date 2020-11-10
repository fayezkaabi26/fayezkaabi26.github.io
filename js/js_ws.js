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

$(function() {
        var _myContentArea = document.getElementById("myContentArea");
        var _mySearchButton = document.getElementById("query");
        _mySearchButton.onclick = getData;

        function getData() {
        var _mySearchField = document.getElementById("searchBar");
            
            $.ajax({
            url: "https://blockchain.info/rawblock/"+_mySearchField.value,
            method: "GET",
            dataType: "json",
            success: function(data) {
              var str = "";          
              for(var i= 0; i < data.rawblock.length; i++) {
                  str += data.rawblock[i].value + '<br>';
              }
              _myContentArea.innerHTML = str;
            }
            });
        }

    });