const ProductSchema = require("../model/model")

const getAllProductsStatic = async(req,res)=>{
    console.log(req.query);
    const product = await ProductSchema.find(req.query)
    res.status(200).json({product:product,nbHits:product.length})
}

const getAllProducts =async (req,res)=>{
const {name,featured,company,sort,fields,numericFilters } = req.query
const queryObject = {}
if (name){
    queryObject.name = {$regex:name,$options:"i"};
}
if (featured){
    queryObject.featured = featured==='true'?true:false
}
if (company){
    queryObject.company = company 
}
if (numericFilters){
    const operatorMap = {
        '>': '$gt',
        '>=': '$gte',
        '=': '$eq',
        '<': '$lt',
        '<=': '$lte',
      };
    const regex = /\b(>|<|>=|<=|=)\b/g

    let filters = numericFilters.replace(regex,(match)=>`-${operatorMap[match]}-`);
    const options = ["price","rating"];
    filters = filters.split(",").forEach(element => {
        const [field,operator,value] = element.split("-");
        if (options.includes(field)){
            queryObject[field] = {[operator]:Number(value)}
        }
    });
    
}


let result = ProductSchema.find(queryObject)
const limit = Number(req.query.limit) || 10
const page =  Number(req.query.page) || 1
const skip = (page - 1) * limit
console.log("queryObject : ",queryObject);
result = result.skip(skip).limit(limit)
if (sort){
    const sorlist = sort.split(",").join(" ")
    console.log(sorlist);
    result = result.sort(sorlist)
}
if(fields){
    const field = fields.split(",").join(" ")
    result = result.select(field)
}


const product = await result;
res.status(200).json({nbHits:product.length,product:product})
}

module.exports = {
    getAllProductsStatic,
    getAllProducts
}