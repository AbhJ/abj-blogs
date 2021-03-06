import React from 'react'
import Footer from "../components/Footer"

const art4 = () => {
	return (
		<div>
			<div style={{maxWidth: '90%', paddingLeft: '5%', top: '-1em', position: 'relative'}}>
				<h2>My Review of 'Zero To One'.</h2>
				<div class="horizontal-rule"></div>
				<p>
					Apart from being a guy who reads and writes code, I am also an avid reader of books and manga. 
				</p>
				<p>
				You can find my likes and recommendations from my <a href='https://www.goodreads.com/abhj'>Goodreads profile</a>.
				</p>
				<p>
					I recently finished the book 'Zero To One' by Peter Thiel and thought of noting stuff down somewhere for my future use.
				</p>
				<center>
					<img src='https://raw.githubusercontent.com/AbhJ/abj-blogs/master/src/images/zero_to_one.jpg' alt='book cover' width='60%' />
					<br />
					<pre>Cover of Zero to One <i>(source: <a href='https://en.wikipedia.org/wiki/Zero_to_One'>Wikipedia</a>)</i></pre>
				</center>
				<h3>Why are monopolies so successful?</h3>
				<p>
					All happy families are alike: each unhappy family is unhappy in its own way.
				</p>
				<p>
					Thiel argues business is the opposite:
				</p>
				<p>
					<ul>
						<li>All happy companies are different: each one earns a monopoly by solving a unique problem.</li>
						<li>All failed companies are the same: they failed to escape competition</li>
					</ul>
				</p>
				<h3>Restaurants vs Tech Companies.</h3>
				<p>
					Restaurants: successful ones might collect healthy amounts today, but their cash flows will probably dwindle over the next few years when customers move on to newer and trendier alternatives.
				</p>
				<p>
					Technology Companies: often lose money for the first few years. It takes time to build valuable things, and that means delayed revenue. Most of a tech company's value will come at least 10 to 15 years in the future.
				</p>
				Thiel skillfully points out quite opposing patterns of success.
				<h3>What to consider when starting tech companies?</h3>
				<p>
					If one focuses on near-term growth above all else, one misses the most important question: Will this business still be around a decade from now?
				</p>
				<p>
					Numbers alone won't tell one the answer. Instead one must think critically about the qualitative characteristics of one's own business.
				</p>
				<h3>How good should the proprietary tech be?</h3>
				<p>
					Thiel says that a good rule of thumb is that proprietary technology must be at least 10 times better than its closest substitute in some important dimension to lead to a real monopolistic advantage.
				</p>
				<p>
					Anything less than an order of magnitude better will probably be perceived as a marginal improvement and will be hard to sell, especially in an already crowded market.
				</p>
				<h3>How do sales work?</h3>
				<p>
					Like acting, sales works best when hidden.
				</p>
				<p>
					This explains why almost everyone whose job involves distribution whether they're in sales, marketing, or advertising has a job title that has nothing to do with those things.
				</p>
				<p>
					<ul>
						<li>People who sell advertising are "account executives".</li>
						<li>People who sell customers are "business development".</li>
						<li>People who sell companies are "investment bankers".</li>
						<li>People who sell themselves are called "politicians".</li>
					</ul>
				</p>
				<p>
					Thiel emphasizes the reason being, none of us wants to be reminded when we're being sold.
				</p>
				<h3>Are engineers skilled enough to sell tech?</h3>
				<p>
					The engineer's grail is a product great enough that "it sells itself". But anyone who would actually say this about a real product must be lying: either he's delusional (lying to himself) or he's selling something (and thereby contradicting himself).
				</p>
				<p>
					The polar opposite business clich?? warns that "the best product doesn't always win".
				</p>
				<p>
					Economists attribute this to "path dependence": specific historical circumstances independent of objective quality can determine which products enjoy widespread adoption.
				</p>
				<p>
					Thiel brings a conclusion to this dilemma by stating: It's better to think of distribution as something essential to the design of your product. If you've invented something new but you haven't invented an effective way to sell it, you have a bad business no matter how good the product is.
				</p>
				<h3>Which problems/projects are the best?</h3>
				<p>
					<ul>
						<li>Doing something different is what's truly good for society and it's also what allows a business to profit by monopolizing a new market.</li>
						<li>The best projects are likely to be overlooked, not trumpeted by a crowd.</li>
						<li>The best problems to work on are often the ones nobody else even tries to solve.</li>
					</ul>
				</p>
				<div class="horizontal-rule"></div>
				<center class="video-embed-div">
					<div class="div-only-mobile">
						<div class="video-container">
							<iframe allowfullscreen="" class="video" src="https://www.youtube.com/embed/j8kUFnLK1zU">
							</iframe>
						</div>
					</div>
					<div class="div-no-mobile">
						<div class="video-container">
							<iframe allowfullscreen="" class="video" src="https://www.youtube.com/embed/j8kUFnLK1zU">
							</iframe>
						</div>
					</div>
				<pre>
				In video format!
				</pre>
				</center>
			</div>
			<Footer
				isBlogsArticle={true}
			/>
		</div>
	)
}

export default art4
