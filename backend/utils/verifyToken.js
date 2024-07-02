import jwt from 'jsonwebtoken'
 

//Middlewares
export const verifyToken = (req,res,next)=>{
    const token = req.cookies.accessToken

    if(!token){
        return res.status(401).json({success:false,message:"You're not authorize"})
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
        if(err){
            return res.status(401).json({success:false, message:"token is invalid"})
        }

        req.user = user
        next()
    })
}

export const verifyUser = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id === req.params.id || req.user.role==='admin'){
            next()
        }else{
           return res
            .status(401)
            .json({success:false, message:"YOu're not authenticated"})
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.role==='admin'){
            next()
        }else{
           return res.status(401).json({success:false, message:"YOu're not authorize"})
        }
    })
}


//There are two types of authentication
//first one is statefull .... Example of car parking man hwo rovide parking server get recorfd of vehical number against ticket number
//when client login with userId and password then server return a session uid to client
//now when client want to access something he has to show this id

//how to transfer uid 
//can be transer in form of cookies, response or headers

//Express flow : client->Auth Middleware(checks for cookie value or uid)->end point