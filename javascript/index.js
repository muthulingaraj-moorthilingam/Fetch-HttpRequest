//simple fetching methode

document.getElementById('fetch-get').addEventListener("click",function(){

	fetch("https://jsonplaceholder.typicode.com/posts")//return a promise containing the response
		.then(function (response){
		console.log(response);
		return response.json();
		})
		.then(function(data){
		console.log(data);
	});
});

document.getElementById('fetch-post').addEventListener("click",function(){
	
	fetch('https://jsonplaceholder.typicode.com/posts',{
		method:'POST',
		headers:{
			"Content-type": "application/json; charset=UTF-8"
		},
		body:JSON.stringify({
			title:"my first post methode",
			body:"POST-methode",
			userId:1
		})//server receives data as an string...
	})
	.then((response)=>{//return the promise as data as response
		return response.json();
	})
	.then((data)=>{
		console.log(data);
	});
});