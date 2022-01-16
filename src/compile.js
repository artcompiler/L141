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
  SMALL_ROUNDED(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  MEDIUM_ROUNDED(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  LARGE_ROUNDED(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = node;
      resume(err, val);
    });
  }
  FULL_ROUNDED(node, options, resume) {
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
  SHADOW(node, options, resume){
    this.visit(node.elts[0], options, async(e0, v0) => {
      const err = [];
      const val = node;
      resume(err,val);
    });
  }
  GRADIENT(node, options, resume){
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

export class Transformer extends BasisTransformer {
  HELLO(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [];
      const val = `hello, ${v0}!`;
      resume(err, val);
    });
  }

  INPUT(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "input",
        attr: attrFromVal(v0),
      };
      resume(err, val);
    });
  }

  BUTTON(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      const err = [].concat(e0);
      const val = {
        type: "button",
        elts: v0,
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

  SMALL_ROUNDED(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('rounded-sm', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  MEDIUM_ROUNDED(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('rounded-md', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  LARGE_ROUNDED(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('rounded-lg', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  FULL_ROUNDED(node, options, resume) {
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

  SHADOW(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('shadow-lg', v0.attr);
      const err = [];
      const val = v0;
      resume(err, val);
    });
  }

  GRADIENT(node, options, resume) {
    this.visit(node.elts[0], options, async (e0, v0) => {
      v0.attr = attrsFromVal('bg-gradient-to-r from-white', v0.attr);
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
        console.log("a() val=" + JSON.stringify(val, null, 2));
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
      const err = [].concat(e0);
      const val = {
        type: "h3",
        elts: v0,
      };
      resume(err, val);
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

  // Debugging
  LIST(node, options, resume) {
    let err = [];
    let val = [];
    if (node.elts.length === 0) {
      resume(err, val);
    } else {
      for (let i = 0; i < node.elts.length; i++) {
        let elt = node.elts[i];
        this.visit(elt, options, (e0, v0) => {
          err = err.concat(e0);
          val.push(v0);
          if (val.length === node.elts.length) {
            resume(err, val);
          }
        });
      }
    }
  }

  PROG(node, options, resume) {
    if (!options) {
      options = {};
    }
    this.visit(node.elts[0], options, (e0, v0) => {
      const err = e0;
      const val = v0.pop();  // Return the value of the last expression.
      resume(err, val);
    });
  }
}

export class Renderer extends BasisRenderer {
  constructor(data) {
    super();
    this.data = data;
  }
  render(options, resume) {
    // Do some rendering here.
    // THIS IS A TEST.
    fs.readFile('src/style.css', (err, css) => {
      postcss([tailwindcss, autoprefixer]).process(css, {from:undefined}).then(result => {
        let style = result.css;
//        console.log("render style=" + style);
        const err = [];
        const val = {
          data: this.data,
          style: style,
          errors: [],
        };
        resume(err, val);
      });
    });
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

