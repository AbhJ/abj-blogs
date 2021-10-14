import React from 'react'
import Button from "../components/Button"
import Footer from "../components/Footer"

const art4 = () => {
	return (
		<div>
			<div style={{maxWidth: '90%', paddingLeft: '5%', top: '-1em', position: 'relative'}}>
				<h2>My Review of 'Zero To One':</h2>
				<pre>This blog is also available in <a href="https://youtu.be/j8kUFnLK1zU">video</a> format.</pre>
				Apart from being a guy who reads and writes code, I am also an avid reader of books and manga. You can find about my likes and recommendations from my <a href='https://www.goodreads.com/abhj'>Goodreads profile</a>.
				<br/><br/>
				I recently finished the book 'Zero To One' by Peter Theil and thought of noting stuff down somewhere for my future use.
				<br/>
				<br/>
				<center>
					<img src='https://images-na.ssl-images-amazon.com/images/I/71Xygne8+qL.jpg' alt='book image' width='60%' />
					<br/>
					<pre>Cover of Zero to One (source: <a href='https://en.wikipedia.org/wiki/Zero_to_One'>Wikipedia</a>)</pre>
				</center>
				<ul>
					<li> 
						<h3>Why are monopolies so successful?</h3>
						<br/>
						Tolstoy opens Anna Karenina by observing: 
						<br/>
						All happy families are alike: each unhappy family is unhappy in its own way.
						<br/> <br/>
						Theil argues business is the opposite:
						<ul>
							<li>All happy companies are different: each one earns a monopoly by solving a unique problem.</li>
							<li>All failed companies are the same: they failed to escape competition</li>
						</ul>
					</li>
					<li>
						<h3>Restaurants vs Tech Companies:</h3>
						<br/> 
						Restaurants: successful ones might collect healthy amounts today, but their cash flows will probably dwindle over the next few years when customers move on to newer and trendier alternatives.
						<br/><br/>
						Technology Companies: often lose money for the first few years. It takes time to build valuable things, and that means delayed revenue. Most of a tech company's value will come at least 10 to 15 years in the future.
						<br/><br/>
						Theil skillfully points out quite opposing patterns of success.
					</li>
					<li>
						<h3>What to consider when starting tech companies?</h3>
						<br/>
						If one focuses on near-term growth above all else, one misses the most important question: Will this business still be around a decade from now? 
						<br/><br/>
						Numbers alone won't tell one the answer. Instead one must think critically about the qualitative characteristics of ones own business.
					</li>
					<li>
						<h3>How good should the proprietery tech be?</h3>
						<br/>
						Theil says that a good rule of thumb is that proprietary technology must be at least 10 times better than its closest substitute in some important dimension to lead to a real monopolistic advantage. 
						<br/><br/>Anything less than an order of magnitude better will probably be perceived as a marginal improvement and will be hard to sell, especially in an already crowded market.
					</li>
					<li>
						<h3>How does sales work?</h3>
						<br/>
						Like acting, sales works best when hidden.
						<br/><br/>
						This explains why almost everyone whose job involves distribution whether they're in sales, marketing, or advertising has a job title that has nothing to do with those things. 
						<br/><br/>
						<ul>
							<li>People who sell advertising are "account executives".</li> 
							<li>People who sell customers are "business development".</li> 
							<li>People who sell companies are "investment bankers".</li> 
							<li>People who sell themselves are called "politicians".</li> 
						</ul>
						<br/>
						Theil emphasises the reason being, none of us wants to be reminded when we're being sold.
					</li>
					<li>
						<h3>Are engineers skilled enough to sell tech?</h3>
						<br/>
						The engineer's grail is a product great enough that "it sells itself". But anyone who would actually say this about a real product must be lying: either he's delusional (lying to himself) or he's selling something (and thereby contradicting himself). 
						<br/><br/>
						The polar opposite business cliché warns that "the best product doesn't always win". 
						<br/><br/>
						Economists attribute this to "path dependence": specific historical circumstances independent of objective quality can determine which products enjoy widespread adoption. 
						<br/><br/>
						Theil brings a conclusion to this dillema by stating: It's better to think of distribution as something essential to the design of your product. If you've invented something new but you haven't invented an effective way to sell it, you have a bad business no matter how good the product.
					</li>
					<li>
						<h3>Which problems / projects are the best?</h3>
						<br/>
						<ul>
							<li>Doing something different is what's truly good for society and it's also what allows a business to profit by monopolizing a new market.</li>
							<li>The best projects are likely to be overlooked, not trumpeted by a crowd.</li>
							<li>The best problems to work on are often the ones nobody else even tries to solve.</li>
						</ul>
					</li>
				</ul>
			</div>
			<Footer
				isBlogsArticle = {true}
			/>
		</div>
	)
}

export default art4
