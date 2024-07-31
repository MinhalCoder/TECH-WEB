import React from 'react';
import Share from '../Share/Share';
import RelatedPost from '../RelatedPost/RelatedPost';
import SinglePostCategories from '../SinglePostCategories/SinglePostCategories';
import CommentSec from '../Comments/CommentSec';
import { IoSearch } from "react-icons/io5";
import './SinglePostContent.css';

const SinglePostContent = () => {
  return (
    <div className="container singlePostContent mb-lg-5">
      <div className="row">
        <div className="col-8">
          <h1>Introduction</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime esse, excepturi, iste ipsum quos similique fugit adipisci aut repellendus corporis ipsa, laborum eos quaerat? Ut blanditiis, facere reiciendis odit reprehenderit tempore voluptates repudiandae non sapiente excepturi distinctio molestias nihil dolore!</p>
          <h1>The Importance of Responsive Design</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil nostrum molestias quia, dolore tempore molestiae aut laudantium dolor quaerat fugit optio enim ea in non quod alias quibusdam inventore error voluptas animi saepe! Doloremque alias nisi pariatur neque maiores consectetur nihil repudiandae, deleniti quae. Excepturi debitis eligendi porro tempore est.</p>
          <img src="assets/Images/img4.png" alt="" height={400} width={700} />
          {/* <h1>Implementing Responsive Design:</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit quae harum necessitatibus aperiam ab dicta similique nesciunt ullam molestiae.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit quae harum necessitatibus aperiam ab dicta similique nesciunt ullam molestiae.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus fugit quae harum necessitatibus aperiam ab dicta similique nesciunt ullam molestiae.</li>
          </ul> */}
          <h1>Embracing Minimalism</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat eos iure hic, accusamus quo impedit error doloribus ad culpa soluta rerum atque quod perspiciatis tenetur repudiandae! Minima doloremque consequuntur a aspernatur! Mollitia asperiores nihil consequuntur fuga similique incidunt, ipsam illo?</p>
          {/* <h1>Key Aspects of Minimalist Design:</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam id modi fuga eius officia illum magni, maiores repudiandae ipsum soluta.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam id modi fuga eius officia illum magni, maiores repudiandae ipsum soluta.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam id modi fuga eius officia illum magni, maiores repudiandae ipsum soluta.</li>
          </ul> */}
          <h1>Examples of Successful Minimalist Websites:</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est deleniti ad laborum, quisquam nobis deserunt, quos officiis praesentium explicabo, ab totam hic. Laudantium, corporis!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa est deleniti ad laborum, quisquam nobis deserunt, quos officiis praesentium explicabo, ab totam hic. Laudantium, corporis!</li>
          </ul>
          <img src="assets/Images/img6.png" alt="" height={400} width={700} />
          <h1>Leveraging Advanced Technologies</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit nobis possimus, perspiciatis maiores beatae vitae culpa eveniet deleniti est quod?</p>
          <h1>CSS Grid and Flex box:</h1>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit debitis eos aliquam aperiam! Delectus sit labore deleniti praesentium ullam unde nemo. Excepturi, ad nisi?</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt velit debitis eos aliquam aperiam! Delectus sit labore deleniti praesentium ullam unde nemo. Excepturi, ad nisi?</li>
          </ul>
          <h1>Conclusion</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam officia illo et, mollitia sapiente dolores nihil facere eligendi saepe cum dicta cupiditate molestias ad. Perspiciatis, odit corporis consectetur, sint eius ut magni, animi fugiat voluptatum in ipsa voluptates voluptas! Adipisci cum odit perspiciatis voluptas facilis consequatur maxime? Libero, est rerum.</p>
          <img src="assets/Images/img4.png" alt="" height={400} width={700} />
          <h1>Author Bio</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima sit ratione assumenda maxime id rerum doloribus cumque harum nam exercitationem delectus magni earum inventore dolorum, nihil illo. Necessitatibus voluptatibus, odit sunt magni sit a, eius, unde commodi hic rem non adipisci deleniti repellendus. Adipisci, nihil!</p>
        </div>
        <div className="col-4 singlepost-right">
          <Share />
          <RelatedPost />
          <SinglePostCategories />
          <img className='mt-5 mx-5' src="assets/Images/img7.png" alt="" width={300} />

          
    <h3 className="trending-main-heading mt-5 mx-5">Search</h3>
    <div className="singlePostSearch-bar search2bar-bg mt-3  singlePostSearch ">
      
              <IoSearch className="singlePostSearch-icon  " size={20} />

                <input type="text" id="singlePostSearch" className="form-control ps-3 bg-transparent   singlePostSearch-input" placeholder="Search" />
                </div>
          <CommentSec />
        </div>
      </div>
    </div>
  );
};

export default SinglePostContent;
