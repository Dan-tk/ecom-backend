import mongoose, { Document, Schema } from 'mongoose';

interface IReview extends Document {
  name: string;
  rating: number;
  comment: string;
  user: mongoose.Types.ObjectId;
}

const reviewSchema: Schema<IReview> = new Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
  },
  { timestamps: true }
);

const Review = mongoose.model<IReview>('Review', reviewSchema);

export { IReview, reviewSchema, Review };
