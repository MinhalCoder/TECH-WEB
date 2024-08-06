import './Card.css'

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col">
            <div className="card">
  <p>"Implementing this  has slashed our response times and delighted our users. It's a game-changer for client interactions."</p>
  <div className="card-footer d-flex ">
   <img className='card-img' src="assets/Images/author2.png" alt="" />
   <div className="card-author-info">
    <p className='aboutUsMain-name'>Richard Adams</p>
    <p className='aboutUsMain-company'>Ops Director, RetailPro Solutions</p>
   </div>
  </div>
</div>
            </div>
        </div>
      </div>
    </>
)
}

export default Card