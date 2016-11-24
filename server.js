var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');

var config = {
    user: 'krishnenthuchakra1977',
    database: 'krishnenthuchakra1977',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));

function createTemplate (data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var image = data.image;
    var subtitle = data.subtitle;
    var author = data.author;	
    
    
             
var htmlTemplate = `
<html>
<head>
<title>${title}</title>
<link rel="icon" type="image/png" href="https://cdn3.iconfinder.com/data/icons/bodybuilder/861/bodybuilding_bodybuilder_fitness_muscle_man_gym_strong-512.png" />
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script>

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
<!-- Custom Theme files -->
<link href="style.css" rel='stylesheet' type='text/css' />
 <link href="/ui/style.css" rel="stylesheet" />	

<!--webfonts-->
 <link href='http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,400,300,600,700|Orbitron:400,500,700,900' rel='stylesheet' type='text/css'>
<!--//webfonts-->
<!--Animation-->
</head>
<body>
	<!----- start-header---->
	<div class="banner two" id="home">
			<div class="header-bottom">
			 <div class="fixed-header">
				<div class="container">
					<div class="logo">
						<a href="index.html"><h1>Fit<span>Cube</span></h1></a>
					</div>
					<span class="menu"> </span>
					<div class="top-menu">
						<nav class="navigation">
						<ul class="cl-effect-16">
							<li><a  href="index.html">Home</a></li>
                                                         <li><a  href="trainers.html">Trainer Profile</a></li>

							<li><a class="active" href="blog.html">Blog</a></li>
							
				
						<ul>
					</nav>		
					</div>
				<!-- script for menu -->
						<script>
						$( "span.menu" ).click(function() {
						  $( ".top-menu" ).slideToggle( "slow", function() {
							// Animation complete.
						  });
						});
					</script>
					<!-- script for menu -->
					<script>
				$(document).ready(function() {
					 var navoffeset=$(".header-bottom").offset().top;
					 $(window).scroll(function(){
						var scrollpos=$(window).scrollTop(); 
						if(scrollpos >=navoffeset){
							$(".header-bottom").addClass("fixed");
						}else{
							$(".header-bottom").removeClass("fixed");
						}
					 });
					 
				});
				</script>
					<div class="clearfix"></div>
				</div>
			 </div>
		</div>
	</div>
	<!----start-slide-bottom--->
		<div class="second-head">
			<div class="container">
				<h2><a href="index.html"><h5>Home</h5></a> / SINGLE</h2>
			 </div>
		</div>
		<div class="container">
      		<div class="row single-top">
		  	   <div class="col-md-8">
		  	   	<div class="blog_box">
				 <div class="blog_grid">
				  <h3 class="wow rollIn animated" data-wow-delay="0.4s">${heading}</h3>
				  <a href="single.html"><img src= "${image}" class="img-responsive" alt=""/></a>
				  <div class="singe_desc">
				                    ${content}
					<div class="comments">
		  				<ul class="links">
		  					<li><i class="blog_icon1"> </i><br><span>${date.toDateString()}</span></li>
		  					<li><a href="#"><i class="blog_icon2"> </i><br><span>admin</span></a></li>
		  					<li><a href="#"><i class="blog_icon3"> </i><br><span>1206</span></a></li>
		  					<li><a href="#"><i class="blog_icon4"> </i><br><span>1206</span></a></li>
		  				</ul>
		  		        <div class="clearfix"></div>
		  		     </div>
					 
				  </div>
				  
				 </div>
				 <br><br>
				 <hr/>

              <h4>Comments :</h4>
<br>
              <div id="comment_form"></div>
<hr>
<br>
			  <div id="comments">
                <center>Loading comments...</center>
              </div>
				 
				</div>
			   </div>
			   
			   <div class="col-md-4 ">
								<div class="categories">
											<h4 class="wow fadeInRight animated" data-wow-delay="0.4s">Categories</h4>
											<ul class="category">
												<li><a href="http://www.basketballoftomorrow.com/">Tomorrow to basketball</a></li>
												<li><a href="http://www.themercury.com.au/news/tasmania/sports-greats-lead-cancer-council-tasmanias-relay-for-life-event/news-story/d9c1aec881051bccc1f7acd24638e13e">For relay</a></li>
												<li><a href="http://www.leicestermercury.co.uk/chocfest-melton-set-for-chocolate-festival-this-weekend/story-29894116-detail/story.html">For chocolate</a><li>
												<li><a href="http://economictimes.indiatimes.com/markets/stocks/news/china-stocks-advance-most-in-a-month-as-developers-lead-gains/articleshow/53694240.cms">As developers</a><li>
												<li><a href="http://www.espnfc.com/player/24242/stefano-mauri">The latest mauris now</a><li>
												<li><a href="http://stardewvalley.wikia.com/wiki/Preserves_Jar">valley from the jar,ege</a><li>
												<li><a href="https://en.oxforddictionaries.com/definition/convenience">and convinence</a><li>
											</ul>
										</div>
								<div class="sidebar-bottom">
									<h4 class="wow fadeInRight animated" data-wow-delay="0.4s">Archives</h4>
											<ul>
												<li><a href="#">February 2015</a></li>
												<li><a href="#">January 2015</a></li>
												<li><a href="#">December 2015</a></li>
												<li><a href="#">November 2015</a></li>
												<li><a href="#">February 2015</a></li>
												<li><a href="#">December 2015</a></li>
											</ul>
								</div>
					 <ul class="times two">
							<h3 class="wow fadeInRight animated" data-wow-delay="0.4s">Opening<span class="opening">Hours</span></h3>
							<li><i class="calender"> </i><span class="week">Monday</span><div class="hours two">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Tuesday</span><div class="hours two">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Wednesday</span><div class="hours two">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Thrusday</span><div class="hours two">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Friday</span><div class="hours two">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Saturday</span><div class="hours two">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Sunday</span><div class="hours two">Closed</div>  <div class="clearfix"></div></li>
	
						 </ul>
					<ul  class="blog-list1">
					 <h4 class="wow fadeInRight animated" data-wow-delay="0.4s">Tags</h4>
						<li><a href="#">Fitness</a></li>
						<li><a href="#">Gym</a></li>
						<li><a href="#">Lorem ipsum</a></li>
						<li><a href="#">Gym</a></li>
						<li><a href="#">Fitness</a></li>
						<li><a href="#">Fitness</a></li>
						<li><a href="#">Gym</a></li>
						<li><a href="#">Lorem ipsum</a></li>
						<li><a href="#">Gym</a></li>
						<li><a href="#">Logo</a></li>
						<div class="clearfix"></div>
					</ul>
		   	     </div>
				

			       
			        
			            
				
				</div>
      	</div> 
     
		<!----footer--->
			<div class="footer">
			<div class="container">
				<div class="f-grids">
				<div class="col-md-4 footer-grid wow fadeInUpBig animated animated" data-wow-delay="0.4s">
				<h3>Recent<span class="opening">Posts</span></h3>
				  <a href="http://bayesianbodybuilding.com/food-sex-life-modern-woman-podcast/"><h5>Food, Sex & Life for the Modern Woman [podcast]</h5></a>
				  <p>This one’s specifically for the ladies, though much of the lifestyle advice also applies to men. And male coaches with female clients will obviously benefit from the training and nutrition advice.</p>
				   <p class="month">November 17, 2016 , By Robert Louise</p>
				  <a href="http://bayesianbodybuilding.com/3-ingredient-green-hulk-soft-serve/"><h5>3 Ingredient Green Hulk soft serve</h5></a>
				  <p>This is a guest post from Sanne, owner of ManageMyMealPlan.com. I love quark and Greek yogurt, but when she told me she mixed it with avocado, I thought it would be disgusting. </p>
				  <p class="month">October 1, 2016 , By Robert Louise</p>
				</div>
				<div class="col-md-4 footer-grid wow fadeInUpBig animated animated" data-wow-delay="0.3s">
				    <div class="opening_hours">
						 <ul class="times">
							<h3>Opening<span class="opening">Hours</span></h3>
							<li><i class="calender"> </i><span class="week">Monday</span><div class="hours">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Tuesday</span><div class="hours">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Wednesday</span><div class="hours">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Thrusday</span><div class="hours">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Friday</span><div class="hours">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Saturday</span><div class="hours">h.6:00-h.24:00</div>  <div class="clearfix"></div></li>
							<li><i class="calender"> </i><span class="week">Sunday</span><div class="hours">Closed</div>  <div class="clearfix"></div></li>
	
						 </ul>
					</div>
				</div>
				<div class="col-md-4 footer-grid wow fadeInUpBig animated animated" data-wow-delay="0.2s">
						<h3>contact<span class="opening">info</span></h3>
					<ul class="address">
						 <li>123, new street, 129907 North Parur</li>
						 <li>023 456 23456</li>
						 <li><a class="mail" href="mailto:info@example.com">krishnenthuchakra1977@gmail.com</a></li>
					</ul>
					<div class="support">
						   <input type="text" class="text" value="Enter email... " onfocus="this.value = '';" onblur="if (this.value == 'Enter email...') {this.value = 'Enter email...';}">
						<input type="submit" value="SUBMIT" class="botton">
						    <p> Subscribe here for the latest fitness tranings and health articles.</p>
						</div>


				</div>
					<div class="clearfix"></div>
				</div>
				<div class="copy">
						<p>&copy; 2017 All Rights Reserved. Design by <a href="http://krishnenthuchakra1977.esy.es/">krishnenthu Chakra</a> </p>

		        </div>
			</div>
		</div>
	<script type="text/javascript" src="/ui/article.js"></script>

</body>
</html>
    `;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/blog.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blog.html'));
});

