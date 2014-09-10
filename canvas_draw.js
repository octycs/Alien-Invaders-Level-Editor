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
	for ( i = 0; i < _cpMapData.General.Size.X; i++) 
	{
		for ( t = 0; t < _cpMapData.General.Size.Y; t++) 
		{
			if (_cpMap[t][i].Tile < 15) 
			{
				_cpCCTX.drawImage(document.getElementById("img_tile"), i * tiledim, t * tiledim, tiledim, tiledim);
			}
			else if(_cpMap[t][i].Tile == 17) //Start
			{
				_cpdDrawWayArrow(tiledim,i,t);
				_cpCCTX.drawImage(document.getElementById(_cpcImgStartTileID), i * tiledim, t * tiledim, tiledim, tiledim);
			}
			else if(_cpMap[t][i].Tile == 16)//End
			{
				_cpdDrawWayArrow(tiledim,i,t);
				_cpCCTX.drawImage(document.getElementById(_cpcImgEndTileID), i * tiledim, t * tiledim, tiledim, tiledim);
			}
			else if(_cpMap[t][i].Tile == 15)//Way
			{
				_cpdDrawWayArrow(tiledim,i,t);
			}
		}
	}
}


/**
 * Draw a way arrow.
 * @param {Object} tiledim Tiledimension of tiles
 * @param {Object} i Y coordinate of way tile
 * @param {Object} t X coordinate of way tile
 */
function _cpdDrawWayArrow(tiledim, i, t) 
{
	if (_cpMap[t][i].Dir == "N") 
	{
		_cpCCTX.drawImage(document.getElementById(_cpcImgUpTileID), i * tiledim, t * tiledim, tiledim, tiledim);
	}
	if (_cpMap[t][i].Dir == "E") 
	{
		_cpCCTX.drawImage(document.getElementById(_cpcImgRightTileID), i * tiledim, t * tiledim, tiledim, tiledim);
	}
	if (_cpMap[t][i].Dir == "S") 
	{
		_cpCCTX.drawImage(document.getElementById(_cpcImgDownTileID), i * tiledim, t * tiledim, tiledim, tiledim);
	}
	if (_cpMap[t][i].Dir == "W") 
	{
		_cpCCTX.drawImage(document.getElementById(_cpcImgLeftTileID), i * tiledim, t * tiledim, tiledim, tiledim);
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
	_cpdErase();
	_cpdDrawMap(0, 0);
}