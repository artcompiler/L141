/* Copyright (c) 2021, ARTCOMPILER INC */
import {assert, message, messages, reserveCodeRange} from "./share.js";
import {
  Checker as BasisChecker,
  Transformer as BasisTransformer,
  Compiler as BasisCompiler,
  Renderer as BasisRenderer,
} from '@graffiticode/basis';
import fs from 'fs';
import postcss from 'postcss';
import postcssjs from 'postcss-js';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export class Checker extends BasisChecker {
  HELLO(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  ENCODE_DATA(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  LABEL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [];
        const val = node;
        resume(err, val);
      });
    });
  }
  LOCATION(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [];
        const val = node;
        resume(err, val);
      });
    });
  }
  ONCLICK(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
      const err = [];
      const val = node;
      resume(err, val);
      });
    });
  }
  BORDER(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
      const err = [];
      const val = node;
      resume(err, val);
      });
    });
  }
  BUTTON(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  PRIMARY(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  OPTION_A(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  OPTION_B(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  OPTION_C(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  ROUNDED_SM(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  ROUNDED_MD(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  ROUNDED_LG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  ROUNDED_FULL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  UPPERCASE(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  LOWERCASE(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  CAPITALIZE(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  NORMAL_CASE(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  SHADOW(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  H_GRADIENT(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  V_GRADIENT(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  RAISED_BOTTOM(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  DIV(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
}

function attrFromVal(val) {
  let attr;
  if (typeof val === 'string') {
    attr = {
      'className': val,
    };
  } else {
    attr = {};
    Object.keys(val).forEach(key => {
      if (key === 'class') {
        attr['className'] = val[key];
      } else {
        const parts = key.split('-');
        let name = parts.shift();
        parts.forEach(part => {
          name += part.charAt(0).toUpperCase() + part.slice(1);
        });
        attr[name] = val[key];
      }
    });
  }
  return attr;
}

function attrsFromVal(val, attrs = {}) {
  if (typeof val === 'string') {
    attrs.className = val + ' ' + (attrs.className || '');
  } else if (val instanceof Array) {
    val.forEach((v) => {
      attrs = attrsFromVal(v, attrs);
    });
  } else {
    Object.keys(val).forEach(key => {
      if (key === 'class') {
        attrs.className = val[key] + ' ' + (attrs.className || '');
      } else {
        const parts = key.split('-');
        let name = parts.shift();
        parts.forEach(part => {
          name += part.charAt(0).toUpperCase() + part.slice(1);
        });
        attrs[name] = val[key];
      }
    });
  }
  return attrs;
}

const colors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose'
];

export class Transformer extends BasisTransformer {
  HELLO(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = `hello, ${v0}!`;
      resume(err, val);
    });
  }

  ENCODE_DATA(node, options, resume) {
    // FIXME Construct and post a task to the root store and return the taskID.
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = 'abc123';
      resume(err, val);
    });
  }

  QUIZ(node, options, resume) {
    try {
      const err = [];
      const val = this.renderMultipleChoiceQuestion();
      resume(err, val);
    } catch (x) {
      resume(x.message);
    }
  }

  SAMPLE_DATA(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = v0;
      resume(err, val);
    });
  }

  renderMultipleChoiceQuestion(attrs, data) {
    const self = this;
    const renderChoice = (choice) => {
      return {
        "type": "div",
        "attr": {},
        "elts": [
          {
            "type": "input",
            "attr": {
              "type": "radio",
              "name": "quiz1",
              "onInput": `gotoPage('${choice.feedback}')`,
            }
          },
          {
            "type": "label",
            "attr": {
              "className": "px-2 "
            },
            "elts": choice.response,
          }
        ]
      };
    };
    
    const choices = [];
    data.choices.forEach((choice) => {
      choices.push(renderChoice(choice));
    });
    const question = {
      "type": "div",
      "attr": {
        "className": "pb-4"
      },
      "elts": [{
        "type": "h3",
        "attr": {
          "className": "text-2xl pb-4"
        },
        "elts": [
          data.context,
        ]
      }, ...choices
    ]};
    return question;
  }

  MULTIPLE_CHOICE(node, options, resume) {
    try {
      this.visit(node.elts[0], options, async (e0, v0) => {
        v0 = [].concat(v0);  // Make sure v0 is an array.
        this.visit(node.elts[1], options, async (e1, v1) => {
          const err = [].concat(e0).concat(e1);
          const val = this.renderMultipleChoiceQuestion(v0, v1);
          resume(err, val);
        });
      });
    } catch (x) {
      resume(x.message);
    }
  }

  MULTIPLE_CHOICE_FEEDBACK(node, options, resume) {
    try {
      this.visit(node.elts[0], options, async (e0, v0) => {
        v0 = [].concat(v0);  // Make sure v0 is an array.
        const err = [].concat(e0);
        const val = this.renderMultipleChoiceQuestion(v0);
        resume(err, val);
      });
    } catch (x) {
      resume(x.message);
    }
  }

  LABEL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0 = [].concat(v0);  // Make sure v0 is an array.
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "label",
          attr: attrsFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  INPUT(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "input",
        attr: attrsFromVal(v0),
      };
      resume(err, val);
    });
  }

  LOCATION(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      if (e0 && e0.length) {
        resume(e0);
      }
      this.visit(node.elts[1], options, async (e1, v1) => {
        options.location = `location.href=\"${v0}\"xxx`;
        const err = [].concat(e0).concat(e1);
        const val = v1;
        resume(err, val);
      });
    });
  }

  ONCLICK(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0 = [].concat(v0);  // Make sure v0 is an array.
      this.visit(node.elts[1], options, async (e1, v1) => {
        const attrs = {};
        v0.forEach((v) => {
          attrs.onClick = v;
        });
        v1.attr = attrsFromVal(attrs, v1.attr);
        const err = [].concat(e0).concat(e1);
        const val = v1;
        resume(err, val);
      });
    });
  }

  BORDER(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0 = [].concat(v0);  // Make sure v0 is an array.
      this.visit(node.elts[1], options, async (e1, v1) => {
        const attrs = [];
        v0.forEach((v) => {
          if (Number.isInteger(v)) {
            attrs.push(`border-${v}`);
          } else if (colors.includes(v.split('-')[0])){
            attrs.push(`border-${v}`);
          } else {
            attrs.push(v);
          }
        });
        v1.attr = attrsFromVal(attrs, v1.attr);
        const err = [].concat(e0).concat(e1);
        const val = v1;
        resume(err, val);
      });
    });
  }

  BUTTON(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "button",
        elts: v0,
        attr: attrsFromVal('text-base py-2 px-3'),
      };
      resume(err, val);
    });
  }

  PRIMARY(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('bg-gray-600 text-base py-2 px-3 text-white', v0.attr);
      const err = [].concat(e0);
      const val = v0;
      resume(err, val);
    });
  }

  OPTION_A(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('bg-gray-200 text-base py-2 px-3 text-black', v0.attr);
      const err = [].concat(e0);
      const val = v0;
      resume(err, val);
    });
  }

  OPTION_B(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('border border-gray-600 bg-white text-base py-2 px-3 text-black', v0.attr);
      const err = [].concat(e0);
      const val = v0;
      resume(err, val);
    });
  }

  OPTION_C(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('border-2 border-gray-400 bg-white text-base py-2 px-3 text-black', v0.attr);
      const err = [].concat(e0);
      const val = v0;
      resume(err, val);
    });
  }

  ROUNDED_SM(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  ROUNDED_MD(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('rounded-md', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  ROUNDED_LG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('rounded-lg', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  ROUNDED_FULL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('rounded-full', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  UPPERCASE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('uppercase', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  LOWERCASE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('lowercase', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  CAPITALIZE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('capitalize', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  NORMAL_CASE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('normal-case', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  SHADOW(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('shadow-lg', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  H_GRADIENT(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('bg-gradient-to-r from-white', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  V_GRADIENT(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('bg-gradient-to-t from-white', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  RAISED_BOTTOM(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('border-b-4', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  RAISED_TOP(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('border-t-4', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  IMG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "img",
        attr: attrFromVal(v0),
      };
      resume(err, val);
    });
  }

  SVG(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "svg",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  PATH(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "path",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  CODE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "code",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  SPAN(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "span",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  P(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "p",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  A(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "a",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  OL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "ol",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  UL(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "ul",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  LI(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "li",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  H3(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "h3",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  TITLE(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        v1.elts.unshift({
          type: "title",
          elts: v0,
        });
        const err = [].concat(e0).concat(e1);
        const val = v1;
        resume(err, val);
      });
    });
  }

  DIV(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      this.visit(node.elts[1], options, async (e1, v1) => {
        const err = [].concat(e0).concat(e1);
        const val = {
          type: "div",
          attr: attrFromVal(v0),
          elts: v1,
        };
        resume(err, val);
      });
    });
  }

  LIST(node, options, resume) {
    let err = [];
    let val = [];
    if (node.elts.length === 0) {
      resume(err, val);
    } else {
      for (let i = 0; i < node.elts.length; i++) {
        let elt = node.elts[i];
        options = Object.assign({}, options, { key: i });
        this.visit(elt, options, (e0, v0) => {
          err = err.concat(e0);
          val[i] = v0;
          if (Object.keys(val).length === node.elts.length) {
            resume(err, val);
          }
        });
      }
    }
  }

  dumpPool() {
    Object.keys(this.nodePool).forEach((key) => {
      console.log(`${key} => ${JSON.stringify(this.nodePool[key], null, 2)}`);
    });
  }
  
  PROG(node, options, resume) {
    if (!options) {
      options = {};
    }
    this.visit(node.elts[0], options, (e0, v0) => {
      const err = e0;
      let val = v0.pop();  // Return the value of the last expression.
//      console.log("PROG() val=" + JSON.stringify(val, null, 2));
      console.log("PROG() options=" + JSON.stringify(options, null, 2));
      if (options.data && options.data.type === 'gotoPage') {
        val = val.pages[options.data.pageName];
      } else {
        val = val.pages.start;
      }
      resume(err, val);
    });
  }
}

const DEBUGGING = process.env.DEBUGGING === 'true';

export class Renderer extends BasisRenderer {
  constructor(data) {
    super();
    this.data = data;
  }
  render(options, resume) {
    // Do some rendering here.
    const err = [];
    const val = {
      data: this.data,
      errors: [],
    };
    resume(err, val);
    //   });
    // });
  }
}

class Compiler extends BasisCompiler {
  constructor() {
    super({
      langID: 141,
      version: 'v0.0.1',
      Checker: Checker,
      Transformer: Transformer,
      Renderer: Renderer,
    });
  }
};

export const compiler = new Compiler();

