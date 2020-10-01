import { Document } from 'mongoose'

export interface Products_Ricardo extends Document {
    readonly NameProduct:       string;
    readonly Category:          string;
    readonly Description:       string;
    readonly ProductQuantity:   number;
    readonly Status:            boolean;
    readonly TimeStamp:         Date;
}