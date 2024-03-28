'use server'
import connectToDatabase from "../db/connect"
import Contact from "../db/models/contacts.model"

export async function saveContactsToDb(req) {
    const {
        name,
        email,
        phone,
        message
    } = req
    try {
        await connectToDatabase()
        const contact = await Contact.create({
            name,
            email,
            phone,
            message
        })
        const res = {
            status: "success",
            message: "Contact saved successfully",
            data: contact
        }
        return JSON.parse(JSON.stringify(res));
    } catch (error) {
        const res = {
            status: "error",
            message: error.message
        }
        return JSON.parse(JSON.stringify(res));
    }
}
