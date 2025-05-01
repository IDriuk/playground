/* 
  355. Design Twitter
  Design a simplified version of Twitter where users can post tweets, follow / unfollow another user 
  and is able to see the 10 most recent tweets in the user's news feed.
  Your design should support the following methods:
  postTweet(userId, tweedId): Compose a new tweet.
  getNewsFeed(userId): Retrieve the 10 most recent tweet ids in the user's news feed.
  Each item in the news feed must be posted by users who the user followed or by the user herself.
  Tweets must be ordered from most recent to least recent.
  follow (followerId, followeeId): Follower follows a followee.
  unfollow(followerId, followeeId): Follower unfollows a followee.
*/

class Tweet {
  constructor(
    public time: number,
    public id: number,
  ) {}
}

export class Twitter {
  fans = new Map<number, Set<number>>();
  tweets = new Map<number, Tweet[]>();
  cnt = 0;

  constructor() {}

  postTweet = (userId: number, tweetId: number) => {
    let { fans, tweets } = this;
    if (!fans.has(userId)) {
      fans.set(userId, new Set());
    }
    fans.get(userId)?.add(userId);
    if (!tweets.has(userId)) {
      tweets.set(userId, []);
    }
    tweets.get(userId)?.unshift(new Tweet(this.cnt++, tweetId));
  };

  getNewsFeed(userId: number) {
    let { fans, tweets, cnt } = this;
    if (!fans.has(userId)) {
      return [];
    }
    let followees = Array.from(fans.get(userId)!);
    let feed = followees.reduce((ac: Tweet[], u: number) => {
      if (tweets.has(u)) {
        ac = [...ac, ...tweets.get(u)!];
      }
      return ac;
    }, []);
    feed.sort((t1, t2) => t2.time - t1.time);
    return feed.slice(0, 10).map((tw) => tw.id);
  }

  follow = (followerId: number, followeeId: number) => {
    if (!this.fans.has(followerId)) {
      this.fans.set(followerId, new Set());
    }
    this.fans.get(followerId)?.add(followeeId);
  };

  unfollow = (followerId: number, followeeId: number) => {
    if (this.fans.has(followerId) && followeeId != followerId) {
      this.fans.get(followerId)?.delete(followeeId);
    }
  };
}
