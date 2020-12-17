const ctMcSlots = {
    0: 36,
    1: 37,
    2: 38,
    3: 39,
    4: 40,
    5: 41,
    6: 42,
    7: 43,
    8: 44,
    9: 9,
    10: 10,
    11: 11,
    12: 12,
    13: 13,
    14: 14,
    15: 15,
    16: 16,
    17: 17,
    18: 18,
    19: 19,
    20: 20,
    21: 21,
    22: 22,
    23: 23,
    24: 24,
    25: 25,
    26: 26,
    27: 27,
    28: 28,
    29: 29,
    30: 30,
    31: 31,
    32: 32,
    33: 33,
    34: 34,
    35: 35,
    36: 5,
    37: 7,
    38: 6,
    39: 8
}

const AutoArmor = (delay) => {
    if(Client.getMinecraft().field_71462_r instanceof net.minecraft.client.gui.inventory.GuiInventory) return;
    let helmets = [];
    let chests = [];
    let legs = [];
    let boots = [];

    let bestHelmet;
    let bestChestplate;
    let bestLeggings;
    let bestBoots;

    let dmgRedHelmet = 0;
    let dmgRedChestplate = 0;
    let dmgRedLeggings = 0;
    let dmgRedBoots = 0;

    Player.getInventory().getItems().forEach((item, index) => {
        if(item.getItem() instanceof net.minecraft.item.ItemArmor) {
            if(item.getItem().field_77881_a === 0) {
                helmets.push(item);
            }
            else if(item.getItem().field_77881_a === 1) {
                chests.push(item);
            }
            else if(item.getItem().field_77881_a === 2) {
                legs.push(item);
            }
            else if(item.getItem().field_77881_a === 3) {
                boots.push(item);
            }
            helmets.forEach(helmet => {
                currentReduce = helmet.getItem().field_77879_b;
                if(currentReduce > dmgRedHelmet) {
                    dmgRedHelmet = currentReduce;
                    bestHelmet = helmet;
                }
            });
            chests.forEach(chest => {
                currentReduce = chest.getItem().field_77879_b;
                if(currentReduce > dmgRedChestplate) {
                    dmgRedChestplate = currentReduce;
                    bestChestplate = chest;
                }
            });
            legs.forEach(leg => {
                currentReduce = leg.getItem().field_77879_b;
                if(currentReduce > dmgRedLeggings) {
                    dmgRedLeggings = currentReduce;
                    bestLeggings = leg;
                }
            });
            boots.forEach(boot => {
                currentReduce = boot.getItem().field_77879_b;
                if(currentReduce > dmgRedBoots) {
                    dmgRedBoots = currentReduce;
                    bestBoots = boot;
                }
            });
        }
    });

    setTimeout(() => {
        if(bestHelmet !== undefined) {
            if(Player.getInventory().indexOf(bestHelmet) !== 39) {
                if(bestHelmet.getItem().field_77879_b > Player.getInventory().getStackInSlot(39).getItem().field_77879_b || Player.getInventory().getStackInSlot(39).getName() === "tile.air.name") {
                    clickSlot(5);
                    clickSlot(ctMcSlots[Player.getInventory().indexOf(bestHelmet)]);
                }
            }
        }
        Thread.sleep(delay);
        if(bestChestplate !== undefined) {
            if(Player.getInventory().indexOf(bestChestplate) !== 38) {
                if(bestChestplate.getItem().field_77879_b > Player.getInventory().getStackInSlot(38).getItem().field_77879_b || Player.getInventory().getStackInSlot(38).getName() === "tile.air.name") {
                    clickSlot(6);
                    clickSlot(ctMcSlots[Player.getInventory().indexOf(bestChestplate)]);
                }
            }
        }
        Thread.sleep(delay);
        if(bestLeggings !== undefined) {
            if(Player.getInventory().indexOf(bestLeggings) !== 37) {
                if(bestLeggings.getItem().field_77879_b > Player.getInventory().getStackInSlot(37).getItem().field_77879_b || Player.getInventory().getStackInSlot(37).getName() === "tile.air.name") {
                    clickSlot(7);
                    clickSlot(ctMcSlots[Player.getInventory().indexOf(bestLeggings)]);
                }
            }   
        }
        Thread.sleep(delay);
        if(bestBoots !== undefined) {
            if(Player.getInventory().indexOf(bestBoots) !== 36) {
                if(bestBoots.getItem().field_77879_b > Player.getInventory().getStackInSlot(36).getItem().field_77879_b || Player.getInventory().getStackInSlot(36).getName() === "tile.air.name") {
                    clickSlot(8);
                    clickSlot(ctMcSlots[Player.getInventory().indexOf(bestBoots)]);
                }
            }
        }
    }, 0);
}

const clickSlot = (slot) => {
	Client.getMinecraft().field_71442_b.func_78753_a(Client.getMinecraft().field_71439_g.field_71069_bz.field_75152_c, slot, 0, 1, Client.getMinecraft().field_71439_g);
}

export { AutoArmor };