import { Setting } from "SettingsManager/SettingsManager";

import { PlayerESP } from "./hacks/PlayerESP.js";
import { NameTags } from "./hacks/NameTags.js";
import { TargetTags } from "./hacks/TargetTag.js";
import { Tracers } from "./hacks/Tracers.js";
import { ChestESP } from "./hacks/ChestESP.js";
import { SafeWalk } from "./hacks/SafeWalk.js";
import { FastPlace } from "./hacks/FastPlace.js";
import { VanillaFly } from "./hacks/VanillaFly.js";
import { Timer } from "./hacks/Timer.js";
import { Step } from "./hacks/Step.js";
import { KillAura, KillAuraRotate } from "./hacks/KillAura.js";
import { AntiVelocity } from "./hacks/AntiVelocity.js";
import { MobAura, MobAuraRotate } from "./hacks/MobAura.js";
import { Speed } from "./hacks/Speed.js";
import { InventoryWalk } from "./hacks/InventoryWalk.js";
import { NoFall } from "./hacks/NoFall.js";
import { ChestStealer } from "./hacks/ChestStealer.js";
import { AutoArmor } from "./hacks/AutoArmor.js";
import { Nuker } from "./hacks/Nuker.js";
import { Scaffold } from "./hacks/Scaffold.js";

import { rainbow } from "./utils/TextUtils.js";
import { makeRandomStr } from "./utils/GeneralUtils.js";

import { settings } from "./settings.js";

Setting.register(settings);

const GUIOpenBind = new KeyBind("Open GUI", Keyboard.KEY_RCONTROL, "Neptune");

const PlayerESPBind = new KeyBind("PlayerESP", Keyboard.KEY_NONE, "Neptune");
const NameTagsBind = new KeyBind("NameTags", Keyboard.KEY_NONE, "Neptune");
const TargetTagsBind = new KeyBind("TargetTags", Keyboard.KEY_NONE, "Neptune");
const TracersBind = new KeyBind("Tracers", Keyboard.KEY_NONE, "Neptune");
const ChestESPBind = new KeyBind("ChestESP", Keyboard.KEY_NONE, "Neptune");
const SafeWalkBind = new KeyBind("SafeWalk", Keyboard.KEY_NONE, "Neptune");
const FastPlaceBind = new KeyBind("FastPlace", Keyboard.KEY_NONE, "Neptune");
const VanillaFlyBind = new KeyBind("VanillaFly", Keyboard.KEY_NONE, "Neptune");
const TimerBind = new KeyBind("Timer", Keyboard.KEY_NONE, "Neptune");
const StepBind = new KeyBind("Step", Keyboard.KEY_NONE, "Neptune");
const KillAuraBind = new KeyBind("KillAura", Keyboard.KEY_NONE, "Neptune");
const AntiVelocityBind = new KeyBind("AntiVelocity ", Keyboard.KEY_NONE, "Neptune");
const MobAuraBind = new KeyBind("MobAura", Keyboard.KEY_NONE, "Neptune");
const SpeedBind = new KeyBind("Speed", Keyboard.KEY_NONE, "Neptune");
const InventoryWalkBind = new KeyBind("InventoryWalk", Keyboard.KEY_NONE, "Neptune");
const noFallBind = new KeyBind("NoFall", Keyboard.KEY_NONE, "Neptune");
const chestStealerBind = new KeyBind("ChestStealer", Keyboard.KEY_NONE, "Neptune");
const autoArmorBind = new KeyBind("AutoArmor", Keyboard.KEY_NONE, "Neptune");
const spammerBind = new KeyBind("Spammer", Keyboard.KEY_NONE, "Neptune");
const nukerBind = new KeyBind("Nuker", Keyboard.KEY_NONE, "Neptune");
const scaffoldBind = new KeyBind("Scaffold", Keyboard.KEY_NONE, "Neptune");

const PREFIX = "§8[§9Neptune§8] ";
const VERSION = "1.0.0";

let hacks = [];

let rainbowTick = 0;

let displayColorValue = 0;

let togglePlayerESP = false;
let toggleNameTags = false;
let toggleTargetTags = false;
let toggleTracers = false;
let toggleChestESP = false;
let toggleFastPlace = false;
let toggleSafeWalk = false;
let toggleFly = false;
let toggleTimer = false;
let toggleStep = false;
let toggleKillAura = false;
let toggleAntiVelocity = false;
let toggleMobAura = false;
let toggleSpeed = false;
let toggleInventoryWalk = false;
let toggleNoFall = false;
let toggleChestStealer = false;
let toggleAutoArmor = false;
let toggleSpammer = false;
let toggleNuker = false;
let toggleRotations = true;
let toggleScaffold = false;

let autoToggleSafeWalk = true;

