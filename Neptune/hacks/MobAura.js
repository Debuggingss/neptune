import { getClosestEntity, getAdjustment } from "../utils/GeneralUtils.js";

const mc = Client.getMinecraft();

const C02PacketUseEntity = Java.type("net.minecraft.network.play.client.C02PacketUseEntity");
const C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");

const MobAura = (range, shouldBlock, shouldRotate) => {
    if(getClosestEntity(range) === null) return;
    if(shouldBlock && mc.field_71439_g.field_71071_by.func_70448_g()) {
        mc.field_71442_b.func_78769_a(mc.field_71439_g, mc.field_71441_e, mc.field_71439_g.field_71071_by.func_70448_g());
    }
    mc.func_147114_u().func_147298_b().func_179290_a(new C02PacketUseEntity(getClosestEntity(range).getEntity(), C02PacketUseEntity.Action.ATTACK));
    if(shouldRotate) {
        const adjustment = getAdjustment(getClosestEntity(range).getX(), getClosestEntity(range).getY(), getClosestEntity(range).getZ());
        Client.sendPacket(new C03PacketPlayer.C05PacketPlayerLook(adjustment[0], adjustment[1], true));
    }
    mc.field_71439_g.func_71038_i();
}

const MobAuraRotate = (range, shouldRotate) => {
    if(!shouldRotate) return;
    if(getClosestEntity(range) === null) return;
    const adjustment = getAdjustment(getClosestEntity(range).getX(), getClosestEntity(range).getY(), getClosestEntity(range).getZ());
    mc.field_71439_g.field_70761_aq = adjustment[0];
    mc.field_71439_g.field_70759_as = adjustment[0];
}

export { MobAura, MobAuraRotate };