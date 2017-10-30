

window.onload = function startup(){
	var acting = ["The Lion King", "Solo: A Star Wars Story", "Spider-Man: Homecoming", "Atlanta (TV Series)", "Adventure Time (TV Series)", "The Martian", "Magic Mike XXL", "China, IL (TV Series)", "Ultimate Spider-Man", "The Lazarus Effect", "Alexander and the Terrible, Horrible, No Good, Very Bad Day", "Sesame Street: Learning Rocks", "Chicken and Futility (Short)", "Community (TV Series)", "The To Do List", " Sesame Street (TV Series)", "Girls (TV Series)", "30 Rock (TV Series)", "Community: Abed's Master Key (TV Movie)", "CollegeHumor Originals (TV Series)", "Regular Show (TV Series)", "The Muppets", "Best Coast: Our Deal (Video Short)", "Moves: The Rise and Rise of the New Pornographer (Short)", "Robot Chicken: Star Wars Episode III (TV Movie)", "UCB Comedy Originals (TV Series)", "Mystery Team", "Human Gaint (TV Series)", "Late Night with Conan O'Brian (TV Series)", "Winner Takes All (TV Movie)"];
	
	var links = ["http://www.imdb.com/title/tt6105098/?ref_=nm_flmg_act_1", "http://www.imdb.com/title/tt3778644/?ref_=nm_flmg_act_2", "http://www.imdb.com/title/tt2250912/?ref_=nm_flmg_act_3", "http://www.imdb.com/title/tt4288182/?ref_=nm_flmg_act_4", "http://www.imdb.com/title/tt1305826/?ref_=nm_flmg_act_5", "http://www.imdb.com/title/tt3659388/?ref_=nm_flmg_act_7", "http://www.imdb.com/title/tt2268016/?ref_=nm_flmg_act_8", "http://www.imdb.com/title/tt2058221/?ref_=nm_flmg_act_9", "http://www.imdb.com/title/tt1722512/?ref_=nm_flmg_act_10", "http://www.imdb.com/title/tt2918436/?ref_=nm_flmg_act_11", "http://www.imdb.com/title/tt1698641/?ref_=nm_flmg_act_15", "http://www.imdb.com/title/tt4625330/?ref_=nm_flmg_act_16", "http://www.imdb.com/title/tt4039474/?ref_=nm_flmg_act_18", "http://www.imdb.com/title/tt1439629/?ref_=nm_flmg_act_19", "http://www.imdb.com/title/tt1758795/?ref_=nm_flmg_act_24", "http://www.imdb.com/title/tt0063951/?ref_=nm_flmg_act_25", "http://www.imdb.com/title/tt1723816/?ref_=nm_flmg_act_26", "http://www.imdb.com/title/tt0496424/?ref_=nm_flmg_act_27", "http://www.imdb.com/title/tt2148236/?ref_=nm_flmg_act_28", "http://www.imdb.com/title/tt2234701/?ref_=nm_flmg_act_29", "http://www.imdb.com/title/tt1710308/?ref_=nm_flmg_act_30", "http://www.imdb.com/title/tt1204342/?ref_=nm_flmg_act_31", "http://www.imdb.com/title/tt2016961/?ref_=nm_flmg_act_32", "http://www.imdb.com/title/tt1849823/?ref_=nm_flmg_act_33", "http://www.imdb.com/title/tt1691338/?ref_=nm_flmg_act_34", "http://www.imdb.com/title/tt3327536/?ref_=nm_flmg_act_38", "http://www.imdb.com/title/tt1237838/?ref_=nm_flmg_act_43", "http://www.imdb.com/title/tt0876298/?ref_=nm_flmg_act_56", "http://www.imdb.com/title/tt0106052/?ref_=nm_flmg_act_76", "http://www.imdb.com/title/tt0138942/?ref_=<nm_flmg_act_78></nm_flmg_act_78>"]

	var images = ["lionking.jpg", "solo.jpg", "spiderman.jpg", "atlanta.jpg", "adventuretime.jpg", "martian.jpg", "magicmike.jpg", "china.jpg", "ultimatespiderman.jpg", "lazaruseffect.jpg", "alexander.jpg", "learningrocks.jpg", "chicken.jpg", "community.jpg", "thetodolist.jpg", "sesamestreet.jpg", "girls.jpg", "30rock.jpg", "community.jpg", "choriginals.jpg", "regularshow.jpg", "muppets.jpg", "bestcoast.jpg", "riseandriseofporno.jpg", "robotchickensw3.jpg", "ucbcomedy.jpg", "mysteryteam.jpg", "humangiant.jpg", "conan.jpg", "winnertakesall.jpg"]

	for (var i= 0; i < links.length; i++){
		var  singleFilm = document.createElement('div');
		singleFilm.className = "film-holder";

		if(acting[i].indexOf("(") == -1){
			document.getElementById("movies-container").appendChild(singleFilm);
			singleFilm.style.backgroundImage = "url('../images/filmography/" + images[i] + "')";
			singleFilm.innerHTML = "<a href='" + links[i] + "'>" + acting[i] + "</a>";
		}
		else if(acting[i].indexOf("TV Movie") != -1){
			document.getElementById("movies-container").appendChild(singleFilm);
			var stoppingPoint = acting[i].indexOf(" (");
			var newString = acting[i].slice(0, stoppingPoint);
			singleFilm.style.backgroundImage = "url('../images/filmography/" + images[i] + "')";
			singleFilm.innerHTML = "<a href='" + links[i] + "'>" + newString + "</a>";
		}

		else if(acting[i].indexOf("TV Series") != -1){
			document.getElementById("tv-series-container").appendChild(singleFilm);
			var stoppingPoint = acting[i].indexOf(" (");
			var newString = acting[i].slice(0, stoppingPoint);
			singleFilm.style.backgroundImage = "url('../images/filmography/" + images[i] + "')";
			singleFilm.innerHTML = "<a href='" + links[i] + "'>" + newString + "</a>";
		}

		else if(acting[i].indexOf("TV Mini-Series") != -1){
			document.getElementById("tv-series-container").appendChild(singleFilm);
			var stoppingPoint = acting[i].indexOf(" (");
			var newString = acting[i].slice(0, stoppingPoint);
			singleFilm.style.backgroundImage = "url('../images/filmography/" + images[i] + "')";
			singleFilm.innerHTML = "<a href='" + links[i] + "'>" + newString + "</a>";
		}

		else if(acting[i].indexOf("Short") != -1){
			document.getElementById("shorts-container").appendChild(singleFilm);
			var stoppingPoint = acting[i].indexOf(" (");
			var newString = acting[i].slice(0, stoppingPoint);
			singleFilm.style.backgroundImage = "url('../images/filmography/" + images[i] + "')";
			singleFilm.innerHTML = "<a href='" + links[i] + "'>" + newString + "</a>";
		}

	}

}