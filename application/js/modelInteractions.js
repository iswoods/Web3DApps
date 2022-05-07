//adapted from example code 'benskitchen.com'
var nSwitch = 0;
function cokeScene(){
    nSwitch = 0;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
	$('.sprite_gallery').hide();
	$('.fanta_gallery').hide();
	$(".coke_gallery").show();
}

function spriteScene(){
    nSwitch = 1;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
	$(".coke_gallery").hide();
	$('.fanta_gallery').hide();
	$('.sprite_gallery').show();
}

function fantaScene(){
    nSwitch = 2;
    document.getElementById('SceneSwitch').setAttribute('whichChoice', nSwitch);
	$('.sprite_gallery').hide();
	$(".coke_gallery").hide();
	$('.fanta_gallery').show();
}

var spinning = false;

function spin()
{
	spinY = spinZ = false;
	spinning = !spinning;
	if(document.getElementById("model__AnimatePreCondition")){
		document.getElementById("model__AnimatePreCondition").setAttribute('rotation',"1.000000 0.000000 0.000000 -1.570796")
	}
	
	$('x3d inline #model__Rotator').attr("keyValue","0 1 0 0 0 1 0 1.571 0 1 0 3.142  0 1 0 4.713 0 1 0 6.284");
	$("x3d inline #model__RotationTimer").attr('enabled', spinning.toString());

	
}

var spinY = false;
function rotateY(){
	spinning = spinZ = false;

	spinY = !spinY;

	$('x3d inline #model__Rotator').attr("keyValue","0 0 1 0 0 0 1 1.571 0 0 1 3.142  0 0 1 4.713 0 0 1 6.284");
	$("x3d inline #model__RotationTimer").attr('enabled', spinY.toString());

}
var spinZ = false;
function rotateZ(){

	spinning = spinY = false;

	spinZ = !spinZ;
	$('x3d inline #model__Rotator').attr("keyValue","1 0 0 0 1 0 0 1.571 1 0 0 3.142  1 0 0 4.713 1 0 0 6.284");
	$("x3d inline #model__RotationTimer").attr('enabled', spinZ.toString());
	
}


function stopRotation()
{
	spinning = false;
	$("x3d inline #model__RotationTimer").attr('enabled', 'false');
}

function animateModel()
{
	if(document.getElementById("model__AnimatePreCondition")){
		document.getElementById("model__AnimatePreCondition").setAttribute('rotation',"1.000000 0.000000 0.000000 -1.570796")
	}
	document.getElementById("model__Rotator").setAttribute("keyValue","0 1 0 0 0 1 0 1.571 0 1 0 3.142  0 1 0 4.713 0 1 0 6.284");

    if(document.getElementById('model__RotationTimer').getAttribute('enabled')!= 'true')
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'true');
    else
        document.getElementById('model__RotationTimer').setAttribute('enabled', 'false');
}

function wireFrame()
{
	var e = document.getElementById('wire');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}

var lightOn = true;

function headLight()
{
	lightOn = !lightOn;
	document.getElementById('model__headlight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function omniLight()
{
	lightOn = !lightOn;
	document.getElementById('model__omniLight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function targetLight()
{
	lightOn = !lightOn;
	document.getElementById('model__targetLight').setAttribute('headlight', lightOn.toString());
	console.log(lightOn);
}

function cameraFront()
{
	document.getElementById('model__CameraFront').setAttribute('bind', 'true');
}

function cameraBack()
{
	document.getElementById('model__CameraBack').setAttribute('bind', 'true');
}

function cameraLeft()
{
	document.getElementById('model__CameraLeft').setAttribute('bind', 'true');
}

function cameraRight()
{
	document.getElementById('model__CameraRight').setAttribute('bind', 'true');
}

function cameraTop()
{
	document.getElementById('model__CameraTop').setAttribute('bind', 'true');
}

function cameraBottom()
{
	document.getElementById('model__CameraBottom').setAttribute('bind', 'true');
}

$(".gallery img").on("click",(e)=>{
	let imgName =  e.target.getAttribute("src").split("/").pop();
	$("x3d inline")[nSwitch].getElementsByClassName("texture")[0].setAttribute('url', 'maps/'+imgName);
	// document.getElementById('model__texture').setAttribute('url', 'maps/'+imgName);
})