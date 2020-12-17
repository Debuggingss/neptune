const mc = Client.getMinecraft();
const S12PacketEntityVelocityStr = Java.type("net.minecraft.network.play.server.S12PacketEntityVelocity").class.toString();

const AntiVelocity = (mode, packet, event, horizontal, vertical) => {
    if(mode === "MOTION") {
        if (mc.field_71439_g.field_70737_aN > 0) {
            mc.field_71439_g.field_70181_x = -1.0;
        }
    }

    else if(mode === "PACKET") {
        if (packet.class.toString().equals(S12PacketEntityVelocityStr)) {
            if(World.getWorld() === null) return;
            const effectedEntity = World.getWorld().func_73045_a(packet.func_149412_c());
            if (effectedEntity === Player.getPlayer()) {
                Player.getPlayer().func_70016_h(packet.func_149411_d() * ((100 - horizontal) / 100) / 8000, packet.func_149410_e() * ((100 - vertical) / 100) / 8000, packet.func_149409_f() * ((100 - horizontal) / 100) / 8000)
                cancel(event);
            }
        }
    }
}

export { AntiVelocity };