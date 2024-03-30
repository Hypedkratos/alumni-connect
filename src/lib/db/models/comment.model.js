import {Schema,model,models,Document} from "mongoose";

const CommentSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: "Post",
    },
    replies: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment",
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;