let ChestESPMode = "rainbow";
let ESPMode = "rainbow";
let NTMode = "rainbow";
let TracerMode = "rainbow";
let timerSpeed = 1;
let stepHeight = 0.5;
let speedSpeed = 3;
let toggleYPort = false;
let vanillaFlySpeed = 2;
let chestStealerDelay = 100;
let chestStealerQuit = true;
let autoArmorDelay = 100;

let spammerMode = "CUSTOM";
let spammerDelay = 3;
let spammerMessage = "Neptune Client on top!";
let spamemrLength = 100;

let antiVelocityMode = "PACKET";
let antiVelocityV = 100;
let antiVelocityH = 50;

let killAuraBlocking = true;
let killAuraSpeed = 13;
let killAuraRange = 5;
let killAuraRotate = false;
let ignoreTeams = true;

let mobAuraBlocking = true;
let mobAuraSpeed = 13;
let mobAuraRange = 5;
let mobAuraRotate = false;

let nukerBreakMode = "AUTO";
let nukerMode = "ALL";
let nukerSpeed = 3;
let nukerRange = 5;

let toggleLogo = true;
let logoX = 1;
let logoY = 1;

let toggleModuleList = true;
let moduleListX = 1;
let moduleListY = 1;
let moduleListAlign = "RIGHT";

