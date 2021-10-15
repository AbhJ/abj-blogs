import React from 'react'
import Footer from "../components/Footer"

const art2 = () => {
	return (
		<div>
			<div style={{maxWidth: '90%', paddingLeft: '5%', paddingBottom: '1em', top: '-1em', position: 'relative'}}>
				<h2>My Internship at Salesforce:</h2>

				<pre>This article has also been published at <a href="https://internphile.herokuapp.com/intern/Abhijay_Mitra">link</a>.<br/>
					Similar video has also been published at <a href = "https://youtu.be/aR9AilNbtio">link</a>.</pre>
				<center>
					<img src='https://github.com/AbhJ/abhj/blob/master/image/abj_macbook.png?raw=true' alt='coding during internship' width='60%' />
					<br/>
					<pre>Me coding while interning at Salesforce!!! 😎</pre>
				</center>
				<h3>Why did you choose the company?</h3><br/>

				I liked the company.

				<h3>How many rounds and what rounds?</h3><br/>

				There were a total of 5 rounds. 1 initial shortlisting coding test followed by 3 Technical Interview Rounds and 1 HR Round on the interview day.

				<h3>How many rounds and the degree of difficulty? How much expertise do you need to clear the round?</h3><br/>

				There were 3 problems in the shortlisting test. One of them (3rd one) was difficult for me. The other two was of medium difficulty. I would say, being rated >= "expert" on Codeforces would be good enough to be able to solve 2 problems full. I was also able to solve the 3rd problem partially.

				<h3>How important was your CV? Would you advise adding things which are not completely true in CV?</h3><br/>

				The interviewer asked about my CV in the 2nd Tech round on the interview day. All of the questions about my CV were from my past internship. I would definitely advice against writing any false pieces of information on your CV.

				<h3>Duration of intern?</h3><br/>

				8 weeks

				<h3>Your point of contact during your internship?</h3><br/>

				My manager was a KGP alumni himself, from my department. He always boosted my confidence and guided me throughout the internship. Also, my mentor was extremely helpful and he spoke to me on a regular basis. I did enjoy every moment with the team.

				<h3>Main project or objective during your intern?</h3><br/>

				I worked at Salesforce's Health Cloud. My project was to build an application that aimed to recognize, analyse and store data automatically, directly from medical voice conversations. During the internship, I developed a prototype app for healthcare registrars that mitigated their role in registering, updating or fetching patient details, using the NLP domain of automating storage of patient interactions.

				<h3>How was the work culture in the company?</h3><br/>

				Salesforce has one the best work cultures in the world. It is currently (2021) the 2nd best company in the world to work for according to <a href='https://fortune.com/best-companies/2021'>Fortune</a>. I worked for about 5 hours a day on average. They provided everything I needed for the internship, along with awesome gifts and swags on regular intervals. The employees are always happy, motivated and ready to clear all your doubts and everyone in the company was just a ping on Slack away.

				<h3>Were important tasks given to you or any input you gave to your project manager which proved to be useful?</h3><br/>

				My project was a prototype of one of the breakthroughs Salesforce India's Health Cloud was planning for some time. The healthcare industry is moving towards ensuring easier access and exchange of medical information. My project was to create a very small MVP for the bigger picture application. We made key decisions while working on the project and I feel proud to have been a part of this mission.

				<h3>Anything you had to learn before the start of intern?</h3><br/>

				I often had conversations about the tech being used in the project with the team and had suggested some ways at some junctures. The team was always appreciative of my suggestions and provided valuable alternatives in case I was wrong.

				<h3>What was your overall CDC experience? Any advice for improving the process down the line?</h3><br/>

				It was amazing for me. I think the process is well structured and while most colleges have much lesser companies hiring from them, CDC plays a good role in KGP.
			</div>
			<Footer
				isBlogsArticle = {true}
			/>
		</div>
	)
}

export default art2
