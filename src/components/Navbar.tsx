import React from 'react'


const Navbar = () => {
  return (
    <nav>
        <div className="container">
            <div className='logo'>
                Gameelol
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Our Blog</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact Us</a></li>
                <li>
                    <a href="#">More Links</a>
                    <div>
                        <img src="https://support-leagueoflegends.riotgames.com/hc/article_attachments/7396097936659/star-guardian-2022-exclusive-pack.png" alt="" />
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Home</a></li>
                        </ul>
                        <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Home</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar