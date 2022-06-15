document.addEventListener("keyup", Hotkeys);

function Hotkeys(e) {

if (e.keyCode ===49) {//1
CLIENT.Game.action.set("recruit","member");
}

else if (e.keyCode ===50 ) {//2
CLIENT.Game.action.set("equip","hammer");
}
else if (e.keyCode ===51 ) {//3
CLIENT.Game.action.set("equip","steel_shield");
}

else if (e.keyCode === 52) {//4
CLIENT.Game.action.set("equip","legion_helmet");
}
else if (e.keyCode === 53) {//5
CLIENT.Game.action.set("equip","wizard_hat");
}
else if (e.keyCode === 54) {//6
CLIENT.Game.action.set("equip","scythe");
}
else if (e.keyCode ===55) {//7
CLIENT.Game.action.set("stay","stay");
}



else if (e.keyCode === 81) {//q
CLIENT.Game.action.set("PlantAPlant","corn");
}
else if (e.keyCode === 103) {//num7
CLIENT.Game.action.set("PlantAPlant","tree_plant");
}


else if (e.keyCode === 97) {//num1
CLIENT.Game.action.set("buildWall","stone_wall");
}
else if (e.keyCode === 98) {//num2
CLIENT.Game.action.set("buildOnNode","stone_tower");
}
else if (e.keyCode === 99) {//num3
CLIENT.Game.action.set("buildOnWall","stone_gate");
}

else if (e.keyCode === 100) {//num4
CLIENT.Game.action.set("buildAnywhere","wood_storage");
}
else if (e.keyCode === 101) {//num5
CLIENT.Game.action.set("buildAnywhere","food_storage");
}
else if (e.keyCode ===102) {//num6
CLIENT.Game.action.set("buildOnMeadow","well");
}
else if (e.keyCode ===104) {//num8
CLIENT.Game.action.set("buildAnywhere","stationary_catapult");
}
else if (e.keyCode ===105) {//num9 -- experimental shet --
//maxLvlUp();
app.game.levelUp();
//CLIENT.Game.action.set("buildOnWall","destroyBuilding");
//app.game.send("respawn");
    

    
}
}








function maxLvlUp(){
for(let i=0;i<23;i++){
app.game.levelUp();
}
}