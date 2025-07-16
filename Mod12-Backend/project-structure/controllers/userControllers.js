


// Return all users 
export const getAllUsers= (req,res)=>  {
const users = [{id:1, name:"Asim"}];
res.json(users)
};

export const createUser= (req,res)=> {
    res.status(201).json('error')
} 

export const getUsers= (req,res)=>  {
    const users = [{users: {id:id, name:"Asim"}}];
res.json(users)
} ;




