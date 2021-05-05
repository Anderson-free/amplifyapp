import React from 'react';
 const Swap = () => {
  console.log('sdfsdf');
  return (
    <div id='swap' style={{ 'height':'100%','backgroundColor':'black'}}>
      <div className='container'>
      <br/><br/><br/><br/><br/><br/>
        <div className='col-md-6 col-md-offset-3'>
          <div className='col-md-12'>
            <span  style={{'fontSize':'40px'}}>Swap</span>
          </div>
          <br/><br/><br/><br/>
          <div className='col-md-12' style={{'border':'1px groove white','borderRadius':'5px'}}>
            <div className='col-md-6'>
              <span style={{'fontSize':'10px'}}>From</span><br/>
              <span style={{'fontSize':'20px'}}>0.022</span><br/>
              <span style={{'fontSize':'10px'}}>Balance:&nbsp;&nbsp;70.42</span>
            </div>
            <div className='col-md-6' style={{'textAlign':'right'}}>
              <span>Max&nbsp;&nbsp;&nbsp;</span>
              <select className=' form-control-lg input-lg' style={{'margin-top':'5px','background-color':'black'}}>
                  <option value='eth'>ETH</option>
                  <option value='eth'>ETH1</option>
                  <option value='eth'>ETH2</option>
                  <option value='eth'>ETH3</option>
              </select>
            </div>
          </div>
          <p>&nbsp;</p>
          <p style={{textAlign:'center','margin-top':'-19px'}}><i className="fa fa-long-arrow-up"></i><i className="fa fa-long-arrow-down"></i></p>
          <div className='col-md-12' style={{'border':'1px groove white','borderRadius':'5px'}}>
            <div className='col-md-6'>
              <span style={{'fontSize':'10px'}}>To</span><br/>
              <span style={{'fontSize':'20px'}}>9.74</span><br/>
              <span style={{'fontSize':'10px'}}>Balance:&nbsp;&nbsp;70.42</span>
            </div>
            <div className='col-md-6' style={{'textAlign':'right'}}>
              <span>Max&nbsp;&nbsp;&nbsp;</span>
              <select className=' form-control-lg input-lg' style={{'margin-top':'5px','background-color':'black'}}>
                  <option value='eth'>ETH</option>
                  <option value='eth'>ETH1</option>
                  <option value='eth'>ETH2</option>
                  <option value='eth'>ETH3</option>
              </select>
            </div>
          </div>
          {/* <div className='col-md-12'> */}
          <br/><br/><br/><br/>
          <span>Price</span>
          <br/><br/>
          <span></span>
            <button className='form-control input-lg' style={{'backgroundColor':'yellow'}}>Swap</button>
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}
export default Swap