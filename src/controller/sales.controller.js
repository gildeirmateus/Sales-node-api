const my_database = new Map()

const listAll = (req, res)=>{
    const values = Array.from(my_database.values())
    res.status(200).send(values)
}

const create = (req, res)=>{
    const sales = req.body
    my_database.set(sales.id, sales)
    res.status(201).send(sales)
}
 
const update = (req, res)=>{
    const id = parseInt(req.params.id, 10)

    if(my_database.has(id)){
        const sales = req.body
        sales.id =id
        my_database.set(id, sales)
        res.status(200).send(sales)
    }
    else{
        res.status(404).send({
            message: `sales with id (${id}) not found`
        })
    }
}

const remove = (req, res)=>{
    const id = parseInt(req.params.id, 10)

    if(my_database.has(id)){
        const sales = my_database.get(id)
        my_database.delete(sales.id)
        res.status(200).send(sales)
    }
    else{
        res.status(404).send({
            message: `sales with id (${id}) not found`
        })
    }
}

module.exports = {
    listAll,
    create,
    update,
    remove
}