import React from 'react';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      total: 0,
    },
    this.handleInputChange = this.handleInputChange.bind(this);
    this.calculate = this.calculate.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state))
  }

  calculate(balance, rate, term) {
    console.log('it works');
    // var balance = this.state.balance;
    // var rate = this.state.rate;
    // var term = this.state.term;
    var total;// = this.state.total;

    var intRate = rate / 100 / 12;
    var totalMonths = term * 12;
    var numerator = intRate * Math.pow(1 + intRate, totalMonths);
    var denominator = Math.pow(1 + intRate, totalMonths) - 1;
    total = balance * (numerator / denominator);

    this.setState({
      balance,
      rate,
      term,
      total
    }, () => console.log(this.state));
  }

  handleClick(e) {
    e.preventDefault();
    var balance = this.state.balance;
    var rate = this.state.rate;
    var term = this.state.term;

    this.calculate(balance, rate, term);
  }
  
  render() {
    return (
      <div className="container">
        <form>
          <h1 className="header text-center"> Mortgage Calculator</h1>
          <hr />
          <h5 className='text-dark'>Loan Balance</h5>
          <div className="form-group">
            <input type="number" className="form-control" name="balance" defaultValue={this.state.balance} placeholder="Balance" onChange={this.handleInputChange}></input>
          </div>
          <h5 className='text-dark'>Interest Rate (%)</h5>
          <div className="form-group">
            <input type="number" className="form-control" name="rate" defaultValue={this.state.rate} placeholder="Rate" step="0.01" onChange={this.handleInputChange}></input>
          </div>
          <div>
            <h5 className="term">Loan Term in Years</h5>
            <select name="term" className="form-control form-control-lg custom-select custom-select-lg mb-3" onChange={this.handleInputChange}>
              <option value="15">15</option>
              <option value="30">30</option>
            </select>
          </div>
          <hr />
          <div> 
            <button name="submit" className="btn btn-primary btn-block" onClick={this.handleClick}>Calculate Now</button>
          </div>
        </form>
        <div name="output" id="output" className="alert alert-success card-header bg-secondary text-center">
          Your calculated mortgage is ${this.state.total.toFixed(2)}
        </div>
      </div>
    );
  }
}
//math.pow
//Return the value of the number 4 to the power of 3 (4*4*4):


