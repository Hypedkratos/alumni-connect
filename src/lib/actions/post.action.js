"use server";
import Post from "@/lib/db/models/post.models";
import User from "@/lib/db/models/user.models";
import { connectToDatabase } from "@/lib/db/connect";
import Comment from "@/lib/db/models/comment.models";
import { revalidatePath } from "next/cache";
import { deleteImage } from "../utils/uploadPic";

//create a post
export async function createPost(
  userId,
  post
) {
  try {
    await connectToDatabase();
    if (!userId) {
      const response = {
        status: 400,
        message: "User Id is required",
      };
      return JSON.parse(JSON.stringify(response));
    }

    //check if user exists

    const userExists = await User.findById({ _id: userId });
    if (!userExists) {
      const response = {
        status: 400,
        message: "User does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    if (!post.caption || !post.image) {
      const response = {
        status: 400,
        message: "Caption is required",
      };
      return JSON.parse(JSON.stringify(response));
    }

    //create post
    const newPost = await Post.create({
      caption: post.caption,
      image: post.image,
      imageId: post.imageId,
      tags: post.tags,
      location: post.location,
      user: userId,
    });

    //add post to user posts
    userExists.posts.push(newPost._id);
    await userExists.save();
    const response = {
      status: 200,
      message: "Post created successfully",
      data: newPost,
    };
    revalidatePath("/create-post");
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: 400,
      message: error.message,
    };
    return JSON.parse(JSON.stringify(response));
  }
}

//get all posts
export async function getAllPosts() {
  try {
    await connectToDatabase();
    const posts = await Post.find()
      .populate({ path: "user", model: "User"  ,select:"_id avatar name"})
      .sort({ createdAt: -1 });
    const response = {
      status: 200,
      message: "Posts fetched successfully",
      data: posts,
    };
    revalidatePath("/");
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: 400,
      message: error.message,
    };
    return JSON.parse(JSON.stringify(response));
  }
}

