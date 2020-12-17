const mc = Client.getMinecraft();

const forwardBind = new KeyBind(mc.field_71474_y.field_74351_w);
const backwardBind = new KeyBind(mc.field_71474_y.field_74368_y);
const leftBind = new KeyBind(mc.field_71474_y.field_74370_x);
const rightBind = new KeyBind(mc.field_71474_y.field_74366_z);
const jumpBind = new KeyBind(mc.field_71474_y.field_74314_A);

const Speed = (speed, yport) => {
    if(forwardBind.isKeyDown() || backwardBind.isKeyDown() || leftBind.isKeyDown() || rightBind.isKeyDown()) {
        jumpBind.setState(false);
        if(mc.field_71439_g.field_70122_E) {
            mc.field_71439_g.func_70664_aZ();
            mc.field_71439_g.field_70159_w *= (1 + speed/10);
            mc.field_71439_g.field_70179_y *= (1 + speed/10);
            mc.field_71439_g.field_70702_br *= 2.00;
        } else {
            mc.field_71439_g.field_70747_aH = (0 + speed/30);
            if(yport) {
                mc.field_71439_g.field_70181_x = -1.0;
            }
        }
    }
}

export { Speed };