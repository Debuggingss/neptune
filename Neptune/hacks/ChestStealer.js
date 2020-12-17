const GuiChest = Java.type("net.minecraft.client.gui.inventory.GuiChest");
const GuiChat = Java.type("net.minecraft.inventory.GuiChat");

const mc = Client.getMinecraft();

let size = 0;
let alreadyStealing = false;

const ChestStealer = (delay, autoquit) => {
    if(alreadyStealing) return;
    if(mc.field_71462_r instanceof GuiChest || !mc.field_71462_r instanceof GuiChat) {
        if(Player.getOpenedInventory().getSize() === 90) size = 54;
        if(Player.getOpenedInventory().getSize() === 63) size = 27;

        alreadyStealing = true;

        setTimeout(() => {
            for (i = 0; i < size; i++) {
                if(Player.getOpenedInventory().getStackInSlot(i).getName() !== "tile.air.name") {
                    Player.getOpenedInventory().click(i, true);
                    Thread.sleep(delay);
                }
            }
            if(autoquit) {  
                Client.getMinecraft().func_147108_a(null);
                Client.sendPacket(new net.minecraft.network.play.client.C0DPacketCloseWindow());
            }
            alreadyStealing = false;
        }, delay);
    }
}

export { ChestStealer };