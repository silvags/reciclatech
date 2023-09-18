import mongoose, { Document, Schema } from 'mongoose';

interface IFeature extends Document {
    type: string;
    geometry: {
        type: string;
        coordinates: number[];
    };
    properties: {
        id: string;
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
        residuesAccpted: {
            recyclables: string[];
            electronics: string[];
        };
        contact: {
            phone: string;
            website?: string;
            email?: string;
            socialMedias?: string[];
        };
    };
}

const featureSchema: Schema = new Schema({
    type: {
        type: String,
        default: 'Feature',
    },
    geometry: {
        type: {
            type: String,
            default: 'Point',
        },
        coordinates: {
            type: [Number],
            index: '2dsphere',
        },
    },
    properties: {
        id: String,
        name: String,
        description: String,
        address: {
            street: String,
            complement: String,
            neighborhood: String,
            city: String,
            state: String,
        },
        schedule: String,
        residuesAccpted: {
            recyclables: [String],
            electronics: [String],
        },
        contact: {
            phone: String,
            email: String,
            website: String,
            socialMedias: [String],
        },
    },
});

const Feature = mongoose.model<IFeature>('Feature', featureSchema);

export default Feature;
