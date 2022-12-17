//=============================================================================
// Lorg_DisableMovement.js
//=============================================================================
/*:
 * @plugindesc Simple Disable Movement
 * @author lorgycorgi
 *
 * @help
 * Turn on the switch set in parameters and all movement will be dísabled. 
 *
 * @param BlockSwitch
 * @text Switch to disable movement
 * @type switch
 * @desc Changes the basic switch to disable movement
 * @default 1
 */
Lorg_TurnOffMovement = Game_Player.prototype.moveByInput
Game_Player.prototype.moveByInput = function() { //rewriting the original function to be depending on the switch
    if ($gameSwitches.value(PluginManager.parameters('Lorg_DisableMovement')["BlockSwitch"])) 
        return; //THE FILE NAME MUST BE THE SAME
    return Lorg_TurnOffMovement.call(this);
};