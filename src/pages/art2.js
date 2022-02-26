import React from 'react'
import Footer from "../components/Footer"

const art2 = () => {
	return (
		<div>
			<div style={{maxWidth: '90%', paddingLeft: '5%', paddingBottom: '1em', top: '-1em', position: 'relative'}}>
				<h2>My Internship at Salesforce.</h2>
				<h4>This blog is about my internship experience at Salesforce India. This was a (remote - due to <a href='https://en.wikipedia.org/wiki/COVID-19'>Covid-19</a>) Software Engineering Internship I took in Summer 2021. </h4>
				<pre>
				<p>
				This blog has also been published at the <a href="https://internphile.herokuapp.com/intern/Abhijay_Mitra">link</a>.
				</p>
				<p>
				A similar video has also been published at the <a href="https://youtu.be/aR9AilNbtio">link</a>.
				</p>
				<p>
				The blog in particular is in the form of a question-answer pattern unlike the others as it was a <a href="https://internphile.herokuapp.com/intern/Abhijay_Mitra">questionnaire</a> that I filled out about my internship.
				</p>
				</pre>
				<center>
					<img src='https://github.com/AbhJ/abhj/blob/master/image/abj_macbook.png?raw=true' alt='coding during internship' width='60%' />
					<br />
					<pre>Me coding while interning at Salesforce!!! 😎</pre>
				</center>
				<h3>Why did you choose the company?</h3>
				<p>
					Salesforce is famous for its amazing work culture. I loved the way Salesforce was revolutionizing modern workflow even during the unprecedented Covid-19 times.
				</p>
				<h3>How many rounds and what rounds?</h3>
				<p>
					There were a total of 5 rounds. 1 initial shortlisting coding test followed by 3 Technical Interview Rounds and 1 HR Round on the interview day.
				</p>
				<h3>How many rounds and the degree of difficulty? How much expertise do you need to clear the round?</h3>
				<p>
					There were 3 problems in the shortlisting test. One of them (3rd one) was difficult for me. The other two were of medium difficulty.
				</p>
				<p>
					I would say, being rated >= "expert" on Codeforces would be good enough to be able to solve 2 problems full. I was also able to solve the 3rd problem partially.
				</p>
				<h3>How important was your CV? Would you advise adding things that are not completely true in your CV?</h3>
				<p>
					The interviewer asked about my CV in the 2nd Tech round on the interview day. All of the questions about my CV were from my past internship. I would advise against writing any false pieces of information on your CV.
				</p>
				<h3>What was the duration of the internship?</h3>
				<p>
					8 weeks
				</p>
				<h3>Who was your point of contact during your internship?</h3>
				<p>
					My manager was a KGP alumnus himself, from my department. He always boosted my confidence and guided me throughout the internship.
				</p>
				<p>
					Also, my mentor was extremely helpful and he spoke to me regularly. I did enjoy every moment with the team.
				</p>
				<h3>What was the main project or objective during your internship?</h3>
				<p>
					I worked at Salesforce's Health Cloud. My project was to build an application that aimed to recognize, analyze and store data automatically, directly from medical voice conversations.
				</p>
				<p>
					During the internship, I developed a prototype app for healthcare registrars that mitigated their role in registering, updating, or fetching patient details, using the NLP domain of automating the storage of patient interactions. I can't provide details of my work as it is confidential.
				</p>
				<h3>How was the work culture in the company?</h3>
				<p>
					Salesforce has one of the best work cultures in the world. At the time of writing (2021), it was the 2nd best company in the world to work for according to <a href='https://fortune.com/best-companies/2021'>Fortune</a>.
				</p>
				<p>
					I worked for about 5 hours a day on average. They provided everything I needed for the internship, along with awesome gifts and swags at regular intervals. The employees are always happy, motivated, and ready to clear all your doubts and everyone in the company was just a ping on Slack away.
				</p>
				<h3>Were important tasks given to you or any input you gave to your project manager which proved to be useful?</h3>
				<p>
					My project was a prototype of one of the breakthroughs Salesforce India's Health Cloud was planning for some time. The healthcare industry is moving towards ensuring easier access and exchange of medical information.
				</p>
				<p>
					My project was to create a very small MVP for the bigger picture application. We made key decisions while working on the project and I feel proud to have been a part of this mission.
				</p>
				<h3>Anything you had to learn before the start of the internship?</h3>
				<p>
					I often had conversations about the tech being used in the project with the team and had suggested some ways at some junctures. The team was always appreciative of my suggestions and provided valuable alternatives in case I was wrong.
				</p>
			</div>
			<Footer
				isBlogsArticle={true}
			/>
		</div>
	)
}

export default art2
