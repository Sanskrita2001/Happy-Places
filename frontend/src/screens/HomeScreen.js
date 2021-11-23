import React from 'react'

const HomeScreen = () => {
    return (
        <div className= "main-container">
            <section className="one relative mt-20">
                <img className="paperplane absolute z-20 top-12 right-20" src="https://imgur.com/2fLqy9q.png" alt="Paperplane" />
                <img className="home-bg-img" src="https://imgur.com/oeqleuG.png" alt="Home Backgroung Image" width="100%" height="100%" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5/6 w-11/12 backdrop-filter backdrop-blur-lg rounded-3xl border-2 border-solid border-white z-10 bg-gradient-to-br from bg-grey-500 bg-opacity-60 to bg-grey-500 bg-opacity-5"></div>
                <div className="home-content absolute z-10 top-40 left-40">
                    <h1 className="text-6xl font-black leading-normal">
                        Discover<br/>the World
                    </h1>
                    <h2 className="subheading mt-10 text-2xl font-medium">
                        WE SHALL NOT CEASE FROM EXPLORATION, <br/>
                        AND THE END OF ALL OUR EXPLORING WILL <br/>
                        BE TO ARRIVE WHERE WE STARTED AND <br/>
                        KNOW THE PLACE FOR THE FIRST TIME.<br/>
                    </h2>
                    <div className="tagline mt-10 text-3xl font-medium">
                        Let’s find the best place for your vacation!
                    </div>
                </div>
                <button className="Tour-Planner-btn absolute z-20 bottom-40 right-40 bg-white px-8 py-4 text-4xl font-semibold border-none rounded-full">Tour Planner</button>
            </section>
            <section className="two relative">
                <img className="bag absolute z-20 top-96 left-28" src="https://imgur.com/B4NkV09.png" alt="Bag"/>
                <img className="background-img" src="https://imgur.com/BxjAgHG.png" alt="About Image" width="100%" height="100%"/>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5/6 w-11/12 backdrop-filter backdrop-blur-lg rounded-3xl border-2 border-solid border-white z-10 bg-gradient-to-br from bg-grey-500 bg-opacity-60 to bg-grey-500 bg-opacity-5"></div>
                <div className="about-content absolute z-10 ml-20 mt-28 top-96 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="heading ml-4 text-6xl font-black">About Us</div>
                    <div className="subheading mt-10 text-3xl font-light text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ulla mcorper congue odio in maximus. In ullamcorper accumsan justo, id auctor magna faucibus eleifend. Duis eget metus felis scelerisque ultricies in eget nunc. Nullam malesuada, nisiet porta pellentesque, felis eros auctor orci, id mollis velit augue et justo. Aenean faucibus molestie metus euismod tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    </div>
                </div>   
            </section>
            <section className="three relative">
                <img className="compass absolute z-20 top-96 right-0" src="https://imgur.com/f1QLmye.png" alt="Compass"/>
                <img className="background-img" src="https://imgur.com/lGf1j7A.png" alt="Team Backgroung Image" width='100%' height='100%'/>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-5/6 w-11/12 backdrop-filter backdrop-blur-lg rounded-3xl border-2 border-solid border-white z-10 bg-gradient-to-br from bg-grey-500 bg-opacity-60 to bg-grey-500 bg-opacity-5"></div>
                <div className="team-content absolute z-10 ml-20 mt-28 top-96 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="heading ml-80 text-center text-6xl font-black">Team</div>
                    <div className="subheading mt-10 ml-10 left-0 text-3xl font-light text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ulla mcorper congue odio in maximus. In ullamcorper accumsan justo, id auctor magna faucibus eleifend. Duis eget metus felis scelerisque ultricies in eget nunc. Nullam malesuada, nisiet porta pellentesque, felis eros auctor orci, id mollis velit augue et justo. Aenean faucibus molestie metus euismod tincidunt. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. 
                    </div>
                </div>
            </section>
            <section className="four relative">
                <img className="background-img" src="https://imgur.com/3p5IvO9.png" alt="Testimonials Backgroung Image" width= "100%" height= "100%"/>
                <img class="map absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full" src="https://imgur.com/xLPwFlG.png" alt="Map"/>
                <div class="absolute flex self-center top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/3 h-80 w-11/12 backdrop-filter backdrop-blur-sm rounded-3xl border-2 border-solid border-black z-10 bg-gradient-to-br from bg-black bg-opacity-60 to bg-black bg-opacity-5">
                    <div class="parent h-5/6 w-11/12 justify-items-stretch self-center ml-14 mt-16 flex flex-wrap">
                        <div class="contentleft flex-1 -mt-11 items-start justify-start">
                            <div class="r1 flex gap-7 mt-10">
                                <img class="w-full h-full flex-1 self-center" src="https://imgur.com/Gvxwa7Q.png" alt="&#x1F4CD;"/>
                                <div class="w-full text-white text-xl font-medium flex-3">123, Park Avenue, Abc Street, <br/>Country, 12345, Z</div>
                            </div>
                            <div class="r2 flex gap-7 items-center mt-10">
                                <img class="w-full h-full flex-1 self-center" src="https://imgur.com/xhCeXT3.png" alt="&#128241;"/>
                                <div class="w-full text-white text-xl font-medium flex-3 mt-2">+91 9876543210</div>
                            </div>
                            <div class="r3 flex gap-7 items-center mt-10">
                                <a href="https://www.facebook.com/"><img class="w-full h-full self-center" src="https://imgur.com/aOiygHM.png" alt="f"/></a>
                                <a href="https://twitter.com/"><img class="w-full h-full self-center" src="https://imgur.com/sEvLXiS.png" alt="&#128038;"/></a>
                                <a href="https://www.linkedin.com/"><img class="w-full h-full self-center" src="https://imgur.com/uDpNovK.png" alt="in"/></a>
                            </div>
                        </div>
                        <div class="contentright flex-1 justify-end -mt-4">
                            <div class="r1 text-white font-semibold text-2xl text-center mb-2">
                                Leave us a message!
                            </div>
                            <div class="r2">
                                <input type="text" placeholder="Name" id="name" class="w-full h-10 border-2 rounded-lg border-solid border-white bg-transparent text-white mb-2 p-5"/>
                            </div>
                            <div class="r3">
                                <input type="email" placeholder="Email" id="email" class="w-full h-10 border-2 rounded-lg border-solid border-white bg-transparent text-white mb-2 p-5"/>
                            </div>
                            <div class="r4">
                                <textarea name="msg" id="msg" class="w-full h-20 border-2 rounded-lg border-solid border-white bg-transparent text-white mb-2 pl-5 pt-2">Write your message here</textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HomeScreen
