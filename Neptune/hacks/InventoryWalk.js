const mc = Client.getMinecraft();

const GuiContainer = Java.type("net.minecraft.client.gui.inventory.GuiContainer");
const GuiChat = Java.type("net.minecraft.client.gui.GuiChat");

const forwardBind = new KeyBind(mc.field_71474_y.field_74351_w);
const backwardBind = new KeyBind(mc.field_71474_y.field_74368_y);
const leftBind = new KeyBind(mc.field_71474_y.field_74370_x);
const rightBind = new KeyBind(mc.field_71474_y.field_74366_z);
const jumpBind = new KeyBind(mc.field_71474_y.field_74314_A);
const sprintBind = new KeyBind(mc.field_71474_y.field_151444_V);

const InventoryWalk = () => {
    if(!mc.field_71462_r instanceof GuiContainer || mc.field_71462_r instanceof GuiChat) return;
    if (Keyboard.isKeyDown(forwardBind.getKeyCode())) forwardBind.setState(true); 
    else {
        forwardBind.setState(false);
    }
    if (Keyboard.isKeyDown(backwardBind.getKeyCode())) backwardBind.setState(true);
    else {
        backwardBind.setState(false);
    }
    if (Keyboard.isKeyDown(leftBind.getKeyCode())) leftBind.setState(true);
    else {
        leftBind.setState(false);
    }
    if (Keyboard.isKeyDown(rightBind.getKeyCode())) rightBind.setState(true);
    else {
        rightBind.setState(false);
    }
    if (Keyboard.isKeyDown(jumpBind.getKeyCode())) jumpBind.setState(true);
    else {
        jumpBind.setState(false);
    }
    if (Keyboard.isKeyDown(sprintBind.getKeyCode())) sprintBind.setState(true);
    else {
        sprintBind.setState(false);
    }
}

export { InventoryWalk };