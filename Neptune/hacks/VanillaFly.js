const VanillaFly = (tf, flyspeed) => {
    Client.getMinecraft().field_71439_g.field_71075_bZ.field_75100_b = tf;
    Client.getMinecraft().field_71439_g.field_71075_bZ.func_75092_a(flyspeed/10);
}

export { VanillaFly };