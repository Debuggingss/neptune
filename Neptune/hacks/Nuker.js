const BlockPos = Java.type("net.minecraft.util.BlockPos");
const C07PacketPlayerDigging = Java.type("net.minecraft.network.play.client.C07PacketPlayerDigging");
const EnumFacing = Java.type("net.minecraft.util.EnumFacing");

const Nuker = (RANGE, breakMode, nukerMode, x, y, z) => {
    for(i = 0; i < RANGE; i++) {
        for(j = 0; j < RANGE; j++) {
            for(k = 0; k < RANGE; k++) {
                let toRemove = Math.round(RANGE / 2) - 1;
                let X;
                let Y;
                let Z;
                switch(breakMode) {
                    case "AUTO":
                        X = Math.floor(Player.getX());
                        Y = Math.floor(Player.getY());
                        Z = Math.floor(Player.getZ());
                        break;
                    case "MANUAL":
                        X = x;
                        Y = y;
                        Z = z;
                }
                switch(nukerMode) {
                    case "BED":
                        if(World.getBlockAt(X + i - toRemove, Y + j - toRemove, Z + k - toRemove).getRegistryName() === "minecraft:bed") {
                            Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.START_DESTROY_BLOCK, new BlockPos(X + i - toRemove, Y + j - toRemove, Z + k - toRemove), EnumFacing.UP));
                            Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.STOP_DESTROY_BLOCK, new BlockPos(X + i - toRemove, Y + j - toRemove, Z + k - toRemove), EnumFacing.UP));
                        }
                        break;
                    case "ALL":
                        if(World.getBlockAt(X + i - toRemove, Y + j - toRemove, Z + k - toRemove).getRegistryName() !== "minecraft:air") {
                            Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.START_DESTROY_BLOCK, new BlockPos(X + i - toRemove, Y + j - toRemove, Z + k - toRemove), EnumFacing.UP));
                            Client.sendPacket(new C07PacketPlayerDigging(C07PacketPlayerDigging.Action.STOP_DESTROY_BLOCK, new BlockPos(X + i - toRemove, Y + j - toRemove, Z + k - toRemove), EnumFacing.UP));
                        }
                }
            }
        }
    }
}

export { Nuker };