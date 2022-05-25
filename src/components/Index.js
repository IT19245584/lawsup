import React, { useState } from 'react';

function Index() {

	const d = new Date();
    const current_date = d.getFullYear();
    return (
    <div style={{ backgroundColor:'#161719'}}>
        		
		<div id="site-content">
			
			<header class="site-header">
				<div class="container">
					<a href="index.html" id="branding">
						<img src="./images/logo.png" alt="Company Name" class="logo"/>
						<div class="branding-copy">
							<h1 class="site-title">Law Sup</h1>
							<small class="site-description">Business Law Support</small>
						</div>
					</a>

					<nav class="main-navigation">
						<button type="button" class="menu-toggle"><i class="fa fa-bars"></i></button>
						<ul class="menu">
							<li class="menu-item current-menu-item"><a href="index.html">Home</a></li>
							<li class="menu-item"><a href="about.html">About Us</a></li>
							<li class="menu-item"><a href="experience.html">Experience</a></li>
							<li class="menu-item"><a href="service.html">Service</a></li>
							<li class="menu-item"><a href="contact.html">Contact</a></li>
						</ul>
					</nav>
					<nav class="mobile-navigation"></nav>
				</div>
			</header>

			<main class="main-content">
				<div class="hero">
					<div class="container">
						<div class="row">
							<div class="col-md-8">
								<figure className="m-0"><img src="./dummy/lawyer.png" alt=""/></figure>
							</div>
							<div class="col-md-4">
								<div class="hero-content">
									<h1 class="hero-title">LAW SUP</h1>
									<p>A smart system for Business Law to assist Lawyers, Organizations, and the Public. Our goal is to provide a technical solution for all these stakeholders of the business law domain to overcome the issues they are currently facing. </p>
									<a href="#" class="button">Read more</a>
								</div>
							</div>
						</div>
					</div>
				</div> 
				
				<div class="fullwidth-block" data-bg-color="#101010">
					<div class="container">
						<div class="row">
							<div class="col-md-8">
								<h2>Welcome to <span className="text-warning">Law Sup</span></h2>
								<p>Business organizations need legal advice sometimes. Some organizations have in-house legal advisors. Others have to hire a lawyer for advice or to get the necessary support. This can be costly, and it is challenging to find a good lawyer for a particular area. Our aim is to develop a web platform for all these identified stakeholders. 
	                               This website will be a common platform for all these stakeholders. Lawyers can input the facts, keywords of a case and the system will analyze them with laws, acts, early cases and predict an early borderline for the case. The employees can get legal support they need. Business organizations, public also can get legal support from this proposed solution.</p>
							</div>
							<div class="col-md-4">
								<div class="latest-news">
									<h3>Latest News</h3>
									<ul>
										<li>
											<h3 class="entry-title"><a href="#">Enim ad minim veniam quis nostrud</a></h3>
											<small class="date">07/04/2014</small>
										</li>
										<li>
											<h3 class="entry-title"><a href="#">Duis aute irure dolor in reprehenderit</a></h3>
											<small class="date">07/04/2014</small>
										</li>
									</ul>
								</div> 
							</div>
						</div>
					</div> 
				</div>

				<div class="fullwidth-block">
					<div class="container">
						<h1 class="text-center mb-5 text-decoration-underline" style={{color:'#ac8074',letterSpacing:'1px'}}>System stakeholders</h1>
						<div class="row feature-list-section">
							<div class="col-md-4">
								<div class="feature">
									<header>
										<img src="images/bullet@2x.png" class="feature-icon"/>
										<div class="feature-title-copy">
											<h2 class="feature-title">Business organizations</h2>
											<small class="feature-subtitle">How help for Business organizations</small>
										</div>
									</header>
									<p>Business organizations need legal advice sometimes. Some organizations have in-house legal advisors. Others have to hire a lawyer for advice or to get the necessary support. This can be costly, and it is challenging to find a good lawyer for a particular area. </p>
									<a href="#" class="more-link">Read More</a>
								</div>
							</div>
							<div class="col-md-4">
								<div class="feature">
									<header>
										<img src="./images/bullet@2x.png" class="feature-icon"/>
										<div class="feature-title-copy">
											<h2 class="feature-title">Lawyers</h2>
											<small class="feature-subtitle">How help for Lawyers</small>
										</div>
									</header>
									<p>For lawyers, there is no system to analyze data of a case that they are handling and predict an early borderline or an assumption for that case, by analyzing the earlier cases and relatable laws and acts until now. Still, they manually go through analyze the case with their experience. </p>
									<a href="#" class="more-link">Read More</a>
								</div>
							</div>
							<div class="col-md-4">
								<div class="feature">
									<header>
										<img src="images/bullet@2x.png" class="feature-icon"/>
										<div class="feature-title-copy">
											<h2 class="feature-title">Law students</h2>
											<small class="feature-subtitle">How help for Law Students</small>
										</div>
									</header>
									<p>This system help to law students(and also Assist Lawyers) to find laws, acts, cases and judgements that are suitable for their purpose, provide them business law related latest news, updates from around the globe, from relatable platforms.</p>
									<a href="#" class="more-link">Read More</a>
								</div>
							</div>
							<div class="col-md-4 mt-5">
								<div class="feature">
									<header>
										<img src="images/bullet@2x.png" class="feature-icon"/>
										<div class="feature-title-copy">
											<h2 class="feature-title">Employees</h2>
											<small class="feature-subtitle">How help for Employees</small>
										</div>
									</header>
									<p>Employees/laborers face many difficulties, injustice at their workplaces. They often do not have any knowledge regarding their rights. Many of them are silent because they are either incapable of seeking legal advice or are afraid to do so. </p>
									<a href="#" class="more-link">Read More</a>
								</div>
							</div>
							<div class="col-md-4 mt-5">
								<div class="feature">
									<header>
										<img src="images/bullet@2x.png" class="feature-icon"/>
										<div class="feature-title-copy">
											<h2 class="feature-title">Public</h2>
											<small class="feature-subtitle">How help for Public</small>
										</div>
									</header>
									<p>The public also needs legal guidance. When starting a new business, and many more. For all these mentioned issues, if we can get a basic idea, or guidance before we go to a lawyer, it would be a great, support for us as stakeholders of this problem</p>
									<a href="#" class="more-link">Read More</a>
								</div>
							</div>
						</div>
						
						<div class="quote-section">
							<div class="quote-slider">
								<ul class="slides">
									<li>
										<figure class="quote-avatar"><img src="dummy/avatar.png"/></figure>
										<blockquote>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum reiciendis eveniet suscipit, totam doloribus iure quasi quos, quidem quam labore pariatur nesciunt rem unde odio a ex vel ullam, quis!</p>
											<footer>
												<cite>Jason Howard</cite>
												<span>(CEO, Books author)</span>
											</footer>
										</blockquote>
									</li>
									<li>
										<figure class="quote-avatar"><img src="dummy/avatar.png"/></figure>
										<blockquote>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum reiciendis eveniet suscipit, totam doloribus iure quasi quos, quidem quam labore pariatur nesciunt rem unde odio a ex vel ullam, quis!</p>
											<footer>
												<cite>Jason Howard</cite>
												<span>(CEO, Books author)</span>
											</footer>
										</blockquote>
									</li>
									<li>
										<figure class="quote-avatar"><img src="dummy/avatar.png"/></figure>
										<blockquote>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum reiciendis eveniet suscipit, totam doloribus iure quasi quos, quidem quam labore pariatur nesciunt rem unde odio a ex vel ullam, quis!</p>
											<footer>
												<cite>Jason Howard</cite>
												<span>(CEO, Books author)</span>
											</footer>
										</blockquote>
									</li>
									<li>
										<figure class="quote-avatar"><img src="dummy/avatar.png"/></figure>
										<blockquote>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum reiciendis eveniet suscipit, totam doloribus iure quasi quos, quidem quam labore pariatur nesciunt rem unde odio a ex vel ullam, quis!</p>
											<footer>
												<cite>Jason Howard</cite>
												<span>(CEO, Books author)</span>
											</footer>
										</blockquote>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

			</main> 

			<footer class="site-footer">
				    <div class="container">
                        <div class="subscribe-form">
                            <form >
                                <label>
                                    <span>Do you want to get news?</span>
                                    <span>Join our news letter</span>
                                </label>
                                <div class="control">
                                    <input type="text" placeholder="Enter your email to subscribe..."/>
                                    <button type="submit"><img src="images/icon-envelope.png" alt=""/></button>
                                </div>
                            </form>
                        </div>
					</div>
					<div class="social-links">
						<a href="#"><i class="fa fa-facebook"></i></a>
						<a href="#"><i class="fa fa-twitter"></i></a>
						<a href="#"><i class="fa fa-google-plus"></i></a>
						<a href="#"><i class="fa fa-pinterest"></i></a>
					</div>
					<div class="copy">
						<p>Copyright {current_date} Lawsup.com. Designed by Lawsup team. All rights reserved.</p>
					</div>
	
			</footer> 

		</div> 

		
    </div>
    )
};

export default Index;