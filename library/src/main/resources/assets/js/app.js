$(":button").click(function(){
	var isbn = this.id;
	alert('About to report lost on ISBN ' + isbn);
	$.ajax({
		url: "/library/v1/books/"+isbn+"?status=lost",
		type: 'PUT',
		contentType: 'application/json',
		success: function() {
		var button=document.getElementById(isbn);
		button.disabled=true;
		window.location.reload();
		
		/*var stat=this.value;
		if(stat=="lost")
			button.disabled=true;
			//alert(stat);*/
			
		}	
	});
});