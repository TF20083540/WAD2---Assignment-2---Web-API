import jwt from 'jsonwebtoken';
import User from '../api/users/userModel';

const authenticate = async (request, response, next) => {
    try { 
        console.log("movies-api - authenticate - index");
        console.log(request);
        const authHeader = request.headers.authorization;

        console.log("authheader");
        //console.log(request.headers.authorization);
        console.log(authHeader);
        if (!authHeader) throw new Error('No authorization header');

        const token = authHeader.split(" ")[1];
        console.log("Token");
        console.log(token);
        if (!token) throw new Error('Bearer token not found');

        const decoded = await jwt.verify(token, process.env.SECRET); // Replace 'YOUR_SECRET_KEY' with your actual secret key
        console.log("Decoded");
        console.log(decoded);
        // Assuming decoded contains a username field
        const user = await User.findByUserName(decoded.username); 
        console.log("user");
        console.log(user);


        if (!user) {
            throw new Error('User not found');
        }
        request.user = user; // Optionally attach the user to the request for further use
        console.log("User check");
        console.log(request.user);
        console.log("Check comparison");
        console.log(request.user == user);
        next();
    } catch(err) {
        console.log("Catch");
        next(new Error(`Verification Failed: ${err.message}`));
    }
};

export default authenticate;