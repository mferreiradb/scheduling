import { Scheduling } from "../../models/Scheduling";
import { SchedulingRepository } from "../../repositories/SchedulingRepository";


class CreateSchedulingUseCase {
    constructor(private schedulingRepository: SchedulingRepository) { }

    async execute(scheduling: Scheduling): Promise<Scheduling> {
        const newScheduling = this.schedulingRepository.create(scheduling)
        return newScheduling
    }

}

export { CreateSchedulingUseCase }
