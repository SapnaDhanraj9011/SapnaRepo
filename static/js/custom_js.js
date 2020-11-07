$(document).ready(function(){
		var a=$('p').text()	
		console.log(a)
		var b=$('input').val()
		console.log(b)
		$('button').on({
			click:function(){
				$('p').css("background-color","red")},
			dblclick:function(){
				$('p').css("background-color","teal")}	
			})
		})
//ON is used to use multiple events on single element.