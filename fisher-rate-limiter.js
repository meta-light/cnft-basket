import { pRateLimit } from "p-ratelimit";

const heliusLimit = pRateLimit({
    interval: 60000, // 60000 ms == 1 minute
    rate: 120, // 120 API calls per interval
    concurrency: 10, // no more than 10 running at once
    maxDelay: 2000, // an API call delayed > 2 sec is rejected
  });

  const txData = await heliusLimit(() => getHistory(addressArr[x]))