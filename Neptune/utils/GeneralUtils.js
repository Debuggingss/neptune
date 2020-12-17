const mc = Client.getMinecraft();
const EntityOtherPlayerMP = Java.type("net.minecraft.client.entity.EntityOtherPlayerMP");
const EntityPlayer = Java.type("net.minecraft.entity.player.EntityPlayer");
const EntityAnimal = Java.type("net.minecraft.entity.passive.EntityAnimal");
const EntityMob = Java.type("net.minecraft.entity.monster.EntityMob");
const EntityVillager = Java.type("net.minecraft.entity.passive.EntityVillager");
const EntityIronGolem = Java.type("net.minecraft.entity.monster.EntityIronGolem");
const EnumFacing = Java.type("net.minecraft.util.EnumFacing");
const Vec3 = Java.type("net.minecraft.util.Vec3");

const getClosest = (range) => {
    let dist = range;
    let target = null;
    World.getAllPlayers().forEach(player => {
	/* Dead Check removed because it doesn't work on some servers.
	Feel free to add a toggle to this */
	    
        //if(player.getEntity().field_70128_L) return;
        //if(player.getEntity().func_70089_S()) return;
        if(!player.getEntity() instanceof EntityOtherPlayerMP) return;
        currentDist = mc.field_71439_g.func_70032_d(player.getPlayer());
        if(player.getName() !== Player.getName()) {
            if (currentDist <= dist) {
                dist = currentDist;
                target = player;
            }
        }
    });
    return target;
}

const getClosestEntity = (range) => {
    let dist = range;
    let target = null;
    World.getAllEntities().forEach(entity => {
        if(entity.getEntity().field_70128_L) return;
        if(!entity.getEntity().func_70089_S()) return;
        if(entity.getEntity() instanceof EntityOtherPlayerMP) return;
        if(!(entity.getEntity() instanceof EntityPlayer ||
        entity.getEntity() instanceof EntityAnimal ||
        entity.getEntity() instanceof EntityMob ||
        entity.getEntity() instanceof EntityVillager ||
        entity.getEntity() instanceof EntityIronGolem)) return;
        currentDist = mc.field_71439_g.func_70032_d(entity.getEntity());
        if(entity.getName() !== Player.getName()) {
            if (currentDist <= dist) {
                dist = currentDist;
                target = entity;
            }
        }
    });
    return target;
}

const getAdjustment = (x, y, z) => {
    const x_dist = x - Player.getX();
    const y_dist = y - Player.getY();
    const z_dist = z - Player.getZ();

    const dist = Math.sqrt(Math.pow(x_dist, 2) + Math.pow(z_dist, 2))
    const yaw = (Math.atan2(z_dist, x_dist) * 180 / Math.PI) - 90
    const pitch = -Math.atan2(y_dist, dist) * 180 / Math.PI

    return [yaw, pitch];
}

const placeBlockAt = (pos, slot) => {
    if(World.getWorld() === null) return;
    const eyesPos = new Vec3(Player.getX(),
        Player.getY() + mc.field_71439_g.func_70047_e(), Player.getZ());
    for(x = 0; x < EnumFacing.field_82609_l.length; x++) {
		neighbor = pos.func_177972_a(EnumFacing.field_82609_l[x]); // BlockPos
		side2 = EnumFacing.field_82609_l[x].func_176734_d(); // EnumFacing
		
		// check if neighbor can be right clicked
		if(!World.getWorld().func_180495_p(neighbor).func_177230_c()
			.func_176209_a(World.getWorld().func_180495_p(neighbor), false)) continue;
        
        newVec = new Vec3(side2.func_176730_m());

		hitVec = new Vec3(neighbor).func_72441_c(0.5, 0.5, 0.5)
			.func_178787_e(newVec);
		
		// check if hitVec is within range (6 blocks)
        if(eyesPos.func_72436_e(hitVec) > 36) continue;

        // place block
        mc.field_71442_b.func_78765_e();
        if (mc.field_71442_b.func_178890_a(mc.field_71439_g, World.getWorld(), Player.getInventory().getStackInSlot(slot).getItemStack(), neighbor, side2, hitVec)) {
            mc.field_71439_g.func_71038_i();
        }
        mc.field_71442_b.func_78765_e();

        return true;
    }
    return false;
}

const mcToRgb = (mccolor) => {
    switch(mccolor) {
    case "§0":
        return [0, 0, 0];
    case "§1":
        return [0, 0, 170];
    case "§2":
        return [0, 170, 0];
    case "§3":
        return [0, 170, 170];
    case "§4":
        return [170, 0, 0];
    case "§5":
        return [170, 0, 170];
    case "§6":
        return [255, 170, 0];
    case "§7":
        return [170, 170, 170];
    case "§8":
        return [85, 85, 85];
    case "§9":
        return [85, 85, 255];
    case "§a":
        return [85, 255, 85];
    case "§b":
        return [85, 255, 255];
    case "§c":
        return [255, 85, 85];
    case "§d":
        return [255, 85, 255];
    case "§e":
        return [255, 255, 85];
    case "§f":
        return [255, 255, 255];
    }
}

const makeRandomStr = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for(let i = 0; i < length; i++) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export { getClosest, getClosestEntity, getAdjustment, mcToRgb, makeRandomStr, placeBlockAt };
