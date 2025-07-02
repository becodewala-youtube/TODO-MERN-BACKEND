import jwt from 'jsonwebtoken';

const generateToken = (res,userId) =>{
    const token = jwt.sign({userId},process.env.JWT_SECRET, {
        expiresIn: '30d',
    })

    res.cookie('jwt',token,{
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
    sameSite: 'None',
     // Helps prevent CSRF attacks
})

}

export default generateToken;
