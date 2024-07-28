import './Card.css'

const Card = () => {
  return (
    <>
      <div className="container">
        <div className="row">
            <div className="col">
            <div class="card">
  <p>"Implementing this  has slashed our response times and delighted our users. It's a game-changer for client interactions."</p>
  <div class="card-footer d-flex ">
   <img src="assets/Images/author2.png" alt="" />
   <div className="author-info">
    <p className='aboutUsMain-name'>Sarah Kline</p>
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