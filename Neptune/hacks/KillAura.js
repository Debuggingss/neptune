import { getClosest, getAdjustment } from "../utils/GeneralUtils.js";

const mc = Client.getMinecraft();

const C02PacketUseEntity = Java.type("net.minecraft.network.play.client.C02PacketUseEntity");
const C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");

const KillAura = (range, shouldBlock, shouldRotate, ignoreTeams) => {
    if(getClosest(range) === null) return;
    if(ignoreTeams) {
        if(getClosest(range).getPlayer().func_142014_c(mc.field_71439_g)) return;
    }
    if(shouldBlock && mc.field_71439_g.field_71071_by.func_70448_g()) {
        mc.field_71442_b.func_78769_a(mc.field_71439_g, mc.field_71441_e, mc.field_71439_g.field_71071_by.func_70448_g());
    }
    Client.sendPacket(new C02PacketUseEntity(getClosest(range).getEntity(), C02PacketUseEntity.Action.ATTACK));
    if(shouldRotate) {
        const adjustment = getAdjustment(getClosest(range).getX(), getClosest(range).getY(), getClosest(range).getZ());
        Client.sendPacket(new C03PacketPlayer.C05PacketPlayerLook(adjustment[0], adjustment[1], true));
    }
    mc.field_71439_g.func_71038_i();
}

const KillAuraRotate = (range, shouldRotate) => {
    if(!shouldRotate) return;
    if(getClosest(range) === null) return;
    const adjustment = getAdjustment(getClosest(range).getX(), getClosest(range).getY(), getClosest(range).getZ());
    mc.field_71439_g.field_70761_aq = adjustment[0];
    mc.field_71439_g.field_70759_as = adjustment[0];
}

export { KillAura, KillAuraRotate };