register('tick', () => {
    if(GUIOpenBind.isPressed()) settings.open();
    
    togglePlayerESP = settings.getSetting("Render", "Toggle PlayerESP");
    toggleNameTags = settings.getSetting("Render", "Toggle NameTags");
    toggleTracers = settings.getSetting("Render", "Toggle Tracers");
    toggleChestESP = settings.getSetting("Render", "Toggle ChestESP");

    toggleKillAura = settings.getSetting("Combat", "Toggle KillAura");
    killAuraBlocking = settings.getSetting("Combat", "Toggle AutoBlock");
    killAuraRange = parseInt(settings.getSetting("Combat", "KillAura Range"));
    killAuraSpeed = parseInt(settings.getSetting("Combat", "KillAura Speed"));
    killAuraRotate = settings.getSetting("Combat", "Toggle Rotations");
    ignoreTeams = settings.getSetting("Combat", "Ignore Team");

    toggleMobAura = settings.getSetting("Combat", "Toggle MobAura");
    mobAuraBlocking = settings.getSetting("Combat", "Toggle MobAura AutoBlock");
    mobAuraRange = parseInt(settings.getSetting("Combat", "MobAura Range"));
    mobAuraSpeed = parseInt(settings.getSetting("Combat", "MobAura Speed"));
    mobAuraRotate = settings.getSetting("Combat", "Toggle MobAura Rotations");

    toggleAntiVelocity = settings.getSetting("Combat", "Toggle AntiVelocity");
    antiVelocityMode = settings.getSetting("Combat", "AntiVelocity Mode");
    antiVelocityV = settings.getSetting("Combat", "AntiVelocity Vertical");
    antiVelocityH = settings.getSetting("Combat", "AntiVelocity Horizontal");

    toggleFastPlace = settings.getSetting("Player", "Toggle FastPlace");
    toggleInventoryWalk = settings.getSetting("Player", "Toggle InventoryWalk");
    toggleChestStealer = settings.getSetting("Player", "Toggle ChestStealer");
    chestStealerDelay = parseInt(settings.getSetting("Player", "ChestStealer Delay"));
    chestStealerQuit = settings.getSetting("Player", "ChestStealer AutoQuit");
    toggleAutoArmor = settings.getSetting("Player", "Toggle AutoArmor");
    autoArmorDelay = settings.getSetting("Player", "AutoArmor Delay");
    toggleSafeWalk = settings.getSetting("Movement", "Toggle SafeWalk");
    toggleScaffold = settings.getSetting("Movement", "Toggle Scaffold");
    autoToggleSafeWalk = settings.getSetting("Movement", "Scaffold Auto Toggle SafeWalk");

    toggleFly = settings.getSetting("Movement", "Toggle VanillaFly");
    vanillaFlySpeed = parseInt(settings.getSetting("Movement", "VanillaFly Speed"));

    toggleSpeed = settings.getSetting("Movement", "Toggle Speed");
    speedSpeed = settings.getSetting("Movement", "Movement Speed");
    toggleYPort = settings.getSetting("Movement", "Toggle YPort");

    toggleTimer = settings.getSetting("World", "Toggle Timer");
    timerSpeed = settings.getSetting("World", "Timer Speed");

    toggleStep = settings.getSetting("Movement", "Toggle Step");
    stepHeight = parseInt(settings.getSetting("Movement", "Step Height"));

    ChestESPModeSettings = settings.getSetting("Render", "ChestESP Mode");
    ESPModeSettings = settings.getSetting("Render", "PlayerESP Mode");
    NTModeSettings = settings.getSetting("Render", "NameTag Mode");
    TracerModeSettings = settings.getSetting("Render", "Tracer Mode");

    toggleTargetTags = settings.getSetting("HUD", "Toggle TargetTags");

    toggleNoFall = settings.getSetting("Player", "Toggle NoFall");

    toggleRotations = settings.getSetting("Player", "Toggle Rotations");

    toggleLogo = settings.getSetting("HUD", "Toggle Logo");
    logoX = parseInt(settings.getSetting("HUD", "Logo X"));
    logoY = parseInt(settings.getSetting("HUD", "Logo Y"));

    toggleModuleList = settings.getSetting("HUD", "Toggle Logo");
    moduleListX = parseInt(settings.getSetting("HUD", "ModuleList X"));
    moduleListY = parseInt(settings.getSetting("HUD", "ModuleList Y"));
    moduleListAlign = settings.getSetting("HUD", "ModuleList Align");

    toggleSpammer = settings.getSetting("Player", "Toggle Spammer");
    spammerMode = settings.getSetting("Player", "Spammer Mode");
    spammerMessage = settings.getSetting("Player", "Spammer Message");
    spammerDelay = parseInt(settings.getSetting("Player", "Spammer Delay"));
    spamemrLength = parseInt(settings.getSetting("Player", "Spammer Random Length"));

    toggleNuker = settings.getSetting("World", "Toggle Nuker");
    nukerBreakMode = settings.getSetting("World", "Nuker Break Mode");
    nukerMode = settings.getSetting("World", "Nuker Mode");
    nukerSpeed = parseInt(settings.getSetting("World", "Nuker Auto Speed"));
    nukerRange = parseInt(settings.getSetting("World", "Nuker Auto Range"));

    switch(ChestESPModeSettings) {
        case "&cR&6a&ei&an&9b&5o&dw":
            ChestESPMode = "rainbow";
            break;
        case "&8Sort":
            ChestESPMode = "sort";
    }

    switch(ESPModeSettings) {
        case "&cR&6a&ei&an&9b&5o&dw":
            ESPMode = "rainbow";
            break;
        case "&8Sort":
            ESPMode = "sort";
    }

    switch(NTModeSettings) {
        case "&cR&6a&ei&an&9b&5o&dw":
            NTMode = "rainbow";
            break;
        case "&8Sort":
            NTMode = "sort";
    }

    switch(TracerModeSettings) {
        case "&cR&6a&ei&an&9b&5o&dw":
            TracerMode = "rainbow";
            break;
        case "&8Sort":
            TracerMode = "sort";
    }

    if(toggleSafeWalk) {
        SafeWalk();
    }
    if(toggleFly) {
        VanillaFly(true, vanillaFlySpeed);
    }
    if(!toggleFly) {
        VanillaFly(false, vanillaFlySpeed);
    }
    if(toggleFastPlace) {
        FastPlace();
    }
    if(toggleTimer) {
        Timer(timerSpeed);
    }
    if(!toggleTimer) {
        Timer(1);
    }
    if(toggleStep) {
        Step(stepHeight);
    }
    if(!toggleStep) {
        Step(0.5);
    }
    if(toggleAntiVelocity && antiVelocityMode === "MOTION") {
        AntiVelocity(antiVelocityMode, null, null, null, null);
    }
    if(toggleSpeed) {
        Speed(speedSpeed, toggleYPort);
    }
    if(toggleInventoryWalk) {
        InventoryWalk();
    }
    if(toggleNoFall) {
        NoFall();
    }
    if(toggleChestStealer) {
        ChestStealer(chestStealerDelay, chestStealerQuit);
    }
    if(toggleAutoArmor) {
        AutoArmor(autoArmorDelay);
    }
    if(toggleScaffold) {
        Scaffold();
    }

    if(toggleRotations) {
        if(toggleKillAura) {
            KillAuraRotate(killAuraRange, killAuraRotate);
        }
        if(toggleMobAura) {
            MobAuraRotate(mobAuraRange, mobAuraRotate);
        }
    }
    updateModuleList();
    KeyBindHandler();

    if(killAuraSpeed !== auraControllerSpeed) {
        auraController.setFps(killAuraSpeed);
        auraControllerSpeed = killAuraSpeed;
    }
    if(mobAuraSpeed !== mobAuraControllerSpeed) {
        mobAuraController.setFps(mobAuraSpeed);
        mobAuraControllerSpeed = mobAuraSpeed;
    }
    if(spammerDelay !== spammerHandlerSpeed) {
        spammerHandler.setDelay(spammerDelay);
        spammerHandlerSpeed = spammerDelay;
    }
    if(nukerSpeed !== nukerControllerSpeed) {
        nukerController.setFps(nukerSpeed);
        nukerControllerSpeed = nukerSpeed;
    }

    org.lwjgl.opengl.Display.setTitle(`Neptune ${VERSION} | Minecraft 1.8.9`);
});

