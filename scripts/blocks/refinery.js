const refinery = extend( GenericCrafter, "refinery", {});
refinery.drawer = new DrawRotator();
const bigKiln = extend( AttributeCrafter, "meta-kilnii", {});
bigKiln.drawer = new DrawSmelter();
const smolSteel = extend( GenericCrafter, "steel-smelter", {});
smolSteel.drawer = new DrawSmelter();
const bigSteel = extend( AttributeCrafter, "steel-forge", {});
bigSteel.drawer = new DrawSmelter();
const silicglass = extend( GenericCrafter, "silic-glass-smelter", {});
silicglass.drawer = DrawSmelter();
const quartRefine = extend( GenericCrafter, "quartz-refinery", {});
const spri = new DrawRotator();
spri.spinSpeed = 5
quartRefine.drawer = spri
const thiccSilicGlass = extend( GenericCrafter, "silic-glass-forge", {});
thiccSilicGlass.drawer = DrawSmelter();
