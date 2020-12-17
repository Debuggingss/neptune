import { getRed, getGreen, getBlue } from "../utils/TextUtils.js";
import { mcToRgb } from "../utils/GeneralUtils.js";

const NameTags = (mode) => {
    World.getAllPlayers().forEach(entity => {
        if(entity.getName() === Player.getName()) return;

        let tagColor = Renderer.color(255, 0, 0);
        let shouldRender = true;

        const partialTicks = Tessellator.getPartialTicks();

        if(mode === "rainbow") {
            tagColor = Renderer.color(getRed()*255, getGreen()*255, getBlue()*255);
        }
        else if(mode === "sort") {
		    if(entity.getDisplayName().getText().includes("§")) {
				if(entity.getDisplayName().getText().match(/§[a-f0-9]/)) {
					let color = entity.getDisplayName().getText().match(/§[a-f0-9]/);
					color = color.toString();
                    tagColor = Renderer.color(mcToRgb(color)[0], mcToRgb(color)[1], mcToRgb(color)[2]);
				}
		    } else {
                shouldRender = false;
            }
        }
        if(shouldRender) {
            Tessellator.drawString(entity.getName() + " " + Math.round(entity.getHP() * 10) / 10,
            entity.getLastX() + (entity.getX() - entity.getLastX()) * partialTicks,
            entity.getLastY() + (entity.getY() - entity.getLastY()) * partialTicks + 3,
            entity.getLastZ() + (entity.getZ() - entity.getLastZ()) * partialTicks,
            tagColor, true, 1, true);
        }
    });
}

export { NameTags };