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
				_cpCCTX.drawImage(document.getElementById("img_tile"), (i * tiledim) + xOff, (t * tiledim) + yOff, tiledim, tiledim);
			}
			else if(_cpMap[t][i].Tile == 17) //Start
			{
				_cpdDrawWayArrow(tiledim,i,t);
				_cpCCTX.drawImage(document.getElementById(_cpcImgStartTileID), (i * tiledim) + xOff, (t * tiledim) + yOff, tiledim, tiledim);
			}
			else if(_cpMap[t][i].Tile == 16)//End
			{
				_cpdDrawWayArrow(tiledim,i,t);
				_cpCCTX.drawImage(document.getElementById(_cpcImgEndTileID), (i * tiledim) + xOff, (t * tiledim) + yOff, tiledim, tiledim);
			}
			else if(_cpMap[t][i].Tile == 15)//Way
			{
				_cpdDrawWayArrow(tiledim,i,t,xOff,yOff);
			}
		}
	}
	// draw active tile
	if(isActive)
	{
	  _cpCCTX.strokeStyle = "rgba(255,0,0,1)";
	  _cpCCTX.strokeRect((activeX * tiledim) + xOff, (activeY * tiledim) + yOff, tiledim, tiledim);
	  _cpCCTX.strokeStyle = "rgba(225,0,0,1)";
	  _cpCCTX.strokeRect((activeX * tiledim) + xOff + 1, (activeY * tiledim) + yOff + 1, tiledim - 2, tiledim - 2);
	  _cpCCTX.strokeStyle = "rgba(200,0,0,1)";
	  _cpCCTX.strokeRect((activeX * tiledim) + xOff + 2, (activeY * tiledim) + yOff + 2, tiledim - 4, tiledim - 4);
	}
}


/**
 * Draw a way arrow.
 * @param {Object} tiledim Tiledimension of tiles
 * @param {Object} i Y coordinate of way tile
 * @param {Object} t X coordinate of way tile
 */
function _cpdDrawWayArrow(tiledim, i, t, xOff, yOff) 
{
	if (_cpMap[t][i].Dir == "N") 
	{
		_cpCCTX.drawImage(document.getElementById(_cpcImgUpTileID), (i * tiledim) + xOff, (t * tiledim) + yOff, tiledim, tiledim);
	}
	if (_cpMap[t][i].Dir == "E") 
	{
		_cpCCTX.drawImage(document.getElementById(_cpcImgRightTileID), (i * tiledim) + xOff, (t * tiledim) + yOff, tiledim, tiledim);
	}
	if (_cpMap[t][i].Dir == "S") 
	{
		_cpCCTX.drawImage(document.getElementById(_cpcImgDownTileID), (i * tiledim) + xOff, (t * tiledim) + yOff, tiledim, tiledim);
	}
	if (_cpMap[t][i].Dir == "W") 
	{
		_cpCCTX.drawImage(document.getElementById(_cpcImgLeftTileID), (i * tiledim) + xOff, (t * tiledim) + yOff, tiledim, tiledim);
	}
}


/**
 * Erases the screen
 * @author Rahix
 */
function _cpdErase()
{
	_cpCCTX.fillStyle = "rgba(0,0,0,1)";
	_cpCCTX.fillRect(0,0,_cpCanvasObj.width,_cpCanvasObj.height);
}

/**
 * Draws everything, calls _cpdDrawMap
 * @author Rahix
 */
function _cpdDraw() 
{
	// Get tile dimension
	tiledim = cpGetTileDimension();
	// Draw
	_cpdErase();
	_cpdDrawMap(
	  (_cpCanvasObj.width - (_cpMapData.General.Size.X * tiledim)) / 2,
	  (_cpCanvasObj.height - (_cpMapData.General.Size.Y * tiledim)) / 2);
}