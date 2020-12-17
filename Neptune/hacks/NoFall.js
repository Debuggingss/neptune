const C03PacketPlayer = Java.type("net.minecraft.network.play.client.C03PacketPlayer");
const mc = Client.getMinecraft();

const NoFall = () => {
	if(mc.field_71439_g.field_70143_R >= 2) {
		Client.sendPacket(new C03PacketPlayer(true));
		mc.field_71439_g.field_70143_R = 0;
	}
}

export { NoFall };