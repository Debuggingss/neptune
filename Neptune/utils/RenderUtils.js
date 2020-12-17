const GlStateManager = Java.type("net.minecraft.client.renderer.GlStateManager");
const GL11 = Java.type("org.lwjgl.opengl.GL11");

const drawEspBox = (player, red, green, blue) => {
	GL11.glBlendFunc(770, 771);
	GL11.glEnable(GL11.GL_BLEND);
	GL11.glLineWidth(2.0);
	GL11.glDisable(GL11.GL_TEXTURE_2D);
	GL11.glDisable(GL11.GL_DEPTH_TEST);
	GL11.glDepthMask(false);
	GlStateManager.func_179094_E();

    const partialTicks = Tessellator.getPartialTicks();

	const playermp = new PlayerMP(player);
	
	const locations = [
	//    x, y, z    x, y, z
		[[0, 0, 0], [1, 0, 0]],
		[[0, 0, 0], [0, 0, 1]],
		[[1, 0, 1], [1, 0, 0]],
		[[1, 0, 1], [0, 0, 1]],
	
		[[0, 2, 0], [1, 2, 0]],
		[[0, 2, 0], [0, 2, 1]],
		[[1, 2, 1], [1, 2, 0]],
		[[1, 2, 1], [0, 2, 1]],
	
		[[0, 0, 0], [0, 2, 0]],
		[[1, 0, 0], [1, 2, 0]],
		[[0, 0, 1], [0, 2, 1]],
		[[1, 0, 1], [1, 2, 1]]
	];
	
	locations.forEach(loc => {
		Tessellator.begin(3).colorize(red, green, blue);
		
		X = playermp.getX() + (playermp.getX() - playermp.getLastX()) * partialTicks;
		Y = playermp.getY() + (playermp.getY() - playermp.getLastY()) * partialTicks;
		Z = playermp.getZ() + (playermp.getZ() - playermp.getLastZ()) * partialTicks;

		const centererVal = locations[0][1][0]/2;

		Tessellator.pos(
		X + loc[0][0] - centererVal,
		Y + loc[0][1],
		Z + loc[0][2] - centererVal
		).tex(0,0);

		Tessellator.pos(
		X + loc[1][0] - centererVal,
		Y + loc[1][1],
		Z + loc[1][2] - centererVal
		).tex(0,0);
		
		Tessellator.draw();
	});

	GlStateManager.func_179121_F();
	GL11.glEnable(GL11.GL_TEXTURE_2D);
	GL11.glEnable(GL11.GL_DEPTH_TEST);
	GL11.glDepthMask(true);
	GL11.glDisable(GL11.GL_BLEND);
};

const drawBlockEspBox = (x, y, z, red, green, blue) => {
	GL11.glBlendFunc(770, 771);
	GL11.glEnable(GL11.GL_BLEND);
	GL11.glLineWidth(2.0);
	GL11.glDisable(GL11.GL_TEXTURE_2D);
	GL11.glDisable(GL11.GL_DEPTH_TEST);
	GL11.glDepthMask(false);
	GlStateManager.func_179094_E();

    const partialTicks = Tessellator.getPartialTicks();

	const locations = [
	//    x, y, z    x, y, z
		[[0, 0, 0], [1, 0, 0]],
		[[0, 0, 0], [0, 0, 1]],
		[[1, 0, 1], [1, 0, 0]],
		[[1, 0, 1], [0, 0, 1]],

		[[0, 1, 0], [1, 1, 0]],
		[[0, 1, 0], [0, 1, 1]],
		[[1, 1, 1], [1, 1, 0]],
		[[1, 1, 1], [0, 1, 1]],

		[[0, 0, 0], [0, 1, 0]],
		[[1, 0, 0], [1, 1, 0]],
		[[0, 0, 1], [0, 1, 1]],
		[[1, 0, 1], [1, 1, 1]]
	];

	locations.forEach(loc => {
		Tessellator.begin(3).colorize(red, green, blue);

		Tessellator.pos(
    	x + loc[0][0],
    	y + loc[0][1],
    	z + loc[0][2]
    	).tex(0,0);
		
    	Tessellator.pos(
    	x + loc[1][0],
    	y + loc[1][1],
    	z + loc[1][2]
    	).tex(0,0);
		
    	Tessellator.draw();
	});
    
	GlStateManager.func_179121_F();
	GL11.glEnable(GL11.GL_TEXTURE_2D);
	GL11.glEnable(GL11.GL_DEPTH_TEST);
	GL11.glDepthMask(true);
	GL11.glDisable(GL11.GL_BLEND);
}

const drawTracerLine = (x, y, z, red, green, blue, alpha, lineWdith) => {
    GL11.glPushMatrix();
    GL11.glEnable(GL11.GL_BLEND);
    GL11.glEnable(GL11.GL_LINE_SMOOTH);
    GL11.glDisable(GL11.GL_DEPTH_TEST);
    GL11.glDisable(GL11.GL_TEXTURE_2D);
    GL11.glBlendFunc(770, 771);
    GL11.glEnable(GL11.GL_BLEND);
    GL11.glLineWidth(lineWdith);
    GL11.glColor4f(red, green, blue, alpha);
    GL11.glBegin(2);
    GL11.glVertex3d(0.0, 0.0 + Player.getPlayer().func_70047_e(), 0.0);
    GL11.glVertex3d(x, y, z);
    GL11.glEnd();
    GL11.glDisable(GL11.GL_BLEND);
    GL11.glEnable(GL11.GL_TEXTURE_2D);
    GL11.glEnable(GL11.GL_DEPTH_TEST);
    GL11.glDisable(GL11.GL_LINE_SMOOTH);
    GL11.glDisable(GL11.GL_BLEND);
	GL11.glPopMatrix();
}

export { drawEspBox, drawBlockEspBox, drawTracerLine };