register('packetReceived', (packet, event) => {
    if(toggleAntiVelocity && antiVelocityMode  === "PACKET") {
        AntiVelocity(antiVelocityMode, packet, event, antiVelocityH, antiVelocityV);
    }
});

let auraControllerSpeed;
const auraController = register('step', () => {
    if(toggleKillAura) {
        KillAura(killAuraRange, killAuraBlocking, killAuraRotate, ignoreTeams);
    }
});

let mobAuraControllerSpeed;
const mobAuraController = register('step', () => {
    if(toggleMobAura) {
        MobAura(mobAuraRange, mobAuraBlocking, mobAuraRotate);
    }
});

let nukerControllerSpeed;
const nukerController = register('step', () => {
    if(!toggleNuker) return;
    if(nukerBreakMode === "AUTO") {
        Nuker(nukerRange, nukerBreakMode, nukerMode, null, null, null);
    }
});

let spammerHandlerSpeed;
const spammerHandler = register('step', () => {
    if(!toggleSpammer) return;
    switch(spammerMode) {
        case "CUSTOM":
            ChatLib.say(spammerMessage);
            break;
        case "RANDOM CHAR":
            spam = "";
            for (j = 0; j < spamemrLength; j++) {
                spam += String.fromCharCode(Math.floor(Math.random()*0x1D300)+0x800);
            }
            ChatLib.say(spam);
            break;
        case "RANDOM STR":
            ChatLib.say(makeRandomStr(spamemrLength));
            break;
        case "CUSTOM + RANDOM CHAR":
            spam = "";
            lngth = spamemrLength - (spammerMessage.length + 3);
            for (j = 0; j < lngth; j++) {
                spam += String.fromCharCode(Math.floor(Math.random()*0x1D300)+0x800);
            }
            ChatLib.say(`${spammerMessage} | ${spam}`);
            break;
        case "CUSTOM + RANDOM STR":
            spam = "";
            lngth = spamemrLength - (spammerMessage.length + 3);
            ChatLib.say(`${spammerMessage} | ${makeRandomStr(lngth)}`);
    }
});

register('chat', (message, event) => {
    if(!settings.getSetting("Other", "Toggle KillSay")) return;
    message = ChatLib.removeFormatting(message);
    if(message.match(new RegExp(settings.getSetting("Other", "KillSay Trigger").replace("{ENEMY}", "(\\w+)").replace("{ME}", `${Player.getName()}`)))) {
        let match = message.match(new RegExp(settings.getSetting("Other", "KillSay Trigger").replace("{ENEMY}", "(\\w+)").replace("{ME}", `${Player.getName()}`)));
        let toSay = settings.getSetting("Other", "KillSay Message").replace("{ENEMY}", match[1]);
        if(settings.getSetting("Other", "KillSay Anti-Spam Bypass")) toSay += " " + makeRandomStr(6);
        ChatLib.say(toSay);
    }
}).setCriteria("${message}${*}");

register('clicked', (x, y, button, state) => {
    if(!toggleNuker) return;
    if(nukerBreakMode === "MANUAL") {
        if(button === 0 && state === true && Player.lookingAt() instanceof Block && Player.lookingAt().getName() !== "tile.air.name") {
            lookingAt = Player.lookingAt();
            Nuker(nukerRange, nukerBreakMode, nukerMode, lookingAt.getX(), lookingAt.getY(), lookingAt.getZ());
        }
    }
});

register('renderWorld', () => {
    if(togglePlayerESP) {
        PlayerESP(ESPMode);
    }
    if(toggleNameTags) {
        NameTags(NTMode);
    }
    if(toggleTracers) {
        Tracers(TracerMode);
    }
    if(toggleChestESP) {
        ChestESP(ChestESPMode);
    }
});

register('step', () => {
    rainbow(rainbowTick);
    rainbowTick++;
    if(rainbowTick === 12) {
        rainbowTick = 0;
    }
}).setFps(4);

register('step', (elapsed) => {
    displayColorValue = elapsed;
});

const amountColor = (dist) => {
    let color = "&a";
    if(dist <= 16) color = "&c";
    if(dist <= 32 && dist > 16) color = "&6";
    if(dist <= 64 && dist > 32) color = "&e";
    if(dist > 64) color = "&a";
    return color + dist;
}

const getBlocksAmount = () => {
    let count = 0;
    for(i = 0; i < 9; i++) {
        if(Player.getInventory().getStackInSlot(i).getItem() instanceof net.minecraft.item.ItemBlock &&
        Player.getInventory().getStackInSlot(i).getName() !== "tile.air.name") {
            count += Player.getInventory().getStackInSlot(i).getStackSize();
        }
    }
    return count;
}

