import mongoose, { Schema, model, Model, Document, Types } from "mongoose";

export interface RealityResultType {
  _id: Types.ObjectId;
  userId: Types.ObjectId;
  generatedProfile: {
    archetype: string;
    name: string;
    alternate_universe_dob: string;
    backstory: string;
    personality_traits: string[];
    what_is_he_doing_now: {
      content: string;
      time: Date;
      coordinate: string;
    }[];
    daily_routine: string;
    portrait: string;
    major_achievements: string[];
    strengths: string[];
    weaknesses: string[];
    friends_and_rivals: {
      friends: string[];
      rivals: string[];
    };
    secrets_and_quirks: string[];
    favorite_quotes: string[];
  };
  createdAt: Date;
  updatedAt: Date;
}

export interface IRealityResult extends Document, Omit<RealityResultType, "_id"> {}

const WhatIsHeDoingNowSchema = new Schema(
  {
    content: { type: String, required: true },
    time: { type: Date, required: true },
    coordinate: { type: String, required: true },
  },
  { _id: false }
);

const FriendsAndRivalsSchema = new Schema(
  {
    friends: [{ type: String, required: true }],
    rivals: [{ type: String, required: true }],
  },
  { _id: false }
);

const GeneratedProfileSchema = new Schema(
  {
    archetype: { type: String, required: true },
    name: { type: String, required: true },
    alternate_universe_dob: { type: String, required: true },
    backstory: { type: String, required: true },
    personality_traits: [{ type: String, required: true }],
    what_is_he_doing_now: { type: [WhatIsHeDoingNowSchema], required: true },
    daily_routine: { type: String, required: true },
    portrait: { type: String },
    major_achievements: [{ type: String, required: true }],
    strengths: [{ type: String, required: true }],
    weaknesses: [{ type: String, required: true }],
    friends_and_rivals: { type: FriendsAndRivalsSchema, required: true },
    secrets_and_quirks: [{ type: String, required: true }],
    favorite_quotes: [{ type: String, required: true }],
  },
  { _id: false }
);

const RealityResultSchema: Schema<IRealityResult> = new Schema(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true, index: true },
    generatedProfile: { type: GeneratedProfileSchema, required: true },
  },
  { timestamps: true }
);

export const RealityResult: Model<IRealityResult> =
  mongoose.models.RealityResult || model<IRealityResult>("RealityResult", RealityResultSchema);
