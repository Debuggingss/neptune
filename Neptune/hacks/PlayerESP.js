import { drawEspBox } from "../utils/RenderUtils.js";
import { getRed, getGreen, getBlue } from "../utils/TextUtils.js";
import { mcToRgb } from "../utils/GeneralUtils.js";

const PlayerESP = (mode) => {
	World.getAllPlayers().forEach(entity => {
        if(entity.getName() === Player.getName()) return;
        if(mode === "rainbow") {
            drawEspBox(entity.getPlayer(), getRed(), getGreen(), getBlue());
        }
        else if(mode === "sort") {
		    if(entity.getDisplayName().getText().includes("§")) {
				if(entity.getDisplayName().getText().match(/§[a-f0-9]/)) {
					let color = entity.getDisplayName().getText().match(/§[a-f0-9]/);
					color = color.toString();
					drawEspBox(entity.getPlayer(), mcToRgb(color)[0] / 255, mcToRgb(color)[1] / 255, mcToRgb(color)[2] / 255);
				}
		    }
        }
	});
};

export { PlayerESP };