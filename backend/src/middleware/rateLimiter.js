import ratelimit from "../config/upstash.js"


const rateLimiter = async (req,res,next) => {
   try {
      const {success} = await ratelimit.limit("my-rate-limit") //userId-rate limit for each user
      if(!success) return res.status(429).json({message:"Too many requests,try again later"})
         next()
   } catch (error) {
      console.log("Rate limit error", error)
      next()
   }
}

export default rateLimiter