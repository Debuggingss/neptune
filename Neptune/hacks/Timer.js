const Timer = (speed) => {
    const timer = Client.getMinecraft().class.getDeclaredField("field_71428_T");
    timer.setAccessible(true);
    timer.get(Client.getMinecraft()).field_74278_d = speed;
}

export { Timer };