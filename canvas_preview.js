/**
 * @Author: Rahix
 * @Desc: All functions for changing the preview
 */

//Prefix _cp(Canvas Preview)

var _cpCanvasID; //CANVAS Object ID
var _cpCanvasObj; //CANVAS OBJect
var _cpCCTX; //Canvas ConTeXt

var _cpCsx; //Canvas Size X
var _cpCsy; //Canvas Size Y

var _cpMapData; //Current MAP DATA
var _cpMap;

//Other
var _cpXmlHTTP;

//Prefix _cpc(Canvas Preview Config)

//For init of _cpMapData an Empty MapFile is needed, name is specified here:
var _cpcEmdFile = "template/empty.json"; //Empty Map Data FILE

function cpInit(canvasID) 
{
	//Init Canvas
	_cpCanvasID = canvasID;
	_cpCanvasObj = document.getElementById(_cpCanvasID);
	_cpCCTX = _cpCanvasObj.getContext("2d");

	//Init _cpMapData and _cpMap
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
		_cpXmlHTTP = new XMLHttpRequest();
	} else// code for IE6, IE5
		_cpXmlHTTP = new ActiveXObject("Microsoft.XMLHTTP");
	_cpXmlHTTP.open("GET", _cpcEmdFile, false);
	_cpXmlHTTP.send();
	_cpMapData = JSOM.parse(_cpXmlHTTP.responseText);
	_cpMap = _cpMapData.Data;
}

function cpUpdate()
{
	//Does the same as cpRender:
	cpRender();
}

function cpRender() 
{
	//@TODO Add render code
}

function cpSetTile(X, Y, TID) 
{
	//@TODO Set tile at [X,Y] to TID(TileID)
}

function cpGetTile(X, Y) 
{
	//@TODO Return tile at [X,Y]
}

function cpGetMapJSON() 
{
	//@TODO Return finished file content for map
	// This one will be uploaded to the database
}
