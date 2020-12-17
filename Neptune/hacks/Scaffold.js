import { placeBlockAt } from "../utils/GeneralUtils";

const BlockPos = Java.type("net.minecraft.util.BlockPos");
const C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
const ItemBlock = Java.type("net.minecraft.item.ItemBlock");

const getBlocksInHotbar = () => {
    for(i = 0; i < 9; i++) {
        if(Player.getInventory().getStackInSlot(i).getItem() instanceof ItemBlock && Player.getInventory().getStackInSlot(i).getName() !== "tile.air.name" && Player.getInventory().getStackInSlot(i).getStackSize() > 1) {
            return i;
        }
    }
    return -1;
}

const Scaffold = () => {
    const X = Math.floor(Player.getX());
    const Y = Math.floor(Player.getY());
    const Z = Math.floor(Player.getZ());
    const standingOn = World.getBlockAt(X, Y - 1, Z);
    if(standingOn.getRegistryName() === "minecraft:air") {
        if(getBlocksInHotbar() === -1) return;
        Client.sendPacket(new C09PacketHeldItemChange(getBlocksInHotbar()));
        let blockPlacement = placeBlockAt(new BlockPos(X, Y - 1, Z), getBlocksInHotbar());
        Client.sendPacket(new C09PacketHeldItemChange(0));
        if(!blockPlacement) {
            for(x = -1; x < 2; x++) {
                for(z = -1; z < 2; z++) {
                    if(World.getBlockAt(X + x, Y - 1, Z + z).getRegistryName() === "minecraft:air") {
                        Client.sendPacket(new C09PacketHeldItemChange(getBlocksInHotbar()));
                        blockPlacement = placeBlockAt(new BlockPos(X + x, Y - 1, Z + z),  getBlocksInHotbar());
                        Client.sendPacket(new C09PacketHeldItemChange(0));
                        if(blockPlacement) break;
                    }
                }
                if(blockPlacement) break;
            }
        }
    }
}

export { Scaffold };