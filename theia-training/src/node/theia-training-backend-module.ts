import { ContainerModule } from "inversify";
import { LanguageServerContribution } from "@theia/languages/lib/node";
import { ServerContribution } from "./server-contribution";

export default new ContainerModule(bind => {
    bind(LanguageServerContribution).to(ServerContribution).inSingletonScope();
});