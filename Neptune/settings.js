import { Setting, SettingsObject } from "SettingsManager/SettingsManager";

const settings = new SettingsObject(
    "Neptune",
    [
        {
            name: "Render",
            settings: [
                new Setting.Toggle("Toggle PlayerESP", false),
                new Setting.StringSelector("PlayerESP Mode", 0, [
                    "&cR&6a&ei&an&9b&5o&dw",
                    "&8Sort"
                ]),
                new Setting.Toggle("Toggle NameTags", false),
                new Setting.StringSelector("NameTag Mode", 0, [
                    "&cR&6a&ei&an&9b&5o&dw",
                    "&8Sort"
                ]),
                new Setting.Toggle("Toggle Tracers", false),
                new Setting.StringSelector("Tracer Mode", 0, [
                    "&cR&6a&ei&an&9b&5o&dw",
                    "&8Sort"
                ]),
                new Setting.Toggle("Toggle ChestESP", false),
                new Setting.StringSelector("ChestESP Mode", 0, [
                    "&cR&6a&ei&an&9b&5o&dw",
                    "&8Sort"
                ])
            ]
        },
        {
            name: "Player",
            settings: [
                new Setting.Toggle("Toggle FastPlace", false),
                new Setting.Toggle("Toggle InventoryWalk", false),
                new Setting.Toggle("Toggle NoFall", false),
                new Setting.Toggle("Toggle ChestStealer", false),
                new Setting.Toggle("ChestStealer AutoQuit", true),
                new Setting.Slider("ChestStealer Delay", 100, 1, 500, 0),
                new Setting.Toggle("Toggle AutoArmor", false),
                new Setting.Slider("AutoArmor Delay", 100, 1, 500, 0),
                new Setting.Toggle("Toggle Spammer", false),
                new Setting.StringSelector("Spammer Mode", 2, [
                    "RANDOM CHAR",
                    "RANDOM STR",
                    "CUSTOM",
                    "CUSTOM + RANDOM CHAR",
                    "CUSTOM + RANDOM STR"
                ]),
                new Setting.TextInput("Spammer Message", "Neptune Client on top!"),
                new Setting.Slider("Spammer Delay", 3, 1, 10, 0),
                new Setting.Slider("Spammer Random Length", 100, 1, 256, 0),
                new Setting.Toggle("Toggle Rotations", true)
            ]
        },
        {
            name: "Combat",
            settings: [
                new Setting.Toggle("Toggle KillAura", false),
                new Setting.Slider("KillAura Range", 5, 1, 6, 0),
                new Setting.Slider("KillAura Speed", 13, 1, 20, 0),
                new Setting.Toggle("Toggle AutoBlock", false),
                new Setting.Toggle("Toggle Rotations", false),
                new Setting.Toggle("Ignore Team", true),
                new Setting.Toggle("Toggle MobAura", false),
                new Setting.Slider("MobAura Range", 5, 1, 6, 0),
                new Setting.Slider("MobAura Speed", 13, 1, 20, 0),
                new Setting.Toggle("Toggle MobAura AutoBlock", false),
                new Setting.Toggle("Toggle MobAura Rotations", false),
                new Setting.Toggle("Toggle AntiVelocity", false),
                new Setting.StringSelector("AntiVelocity Mode", 0, [
                    "PACKET",
                    "MOTION"
                ]),
                new Setting.Slider("AntiVelocity Horizontal", 100, 1, 100, 0),
                new Setting.Slider("AntiVelocity Vertical", 50, 1, 100, 0),
            ]
        },
        {
            name: "Movement",
            settings: [
                new Setting.Toggle("Toggle SafeWalk", false),
                new Setting.Toggle("Toggle VanillaFly", false),
                new Setting.Slider("VanillaFly Speed", 2, 1, 10, 0),
                new Setting.Toggle("Toggle Step", false),
                new Setting.Slider("Step Height", 0.5, 0.5, 5, 1),
                new Setting.Toggle("Toggle Speed", false),
                new Setting.Slider("Movement Speed", 2, 1, 10, 0),
                new Setting.Toggle("Toggle YPort", false),
                new Setting.Toggle("Toggle Scaffold", false),
                new Setting.Toggle("Scaffold Auto Toggle SafeWalk", true),
            ]
        },
        {
            name: "World",
            settings: [
                new Setting.Toggle("Toggle Timer", false),
                new Setting.Slider("Timer Speed", 1, 0.1, 10, 1),
                new Setting.Toggle("Toggle Nuker", false),
                new Setting.StringSelector("Nuker Break Mode", 0, [
                    "AUTO",
                    "MANUAL"
                ]),
                new Setting.StringSelector("Nuker Mode", 0, [
                    "ALL",
                    "BED"
                ]),
                new Setting.Slider("Nuker Auto Speed", 3, 1, 10, 0),
                new Setting.Slider("Nuker Auto Range", 5, 1, 10, 0)
            ]
        },
        {
            name: "HUD",
            settings: [
                new Setting.Toggle("Toggle TargetTags", false),
                new Setting.Slider("TargetTags X", 1, 1, 1000, 0),
                new Setting.Slider("TargetTags Y", 1, 1, 1000, 0),
                new Setting.Toggle("Toggle Logo", true),
                new Setting.Slider("Logo X", 1, 1, 1000, 0),
                new Setting.Slider("Logo Y", 1, 1, 1000, 0),
                new Setting.Toggle("Toggle ModuleList", true),
                new Setting.Slider("ModuleList X", 1, 1, 1000, 0),
                new Setting.Slider("ModuleList Y", 1, 1, 1000, 0),
                new Setting.StringSelector("ModuleList Align", 1, [
                    "LEFT",
                    "RIGHT"
                ])
            ]
        },
        {
            name: "Other",
            settings: [
                new Setting.Toggle("Toggle KillSay", false),
                new Setting.Toggle("KillSay Anti-Spam Bypass", true),
                new Setting.TextInput("KillSay Trigger", "{ENEMY} was killed by {ME}!"),
                new Setting.TextInput("KillSay Message", "Auf Wiedersehen, {ENEMY}!")
            ]
        }
    ]
);
settings.setCommand("neptuneconfig").setSize(300, 300);

export { settings };