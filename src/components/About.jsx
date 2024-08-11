import React, { useState } from "react";

const About = () => {
    const [isDetailsVisible, setDetailsVisible] = useState(false);

    const handleClick = () => {
        const element = document.getElementById('info');
        if (element.classList.contains('w3-hide')) {
            element.classList.replace('w3-hide', 'w3-show');
            setDetailsVisible(true);
        } else {
            element.classList.replace('w3-show', 'w3-hide');
            setDetailsVisible(false);
        }
    }

    return (
        <div className="w3-text-white" style={{ backgroundColor: '#04042b' }} >
            <div style={{ padding: '25px 40px' }}>
                <h1 className="w3-border-white w3-bottombar">Radhikesh Mishra</h1>
                <p>Full Stack Developer</p>
                <p className="" style={{ padding: '10px 15px' }} >
                    I’m a highly motivated, passionate developer who is always eager to learn new technologies and aim to utilize my skills to create something unique and valuable. I am confident in my ability to adapt to new technologies quickly, and I thrive in fast-paced learning and dynamic environments. I am a team player and enjoy collaborating with others to achieve goals. With my positive attitude, strong work ethic, and passion for learning, I am confident that I can make a valuable contribution to any team or project.
                </p>
                <button className="w3-teal" onClick={handleClick} style={{ border: 'none', padding: '10px' }}>
                    {isDetailsVisible ? "Hide Details" : "Show Details"}
                </button>
            </div>

            <div className="w3-text-white w3-black w3-hide" id="info" style={{ padding: '20px 25px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="w3-black">
                        <i className="fa-solid fa-phone"></i> Phone : 9910843745
                    </div>
                    <div>
                        <i className="fa-solid fa-envelope"></i> Email : Radhikes16@gmail.com
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div>
                        <i className="fa-brands fa-linkedin"></i> Linked In : <a href="https://www.linkedin.com/in/radhikesh-mishra-172467285" target="_blank" rel="noopener noreferrer">Radhikesh Mishra</a>
                    </div>
                    <div>
                        <i className="fa-brands fa-github"></i> Git Hub : <a href="https://github.com/Radhikesh-Mishra" target="_blank" rel="noopener noreferrer">Radhikesh Mishra</a>
                    </div>
                </div>
            </div>
            
        </div>
    )
};

export default About;
