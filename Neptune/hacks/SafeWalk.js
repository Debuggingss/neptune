const mc = Client.getMinecraft();

const sneakBind = new KeyBind(mc.field_71474_y.field_74311_E);
const jumpBind = new KeyBind(mc.field_71474_y.field_74314_A);

const SafeWalk = () => {
    if(!mc.field_71439_g.field_70122_E || jumpBind.isKeyDown()) return;
    const X = Math.floor(Player.getX());
    const Y = Math.floor(Player.getY());
    const Z = Math.floor(Player.getZ());
    const standingOn = World.getBlockAt(X, Y-1, Z);
    if(standingOn.getRegistryName() === "minecraft:air") {
        sneakBind.setState(true);
    } else {
        sneakBind.setState(false);
    }
}

export { SafeWalk };