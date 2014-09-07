/**
 * Drawing functions called by cpRender()
 * @author: Rahix
 * @see cpRender
 */


/**
 * Draws map into canvas
 * @author rahix
 * @param {Object} xOff Let this one be 0, you won't need this
 * @param {Object} yOff Let this one be 0, you won't need this
 */
function _cpdDrawMap(xOff, yOff) 
{
	var tileX;
	var tileY;

	tileX = tiledim;
	tileY = tileX;
	//Now Start to Draw
	var i;
	var t;
	for ( i = 0; i < _cpMapData.General.Size.X; i++) {
		for ( t = 0; t < _cpMapData.General.Size.Y; t++) {
			if (_cpMap[t][i].Tile < 15) {
				_cpCCTX.drawImage(document.getElementById('tile'), i * tileX, t * tileY, tileX, tileY);
			}
		}
	}
}

function erase()
{
	_cpCCTX.fillRect(0,0,_cpCanvasObj.width,_cpCanvasObj.height);
}

/**
 * Draws everything, calls _cpdDrawMap
 * @author rahix
 */
function _cpdDraw() 
{
	erase();
	drawMap(0, 0);
}