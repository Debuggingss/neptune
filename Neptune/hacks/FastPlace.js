const FastPlace = () => {
    const rightClick = Client.getMinecraft().class.getDeclaredField("field_71467_ac");
    rightClick.setAccessible(true);
    rightClick.set(Client.getMinecraft(), new java.lang.Integer("0"));
}

export { FastPlace };