register('renderOverlay', () => {
    if(toggleLogo) {
        txt = new Text("Neptune");
        txt.setAlign("RIGHT");
        txt.setColor(Renderer.getRainbow(displayColorValue + 40, 90));
        txt.setShadow(true);
        txt.draw(logoX + 40, logoY);
        Renderer.drawStringWithShadow(`&7v${VERSION} &cREL`, logoX + 42, logoY);
    }
    if(toggleScaffold) {
        Renderer.drawStringWithShadow(amountColor(getBlocksAmount()), Renderer.screen.getWidth()/2 + 10, Renderer.screen.getHeight()/2 - 4);
    }
    if(toggleModuleList) {
        hacks.forEach((hack, index) => {
            txt = new Text(hack);
            txt.setAlign(moduleListAlign);
            txt.setColor(Renderer.getRainbow(displayColorValue + index * 40, 90));
            txt.setShadow(true);
            txt.draw(moduleListX, moduleListY + (index * 12));
        });
    }
    if(toggleTargetTags) {
        TargetTags();
    }
});

register('messageSent', (message, event) => {
    if(message.startsWith(".help")) {
        cancel(event);
        ChatLib.chat("§8§m" + ChatLib.getChatBreak("-"));
        ChatLib.chat(ChatLib.getCenteredText("§9§lNeptune"));
        ChatLib.chat("§9Neptune §ais a hack module with over 20 hacks.");
        ChatLib.chat("§aTo open the click GUI (Uses SettingsManager), you have to press §cRIGHT CTRL §akey!");
        ChatLib.chat("§aTo toggle a module without having to open the click GUI use §c'.toggle <module>'");
        ChatLib.chat("§aTo say a chat message which starts with a valid command you must do §c'.say <message>'");
        ChatLib.chat("§8§m" + ChatLib.getChatBreak("-"));
    } else if(message === ".say") {
        cancel(event);
        ChatLib.chat(PREFIX + " §7Please enter a message.")
    } else if(message.startsWith(".say ")) {
        cancel(event);
        ChatLib.say(message.replace(".say ", ""));
    } else if(message === ".toggle") {
        cancel(event);
        ChatLib.chat(PREFIX + " §7Please enter a module.")
    } else if(message.startsWith(".toggle ")) {
        cancel(event);
        toggleHandler(message.replace(".toggle ", "").toLowerCase());
        ChatLib.chat(PREFIX + " §7Toggled §a" + message.replace(".toggle ", "").toLowerCase());
    }
});

const removeElement = (array, toRemove) => {
    let index = array.indexOf(toRemove);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
}

