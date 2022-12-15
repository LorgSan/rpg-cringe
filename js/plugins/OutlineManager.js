 //=============================================================================
 // OutlineManager.js
//=============================================================================
 /*:
 * @plugindesc Changes the thickness of the font outline
 * @author Lorg An
 * @param Outline Width
 * @type number
 * @min 0
 * @desc This is how thick the font outline is
 * Default: 5
 * @default 5
 */
//=============================================================================
// the whole section above this line represents the plugin manager parameters that we can see in the actual engine

    var localParam = PluginManager.parameters('OutlineManager'); //the localParam gathers all the parameters that Plugin Manager expects and through this variable I can access individual parameters

    var _Window_Base_ResetFontSettings = Window_Base.prototype.resetFontSettings; //this basically rewrites the original function for updating font settings
Window_Base.prototype.resetFontSettings = function() { 
    _Window_Base_ResetFontSettings.call( this ); 
    this.contents.outlineWidth = Number(localParam['Outline Width'] || 0); //and instead of the original value enters a value from the plugin manager that we put in 
    //this.contents.outlineWidth = 0;
};