/**
 * @file Drawing functions called by <b>cpRender()</b>. 
 *       Prefix <i>_cpd</i> means "Canvas Preview Drawing"
 * @author: Rahix
 * @see cpRender
 */


/**
 * Draws the map onto the canvas
 * @author Rahix
 * @param {Object} xOff Let this one be 0, you won't need this
 * @param {Object} yOff Let this one be 0, you won't need this
 */
function _cpdDrawMap(xOff, yOff) 
{
	var tiledim;


	//Get tile dimension
	tiledim = cpGetTileDimension();
	//Now Start to Draw
	var i;
	var t;
	for ( i = 0; i < _cpMapData.General.Size.X; i++) {
		for ( t = 0; t < _cpMapData.General.Size.Y; t++) {
			if (_cpMap[t][i].Tile < 15) {
				_cpCCTX.drawImage(document.getElementById('tile'), i * tiledim, t * tiledim, tiledim, tiledim);
			}
		}
	}
}

/**
 * Erases the screen
 * @author Rahix
 */
function _cpdErase()
{
	_cpCCTX.fillRect(0,0,_cpCanvasObj.width,_cpCanvasObj.height);
}

/**
 * Draws everything, calls _cpdDrawMap
 * @author Rahix
 */
function _cpdDraw() 
{
	erase();
	drawMap(0, 0);
}