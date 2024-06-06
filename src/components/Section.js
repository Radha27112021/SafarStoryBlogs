import React from 'react';

const Section = () => {
  return (
    // Section starts here 
  <section className='section-container'>
    {/* Read our blog part */}
      <div className="container-1">
     <a href='#' className='read-more'>Read Our Blogs</a>
     </div>
     {/* Only text container */}
    <div className='container-2'>
  <h3>WEEKLY ARTICLES WITH INSIGHT INTO THE WEEKEND'S MESSAGE</h3>
    <p>Our blog takes the message from the weekend and lays out next right steps, so you can hear a message and do a message in practical ways.</p>
  </div>
  {/*First grid container contains 3 grids */}
  <div className='text-item'>
  <div class="item1">
  <img className="img-item1" src='https://plus.unsplash.com/premium_photo-1681010317870-44a7ca6f9bee?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
<div class="blog"><h5>Tomorrow's Intelligence: Navigating the Future of AI</h5>
<p>May 20,2024</p>
<a href="#">VIEW THESE RESOURCES</a>
</div>
  </div>
  <div class="item2">
<img className="img-item1" src='https://images.unsplash.com/photo-1675557010061-315772f6efef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
<div class="blog"><h5>Conversational Alchemy: The Magic of ChatGPT</h5>
<p>March 25,2024</p>
<a href="#">VIEW THESE RESOURCES</a>
</div>
  </div>
  <div class="item3">
     <img className="img-item1" src='https://plus.unsplash.com/premium_photo-1681710503950-6e00bf2f7ffb?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
  <div class="blog"><h5>Beyond the Hype: Realising AI's Actual Potential</h5>
<p>May 20,2024</p>
<a href="#">VIEW THESE RESOURCES</a>
</div>
  </div>
  </div>
  <div className='text-item'>
  <div class="item1">
  <img className="img-item1" src='https://plus.unsplash.com/premium_photo-1664391625525-15acc44f8fa2?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
<div class="blog"><h5>AutomateSphere</h5>
<p>April 21,2024</p>
<a href="#">VIEW THESE RESOURCES</a>
</div>
  </div>
  <div class="item2">
<img className="img-item1" src='https://images.unsplash.com/photo-1649677566238-07c9f71023e6?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
<div class="blog"><h5>MuleMind: Navigating the World of MuleSoft"</h5>
<p>March 25,2024</p>
<a href="#">VIEW THESE RESOURCES</a>
</div>
  </div>
  <div class="item3">
     <img className="img-item1" src='https://plus.unsplash.com/premium_photo-1688678097958-0620a452f0e8?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
  <div class="blog"><h5>ConnectTech: Exploring Technology's Role in Social Networks</h5>
<p>May 20,2024</p>
<a href="#">VIEW THESE RESOURCES</a>
</div>
  </div>
  </div>
{/* This is a sample blog container */}
<div class="blog-container">
  <header class="header"><h3>Write your own blogs</h3>
  <button className='guest-button btn'>Subscribe for more</button>
  </header>
  <aside class="sidebar"><h2>Social Networking helps in Society</h2>
  </aside>
  <main class="main-content">
    In the dynamic landscape of contemporary society, social networking stands as a transformative force, reshaping the way we interact and 
    engage with one another. These digital platforms serve as vibrant arenas where ideas are exchanged, relationships are forged, and voices are 
    amplified. From sparking grassroots movements to fostering global solidarity, social networking has emerged as a potent tool for driving 
    societal evolution. Its influence transcends boundaries, connecting individuals across cultures and continents, and propelling us towards a 
    more interconnected and empathetic world.<p>
     In the digital age, social networking platforms revolutionize communication, empower voices, 
    and catalyze collective action, driving positive change and societal advancement.</p>  <h2>-By SafarStroyBlogs</h2>
  </main>
</div>
 </section>//section ends here
  );
};

export default Section;