app.get('/trainers.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'trainers.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});



function hash (input, salt) {
    // How do we create a hash?
    var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
    return ["pbkdf2", "10000", salt, hashed.toString('hex')].join('$');
}


app.get('/hash/:input', function(req, res) {
   var hashedString = hash(req.params.input, 'this-is-some-random-string');
   res.send(hashedString);
});

app.post('/create-user', function (req, res) {
   // username, password
   // {"username": "tanmai", "password": "password"}
   // JSON
   var username = req.body.username;
   var password = req.body.password;
   var salt = crypto.randomBytes(128).toString('hex');
   var dbString = hash(password, salt);
   pool.query('INSERT INTO "user" (username, password) VALUES ($1, $2)', [username, dbString], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send('User successfully created: ' + username);
      }
   });
});

app.post('/login', function (req, res) {
   var username = req.body.username;
   var password = req.body.password;
   
   pool.query('SELECT * FROM "user" WHERE username = $1', [username], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          if (result.rows.length === 0) {
              res.status(403).send('username/password is invalid');
          } else {
              // Match the password
              var dbString = result.rows[0].password;
              var salt = dbString.split('$')[2];
              var hashedPassword = hash(password, salt); // Creating a hash based on the password submitted and the original salt
              if (hashedPassword === dbString) {
                
                // Set the session
                req.session.auth = {userId: result.rows[0].id};
                // set cookie with a session id
                // internally, on the server side, it maps the session id to an object
                // { auth: {userId }}
                
                res.send('credentials correct!');
                
              } else {
                res.status(403).send('username/password is invalid');
              }
          }
      }
   });
});

