console.log("Hello World from main.js!");

var lizPhone = document.querySelector(".left");
var lizComputer = document.querySelector(".right");
var kenAnimationsOne = document.querySelector(".ken-animations-one");
var kenAnimationsTwo = document.querySelector(".ken-animations-two");

function lizPhoneAnimation() {
	var lizPhoneTimeline = new TimelineMax();

	lizPhoneTimeline
		.to(".liz-phone-arm", 0.45, 
				{	x: "-0.1vw",
					y: "0.2vw",
					rotation: "34deg",
					yoyo: true
				}, .1)
		.to(".phone-pupils", 0.2,
				{	x: "+=3vw",
				}, .0)
		.to(".liz-left-hand-phone", 0.45, 
				{	ease: Power0.easeNone,
					rotation: "-6deg",
					repeat: 3,
					yoyo: true 
				}, 0.4)
}

function lizComputerAnimation() {
	var lizComputerTimeline = new TimelineMax();

	lizComputerTimeline
		.to(".liz-computer-pupils", 0.3, {y: "-=5vw"}, 0)
		.to(".liz-computer-gesture", 0.6,
			{	rotation: "47deg",
				translateX: "-0.29vw",
				translateY: "0.21vw"
			}, 0.2)
		.fromTo(".liz-computer-left-lower-arm", 0.5,
				{	translateX: "-0.29vw",
					translateY: "-0.3vw",
					rotation: "290deg"
				},
				{ 	translateX: "-0.29vw",
					translateY: "-0.3vw",
					rotation: "90deg"

				}, 0.3)
		.to(".liz-computer-gesture-hand", 0.3,
			{	rotation: "-44.4deg"
			}, 0.5)
		.to(".liz-sitting-arm-container", 0.15,
			{ y: "-=4vw",
				yoyo: true}, .9)
}

function kensBouncing() {
	var kenTimelines = new TimelineMax();

	kenTimelines
		.staggerTo(".ken-bouncing", 1.5,
			{y: "+=646.6vw"}, 1.5)
		.staggerTo(".ken-bouncing", 1.5, 
			{ 	y: "-=646.6vw",
			 	yoyo: true,
			 	repeat: 5},
			 	1.5)
		.staggerTo(".ken-bouncing", 1.5,
			{y: "-=646.6vw"}, 1.5)
	console.log("kensBouncing");
}

function kenRunning(){
	var kenTimeline = new TimelineMax();

	kenTimeline
		.to(".ken-running", .45, 
			{ 	marginTop: "-=4vw",
				yoyo: true,
				repeat: 15}, 0)
		.to(".ken-running", 6, 
			{	marginLeft: "+=130vw",
				ease: Power0.easeNone}, 0)
		.to(".foreground-arm", 1,
			{	rotation: "-=117deg"}, 0)
		.to(".foreground-arm", 1,
				{	rotation: "+=127deg",
					yoyo: true,
					repeat: 10,
					delay: .45,
					ease: Power0.easeNone}, 0) 
		.to(".background-arm", 1,
			{	rotation: "+=197deg"}, 0)
		.to(".background-arm", 1,
				{	rotation: "-=167deg",
					yoyo: true,
					repeat: 10,
					delay: .45,
					ease: Power0.easeNone}, 0)
		.to(".foreground-leg") 
	console.log("ken running");
}



kenAnimationsTwo.addEventListener("click", kenRunning);
kenAnimationsOne.addEventListener("click", kensBouncing);
lizPhone.addEventListener("click", lizPhoneAnimation);
lizComputer.addEventListener("click", lizComputerAnimation);
