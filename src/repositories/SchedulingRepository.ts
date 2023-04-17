import { Model } from "mongoose";
import { Scheduling } from '../models/Scheduling'

export class SchedulingRepository {
    constructor(private schedulingModel: Model<Scheduling>) { }

    async create(scheduling: Scheduling) {
        const createScheduling = new this.schedulingModel(scheduling)
        return createScheduling.save()
    }
}