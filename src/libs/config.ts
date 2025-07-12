export const MORGAN_FORMAT =  `:method :url :response-time [:status] \n`;

import mongoose from 'mongoose';

export const shapeIntoMongoose0bjectId = (target: any) => {
   return typeof target === 'string' ? new mongoose. Types. ObjectId(target) : target;
};  