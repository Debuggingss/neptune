import { drawTracerLine } from "../utils/RenderUtils.js";
import { getRed, getGreen, getBlue } from "../utils/TextUtils.js";
import { mcToRgb } from "../utils/GeneralUtils.js";

const EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer");

const player = (entity, r, g, b) => {
    const xPos = -(Player.getPlayer().field_70142_S - entity.field_70142_S)
    const yPos = -(Player.getPlayer().field_70137_T - entity.field_70137_T) + 1.0
    const zPos = -(Player.getPlayer().field_70136_U - entity.field_70136_U)
    
    drawTracerLine(xPos, yPos, zPos, r, g, b, 1, 1);
}

const Tracers = (mode) => {
    World.getAllPlayers().forEach(entity => {
        if(entity.getPlayer() instanceof EntityPlayer) {
            if(entity.getName() === Player.getName()) return;
            if(mode === "rainbow") {
                player(entity.getPlayer(), getRed(), getGreen(), getBlue());
            }
            else if(mode === "sort") {
		        if(entity.getDisplayName().getText().includes("§")) {
                    if(entity.getDisplayName().getText().match(/§[a-f0-9]/)) {
                        let color = entity.getDisplayName().getText().match(/§[a-f0-9]/);
                        color = color.toString();
                        player(entity.getPlayer(), mcToRgb(color)[0] / 255, mcToRgb(color)[1] / 255, mcToRgb(color)[2] / 255);
                    }
                }
            }
        }
	});
}

export { Tracers };