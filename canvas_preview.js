/**
 * Code for preview canvas(CP)
 * @author Rahix
 * @see cpInit
 * @see cpUpdate
 * @see cpRender
 * @see cpSetTile
 * @see cpGetTile
 * @see cpGetMapJSON
 */

//Prefix _cp(Canvas Preview)

/**
 * CANVAS Object ID
 * @see _cpCanvasObj
 */
var _cpCanvasID;
/**
 * CANVAS OBJect
 */
var _cpCanvasObj;
/**
 * Canvas ConTeXt
 * @see _cpCanvasObj
 */
var _cpCCTX;

/**
 * Canvas Size X, set in cpInit()
 * @see cpInit
 */
var _cpCsx;
/**
 * Canvas Size Y, set in cpInit()
 * @see cpInit
 */
var _cpCsy;

/**
 * Current MAP DATA, initialized with data from _cpcEmdFile
 * @see _cpcEmdFile
 */
var _cpMapData;
/**
 * Map content: pointer to _cpMapData.Data
 */
var _cpMap;

/**
 * Used for AJAX load of _cpcEmdFile in cpInit()
 * @see cpInit
 * @see _cpEmdFile
 */
var _cpXmlHTTP;

//Prefix _cpc(Canvas Preview Config)

/**
 * For init of _cpMapData an empty MapFile is needed, name of this file is specified here:
 * Empty Map Data FILE
 * @see _cpMapData
 */
var _cpcEmdFile = "template/empty.json";
/**
 * If true cpUpdate will be called automatically, initialized with bAutoUpdate in cpInit()
 * @see cpInit
 */
var _cpcAutoUPD; //If true AUTOmatically UPDate preview

/**
 * Inits the CP library
 * @author Rahix
 * @param {Object} canvasID The CANVAS ID of the canvas to draw in
 * @param {Object} bAutoUpdate If true cpUpdate will be called automatically
 */
function cpInit(canvasID,bAutoUpdate) 
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
	
	_cpcAutoUPD = bAutoUpdate;
}

/**
 * Updates the preview, does exact the same as cpRender.
 * Will be called automatically if bAutoUpdate had been set true while cpInit
 * @author Rahix
 * @see cpRender
 * @see cpInit
 */
function cpUpdate()
{
	//Does the same as cpRender:
	cpRender();
}

/**
 * Render the preview
 * @author Rahix
 * @see cpUpdate
 */
function cpRender() 
{
	//@TODO Add render code
}

/**
 * Set tile at [X,Y] to TID
 * @author Rahix
 * @param {Object} X X coordinate of operation
 * @param {Object} Y Y coordinate of operation
 * @param {Object} TID TileID to set tile to
 */
function cpSetTile(X, Y, TID) 
{
	_cpMap[Y][X]=TID;
	if(_cpcAutoUPD == true)
	    cpRender();
}

/**
 * Return tile at [X,Y]
 * @author Rahix
 * @param {Object} X X coordinate of tile to return
 * @param {Object} Y Y coordinate of tile to return
 * @return {Object} tileID of tile at [X,Y]
 */
function cpGetTile(X, Y) 
{
	return _cpMap[Y][X];
}

/**
 * Return JSON coded map data.
 * This is the finished result you can use as map
 * @author Rahix
 * @return {Object} The JSON coded map data
 */
function cpGetMapJSON() 
{
	//@TODO Return finished file content for map
	// This one will be uploaded to the database
}
