import Link from 'next/link';
import PageBanner from '../src/components/PageBanner';
import Layout from '../src/layout/Layout';
const firstBlog = () => {
	return (
		<Layout>
			<section className="first-blog-area py-130 rpy-100">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<div className="first-blog-wrap">
								<div className="image mb-25 wow fadeInUp delay-0-2s">
									<img src="https://miro.medium.com/max/1400/0*qmzWtFXW7TrRCM_7" alt="Blog" />
									<a href="#">
										<i className="fas fa-share-alt" />
									</a>
								</div>
								<ul className="blog-standard-header wow fadeInUp delay-0-2s">
									<li>
										<span className="name">Shuayb A</span>
									</li>
									<li>
										<i className="far fa-calendar-alt" />{' '}
										<Link href="/first-blog">October 12 2022</Link>
									</li>
									<li>
										<Link href="/first-blog">3 min read</Link>
									</li>
								</ul>
								<h3 className="title">
									How Shuayb became a Software Engineer without a degree in 8 months💻
								</h3>
								<h4>Why Software Engineering? </h4>
								<p>
									I wasn’t motivated purely by money, my fuel and passion derived from something much
									more liberating than $$. Freedom. The ability to work anywhere and anytime was my
									primary motivator. I relished in the thought of typing away on my laptop at some
									distant beach with just the ocean and birds as company. Now this must sound absurd
									but hear me out, there are people actually living like this, they call themselves
									Digital Nomads. And so, with hours of research on my back, I set off on this
									journey.
								</p>
								<p>
									Now this must sound absurd but hear me out, there are people actually living like
									this, they call themselves Digital Nomads. And so, with hours of research on my
									back, I set off on this journey.
								</p>

								<h4>How it started</h4>
								<p>
									I knew I needed a plan, so I made one. After many more hours digging around online,
									I started to construct a pretty decent plan as to how I was going to do this.
									Meanwhile, I was in the middle of writing my dissertation for my bachelor’s degree
									in Radiotherapy & Oncology. Priorities…
								</p>
								<p>
									I decided to park this whole coding thing and focus on finishing my degree, and so
									thats what I did. I landed a Job in Cheltenham, England which is where I moved to a
									month later. This was perfect as I had the mental and physical space to chase this
									goal undistracted.
								</p>
								<p>
									I took a few online courses on HTML, CSS and JavaScript and began chipping away at
									the massive rock ahead of me. Soon I started building my own little projects such as
									a simple quiz web app that you can find on my portfolio site (don’t judge my design
									skills). The scale and complexity of my projects increased as time went on. I then
									created my own roadmap for the next 6 months using Notion. Admittedly It took some
									time getting used to living alone so I took a break for a couple weeks.
								</p>
								<h4>My Daily Routine</h4>
								<p>
									My job had me working a different shift everyday , some days I start as early as 7am
									or as late as 12pm, always 8hr days though. So I knew I needed to adapt my coding
									hours around these times. on days I started at 8am or 9am, I would get up at 5/6am
									to fit some coding in as well as a workout. This was probably the single most
									important factor that helped me land the job. Waking up early is hugely underrated,
									the power of the early hours was game-changing for me. My second blog post will be
									about this topic so look out for that!
								</p>
								<p>
									I also made sure to cut out all distractions, this meant locking my phone. If you
									have a OnePlus phone, theres a fantastic feature called Zen Mode that allows you to
									do this. If not, leave your phone in another room and apply the Pomodoro technique
									to aid focus.
								</p>
								<h4>Job Applications and Interviews 🥸</h4>
								<p>
									I started applying before I thought I was ready because really and truly , you’ll
									never “feel ready”. You really gotta have the audacity and/or confidence to apply to
									these jobs. And so, thats exactly what I did. I wrote a cover letter for every
									application, only changing the first paragraph for each. I applied to maybe 100 jobs
									before I had any call backs. I also knew that my chances of landing a Job in London
									were slim but possible, so I widened my range to increase my options. After many
									many rejections, I finally got an email back.
								</p>
								<p>
									I’ll tell you right now I absolutely bombed the technical part of the interview and
									I was gutted. But strangely, the interviewer still seemed keen on me. I was asked to
									talk through one of my projects which I did, with pride. Then we started speaking
									about the potential projects I would work on and I just started spitballing some
									ideas and technologies we could use. To my surprise, the interview I was dreading
									for a week turned into an informal and friendly….. chat. Apparently, this isn’t
									unheard of for smaller companies.
								</p>
								<p>
									After a couple of days, my phone rang and I was told I got the job and the rest as
									they say, is history…
								</p>

								<div className="tag-coulds pb-25">
									<h6>Tags</h6>
									<Link href="/blog">Software Engineering</Link>
									<Link href="/blog">Careers</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};
export default firstBlog;
