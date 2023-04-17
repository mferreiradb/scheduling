import { Document, Schema, model } from "mongoose";

export interface Scheduling extends Document {
    dia: number;
    tipo: string;
    observacao: string;
}

const schedulingSchema = new Schema<Scheduling>({
    dia: { type: Number, required: true },
    tipo: { type: String, required: true },
    observacao: String,
})


export const Scheduling = model<Scheduling>('Scheduling', schedulingSchema)