import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const PevSchema = new Schema({
    type: {
        type: String,
        default: 'Feature',
        required: true,
    },
    geometry: {    
        type: {
            type: String,
            default: 'Point',
            required: true,
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
            required: true,
        },
    },
    name: { type: String, required: true },
    description: { type: String },
    address: {
        street: { type: String },
        complement: { type: String },
        neighborhood: { type: String },
        city: { type: String },
        state: { type: String },
    },
    schedule: { type: String },
    residuesAccepted: {
        recyclables: { type: [String] },
        electronics: { type: [String] },
    },
    contact: {
        phone: { type: [String] },
        email: { type: String },
        website: { type: [String] },
        socialMedias: [String],
    },
    category: { type: String }
});

export interface IPev extends mongoose.Document {
    type: string;
    geometry: {
        type: string;
        coordinates: number[];
    };
    name: string;
    description: string;
    address: {
        street: string;
        complement: string;
        neighborhood: string;
        city: string;
        state: string;
    };
    schedule: string;
    residuesAccepted: {
        recyclables: string[];
        electronics: string[];
    };
    contact: {
        phone: string[];
        email: string;
        website: string[];
        socialMedias: string[];
    };
    category: string;
}

export class PevClass extends mongoose.Model {}

export const PevModel = mongoose.model<IPev, PevClass>('Pev', PevSchema);
