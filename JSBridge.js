/*
The MIT License

Copyright (c) 2011 Jesse MacFadyen 
jesse.macfadyen@nitobi.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
documentation files (the "Software"), to deal in the Software without restriction, including without limitation the 
rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit 
persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the 
Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE 
WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR 
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR 
OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function JSBridge(){};
JSBridge.prototype = 
{
    _jsBridgeFrame:null,
    
    /* 
        helper to return the iFrame, or create it if needed
    */
    getBridgeFrame:function()
    {
        if(!this._jsBridgeFrame)
    	{
    		this._jsBridgeFrame = document.createElement("IFRAME");
    		this._jsBridgeFrame.setAttribute("height","0px");
    		this._jsBridgeFrame.setAttribute("width","0px");
    		this._jsBridgeFrame.setAttribute("frameborder","0");
    		document.documentElement.appendChild(this._jsBridgeFrame);
    	}
    	return this._jsBridgeFrame;
    },
    
    /*
        your command formatting should match what you specify on the native side, something like
        myProtocol://showImage/image3
        or
        gap://Accelerometer/start
    */
    sendCommand:function(command)
    {
    	this.getBridgeFrame().src = command;
    }
}