const updateModuleList = () => {
    hacks.sort((a, b) => {
        return Renderer.getStringWidth(b) - Renderer.getStringWidth(a);
    });

    if(togglePlayerESP && !hacks.includes("PlayerESP")) hacks.push("PlayerESP");
    if(toggleNameTags && !hacks.includes("NameTags")) hacks.push("NameTags");
    if(toggleTargetTags && !hacks.includes("TargetTags")) hacks.push("TargetTags");
    if(toggleTracers && !hacks.includes("Tracers")) hacks.push("Tracers");
    if(toggleChestESP && !hacks.includes("ChestESP")) hacks.push("ChestESP");
    if(toggleFastPlace && !hacks.includes("FastPlace")) hacks.push("FastPlace");
    if(toggleSafeWalk && !hacks.includes("SafeWalk")) hacks.push("SafeWalk");
    if(toggleFly && !hacks.includes("VanillaFly")) hacks.push("VanillaFly");
    if(toggleTimer && !hacks.includes("Timer")) hacks.push("Timer");
    if(toggleStep && !hacks.includes("Step")) hacks.push("Step");
    if(toggleKillAura && !hacks.includes("KillAura")) hacks.push("KillAura");
    if(toggleAntiVelocity  && !hacks.includes("AntiVelocity")) hacks.push("AntiVelocity");
    if(toggleMobAura && !hacks.includes("MobAura")) hacks.push("MobAura");
    if(toggleSpeed && !hacks.includes("Speed")) hacks.push("Speed");
    if(toggleInventoryWalk && !hacks.includes("InventoryWalk")) hacks.push("InventoryWalk");
    if(toggleNoFall && !hacks.includes("NoFall")) hacks.push("NoFall");
    if(toggleChestStealer && !hacks.includes("ChestStealer")) hacks.push("ChestStealer");
    if(toggleAutoArmor && !hacks.includes("AutoArmor")) hacks.push("AutoArmor");
    if(toggleSpammer && !hacks.includes("Spammer")) hacks.push("Spammer");
    if(toggleNuker && !hacks.includes("Nuker")) hacks.push("Nuker");
    if(toggleScaffold && !hacks.includes("Scaffold")) hacks.push("Scaffold");

    if(!togglePlayerESP && hacks.includes("PlayerESP")) removeElement(hacks, "PlayerESP");
    if(!toggleNameTags && hacks.includes("NameTags")) removeElement(hacks, "NameTags");
    if(!toggleTargetTags && hacks.includes("TargetTags")) removeElement(hacks, "TargetTags");
    if(!toggleTracers && hacks.includes("Tracers")) removeElement(hacks, "Tracers");
    if(!toggleChestESP && hacks.includes("ChestESP")) removeElement(hacks, "ChestESP");
    if(!toggleFastPlace && hacks.includes("FastPlace")) removeElement(hacks, "FastPlace");
    if(!toggleSafeWalk && hacks.includes("SafeWalk")) removeElement(hacks, "SafeWalk");
    if(!toggleFly && hacks.includes("VanillaFly")) removeElement(hacks, "VanillaFly");
    if(!toggleTimer && hacks.includes("Timer")) removeElement(hacks, "Timer");
    if(!toggleStep && hacks.includes("Step")) removeElement(hacks, "Step");
    if(!toggleKillAura && hacks.includes("KillAura")) removeElement(hacks, "KillAura");
    if(!toggleAntiVelocity  && hacks.includes("AntiVelocity")) removeElement(hacks, "AntiVelocity");
    if(!toggleMobAura && hacks.includes("MobAura")) removeElement(hacks, "MobAura");
    if(!toggleSpeed && hacks.includes("Speed")) removeElement(hacks, "Speed");
    if(!toggleInventoryWalk && hacks.includes("InventoryWalk")) removeElement(hacks, "InventoryWalk");
    if(!toggleNoFall && hacks.includes("NoFall")) removeElement(hacks, "NoFall");
    if(!toggleChestStealer && hacks.includes("ChestStealer")) removeElement(hacks, "ChestStealer");
    if(!toggleAutoArmor && hacks.includes("AutoArmor")) removeElement(hacks, "AutoArmor");
    if(!toggleSpammer && hacks.includes("Spammer")) removeElement(hacks, "Spammer");
    if(!toggleNuker && hacks.includes("Nuker")) removeElement(hacks, "Nuker");
    if(!toggleScaffold && hacks.includes("Scaffold")) removeElement(hacks, "Scaffold");
}

