
//include images into your bundle
import React, { useState,useEffect } from "react";


//create your first component
const Home = () => {
	const [glow,setGlow] = useState("");
	
	const changeLight =()=>{
		if (glow == "red"){
			setGlow("yellow")
		}else if(glow == "yellow"){
			setGlow("green")
		}else{
			setGlow("red")
		}

	};
	
	useEffect(() => {
		setTimeout(() => {
		  changeLight();
		}, 1000);
	  });

	return (
		<div className="container-fluid">
			<div className="row mt-5">
				<div className="col-5"></div>
				<div className="col-1 parentDiv">					
					<div className="text-center"><span className={`dot red ${glow=="red"?"glow":""}`} onClick={() => setGlow("red")}></span></div>
					<div className="text-center"><span className={`dot yellow ${glow=="yellow"?"glow":""}`} onClick={() => setGlow("yellow")}></span></div>
					<div className="text-center"><span className={`dot green ${glow=="green"?"glow":""}`} onClick={() => setGlow("green")}></span></div>
				</div>
			</div>
		</div>
	);
};

export default Home;
