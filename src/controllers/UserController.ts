import{Request, response, Response} from "express";

class UserController{
        async create(request:Request, respons:Response){
            const body=request.body;
            console.log(body)
            return response.send();
        };
}

export{ UserController };