import { documentsColletion } from "./dbConnect.js";

function getDocuments(){
    const documents = documentsColletion.find().toArray();
    return documents;
};

function addDocument(name){
    const result = documentsColletion.insertOne({
        name,
        text: ""
    });

    return result;
};

function findDocument(name){
    const document = documentsColletion.findOne({
        name
    });

    return document;
};

function updateDocument(name, text){
    const update = documentsColletion.updateOne({
        name
    }, {
        $set: {
            text
        }
    });

    return update;
}

function deleteDocument(name){
    const result = documentsColletion.deleteOne({ 
        name
    });
    
    return result;
}

export { findDocument, updateDocument, getDocuments, addDocument, deleteDocument };