app.get('/check-login', function (req, res) {
   if (req.session && req.session.auth && req.session.auth.userId) {
       // Load the user object
       pool.query('SELECT * FROM "user" WHERE id = $1', [req.session.auth.userId], function (err, result) {
           if (err) {
              res.status(500).send(err.toString());
           } else {
              res.send(result.rows[0].username);    
           }
       });
   } else {
       res.status(400).send('You are not logged in');
   }
});

app.get('/logout', function (req, res) {
   delete req.session.auth;
   res.send('<html><body>Logged out!<br/><br/><a href="/">Back to home</a></body></html>');
});

var pool = new Pool(config);

app.get('/get-articles', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT * FROM article ORDER BY date DESC', function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

app.get('/get-comments/:articleName', function (req, res) {
   // make a select request
   // return a response with the results
   pool.query('SELECT comment.*, "user".username FROM article, comment, "user" WHERE article.title = $1 AND article.id = comment.article_id AND comment.user_id = "user".id ORDER BY comment.timestamp DESC', [req.params.articleName], function (err, result) {
      if (err) {
          res.status(500).send(err.toString());
      } else {
          res.send(JSON.stringify(result.rows));
      }
   });
});

app.post('/submit-comment/:articleName', function (req, res) {
   // Check if the user is logged in
    if (req.session && req.session.auth && req.session.auth.userId) {
        // First check if the article exists and get the article-id
        pool.query('SELECT * from article where title = $1', [req.params.articleName], function (err, result) {
            if (err) {
                res.status(500).send(err.toString());
            } else {
                if (result.rows.length === 0) {
                    res.status(400).send('Article not found');
                } else {
                    var articleId = result.rows[0].id;
                    // Now insert the right comment for this article
                    pool.query(
                        "INSERT INTO comment (comment, article_id, user_id) VALUES ($1, $2, $3)",
                        [req.body.comment, articleId, req.session.auth.userId],
                        function (err, result) {
                            if (err) {
                                res.status(500).send(err.toString());
                            } else {
                                res.status(200).send('Comment inserted!')
                            }
                        });
                }
            }
       });     
    } else {
        res.status(403).send('Only logged in users can comment');
    }
});
// counter

var counter = 0;
app.get('/counter',function(req,res){
    counter = counter+1;
   res.send(counter.toString()); 
});

app.get('/:articleName', function (req, res) {
  // SELECT * FROM article WHERE title = '\'; DELETE WHERE a = \'asdf'
  pool.query("SELECT * FROM article WHERE title = $1", [req.params.articleName], function (err, result) {
    if (err) {
        res.status(500).send(err.toString());
    } else {
        if (result.rows.length === 0) {
            res.status(404).send('Article not found');
        } else {
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
        }
    }
  });
});

app.get('/ui/:fileName', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', req.params.fileName));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
