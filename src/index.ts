import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function insertData(firstName:string,lastName:string,email:string,password:string){
    const res = await prisma.user.create({
        data:{
            email,
            password,
            lastName,
            firstName
        }
    })
    console.log(res);
    
}
// insertData("Veer","Patel","test@1","test1")
async function getData(email:string) {
    const res = await prisma.user.findFirst({
        where:{
            email:email
        },
        select:{
            id:true,
            firstName:true,
            lastName:true,
        }
    })
    console.log(res);
}
// getData("test@1")

