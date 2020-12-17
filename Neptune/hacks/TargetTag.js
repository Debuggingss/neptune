import { getClosest, mcToRgb } from "../utils/GeneralUtils.js";
import { settings } from "../settings.js";

const TargetTags = () => {
    if(getClosest(5) === null) return;
    const X = parseInt(settings.getSetting("HUD", "TargetTags X"));
    const Y = parseInt(settings.getSetting("HUD", "TargetTags Y"));

    const helmet = getClosest(5).getEntity().func_71124_b(4);
    const chestplate = getClosest(5).getEntity().func_71124_b(3);
    const leggings = getClosest(5).getEntity().func_71124_b(2);
    const boots = getClosest(5).getEntity().func_71124_b(1);

    if(helmet !== null) {
        const cthelmet = new Item(helmet);
        cthelmet.draw(X+41,Y+40,1);
    }
    if(chestplate !== null) {
        const ctchestplate = new Item(chestplate);
        ctchestplate.draw(X+61,Y+40,1);
    }
    if(leggings !== null) {
        const ctleggings = new Item(leggings);
        ctleggings.draw(X+81,Y+40,1);
    }
    if(boots !== null) {
        const ctboots = new Item(boots);
        ctboots.draw(X+101,Y+40,1);
    }

    Renderer.drawRect(Renderer.color(0, 0, 0, 70), X, Y, 119, 58);
    Renderer.drawRect(Renderer.color(0, 0, 0, 50), X+1, Y+1, 38, 56);
    Renderer.drawRect(Renderer.color(0, 0, 0, 50), X+40, Y+39, 18, 18);
    Renderer.drawRect(Renderer.color(0, 0, 0, 50), X+60, Y+39, 18, 18);
    Renderer.drawRect(Renderer.color(0, 0, 0, 50), X+80, Y+39, 18, 18);
    Renderer.drawRect(Renderer.color(0, 0, 0, 50), X+100, Y+39, 18, 18);
    Renderer.drawRect(Renderer.color(0, 0, 0, 50), X+40, Y+30, 78, 8);
    Renderer.translate(X,Y+30);
    Renderer.scale(-20, 20);
    try{
        Renderer.drawPlayer(World.getPlayerByName(getClosest(5).getName()), -1, 1, true);
    } catch(e) {
        print("Error rendering player view.");
    }
    Renderer.scale(1);
    const health = Math.round(getClosest(5).getHP() * 10) / 10;
    const maxhealth = Math.round(getClosest(5).getEntity().func_110138_aP() * 10) / 10;
    let color = "§a";
    if(health > 15) {
        color = "§a";
    }
    else if(health >= 10 && health < 15) {
        color = "§e";
    }
    else if(health >= 5 && health < 10) {
        color = "§6";
    }
    else if(health >= 0 && health < 5) {
        color = "§c";
    }
    Renderer.drawStringWithShadow("&f" + getClosest(5).getName(), X+40, Y+5);
    Renderer.drawStringWithShadow(`${color}${health}/${maxhealth}`, X+40, Y+15);
    Renderer.drawRect(Renderer.color(mcToRgb(color)[0], mcToRgb(color)[1], mcToRgb(color)[2]), X+40, Y+30, health/maxhealth*78, 8);
}

export { TargetTags };