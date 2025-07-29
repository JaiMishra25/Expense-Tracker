import { Redis } from '@upstash/redis'
import {RateLimit} from '@upstash/ratelimit'
import  'dotenv/config'

const ratelimit = new Ratelimit({
    redis: Redis.fromEnv(),
    limiter: RateLimit.slidingWindow(100, '60 s'),
})

export default ratelimit;