//get post by id
export async function getPostById(postId) {
  try {
    await connectToDatabase();
    const post = await Post.findById(postId).populate({
      path:"user",
      model:"User",
      select:"_id avatar name"
    }).populate({
      path:"comments",
      model:"Comment",
      populate:{
        path:'user',
        select:"_id name avatar"
      }
      
    })
    if (!post) {
      const response = {
        status: 400,
        message: "Post does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }
    const response = {
      status: 200,
      message: "Post fetched successfully",
      data: post,
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: 400,
      message: error.message,
    };
    return JSON.parse(JSON.stringify(response));
  }
}

//delete post by id
export async function deletePostById(postId, userId) {
  try {
    await connectToDatabase();
    if (!userId) {
      const response = {
        status: 400,
        message: "User Id is required",
      };
      return JSON.parse(JSON.stringify(response));
    }

    //check if user exists

    const userExists = await User.findById(userId);
    if (!userExists) {
      const response = {
        status: 400,
        message: "User does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    const post = await Post.findById(postId);
    if (!post) {
      const response = {
        status: 400,
        message: "Post does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    if (post.user.toString() !== userId) {
      const response = {
        status: 400,
        message: "User not authorized",
      };
      return JSON.parse(JSON.stringify(response));
    }

    const res = await deleteImage(post.imageId)
    const index = userExists.posts.indexOf(postId)
    if(index!==-1){
      userExists.posts.slice(index,1)
    }
    await userExists.save();
    const del = await Post.deleteOne({_id:postId});

    const response = {
      status: 200,
      message: "Post deleted successfully",
      data: del,
    };
    revalidatePath('/')
    revalidatePath('/profile')
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: 400,
      message: error.message,
    };
    return JSON.parse(JSON.stringify(response));
  }
}

//updata post by id
export async function updatePostById(
  postId,
  userId,
  post
) {
  try {
    await connectToDatabase();
    if (!userId) {
      const response = {
        status: 400,
        message: "User Id is required",
      };
      return JSON.parse(JSON.stringify(response));
    }

    //check if user exists

    const userExists = await User.findById(userId);
    if (!userExists) {
      const response = {
        status: 400,
        message: "User does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    const postExists = await Post.findById(postId);
    if (!postExists) {
      const response = {
        status: 400,
        message: "Post does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    if (postExists.user.toString() !== userId) {
      const response = {
        status: 400,
        message: "User not authorized",
      };
      return JSON.parse(JSON.stringify(response));
    }

    await postExists.updateOne({
      ...post,
    });
    const response = {
      status: 200,
      message: "Post updated successfully",
      data: postExists,
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: 400,
      message: error.message,
    };
    return JSON.parse(JSON.stringify(response));
  }
}

//get post search by caption and limit to 10 posts with page number
export async function getPostByCaption(caption, page) {
  try {
    await connectToDatabase();
    const posts = await Post.find({
      caption: { $regex: caption, $options: "i" },
    })
      .limit(10)
      .skip(page * 10)
      .sort({ createdAt: -1 });
    const response = {
      status: 200,
      message: "Posts fetched successfully",
      data: posts,
    };
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: 400,
      message: error.message,
    };
    return JSON.parse(JSON.stringify(response));
  }
}


//create comment by post id with userid
export async function createCommentByPostId(
  postId,
  userId,
  comment
) {
  try {
    await connectToDatabase();
    if (!userId) {
      const response = {
        status: 400,
        message: "User Id is required",
      };
      return JSON.parse(JSON.stringify(response));
    }

    //check if user exists

    const userExists = await User.findById(userId).select("-password");
    if (!userExists) {
      const response = {
        status: 400,
        message: "User does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    const post = await Post.findById(postId);
    if (!post) {
      const response = {
        status: 400,
        message: "Post does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    const newComment = await Comment.create({
      text: comment,
      user: userId,
      post: postId,
    });

    userExists.comments.push(newComment._id);
    post.comments.push(newComment._id);
    await post.save();
    await userExists.save();
    const response = {
      status: 200,
      message: "Comment created successfully",
      data: post.comments,
    };
    revalidatePath('/posts')
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: 400,
      message: error.message,
    };
    return JSON.parse(JSON.stringify(response));
  }
}

//delete comment by post id with userid and comment id
export async function deleteCommentByPostId(
  postId,
  userId,
  commentId
) {
  try {
    await connectToDatabase();
    if (!userId) {
      const response = {
        status: 400,
        message: "User Id is required",
      };
      return JSON.parse(JSON.stringify(response));
    }

    //check if user exists

    const userExists = await User.findById(userId);
    if (!userExists) {
      const response = {
        status: 400,
        message: "User does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    const post = await Post.findById(postId);
    if (!post) {
      const response = {
        status: 400,
        message: "Post does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    const comment = await Comment.findById(commentId);
    if (!comment) {
      const response = {
        status: 400,
        message: "Comment does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    if (comment.user.toString() !== userId) {
      const response = {
        status: 400,
        message: "User not authorized",
      };
      return JSON.parse(JSON.stringify(response));
    }

    const removeIndex = post.comments
      .map((comment) => comment.toString())
      .indexOf(commentId);
    post.comments.splice(removeIndex, 1);
    await post.save();
    const deleteComment = await Comment.deleteOne({_id:commentId});
    await userExists.comments.remove(commentId);
    const response = {
      status: 200,
      message: "Comment deleted successfully",
      data: post.comments,
    };
    revalidatePath('/post')
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: 400,
      message: error.message,
    };
    return JSON.parse(JSON.stringify(response));
  }
}

//like post by post id with userid
export async function likePostByPostId(postId, userId) {
  try {
    await connectToDatabase();
    if (!userId) {
      const response = {
        status: 400,
        message: "User Id is required",
      };
      return JSON.parse(JSON.stringify(response));
    }

    //check if user exists

    const userExists = await User.findById(userId).select("-password");
    if (!userExists) {
      const response = {
        status: 400,
        message: "User does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    const post = await Post.findById(postId);
    if (!post) {
      const response = {
        status: 400,
        message: "Post does not exist",
      };
      return JSON.parse(JSON.stringify(response));
    }

    if (post.likes.includes(userId)) {
      const index = post.likes.indexOf(userId)
      if(index !==-1){
        post.likes.splice(index,1)
      }
      const indexI = userExists.likes.indexOf(postId)
      if(indexI !==-1){
        userExists.likes.splice(index,1)
      }
      
      await post.save();
      await userExists.save()
      const response = {
        status: 200,
        message: "Post unliked successfully",
        data: post.likes,
      };
      revalidatePath('/')
      return JSON.parse(JSON.stringify(response));
    }

    post.likes.push(userId);
    userExists.likes.push(postId);
    await post.save();
    await userExists.save();
    const response = {
      status: 200,
      message: "Post liked successfully",
      data: post.likes,
    };
    revalidatePath('/')
    return JSON.parse(JSON.stringify(response));
  } catch (error) {
    const response = {
      status: 400,
      message: error.message,
    };
    return JSON.parse(JSON.stringify(response));
  }
}

