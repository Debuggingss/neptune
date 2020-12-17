import { drawBlockEspBox } from "../utils/RenderUtils.js";
import { getRed, getGreen, getBlue } from "../utils/TextUtils.js";

const TileEntityChest = Java.type("net.minecraft.tileentity.TileEntityChest");
const TileEntityEnderChest = Java.type("net.minecraft.tileentity.TileEntityEnderChest");

const ChestESP = (mode) => {
    World.getWorld().field_147482_g.forEach(entity => {
        if(entity instanceof TileEntityChest) {
            try {
                if(mode === "rainbow") {
                    const x = entity.func_174877_v().func_177958_n();
                    const y = entity.func_174877_v().func_177956_o();
                    const z = entity.func_174877_v().func_177952_p();
                    drawBlockEspBox(x, y, z, getRed(), getGreen(), getBlue());
                }
                else if(mode === "sort") {
                    if(entity.func_145980_j() === 0.0) {
                        const x = entity.func_174877_v().func_177958_n();
                        const y = entity.func_174877_v().func_177956_o();
                        const z = entity.func_174877_v().func_177952_p();
                        drawBlockEspBox(x, y, z, 0, 1, 0);
                    }
                    else if(entity.func_145980_j() === 1.0) {
                        const x = entity.func_174877_v().func_177958_n();
                        const y = entity.func_174877_v().func_177956_o();
                        const z = entity.func_174877_v().func_177952_p();
                        drawBlockEspBox(x, y, z, 1, 0, 0);
                    }
                }
            } catch(e) {};
        }
        else if(entity instanceof TileEntityEnderChest) {
            try {
                if(mode === "rainbow") {
                    const x = entity.func_174877_v().func_177958_n();
                    const y = entity.func_174877_v().func_177956_o();
                    const z = entity.func_174877_v().func_177952_p();
                    drawBlockEspBox(x, y, z, getRed(), getGreen(), getBlue());
                }
                else if(mode === "sort") {
                    const x = entity.func_174877_v().func_177958_n();
                    const y = entity.func_174877_v().func_177956_o();
                    const z = entity.func_174877_v().func_177952_p();
                    drawBlockEspBox(x, y, z, 0, 0, 1);
                }
            } catch(e) {};
        }
    });
}

export { ChestESP };