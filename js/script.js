import { ElementController } from "./ElementController.js";
import { GlassController } from "./GlassController.js";
import { ManagerController } from "./ManagerController.js";
import { ToolsController } from "./ToolsController.js";
import { ShadowController } from "./ShadowController.js";

const element = new ElementController();
const tools = new ToolsController({ element });
const glass = new GlassController({ element, tools });
const shadow = new ShadowController({ element, tools });
const manager = new ManagerController({ element, glass, shadow, tools });

manager.init();
