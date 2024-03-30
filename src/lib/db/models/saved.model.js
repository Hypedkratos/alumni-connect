import { Schema,model,models,Document } from "mongoose";

const SavedSchema = new Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
    },
    post:[
        {
            type:Schema.Types.ObjectId,
            ref:"Post",
        },
    ],
    createdAt:{
        type:Date,
        default:Date.now,
    },
});

const Saved = models.Saved || model("Saved",SavedSchema);

export default Saved;