/* Copyright (c) 2021, ARTCOMPILER INC */
import React from 'react';
import * as d3 from 'd3';
import './style.css';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { Provider, useSelector, useDispatch } from 'react-redux';

const pointsSlice = createSlice({
  name: 'points',
  initialState: {
    points: 0,
  },
  reducers: {
    increment: (state) => {
      state.points += 1
    },
    decrement: (state) => {
      state.points -= 1
    },
    incrementByAmount: (state, action) => {
      state.points += action.points
    },
  },
});

const store = configureStore({
  reducer: {
    points: pointsSlice.reducer,
  },
});

const { increment, decrement, incrementByAmount } = pointsSlice.actions

function renderAttr(attr) {
  if (attr === undefined) {
    return {};
  }
  Object.keys(attr).forEach(key => {
    if (key.indexOf('on') === 0) {
      attr[key] = new Function('e', attr[key]);
    }
  });
  return attr;
}

function renderElts(data) {
  data = [].concat(data);
  const elts = [];
  let key = 1;
  data.forEach(d => {
    switch(d.type) {
    case 'input':
      elts.push(<input key={key++} {...renderAttr(d.attr)} />);
      break;
    case 'label':
      elts.push(<label key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</label>);
      break;
    case 'button':
      elts.push(<button key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</button>);
      break;
    case 'svg':
      elts.push(<svg key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</svg>);
      break;
    case 'img':
      elts.push(<img key={key++} {...renderAttr(d.attr)}/>);
      break;
    case 'path':
      elts.push(<path key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</path>);
      break;
    case 'code':
      elts.push(<code key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</code>);
      break;
    case 'a':
      elts.push(<a key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</a>);
      break;
    case 'ol':
      elts.push(<ol key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</ol>);
      break;
    case 'ul':
      elts.push(<ul key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</ul>);
      break;
    case 'li':
      elts.push(<li key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</li>);
      break;
    case 'title':
      document.title = renderElts(d.elts);
      break;
    case 'div':
      elts.push(<div key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</div>);
      break;
    case 'span':
      elts.push(<span key={key++} {...renderAttr(d.attr)} >{renderElts(d.elts)}</span>);
      break;
    case 'h3':
      elts.push(<h3 key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</h3>);
      break;
    case 'p':
      elts.push(<p key={key++} {...renderAttr(d.attr)}>{renderElts(d.elts)}</p>);
      break;
    default:
      elts.push(d);
      break;
    }
  });
  return elts;
}

window.showQuestion = () => {
  const data = {
    action: {
      type: 'gotoPage',
      pageName: 'question',
      index: window.gcexports.state.index + 1 || 1,
    }
  };
  window.gcexports.dispatcher.dispatch({[window.gcexports.id]: {
    data,
    recompileCode: true,
    dontUpdateID: false
  }});
};

window.showAnswer = (choice) => {
//  dispatch(increment());
  const data = {
    action: {
      type: 'gotoPage',
      pageName: 'answer',
      index: window.gcexports.state.index || 0,
      choice,
    }
  };
  window.gcexports.dispatcher.dispatch({[window.gcexports.id]: {
    data,
    recompileCode: true,
    dontUpdateID: false
  }});
};

window.gotoPage = (pageName) => {
  window.gcexports.dispatcher.dispatch({[window.gcexports.id]: {
    data: {
      action: {
        type: 'gotoPage',
        pageName,
      },
    },
    recompileCode: true,
    dontUpdateID: false
  }});
};

export class Viewer extends React.Component {
  componentDidMount() {
    document.title = "TickleHealth";
    d3.select('#graff-view').append('div').classed('done-rendering', true);
  }

  render() {
//    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const props = this.props;
    const obj = props.obj || {};
    const data = obj.status && [].concat(obj.data.data) || obj.data || {};
    const page = data.page || [];
    window.gcexports.state = data.state || {}
    const elts = renderElts(page);
    return (
      <Provider store={store}>
        <div className="max-w-md flex-1 border-2 m-4 shadow-lg rounded-md bg-white">
          <link rel="icon" type="image/png" href="/L141/favicon.png" />
          <link rel="stylesheet" href="/L141/style.css" />
          <img className="border-4 border-teal-600" src="/L141/logo.svg"></img>
          <div id="L141-content">
            {elts}
          </div>
        </div>
      </Provider>
    );
  }
};

window.gcexports.viewer = (function () {
  return {
    Viewer: Viewer,
  };
})();