const KeyBindHandler = () => {
    if(PlayerESPBind.isPressed()) {
        if(togglePlayerESP) settings.getSettingObject("Render", "Toggle PlayerESP").value = false;
        else if(!togglePlayerESP) settings.getSettingObject("Render", "Toggle PlayerESP").value = true;
        settings.save();
    }
    if(NameTagsBind.isPressed()) {
        if(toggleNameTags) settings.getSettingObject("Render", "Toggle NameTags").value = false;
        else if(!toggleNameTags) settings.getSettingObject("Render", "Toggle NameTags").value = true;
        settings.save();
    }
    if(TargetTagsBind.isPressed()) {
        if(toggleTargetTags) settings.getSettingObject("HUD", "Toggle TargetTags").value = false;
        else if(!toggleTargetTags) settings.getSettingObject("HUD", "Toggle TargetTags").value = true;
        settings.save();
    }
    if(TracersBind.isPressed()) {
        if(toggleTracers) settings.getSettingObject("Render", "Toggle Tracers").value = false;
        else if(!toggleTracers) settings.getSettingObject("Render", "Toggle Tracers").value = true;
        settings.save();
    }
    if(ChestESPBind.isPressed()) {
        if(toggleChestESP) settings.getSettingObject("Render", "Toggle ChestESP").value = false;
        else if(!toggleChestESP) settings.getSettingObject("Render", "Toggle ChestESP").value = true;
        settings.save();
    }
    if(SafeWalkBind.isPressed()) {
        if(toggleSafeWalk) settings.getSettingObject("Movement", "Toggle SafeWalk").value = false;
        else if(!toggleSafeWalk) settings.getSettingObject("Movement", "Toggle SafeWalk").value = true;
        settings.save();
    }
    if(FastPlaceBind.isPressed()) {
        if(toggleFastPlace) settings.getSettingObject("Player", "Toggle FastPlace").value = false;
        else if(!toggleFastPlace) settings.getSettingObject("Player", "Toggle FastPlace").value = true;
        settings.save();
    }
    if(VanillaFlyBind.isPressed()) {
        if(toggleFly) settings.getSettingObject("Movement", "Toggle VanillaFly").value = false;
        else if(!toggleFly) settings.getSettingObject("Movement", "Toggle VanillaFly").value = true;
        settings.save();
    }
    if(TimerBind.isPressed()) {
        if(toggleTimer) settings.getSettingObject("World", "Toggle Timer").value = false;
        else if(!toggleTimer) settings.getSettingObject("World", "Toggle Timer").value = true;
        settings.save();
    }
    if(StepBind.isPressed()) {
        if(toggleStep) settings.getSettingObject("Movement", "Toggle Step").value = false;
        else if(!toggleStep) settings.getSettingObject("Movement", "Toggle Step").value = true;
        settings.save();
    }
    if(KillAuraBind.isPressed()) {
        if(toggleKillAura) settings.getSettingObject("Combat", "Toggle KillAura").value = false;
        else if(!toggleKillAura) settings.getSettingObject("Combat", "Toggle KillAura").value = true;
        settings.save();
    }
    if(AntiVelocityBind.isPressed()) {
        if(toggleAntiVelocity) settings.getSettingObject("Combat", "Toggle AntiVelocity").value = false;
        else if(!toggleAntiVelocity) settings.getSettingObject("Combat", "Toggle AntiVelocity").value = true;
        settings.save();
    }
    if(MobAuraBind.isPressed()) {
        if(toggleMobAura) settings.getSettingObject("Combat", "Toggle MobAura").value = false;
        else if(!toggleMobAura) settings.getSettingObject("Combat", "Toggle MobAura").value = true;
        settings.save();
    }
    if(SpeedBind.isPressed()) {
        if(toggleSpeed) settings.getSettingObject("Movement", "Toggle Speed").value = false;
        else if(!toggleSpeed) settings.getSettingObject("Movement", "Toggle Speed").value = true;
        settings.save();
    }
    if(InventoryWalkBind.isPressed()) {
        if(toggleInventoryWalk) settings.getSettingObject("Player", "Toggle InventoryWalk").value = false;
        else if(!toggleInventoryWalk) settings.getSettingObject("Player", "Toggle InventoryWalk").value = true;
        settings.save();
    }
    if(noFallBind.isPressed()) {
        if(toggleNoFall) settings.getSettingObject("Player", "Toggle NoFall").value = false;
        else if(!toggleNoFall) settings.getSettingObject("Player", "Toggle NoFall").value = true;
        settings.save();
    }
    if(chestStealerBind.isPressed()) {
        if(toggleChestStealer) settings.getSettingObject("Player", "Toggle ChestStealer").value = false;
        else if(!toggleChestStealer) settings.getSettingObject("Player", "Toggle ChestStealer").value = true;
        settings.save();
    }
    if(autoArmorBind.isPressed()) {
        if(toggleAutoArmor) settings.getSettingObject("Player", "Toggle AutoArmor").value = false;
        else if(!toggleAutoArmor) settings.getSettingObject("Player", "Toggle AutoArmor").value = true;
        settings.save();
    }
    if(spammerBind.isPressed()) {
        if(toggleSpammer) settings.getSettingObject("Player", "Toggle Spammer").value = false;
        else if(!toggleSpammer) settings.getSettingObject("Player", "Toggle Spammer").value = true;
        settings.save();
    }
    if(nukerBind.isPressed()) {
        if(toggleNuker) settings.getSettingObject("World", "Toggle Nuker").value = false;
        else if(!toggleNuker) settings.getSettingObject("World", "Toggle Nuker").value = true;
        settings.save();
    }
    if(scaffoldBind.isPressed()) {
        if(toggleScaffold) settings.getSettingObject("Movement", "Toggle Scaffold").value = false;
        else if(!toggleScaffold) settings.getSettingObject("Movement", "Toggle Scaffold").value = true;
        settings.save();
        if(autoToggleSafeWalk) {
            if(toggleSafeWalk && toggleScaffold) settings.getSettingObject("Movement", "Toggle SafeWalk").value = false;
            else if(!toggleSafeWalk && !toggleScaffold) settings.getSettingObject("Movement", "Toggle SafeWalk").value = true;
            settings.save();
        }
    }
}

