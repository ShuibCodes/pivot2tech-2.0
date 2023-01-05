import React from 'react'
import { TwitterFollowButton, TwitterTweetEmbed} from 'react-twitter-embed';
function tweets() {
  return (
    <div>
         <section class="team text-center py-5">
    <div class="container">
      <div class="header my-5">
       
      </div>
      <div class="row">
        <div class="col-md-6 col-lg-3 py-5">
        <TwitterTweetEmbed
            tweetId={'1610574982408732674'}
        />
        </div>
        <div class="col-md-6 col-lg-3 py-5">
        <TwitterTweetEmbed
            tweetId={'1610628383053959168'}
        />
        </div>
        <div class="col-md-6 col-lg-3 py-5">
        <TwitterTweetEmbed
            tweetId={'1605616175806697473'}
        />
        </div>
        <div class="col-md-6 col-lg-3 py-5">
        <TwitterTweetEmbed
            tweetId={'1610631115802296322'}
        />
        </div>
        
      </div>
    </div>
  </section>
    </div>
  )
}

export default tweets