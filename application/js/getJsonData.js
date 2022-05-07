// JavaScript Document
$(document).ready(function () {
	//Get the home page main text data
	// $('#title_home').html('<h2>' + jsonObj.pageTextData[0].title + '<h2>');
	// $('#subTitle_home').html('<h3>' + jsonObj.pageTextData[0].subTitle + '</h3>');
	// $('#description_home').html('<p>' + jsonObj.pageTextData[0].description + '</p>');
	//AJAX service request to get the main text data from the json data store
	$.getJSON('../application/model/modelData.php', function (jsonObj) {
		console.log(jsonObj);

		for(let item of jsonObj){
			if(item.brand=="Fanta"){
				//Get the home page left column text data : Fanta
				$('#title_left').html('<h2>' + item.brand + '<h2>');
				$('#subTitle_left').html('<h3>' + item.subTitle + '</h3>');
				$('#description_left').html('<p>' + item.description + '</p>');

				//Get the fanta main text data
				$('#x3dModelTitle_fanta').html('<h2>' + item.x3dModelTitle + '<h2>');
				$('#x3dCreationMethod_fanta').html('<p>' + item.x3dCreationMethod + '<p>');
				$('#title_fanta').html('<h2>' + item.brand + '<h2>');
				$('#subTitle_fanta').html('<h3>' + item.subTitle + '</h3>');
				$('#description_fanta').html('<p>' + item.description + '</p>');
			}
			else if(item.brand == "Coca Cola"){
				//Get the home page centre column text data
				$('#title_centre').html('<h2>' + item.brand + '<h2>');
				$('#subTitle_centre').html('<h3>' + item.subTitle + '</h3>');
				$('#description_centre').html('<p>' + item.description + '</p>');

				//Get the coke main text data
				$('#x3dModelTitle_coke').html('<h2>' + item.x3dModelTitle + '<h2>');
				$('#x3dCreationMethod_coke').html('<p>' + item.x3dCreationMethod + '<p>');
				$('#title_coke').html('<h2>' + item.brand + '<h2>');
				$('#subTitle_coke').html('<h3>' + item.subTitle + '</h3>');
				$('#description_coke').html('<p>' + item.description + '</p>');
			}
			else if(item.brand == "Sprite"){
				//Get the home page right column text data
				$('#title_right').html('<h2>' + item.brand + '<h2>');
				$('#subTitle_right').html('<h3>' + item.subTitle + '</h3>');
				$('#description_right').html('<p>' + item.description + '</p>');
				//Get the sprite main text data
				$('#x3dModelTitle_sprite').html('<h2>' + item.x3dModelTitle + '<h2>');
				$('#x3dCreationMethod_sprite').html('<p>' + item.x3dCreationMethod + '<p>');
				$('#title_sprite').html('<h2>' + item.brand + '<h2>');
				$('#subTitle_sprite').html('<h3>' + item.subTitle + '</h3>');
				$('#description_sprite').html('<p>' + item.description + '</p>');

			}


			
		}

		//Get the gallery contents data
		$('.title_gallery').html('<h2>3D Images<h2>');
		$('.description_gallery').html('<p>You should consider rendering your 3D Image Gallery objects in Blender with Cycles</p>');

		//Get camera contnets data
		$('.x3dCameraTitle').html('<h2>Camera Views<h2>');
		$('.x3dCameraSubtitle').html('<p>These buttons select a range of X3D model viewpoints<p');

	});
});








