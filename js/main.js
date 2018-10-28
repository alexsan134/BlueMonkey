//SideNav
g("#menuBtn").event("click",() =>{
	g(".sideNav").css("display:block");
	g("main").animates("filter:blur(3px);transform:scale(0.95, 0.95)");
	setTimeout(() =>{
		g("#shadow").animates("opacity:1", 700);
		g("#contain").animates("right:0");		
	}, 500)
});

g("#shadow").event("click",() =>{
	g("#shadow").animates("opacity:0", 700);
	g("#contain").css("right:-300px");
	g("main").animates("filter:none;transform:none");
	setTimeout(() =>{
		g(".sideNav").css("display:none");		
	}, 700)
});

