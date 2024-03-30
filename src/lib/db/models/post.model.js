import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    caption: {
        type: String,
        
    },
    image: {
        type: String,
        required: true,
    },
    imageId: {
        type: String,
        required: true,
    },
    location: {
        type: String,
    },
    tags: {
        type: String,
    },
    likes: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        },
    ],
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Post = mongoose.models.posts || mongoose.model("posts", PostSchema);
export default Post;