const toggleHandler = (module) => {
    switch(module) {
        case "playeresp":
            if(togglePlayerESP) settings.getSettingObject("Render", "Toggle PlayerESP").value = false;
            else if(!togglePlayerESP) settings.getSettingObject("Render", "Toggle PlayerESP").value = true;
            settings.save();
            break;
        case "nametags":
            if(toggleNameTags) settings.getSettingObject("Render", "Toggle NameTags").value = false;
            else if(!toggleNameTags) settings.getSettingObject("Render", "Toggle NameTags").value = true;
            settings.save();
            break;
        case "targettags":
            if(toggleTargetTags) settings.getSettingObject("HUD", "Toggle TargetTags").value = false;
            else if(!toggleTargetTags) settings.getSettingObject("HUD", "Toggle TargetTags").value = true;
            settings.save();
            break;
        case "tracers":
            if(toggleTracers) settings.getSettingObject("Render", "Toggle Tracers").value = false;
            else if(!toggleTracers) settings.getSettingObject("Render", "Toggle Tracers").value = true;
            settings.save();
            break;
        case "chestesp":
            if(toggleChestESP) settings.getSettingObject("Render", "Toggle ChestESP").value = false;
            else if(!toggleChestESP) settings.getSettingObject("Render", "Toggle ChestESP").value = true;
            settings.save();
            break;
        case "safewalk":
            if(toggleSafeWalk) settings.getSettingObject("Movement", "Toggle SafeWalk").value = false;
            else if(!toggleSafeWalk) settings.getSettingObject("Movement", "Toggle SafeWalk").value = true;
            settings.save();
            break;
        case "fastplace":
            if(toggleFastPlace) settings.getSettingObject("Player", "Toggle FastPlace").value = false;
            else if(!toggleFastPlace) settings.getSettingObject("Player", "Toggle FastPlace").value = true;
            settings.save();
            break;
        case "fly":
            if(toggleFly) settings.getSettingObject("Movement", "Toggle VanillaFly").value = false;
            else if(!toggleFly) settings.getSettingObject("Movement", "Toggle VanillaFly").value = true;
            settings.save();
            break;
        case "timer":
            if(toggleTimer) settings.getSettingObject("World", "Toggle Timer").value = false;
            else if(!toggleTimer) settings.getSettingObject("World", "Toggle Timer").value = true;
            settings.save();
            break;
        case "step":
            if(toggleStep) settings.getSettingObject("Movement", "Toggle Step").value = false;
            else if(!toggleStep) settings.getSettingObject("Movement", "Toggle Step").value = true;
            settings.save();
            break;
        case "killaura":
            if(toggleKillAura) settings.getSettingObject("Combat", "Toggle KillAura").value = false;
            else if(!toggleKillAura) settings.getSettingObject("Combat", "Toggle KillAura").value = true;
            settings.save();
            break;
        case "antivelocity":
            if(toggleAntiVelocity) settings.getSettingObject("Combat", "Toggle AntiVelocity").value = false;
            else if(!toggleAntiVelocity) settings.getSettingObject("Combat", "Toggle AntiVelocity").value = true;
            settings.save();
            break;
        case "mobaura":
            if(toggleMobAura) settings.getSettingObject("Combat", "Toggle MobAura").value = false;
            else if(!toggleMobAura) settings.getSettingObject("Combat", "Toggle MobAura").value = true;
            settings.save();
            break;
        case "speed":
            if(toggleSpeed) settings.getSettingObject("Movement", "Toggle Speed").value = false;
            else if(!toggleSpeed) settings.getSettingObject("Movement", "Toggle Speed").value = true;
            settings.save();
            break;
        case "inventorywalk":
            if(toggleInventoryWalk) settings.getSettingObject("Player", "Toggle InventoryWalk").value = false;
            else if(!toggleInventoryWalk) settings.getSettingObject("Player", "Toggle InventoryWalk").value = true;
            settings.save();
            break;
        case "nofall":
            if(toggleNoFall) settings.getSettingObject("Player", "Toggle NoFall").value = false;
            else if(!toggleNoFall) settings.getSettingObject("Player", "Toggle NoFall").value = true;
            settings.save();
            break;
        case "cheststealer":
            if(toggleChestStealer) settings.getSettingObject("Player", "Toggle ChestStealer").value = false;
            else if(!toggleChestStealer) settings.getSettingObject("Player", "Toggle ChestStealer").value = true;
            settings.save();
            break;
        case "autoarmor":
            if(toggleAutoArmor) settings.getSettingObject("Player", "Toggle AutoArmor").value = false;
            else if(!toggleAutoArmor) settings.getSettingObject("Player", "Toggle AutoArmor").value = true;
            settings.save();
            break;
        case "spammer":
            if(toggleSpammer) settings.getSettingObject("Player", "Toggle Spammer").value = false;
            else if(!toggleSpammer) settings.getSettingObject("Player", "Toggle Spammer").value = true;
            settings.save();
            break;
        case "nuker":
            if(toggleNuker) settings.getSettingObject("World", "Toggle Nuker").value = false;
            else if(!toggleNuker) settings.getSettingObject("World", "Toggle Nuker").value = true;
            settings.save();
            break;
        case "scaffold":
            if(toggleScaffold) settings.getSettingObject("Movement", "Toggle Scaffold").value = false;
            else if(!toggleScaffold) settings.getSettingObject("Movement", "Toggle Scaffold").value = true;
            settings.save();
            if(autoToggleSafeWalk) {
                if(toggleSafeWalk && toggleScaffold) settings.getSettingObject("Movement", "Toggle SafeWalk").value = false;
                else if(!toggleSafeWalk && !toggleScaffold) settings.getSettingObject("Movement", "Toggle SafeWalk").value = true;
                settings.save();
            }
            break;
        default:
            ChatLib.chat(PREFIX + " §7Invalid module name.");
    }
}