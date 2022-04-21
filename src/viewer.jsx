/* Copyright (c) 2021, ARTCOMPILER INC */
import * as React from 'react';
import * as d3 from 'd3';
import './style.css';

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

window.start = () => {
};

window.signIn = () => {
  const state = window.gcexports.state;
  const number =
        d3.select("input#mobile1").node().value
        + d3.select("input#mobile2").node().value
        + d3.select("input#mobile3").node().value
        + d3.select("input#mobile4").node().value;
  const data = {
    action: {
      type: 'signIn',
      data: {
        number,
      },
    },
    state,
  };
  window.gcexports.dispatcher.dispatch({[window.gcexports.id]: {
    data,
    recompileCode: true,
    dontUpdateID: false
  }});
};

window.finishSignIn = () => {
  const state = window.gcexports.state;
  const jwt = window.gcexports.jwt;
  const passcode =
        d3.select("input#field1").node().value
        + d3.select("input#field2").node().value
        + d3.select("input#field3").node().value
        + d3.select("input#field4").node().value;
  const data = {
    action: {
      type: 'finishSignIn',
      data: {
        jwt,
        passcode,
      },
    },
    state,
  };
  window.gcexports.dispatcher.dispatch({[window.gcexports.id]: {
    data,
    recompileCode: true,
    dontUpdateID: false
  }});
};

window.showQuestion = () => {
  const index = window.gcexports.state.index + 1 || 1;
  const state = window.gcexports.state;
  const data = {
    action: {
      type: 'gotoPage',
      pageName: 'question',
      index,
    },
    state,
  };
  window.gcexports.dispatcher.dispatch({[window.gcexports.id]: {
    data,
    recompileCode: true,
    dontUpdateID: false
  }});
};

window.showAnswer = (choice) => {
  const state = window.gcexports.state;
  const data = {
    action: {
      type: 'gotoPage',
      pageName: 'answer',
      index: window.gcexports.state.index || 0,
      choice,
    },
    state,
  };
  window.gcexports.dispatcher.dispatch({[window.gcexports.id]: {
    data,
    recompileCode: true,
    dontUpdateID: false
  }});
};

window.gotoPage = (pageName) => {
  const state = window.gcexports.state;
  const jwt = window.gcexports.jwt;
  window.gcexports.dispatcher.dispatch({[window.gcexports.id]: {
    data: {
      jwt,
      action: {
        type: 'gotoPage',
        pageName,
      },
      state,
    },
    recompileCode: true,
    dontUpdateID: false
  }});
};

window.startTickleHealth = () => {
  const jwt = window.gcexports.jwt;
  const state = window.gcexports.state;
  window.gcexports.dispatcher.dispatch({[window.gcexports.id]: {
    data: {
      jwt,
      action: {
        type: 'gotoPage',
        pageName: 'welcome',
      },
      state,
    },
    recompileCode: true,
    dontUpdateID: false
  }});
};

export class Viewer extends React.Component {
  componentDidMount() {
    window.gcexports.jwt = localStorage.getItem('jwt');
    document.title = "TickleHealth";
    d3.select('#graff-view').append('div').classed('done-rendering', true);
  }

  render() {
    const props = this.props;
    const obj = props.obj || {};
    const data = obj.status && [].concat(obj.data.data) || obj.data || {};
    const page = data.page || [];
    const state = data.state || {};
    const userID = data.id;
    const number = data.number;
    const jwt = data.jwt;
    if (jwt) {
      window.gcexports.jwt = jwt;
      localStorage.setItem("jwt", jwt);
      localStorage.setItem("number", number);
      localStorage.setItem("userID", userID);
    }
    window.gcexports.state = state;
    const elts = renderElts(page);
    return (
      <div className="max-w-md flex-1 m-4 rounded-none bg-white">
        <link rel="icon" type="image/png" href="/L141/favicon.png" />
        <link rel="stylesheet" href="/L141/style.css" />
        <img className="" src="/L141/logo.svg"></img>
        <div id="L141-content">
          {elts}
        </div>
      </div>
    );
  }
};

window.gcexports.viewer = (function () {
  return {
    Viewer: Viewer,
  };
})();
