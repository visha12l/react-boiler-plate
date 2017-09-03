import React from 'react';
import ReactDOM from 'react-dom';
var underscore = require('underscore');
import PropTypes from 'prop-types';

export default class SelectComponent extends React.Component {
    constructor(props) {
        super(props);
        this.closeSelectDropdown = this.closeSelectDropdown.bind(this);
        this.state = {
            selectListDropdown: false, //initial state of dropdown
        };
    }

   componentWillMount () {
      document.addEventListener('click',this.closeSelectDropdown);
   }

   componentWillUnmount () {
      document.removeEventListener('click',this.closeSelectDropdown);
   }

   openSelectDropdown () {
       this.setState({
          selectListDropdown: true,
       });
   }

   selectValue (listValue) {
       this.refs.countryInput.value = listValue; //storing the clicked value in input
       this.setState({
           selectListDropdown: false, //close the list
       });
   }

    closeSelectDropdown (event) { //code for closing the selectList
        const area = ReactDOM.findDOMNode(this.refs.selectionarea); //react function to calculate the selectionArea
        if(area && !area.contains(event.target)) { // except area and avoid event.target area
            this.setState({
                selectListDropdown: false, //close the list
            });
        }
    }

    closeComponent () {
        this.props.toggleSelectList();
    }

    render() {
        //need to implement autocomplete functionality for showing countryList
        let countryListArray = this.props.listData;
        return (
            <div className="App">
                <div className="App-header clearfix">
                    <h2 className="pull-left">{this.props.selectListName} SELECT DROPDWON</h2>
                    <a  className="pull-right" onClick={this.closeComponent.bind(this)}>close {this.props.selectListName} Component</a>
                </div>
                <div className="selectListWrap">
                    <div ref='selectionarea' className='selectionarea'>
                        <input
                            type="text"
                            ref="countryInput"
                            placeholder={this.props.placeholder}
                            onFocus={this.openSelectDropdown.bind(this)}
                        />
                        {this.state.selectListDropdown &&
                            <ul className='contryListing'>
                                {underscore.map(countryListArray, (list, key) =>
                                    <li key={key} onClick={this.selectValue.bind(this, list.name)}>{list.name}</li>)
                                }
                            </ul>
                        }
                    </div>
                </div>
            </div>
        );
  }
}

SelectComponent.propTypes = {
    placeholder: PropTypes.string.isRequired,
    selectListName: PropTypes.string.isRequired
}
