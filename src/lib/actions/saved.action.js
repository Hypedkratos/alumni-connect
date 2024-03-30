'use server'
import Saved from "@/lib/db/models/saved.models"
import { connectToDatabase } from "@/lib/db/connect"
import { revalidatePath } from "next/cache"

//save a post to user's saved posts
export async function savePost(userId, postId) {
    try {
        await connectToDatabase()
    
        const saved = await Saved.findOne({ user: userId })
    
        if (saved) {
            if (saved.post.includes(postId)) {
                const index = saved.post.indexOf(postId)
                if(index!==-1){
                    saved.post.splice(index,1)
                }
                await saved.save()
                const response = {
                    status:"200",
                    message:"unsaved post successfully",
                    data:saved
                }
                revalidatePath('/')
                revalidatePath('/saved')
                return JSON.parse(JSON.stringify(response)) 
            } else {
                saved.post.push(postId)
                await saved.save()
            const response = {
                status:"200",
                message:"saved post successfully",
                data:saved
            }
            revalidatePath('/')
            revalidatePath('/saved')
            return JSON.parse(JSON.stringify(response)) 
            }
            
        } else {
            const newSaved = await Saved.create({
                user: userId,
                post: [postId],
            })
            const response = {
                status:"200",
                message:"saved post successfully",
                data:newSaved
            }
            revalidatePath('/')
            revalidatePath('/saved')

            return JSON.parse(JSON.stringify(response))
        }
    } catch (error) {
        
        const response = {
            status:"400",
            message:error.message,
            data:null
        }
        return JSON.parse(JSON.stringify(response))
    }
}

//get all saved posts of a user
export async function getSavedPosts(userId) {
   try {
     await connectToDatabase()
 
     const saved = await Saved.findOne({ user: userId }).populate({
        path:"post",
        model:"Post",
        select:"_id image"
     })
 
         const response = {
             status:"200",
             message:"saved post successfully",
             data:saved
         }
         revalidatePath('/saved')
         return JSON.parse(JSON.stringify(response))
      
   } catch (error) {
         
         const response = {
              status:"400",
              message:error.message,
              data:null
         }
         return JSON.parse(JSON.stringify(response))
   }
}

export async function getSaved(userId) {
    try {
      await connectToDatabase()
  
      const saved = await Saved.findOne({ user: userId })
  
          const response = {
              status:"200",
              message:"saved post successfully",
              data:saved
          }
          return JSON.parse(JSON.stringify(response))
       
    } catch (error) {
          
          const response = {
               status:"400",
               message:error.message,
               data:null
          }
          return JSON.parse(JSON.stringify(response))
    }
 }
//check if a post is saved by a user
export async function checkSavedPost(userId, postId) {
    try {
        await connectToDatabase()
    
        const saved = await Saved.findOne({ user: userId })
    
        if (saved) {
            if (saved.posts.includes(postId)) {
                const response = {
                    status:"200",
                    message:"saved post successfully",
                    data:true
                }
                return JSON.parse(JSON.stringify(response))
            } else {
                const response = {
                    status:"200",
                    message:"saved post successfully",
                    data:false
                }
                return JSON.parse(JSON.stringify(response))
            }
        } else {
            const response = {
                status:"200",
                message:"saved post successfully",
                data:false
            }
            return JSON.parse(JSON.stringify(response))
        }
    } catch (error) {
        
        const response = {
            status:"400",
            message:error.message,
            data:null
        }
        return JSON.parse(JSON.stringify(response))
    }
}


//delete all saved posts of a user
export async function deleteSavedPosts(userId) {
    try {
        await connectToDatabase()
    
        const saved = await Saved.findOne({ user: userId })
    
        if (saved) {
            saved.posts = []
            await saved.save()
            const response = {
                status:"200",
                message:"deleted saved post successfully",
                data:saved
            }
            return JSON.parse(JSON.stringify(response))
        } else {
            const response = {
                status:"200",
                message:"no saved post found",
                data:null
            }
            return JSON.parse(JSON.stringify(response))
        }
    } catch (error) {
        
        const response = {
            status:"400",
            message:error.message,
            data:null
        }
        return JSON.parse(JSON.stringify(response))
    }
}