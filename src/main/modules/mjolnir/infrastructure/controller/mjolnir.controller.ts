import { MjolnirService } from "../../application/mjolnir.service";

export class MjolnirController {

    constructor(private mjolnirService: MjolnirService) {}

    public async load() {
        await this.mjolnirService.load();
    }

}